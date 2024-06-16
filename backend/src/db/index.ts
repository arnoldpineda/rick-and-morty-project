import Character from './models/Character';
import Specie from './models/Specie';
import Comment from './models/Comment';
import User from './models/User';
import Favorite from './models/Favorite';

import sequelize from '../config/database'; // Importa la instancia de Sequelize configurada

// Agregar los modelos a la instancia de Sequelize
sequelize.addModels([Character, Specie, Comment, User, Favorite]);

// Exporta la instancia de Sequelize y los modelos
export { sequelize, Character, Specie, Comment, User, Favorite };
