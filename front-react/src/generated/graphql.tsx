import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Company = {
   __typename?: 'Company',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  website?: Maybe<Scalars['String']>,
  products: Array<Product>,
  users: Array<User>,
};

export type Mutation = {
   __typename?: 'Mutation',
  login: SymfonyUserInterface,
  logout: Scalars['Boolean'],
};


export type MutationLoginArgs = {
  userName: Scalars['String'],
  password: Scalars['String']
};

export type Option = {
   __typename?: 'Option',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  product?: Maybe<Product>,
};

export type PorpaginasResult_Company = {
   __typename?: 'PorpaginasResult_Company',
  items: Array<Company>,
  count?: Maybe<Scalars['Int']>,
};


export type PorpaginasResult_CompanyItemsArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type PorpaginasResult_User = {
   __typename?: 'PorpaginasResult_User',
  items: Array<User>,
  count?: Maybe<Scalars['Int']>,
};


export type PorpaginasResult_UserItemsArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type Product = {
   __typename?: 'Product',
  id?: Maybe<Scalars['Int']>,
  label?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  margin?: Maybe<Scalars['Float']>,
  company?: Maybe<Company>,
  options: Array<Option>,
  vat: Scalars['Float'],
};

export type Query = {
   __typename?: 'Query',
  companies: PorpaginasResult_Company,
  company?: Maybe<Company>,
  users: PorpaginasResult_User,
  me?: Maybe<SymfonyUserInterface>,
};


export type QueryCompaniesArgs = {
  search?: Maybe<Scalars['String']>
};


export type QueryCompanyArgs = {
  id: Scalars['Int']
};


export type QueryUsersArgs = {
  search?: Maybe<Scalars['String']>
};

export type SymfonyUserImpl = SymfonyUserInterface & {
   __typename?: 'SymfonyUserImpl',
  roles: Array<Scalars['String']>,
  userName: Scalars['String'],
};

export type SymfonyUserInterface = {
  roles: Array<Scalars['String']>,
  userName: Scalars['String'],
};

export type User = SymfonyUserInterface & {
   __typename?: 'User',
  id?: Maybe<Scalars['Int']>,
  email?: Maybe<Scalars['String']>,
  username: Scalars['String'],
  roles: Array<Scalars['String']>,
  company?: Maybe<Company>,
  userName: Scalars['String'],
};

export type CompanyQueryVariables = {
  id: Scalars['Int']
};


export type CompanyQuery = (
  { __typename?: 'Query' }
  & { company: Maybe<(
    { __typename?: 'Company' }
    & Pick<Company, 'id' | 'name'>
    & { products: Array<(
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'label' | 'price'>
    )> }
  )> }
);

export type CompaniesQueryVariables = {
  search: Scalars['String']
};


export type CompaniesQuery = (
  { __typename?: 'Query' }
  & { companies: (
    { __typename?: 'PorpaginasResult_Company' }
    & Pick<PorpaginasResult_Company, 'count'>
    & { items: Array<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'name' | 'website'>
    )> }
  ) }
);


export const CompanyDocument = gql`
    query company($id: Int!) {
  company(id: $id) {
    id
    name
    products {
      id
      label
      price
    }
  }
}
    `;
export type CompanyComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CompanyQuery, CompanyQueryVariables>, 'query'> & ({ variables: CompanyQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CompanyComponent = (props: CompanyComponentProps) => (
      <ApolloReactComponents.Query<CompanyQuery, CompanyQueryVariables> query={CompanyDocument} {...props} />
    );
    
export type CompanyProps<TChildProps = {}> = ApolloReactHoc.DataProps<CompanyQuery, CompanyQueryVariables> & TChildProps;
export function withCompany<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CompanyQuery,
  CompanyQueryVariables,
  CompanyProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CompanyQuery, CompanyQueryVariables, CompanyProps<TChildProps>>(CompanyDocument, {
      alias: 'company',
      ...operationOptions
    });
};

/**
 * __useCompanyQuery__
 *
 * To run a query within a React component, call `useCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCompanyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CompanyQuery, CompanyQueryVariables>) {
        return ApolloReactHooks.useQuery<CompanyQuery, CompanyQueryVariables>(CompanyDocument, baseOptions);
      }
export function useCompanyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CompanyQuery, CompanyQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CompanyQuery, CompanyQueryVariables>(CompanyDocument, baseOptions);
        }
export type CompanyQueryHookResult = ReturnType<typeof useCompanyQuery>;
export type CompanyLazyQueryHookResult = ReturnType<typeof useCompanyLazyQuery>;
export type CompanyQueryResult = ApolloReactCommon.QueryResult<CompanyQuery, CompanyQueryVariables>;
export const CompaniesDocument = gql`
    query companies($search: String!) {
  companies(search: $search) {
    items(limit: 10, offset: 0) {
      id
      name
      website
    }
    count
  }
}
    `;
export type CompaniesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CompaniesQuery, CompaniesQueryVariables>, 'query'> & ({ variables: CompaniesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CompaniesComponent = (props: CompaniesComponentProps) => (
      <ApolloReactComponents.Query<CompaniesQuery, CompaniesQueryVariables> query={CompaniesDocument} {...props} />
    );
    
export type CompaniesProps<TChildProps = {}> = ApolloReactHoc.DataProps<CompaniesQuery, CompaniesQueryVariables> & TChildProps;
export function withCompanies<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CompaniesQuery,
  CompaniesQueryVariables,
  CompaniesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CompaniesQuery, CompaniesQueryVariables, CompaniesProps<TChildProps>>(CompaniesDocument, {
      alias: 'companies',
      ...operationOptions
    });
};

/**
 * __useCompaniesQuery__
 *
 * To run a query within a React component, call `useCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompaniesQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useCompaniesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CompaniesQuery, CompaniesQueryVariables>) {
        return ApolloReactHooks.useQuery<CompaniesQuery, CompaniesQueryVariables>(CompaniesDocument, baseOptions);
      }
export function useCompaniesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CompaniesQuery, CompaniesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CompaniesQuery, CompaniesQueryVariables>(CompaniesDocument, baseOptions);
        }
export type CompaniesQueryHookResult = ReturnType<typeof useCompaniesQuery>;
export type CompaniesLazyQueryHookResult = ReturnType<typeof useCompaniesLazyQuery>;
export type CompaniesQueryResult = ApolloReactCommon.QueryResult<CompaniesQuery, CompaniesQueryVariables>;