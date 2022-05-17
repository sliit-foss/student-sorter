import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllUsersData = async () => {
  return prisma.user.findMany({})
}

export const findUserById = async (id) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
  })
}

export const createUserData = async (id, username, email, picture) => {
  return prisma.user.create({
    data: {
      id,
      username,
      email,
      picture,
    },
  })
}

export const updateUserData = async (id, username, email, picture) => {
  return prisma.user.update({
    where: {
      id,
    },
    data: {
      username,
      email,
      picture,
    },
  })
}

export const deleteUserById = async (id) => {
  return prisma.user.delete({
    where: {
      id,
    },
  })
}

export const searchUserById = async (id) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
  })
}
