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
    method: 'PATCH',
    url: '/student/:id',
    handler: controllers.updateStudent,
  })

  fastify.route({
    method: 'DELETE',
    url: '/student/:id',
    handler: controllers.deleteStudent,
  })

  fastify.route({
    method: 'GET',
    url: '/student/:id',
    handler: controllers.searchStudent,
  })
}

export default studentRouter
