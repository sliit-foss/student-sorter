import { FastifyReply, FastifyRequest } from 'fastify'
import { decodeToken } from '../util/firebase'
import { ERROR401 } from '../util/response'

const authMiddleware = async ( request: FastifyRequest, reply: FastifyReply, next ) => {
  const decodedResults = await decodeToken(request)
  if(!decodedResults.success)
    reply.code(ERROR401.CODE).send(new Error(decodedResults.error))
  next()
}

export default authMiddleware
