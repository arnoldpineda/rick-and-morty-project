import { Resolvers } from '../interfaces/interfaces';
import Specie from '../db/models/Specie';
import Character from '../db/models/Character';
import { SpecieAttributes } from '../interfaces/attributes';

const specieResolvers: Resolvers['Specie'] = {
  characters: async (parent: SpecieAttributes) => {
    try {
      const characters = await Character.findAll({
        where: { speciesId: parent.id },
      });
      return characters.map(char => char.toJSON());
    } catch (error) {
      console.error(`Error fetching characters for specie with id ${parent.id}:`, error);
      throw error;
    }
  },

  species: async () => {
    try {
      const species = await Specie.findAll({
        include: [Character],
      });
      return species;
    } catch (error) {
      console.error('Error fetching species:', error);
      throw error;
    }
  },

  specie: async (_, { id }) => {
    try {
      const specie = await Specie.findByPk(id, {
        include: [Character],
      });
      if (!specie) {
        throw new Error(`Specie with id ${id} not found`);
      }
      return specie.toJSON();
    } catch (error) {
      console.error(`Error fetching specie with id ${id}:`, error);
      throw error;
    }
  },
};

export default specieResolvers;
