import { FastifyReply, FastifyRequest } from 'fastify'
import { PrismaClient } from '@prisma/client'
import { ERROR500, STANDARD } from '../util/response'
import { getChatrooms } from '../services/chatroom'

const prisma = new PrismaClient()

export const getAllChatrooms = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const data = await getChatrooms()
    reply.code(STANDARD.SUCCESS).send({
      data,
    })
  } catch (err) {
    reply.code(ERROR500.CODE).send(new Error(err))
  }
}
