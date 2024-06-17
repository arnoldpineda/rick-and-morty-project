import Joi from 'joi';
import { CharacterDTO } from '../dtos/character.dto';

export const characterSchema = Joi.object<CharacterDTO>({
  name: Joi.string().required(),
  status: Joi.string().required(),
  species: Joi.number().required(),
  gender: Joi.string().required(),
  origin: Joi.string().required(),
  image: Joi.string().uri().required()
});
