import redis, { RedisClientOptions } from 'redis';
import { envManager } from './envManager';

const client = redis.createClient({
  host: envManager.redisHost,
  port: envManager.redisPort
} as RedisClientOptions);

client.on('error', (err) => {
  console.error('Redis error:', err);
});

export default client;
