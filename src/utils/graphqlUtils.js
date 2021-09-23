import * as mutations from '../graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'
import { listPlayers, listGames, listPlayerGameJoins, listGoals, listAssists } from '../graphql/queries'
import { getGameCustom, listGoalsCustom } from '../graphql/customqueries'

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

  static fetchGames = async () => {
    try {
      const gameData = await API.graphql(graphqlOperation(listGames))
      const games = gameData.data.listGames.items
      return games
    } catch (err) {
      console.log(err)
    }
  }

  static getGoalsByGame = async(id) => {
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
      return goalData.data.listGoals.items;
    } catch (err) {
      console.log('err', err)
    }
  }

  static getPlayersByGame = async (id) => {
    try {
      const gameData = await API.graphql(graphqlOperation(getGameCustom, { id: id }))
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

  static deleteGoal = async (goalId,assistId) => {
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
