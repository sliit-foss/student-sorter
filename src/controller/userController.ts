import { FastifyReply } from 'fastify'
import { userRequest } from '../interface'
import { PrismaClient } from '@prisma/client'
import { decodeToken } from '../util/firebase'
import { ERROR500, STANDARD } from '../util/response'
import {
  getUsers,
  findUser,
  createUser,
  userUpdate,
  userDelete,
  userSearch,
} from '../services/users'

const prisma = new PrismaClient()

export const getAllUsers = async (
  request: userRequest,
  reply: FastifyReply,
) => {
  try {
    await getUsers()
    reply.code(STANDARD.SUCCESS).send({
      getUsers,
    })
  } catch (err) {
    reply.code(ERROR500.CODE).send(new Error(err))
  }
}

export const addUser = async (request: userRequest, reply: FastifyReply) => {
  try {
    const decodedToken = (await decodeToken(request)).data
    const user = await findUser(decodedToken)

    if (!user) {
      await createUser(decodedToken)
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
    const data = await userUpdate(request, id)
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
    const deletedUser = await userDelete(id)
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
    const searchResults = await userSearch(id)
    reply.code(STANDARD.SUCCESS).send({
      searchResults,
    })
  } catch (err) {
    reply.code(ERROR500.CODE).send(new Error(err))
  }
}
