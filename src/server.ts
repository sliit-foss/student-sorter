const fastify = require('fastify')({ logger: true });

fastify.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'Fastify API',
      version: '1.0.0',
      description: 'Student Sorter',
    },
  },
});

fastify.register(require('./routes/student'));

const PORT = 5000;

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
