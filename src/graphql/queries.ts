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
          __typename
        }
        nextToken
        __typename
      }
      goals {
        items {
          id
          gameID
          playerID
          assistID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      assists {
        items {
          id
          gameID
          playerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      causedTurnovers {
        items {
          id
          gameID
          playerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
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
          __typename
        }
        goals {
          nextToken
          __typename
        }
        assists {
          nextToken
          __typename
        }
        causedTurnovers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
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
      goals {
        items {
          id
          gameID
          playerID
          assistID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      player {
        items {
          id
          playerID
          gameID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
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
        goals {
          nextToken
          __typename
        }
        player {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
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
        goals {
          nextToken
          __typename
        }
        player {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      player {
        id
        name
        position
        team
        game {
          nextToken
          __typename
        }
        goals {
          nextToken
          __typename
        }
        assists {
          nextToken
          __typename
        }
        causedTurnovers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
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
          __typename
        }
        player {
          id
          name
          position
          team
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
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
      game {
        id
        against
        date
        team
        location
        live
        oppositionscore
        goals {
          nextToken
          __typename
        }
        player {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      player {
        id
        name
        position
        team
        game {
          nextToken
          __typename
        }
        goals {
          nextToken
          __typename
        }
        assists {
          nextToken
          __typename
        }
        causedTurnovers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
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
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
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
          __typename
        }
        player {
          id
          name
          position
          team
          createdAt
          updatedAt
          __typename
        }
        assist {
          id
          gameID
          playerID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
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
          __typename
        }
        goals {
          nextToken
          __typename
        }
        assists {
          nextToken
          __typename
        }
        causedTurnovers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
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
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
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
          __typename
        }
        goals {
          nextToken
          __typename
        }
        assists {
          nextToken
          __typename
        }
        causedTurnovers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
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
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
