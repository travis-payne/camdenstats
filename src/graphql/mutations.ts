/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      name
      position
      team
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      name
      position
      team
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      name
      position
      team
      createdAt
      updatedAt
    }
  }
`;
export const createGoal = /* GraphQL */ `
  mutation CreateGoal(
    $input: CreateGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    createGoal(input: $input, condition: $condition) {
      id
      player {
        id
        name
        position
        team
        createdAt
        updatedAt
      }
      game {
        id
        against
        date
        goals {
          id
          createdAt
          updatedAt
        }
        players {
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
export const updateGoal = /* GraphQL */ `
  mutation UpdateGoal(
    $input: UpdateGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    updateGoal(input: $input, condition: $condition) {
      id
      player {
        id
        name
        position
        team
        createdAt
        updatedAt
      }
      game {
        id
        against
        date
        goals {
          id
          createdAt
          updatedAt
        }
        players {
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
export const deleteGoal = /* GraphQL */ `
  mutation DeleteGoal(
    $input: DeleteGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    deleteGoal(input: $input, condition: $condition) {
      id
      player {
        id
        name
        position
        team
        createdAt
        updatedAt
      }
      game {
        id
        against
        date
        goals {
          id
          createdAt
          updatedAt
        }
        players {
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
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      against
      date
      goals {
        id
        player {
          id
          name
          position
          team
          createdAt
          updatedAt
        }
        game {
          id
          against
          date
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      players {
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
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      against
      date
      goals {
        id
        player {
          id
          name
          position
          team
          createdAt
          updatedAt
        }
        game {
          id
          against
          date
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      players {
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
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      against
      date
      goals {
        id
        player {
          id
          name
          position
          team
          createdAt
          updatedAt
        }
        game {
          id
          against
          date
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      players {
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
  }
`;
