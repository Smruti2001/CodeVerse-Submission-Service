const submissionRoutes = require("./submissionRoutes");

async function v1Routes(fastify, options) {
    fastify.register(submissionRoutes, { prefix: '/submissions' })
}

module.exports = v1Routes;