/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePlayerInput = {
  id?: string | null,
  name: string,
  position: string,
  team: number,
};

export type ModelPlayerConditionInput = {
  name?: ModelStringInput | null,
  position?: ModelStringInput | null,
  team?: ModelIntInput | null,
  and?: Array< ModelPlayerConditionInput | null > | null,
  or?: Array< ModelPlayerConditionInput | null > | null,
  not?: ModelPlayerConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Player = {
  __typename: "Player",
  id: string,
  name: string,
  position: string,
  team: number,
  game?: ModelPlayerGameJoinConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPlayerGameJoinConnection = {
  __typename: "ModelPlayerGameJoinConnection",
  items?:  Array<PlayerGameJoin | null > | null,
  nextToken?: string | null,
};

export type PlayerGameJoin = {
  __typename: "PlayerGameJoin",
  id: string,
  playerID: string,
  gameID: string,
  game: Game,
  player: Player,
  createdAt: string,
  updatedAt: string,
};

export type Game = {
  __typename: "Game",
  id: string,
  against: string,
  date: string,
  team: number,
  location: string,
  live: boolean,
  goals?:  Array<Goal | null > | null,
  player?: ModelPlayerGameJoinConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type Goal = {
  __typename: "Goal",
  id: string,
  player: Player,
  game: Game,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePlayerInput = {
  id: string,
  name?: string | null,
  position?: string | null,
  team?: number | null,
};

export type DeletePlayerInput = {
  id: string,
};

export type CreateGameInput = {
  id?: string | null,
  against: string,
  date: string,
  team: number,
  location: string,
  live: boolean,
};

export type ModelGameConditionInput = {
  against?: ModelStringInput | null,
  date?: ModelStringInput | null,
  team?: ModelIntInput | null,
  location?: ModelStringInput | null,
  live?: ModelBooleanInput | null,
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateGameInput = {
  id: string,
  against?: string | null,
  date?: string | null,
  team?: number | null,
  location?: string | null,
  live?: boolean | null,
};

export type DeleteGameInput = {
  id: string,
};

export type CreatePlayerGameJoinInput = {
  id?: string | null,
  playerID: string,
  gameID: string,
};

export type ModelPlayerGameJoinConditionInput = {
  playerID?: ModelIDInput | null,
  gameID?: ModelIDInput | null,
  and?: Array< ModelPlayerGameJoinConditionInput | null > | null,
  or?: Array< ModelPlayerGameJoinConditionInput | null > | null,
  not?: ModelPlayerGameJoinConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePlayerGameJoinInput = {
  id: string,
  playerID?: string | null,
  gameID?: string | null,
};

export type DeletePlayerGameJoinInput = {
  id: string,
};

export type CreateGoalInput = {
  id?: string | null,
};

export type ModelGoalConditionInput = {
  and?: Array< ModelGoalConditionInput | null > | null,
  or?: Array< ModelGoalConditionInput | null > | null,
  not?: ModelGoalConditionInput | null,
};

export type UpdateGoalInput = {
  id: string,
};

export type DeleteGoalInput = {
  id: string,
};

export type ModelPlayerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  position?: ModelStringInput | null,
  team?: ModelIntInput | null,
  and?: Array< ModelPlayerFilterInput | null > | null,
  or?: Array< ModelPlayerFilterInput | null > | null,
  not?: ModelPlayerFilterInput | null,
};

export type ModelPlayerConnection = {
  __typename: "ModelPlayerConnection",
  items?:  Array<Player | null > | null,
  nextToken?: string | null,
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null,
  against?: ModelStringInput | null,
  date?: ModelStringInput | null,
  team?: ModelIntInput | null,
  location?: ModelStringInput | null,
  live?: ModelBooleanInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
};

export type ModelGameConnection = {
  __typename: "ModelGameConnection",
  items?:  Array<Game | null > | null,
  nextToken?: string | null,
};

export type ModelPlayerGameJoinFilterInput = {
  id?: ModelIDInput | null,
  playerID?: ModelIDInput | null,
  gameID?: ModelIDInput | null,
  and?: Array< ModelPlayerGameJoinFilterInput | null > | null,
  or?: Array< ModelPlayerGameJoinFilterInput | null > | null,
  not?: ModelPlayerGameJoinFilterInput | null,
};

export type ModelGoalFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelGoalFilterInput | null > | null,
  or?: Array< ModelGoalFilterInput | null > | null,
  not?: ModelGoalFilterInput | null,
};

export type ModelGoalConnection = {
  __typename: "ModelGoalConnection",
  items?:  Array<Goal | null > | null,
  nextToken?: string | null,
};

export type CreatePlayerMutationVariables = {
  input: CreatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type CreatePlayerMutation = {
  createPlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    position: string,
    team: number,
    game?:  {
      __typename: "ModelPlayerGameJoinConnection",
      items?:  Array< {
        __typename: "PlayerGameJoin",
        id: string,
        playerID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  input: UpdatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerMutation = {
  updatePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    position: string,
    team: number,
    game?:  {
      __typename: "ModelPlayerGameJoinConnection",
      items?:  Array< {
        __typename: "PlayerGameJoin",
        id: string,
        playerID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlayerMutationVariables = {
  input: DeletePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type DeletePlayerMutation = {
  deletePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    position: string,
    team: number,
    game?:  {
      __typename: "ModelPlayerGameJoinConnection",
      items?:  Array< {
        __typename: "PlayerGameJoin",
        id: string,
        playerID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame?:  {
    __typename: "Game",
    id: string,
    against: string,
    date: string,
    team: number,
    location: string,
    live: boolean,
    goals?:  Array< {
      __typename: "Goal",
      id: string,
      player:  {
        __typename: "Player",
        id: string,
        name: string,
        position: string,
        team: number,
        createdAt: string,
        updatedAt: string,
      },
      game:  {
        __typename: "Game",
        id: string,
        against: string,
        date: string,
        team: number,
        location: string,
        live: boolean,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    player?:  {
      __typename: "ModelPlayerGameJoinConnection",
      items?:  Array< {
        __typename: "PlayerGameJoin",
        id: string,
        playerID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type UpdateGameMutation = {
  updateGame?:  {
    __typename: "Game",
    id: string,
    against: string,
    date: string,
    team: number,
    location: string,
    live: boolean,
    goals?:  Array< {
      __typename: "Goal",
      id: string,
      player:  {
        __typename: "Player",
        id: string,
        name: string,
        position: string,
        team: number,
        createdAt: string,
        updatedAt: string,
      },
      game:  {
        __typename: "Game",
        id: string,
        against: string,
        date: string,
        team: number,
        location: string,
        live: boolean,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    player?:  {
      __typename: "ModelPlayerGameJoinConnection",
      items?:  Array< {
        __typename: "PlayerGameJoin",
        id: string,
        playerID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
  condition?: ModelGameConditionInput | null,
};

export type DeleteGameMutation = {
  deleteGame?:  {
    __typename: "Game",
    id: string,
    against: string,
    date: string,
    team: number,
    location: string,
    live: boolean,
    goals?:  Array< {
      __typename: "Goal",
      id: string,
      player:  {
        __typename: "Player",
        id: string,
        name: string,
        position: string,
        team: number,
        createdAt: string,
        updatedAt: string,
      },
      game:  {
        __typename: "Game",
        id: string,
        against: string,
        date: string,
        team: number,
        location: string,
        live: boolean,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    player?:  {
      __typename: "ModelPlayerGameJoinConnection",
      items?:  Array< {
        __typename: "PlayerGameJoin",
        id: string,
        playerID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlayerGameJoinMutationVariables = {
  input: CreatePlayerGameJoinInput,
  condition?: ModelPlayerGameJoinConditionInput | null,
};

export type CreatePlayerGameJoinMutation = {
  createPlayerGameJoin?:  {
    __typename: "PlayerGameJoin",
    id: string,
    playerID: string,
    gameID: string,
    game:  {
      __typename: "Game",
      id: string,
      against: string,
      date: string,
      team: number,
      location: string,
      live: boolean,
      goals?:  Array< {
        __typename: "Goal",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      player?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      position: string,
      team: number,
      game?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlayerGameJoinMutationVariables = {
  input: UpdatePlayerGameJoinInput,
  condition?: ModelPlayerGameJoinConditionInput | null,
};

export type UpdatePlayerGameJoinMutation = {
  updatePlayerGameJoin?:  {
    __typename: "PlayerGameJoin",
    id: string,
    playerID: string,
    gameID: string,
    game:  {
      __typename: "Game",
      id: string,
      against: string,
      date: string,
      team: number,
      location: string,
      live: boolean,
      goals?:  Array< {
        __typename: "Goal",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      player?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      position: string,
      team: number,
      game?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlayerGameJoinMutationVariables = {
  input: DeletePlayerGameJoinInput,
  condition?: ModelPlayerGameJoinConditionInput | null,
};

export type DeletePlayerGameJoinMutation = {
  deletePlayerGameJoin?:  {
    __typename: "PlayerGameJoin",
    id: string,
    playerID: string,
    gameID: string,
    game:  {
      __typename: "Game",
      id: string,
      against: string,
      date: string,
      team: number,
      location: string,
      live: boolean,
      goals?:  Array< {
        __typename: "Goal",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      player?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      position: string,
      team: number,
      game?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGoalMutationVariables = {
  input: CreateGoalInput,
  condition?: ModelGoalConditionInput | null,
};

export type CreateGoalMutation = {
  createGoal?:  {
    __typename: "Goal",
    id: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      position: string,
      team: number,
      game?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    game:  {
      __typename: "Game",
      id: string,
      against: string,
      date: string,
      team: number,
      location: string,
      live: boolean,
      goals?:  Array< {
        __typename: "Goal",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      player?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGoalMutationVariables = {
  input: UpdateGoalInput,
  condition?: ModelGoalConditionInput | null,
};

export type UpdateGoalMutation = {
  updateGoal?:  {
    __typename: "Goal",
    id: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      position: string,
      team: number,
      game?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    game:  {
      __typename: "Game",
      id: string,
      against: string,
      date: string,
      team: number,
      location: string,
      live: boolean,
      goals?:  Array< {
        __typename: "Goal",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      player?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGoalMutationVariables = {
  input: DeleteGoalInput,
  condition?: ModelGoalConditionInput | null,
};

export type DeleteGoalMutation = {
  deleteGoal?:  {
    __typename: "Goal",
    id: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      position: string,
      team: number,
      game?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    game:  {
      __typename: "Game",
      id: string,
      against: string,
      date: string,
      team: number,
      location: string,
      live: boolean,
      goals?:  Array< {
        __typename: "Goal",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      player?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPlayerQueryVariables = {
  id: string,
};

export type GetPlayerQuery = {
  getPlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    position: string,
    team: number,
    game?:  {
      __typename: "ModelPlayerGameJoinConnection",
      items?:  Array< {
        __typename: "PlayerGameJoin",
        id: string,
        playerID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlayersQueryVariables = {
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayersQuery = {
  listPlayers?:  {
    __typename: "ModelPlayerConnection",
    items?:  Array< {
      __typename: "Player",
      id: string,
      name: string,
      position: string,
      team: number,
      game?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    id: string,
    against: string,
    date: string,
    team: number,
    location: string,
    live: boolean,
    goals?:  Array< {
      __typename: "Goal",
      id: string,
      player:  {
        __typename: "Player",
        id: string,
        name: string,
        position: string,
        team: number,
        createdAt: string,
        updatedAt: string,
      },
      game:  {
        __typename: "Game",
        id: string,
        against: string,
        date: string,
        team: number,
        location: string,
        live: boolean,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    player?:  {
      __typename: "ModelPlayerGameJoinConnection",
      items?:  Array< {
        __typename: "PlayerGameJoin",
        id: string,
        playerID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames?:  {
    __typename: "ModelGameConnection",
    items?:  Array< {
      __typename: "Game",
      id: string,
      against: string,
      date: string,
      team: number,
      location: string,
      live: boolean,
      goals?:  Array< {
        __typename: "Goal",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      player?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPlayerGameJoinQueryVariables = {
  id: string,
};

export type GetPlayerGameJoinQuery = {
  getPlayerGameJoin?:  {
    __typename: "PlayerGameJoin",
    id: string,
    playerID: string,
    gameID: string,
    game:  {
      __typename: "Game",
      id: string,
      against: string,
      date: string,
      team: number,
      location: string,
      live: boolean,
      goals?:  Array< {
        __typename: "Goal",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      player?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      position: string,
      team: number,
      game?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlayerGameJoinsQueryVariables = {
  filter?: ModelPlayerGameJoinFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayerGameJoinsQuery = {
  listPlayerGameJoins?:  {
    __typename: "ModelPlayerGameJoinConnection",
    items?:  Array< {
      __typename: "PlayerGameJoin",
      id: string,
      playerID: string,
      gameID: string,
      game:  {
        __typename: "Game",
        id: string,
        against: string,
        date: string,
        team: number,
        location: string,
        live: boolean,
        createdAt: string,
        updatedAt: string,
      },
      player:  {
        __typename: "Player",
        id: string,
        name: string,
        position: string,
        team: number,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGoalQueryVariables = {
  id: string,
};

export type GetGoalQuery = {
  getGoal?:  {
    __typename: "Goal",
    id: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      position: string,
      team: number,
      game?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    game:  {
      __typename: "Game",
      id: string,
      against: string,
      date: string,
      team: number,
      location: string,
      live: boolean,
      goals?:  Array< {
        __typename: "Goal",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      player?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGoalsQueryVariables = {
  filter?: ModelGoalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGoalsQuery = {
  listGoals?:  {
    __typename: "ModelGoalConnection",
    items?:  Array< {
      __typename: "Goal",
      id: string,
      player:  {
        __typename: "Player",
        id: string,
        name: string,
        position: string,
        team: number,
        createdAt: string,
        updatedAt: string,
      },
      game:  {
        __typename: "Game",
        id: string,
        against: string,
        date: string,
        team: number,
        location: string,
        live: boolean,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    position: string,
    team: number,
    game?:  {
      __typename: "ModelPlayerGameJoinConnection",
      items?:  Array< {
        __typename: "PlayerGameJoin",
        id: string,
        playerID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    position: string,
    team: number,
    game?:  {
      __typename: "ModelPlayerGameJoinConnection",
      items?:  Array< {
        __typename: "PlayerGameJoin",
        id: string,
        playerID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    position: string,
    team: number,
    game?:  {
      __typename: "ModelPlayerGameJoinConnection",
      items?:  Array< {
        __typename: "PlayerGameJoin",
        id: string,
        playerID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGameSubscription = {
  onCreateGame?:  {
    __typename: "Game",
    id: string,
    against: string,
    date: string,
    team: number,
    location: string,
    live: boolean,
    goals?:  Array< {
      __typename: "Goal",
      id: string,
      player:  {
        __typename: "Player",
        id: string,
        name: string,
        position: string,
        team: number,
        createdAt: string,
        updatedAt: string,
      },
      game:  {
        __typename: "Game",
        id: string,
        against: string,
        date: string,
        team: number,
        location: string,
        live: boolean,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    player?:  {
      __typename: "ModelPlayerGameJoinConnection",
      items?:  Array< {
        __typename: "PlayerGameJoin",
        id: string,
        playerID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame?:  {
    __typename: "Game",
    id: string,
    against: string,
    date: string,
    team: number,
    location: string,
    live: boolean,
    goals?:  Array< {
      __typename: "Goal",
      id: string,
      player:  {
        __typename: "Player",
        id: string,
        name: string,
        position: string,
        team: number,
        createdAt: string,
        updatedAt: string,
      },
      game:  {
        __typename: "Game",
        id: string,
        against: string,
        date: string,
        team: number,
        location: string,
        live: boolean,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    player?:  {
      __typename: "ModelPlayerGameJoinConnection",
      items?:  Array< {
        __typename: "PlayerGameJoin",
        id: string,
        playerID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame?:  {
    __typename: "Game",
    id: string,
    against: string,
    date: string,
    team: number,
    location: string,
    live: boolean,
    goals?:  Array< {
      __typename: "Goal",
      id: string,
      player:  {
        __typename: "Player",
        id: string,
        name: string,
        position: string,
        team: number,
        createdAt: string,
        updatedAt: string,
      },
      game:  {
        __typename: "Game",
        id: string,
        against: string,
        date: string,
        team: number,
        location: string,
        live: boolean,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    player?:  {
      __typename: "ModelPlayerGameJoinConnection",
      items?:  Array< {
        __typename: "PlayerGameJoin",
        id: string,
        playerID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlayerGameJoinSubscription = {
  onCreatePlayerGameJoin?:  {
    __typename: "PlayerGameJoin",
    id: string,
    playerID: string,
    gameID: string,
    game:  {
      __typename: "Game",
      id: string,
      against: string,
      date: string,
      team: number,
      location: string,
      live: boolean,
      goals?:  Array< {
        __typename: "Goal",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      player?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      position: string,
      team: number,
      game?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlayerGameJoinSubscription = {
  onUpdatePlayerGameJoin?:  {
    __typename: "PlayerGameJoin",
    id: string,
    playerID: string,
    gameID: string,
    game:  {
      __typename: "Game",
      id: string,
      against: string,
      date: string,
      team: number,
      location: string,
      live: boolean,
      goals?:  Array< {
        __typename: "Goal",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      player?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      position: string,
      team: number,
      game?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlayerGameJoinSubscription = {
  onDeletePlayerGameJoin?:  {
    __typename: "PlayerGameJoin",
    id: string,
    playerID: string,
    gameID: string,
    game:  {
      __typename: "Game",
      id: string,
      against: string,
      date: string,
      team: number,
      location: string,
      live: boolean,
      goals?:  Array< {
        __typename: "Goal",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      player?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      position: string,
      team: number,
      game?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGoalSubscription = {
  onCreateGoal?:  {
    __typename: "Goal",
    id: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      position: string,
      team: number,
      game?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    game:  {
      __typename: "Game",
      id: string,
      against: string,
      date: string,
      team: number,
      location: string,
      live: boolean,
      goals?:  Array< {
        __typename: "Goal",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      player?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGoalSubscription = {
  onUpdateGoal?:  {
    __typename: "Goal",
    id: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      position: string,
      team: number,
      game?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    game:  {
      __typename: "Game",
      id: string,
      against: string,
      date: string,
      team: number,
      location: string,
      live: boolean,
      goals?:  Array< {
        __typename: "Goal",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      player?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGoalSubscription = {
  onDeleteGoal?:  {
    __typename: "Goal",
    id: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      position: string,
      team: number,
      game?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    game:  {
      __typename: "Game",
      id: string,
      against: string,
      date: string,
      team: number,
      location: string,
      live: boolean,
      goals?:  Array< {
        __typename: "Goal",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      player?:  {
        __typename: "ModelPlayerGameJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
