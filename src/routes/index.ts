import userRouter from './user'
import chatroomRouter from './chatroom'
import healthRouter from './health'

const prefix = 'api/v1'

export default [
  { prefix: '/', default: healthRouter },
  { prefix, default: userRouter },
  { prefix, default: chatroomRouter },
]
