import React from "react"
import { Text } from "@mantine/core"
import Item from "./Item"

const HistoryItems = ({ data }) => {
  console.log(data.lists.length)
  return (
    <div key={data.name}>
      <Text style={{ fontSize: "12px", fontWeight: "500" }}>{data.name}</Text>
      {data.lists.map((item) => {
        return (
          <Item
            key={`list-${item.listName}`}
            name={item.listName}
            date={item.dateCreated}
            status={item.status}
          />
        )
      })}
    </div>
  )
}

export default HistoryItems
