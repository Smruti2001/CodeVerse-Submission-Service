const fastifyPlugin = require('fastify-plugin');
const testServicePlugin = require('./services/testServicePlugin');

function app(fastify, options) {
    fastify.register(require('./routes/index'), {prefix: '/api'});
    fastify.register(testServicePlugin);
}

module.exports = fastifyPlugin(app);
// module.exports = app;