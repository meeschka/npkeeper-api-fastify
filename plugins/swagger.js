const fp = require('fastify-plugin')

module.exports = fp(function (fastify, opts, next) {
    fastify.register(require('fastify-swagger'), {
        routePrefix: '/documentation',
        swagger: {
          info: {
            title: 'NPKeeper API',
            description: 'CRUD API for NPKeeper',
            version: '0.1.0'
          },
          externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here'
          },
          host: 'localhost:3000',
          schemes: ['http'],
          consumes: ['application/json'],
          produces: ['application/json'],
          tags: [
            { name: 'user', description: 'User related end-points' },
            { name: 'code', description: 'Code related end-points' }
          ],
        },
        exposeRoute: true
      })

    next()
})