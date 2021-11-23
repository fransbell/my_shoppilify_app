import { Text } from "@mantine/core"
import React, { useState } from "react"
import ItemPanel from "./ItemPanel"

function CategoryPanel({ name, items }) {
  const initialItems = items.map((item) => item.name)
  const [itemDisplay, setitemDisplay] = useState(initialItems)

  const remove = (id) => {
    const res = itemDisplay.filter((item) => {
      return item != id
    })
    console.log(res)
    setitemDisplay(res)
  }

  return (
    <>
      {itemDisplay.length ? (
        <>
          <Text
            style={{
              fontWeight: "700",
              color: "#828282",
            }}
          >
            {name}
          </Text>
          <ItemPanel items={itemDisplay} rmHandler={remove} />
        </>
      ) : (
        ""
      )}
    </>
  )
}

export default CategoryPanel
