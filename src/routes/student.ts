import { FastifyInstance } from 'fastify'
import * as controllers from '../controller/StudentController'

async function studentRouter(fastify: FastifyInstance) {
  fastify.route({
    method: 'GET',
    url: '/student/',
    handler: controllers.getAllStudent,
  })
}

export default studentRouter
