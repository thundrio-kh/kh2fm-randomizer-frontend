import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};


export type Configuration = {
  settings: Settings;
  worlds: Worlds;
  include: Include;
  gameMode: GameModeSchema;
  experimental: Experimental;
};

export type DiscordProvider = Provider & {
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  accessToken: Scalars['String'];
};

export type Experimental = {
  enemies: Toggle;
  bosses: Toggle;
  superbossRetry: Toggle;
};

export enum GameMode {
  BaseGame = 'BASE_GAME',
  GoaMod = 'GOA_MOD'
}

export type GameModeSchema = {
  mode: GameMode;
  goa: GoAModSettings;
};

export type GoAModSettings = {
  promiseCharm: Toggle;
  goMode: Toggle;
  shorterDay5: Toggle;
  fasterOogie: Toggle;
  fasterPresents: Toggle;
  earlyLionDash: Toggle;
  fastHyenasTwo: Toggle;
  skipDragon: Toggle;
  fieldCamera: Toggle;
  cameraUpDown: Toggle;
  cameraLeftRight: Toggle;
  summonEffects: Toggle;
};

export type Include = {
  keybladeAbilities: RandomizingAction;
  donaldAbilities: Toggle;
  goofyAbilities: Toggle;
  absentSilhouettes: RandomizingAction;
  dataOrganizationXIII: RandomizingAction;
  olympusCups: RandomizingAction;
  hadesCup: Toggle;
  terra: Toggle;
  sephiroth: Toggle;
  ultimaWeapon: Toggle;
  finalForm: Toggle;
  formAbilities: RandomizingAction;
  growthAbilities: RandomizingAction;
  maxGrowthAbilities: Toggle;
  synthItems: Toggle;
};

export enum Leveling {
  LevelOne = 'LEVEL_ONE',
  LevelFifty = 'LEVEL_FIFTY',
  LevelNinetyNine = 'LEVEL_NINETY_NINE'
}

export enum Multiplier {
  One = 'ONE',
  Two = 'TWO',
  Three = 'THREE',
  Four = 'FOUR',
  Five = 'FIVE'
}

export type PatreonProvider = Provider & {
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  accessToken: Scalars['String'];
};

export type Provider = {
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  accessToken: Scalars['String'];
};

export type Providers = {
  patreon: PatreonProvider;
  twitch: TwitchProvider;
  discord: DiscordProvider;
};

export type Query = {
  seed: Seed;
  user?: Maybe<User>;
};


export type QuerySeedArgs = {
  id: Scalars['String'];
};

export enum RandomizingAction {
  Vanilla = 'VANILLA',
  Replace = 'REPLACE',
  Randomize = 'RANDOMIZE'
}

export type Seed = {
  id: Scalars['ID'];
  name: Scalars['String'];
  version: Scalars['String'];
  configuration: Configuration;
  user: User;
};

export type Settings = {
  gameMode: GameMode;
  leveling: Leveling;
  abilities: RandomizingAction;
  stats: Toggle;
  keybladeStats: RandomizingAction;
  bonusModifiers: Toggle;
  criticalMode: Toggle;
  reportDepth: RandomizingAction;
  expMultiplier: Multiplier;
  valorEXP: Multiplier;
  wisdomEXP: Multiplier;
  limitEXP: Multiplier;
  masterEXP: Multiplier;
  finalEXP: Multiplier;
};

export enum Toggle {
  Off = 'OFF',
  On = 'ON'
}

export type TwitchProvider = Provider & {
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  accessToken: Scalars['String'];
};

export type User = {
  id: Scalars['ID'];
  providers: Providers;
  seed?: Maybe<Seed>;
};

export type Worlds = {
  simulatedTwilightTown: RandomizingAction;
  twilightTown: RandomizingAction;
  hollowBastion: RandomizingAction;
  cavernOfRemembrance: RandomizingAction;
  beastsCastle: RandomizingAction;
  olympus: RandomizingAction;
  agrabah: RandomizingAction;
  landOfDragons: RandomizingAction;
  pooh: RandomizingAction;
  atlantica: RandomizingAction;
  prideLands: RandomizingAction;
  disneyCastle: RandomizingAction;
  timelessRiver: RandomizingAction;
  halloweenTown: RandomizingAction;
  portRoyal: RandomizingAction;
  spaceParanoids: RandomizingAction;
  twtnw: RandomizingAction;
};

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { user?: Maybe<(
    Pick<User, 'id'>
    & { providers: { patreon: Pick<PatreonProvider, 'id' | 'username' | 'email'>, twitch: Pick<TwitchProvider, 'id' | 'username' | 'email'>, discord: Pick<DiscordProvider, 'id' | 'username' | 'email'> }, seed?: Maybe<Pick<Seed, 'id' | 'name'>> }
  )> };


export const UserDocument = gql`
    query User {
  user {
    id
    providers {
      patreon {
        id
        username
        email
      }
      twitch {
        id
        username
        email
      }
      discord {
        id
        username
        email
      }
    }
    seed {
      id
      name
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;