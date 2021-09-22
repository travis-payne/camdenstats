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
export const onUpdateGoal = /* GraphQL */ `
  subscription OnUpdateGoal {
    onUpdateGoal {
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
export const onDeleteGoal = /* GraphQL */ `
  subscription OnDeleteGoal {
    onDeleteGoal {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
