const { Deta } = require("deta")

const PROJECT_KEY = process.env.PROJECT_KEY || "null"

const deta = Deta(PROJECT_KEY)
const db = deta.Base("category")

const fetchDB = async () => {
  const data = await db.fetch()
  return data.items
}

fetchDB().then((res) => {
  console.log(res)
})

/* db.put({
  key: "Fruits and vegetables",
  id: "0",
  category: "Fruits and vegetables",
  items: [
    { id: 0, name: "Avocado" },
    { id: 1, name: "Banana" },
    { id: 2, name: "Bunch of Carrots" },
    { id: 3, name: "Chicken 1 kg" },
    { id: 4, name: "Pre Cooked corn" },
    { id: 5, name: "Mandarin Nadorcott" },
    { id: 6, name: "Piele De Sapo Melon" },
    { id: 7, name: "Water Melon" },
  ],
})

db.put({
  key: "Meat and fish",
  id: "1",
  category: "Meat and fish",
  items: [
    { id: 0, name: "Chicken leg box" },
    { id: 1, name: "Chicken 1kg" },
    { id: 2, name: "Pork fillets 450g" },
    { id: 3, name: "Salmon 1kg" },
  ],
})
 */
/* 
const res = db.update(
  { items: db.util.append({ id: 4, name: "salami 1kg" }) },
  "Meat and fish"
) */
