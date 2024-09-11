import Core, { CoreLAN } from './core.js'

export const PlatformType = {
  Unknown: 0,
  Windows: 1,
  Xenon: 4,
  PS3: 8,
  Linux: 16,
  MacOSX: 32
}

/** The types of advertisement of settings to use */
// eslint-disable-next-line no-unused-vars
const EOnlineDataAdvertisementType = {
  /** Don't advertise via the online service or QoS data */
  ODAT_DontAdvertise: 0,
  /** Advertise via the online service only */
  ODAT_OnlineService: 1,
  /** Advertise via the QoS data only */
  ODAT_QoS: 2
}

/** The supported data types that can be stored in the union */
const ESettingsDataType = {
  /** Means the data in the OnlineData value fields should be ignored */
  SDT_Empty: 0,
  /** 32 bit integer goes in Value1 only */
  SDT_Int32: 1,
  /** 64 bit integer stored in both value fields */
  SDT_Int64: 2,
  /** Double (8 byte) stored in both value fields */
  SDT_Double: 3,
  /** Unicode string pointer in Value2 with length in Value1 */
  SDT_String: 4,
  /** Float (4 byte) stored in Value1 fields */
  SDT_Float: 5,
  /** Binary data with count in Value1 and pointer in Value2 */
  SDT_Blob: 6,
  /** Date/time structure. Date in Value1 and time Value2 */
  SDT_DateTime: 7
}

// UT3
const TRANSLATE_MAP = {
  mapname: false,
  p1073741825: 'map',
  p1073741826: 'gametype',
  p1073741827: 'servername',
  p1073741828: 'custom_mutators',
  gamemode: 'joininprogress',
  s32779: 'gamemode',
  s0: 'bot_skill',
  s6: 'pure_server',
  s7: 'password',
  s8: 'vs_bots',
  s10: 'force_respawn',
  p268435704: 'frag_limit',
  p268435705: 'time_limit',
  p268435703: 'numbots',
  p268435717: 'stock_mutators',
  p1073741829: 'stock_mutators'
}

/**
 * @typedef {Object|Uint8Array} UniqueNetId Struct that holds a transient, unique identifier for a player
 * @property {number[8]} Uid - The id used by the network to uniquely identify a player
 */

/**
 * @typedef {Object} OnlineGameSettings Holds the base configuration settings for an online game
 * @property {number} NumPublicConnections - The number of publicly available connections advertised
 * @property {number} NumPrivateConnections - The number of connections that are private (invite/password) only
 * @property {number} NumOpenPublicConnections - The number of publicly available connections that are available
 * @property {number} NumOpenPrivateConnections - The number of private connections that are available
 *
 * @property {boolean} bShouldAdvertise - Whether this match is publicly advertised on the online service
 * @property {boolean} bIsLanMatch - This game will be lan only and not be visible to external players
 * @property {boolean} bUsesStats - Whether the match should gather stats or not
 * @property {boolean} bAllowJoinInProgress - Whether joining in progress is allowed or not
 * @property {boolean} bAllowInvites - Whether the match allows invitations for this session or not
 * @property {boolean} bUsesPresence - Whether to display user presence information or not
 * @property {boolean} bAllowJoinViaPresence - Whether joining via player presence is allowed or not
 * @property {boolean} bUsesArbitration - Whether the session should use arbitration or not
 *
 * @property {string} OwningPlayerName - The owner of the game
 * @property {UniqueNetId} OwningPlayerId - The unique net id of the player that owns this game
*/

/**
 * Structure used to represent a string setting that has a restricted and
 * localized set of value strings. For instance:
 *
 * GameType (id) Values = (0) Death Match, (1) Team Death Match, etc.
 *
 * This allows strings to be transmitted using only 8 bytes and each string
 * is correct for the destination language irrespective of sender's language
 * @typedef {Object} LocalizedStringSetting
 * @property {int} Id - The unique identifier for this localized string
 * @property {int} ValueIndex - The unique identifier for this localized string
 * @property EOnlineDataAdvertisementType AdvertisementType - How this setting should be presented to requesting clients: online or QoS
 */

/**
 * Structure to hold arbitrary data of a given type.
 * @typedef {Object} SettingsData
 * @property ESettingsDataType Type - Enum (byte) indicating the type of data held in the value fields
 * @property {int} Value1 - This is a union of value types and should never be used in script
 * @property {int} Value2 - This is a union of value types and should never be used in script. NOTE: It's declared as a pointer for 64bit systems
 * @property {*} ValueRaw - A raw value of the setting
 */

