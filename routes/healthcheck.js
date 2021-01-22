'use strict'

module.exports = function (fastify, opts, next) {
    fastify.route({
        method: 'GET',
        url: '/healthcheck/',
        schema: {
            tags: ['healthcheck'],
            description: 'healthcheck endpoint to determine if service is up and running',
            response: {
                200: {
                    type: "object",
                    properties: {
                        status: { type: "string" },
                        timestamp: { type: "string", format: "date-time" }
                    }
                }
            }
        },
        handler: async (req, res) => ({ status: 'ok', timestamp: new Date().toISOString() })
    })
    next()
}