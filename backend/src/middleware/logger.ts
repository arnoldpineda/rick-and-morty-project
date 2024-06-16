import morgan from 'morgan';
import logger from '../config/logger';

const stream = {
  write: (message: string) => logger.info(message.trim())
};

const morganMiddleware = morgan('combined', { stream });

export default morganMiddleware;
