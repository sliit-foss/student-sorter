import { FastifyInstance } from 'fastify'
import * as controllers from '../controller/chatroomController'

async function chatroomRouter(fastify: FastifyInstance) {
  fastify.route({
    method: 'GET',
    url: '/chatroom',
    handler: controllers.getAllChatrooms,
  })
}

export default chatroomRouter
