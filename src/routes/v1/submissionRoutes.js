const { submissionController, pingController } = require("../../controllers/submissionController");

async function submissionRoutes(fastify, options) {
    fastify.get('/ping', pingController)
    fastify.post('/', submissionController)
}

module.exports = submissionRoutes;