import { Text } from "@mantine/core"
import React, { useState } from "react"
import ItemPanel from "./ItemPanel"

function CategoryPanel({ name, items, removeHandler }) {
  return (
    <>
      {items.length ? (
        <>
          <Text
            style={{
              fontWeight: "700",
              color: "#828282",
            }}
          >
            {name}
          </Text>
          <ItemPanel
            items={items}
            category={name}
            removeHandler={removeHandler}
          />
        </>
      ) : (
        ""
      )}
    </>
  )
}

export default CategoryPanel
