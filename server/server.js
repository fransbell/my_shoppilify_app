const fastify = require("fastify")({ logger: true })
const PORT = process.env.PORT || 8000

fastify.register(require("./routes/item"))

fastify.get("/", async (request, reply) => {
  return { message: "pong" }
})

const start = async () => {
  try {
    await fastify.listen(PORT)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
