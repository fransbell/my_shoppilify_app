const { Deta } = require("deta")

const PROJECT_KEY = process.env.PROJECT_KEY || "undefined"

const deta = Deta(PROJECT_KEY)
const db = deta.Base("category")

const fetchDB = async (option) => {
  const data = await db.fetch(option)
  return data.items
}

function itemRoutes(fastify, options, done) {
  fastify.get("/api/itemlist", async (request, reply) => {
    const data = await fetchDB()
    return { itemlists: data }
  })
  fastify.get("/api/category/:id", async (request, reply) => {
    const { id } = request.params
    const data = await fetchDB()
    return { itemlists: data[id] }
  })
  fastify.get("/api/category/:cid/item/:id", async (request, reply) => {
    const { cid, id } = request.params
    const data = await fetchDB()
    return { itemlists: data[cid].items[id] }
  })
  done()
}

module.exports = itemRoutes
