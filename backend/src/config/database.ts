import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { envManager } from './envManager';
import path from 'path';

const options: SequelizeOptions = {
  database: envManager.dbName,
  dialect: "mysql",
  username: envManager.dbUser,
  password: envManager.dbPassword,
  host: envManager.dbHost,
  port: envManager.dbPort,
  models: [path.resolve(__dirname, 'src/database/models')],
  logging: false,
};

const sequelize = new Sequelize(options);
export default sequelize;
