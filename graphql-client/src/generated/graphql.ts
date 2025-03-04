/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Cat = {
  __typename?: "Cat";
  breed: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type Dog = {
  __typename?: "Dog";
  breed: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  createPetStore: PetStore;
};

export type MutationCreatePetStoreArgs = {
  input: PetStoreInput;
};

export type PetStore = {
  __typename?: "PetStore";
  cats: Array<Cat>;
  dogs: Array<Dog>;
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  profileUrl: Scalars["String"]["output"];
};

export type PetStoreInput = {
  email: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  profileUrl: Scalars["String"]["input"];
};

export type Query = {
  __typename?: "Query";
  getPetStores: Array<PetStore>;
};

export type GetPetStoresQueryVariables = Exact<{ [key: string]: never }>;

export type GetPetStoresQuery = {
  __typename?: "Query";
  getPetStores: Array<{ __typename?: "PetStore"; id: string }>;
};

export const GetPetStoresDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPetStores" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getPetStores" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPetStoresQuery, GetPetStoresQueryVariables>;
