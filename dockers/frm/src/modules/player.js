import { gameData } from '../server.js'
import { localENG } from '../server.js'

export default async function (req) {

  return new Promise((playerData) => {
    var playerPayload = {
      "payload": {
        "allyCode": req
      },
      "enums": false
    }

    fetch('http://swgoh_comlink:2500/player', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(playerPayload)
    })

      .then((req) => {
        var contentType = req.headers.get("content-type")

        if (contentType && contentType.includes("application/json")) {
          return req.json()
        }
      })
      .then(async function (comlinkPlayerdata) {

        var comlinkAPIArray = [];
        comlinkAPIArray = comlinkPlayerdata;

        var playerInfoCharGP
        var playerInfoShipGP
        var playerInfoGP

        for (let profileStats = 0,
          profileStatsList = comlinkAPIArray.profileStat.length;
          profileStats < profileStatsList;
          profileStats++
        ) {
          if (comlinkAPIArray.profileStat[profileStats].nameKey == "STAT_SHIP_GALACTIC_POWER_ACQUIRED_NAME") {
            playerInfoShipGP = comlinkAPIArray.profileStat[profileStats].value
          }
          if (comlinkAPIArray.profileStat[profileStats].nameKey == "STAT_CHARACTER_GALACTIC_POWER_ACQUIRED_NAME") {
            playerInfoCharGP = comlinkAPIArray.profileStat[profileStats].value
          }
          if (comlinkAPIArray.profileStat[profileStats].nameKey == "STAT_GALACTIC_POWER_ACQUIRED_NAME") {
            playerInfoGP = comlinkAPIArray.profileStat[profileStats].value
          }
        }

        var playerInfo = [];
        var units = [];
        var JSONunits = [];


        // Player Information
        playerInfo = {
          source: "swgoh_comlink",
          name: comlinkAPIArray.name,
          guild_name: comlinkAPIArray.guildName,
          level: comlinkAPIArray.level,
          arena_rank: comlinkAPIArray.pvpProfile[0].rank,
          character_galactic_power: playerInfoCharGP,
          ship_galactic_power: playerInfoShipGP,
          galactic_power: playerInfoGP,
          last_updated: comlinkAPIArray.lastActivityTime
        }

        fetch('http://swgoh_stats:3223/api?flags=calcGP', {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(comlinkAPIArray.rosterUnit)
        })
          .then(function (res) {
            var contentType = res.headers.get('content-type')
            if (contentType && contentType.includes('application/json')) {
              return res.json()
            }
          })
          .then(function (rosterData) {

            for (let rosterUnits = 0,
              rosterUnitsList = rosterData.length;
              rosterUnits < rosterUnitsList;
              rosterUnits++) {
              var unitNameKey = null
              var unitLowSkill = null
              var unitCombatType = null
              var unitRelicTier = null
              for (let gameDataEnum = 0,
                gameDataList = gameData.length;
                gameDataEnum < gameDataList;
                gameDataEnum++) {
                if (rosterData[rosterUnits].definitionId == gameData[gameDataEnum].id) {
                  unitNameKey = gameData[gameDataEnum].nameKey
                  unitCombatType = gameData[gameDataEnum].combatType
                }
              }
              if (unitCombatType == 1) {
                if (rosterData[rosterUnits].relic.currentTier == 1) {
                  unitRelicTier = "Locked"
                }
                else if (rosterData[rosterUnits].relic.currentTier == 2) {
                  unitRelicTier = "unlocked"
                }
                else if (rosterData[rosterUnits].relic.currentTier > 2) {
                  unitRelicTier = comlinkAPIArray.rosterUnit[rosterUnits].relic.currentTier - 2
                }

                if (rosterData[rosterUnits].skill.length > 0) {
                  let skillsArr = []

                  for (let skill = 0,
                    skillList = rosterData[rosterUnits].skill.length;
                    skill < skillList;
                    skill++) {
                      skillsArr.push(Number(rosterData[rosterUnits].skill[skill].tier))
                  }

                  if (Math.min.apply(null, skillsArr) == Infinity ) {
                    unitLowSkill = 1;
                  } else {
                    unitLowSkill = Math.min.apply(null, skillsArr) + 2
                  }
                } else {
                  unitLowSkill = 1
                }
              }
              var unitInfo = {
                name: localENG[unitNameKey],
                stars: rosterData[rosterUnits].currentRarity,
                level: rosterData[rosterUnits].currentLevel,
                gear: rosterData[rosterUnits].currentTier,
                power: rosterData[rosterUnits].gp,
                low_skill: unitLowSkill,
                combat_type: unitCombatType,
                relic_tier: unitRelicTier
              }

              units.push(unitInfo)
            }

            JSONunits.push(playerInfo)
            JSONunits.push(units)

            var JSONreply = JSON.stringify(JSONunits)
            playerData(JSONreply)
          })
      })
      .catch(function (err) {
        console.log(err);
      });
  })
}