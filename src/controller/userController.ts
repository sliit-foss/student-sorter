import { FastifyReply } from 'fastify'
import { userRequest } from '../interface'
import { PrismaClient } from '@prisma/client'
import { decodeToken } from '../util/firebase'
import { ERROR500, STANDARD } from '../util/response'

const prisma = new PrismaClient()

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

export const addUser = async (request: userRequest, reply: FastifyReply) => {
  try {
    const decodedToken = (await decodeToken(request)).data
    const user = await prisma.user.findUnique({
      where: {
        id: decodedToken.uid,
      },
    })
    if (!user) {
      await prisma.user.create({
        data: {
          id: decodedToken.uid,
          username: decodedToken.name,
          email: decodedToken.email,
          picture: decodedToken.picture,
        },
      })
    }
    reply.code(STANDARD.SUCCESS).send({
      message: 'User added successfully',
    })
  } catch (err) {
    reply.code(ERROR500.CODE).send(new Error(err))
  }
}

export const updateUser = async (request: userRequest, reply: FastifyReply) => {
  try {
    const { id } = request.body
    const data = await prisma.user.update({
      where: {
        id: id,
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

export const deleteUser = async (request: userRequest, reply: FastifyReply) => {
  try {
    const { id } = request.body
    const deletedUser = await prisma.user.delete({
      where: {
        id: id,
      },
    })
    reply.code(STANDARD.SUCCESS).send({
      deletedUser,
    })
  } catch (err) {
    reply.code(ERROR500.CODE).send(new Error(err))
  }
}

export const searchUser = async (request: userRequest, reply: FastifyReply) => {
  try {
    const { id } = request.body
    const searchResults = await prisma.user.findUnique({
      where: {
        id: id,
      },
    })
    reply.code(STANDARD.SUCCESS).send({
      searchResults,
    })
  } catch (err) {
    reply.code(ERROR500.CODE).send(new Error(err))
  }
}
