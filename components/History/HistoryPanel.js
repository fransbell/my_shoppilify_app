import { Container, Group, Text, createStyles } from "@mantine/core"
import React from "react"
import HistoryItems from "./MainPanel/HistoryItems"
const useStyles = createStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    [`p`]: {
      padding: "1rem 0",
      margin: "0",
      fontSize: "26px",
      fontWeight: "700",
    },
  },
  historyList: {},
}))

const data = [
  {
    name: "July 2020",
    lists: [
      {
        listName: "Grocery List",
        dateCreated: "27 8 2020",
        status: "complete",
      },
      {
        listName: "Beaverage List",
        dateCreated: "27 8 2020",
        status: "complete",
      },
    ],
  },
  {
    name: "August 2020",
    lists: [
      {
        listName: "Grocery List",
        dateCreated: "27 8 2020",
        status: "complete",
      },
      {
        listName: "Beaverage List",
        dateCreated: "27 8 2020",
        status: "complete",
      },
    ],
  },
]

const HistoryPanel = () => {
  const { classes } = useStyles()
  return (
    <Container m="0" className={classes.main}>
      <Text component="p">Shopping history</Text>
      {data.map((item) => {
        return <HistoryItems key={item.name} data={item} />
      })}
    </Container>
  )
}

export default HistoryPanel
