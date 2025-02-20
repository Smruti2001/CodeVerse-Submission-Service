const TestService = require('./testService');
const fastifyPlugin = require('fastify-plugin');

function testServicePlugin(fastify, options) {
    fastify.decorate('testService', new TestService());
    // console.log('After updating the decorate function', fastify);
}

module.exports = fastifyPlugin(testServicePlugin);  