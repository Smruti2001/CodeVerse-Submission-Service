const Redis = require('ioredis');
const { REDIS_PORT, REDIS_HOST,  } = require('./serverConfig');

const redisConfig = {
    port: REDIS_PORT || 3000,
    host: REDIS_HOST || 'localhost',
    maxRetriesPerRequest: null
}

const redisConnection = new Redis(redisConfig);

module.exports = redisConnection;