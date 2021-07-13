import { FastifyAdapter } from '@nestjs/platform-fastify';

export const fastifyAdapter = new FastifyAdapter({
  logger: {
    prettyPrint: true,
  },
});

fastifyAdapter.getInstance().addHook('preHandler', function (req, _, done) {
  if (req.body) {
    req.log.info({ body: req.body }, 'parsed body');
  }
  done();
});
