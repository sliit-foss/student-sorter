import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllUsersData = async () => {
  const data = prisma.user.findMany({})
  return data
}

export const findUserData = async (decodedToken) => {
  return prisma.user.findUnique({
    where: {
      id: decodedToken.uid,
    },
  })
}

export const createUserData = async (decodedToken) => {
  return prisma.user.create({
    data: {
      id: decodedToken.uid,
      username: decodedToken.name,
      email: decodedToken.email,
      picture: decodedToken.picture,
    },
  })
}

export const updateUserData = async (request, id) => {
  return prisma.user.update({
    where: {
      id: id,
    },
    data: request.body,
  })
}

export const deleteUserData = async (id) => {
  return prisma.user.delete({
    where: {
      id: id,
    },
  })
}

export const searchUserData = async (id) => {
  return prisma.user.findUnique({
    where: {
      id: id,
    },
  })
}
