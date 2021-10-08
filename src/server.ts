import fastify from 'fastify'
import swagger from 'fastify-swagger'
import student from './routes/student'

const fastifyServer = fastify({ logger: true })

fastifyServer.register(swagger),
  {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
      info: {
        title: 'Fastify API',
        version: '1.0.0',
        description: 'Student Sorter',
      },
    },
  }

fastifyServer.register(student)

const PORT = 5000

const start = async () => {
  fastifyServer.listen(PORT, (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server listening at ${address}`)
  })
}

start()
