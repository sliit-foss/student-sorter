import { FastifyReply } from 'fastify'
import { userRequest } from '../interface'
import { PrismaClient } from '@prisma/client'
import { ERROR400, STANDARD } from '../util/response'
import { ERROR500 } from '../util/response'

export const prisma = new PrismaClient()

export const getAllUsers = async (
  request: userRequest,
  reply: FastifyReply,
) => {
  try {
    const data = await prisma.user.findMany({})

    reply.code(STANDARD.SUCCESS).send({
      data,
    })
  } catch (err) {
    reply.code(ERROR500.CODE).send(new Error(err))
  }
}

export const addUser = async (
  request: userRequest,
  reply: FastifyReply,
) => {
  try {
    const { id, username, email } = request.body

    const data = await prisma.user.create({
      data: {
        id,
        username,
        email,
      },
    })

    reply.code(STANDARD.SUCCESS).send({
      data,
    })
  } catch (err) {
    reply.code(ERROR500.CODE).send(new Error(err))
  }
}

export const updateUser = async (
  request: userRequest,
  reply: FastifyReply,
) => {
  try {
    const { id } = request.body
    const data = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: request.body,
    })

    reply.code(STANDARD.SUCCESS).send({
      data,
    })
  } catch (err) {
    reply.code(ERROR500.CODE).send(new Error(err))
  }
}

export const deleteUser = async (
  request: userRequest,
  reply: FastifyReply,
) => {
  try {
    const { id } = request.body
    const deletedUser = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    })

    reply.code(STANDARD.SUCCESS).send({
      deletedUser,
    })
  } catch (err) {
    reply.code(ERROR500.CODE).send(new Error(err))
  }
}

export const searchUser = async (
  request: userRequest,
  reply: FastifyReply,
) => {
  try {
    const { id } = request.body
    const searchResults = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    })

    reply.code(STANDARD.SUCCESS).send({
      searchResults,
    })
  } catch (err) {
    reply.code(ERROR500.CODE).send(new Error(err))
  }
}
