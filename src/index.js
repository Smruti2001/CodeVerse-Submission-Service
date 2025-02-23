const fastify = require('fastify')({logger: true});
const app = require('./app');

const PORT = 3000;

fastify.register(app);

fastify.listen({ port: PORT }, (err) => {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    console.log(`Server started at PORT: ${PORT}`);
  })

