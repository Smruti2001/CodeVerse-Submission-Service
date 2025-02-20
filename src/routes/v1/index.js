const { pingController } = require("../../controllers/pingController");

function v1Router(fastify, options) {
    fastify.get('/ping', pingController)
}

module.exports = v1Router;