/**
 * Structure used to hold non-localized string data. Properties can be arbitrary types.
 * @typedef {Object} SettingsProperty
 * @property {int} PropertyId - The unique id for this property
 * @property {SettingsData} Data - The data stored for the type
 * @property EOnlineDataAdvertisementType AdvertisementType - How this setting should be presented to requesting clients: online or QoS
 */

/**
 * Holds the base properties for the quried data
 * @type {OnlineGameSettings}
 */
const EmptyPayloadData = {
  NumOpenPublicConnections: 0,
  NumOpenPrivateConnections: 0,
  NumPublicConnections: 0,
  NumPrivateConnections: 0,

  bShouldAdvertise: undefined,
  bIsLanMatch: undefined,
  bUsesStats: undefined,
  bAllowJoinInProgress: undefined,
  bAllowInvites: undefined,
  bUsesPresence: undefined,
  bAllowJoinViaPresence: undefined,
  bUsesArbitration: undefined,
  bAntiCheatProtected: undefined, // in newer packets

  OwningPlayerName: undefined,
  OwningPlayerId: undefined
}

/** The size of the header for validation */
const LAN_BEACON_PACKET_HEADER_SIZE = 16

// Offsets for various fields
/* eslint-disable */
const LAN_BEACON_VER_OFFSET = 0
const LAN_BEACON_PLATFORM_OFFSET = 1
const LAN_BEACON_GAMEID_OFFSET = 2
const LAN_BEACON_PACKETTYPE1_OFFSET = 6
const LAN_BEACON_PACKETTYPE2_OFFSET = 7
const LAN_BEACON_NONCE_OFFSET = 8
/* eslint-enable */

function parseNumber (str) {
  const number = +str
  return number
}

/**
 * Implements the protocol for UnrealEngine3 based games (UE3)
 */
export default class unrealengine3 extends Core {
  /**
   * Translates raw properties into known properties
   * @param {Object} state Current state data including raw values/properties
   */
  static staticPopulateProperties (state) {
    const split = (a) => {
      let s = a.split('\x1c')
      s = s.filter((e) => { return e })
      return s
    }
    if ('custom_mutators' in state.raw) state.raw.custom_mutators = split(state.raw.custom_mutators)
    if ('stock_mutators' in state.raw) state.raw.stock_mutators = split(state.raw.stock_mutators)
    if ('map' in state.raw) state.map = state.raw.map

    if ('hostname' in state.raw) state.name = state.raw.hostname
    else if ('servername' in state.raw) state.name = state.raw.servername
    if ('mapname' in state.raw) state.map = state.raw.mapname
    if (state.raw.password === '1') state.password = true
    if ('maxplayers' in state.raw) state.maxplayers = parseInt(state.raw.maxplayers)
    if ('hostport' in state.raw) state.gamePort = parseInt(state.raw.hostport)
    if ('gamever' in state.raw) state.version = state.raw.gamever
  }

  /**
   * Generates a random client
   * @param {number} length The length of the random Id
   * @returns a length-byte-sized unique client Id
   */
  static generateNonce (length) {
    const nonce = new Uint8Array(length)
    for (let i = 0; i < length; i++) {
      nonce[i] = Math.floor(Math.random() * 256)
    }
    return nonce
  }

  /**
   * Parses/reads a UE3 string at the current position of the reader
   * @param {*} reader the reader to read data from
   * @returns a string of unlimited size
   */
  static readString (reader) {
    const stringLen = reader.uint(4)
    const stringContent = reader.string(stringLen)
    return stringContent
  }

  /**
   * Parses/reads a UE3 string at the current position of the reader
   * @param {*} reader the reader to read data from
   * @returns {UniqueNetId} unique identifier
   */
  static readUniqueNetId (reader) {
    const Uids = reader.part(8)
    const netId = new Uint8Array(Uids)
    return netId
  }

  /**
   * Parses/reads a UE3 localized setting at the current position of the reader
   * @param {*} reader the reader to read data from
   * @returns {LocalizedStringSetting} localized setting
   */
  static readLocalizedStringSetting (reader) {
    const fId = reader.int(4)
    const fValueIndex = reader.int(4)
    const fAdvertisementType = reader.uint(1)
    return {
      Id: fId,
      ValueIndex: fValueIndex,
      AdvertisementType: fAdvertisementType
    }
  }

