import { FastifyRequest } from 'fastify'
import { Prisma } from '@prisma/client'

export interface userInterface {
  id: string
  username: string
  email: string
  password: string
}

export interface userRequest extends FastifyRequest {
  body: Prisma.UserCreateInput
}
