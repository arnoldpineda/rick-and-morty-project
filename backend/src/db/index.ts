import Character from './models/Character';
import Specie from './models/Specie';
import Comment from './models/Comment';
import User from './models/User';
import Favorite from './models/Favorite';

import sequelize from '../config/database';

sequelize.addModels([Character, Specie, Comment, User, Favorite]);

export { sequelize, Character, Specie, Comment, User, Favorite };