  /**
   * Parses/reads a UE3 non-localized property setting at the current position of the reader
   * @param {*} reader the reader to read data from
   * @returns {SettingsProperty} non-localized property setting
   */
  static readSettingsProperty (reader) {
    const fPropertyId = reader.uint(4)
    const fData = unrealengine3.readSettingsData(reader)
    const fAdvertisementType = reader.uint(1)
    // build object
    return {
      PropertyId: fPropertyId,
      Data: fData,
      AdvertisementType: fAdvertisementType
    }
  }

  /**
   * Parses/reads a UE3 non-localized settings data at the current position of the reader
   * @param {*} reader the reader to read data from
   * @returns {SettingsData} non-localized settings data
   */
  static readSettingsData (reader) {
    let val
    const data = {
      Type: ESettingsDataType.SDT_Empty,
      ValueRaw: 0,
      Value1: 0,
      Value2: 0,

      cleanup () {
        // Strings are copied so make sure to delete them
        if (this.Type === ESettingsDataType.SDT_String) {
          delete this.Value2
        } else if (this.Type === ESettingsDataType.SDT_Blob) {
          delete this.Value2
        }
        this.Type = ESettingsDataType.SDT_Empty
        this.Value1 = 0
        this.Value2 = null
        this.ValueRaw = this.Value1
      },

      setDataDouble (InData) {
        this.cleanup()

        // Convert DOUBLE to a 64-bit integer representation
        const buffer = new ArrayBuffer(8)
        const view = new DataView(buffer)
        view.setFloat64(0, InData, true)

        // Get high/low parts
        const FullData = view.getBigUint64(0, true)
        this.Value1 = Number((FullData >> 32n) & 0xFFFFFFFFn)
        this.Value2 = Number(FullData & 0xFFFFFFFFn)
      },

      setDataFloat (InData) {
        this.cleanup()

        // Convert FLOAT to a 32-bit integer representation
        const buffer = new ArrayBuffer(4)
        const view = new DataView(buffer)
        view.setFloat32(0, InData, true)

        // Get the 32-bit integer representation
        this.Value1 = view.getInt32(0, true)
      }
    }

    // Read the type
    const type = reader.uint(1)
    data.Type = type

    // Now read the held data
    switch (type) {
      case ESettingsDataType.SDT_Float:
        val = reader.float()
        data.setDataFloat(val)
        break
      case ESettingsDataType.SDT_Int32:
        val = reader.int(4)
        // Data.SetData(valInt)
        break
      case ESettingsDataType.SDT_Int64:
        val = reader.int(8)
        // todo Data.Set...
        break
      case ESettingsDataType.SDT_Double:
        val = reader.double()
        data.SetData(val)
        break
      case ESettingsDataType.SDT_Blob:
        // TODO: Add parsing blob data
        throw new Error('Reading blob data is currently not supported')
      case ESettingsDataType.SDT_String:
        val = unrealengine3.readString(reader)
        // Data.SetData(Val);
        break
    }
    data.ValueRaw = val
    return data
  }
}

/**
 * Implements the LAN protocol for UnrealEngine3 based games (UE3)
 */
export class lan extends CoreLAN {
  constructor () {
    super()
    this.sessionId = 1
    this.encoding = 'latin1'
    this.byteorder = 'be'
    this.useOnlySingleSplit = false
    this.isJc2mp = false

    this.packetVersion = 1
    this.gameUniqueId = 0x00000000
    this.platform = PlatformType.Windows

    this.packetTypesQuery1 = 'S'
    this.packetTypesQuery2 = 'Q'
    this.packetTypesResponse1 = 'S'
    this.packetTypesResponse2 = 'R'

    // generate unique client id
    this.clientNonce = unrealengine3.generateNonce(8)
  }

  /** @override */
  getOptionsOverrides (outOptions) {
    super.getOptionsOverrides(outOptions)
    const defaults = {
      port: 14001
    }
    Object.assign(outOptions, defaults)
  }

  /** @override */
  updateOptionsDefaults () {
    super.updateOptionsDefaults()

    // update constructor values from options manually
    const { packetVersion, lanGameUniqueId, lanPacketPlatformMask } = this.options
    this.packetVersion = packetVersion ?? this.packetVersion
    this.gameUniqueId = lanGameUniqueId ? parseNumber(lanGameUniqueId) : this.gameUniqueId
    this.platform = lanPacketPlatformMask ?? this.platform
  }

