import * as protocols from '../protocols/index.js'

export const getProtocol = (protocolId, subsystem = undefined) => {
  const protolSubsystemSuffix = subsystem ? `$${subsystem}` : ''
  const protocolName = `${protocolId}${protolSubsystemSuffix}`

  // build array of possible names to counteract naming conventions
  const possibleNames = [
    protocolName,
    protocolName.toLowerCase(),
    protocolName.toUpperCase()
  ]
  // additional names to check
  possibleNames.push(...[
    ...possibleNames.map(x => x.replace('$', '_')),
    ...possibleNames.map(x => x.replace('$', ':')),
    ...possibleNames.map(x => x.replace('$', '.')),
    ...possibleNames.map(x => x.replace('$', ''))
  ])

  let className
  while (possibleNames.length) {
    className = possibleNames.shift()
    if (className in protocols) break
    className = null
  }

  if (!className) {
    const subsystemInfo = (subsystem ? ` using subsystem '${subsystem}'` : '')
    const typeInfo = ` for type '${protocolId}'`
    throw Error(`Protocol definition file missing${subsystemInfo}${typeInfo}: ${protocolName}`)
  }

  // instantiate protocol (may be subsystem-protocol)
  const _classType = protocols[className]
  const classInstance = new _classType()
  return classInstance
}
