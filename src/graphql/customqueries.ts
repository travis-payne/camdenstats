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
