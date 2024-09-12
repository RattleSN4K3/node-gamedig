import { games } from './games.js'

export const lookup = (options) => {
  const { type, subsystem } = options

  if (!type) { throw Error('No game specified') }

  if (type.startsWith('protocol-')) {
    return {
      protocol: type.substring(9),
      protocolSubsystem: subsystem
    }
  }

  let game = games[type]

  if (options.checkOldIDs) {
    Object.keys(games).forEach((id) => {
      if (games[id]?.extra?.old_id === type) {
        game = games[id]
      }
    })
  }

  if (!game) { throw Error('Invalid game: ' + type) }

  // get game options, override with defined subsystem options
  const subsystemOptions = (options.subsystem !== undefined && game.subsystems?.includes(options.subsystem)) ? game.subsystemsOptions[options.subsystem] : {}
  const gameOptions = { ...game.options, ...subsystemOptions }
  return gameOptions
}
