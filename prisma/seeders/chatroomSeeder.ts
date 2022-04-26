import { PrismaClient } from '@prisma/client'

export default class ChatroomSeeder {
  private static prismaClient: PrismaClient = new PrismaClient()
  private static data = [
    {
      name: 'General',
      description: 'General chatroom',
    },
    {
      name: 'Year 1 Semester 1',
      description: 'Chatroom for year 1 semester 1 students',
    },
    {
      name: 'Year 1 Semester 2',
      description: 'Chatroom for year 1 semester 2 students',
    },
    {
      name: 'Year 2 Semester 1',
      description: 'Chatroom for year 2 semester 1 students',
    },
    {
      name: 'Year 2 Semester 2',
      description: 'Chatroom for year 2 semester 2 students',
    },
    {
      name: 'Year 3 Semester 1',
      description: 'Chatroom for year 3 semester 1 students',
    },
    {
      name: 'Year 3 Semester 2',
      description: 'Chatroom for year 3 semester 2 students',
    },
    {
      name: 'Year 4 Semester 1',
      description: 'Chatroom for year 4 semester 1 students',
    },
    {
      name: 'Year 4 Semester 2',
      description: 'Chatroom for year 4 semester 2 students',
    },
  ]
  static async seed() {
    const chatrooms = await this.prismaClient.chatroom.findMany()
    if (chatrooms.length === 0)
      await this.prismaClient.chatroom.createMany({ data: this.data })
  }
}
