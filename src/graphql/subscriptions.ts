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
      player {
        id
        name
        position
        team
        game {
          nextToken
        }
        createdAt
        updatedAt
      }
      game {
        id
        against
        date
        team
        location
        live
        player {
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
export const onUpdateGoal = /* GraphQL */ `
  subscription OnUpdateGoal {
    onUpdateGoal {
      id
      player {
        id
        name
        position
        team
        game {
          nextToken
        }
        createdAt
        updatedAt
      }
      game {
        id
        against
        date
        team
        location
        live
        player {
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
export const onDeleteGoal = /* GraphQL */ `
  subscription OnDeleteGoal {
    onDeleteGoal {
      id
      player {
        id
        name
        position
        team
        game {
          nextToken
        }
        createdAt
        updatedAt
      }
      game {
        id
        against
        date
        team
        location
        live
        player {
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
