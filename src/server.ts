import fastify from 'fastify'
import fastifyCors from 'fastify-cors'
import swagger from 'fastify-swagger'
import routes from './routes'
import admin from 'firebase-admin'
import 'dotenv/config'

var serviceAccount = process.env.SERVICE_ACCOUNT_KEY ? JSON.parse(Buffer.from(process.env.SERVICE_ACCOUNT_KEY , 'base64').toString()) :  require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

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

fastifyServer.register(fastifyCors, { 
  origin: '*',
})

routes.forEach((route) => {
  fastifyServer.register(route, { prefix: 'api/v1' })
})

const start = async () => {
  fastifyServer.listen(process.env.PORT || 5000, process.env.HOST || '0.0.0.0', (err, address) => {
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
