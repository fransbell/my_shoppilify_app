import React from "react"
import CategoryPanel from "./CategoryPanel"
import mockdata from "./mockdata"

const ItemListPanel = ({ data }) => {
  const initial = mockdata
  return (
    <>
      {initial.map((item) => {
        return (
          <CategoryPanel key={item.name} name={item.name} items={item.lists} />
        )
      })}
    </>
  )
}

export default ItemListPanel
