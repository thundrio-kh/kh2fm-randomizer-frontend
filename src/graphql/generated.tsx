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


export type DiscordProvider = Provider & {
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  accessToken: Scalars['String'];
};

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
  user?: Maybe<User>;
};

export type TwitchProvider = Provider & {
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  accessToken: Scalars['String'];
};

export type User = {
  id: Scalars['ID'];
  providers: Providers;
};

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { user?: Maybe<(
    Pick<User, 'id'>
    & { providers: { patreon: ProviderData_PatreonProvider_Fragment, twitch: ProviderData_TwitchProvider_Fragment, discord: ProviderData_DiscordProvider_Fragment } }
  )> };

type ProviderData_PatreonProvider_Fragment = Pick<PatreonProvider, 'id' | 'username' | 'email'>;

type ProviderData_TwitchProvider_Fragment = Pick<TwitchProvider, 'id' | 'username' | 'email'>;

type ProviderData_DiscordProvider_Fragment = Pick<DiscordProvider, 'id' | 'username' | 'email'>;

export type ProviderDataFragment = ProviderData_PatreonProvider_Fragment | ProviderData_TwitchProvider_Fragment | ProviderData_DiscordProvider_Fragment;

export const ProviderDataFragmentDoc = gql`
    fragment ProviderData on Provider {
  id
  username
  email
}
    `;
export const UserDocument = gql`
    query User {
  user {
    id
    providers {
      patreon {
        ...ProviderData
      }
      twitch {
        ...ProviderData
      }
      discord {
        ...ProviderData
      }
    }
  }
}
    ${ProviderDataFragmentDoc}`;

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