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
