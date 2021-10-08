import { FastifyRequest } from 'fastify'
import { Prisma } from '@prisma/client'

export interface studentInterface {
  id: string
  studentName: string
}

export interface studentRequest extends FastifyRequest {
  body: Prisma.StudentCreateInput
}
