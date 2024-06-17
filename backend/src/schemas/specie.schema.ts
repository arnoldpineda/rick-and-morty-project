import { gql } from 'apollo-server-express';

const speciesSchema = gql`
  type Specie {
    id: ID!
    name: String!
    characters: [Character]
  }

  type Query {
    species: [Specie]
    specie(id: ID!): Specie
  }
`;

export default speciesSchema;
