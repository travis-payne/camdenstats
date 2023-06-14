/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
export const onCreatePlayerGameJoin = /* GraphQL */ `
  subscription OnCreatePlayerGameJoin {
    onCreatePlayerGameJoin {
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
export const onUpdatePlayerGameJoin = /* GraphQL */ `
  subscription OnUpdatePlayerGameJoin {
    onUpdatePlayerGameJoin {
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
export const onDeletePlayerGameJoin = /* GraphQL */ `
  subscription OnDeletePlayerGameJoin {
    onDeletePlayerGameJoin {
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
export const onCreateGoal = /* GraphQL */ `
  subscription OnCreateGoal {
    onCreateGoal {
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
export const onUpdateGoal = /* GraphQL */ `
  subscription OnUpdateGoal {
    onUpdateGoal {
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
export const onDeleteGoal = /* GraphQL */ `
  subscription OnDeleteGoal {
    onDeleteGoal {
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
export const onCreateAssist = /* GraphQL */ `
  subscription OnCreateAssist {
    onCreateAssist {
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
export const onUpdateAssist = /* GraphQL */ `
  subscription OnUpdateAssist {
    onUpdateAssist {
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
export const onDeleteAssist = /* GraphQL */ `
  subscription OnDeleteAssist {
    onDeleteAssist {
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
export const onCreateCausedTurnover = /* GraphQL */ `
  subscription OnCreateCausedTurnover {
    onCreateCausedTurnover {
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
export const onUpdateCausedTurnover = /* GraphQL */ `
  subscription OnUpdateCausedTurnover {
    onUpdateCausedTurnover {
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
export const onDeleteCausedTurnover = /* GraphQL */ `
  subscription OnDeleteCausedTurnover {
    onDeleteCausedTurnover {
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
