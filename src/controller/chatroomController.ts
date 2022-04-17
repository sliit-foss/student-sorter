import { FastifyReply, FastifyRequest } from 'fastify'
import { PrismaClient } from '@prisma/client'
import { ERROR500, STANDARD } from '../util/response'

const prisma = new PrismaClient()

export const getAllChatrooms = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const data = await prisma.chatroom.findMany({
      orderBy: {
        name: 'asc',
      },
    })
    reply.code(STANDARD.SUCCESS).send({
      data,
    })
  } catch (err) {
    reply.code(ERROR500.CODE).send(new Error(err))
  }
}
