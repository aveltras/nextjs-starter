import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  test: Scalars['Int'];
  tada: Scalars['String'];
};

export type HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'test' | 'tada'>
);


export const HomeDocument = gql`
    query home {
  test
  tada
}
    `;

export function useHomeQuery(options: Omit<Urql.UseQueryArgs<HomeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<HomeQuery>({ query: HomeDocument, ...options });
};