  async run (state) {
    const { outputAsArray = false } = this.options

    // send single request and handle multi response
    const buffer = await this.sendPacket(this.packetVersion, this.gameUniqueId, false, false)
    const bufferList = Array.isArray(buffer) ? buffer : [buffer]
    const packets = bufferList.map((packet) => this.parsePacket(packet))

    // build response objects using Core logic's population
    const resultStates = packets.map(packet => {
      const packetState = { ...packet }
      this.populateState(packetState)
      return packetState
    })

    // either return as array, or linked list (defaults to linked list)
    if (outputAsArray && Array.isArray(state)) {
      state.push(...resultStates)
    } else {
      const firstPacket = resultStates.length ? { ...resultStates[0], $next: resultStates.slice(1).reduceRight((next, value) => ({ ...value, $next: next }), null) } : null
      Object.assign(state, firstPacket)
    }
  }

  /** @override */
  prepareRun () {
    // initially create an array as response as broadcast may result into multiple respones
    const { outputAsArray = false } = this.options
    return outputAsArray ? [] : {}
  }

  /** @override */
  finishRun (state) {
    // do nothing, state is already populated
  }

  /**
   * Sends initial query packet to receive a server response from any machine in the current subnet
   * @param {byte} type Packet version
   * @param {*} gameUniqueId Game Id typically unique for every game, some games share the same id (see LanGameUniqueId)
   * @returns list of valid responses
   */
  async sendPacket (type, gameUniqueId) {
    const b = Buffer.alloc(16)
    let offset = 0
    offset = b.writeUint8(type, offset)
    offset = b.writeUint8(this.platform, offset)
    offset = b.writeInt32BE(gameUniqueId, offset)
    offset += b.write(this.packetTypesQuery1, offset, 1, 'ascii')
    offset += b.write(this.packetTypesQuery2, offset, 1, 'ascii')
    Buffer.from(this.clientNonce.buffer).copy(b, offset); offset += this.clientNonce.length

    return await this.udpSend(b, (buffer) => {
      if (this.isValidLanResponsePacket(buffer)) {
        return buffer
      }
    })
  }

  /**
   * Parses the packet from given buffer
   * @param {Buffer} buffer the current buffer to parse the packet data from
   * @returns Parsed and translated server response object
   */
  parsePacket (buffer) {
    // create default empty state
    const state = this.createState()
    Object.assign(state, EmptyPayloadData)

    const fullReader = this.reader(buffer)
    const packetVersion = fullReader.uint(1)
    fullReader.skip(LAN_BEACON_PACKET_HEADER_SIZE - 1)
    const payload = fullReader.rest()

    const reader = this.reader(payload)

    // read session info
    const ip = reader.uint(4)
    const port = reader.uint(4)
    const ipStr = (ip >> 24 & 255) + '.' + (ip >> 16 & 255) + '.' + (ip >> 8 & 255) + '.' + (ip & 255)
    state.raw.host = ipStr + ':' + port
    state.raw.hostaddress = ipStr
    state.raw.hostport = port

    state.raw.NumOpenPublicConnections = reader.uint(4)
    state.raw.NumOpenPrivateConnections = reader.uint(4)
    state.raw.NumPublicConnections = reader.uint(4)
    state.raw.NumPrivateConnections = reader.uint(4)

    // new packets seem to have an additional bool/byte field,
    // flags generally consist of 8 1-byte/bool values
    state.raw.bShouldAdvertise = reader.uint(1) === 1
    state.raw.bIsLanMatch = reader.uint(1) === 1
    state.raw.bUsesStats = reader.uint(1) === 1
    state.raw.bAllowJoinInProgress = reader.uint(1) === 1
    state.raw.bAllowInvites = reader.uint(1) === 1
    state.raw.bUsesPresence = reader.uint(1) === 1
    state.raw.bAllowJoinViaPresence = reader.uint(1) === 1
    state.raw.bUsesArbitration = reader.uint(1) === 1
    if (packetVersion >= 5) {
      // read additional flag for newer packets
      state.raw.bAntiCheatProtected = reader.uint(1) === 1
    }

    // Read the owning player id
    state.raw.OwningPlayerId = unrealengine3.readUniqueNetId(reader)
    // Read the owning player name
    state.raw.OwningPlayerName = unrealengine3.readString(reader)

    // properties from the advertised settings
    const localizedProperties = []
    state.raw.LocalizedProperties = localizedProperties
    const NumAdvertisedProperties = reader.uint(4)
    if (reader.remaining() > 0) { // check if overflown
      for (let index = 0; index < NumAdvertisedProperties && reader.remaining() > 0; index++) {
        // parse and add property to array
        const property = unrealengine3.readLocalizedStringSetting(reader)
        localizedProperties.push(property)
      }
    }

    // Now read the contexts and properties from the settings class
    const properties = []
    state.raw.Properties = properties
    const NumProperties = reader.uint(4)
    if (reader.remaining() > 0) { // check if overflown
      for (let index = 0; index < NumProperties && reader.remaining() > 0; index++) {
        // parse and add property to array
        const property = unrealengine3.readSettingsProperty(reader)
        properties.push(property)
      }
    }

    // if data could not be processed properly, meaning some specific properties cannot be read
    // the current position might exceed the buffer, remaining() will be negative for such case
    if (reader.remaining() < 0) {
      // clear array
      properties.length = 0
      localizedProperties.length = 0
    }

    // Turn all that raw state into something useful
    this.populateProperties(state)
    // DEBUG: delete state.raw

    return state
  }

