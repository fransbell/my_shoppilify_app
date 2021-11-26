import React from "react"
import CategoryPanel from "./CategoryPanel"
import mockdata from "./mockdata"

const ItemListPanel = ({ data, removeHandler }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <CategoryPanel
            key={item.name}
            name={item.name}
            items={item.lists}
            removeHandler={removeHandler}
          />
        )
      })}
    </>
  )
}

export default ItemListPanel
