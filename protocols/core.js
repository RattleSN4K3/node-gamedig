import { EventEmitter } from 'node:events'
import * as net from 'node:net'
import got from 'got'
import Reader from '../lib/reader.js'
import { debugDump } from '../lib/HexUtil.js'
import Logger from '../lib/Logger.js'
import DnsResolver from '../lib/DnsResolver.js'
import { Results } from '../lib/Results.js'
import Promises from '../lib/Promises.js'

let uid = 0

export default class Core extends EventEmitter {
  constructor () {
    super()
    this.encoding = 'utf8'
    this.byteorder = 'le'
    this.delimiter = '\0'
    this.srvRecord = null
    this.abortedPromise = null
    this.enabledBroadcast = null
    this.logger = new Logger()
    this.dnsResolver = new DnsResolver(this.logger)

    // Sent to us by QueryRunner
    this.options = null
    /** @type GlobalUdpSocket */
    this.udpSocket = null
    this.shortestRTT = 0
    this.usedTcp = false
  }

  // define as field to prevent overriding
  // TODO: Consider adjusting the function being a field ("setupOptions = func") for not allowing overloading
  setupOptions (options, userOptions = undefined) {
    // safety check
    userOptions ||= {}

    // retrieve default options from subclasses
    const defaultOptions = {}
    this.getOptionsDefaults(defaultOptions)
    Object.keys(defaultOptions).forEach(key => {
      options[key] ??= defaultOptions[key]
    })

    // retrieve overriding options from subclasses
    const overrideOptions = {}
    this.getOptionsOverrides(overrideOptions)
    Object.keys(overrideOptions).forEach(key => {
      // prioritize user options, allow null parameters
      options[key] = userOptions[key] ?? overrideOptions[key] ?? options[key]
    })

    return options
  }

  /**
   * Update options. Can be used to add/change/override/remove protocol-specific options
   */
  updateOptionsDefaults () { }
  /**
   * Build/add list of options to override. Can be used to override protocol options
   */
  getOptionsDefaults (outOptions) { }
  /**
   * Build/add list of options to override. Can be used to override protocol options
   */
  getOptionsOverrides (outOptions) { }

  // Runs a single attempt with a timeout and cleans up afterward
  async runOnceSafe () {
    const { debug, attemptTimeout } = this.options

    if (debug) {
      this.logger.debugEnabled = true
    }
    this.logger.prefix = 'Q#' + (uid++)

    this.logger.debug('Starting')
    this.logger.debug('Protocol: ' + this.constructor.name)
    this.logger.debug('Options:', this.options)

    let abortCall = null
    this.abortedPromise = new Promise((_resolve, reject) => {
      abortCall = () => reject(new Error('Query is finished -- cancelling outstanding promises'))
    }).catch(() => {
      // Make sure that if this promise isn't attached to, it doesn't throw an unhandled promise rejection
    })

    let timeout
    try {
      const promise = this.runOnce()
      timeout = Promises.createTimeout(attemptTimeout, 'Attempt')
      const result = await Promise.race([promise, timeout])
      this.logger.debug('Query was successful')
      return result
    } catch (e) {
      this.logger.debug('Query failed with error', e)
      throw e
    } finally {
      timeout?.cancel()
      try {
        abortCall?.()
      } catch (e) {
        this.logger.debug('Error during abort cleanup: ' + e.stack)
      }
    }
  }

  async runOnce () {
    const { options, dnsResolver } = this

    if (('host' in options) && !('address' in options)) {
      const resolved = await dnsResolver.resolve(options.host, options.ipFamily, this.srvRecord)
      options.address = resolved.address
      options.port ||= resolved.port
    }

    // create initial state, run protocol and let specifiic protocol implementations handle populdate a given state
    const initialState = this.prepareRun()
    await this.run(initialState)
    this.finishRun(initialState)

    return initialState
  }

  /** main process executing the query */
  async run (/** Results */ state) {}

  /** Setup/prepare run, will provide how to build up a state. Used in subclasses */
  prepareRun () { return this.createState() }

  /** finish run, will provide how to generate final state. Used in subclasses */
  finishRun (state) { this.populateState(state) }

  /**
   * Creates a default state object
   * @returns {Results} A state for populate queried values into
   */
  createState () {
    return new Results()
  }

