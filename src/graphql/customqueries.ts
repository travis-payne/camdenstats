export const getGameCustom = /* GraphQL */ `
  query GetGame($id: ID!) {
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
          player {
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