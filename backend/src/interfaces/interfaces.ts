import { IResolvers } from '@graphql-tools/utils';
import { SpecieAttributes, CharacterAttributes } from './attributes';

export interface Resolvers extends IResolvers {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
  Specie: SpecieResolvers;
  Character: CharacterResolvers;
}

interface QueryResolvers {
}

interface MutationResolvers {
}

interface SpecieResolvers extends Record<string, any>{
  characters: (parent: SpecieAttributes) => Promise<CharacterAttributes[]>;
  species: () => Promise<SpecieAttributes[]>;
  specie: (parent: any, args: { id: string }) => Promise<SpecieAttributes | null>;
}

interface CharacterResolvers extends Record<string, any> {
  characters: (parent: any, args: CharacterFilterArgs) => Promise<CharacterAttributes[]>;
  character: (parent: any, args: { id: string }) => Promise<CharacterAttributes | null>;
  specie: (parent: CharacterAttributes) => Promise<SpecieAttributes | null>;
}

interface CharacterFilterArgs {
  status?: string;
  speciesId?: number;
  gender?: string;
  origin?: string;
}
