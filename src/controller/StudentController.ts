import { FastifyReply } from 'fastify'
import { studentRequest } from '../interface/inex'
import { PrismaClient } from '@prisma/client'
import { ERROR400, STANDARD } from '../util/response'
import { ERROR500 } from '../util/response'

export const prisma = new PrismaClient()

export const getAllStudent = async (
  request: studentRequest,
  reply: FastifyReply,
) => {
  try {
    const data = await prisma.student.findMany({})

    reply.code(STANDARD.SUCCESS).send({
      data,
    })
  } catch (err) {
    reply.code(ERROR500.CODE).send(new Error(err))
  }
}