  /**
   * Translates raw properties into known properties
   * @param {Object} state Parsed data
   */
  populateProperties (state) {
    // pass raw data
    state.gameHost = state.raw.hostaddress
    state.gamePort = state.raw.hostport

    state.name = state.raw.OwningPlayerName
    state.maxplayers = state.raw.NumOpenPublicConnections

    state.NumOpenPublicConnections = state.raw.NumOpenPublicConnections
    state.NumOpenPrivateConnections = state.raw.NumOpenPrivateConnections
    state.NumPublicConnections = state.raw.NumPublicConnections
    state.NumPrivateConnections = state.raw.NumPrivateConnections

    state.bShouldAdvertise = state.raw.bShouldAdvertise
    state.bIsLanMatch = state.raw.bIsLanMatch
    state.bUsesStats = state.raw.bUsesStats
    state.bAllowJoinInProgress = state.raw.bAllowJoinInProgress
    state.bAllowInvites = state.raw.bAllowInvites
    state.bUsesPresence = state.raw.bUsesPresence
    state.bAllowJoinViaPresence = state.raw.bAllowJoinViaPresence
    state.bUsesArbitration = state.raw.bUsesArbitration
    state.bAntiCheatProtected = state.raw.bAntiCheatProtected

    state.OwningPlayerId = Buffer.from(state.raw.OwningPlayerId).toString('hex')
    state.OwningPlayerName = state.raw.OwningPlayerName

    // manually transform serialized properties into known structure
    const props = state.raw.Properties?.reduce((acc, prop) => {
      acc[`p${prop.PropertyId}`] = prop.Data.ValueRaw
      return acc
    }, {})

    // manually transform serialized localized properties into known structure
    const propsLocalized = state.raw.LocalizedProperties?.reduce((acc, prop) => {
      acc[`s${prop.Id}`] = prop.ValueIndex // TOOD: find actual value
      return acc
    }, {})

    // translate properties
    state.raw = { ...state.raw, ...props, ...propsLocalized }
    this.translate(state.raw, TRANSLATE_MAP)

    // Turn all that raw state into something useful
    unrealengine3.staticPopulateProperties(state)

    if (!this.debug) {
      delete state.raw.LocalizedProperties
      delete state.raw.Properties
    }
  }

  /**
   * Checks if the given packet is a valid response packet for the current client
   * @param {Buffer} buffer the current buffer to parse the packet data from
   * @returns true if the packet is valid and can be parsed
   */
  isValidLanResponsePacket (buffer) {
    let bIsValid = false
    const bufferLength = (buffer ? buffer.length : null) ?? 0

    // Serialize out the data if the packet is the right size
    if (bufferLength > LAN_BEACON_PACKET_HEADER_SIZE) {
      const reader = this.reader(buffer)

      // version mismatch?
      const iVersion = reader.uint(1)
      if (iVersion === this.packetVersion) {
        // same platform?
        const iPlatform = reader.uint(1)
        if (iPlatform === this.platform) {
          // is response from same game?
          const iGameId = reader.int(4)
          if (iGameId === this.gameUniqueId) {
            const cServerResponse1 = reader.string(1)
            const cServerResponse2 = reader.string(1)
            if (cServerResponse1 === this.packetTypesResponse1 && cServerResponse2 === this.packetTypesResponse2) {
              // is response from same client?
              const nonceRaw = reader.part(8)
              const nonceHex = nonceRaw.toString('hex')
              const clientNonceHex = Buffer.from(this.clientNonce).toString('hex')
              bIsValid = (nonceHex === clientNonceHex)
            }
          }
        }
      }
    }
    return bIsValid
  }
}
