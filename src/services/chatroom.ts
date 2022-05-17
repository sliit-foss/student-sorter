import { getAllChatrooms } from '../repositories/chatroom'

export const getChatrooms = async () => {
  return getAllChatrooms()
}
