import { gql } from 'apollo-server-express';

const characterSchema = gql`
  type Character {
    id: ID!
    name: String!
    status: String!
    species: Specie
    gender: String!
    origin: String!
    image: String!
    createdAt: String
    updatedAt: String
    deletedAt: String
  }

  type Specie {
    id: ID!
    name: String!
  }

  type Query {
    characters(
      status: String
      speciesId: Int
      gender: String
      origin: String
    ): [Character]
    character(id: ID!): Character
  }
`;

export default characterSchema;
