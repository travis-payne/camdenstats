/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      name
      position
      team
      game {
        items {
          id
          playerID
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      goals {
        items {
          id
          gameID
          playerID
          assistID
          createdAt
          updatedAt
        }
        nextToken
      }
      assists {
        items {
          id
          gameID
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
      causedTurnovers {
        items {
          id
          gameID
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        position
        team
        game {
          nextToken
        }
        goals {
          nextToken
        }
        assists {
          nextToken
        }
        causedTurnovers {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      against
      date
      team
      location
      live
      oppositionscore
      player {
        items {
          id
          playerID
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        against
        date
        team
        location
        live
        oppositionscore
        player {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlayerGameJoin = /* GraphQL */ `
  query GetPlayerGameJoin($id: ID!) {
    getPlayerGameJoin(id: $id) {
      id
      playerID
      gameID
      game {
        id
        against
        date
        team
        location
        live
        oppositionscore
        player {
          nextToken
        }
        createdAt
        updatedAt
      }
      player {
        id
        name
        position
        team
        game {
          nextToken
        }
        goals {
          nextToken
        }
        assists {
          nextToken
        }
        causedTurnovers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPlayerGameJoins = /* GraphQL */ `
  query ListPlayerGameJoins(
    $filter: ModelPlayerGameJoinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayerGameJoins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        playerID
        gameID
        game {
          id
          against
          date
          team
          location
          live
          oppositionscore
          createdAt
          updatedAt
        }
        player {
          id
          name
          position
          team
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGoal = /* GraphQL */ `
  query GetGoal($id: ID!) {
    getGoal(id: $id) {
      id
      gameID
      playerID
      assistID
      player {
        id
        name
        position
        team
        game {
          nextToken
        }
        goals {
          nextToken
        }
        assists {
          nextToken
        }
        causedTurnovers {
          nextToken
        }
        createdAt
        updatedAt
      }
      assist {
        id
        gameID
        playerID
        player {
          id
          name
          position
          team
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listGoals = /* GraphQL */ `
  query ListGoals(
    $filter: ModelGoalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        gameID
        playerID
        assistID
        player {
          id
          name
          position
          team
          createdAt
          updatedAt
        }
        assist {
          id
          gameID
          playerID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAssist = /* GraphQL */ `
  query GetAssist($id: ID!) {
    getAssist(id: $id) {
      id
      gameID
      playerID
      player {
        id
        name
        position
        team
        game {
          nextToken
        }
        goals {
          nextToken
        }
        assists {
          nextToken
        }
        causedTurnovers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAssists = /* GraphQL */ `
  query ListAssists(
    $filter: ModelAssistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        gameID
        playerID
        player {
          id
          name
          position
          team
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCausedTurnover = /* GraphQL */ `
  query GetCausedTurnover($id: ID!) {
    getCausedTurnover(id: $id) {
      id
      gameID
      playerID
      player {
        id
        name
        position
        team
        game {
          nextToken
        }
        goals {
          nextToken
        }
        assists {
          nextToken
        }
        causedTurnovers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCausedTurnovers = /* GraphQL */ `
  query ListCausedTurnovers(
    $filter: ModelCausedTurnoverFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCausedTurnovers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        gameID
        playerID
        player {
          id
          name
          position
          team
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
