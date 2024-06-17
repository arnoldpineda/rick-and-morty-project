import { Resolvers } from '../interfaces/interfaces';
import Character from '../db/models/Character';
import Specie from '../db/models/Specie';

const characterResolvers: Resolvers['Character'] = {
  specie: async (parent) => {
    try {
      const specie = await Specie.findByPk(parent.speciesId);
      return specie || null;
    } catch (error) {
      console.error(`Error fetching specie for character with id ${parent.id}:`, error);
      throw error;
    }
  },

  characters: async (_, { status, speciesId, gender, origin }) => {
    try {
      const whereCondition: any = {};
      if (status) {
        whereCondition.status = status;
      }
      if (speciesId) {
        whereCondition.speciesId = speciesId;
      }
      if (gender) {
        whereCondition.gender = gender;
      }
      if (origin) {
        whereCondition.origin = origin;
      }
      const characters = await Character.findAll({
        where: whereCondition,
        include: [Specie],
      });

      return characters;
    } catch (error) {
      console.error('Error fetching characters:', error);
      throw error;
    }
  },

  character: async (_, { id }) => {
    try {
      const character = await Character.findByPk(id, {
        include: [Specie],
      });

      if (!character) {
        throw new Error(`Character with id ${id} not found`);
      }
      return character;
    } catch (error) {
      console.error(`Error fetching character with id ${id}:`, error);
      throw error;
    }
  },
};

export default characterResolvers;
