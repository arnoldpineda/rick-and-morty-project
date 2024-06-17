import createApp from './app';
import { envManager } from './config/envManager';
import logger from './config/logger';

const startServer = async () => {
  const app = await createApp();

  app.listen(envManager.port, () => {
    logger.info(`Server ready at http://localhost:${envManager.port}/graphql`);
  });

};

startServer().catch(error => {
  logger.error('Error starting the server:', error);
});
