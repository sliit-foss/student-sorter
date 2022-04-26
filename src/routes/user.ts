import { FastifyInstance } from 'fastify'
import * as controllers from '../controller/userController'
import authMiddleware from '../middleware/authMiddleware'

async function userRouter(fastify: FastifyInstance) {
  fastify.route({
    method: 'GET',
    url: '/user',
    preHandler: [authMiddleware],
    handler: controllers.getAllUsers,
  })

  fastify.route({
    method: 'POST',
    url: '/user',
    preHandler: [authMiddleware],
    handler: controllers.addUser,
  })

  fastify.route({
    method: 'PATCH',
    url: '/user:id',
    preHandler: [authMiddleware],
    handler: controllers.updateUser,
  })

  fastify.route({
    method: 'DELETE',
    url: '/user:id',
    preHandler: [authMiddleware],
    handler: controllers.deleteUser,
  })

  fastify.route({
    method: 'GET',
    url: '/user:id',
    preHandler: [authMiddleware],
    handler: controllers.searchUser,
  })
}

export default userRouter
