import { FastifyReply } from 'fastify'
import { studentRequest } from '../interface/inex'
import { PrismaClient } from '@prisma/client'
import { ERROR400, STANDARD } from '../util/response'
import { ERROR500 } from '../util/response'

export const prisma = new PrismaClient()

//getAll Student method
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

//add student method
export const addStudent = async (
  request: studentRequest,
  reply: FastifyReply,
) => {
  try {
    const { id, studentName } = request.body

    const data = await prisma.student.create({
      data: {
        id,
        studentName,
      },
    })

    reply.code(STANDARD.SUCCESS).send({
      data,
    })
  } catch (err) {
    reply.code(ERROR500.CODE).send(new Error(err))
  }
}

//update student method
export const updateStudent = async (
  request: studentRequest,
  reply: FastifyReply,
) => {
  try {
    const { id } = request.body
    const data = await prisma.student.update({
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

//delete student method
export const deleteStudent = async (
  request: studentRequest,
  reply: FastifyReply,
) => {
  try {
    const { id } = request.body
    const deletedStudent = await prisma.student.delete({
      where: {
        id: Number(id),
      },
    })

    reply.code(STANDARD.SUCCESS).send({
      deletedStudent,
    })
  } catch (err) {
    reply.code(ERROR500.CODE).send(new Error(err))
  }
}

//search student method
export const searchStudent = async (
  request: studentRequest,
  reply: FastifyReply,
) => {
  try {
    const { id } = request.body
    const searchedStudent = await prisma.student.findUnique({
      where: {
        id: Number(id),
      },
    })
    console.log(searchedStudent)

    reply.code(STANDARD.SUCCESS).send({
      searchStudent,
    })
  } catch (err) {
    reply.code(ERROR500.CODE).send(new Error(err))
  }
}
