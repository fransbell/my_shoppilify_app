import React from "react"
import CategoryPanel from "./CategoryPanel"
import mockdata from "./mockdata"

const ItemListPanel = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <CategoryPanel key={item.name} name={item.name} items={item.lists} />
        )
      })}
    </>
  )
}

export default ItemListPanel
