import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllChatrooms = async () => {
  return prisma.chatroom.findMany({
    orderBy: {
      name: 'asc',
    },
  })
}
