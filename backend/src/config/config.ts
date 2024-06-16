import * as dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  dbHost: string;
  dbUser: string;
  dbPassword: string;
  dbName: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 4000,
  dbHost: process.env.DB_HOST || 'localhost',
  dbUser: process.env.DB_USER || 'root',
  dbPassword: process.env.DB_PASSWORD || '1234',
  dbName: process.env.DB_NAME || 'rick_and_morty',
}

export { config };
