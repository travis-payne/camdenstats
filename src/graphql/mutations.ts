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
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
export const createPlayerGameJoin = /* GraphQL */ `
  mutation CreatePlayerGameJoin(
    $input: CreatePlayerGameJoinInput!
    $condition: ModelPlayerGameJoinConditionInput
  ) {
    createPlayerGameJoin(input: $input, condition: $condition) {
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
export const updatePlayerGameJoin = /* GraphQL */ `
  mutation UpdatePlayerGameJoin(
    $input: UpdatePlayerGameJoinInput!
    $condition: ModelPlayerGameJoinConditionInput
  ) {
    updatePlayerGameJoin(input: $input, condition: $condition) {
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
export const deletePlayerGameJoin = /* GraphQL */ `
  mutation DeletePlayerGameJoin(
    $input: DeletePlayerGameJoinInput!
    $condition: ModelPlayerGameJoinConditionInput
  ) {
    deletePlayerGameJoin(input: $input, condition: $condition) {
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
export const createGoal = /* GraphQL */ `
  mutation CreateGoal(
    $input: CreateGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    createGoal(input: $input, condition: $condition) {
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
export const updateGoal = /* GraphQL */ `
  mutation UpdateGoal(
    $input: UpdateGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    updateGoal(input: $input, condition: $condition) {
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
export const deleteGoal = /* GraphQL */ `
  mutation DeleteGoal(
    $input: DeleteGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    deleteGoal(input: $input, condition: $condition) {
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
export const createAssist = /* GraphQL */ `
  mutation CreateAssist(
    $input: CreateAssistInput!
    $condition: ModelAssistConditionInput
  ) {
    createAssist(input: $input, condition: $condition) {
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
export const updateAssist = /* GraphQL */ `
  mutation UpdateAssist(
    $input: UpdateAssistInput!
    $condition: ModelAssistConditionInput
  ) {
    updateAssist(input: $input, condition: $condition) {
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
export const deleteAssist = /* GraphQL */ `
  mutation DeleteAssist(
    $input: DeleteAssistInput!
    $condition: ModelAssistConditionInput
  ) {
    deleteAssist(input: $input, condition: $condition) {
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
export const createCausedTurnover = /* GraphQL */ `
  mutation CreateCausedTurnover(
    $input: CreateCausedTurnoverInput!
    $condition: ModelCausedTurnoverConditionInput
  ) {
    createCausedTurnover(input: $input, condition: $condition) {
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
export const updateCausedTurnover = /* GraphQL */ `
  mutation UpdateCausedTurnover(
    $input: UpdateCausedTurnoverInput!
    $condition: ModelCausedTurnoverConditionInput
  ) {
    updateCausedTurnover(input: $input, condition: $condition) {
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
export const deleteCausedTurnover = /* GraphQL */ `
  mutation DeleteCausedTurnover(
    $input: DeleteCausedTurnoverInput!
    $condition: ModelCausedTurnoverConditionInput
  ) {
    deleteCausedTurnover(input: $input, condition: $condition) {
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
