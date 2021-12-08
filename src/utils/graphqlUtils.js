import * as mutations from '../graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'
import {
  listPlayers,
  listPlayerGameJoins,
  listGoals,
  listAssists,
  listCausedTurnovers,
  getGame
} from '../graphql/queries'
import {
  getGameCustom,
  listGoalsCustom,
  listPlayersCustom,
  listCausedTurnoversCustom,
  listGamesCustom
} from '../graphql/customqueries'


class GraphQlUtils {
  static fetchPlayers = async () => {
    try {
      const playerData = await API.graphql(graphqlOperation(listPlayers))
      const players = playerData.data.listPlayers.items
      return players
    } catch (err) {
      console.log(err)
    }
  }

  static fetchAndAggregatePlayers = async () => {
    try {
      const playerData = await API.graphql(graphqlOperation(listPlayersCustom))
      const players = playerData.data.listPlayers.items
      const aggregatedData = players.map((player) => {
        return {
          name: player.name,
          position: player.position,
          team: player.team,
          goals: player.goals ? player.goals.items.length : 0,
          assists: player.assists ? player.assists.items.length : 0,
          points:
            (player.goals ? player.goals.items.length : 0) +
            (player.assists ? player.assists.items.length : 0),
          turnovers: player.causedTurnovers
            ? player.causedTurnovers.items.length
            : 0,
        }
      })
      return aggregatedData
    } catch (err) {
      console.log(err)
    }
  }

  static fetchGames = async () => {
    try {
      const gameData = await API.graphql(graphqlOperation(listGamesCustom))
      const games = gameData.data.listGames.items
      return games
    } catch (err) {
      console.log(err)
    }
  }

  static getGoalsByGame = async (id) => {
    try {
      const goalData = await API.graphql(
        graphqlOperation(listGoalsCustom, {
          filter: {
            gameID: {
              eq: id,
            },
          },
        }),
      )
      return goalData.data.listGoals.items
    } catch (err) {
      console.log('err', err)
    }
  }

  static getTurnoversByGame = async (id) => {
    try {
      const goalData = await API.graphql(
        graphqlOperation(listCausedTurnoversCustom, {
          filter: {
            gameID: {
              eq: id,
            },
          },
        }),
      )
      return goalData.data.listCausedTurnovers.items
    } catch (err) {
      console.log('err', err)
    }
  }

  static getGame = async (id) => {
    try {
      const gameData = await API.graphql(
        graphqlOperation(getGame, { id: id }),
      )
      return gameData.data.getGame
    } catch (err) {
      console.log('err', err)
    }
  }

  static updateGame = async (game) => {
    try{
      const result = await API.graphql(graphqlOperation(mutations.updateGame,{input: game}))
      return result;
    } catch(err){
      console.log('err', err)

    }
  }

  static getPlayersByGame = async (id) => {
    try {
      const gameData = await API.graphql(
        graphqlOperation(getGameCustom, { id: id }),
      )
      return gameData.data.getGame.player.items
    } catch (err) {
      console.log('err', err)
    }
  }

  static deletePlayer = async (playerId) => {
    // Delete all assists
    const assistData = await API.graphql(
      graphqlOperation(listAssists, {
        filter: {
          playerID: {
            eq: playerId,
          },
        },
      }),
    )

    var result = assistData.data.listAssists.items
    if (result.length > 0) {
      result.forEach((x) => {
        const id = {
          id: x.id,
        }
        API.graphql({
          query: mutations.deleteAssist,
          variables: { input: id },
        })
      })
    }

    //Delete all goals
    const goalData = await API.graphql(
      graphqlOperation(listGoals, {
        filter: {
          playerID: {
            eq: playerId,
          },
        },
      }),
    )
    result = goalData.data.listGoals.items
    if (result.length > 0) {
      result.forEach((x) => {
        const id = {
          id: x.id,
        }
        API.graphql({
          query: mutations.deleteGoal,
          variables: { input: id },
        })
      })
    }

    // Delete all caused turnovers
    const turnoverData = await API.graphql(
      graphqlOperation(listCausedTurnovers, {
        filter: {
          playerID: {
            eq: playerId,
          },
        },
      }),
    )
    result = turnoverData.data.listCausedTurnovers.items
    if (result.length > 0) {
      result.forEach((x) => {
        const id = {
          id: x.id,
        }
        API.graphql({
          query: mutations.deleteCausedTurnover,
          variables: { input: id },
        })
      })
    }

    // First need to remove player-game relations
    const playerData = await API.graphql(
      graphqlOperation(listPlayerGameJoins, {
        filter: {
          playerID: {
            eq: playerId,
          },
        },
      }),
    )
    const joins = playerData.data.listPlayerGameJoins.items

    joins.forEach((join) => {
      const id = {
        id: join.id,
      }
      API.graphql({
        query: mutations.deletePlayerGameJoin,
        variables: { input: id },
      })
    })

    API.graphql({
      query: mutations.deletePlayer,
      variables: {
        input: {
          id: playerId,
        },
      },
    })
  }

