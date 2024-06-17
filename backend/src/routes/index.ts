import express, { Application, Router } from 'express';

import healthRouter from './health.router';
import charactersRouter from './characters.router';

function routerApi(app: Application): void {
  const router: Router = express.Router();
  app.use('/v1', router);
  router.use('/', healthRouter);
  router.use('/characters', charactersRouter);
  // router.use('/favorites', favoritesRouter);
  // router.use('/comments', commentsRouter);
}

export default routerApi;