  /**
   * Populates and sets up the given state with with basic properties based on given raw values
   * @param {Results} state The initial created state for returning as query result
   */
  populateState (state) {
    const { options } = this
    state.queryPort = options.port

    // because lots of servers prefix with spaces to try to appear first
    state.name = (state.name || '').trim()
    state.connect = state.connect || `${state.gameHost || options.host || options.address}:${state.gamePort || options.port}`
    state.ping = this.shortestRTT

    delete state.gameHost
    delete state.gamePort

    this.logger.debug(log => {
      log('Size of players array:', state.players.length)
      log('Size of bots array:', state.bots.length)
    })
  }

  /** Param can be a time in ms, or a promise (which will be timed) */
  registerRtt (param) {
    if (param instanceof Promise) {
      const start = Date.now()
      param.then(() => {
        this.registerRtt(Date.now() - start)
      }).catch((_) => {})
    } else {
      this.logger.debug('Registered RTT: ' + param + 'ms')
      if (this.shortestRTT === 0 || param < this.shortestRTT) {
        this.shortestRTT = param
      }
    }
  }

  // utils
  /** @returns {Reader} */
  reader (buffer) {
    return new Reader(this, buffer)
  }

  translate (obj, trans) {
    for (const from of Object.keys(trans)) {
      const to = trans[from]
      if (from in obj) {
        if (to) obj[to] = obj[from]
        delete obj[from]
      }
    }
  }

  trueTest (str) {
    if (typeof str === 'boolean') return str
    if (typeof str === 'number') return str !== 0
    if (typeof str === 'string') {
      if (str.toLowerCase() === 'true') return true
      if (str.toLowerCase() === 'yes') return true
      if (str === '1') return true
    }
    return false
  }

  assertValidPort (port) {
    if (!port) {
      throw new Error('Could not determine port to query. Did you provide a port?')
    }
    if (port < 1 || port > 65535) {
      throw new Error('Invalid tcp/ip port: ' + port)
    }
  }

  /**
     * @template T
     * @param {function(NodeJS.Socket):Promise<T>} fn
     * @param {number=} port
     * @returns {Promise<T>}
     */
  async withTcp (fn, port) {
    this.usedTcp = true
    const { options, logger } = this
    const address = this.options.address
    port ??= options.port

    this.assertValidPort(port)

    let socket, connectionTimeout
    try {
      socket = net.connect(port, address)
      socket.setNoDelay(true)

      // Prevent unhandled 'error' events from dumping straight to console
      socket.on('error', () => {})

      logger.debug(log => {
        logger.debug(address + ':' + port + ' TCP Connecting')
        const writeHook = socket.write
        socket.write = (...args) => {
          log(address + ':' + port + ' TCP-->')
          log(debugDump(args[0]))
          writeHook.apply(socket, args)
        }

        socket.on('error', e => log('TCP Error:', e))
        socket.on('close', () => log('TCP Closed'))
        socket.on('data', (data) => {
          log(`${address}:${port} <--TCP`)
          log(data)
        })
        socket.on('ready', () => log(`${address}:${port} TCP Connected`))
      })

      const connectionPromise = new Promise((resolve, reject) => {
        socket.on('ready', resolve)
        socket.on('close', () => reject(new Error('TCP Connection Refused')))
      })
      this.registerRtt(connectionPromise)
      connectionTimeout = Promises.createTimeout(this.options.socketTimeout, 'TCP Opening')
      await Promise.race([
        connectionPromise,
        connectionTimeout,
        this.abortedPromise
      ])
      return await fn(socket)
    } finally {
      socket?.destroy()
      connectionTimeout?.cancel()
    }
  }

  /**
     * @template T
     * @param {NodeJS.Socket} socket
     * @param {Buffer|string} buffer
     * @param {function(Buffer):T} ondata
     * @returns Promise<T>
     */
  async tcpSend (socket, buffer, ondata) {
    let timeout
    try {
      const promise = new Promise((resolve, _reject) => {
        let received = Buffer.from([])
        const onData = (data) => {
          received = Buffer.concat([received, data])
          const result = ondata(received)
          if (result !== undefined) {
            socket.removeListener('data', onData)
            resolve(result)
          }
        }
        socket.on('data', onData)
        socket.write(buffer)
      })
      timeout = Promises.createTimeout(this.options.socketTimeout, 'TCP')
      return await Promise.race([promise, timeout, this.abortedPromise])
    } finally {
      timeout?.cancel()
    }
  }