  static deleteGoal = async (goalId, assistId) => {
    // First need to remove assist relations
    API.graphql({
      query: mutations.deleteAssist,
      variables: {
        input: {
          id: assistId,
        },
      },
    })
    API.graphql({
      query: mutations.deleteGoal,
      variables: {
        input: {
          id: goalId,
        },
      },
    })
  }

  static deleteCausedTurnover = async (turnoverId) => {
    API.graphql({
      query: mutations.deleteCausedTurnover,
      variables: {
        input: {
          id: turnoverId,
        },
      },
    })
  }

  static deletePlayerFromGame = async (playerId, gameId) => {
    try {
      const playerData = await API.graphql(
        graphqlOperation(listPlayerGameJoins, {
          filter: {
            playerID: {
              eq: playerId,
            },
            gameID: {
              eq: gameId,
            },
          },
        }),
      )
      const result = playerData.data.listPlayerGameJoins.items

      if (result.length > 0) {
        result.forEach((x) => {
          const id = {
            id: x.id,
          }
          API.graphql({
            query: mutations.deletePlayerGameJoin,
            variables: { input: id },
          })
        })
      }
    } catch (err) {
      console.log('err', err)
    }
    // Delete all assists
    const assistData = await API.graphql(
      graphqlOperation(listAssists, {
        filter: {
          playerID: {
            eq: playerId,
          },
          gameID: {
            eq: gameId,
          },
        },
      }),
    )

    var result = assistData.data.listAssists.items
    if (result.length > 0) {
      result.forEach((x) => {
        const id = {
          id: x.id,
        }
        API.graphql({
          query: mutations.deleteAssist,
          variables: { input: id },
        })
      })
    }

    //Delete all goals
    const goalData = await API.graphql(
      graphqlOperation(listGoals, {
        filter: {
          playerID: {
            eq: playerId,
          },
          gameID: {
            eq: gameId,
          },
        },
      }),
    )
    result = goalData.data.listGoals.items
    if (result.length > 0) {
      result.forEach((x) => {
        const id = {
          id: x.id,
        }
        API.graphql({
          query: mutations.deleteGoal,
          variables: { input: id },
        })
      })
    }

    // Delete all caused turnovers
    const turnoverData = await API.graphql(
      graphqlOperation(listCausedTurnovers, {
        filter: {
          playerID: {
            eq: playerId,
          },
          gameID: {
            eq: gameId,
          },
        },
      }),
    )
    result = turnoverData.data.listCausedTurnovers.items
    if (result.length > 0) {
      result.forEach((x) => {
        const id = {
          id: x.id,
        }
        API.graphql({
          query: mutations.deleteCausedTurnover,
          variables: { input: id },
        })
      })
    }
  }

  static deleteGame = async (gameId) => {
    // Remove all assists
    const assistData = await API.graphql(
      graphqlOperation(listAssists, {
        filter: {
          gameID: {
            eq: gameId,
          },
        },
      }),
    )

    var result = assistData.data.listAssists.items
    if (result.length > 0) {
      result.forEach((x) => {
        const id = {
          id: x.id,
        }
        API.graphql({
          query: mutations.deleteAssist,
          variables: { input: id },
        })
      })
    }

    // Remove all goals
    const goalData = await API.graphql(
      graphqlOperation(listGoals, {
        filter: {
          gameID: {
            eq: gameId,
          },
        },
      }),
    )

    result = goalData.data.listGoals.items
    if (result.length > 0) {
      result.forEach((x) => {
        const id = {
          id: x.id,
        }
        API.graphql({
          query: mutations.deleteGoal,
          variables: { input: id },
        })
      })
    }

    // Delete all caused turnovers
    const turnoverData = await API.graphql(
      graphqlOperation(listCausedTurnovers, {
        filter: {
          gameID: {
            eq: gameId,
          },
        },
      }),
    )
    result = turnoverData.data.listCausedTurnovers.items
    if (result.length > 0) {
      result.forEach((x) => {
        const id = {
          id: x.id,
        }
        API.graphql({
          query: mutations.deleteCausedTurnover,
          variables: { input: id },
        })
      })
    }

    //Remove all players joins from Game
    const joinData = await API.graphql(
      graphqlOperation(listPlayerGameJoins, {
        filter: {
          gameID: {
            eq: gameId,
          },
        },
      }),
    )
    result = joinData.data.listPlayerGameJoins.items

    if (result.length > 0) {
      result.forEach((x) => {
        const id = {
          id: x.id,
        }
        API.graphql({
          query: mutations.deletePlayerGameJoin,
          variables: { input: id },
        })
      })
    }

    //Remove Game
    API.graphql({
      query: mutations.deleteGame,
      variables: {
        input: {
          id: gameId,
        },
      },
    })
  }
}

export default GraphQlUtils
