import { FastifyInstance } from 'fastify'
import * as controllers from '../controller/userController'

async function userRouter(fastify: FastifyInstance) {
  fastify.route({
    method: 'GET',
    url: '/user/',
    handler: controllers.getAllUsers,
  })

  fastify.route({
    method: 'POST',
    url: '/user/',
    handler: controllers.addUser,
  })

  fastify.route({
    method: 'PATCH',
    url: '/user/:id',
    handler: controllers.updateUser,
  })

  fastify.route({
    method: 'DELETE',
    url: '/user/:id',
    handler: controllers.deleteUser,
  })

  fastify.route({
    method: 'GET',
    url: '/user/:id',
    handler: controllers.searchUser,
  })
}

export default userRouter
