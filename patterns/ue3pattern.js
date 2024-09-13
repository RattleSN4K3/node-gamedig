/** The types of advertisement of settings to use */
// eslint-disable-next-line no-unused-vars
export const EOnlineDataAdvertisementType = {
  /** Don't advertise via the online service or QoS data */
  ODAT_DontAdvertise: 0,
  /** Advertise via the online service only */
  ODAT_OnlineService: 1,
  /** Advertise via the QoS data only */
  ODAT_QoS: 2
}

/** The supported data types that can be stored in the union */
export const ESettingsDataType = {
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

export const SettingsOptions = {
  // Queries
  QUERY: {
    QUERY_DM: 0,
    QUERY_TDM: 1,
    QUERY_CTF: 2,
    QUERY_VCTF: 3,
    QUERY_WAR: 4,
    QUERY_DUEL: 5,
    QUERY_CAMPAIGN: 6
  },

  // Title defined leaderboards
  STATS_VIEW: {
    STATS_VIEW_DM_PLAYER_ALLTIME: 1,
    STATS_VIEW_DM_RANKED_ALLTIME: 2,
    STATS_VIEW_DM_WEAPONS_ALLTIME: 3,
    STATS_VIEW_DM_VEHICLES_ALLTIME: 4,
    STATS_VIEW_DM_VEHICLEWEAPONS_ALLTIME: 5,
    STATS_VIEW_DM_VEHICLES_RANKED_ALLTIME: 6,
    STATS_VIEW_DM_VEHICLEWEAPONS_RANKED_ALLTIME: 7,
    STATS_VIEW_DM_WEAPONS_RANKED_ALLTIME: 8
  },

  // Game modes
  CONTEXT_GAME_MODE: {
    CONTEXT_GAME_MODE_DM: 0,
    CONTEXT_GAME_MODE_CTF: 1,
    CONTEXT_GAME_MODE_WAR: 2,
    CONTEXT_GAME_MODE_VCTF: 3,
    CONTEXT_GAME_MODE_TDM: 4,
    CONTEXT_GAME_MODE_DUEL: 5,
    CONTEXT_GAME_MODE_CUSTOM: 6,
    CONTEXT_GAME_MODE_CAMPAIGN: 7,
    CONTEXT_GAME_MODE_GREED: 8,
    CONTEXT_GAME_MODE_BETRAYAL: 9
  },

  // Maps that can be displayed in server browser, presence, etc.
  CONTEXT_MAPNAME: {
    CONTEXT_MAPNAME_CUSTOM: 0,
    CONTEXT_MAPNAME_CORET: 1,
    CONTEXT_MAPNAME_HYDROSIS: 2,
    CONTEXT_MAPNAME_OMICRON_DAWN: 3,
    CONTEXT_MAPNAME_REFLECTION: 4,
    CONTEXT_MAPNAME_STRIDENT: 5,
    CONTEXT_MAPNAME_VERTEBRAE: 6,
    CONTEXT_MAPNAME_ARSENAL: 7,
    CONTEXT_MAPNAME_BIOHAZARD: 8,
    CONTEXT_MAPNAME_CARBON_FIRE: 9,
    CONTEXT_MAPNAME_DECK: 10,
    CONTEXT_MAPNAME_DEFIANCE: 11,
    CONTEXT_MAPNAME_DEIMOS: 12,
    CONTEXT_MAPNAME_DIESEL: 13,
    CONTEXT_MAPNAME_FEARLESS: 14,
    CONTEXT_MAPNAME_GATEWAY: 15,
    CONTEXT_MAPNAME_HEAT_RAY: 16,
    CONTEXT_MAPNAME_RISING_SUN: 17,
    CONTEXT_MAPNAME_SANCTUARY: 18,
    CONTEXT_MAPNAME_SENTINEL: 19,
    CONTEXT_MAPNAME_SHANGRILA: 20,
    CONTEXT_MAPNAME_CONTAINMENT: 21,
    CONTEXT_MAPNAME_CONTAINMENTSP: 22,
    CONTEXT_MAPNAME_CORRUPTION: 23,
    CONTEXT_MAPNAME_KARGO: 24,
    CONTEXT_MAPNAME_NECROPOLIS: 25,
    CONTEXT_MAPNAME_SANDSTORM: 26,
    CONTEXT_MAPNAME_SUSPENSE: 27,
    CONTEXT_MAPNAME_AVALANCHE: 28,
    CONTEXT_MAPNAME_DOWNTOWN: 29,
    CONTEXT_MAPNAME_DUSK: 30,
    CONTEXT_MAPNAME_FLOODGATE: 31,
    CONTEXT_MAPNAME_ISLANDER: 32,
    CONTEXT_MAPNAME_ISLANDERNECRIS: 33,
    CONTEXT_MAPNAME_MARKET_DISTRICT: 34,
    CONTEXT_MAPNAME_ONYX_COAST: 35,
    CONTEXT_MAPNAME_POWER_SURGE: 36,
    CONTEXT_MAPNAME_SERENITY: 37,
    CONTEXT_MAPNAME_SERENITYNECRIS: 38,
    CONTEXT_MAPNAME_SINKHOLE: 39,
    CONTEXT_MAPNAME_TANK_CROSSING: 40,
    CONTEXT_MAPNAME_TORLAN: 41,
    CONTEXT_MAPNAME_TORLANLEVIATHAN: 42,
    CONTEXT_MAPNAME_TORLANNECRIS: 43,
    CONTEXT_MAPNAME_MISSION_SELECTION: 44,
    CONTEXT_MAPNAME_KBARGE: 45,
    CONTEXT_MAPNAME_MORBIAS: 46,
    CONTEXT_MAPNAME_FACINGWORLDS: 47,
    CONTEXT_MAPNAME_SEARCHLIGHT: 48,
    CONTEXT_MAPNAME_RAILS: 49,
    CONTEXT_MAPNAME_SUSPENSE_NECRIS: 50,
    CONTEXT_MAPNAME_COLDHARBOR: 51,
    CONTEXT_MAPNAME_DOWNTOWNNECRIS: 52,
    CONTEXT_MAPNAME_LOSTCAUSE: 53,
    CONTEXT_MAPNAME_MORBID: 54,
    CONTEXT_MAPNAME_NANOBLACK: 55,
    CONTEXT_MAPNAME_SHAFT: 56,
    CONTEXT_MAPNAME_DARKMATCH: 57,
    CONTEXT_MAPNAME_OCEANRELIC: 58,
    CONTEXT_MAPNAME_EDENINC: 59,
    CONTEXT_MAPNAME_TURBINE: 60,
    CONTEXT_MAPNAME_STRANDED: 61,
    CONTEXT_MAPNAME_CONFRONTATION: 62,
    CONTEXT_MAPNAME_HOSTILE: 63
  },

  // Mask values of official Mutators (custom, not extracted from UnrealScript source code)
  CONTEXT_MUTATOR: {
    CONTEXT_MUTATOR_SLOWTIMEKILLS: 0x1, // 1
    CONTEXT_MUTATOR_BIGHEAD: 0x2, // 2
    CONTEXT_MUTATOR_NOORBS: 0x4, // 4
    CONTEXT_MUTATOR_FRIENDLYFIRE: 0x8, // 8
    CONTEXT_MUTATOR_HANDICAP: 0x10, // 16
    CONTEXT_MUTATOR_INSTAGIB: 0x20, // 32
    CONTEXT_MUTATOR_LOWGRAV: 0x40, // 64
    CONTEXT_MUTATOR_NOPOWERUPS: 0x80, // 128
    CONTEXT_MUTATOR_NOTRANSLOCATOR: 0x100, // 256
    CONTEXT_MUTATOR_SLOMO: 0x200, // 512
    CONTEXT_MUTATOR_SPEEDFREAK: 0x400, // 1024
    CONTEXT_MUTATOR_SUPERBERSERK: 0x800, // 2048
    CONTEXT_MUTATOR_WEAPONREPLACEMENT: 0x1000, // 4096
    CONTEXT_MUTATOR_WEAPONSRESPAWN: 0x2000, // 8192
    CONTEXT_MUTATOR_SURVIVAL: 0x4000, // 16384
    CONTEXT_MUTATOR_HERO: 0x8000, // 32768
    CONTEXT_MUTATOR_ARENA: 0x10000, // 65536

    CONTEXT_MUTATOR_NOHOVERBOARD: -1 // UNKNOWN
  },

  // Values for CONTEXT_VSBOTS
  CONTEXT_VSBOTS: {
    CONTEXT_VSBOTS_NONE: 0,
    CONTEXT_VSBOTS_1_TO_2: 1,
    CONTEXT_VSBOTS_1_TO_1: 2,
    CONTEXT_VSBOTS_3_TO_2: 3,
    CONTEXT_VSBOTS_2_TO_1: 4,
    CONTEXT_VSBOTS_3_TO_1: 5,
    CONTEXT_VSBOTS_4_TO_1: 6
  },

  // Bot skill choices
  CONTEXT_BOTSKILL: {
    CONTEXT_BOTSKILL_NOVICE: 0,
    CONTEXT_BOTSKILL_AVERAGE: 1,
    CONTEXT_BOTSKILL_EXPERIENCED: 2,
    CONTEXT_BOTSKILL_SKILLED: 3,
    CONTEXT_BOTSKILL_ADEPT: 4,
    CONTEXT_BOTSKILL_MASTERFUL: 5,
    CONTEXT_BOTSKILL_INHUMAN: 6,
    CONTEXT_BOTSKILL_GODLIKE: 7
  },

  // Values for CONTEXT_GOALSCORE
  UNUSED_CONTEXT_GOALSCORE: {
    CONTEXT_GOALSCORE_5: 0,
    CONTEXT_GOALSCORE_10: 1,
    CONTEXT_GOALSCORE_15: 2,
    CONTEXT_GOALSCORE_20: 3,
    CONTEXT_GOALSCORE_30: 4
  },

  // Values for CONTEXT_NUMBOTS
  UNUSED_CONTEXT_NUMBOTS: {
    CONTEXT_NUMBOTS_0: 0,
    CONTEXT_NUMBOTS_1: 1,
    CONTEXT_NUMBOTS_2: 2,
    CONTEXT_NUMBOTS_3: 3,
    CONTEXT_NUMBOTS_4: 4,
    CONTEXT_NUMBOTS_5: 5,
    CONTEXT_NUMBOTS_6: 6,
    CONTEXT_NUMBOTS_7: 7,
    CONTEXT_NUMBOTS_8: 8
  },

  // Values for CONTEXT_TIMELIMIT
  UNUSED_CONTEXT_TIMELIMIT: {
    CONTEXT_TIMELIMIT_5: 0,
    CONTEXT_TIMELIMIT_10: 1,
    CONTEXT_TIMELIMIT_15: 2,
    CONTEXT_TIMELIMIT_20: 3,
    CONTEXT_TIMELIMIT_30: 4
  },

  // Values for CONTEXT_PURESERVER
  CONTEXT_PURESERVER: {
    CONTEXT_PURESERVER_NO: 0,
    CONTEXT_PURESERVER_YES: 1,
    CONTEXT_PURESERVER_ANY: 2
  },

  // Values for CONTEXT_LOCKEDSERVER
  CONTEXT_LOCKEDSERVER: {
    CONTEXT_LOCKEDSERVER_NO: 0,
    CONTEXT_LOCKEDSERVER_YES: 1
  },

  // Values for CONTEXT_CAMPAIGN
  CONTEXT_CAMPAIGN: {
    CONTEXT_CAMPAIGN_NO: 0,
    CONTEXT_CAMPAIGN_YES: 1
  },

  // Values for CONTEXT_FORCERESPAWN
  CONTEXT_FORCERESPAWN: {
    CONTEXT_FORCERESPAWN_NO: 0,
    CONTEXT_FORCERESPAWN_YES: 1
  },

  // Values for CONTEXT_ALLOWKEYBOARD
  CONTEXT_ALLOWKEYBOARD: {
    CONTEXT_ALLOWKEYBOARD_NO: 0,
    CONTEXT_ALLOWKEYBOARD_YES: 1,
    CONTEXT_ALLOWKEYBOARD_ANY: 2
  },

  // Values for CONTEXT_FULLSERVER
  CONTEXT_FULLSERVER: {
    CONTEXT_FULLSERVER_NO: 0,
    CONTEXT_FULLSERVER_YES: 1
  },

  // Values for CONTEXT_EMPTYSERVER
  CONTEXT_EMPTYSERVER: {
    CONTEXT_EMPTYSERVER_NO: 0,
    CONTEXT_EMPTYSERVER_YES: 1
  },

  // Values for CONTEXT_DEDICATEDSERVER
  CONTEXT_DEDICATEDSERVER: {
    CONTEXT_DEDICATEDSERVER_NO: 0,
    CONTEXT_DEDICATEDSERVER_YES: 1
  }
}

/**
 * @typedef {Object} Override action
 * @property {string} Merge - Combines the properties
 * @property {string} Emplace - Emplace the properties.
 * @property {string} Replace - Replace the properties.
 */

/** Contexts to match property from */
const MatchContextType = {
  /** Check for properties */
  Properties: 'Properties',
  /** Check for localized properties */
  LocalizedProperties: 'LocalizedProperties'
}

/** Override action */
const OverrideActionType = {
  /** Merge the values of each property, combining old values with new values, prioritizing new values. */
  Merge: 'merge',
  /** Replaces the values with the new set of properties */
  Emplace: 'emplace',
  /** Removes the set of values from the eixsting properties */
  Remove: 'remove',

  needsRemove (action) {
    switch (action) {
      case this.Remove:
      case this.Emplace:
        return true
    }
    return false
  },

  isMerge (action) {
    switch (action) {
      case this.Merge:
      case this.Emplace:
        return true
    }
    return false
  }
}

export const OnlineConstants = {
  // Online service
  PROPERTY_NUMBOTS: 0x100000F7, // 268435703
  PROPERTY_GOALSCORE: 0x100000F8, // 268435704
  PROPERTY_TIMELIMIT: 0x100000F9, // 268435705
  PROPERTY_LEADERBOARDRATING: 0x20000004, // 536870916 // NOT USED
  PROPERTY_EPICMUTATORS_OLD: 0x10000105, // 268435845 // NOT USED
  PROPERTY_EPICMUTATORS: 0x10000105, // 268435717

  // Advertised via QoS
  PROPERTY_CUSTOMMAPNAME: 0x40000001, // 1073741825
  PROPERTY_CUSTOMGAMEMODE: 0x40000002, // 1073741826
  PROPERTY_SERVERDESCRIPTION: 0x40000003, // 1073741827
  PROPERTY_CUSTOMMUTATORS: 0x40000004, // 1073741828
  PROPERTY_CUSTOMMUTCLASSES: 0x40000005, // 1073741829

  // Not advertised
  PROPERTY_NUMBOTSIA: 0x100000FA, // 268435706
  PROPERTY_STEAMID: 0x10000200, // 268435968
  PROPERTY_STEAMVAC: 0x10000201, // 268435969

  // Presence options
  CONTEXT_PRESENCE_MENUPRESENCE: 0,
  CONTEXT_GAME_MODE: 0x800B, // 32779

  CONTEXT_BOTSKILL: 0,
  CONTEXT_MAPNAME: 1,
  CONTEXT_PURESERVER: 6,
  CONTEXT_LOCKEDSERVER: 7,
  CONTEXT_VSBOTS: 8,
  CONTEXT_CAMPAIGN: 9,
  CONTEXT_FORCERESPAWN: 10,
  CONTEXT_ALLOWKEYBOARD: 11,
  CONTEXT_FULLSERVER: 12,
  CONTEXT_EMPTYSERVER: 13,
  CONTEXT_DEDICATEDSERVER: 14
}

// Helper methods, not really part of the logic
function TextDefaults (opts, maps) {
  return opts.reduce((arr, obj, index) => {
    arr[obj] = maps?.[index] ?? null
    return arr
  }, {})
}
function TextDefaultsBool (opts) {
  return TextDefaults(opts, [
    { Text: 'No' },
    { Text: 'Yes' }
  ])
}

export class GameSettingsCommon {
  constructor () {
    this.includeAll = false
    this.includeFlat = false
    this.includeLegacy = false
    this.includeNull = true

    // private, # currently not supported
    this.$CachedData = null

    // TODO: Add as class fields when ESlint/ecmaVersion is bumped

    // Members defining defaults, properties, settings, ...

    this.Defaults = {
      /** Default delimiter for splitting property fields containing multiple values (like custom mutators) */
      MultiValueDelimiter: '\x1c'
    }

    /** Defaults groups for Properties */
    this.DefaultGroups = {
      /** Default group for context settings (localized properties) */
      Properties: '[game]',
      /** Default group for property settings */
      Context: '[server]'
    }

    /** Property prefixes */
    this.PropPrefixes = {
      /** Prefix for context settings (localized properties) */
      Context: 's',
      /** Prefix for property settings */
      Properties: 'p'
    }

    /**
     * @type {Object.<string, Object>} Properties
     */
    this.Properties = {
      [OnlineConstants.PROPERTY_CUSTOMMAPNAME]: { key: 'CustomMapName', isRawValue: true, gamedig: 'map' },
      [OnlineConstants.PROPERTY_CUSTOMGAMEMODE]: { key: 'CustomGameMode', isRawValue: true, gamedig: 'gametype' },
      [OnlineConstants.PROPERTY_GOALSCORE]: {
        key: 'GoalScore',
        isRawValue: true // Note: Value is set as predefined in UnrealScript source code, force to be raw for query
        // gamedig: 'frag_limit' // Note: is defined in overrides
      },
      [OnlineConstants.PROPERTY_TIMELIMIT]: {
        key: 'TimeLimit',
        isRawValue: true, // Note: Value is set as predefined in UnrealScript source code, force to be raw for query
        gamedig: 'time_limit'
      },
      [OnlineConstants.PROPERTY_NUMBOTS]: {
        key: 'NumBots',
        isRawValue: true, // Note: Value is set as predefined in UnrealScript source code, force to be raw for query
        gamedig: 'numbots'
      },
      [OnlineConstants.PROPERTY_SERVERDESCRIPTION]: { key: 'ServerDescription', isRawValue: true, gamedig: 'servername', group: '[server]' },
      [OnlineConstants.PROPERTY_EPICMUTATORS]: {
        key: 'OfficialMutators',
        isMask: true,
        isMultipleValue: true,
        values: {
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_ARENA]: { Value: 'UTMutator_Arena', ValueFriendly: 'Arena' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_BIGHEAD]: { Value: 'UTMutator_BigHead', ValueFriendly: 'BigHead' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_FRIENDLYFIRE]: { Value: 'UTMutator_FriendlyFire', ValueFriendly: 'FriendlyFire' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_HANDICAP]: { Value: 'UTMutator_Handicap', ValueFriendly: 'Handicap' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_INSTAGIB]: { Value: 'UTMutator_Instagib', ValueFriendly: 'Instagib' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_LOWGRAV]: { Value: 'UTMutator_LowGrav', ValueFriendly: 'LowGrav' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_NOORBS]: { Value: 'UTMutator_NoOrbs', ValueFriendly: 'NoOrbs' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_NOPOWERUPS]: { Value: 'UTMutator_NoPowerups', ValueFriendly: 'NoPowerups' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_NOTRANSLOCATOR]: { Value: 'UTMutator_NoTranslocator', ValueFriendly: 'NoTranslocator' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_SLOMO]: { Value: 'UTMutator_Slomo', ValueFriendly: 'Slomo' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_SLOWTIMEKILLS]: { Value: 'UTMutator_SlowTimeKills', ValueFriendly: 'SlowTimeKills' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_SPEEDFREAK]: { Value: 'UTMutator_SpeedFreak', ValueFriendly: 'SpeedFreak' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_SUPERBERSERK]: { Value: 'UTMutator_SuperBerserk', ValueFriendly: 'SuperBerserk' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_WEAPONREPLACEMENT]: { Value: 'UTMutator_WeaponReplacement', ValueFriendly: 'WeaponReplacement' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_WEAPONSRESPAWN]: { Value: 'UTMutator_WeaponsRespawn', ValueFriendly: 'WeaponsRespawn' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_SURVIVAL]: { Value: 'UTMutator_Survival', ValueFriendly: 'Survival' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_HERO]: { Value: 'UTMutator_Hero', ValueFriendly: 'Hero' }
        }
      },
      [OnlineConstants.PROPERTY_CUSTOMMUTATORS]: { key: 'CustomMutators', isRawValue: true, gamedig: 'custom_mutators' },
      [OnlineConstants.PROPERTY_CUSTOMMUTCLASSES]: { key: 'CustomMutClasses', isRawValue: true },
      [OnlineConstants.PROPERTY_NUMBOTSIA]: { key: 'NumBotsIA' },
      [OnlineConstants.PROPERTY_STEAMID]: { key: 'SteamID', group: '[server]', isRawValue: true },
      [OnlineConstants.PROPERTY_STEAMVAC]: { key: 'SteamVAC', gorup: '[server]', isRawValue: true }
    }

    this.LocalizedProperties = {
      [OnlineConstants.CONTEXT_GAME_MODE]: {
        key: 'GameMode',
        gamedig: 'gamemode',
        group: '[game]',
        values: [
          // mapped index by the context/property id
          SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_DM,
          SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_TDM,
          SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_CTF,
          SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_VCTF,
          SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_WAR,
          SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_DUEL,
          SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_CAMPAIGN,
          SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_GREED,
          SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_BETRAYAL,
          SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_CUSTOM
        ]
      },
      [OnlineConstants.CONTEXT_BOTSKILL]: {
        key: 'BotSkill',
        gamedig: 'bot_skill',
        group: undefined,
        values: [
          // mapped index by the context/property id
          SettingsOptions.CONTEXT_BOTSKILL.CONTEXT_BOTSKILL_NOVICE,
          SettingsOptions.CONTEXT_BOTSKILL.CONTEXT_BOTSKILL_AVERAGE,
          SettingsOptions.CONTEXT_BOTSKILL.CONTEXT_BOTSKILL_EXPERIENCED,
          SettingsOptions.CONTEXT_BOTSKILL.CONTEXT_BOTSKILL_SKILLED,
          SettingsOptions.CONTEXT_BOTSKILL.CONTEXT_BOTSKILL_ADEPT,
          SettingsOptions.CONTEXT_BOTSKILL.CONTEXT_BOTSKILL_MASTERFUL,
          SettingsOptions.CONTEXT_BOTSKILL.CONTEXT_BOTSKILL_INHUMAN,
          SettingsOptions.CONTEXT_BOTSKILL.CONTEXT_BOTSKILL_GODLIKE
        ]
      },
      [OnlineConstants.CONTEXT_MAPNAME]: {
        key: 'MapName',
        gamedig: undefined,
        group: '[game]',
        values: [
          SettingsOptions.CONTEXT_MAPNAME.CONTEXT_MAPNAME_CUSTOM
        ]
      },
      [OnlineConstants.CONTEXT_PURESERVER]: {
        key: 'PureServer',
        gamedig: 'pure_server',
        values: [
          // mapped index by the context/property id
          SettingsOptions.CONTEXT_PURESERVER.CONTEXT_PURESERVER_NO,
          SettingsOptions.CONTEXT_PURESERVER.CONTEXT_PURESERVER_YES
        ]
      },
      [OnlineConstants.CONTEXT_LOCKEDSERVER]: {
        key: 'LockedServer',
        gamedig: 'password',
        values: [
          // mapped index by the context/property id
          SettingsOptions.CONTEXT_LOCKEDSERVER.CONTEXT_LOCKEDSERVER_NO,
          SettingsOptions.CONTEXT_LOCKEDSERVER.CONTEXT_LOCKEDSERVER_YES
        ]
      },
      [OnlineConstants.CONTEXT_VSBOTS]: {
        key: 'VsBots',
        gamedig: 'vs_bots',
        group: '[game]',
        values: [
          // mapped index by the context/property id
          SettingsOptions.CONTEXT_VSBOTS.CONTEXT_VSBOTS_NONE,
          SettingsOptions.CONTEXT_VSBOTS.CONTEXT_VSBOTS_1_TO_1,
          SettingsOptions.CONTEXT_VSBOTS.CONTEXT_VSBOTS_3_TO_2,
          SettingsOptions.CONTEXT_VSBOTS.CONTEXT_VSBOTS_2_TO_1
        ]
      },
      [OnlineConstants.CONTEXT_CAMPAIGN]: {
        key: 'Campaign',
        gamedig: undefined,
        group: '[game]',
        values: [
          // mapped index by the context/property id
          SettingsOptions.CONTEXT_CAMPAIGN.CONTEXT_CAMPAIGN_NO,
          SettingsOptions.CONTEXT_CAMPAIGN.CONTEXT_CAMPAIGN_YES
        ]
      },
      [OnlineConstants.CONTEXT_FORCERESPAWN]: {
        key: 'ForceRespawn',
        gamedig: 'force_respawn',
        group: '[game]',
        values: [
          // mapped index by the context/property id
          SettingsOptions.CONTEXT_FORCERESPAWN.CONTEXT_FORCERESPAWN_NO,
          SettingsOptions.CONTEXT_FORCERESPAWN.CONTEXT_FORCERESPAWN_YES
        ]
      },
      [OnlineConstants.CONTEXT_ALLOWKEYBOARD]: {
        key: 'AllowKeyboard',
        gamedig: undefined,
        group: undefined,
        values: [
          // mapped index by the context/property id
          SettingsOptions.CONTEXT_ALLOWKEYBOARD.CONTEXT_ALLOWKEYBOARD_NO,
          SettingsOptions.CONTEXT_ALLOWKEYBOARD.CONTEXT_ALLOWKEYBOARD_YES
        ]
      },
      [OnlineConstants.CONTEXT_FULLSERVER]: {
        key: 'IsFullServer',
        gamedig: undefined,
        group: undefined,
        values: [
          // mapped index by the context/property id
          SettingsOptions.CONTEXT_FULLSERVER.CONTEXT_FULLSERVER_NO,
          SettingsOptions.CONTEXT_FULLSERVER.CONTEXT_FULLSERVER_YES
        ]
      },
      [OnlineConstants.CONTEXT_EMPTYSERVER]: {
        key: 'IsEmptyServer',
        gamedig: undefined,
        group: undefined,
        values: [
          // mapped index by the context/property id
          SettingsOptions.CONTEXT_EMPTYSERVER.CONTEXT_EMPTYSERVER_NO,
          SettingsOptions.CONTEXT_EMPTYSERVER.CONTEXT_EMPTYSERVER_YES
        ]
      },
      [OnlineConstants.CONTEXT_DEDICATEDSERVER]: {
        key: 'IsDedicated',
        gamedig: undefined,
        group: undefined,
        values: [
          // mapped index by the context/property id
          SettingsOptions.CONTEXT_DEDICATEDSERVER.CONTEXT_DEDICATEDSERVER_NO,
          SettingsOptions.CONTEXT_DEDICATEDSERVER.CONTEXT_DEDICATEDSERVER_YES
        ]
      }
    }

    this.PropertiesTexts = {
      [OnlineConstants.PROPERTY_CUSTOMMAPNAME]: { Text: 'Map' },
      [OnlineConstants.PROPERTY_CUSTOMGAMEMODE]: { Text: 'Game' },
      [OnlineConstants.PROPERTY_GOALSCORE]: { Text: 'Goal Score' },
      [OnlineConstants.PROPERTY_TIMELIMIT]: { Text: 'Time Limit' },
      [OnlineConstants.PROPERTY_NUMBOTS]: { Text: 'Bots' },
      [OnlineConstants.PROPERTY_SERVERDESCRIPTION]: { Text: 'Server Description' },
      [OnlineConstants.PROPERTY_EPICMUTATORS]: {
        Text: 'Mutators',
        ValueMappings: {
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_ARENA]: { Text: 'Arena', Description: 'Default weapon pickups in a level can be substituted with a single weapon.' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_BIGHEAD]: { Text: 'Big Head', Description: 'Head size depends on ratio of kills to deaths.' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_FRIENDLYFIRE]: { Text: 'Friendly Fire', Description: 'Friendly fire damages teammates (50 percent of full damage taken).' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_HANDICAP]: { Text: 'Handicap', Description: 'Provides armor and weapon bonuses to losing players.' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_INSTAGIB]: { Text: 'Instagib', Description: 'Players are equipped with a one shot kill instagib rifle, and all pickups are removed from the game.' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_LOWGRAV]: { Text: 'Low Gravity', Description: 'Gravity is reduced.' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_NOORBS]: { Text: 'No Orbs', Description: 'No Orbs in Warfare.' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_NOPOWERUPS]: { Text: 'No Super Pickups', Description: 'Removes all super pickups (Shieldbelt, Power Ups, Megahealth, Redeemer) from the game.' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_NOTRANSLOCATOR]: { Text: 'No Translocator', Description: "The Translocator device is removed from the player's inventory." },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_SLOMO]: { Text: 'Slo Mo', Description: 'Slows the game down.' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_SLOWTIMEKILLS]: { Text: 'Kills Slow Time', Description: 'Time slows down for a moment every time you kill an enemy (instant action only).' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_SPEEDFREAK]: { Text: 'Speed Freak', Description: 'Speeds the game up.' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_SUPERBERSERK]: { Text: 'Super Berserk', Description: 'Players fire at Berserk speed for the entire match.' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_WEAPONREPLACEMENT]: { Text: 'Weapon Replacement', Description: 'Default weapon pickups in a level can be substituted with different weapons.' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_WEAPONSRESPAWN]: { Text: 'Weapons Respawn', Description: 'Weapons respawn instead of always being available.' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_SURVIVAL]: { Text: 'Survival', Description: 'Spectating players spawn into the match after current players are killed (for the Duel gametype only).' },
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_HERO]: { Text: 'Titan', Description: 'Allow players to become Titans' },

          // UNUSED?
          [SettingsOptions.CONTEXT_MUTATOR.CONTEXT_MUTATOR_NOHOVERBOARD]: { Text: 'No Hoverboard', Description: 'Hoverboard is removed.' }
        }
      },
      [OnlineConstants.PROPERTY_CUSTOMMUTATORS]: { Text: 'Community Mutators' },
      [OnlineConstants.PROPERTY_CUSTOMMUTCLASSES]: { Text: 'Community Mutator Classes' },
      [OnlineConstants.PROPERTY_NUMBOTSIA]: { Text: 'Bots (Campaign)' }
    }

    this.LocalizedPropertiesTexts = {
      [OnlineConstants.CONTEXT_GAME_MODE]: {
        Text: 'Game',
        ValueMappings: {
          [SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_DM]: { Text: 'Deathmatch', ShortName: 'DM', Description: 'Free-for-all deathmatch action.' },
          [SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_TDM]: { Text: 'Team Deathmatch', ShortName: 'TDM', Description: 'Team-based deathmatch action.' },
          [SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_CTF]: { Text: 'Capture The Flag', ShortName: 'CTF', Description: "Team-based capture the flag.  Invade the opposing team's base, grab their flag, and bring it back to your own to obtain glory." },
          [SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_VCTF]: { Text: 'Vehicle CTF', ShortName: 'VCTF', Description: "Team-based capture the flag with vehicles.  Invade the opposing team's base, grab their flag, and bring it back to your own to obtain glory." },
          [SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_WAR]: { Text: 'Warfare', ShortName: 'WAR', Description: 'Link together Nodes and destroy the enemy Core in this team-based mode.' },
          [SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_DUEL]: { Text: 'Duel', ShortName: 'DUEL', Description: '1 vs. 1 Dueling Mode.' },
          [SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_CAMPAIGN]: { Text: 'Campaign', Description: 'Campaign game mode' },
          [SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_GREED]: { Text: 'Greed', ShortName: 'GRD', Description: "Collect Skulls by defeating opponents, and return them to the opposing team's base." },
          [SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_BETRAYAL]: { Text: 'Betrayal', ShortName: 'BET', Description: 'Work together to earn bonus points.  Betray your team to keep them.' },
          [SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_CUSTOM]: { Text: 'Custom', Description: '' }
        }
      },
      [OnlineConstants.CONTEXT_BOTSKILL]: {
        Text: 'Bot Skill',
        ValueMappings: {
          [SettingsOptions.CONTEXT_BOTSKILL.CONTEXT_BOTSKILL_NOVICE]: { Text: 'Novice' },
          [SettingsOptions.CONTEXT_BOTSKILL.CONTEXT_BOTSKILL_AVERAGE]: { Text: 'Average' },
          [SettingsOptions.CONTEXT_BOTSKILL.CONTEXT_BOTSKILL_EXPERIENCED]: { Text: 'Experienced' },
          [SettingsOptions.CONTEXT_BOTSKILL.CONTEXT_BOTSKILL_SKILLED]: { Text: 'Skilled' },
          [SettingsOptions.CONTEXT_BOTSKILL.CONTEXT_BOTSKILL_ADEPT]: { Text: 'Adept' },
          [SettingsOptions.CONTEXT_BOTSKILL.CONTEXT_BOTSKILL_MASTERFUL]: { Text: 'Masterful' },
          [SettingsOptions.CONTEXT_BOTSKILL.CONTEXT_BOTSKILL_INHUMAN]: { Text: 'Inhuman' },
          [SettingsOptions.CONTEXT_BOTSKILL.CONTEXT_BOTSKILL_GODLIKE]: { Text: 'Godlike' }
        }
      },
      [OnlineConstants.CONTEXT_MAPNAME]: {
        Text: 'Map',
        ValueMappings: {
          [SettingsOptions.CONTEXT_MAPNAME.CONTEXT_MAPNAME_CUSTOM]: { Text: 'Custom' }
        }
      },
      [OnlineConstants.CONTEXT_PURESERVER]: { Text: 'Pure', ValueMappings: TextDefaultsBool([SettingsOptions.CONTEXT_PURESERVER.CONTEXT_PURESERVER_NO, SettingsOptions.CONTEXT_PURESERVER.CONTEXT_PURESERVER_YES]) },
      [OnlineConstants.CONTEXT_LOCKEDSERVER]: { Text: 'Locked', ValueMappings: TextDefaultsBool([SettingsOptions.CONTEXT_LOCKEDSERVER.CONTEXT_LOCKEDSERVER_NO, SettingsOptions.CONTEXT_LOCKEDSERVER.CONTEXT_LOCKEDSERVER_YES]) },
      [OnlineConstants.CONTEXT_VSBOTS]: {
        Text: 'Vs Bots',
        ValueMappings: {
          [SettingsOptions.CONTEXT_VSBOTS.CONTEXT_VSBOTS_NONE]: { Text: 'Disabled' },
          [SettingsOptions.CONTEXT_VSBOTS.CONTEXT_VSBOTS_NONE]: { Text: '1:1' },
          [SettingsOptions.CONTEXT_VSBOTS.CONTEXT_VSBOTS_NONE]: { Text: '3:2' },
          [SettingsOptions.CONTEXT_VSBOTS.CONTEXT_VSBOTS_NONE]: { Text: '2:1' }
        }
      },
      [OnlineConstants.CONTEXT_CAMPAIGN]: { Text: 'Campaign', ValueMappings: TextDefaultsBool([SettingsOptions.CONTEXT_CAMPAIGN.CONTEXT_CAMPAIGN_NO, SettingsOptions.CONTEXT_CAMPAIGN.CONTEXT_CAMPAIGN_YES]) },
      [OnlineConstants.CONTEXT_FORCERESPAWN]: { Text: 'Forced Respawn', ValueMappings: TextDefaultsBool([SettingsOptions.CONTEXT_FORCERESPAWN.CONTEXT_FORCERESPAWN_NO, SettingsOptions.CONTEXT_FORCERESPAWN.CONTEXT_FORCERESPAWN_YES]) },
      [OnlineConstants.CONTEXT_ALLOWKEYBOARD]: { Text: 'M/KB', ValueMappings: TextDefaultsBool([SettingsOptions.CONTEXT_ALLOWKEYBOARD.CONTEXT_ALLOWKEYBOARD_NO, SettingsOptions.CONTEXT_ALLOWKEYBOARD.CONTEXT_ALLOWKEYBOARD_YES]) },
      [OnlineConstants.CONTEXT_FULLSERVER]: { Text: 'Full', ValueMappings: TextDefaultsBool([SettingsOptions.CONTEXT_FULLSERVER.CONTEXT_FULLSERVER_NO, SettingsOptions.CONTEXT_FULLSERVER.CONTEXT_FULLSERVER_YES]) },
      [OnlineConstants.CONTEXT_EMPTYSERVER]: { Text: 'Empty', ValueMappings: TextDefaultsBool([SettingsOptions.CONTEXT_DEDICATEDSERVER.CONTEXT_EMPTYSERVER_NO, SettingsOptions.CONTEXT_DEDICATEDSERVER.CONTEXT_EMPTYSERVER_YES]) },
      [OnlineConstants.CONTEXT_DEDICATEDSERVER]: { Text: 'Dedicated', ValueMappings: TextDefaultsBool([SettingsOptions.CONTEXT_DEDICATEDSERVER.CONTEXT_DEDICATEDSERVER_NO, SettingsOptions.CONTEXT_DEDICATEDSERVER.CONTEXT_DEDICATEDSERVER_YES]) }
    }

    /**
     * Info about properties matching by value
     * @typedef {Object} MatchInfo
     * @property {MatchContextType|MatchContextType[]} context - The context/sub-object to check the property from
     * @property {string} desiredValue - The value the property has to match
     * @property {string} desiredIndex - The value index (received from server as raw data) the property has to match
     * @property {string|undefined} propPrefix - A prefix to add to the property
     * @property {string|undefined} propSuffix - A suffix to add to the property
     */

    /**
     * Info about properties and the values to override with
     * @typedef {Object} PropertiesInfo
     * @property {keyof OverrideActionType} action - The action to use for apply given properties to existing ones (like merge, ...)
     * @property {Object} values - The values to override
     */

    /**
     * Info about localized properties and the values to override with
     * @typedef {Object} LocalizedPropertiesInfo
     * @property {string} action - The action to use for apply given properties to existing ones (like merge, emplace, replace, ...)
     * @property {Object} values - The values to override
     */

    /**
     * Property into about properties
     * @typedef {Object} OverridesPropertyInfo
     * @property {Object.<string, MatchInfo>} match - Info about matching properties
     * @property {Object.<string, PropertiesInfo>} Properties - The properties to override
     * @property {Object.<string, LocalizedPropertiesInfo>} PropertiesTexts - The text valeus of properties to override
     */

    /**
     * Definition of properties to override based on set of values
     * @type {OverridesPropertyInfo[]}
     */
    this.OverridesProperties = [
      {
        _source: 'UTGameSettingsBetrayal',
        match: { [OnlineConstants.CONTEXT_GAME_MODE]: { propPrefix: this.PropPrefixes.Context, desiredIndex: SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_BETRAYAL } },
        Properties: { [OnlineConstants.PROPERTY_GOALSCORE]: { action: OverrideActionType.Merge, values: { gamedig: 'score_limit' } } },
        PropertiesTexts: { [OnlineConstants.PROPERTY_GOALSCORE]: { action: OverrideActionType.Merge, values: { Text: 'Score Limit' } } }
      },
      {
        _source: 'UTGameSettingsCampaign',
        match: { [OnlineConstants.CONTEXT_GAME_MODE]: { propPrefix: this.PropPrefixes.Context, desiredIndex: SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_CAMPAIGN } },
        Properties: { [OnlineConstants.PROPERTY_GOALSCORE]: { action: OverrideActionType.Merge, values: { gamedig: 'frag_limit' } } },
        PropertiesTexts: { [OnlineConstants.PROPERTY_GOALSCORE]: { action: OverrideActionType.Merge, values: { Text: 'Frags Limit' } } }
      },
      {
        _source: 'UTGameSettingsCTF',
        match: { [OnlineConstants.CONTEXT_GAME_MODE]: { propPrefix: this.PropPrefixes.Context, desiredIndex: SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_CTF } },
        Properties: { [OnlineConstants.PROPERTY_GOALSCORE]: { action: OverrideActionType.Merge, values: { gamedig: 'cap_limit' } } },
        PropertiesTexts: { [OnlineConstants.PROPERTY_GOALSCORE]: { action: OverrideActionType.Merge, values: { Text: 'Caps Limit' } } }
      },
      {
        _source: 'UTGameSettingsDM',
        match: { [OnlineConstants.CONTEXT_GAME_MODE]: { propPrefix: this.PropPrefixes.Context, desiredIndex: SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_DM } },
        Properties: { [OnlineConstants.PROPERTY_GOALSCORE]: { action: OverrideActionType.Merge, values: { gamedig: 'frag_limit' } } },
        PropertiesTexts: { [OnlineConstants.PROPERTY_GOALSCORE]: { action: OverrideActionType.Merge, values: { Text: 'Frags Limit' } } }
      },
      {
        _source: 'UTGameSettingsDUEL',
        match: { [OnlineConstants.CONTEXT_GAME_MODE]: { propPrefix: this.PropPrefixes.Context, desiredIndex: SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_DUEL } },
        Properties: { [OnlineConstants.PROPERTY_GOALSCORE]: { action: OverrideActionType.Merge, values: { gamedig: 'frag_limit' } } },
        PropertiesTexts: { [OnlineConstants.PROPERTY_GOALSCORE]: { action: OverrideActionType.Merge, values: { Text: 'Frags Limit' } } }
      },
      {
        _source: 'UTGameSettingsGreed',
        match: { [OnlineConstants.CONTEXT_GAME_MODE]: { propPrefix: this.PropPrefixes.Context, desiredIndex: SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_GREED } },
        Properties: { [OnlineConstants.PROPERTY_GOALSCORE]: { action: OverrideActionType.Merge, values: { gamedig: 'score_limit' } } },
        PropertiesTexts: { [OnlineConstants.PROPERTY_GOALSCORE]: { action: OverrideActionType.Merge, values: { Text: 'Score Limit' } } }
      },
      {
        _source: 'UTGameSettingsTDM',
        match: { [OnlineConstants.CONTEXT_GAME_MODE]: { propPrefix: this.PropPrefixes.Context, desiredIndex: SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_TDM } },
        Properties: { [OnlineConstants.PROPERTY_GOALSCORE]: { action: OverrideActionType.Merge, values: { gamedig: 'frag_limit' } } },
        PropertiesTexts: { [OnlineConstants.PROPERTY_GOALSCORE]: { action: OverrideActionType.Merge, values: { Text: 'Frags Limit' } } }
      },
      {
        _source: 'UTGameSettingsVCTF',
        match: { [OnlineConstants.CONTEXT_GAME_MODE]: { propPrefix: this.PropPrefixes.Context, desiredIndex: SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_VCTF } },
        Properties: { [OnlineConstants.PROPERTY_GOALSCORE]: { action: OverrideActionType.Merge, values: { gamedig: 'cap_limit' } } },
        PropertiesTexts: { [OnlineConstants.PROPERTY_GOALSCORE]: { action: OverrideActionType.Merge, values: { Text: 'Caps Limit' } } }
      },
      {
        _source: 'UTGameSettingsWAR',
        match: { [OnlineConstants.CONTEXT_GAME_MODE]: { propPrefix: this.PropPrefixes.Context, desiredIndex: SettingsOptions.CONTEXT_GAME_MODE.CONTEXT_GAME_MODE_WAR } },
        Properties: { [OnlineConstants.PROPERTY_GOALSCORE]: { action: OverrideActionType.Merge, values: { gamedig: 'score_limit' } } },
        PropertiesTexts: { [OnlineConstants.PROPERTY_GOALSCORE]: { action: OverrideActionType.Merge, values: { Text: 'Score Limit' } } }
      }
    ]
  }

  /**
   * Updates the local options with specified user options
   * @param {Object} options the provided options
   */
  updateOptions (options) {
    this.includeAll = options.includeAll ?? this.includeAll
    this.includeFlat = options.includeFlat ?? this.includeFlat
    this.includeLegacy = options.includeLegacy ?? this.includeLegacy
    this.includeNull = options.includeNull ?? this.includeNull
  }

  /** Stores current settings data in cache, to revert it back when desired
   * @see ConditionalRestoreData
   */
  StoreData () {
    const data = {
      Properties: this.Properties,
      PropertiesTexts: this.PropertiesTexts,
      LocalizedProperties: this.LocalizedProperties,
      LocalizedPropertiesTexts: this.LocalizedPropertiesTexts
    }

    // TODO: may use any other deep-copy method like structuredClone() (in Node.js 17+)
    this.$CachedData = JSON.parse(JSON.stringify(data))
  }

  /**
   * Conditionally restores the settings data (if existing)
   * @see StoreData
   */
  ConditionalRestoreData () {
    if (!this.$CachedData) return
    Object.assign(this, this.$CachedData)
    this.$CachedData = null
  }

  /**
   * Applying context overides on base of current state
   * @param {Object} stateRaw the quried and processed properties
   */
  applyContextOverrides (stateRaw) {
    // store data as we modify the data directly (due to easier being managable),
    // and conditionally restore it for another packets being process
    this.ConditionalRestoreData()
    this.StoreData()

    // try to overrride any defined property set, based on matching properties
    this.OverridesProperties.forEach(overrideDef => {
      if (!this.isObject(overrideDef?.match)) return

      const matchingPredicate = ([matchPropId, matchPropData]) => {
        const propKey = `${matchPropData.propPrefix || ''}${matchPropId}${matchPropData.propSuffix || ''}`
        const foundValue = this.getObjectProperty(stateRaw, matchPropData.context, propKey)
        if (foundValue !== undefined) {
          // eslint-disable-next-line eqeqeq
          if (matchPropData.desiredIndex !== undefined && matchPropData.desiredIndex == foundValue) {
            return true
          }
          if (matchPropData.desiredValue !== undefined) {
            const value = this.getPropertyValue(matchPropId, foundValue)
            // eslint-disable-next-line eqeqeq
            if (value == matchPropData.desiredValue) {
              return true
            }
          }
        }
        return false
      }
      const isMatching = Object.entries(overrideDef?.match).every(matchingPredicate)
      if (!isMatching) return

      // override properties
      Object.entries(overrideDef.Properties || {}).forEach(([propId, propMap]) => {
        this.overrideContextProperty(propId, propMap, (key) => this.Properties[key])
      })
      Object.entries(overrideDef.PropertiesTexts || {}).forEach(([propId, propMap]) => {
        this.overrideContextProperty(propId, propMap, (key) => this.PropertiesTexts[key])
      })

      // override localized properties
      Object.entries(overrideDef.LocalizedProperties || {}).forEach(([propId, propMap]) => {
        this.overrideContextProperty(propId, propMap, (key) => this.LocalizedProperties[key])
      })
      Object.entries(overrideDef.LocalizedPropertiesTexts || {}).forEach(([propId, propMap]) => {
        this.overrideContextProperty(propId, propMap, (key) => this.LocalizedPropertiesTexts[key])
      })
    })
  }

  /**
   * Override context for given property
   * @param {string|any} matchPropId Property Id to found and apply properties to/from
   * @param {PropertiesInfo|LocalizedPropertiesInfo} newPropMap
   */
  overrideContextProperty (matchPropId, newPropMap, findFunc = (key) => (null)) {
    const foundProperty = findFunc?.(matchPropId)
    if (!foundProperty) return

    if (OverrideActionType.needsRemove(newPropMap.action)) {
      Object.keys(newPropMap.values || {}).forEach(key => delete foundProperty[key])
    }

    if (OverrideActionType.isMerge(newPropMap.action)) {
      Object.assign(foundProperty, newPropMap.values)
    }
  }

  /**
   * Translates context settings into a provided structure respectively using known variables
   * @param {Object} state the quried and processed properties
   * @param {Object} props the defined properties
   */
  applyLocalizedProperties (state, props) {
    const { includeAll, includeLegacy, includeFlat, includeNull } = this
    Object.entries(this.LocalizedProperties).forEach(([propId, propMap]) => {
      const gsKey = `${this.PropPrefixes.Context}${propId}`
      if (gsKey in props) {
        const gsValue = props[gsKey]

        if (includeAll || propMap.gamedig) {
          if (includeLegacy) {
            state[propMap.gamedig] = gsValue
          } else {
            delete state[propMap.gamedig]
          }
        }
        if (includeAll || includeFlat) {
          state[propMap.key] = gsValue[gsKey]
        }

        const valueIndex = gsValue
        const valueRaw = this.getPropertyValue(propId, valueIndex, 'LocalizedProperties')
        const valueText = this.getPropertyText(propId, valueIndex, 'LocalizedProperties')

        if (includeNull || !!valueRaw) {
          let propValue = valueText || valueRaw
          if (propMap.isMask && typeof propValue === 'string') {
            propValue = propValue.split(propMap.delimiter ?? this.Defaults.MultiValueDelimiter)
          }
          this.setObjectProperty(state, propMap.group !== undefined ? propMap.group : this.DefaultGroups.Context, propMap.key, propValue)
        } else {
          console.log(`Ignore context: ${propId} (${propMap.key})`)
        }
      } else {
        console.log(`Unknown context: ${propId} (${propMap.key})`)
      }
    })
  }

  /**
   * Translates property settings into a provided structure respectively using known variables
   * @param {Object} state the quried and processed properties
   * @param {Object} props the defined properties
   */
  applyProperties (state, props) {
    const { includeAll, includeLegacy, includeFlat, includeNull } = this
    Object.entries(this.Properties).forEach(([propId, propMap]) => {
      const gsKey = `${this.PropPrefixes.Properties}${propId}`
      if (gsKey in props) {
        const gsValue = props[gsKey]

        if (includeAll || propMap.gamedig) {
          if (includeLegacy) {
            state[propMap.gamedig] = gsValue
          } else {
            delete state[propMap.gamedig]
          }
        }
        if (includeAll || includeFlat) {
          state[propMap.key] = gsValue[gsKey]
        }

        const valueIndex = gsValue
        const valueRaw = this.getPropertyValue(propId, valueIndex, MatchContextType.Properties)
        const valueText = this.getPropertyText(propId, valueIndex, MatchContextType.Properties)

        if (includeNull || !!valueRaw) {
          let propValue = valueText || valueRaw || valueIndex
          if (propMap.isMask && typeof propValue === 'string') {
            propValue = propValue.split(propMap.delimiter ?? this.Defaults.MultiValueDelimiter)
          }
          this.setObjectProperty(state, propMap.group !== undefined ? propMap.group : this.DefaultGroups.Properties, propMap.key, propValue)
        } else {
          console.log(`Ignore property: ${propId} (${propMap.key})`)
        }
      } else {
        console.log(`Unknown property: ${propId} (${propMap.key})`)
      }
    })
  }

  getPropertyValue (propId, valueId, prioritize = []) {
    let result = null
    let fallback = null
    const steps = this.buildFieldsPriorityList(prioritize)
    while (!result?.value && !!steps.length) {
      const step = steps.pop()
      if (step === MatchContextType.Properties) {
        result = this.getPropertyValue_Properties(propId, valueId)
      } else if (step === MatchContextType.LocalizedProperties) {
        result = this.getPropertyValue_Context(propId, valueId)
      }
      fallback ??= result?.fallback
    }

    result = (this.isObject(result) ? (result?.text || result?.value) : undefined) || result
    return result ?? fallback
  }

  getPropertyText (propId, valueId, prioritize = []) {
    let result = null
    let fallback = null
    const steps = this.buildFieldsPriorityList(prioritize)
    while (!result?.text && !!steps.length) {
      const step = steps.pop()
      if (step === MatchContextType.Properties) {
        result = this.getPropertyText_Properties(propId, valueId)
      } else if (step === MatchContextType.LocalizedProperties) {
        result = this.getPropertyText_Context(propId, valueId)
      }
      fallback ??= result?.fallback
    }

    result = (this.isObject(result) ? (result?.text || result?.value) : undefined) || result
    return result ?? fallback
  }

  /**
   * Try to find the context property value of given property id, defined in LocalizedProperties
   * @param {string|number} propId the property number (without the prefix) for the property to retrieve the text from
   * @param {*} valueId the corresponding value for the property (may be index)
   * @returns {Object|null} Returns the property value (as value in object), or null if nothing is found
   * @see LocalizedProperties
   */
  getPropertyValue_Context (propId, valueId) {
    const propMap = this.LocalizedProperties[propId]
    if (!propMap) {
      return null
    }
    const propValue = propMap?.values?.[+valueId]
    if (propValue === undefined) {
      // no value set, fallback to "value" (index)
      return { fallback: valueId }
    }
    // value found, return the value as part of an object
    return { value: propValue }
  }

  /**
   * Try to find the context property value of given property id, defined in Properties
   * @param {string|number} propId the property number (without the prefix) for the property to retrieve the text from
   * @param {*} valueId the corresponding value for the property (may be index)
   * @returns {{value, fallback}|null} Returns the property value (as value in object), or null if nothing is found
   * @see Properties
   */
  getPropertyValue_Properties (propId, valueId) {
    const propMap = this.Properties[propId]
    if (!propMap || (!propMap.isRawValue && !propMap.isMask)) {
      return null
    }
    // conditionally transform value (for instance being a mask value)
    valueId = this.transformValue(propMap, valueId)
    // try finding the corresponding value
    const propValue = propMap?.values?.[+valueId]
    if (propValue === undefined) {
      // no value set, fallback to "value" (index)
      return { fallback: valueId }
    }
    // value found, return the value as part of an object
    return { value: propValue }
  }

  /**
   * Returns the values from the masked property value
   * @param {Object} propMap the property info
   * @param {*} valueRaw the raw value
   * @returns {any[]} Returns the list of property values
   */
  getMultipleValues (propMap, valueRaw, { isContext = false, ...options } = {}) {
    let valueMapped = Array.isArray(valueRaw) ? valueRaw : [valueRaw]

    if (propMap.isMask && propMap.values) {
      valueMapped = []
      const maxSize = 4 * 8
      for (let bitIdx = 0; bitIdx < maxSize; bitIdx++) {
        const bitValue = (1 << bitIdx)
        if ((valueRaw & bitValue) !== 0 && propMap.values[bitValue]) {
          valueMapped.push(bitValue)
        }
      }
    }

    return valueMapped
  }

  transformValue (propMap, valueRaw, { isContext = false, ...options } = {}) {
    let valueMapped = valueRaw
    if (propMap.isMask && propMap.values) {
      valueMapped = []
      const maxSize = 4 * 8
      for (let bitIdx = 0; bitIdx < maxSize; bitIdx++) {
        const bitValue = (1 << bitIdx)
        if ((valueRaw & bitValue) !== 0 && propMap.values[bitValue]) {
          const valueText = (isContext ? propMap.ValueMappings[bitValue].Text : undefined)
          const valueValue = propMap.values[bitValue].ValueFriendly ?? propMap.values[bitValue].Value
          valueMapped.push(valueText ?? valueValue)
        }
      }

      valueRaw = valueMapped.join(propMap.delimiter ?? this.Defaults.MultiValueDelimiter)
    }

    return valueRaw
  }

  /**
   * Try to find the context property text of given property id, defined in LocalizedProperties
   * @param {string|number} propId the property number (without the prefix) for the property to retrieve the text from
   * @param {*} valueId the corresponding value for the property (may be index)
   * @returns {Object|null} Returns the property text (as value in object), or null if nothing is found
   * @see LocalizedProperties
   */
  getPropertyText_Context (propId, valueId) {
    const propValues = this.LocalizedProperties[propId]
    const propTexts = this.LocalizedPropertiesTexts[propId]
    if (!propValues?.values) {
      return null
    }

    // try finding the corresponding text
    let propValue
    const propText = propTexts?.ValueMappings?.[+valueId]
    if (!propText) {
      propValue = propValues?.ValueMappings?.[+valueId]
      if (propValue === undefined) {
        // no mappings found, fallback to property value
        return this.getPropertyValue_Context(propId, valueId)
      }
    }
    // value found, return the value as part of an object
    const textValue = propText?.Text || propValue?.Text
    return { text: textValue }
  }

  /**
   * Try to find the context property text of given property id, defined in Properties
   * @param {string|number} propId the property number (without the prefix) for the property to retrieve the text from
   * @param {*} valueId the corresponding value for the property (may be index)
   * @returns {{value, fallback}|null} Returns the property text (as value in object), or null if nothing is found
   * @see Properties
   */
  getPropertyText_Properties (propId, valueId, skipMask = false) {
    const propMap = this.Properties[propId]
    const propTexts = this.PropertiesTexts[propId]
    if (!propMap?.values) {
      return null
    }
    // conditionally transform value (for instance being a mask value)
    if (!!propMap.isMask && !skipMask) {
      const maskValueIds = this.getMultipleValues(propMap, valueId)
      const valueTexts = maskValueIds.map(maskValueId => this.getPropertyText_Properties(propId, maskValueId, /* skipMask */ true))

      const texts = valueTexts.map(x => x.text).filter(x => !!x).join(propMap.delimiter ?? this.Defaults.MultiValueDelimiter)
      const fallbacks = valueTexts.map(x => x.fallback).filter(x => !!x).join(propMap.delimiter ?? this.Defaults.MultiValueDelimiter)
      return { text: texts, fallbacks: fallbacks || undefined }
    }

    // try finding the corresponding text
    let propValue
    const propText = propTexts?.ValueMappings?.[+valueId]
    if (!propText) {
      // try finding the corresponding value
      const propValue = propMap?.values?.[+valueId]
      if (propValue === undefined) {
        // no mappings found, fallback to property value
        return this.getPropertyValue_Properties(propId, valueId)
      }
    }
    // value found, return the value as part of an object
    const textValue = propText?.Text || propValue?.Text
    return { text: textValue }
  }

  /**
   * Sets the property of a given object based on specified property path (see groupPath)
   *
   * @param {Object} object The object to retrieve the property from
   * @param {Object} groupPath the path/group leading to the property
   * @param {*} propertyKey the property key
   * @param {*} propertyValue The value to set
   */
  setObjectProperty (object, groupPath, propertyKey, propertyValue) {
    const paths = (Array.isArray(groupPath) ? groupPath : groupPath?.split('.')) || []
    paths.push(propertyKey)
    // eslint-disable-next-line no-return-assign
    paths.reduce((o, p, i) => o[p] = paths.length === ++i ? propertyValue : o[p] || {}, object)
  }

  /**
   * Get the property of a given object based on specified property path (see groupPath)
   *
   * @param {} object The object to retrieve the property from
   * @param {string|string[]} groupPath the path/group leading to the property.
   * @param {*} propertyKey the property key
   * @param {*} defaultValue the default value to return if no value is found
   * @returns return the property value if found, otherwise returns 'undefined', or the value given in defaultValue
   */
  getObjectProperty (object, groupPath, propertyKey, defaultValue = undefined) {
    const paths = (Array.isArray(groupPath) ? groupPath : groupPath?.split('.')) || []
    paths.push(propertyKey)
    return paths.reduce((o, p) => o ? o[p] : defaultValue, object)
  }

  /**
   * Checks if the given value if of kind 'object'
   * @param {Object|any} obj the object to check
   * @returns true if obj is an proper object (not an array)
   */
  isObject (obj) {
    return (typeof obj === 'object' && !Array.isArray(obj) && obj !== null)
  }

  /**
   * Builds are list prioritizing the property field lists (Properties and LocalizedProperties)
   * @param {string|string[]} prioritize the item/list to prioritize
   * @return An ordered list with its last item to be prioritized over the next
   */
  buildFieldsPriorityList (prioritize = []) {
    prioritize = Array.isArray(prioritize) ? prioritize : [prioritize]
    prioritize = (prioritize || []).reverse()
    let steps = ['Properties', 'LocalizedProperties']
    prioritize.forEach(p => {
      steps = [...steps.filter(step => step !== p), p]
    })
    return steps
  }
}
