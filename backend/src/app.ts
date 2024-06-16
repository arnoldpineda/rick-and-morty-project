import cors from 'cors';
import express from 'express';
import morganMiddleware from './middleware/logger';
import routerApi from './routes';

const createApp = () => {
  const app = express();

  app.use(morganMiddleware);
  app.use(express.json());
  app.use(cors());
  routerApi(app);

  return app;
}

export default createApp;
