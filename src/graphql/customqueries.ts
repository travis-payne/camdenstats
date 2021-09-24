export const getGameCustom = /* GraphQL */ `
  query GetGameCustom($id: ID!) {
    getGame(id: $id) {
      id
      against
      date
      team
      location
      live
      player {
        items {
          id
          playerID
          gameID
          player {
            id
            name
            position
            team
          }
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

export const listGoalsCustom = /* GraphQL */ `
  query ListGoalsCustom(
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
          player{
            name
          }
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

export const listPlayersCustom = /* GraphQL */ `
  query listPlayersCustom(
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
          items{
            id
          }
        }
        assists {
          items{
            id
          }
        }
        causedTurnovers {
          items{
            id
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const listCausedTurnoversCustom = /* GraphQL */ `
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