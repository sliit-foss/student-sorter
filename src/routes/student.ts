import { FastifyInstance } from 'fastify'
import * as controllers from '../controller/StudentController'

async function studentRouter(fastify: FastifyInstance) {
  fastify.route({
    method: 'GET',
    url: '/student/',
    handler: controllers.getAllStudent,
  })

  fastify.route({
    method: 'POST',
    url: '/student/',
    handler: controllers.addStudent,
  })

  fastify.route({
    method: 'patch',
    url: '/student/:id',
    handler: controllers.updateStudent,
  })
}

export default studentRouter
