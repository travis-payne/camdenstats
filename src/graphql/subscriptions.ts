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
        }
        nextToken
      }
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
        }
        nextToken
      }
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
        }
        nextToken
      }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