  /**
     * @param {Buffer|string} buffer
     * @param {function(Buffer):T=} onPacket
     * @param {(function():T)=} onTimeout
     * @returns Promise<T>
     * @template T
     */
  async udpSend (buffer, onPacket, onTimeout) {
    const { address, port, debug, socketTimeout } = this.options
    this.assertValidPort(port)

    if (typeof buffer === 'string') buffer = Buffer.from(buffer, 'binary')

    const socket = this.udpSocket
    await socket.send(buffer, address, port, this.options.debug, this.enabledBroadcast)

    if (!onPacket && !onTimeout) {
      return null
    }

    let socketCallback
    let timeout
    const results = []
    const isBroadcast = !!this.enabledBroadcast && (address?.includes('255') ?? false)

    try {
      const promise = new Promise((resolve, reject) => {
        const start = Date.now()
        socketCallback = (fromAddress, fromPort, buffer) => {
          try {
            // in case of a configured broadcast address, the received response might come from the same "address"
            // e.g. responses for UE3 lan queries might be sent as broadcast therefore the address can be the same
            if ((fromAddress !== address && !isBroadcast) || fromPort !== port) return

            this.registerRtt(Date.now() - start)
            const result = onPacket(buffer)
            if (result !== undefined) {
              // broadcasts may expect multiple respones, store packet and keep waiting for additional responses
              results.push(result)
              if (!isBroadcast) {
                this.logger.debug('UDP send finished by callback')
                resolve(result)
              }
            }
          } catch (e) {
            reject(e)
          }
        }
        socket.addCallback(socketCallback, debug)
      })
      timeout = Promises.createTimeout(socketTimeout, 'UDP')
      const wrappedTimeout = Promise.resolve(timeout).catch((e) => {
        // in case of broadcast query and received responses, don't return as timeout-error.
        // consider the timeout out with at least one received response as valid
        if (isBroadcast && !!results.length) {
          return results
        }

        this.logger.debug('UDP timeout detected')
        if (onTimeout) {
          const result = onTimeout()
          if (result !== undefined) {
            this.logger.debug('UDP timeout resolved by callback')
            return result
          }
        }
        throw e
      })

      return await Promise.race([promise, wrappedTimeout, this.abortedPromise])
    } finally {
      timeout?.cancel()
      socketCallback && socket.removeCallback(socketCallback)
    }
  }

  async tcpPing () {
    // This will give a much more accurate RTT than using the rtt of an http request.
    if (!this.usedTcp) {
      await this.withTcp(() => {})
    }
  }

  async request (params) {
    await this.tcpPing()

    let requestPromise
    try {
      requestPromise = got({
        ...params,
        timeout: {
          request: this.options.socketTimeout
        }
      })
      this.logger.debug(log => {
        log(() => params.url + ' HTTP-->')
        requestPromise
          .then((response) => log(params.url + ' <--HTTP ' + response.statusCode))
          .catch(() => {})
      })
      const wrappedPromise = requestPromise.then(response => {
        if (response.statusCode !== 200) throw new Error('Bad status code: ' + response.statusCode)
        return response.body
      })
      return await Promise.race([wrappedPromise, this.abortedPromise])
    } finally {
      requestPromise?.cancel()
    }
  }
}

/**
 * Implements the core LAN protocol
 */
export class CoreLAN extends Core {
  constructor () {
    super()
    this.enabledBroadcast = false
    this.outputAsArray = null
  }

  /** @override */
  getOptionsDefaults (outOptions) {
    super.getOptionsDefaults(outOptions)
    const defaults = {
      address: '255.255.255.255',
      givenPortOnly: true
    }
    Object.assign(outOptions, defaults)
  }

  /** @override */
  updateOptionsDefaults () {
    super.updateOptionsDefaults()

    // update enabledBroadcast value manually based on provided address
    this.enabledBroadcast = this.options.address?.includes('255') ?? this.enabledBroadcast
  }
}
