import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
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
  companies: PorpaginasResult_Company;
  company?: Maybe<Company>;
  users: PorpaginasResult_User;
  product?: Maybe<Product>;
  me?: Maybe<SymfonyUserInterface>;
};


export type QueryCompaniesArgs = {
  search?: Maybe<Scalars['String']>;
};


export type QueryCompanyArgs = {
  id: Scalars['Int'];
};


export type QueryUsersArgs = {
  search?: Maybe<Scalars['String']>;
};


export type QueryProductArgs = {
  productId: Scalars['Int'];
};

export type PorpaginasResult_Company = {
  __typename?: 'PorpaginasResult_Company';
  items: Array<Company>;
  /** The total count of items. */
  count?: Maybe<Scalars['Int']>;
};


export type PorpaginasResult_CompanyItemsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Company = {
  __typename?: 'Company';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  products: Array<Product>;
  users: Array<User>;
};

export type Product = {
  __typename?: 'Product';
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  margin?: Maybe<Scalars['Float']>;
  company?: Maybe<Company>;
  options: Array<Option>;
  vat: Scalars['Float'];
};

export type Option = {
  __typename?: 'Option';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  product?: Maybe<Product>;
};

export type User = SymfonyUserInterface & {
  __typename?: 'User';
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  /** A visual identifier that represents this user. */
  username: Scalars['String'];
  roles: Array<Scalars['String']>;
  company?: Maybe<Company>;
  /** Returns the username used to authenticate the user. */
  userName: Scalars['String'];
};

export type SymfonyUserInterface = {
  roles: Array<Scalars['String']>;
  /** Returns the username used to authenticate the user. */
  userName: Scalars['String'];
};

export type PorpaginasResult_User = {
  __typename?: 'PorpaginasResult_User';
  items: Array<User>;
  /** The total count of items. */
  count?: Maybe<Scalars['Int']>;
};


export type PorpaginasResult_UserItemsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: Product;
  login: SymfonyUserInterface;
  logout: Scalars['Boolean'];
};


export type MutationCreateProductArgs = {
  name: Scalars['String'];
  price: Scalars['Float'];
  companyId: Scalars['Int'];
  options: Array<OptionInput>;
};


export type MutationLoginArgs = {
  userName: Scalars['String'];
  password: Scalars['String'];
};

export type OptionInput = {
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type SymfonyUserImpl = SymfonyUserInterface & {
  __typename?: 'SymfonyUserImpl';
  roles: Array<Scalars['String']>;
  /** Returns the username used to authenticate the user. */
  userName: Scalars['String'];
};

export type CompaniesQueryVariables = Exact<{
  search: Scalars['String'];
}>;


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

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    companies(variables: CompaniesQueryVariables): Promise<CompaniesQuery> {
      return withWrapper(() => client.request<CompaniesQuery>(print(CompaniesDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;