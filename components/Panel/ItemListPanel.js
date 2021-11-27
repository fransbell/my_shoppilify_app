import React from "react"
import CategoryPanel from "./CategoryPanel"

const ItemListPanel = ({ data, removeHandler, itemHandler }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <CategoryPanel
            key={item.name}
            name={item.name}
            items={item.lists}
            removeHandler={removeHandler}
            itemHandler={itemHandler}
          />
        )
      })}
    </>
  )
}

export default ItemListPanel
