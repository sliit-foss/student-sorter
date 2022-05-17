import { FastifyRequest } from 'fastify'
import { auth } from 'firebase-admin'

export const decodeToken = async (request: FastifyRequest) => {
  const token = request.headers.authorization
    ? request.headers.authorization.replace('Bearer ', '')
    : null
  if (!token)
    return {
      success: false,
      data: null,
      error: 'Missing auth token',
    }
  return await auth()
    .verifyIdToken(token)
    .then((decodedToken) => {
      if (!decodedToken.email.endsWith('@my.sliit.lk'))
        return {
          success: false,
          data: null,
          error: 'You must use a SLIIT email address to sign in',
        }
      return {
        success: true,
        data: decodedToken,
        error: null,
      }
    })
    .catch((error) => {
      return {
        success: false,
        data: null,
        error: error.toString(),
      }
    })
}
