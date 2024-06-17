import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express, { Application } from 'express';
import morganMiddleware from './middleware/logger';
import characterResolvers from './resolvers/character.resolver';
import speciesResolvers from './resolvers/specie.resolver';
import routerApi from './routes';
import characterSchema from './schemas/character.schema';
import specieSchema from './schemas/specie.schema';

const createApp = async () => {
  const app: Application = express();

  app.use(morganMiddleware);
  app.use(express.json());
  app.use(cors());
  routerApi(app);

  const server = new ApolloServer({
    typeDefs: [characterSchema, specieSchema],
    resolvers: [characterResolvers, speciesResolvers],
  });

  await server.start();
  server.applyMiddleware({ app });

  return app;
};

export default createApp;
