import * as dotenv from 'dotenv';

dotenv.config();

interface envManager {
  port: number;
  dbHost: string;
  dbName: string;
  dbUser: string;
  dbPassword: string;
  dbPort: number;
  redisHost: string;
  redisPort: number;
}

const envManager: envManager = {
  port: Number(process.env.PORT) || 4000,
  dbHost: process.env.DB_HOST || 'localhost',
  dbName: process.env.DB_NAME || 'rick_and_morty',
  dbUser: process.env.DB_USER || 'root',
  dbPassword: process.env.DB_PASSWORD || 'password',
  dbPort: Number(process.env.PORT) || 3306,
  redisHost: process.env.REDIS_HOST || 'localhost',
  redisPort: Number(process.env.REDIS_PORT) || 6379
}

export { envManager };
