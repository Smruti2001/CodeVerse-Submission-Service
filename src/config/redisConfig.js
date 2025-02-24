const Redis = require('ioredis');
const { PORT, REDIS_PORT, REDIS_HOST,  } = require('./serverConfig');

const redisConfig = {
    PORT: PORT || 3000,
    REDIS_HOST: REDIS_HOST || 'localhost',
    REDIS_PORT: REDIS_PORT || 6379
}

const redisConnection = new Redis(redisConfig);

module.exports = redisConnection;