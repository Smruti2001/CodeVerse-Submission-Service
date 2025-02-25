const fastifyPlugin = require('fastify-plugin');
const servicePlugin = require('./services/servicePlugin');
const apiRoutes = require('./routes/apiRoutes');
const repositoryPlugin = require('./repositories/repositoryPlugin');

async function app(fastify, options) {
    await fastify.register(repositoryPlugin);
    await fastify.register(servicePlugin);
    await fastify.register(apiRoutes, {prefix: '/api'});
}

module.exports = fastifyPlugin(app);
// module.exports = app;