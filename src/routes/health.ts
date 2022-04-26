import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { STANDARD } from '../util/response'

async function healthRouter(fastify: FastifyInstance) {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: (request: FastifyRequest, reply: FastifyReply) => {
      reply.code(STANDARD.SUCCESS).send({
        message: 'Student sorter server up and running',
      })
    },
  })
}

export default healthRouter
