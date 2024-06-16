import express, { Application, Router } from 'express';

import healthRouter from './health.router';

function routerApi(app: Application): void {
  const router: Router = express.Router();
  app.use('/v1', router);
  router.use('/', healthRouter);
}

export default routerApi;
