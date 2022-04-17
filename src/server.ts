import fastify from 'fastify'
import swagger from 'fastify-swagger'
import routes from './routes'
import 'dotenv/config'

const fastifyServer = fastify({ logger: true })

fastifyServer.register(swagger, {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'Fastify API',
      version: '1.0.0',
      description: 'Student Sorter',
    },
  },
})

routes.forEach((route) => {
  fastifyServer.register(route, { prefix: 'api/v1' })
})

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

fastifyServer.ready((err) => {
  if (err) throw err
  fastifyServer.swagger()
})

start()
