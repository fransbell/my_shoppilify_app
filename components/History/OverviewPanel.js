import { Container, Text, createStyles } from "@mantine/core"
import React from "react"
import Category from "./Overview/Category"

const useStyles = createStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    [`h1`]: {
      padding: "1rem 0",
      margin: "0",
      fontSize: "26px",
      fontWeight: "700",
    },
    [`p`]: {
      color: "#C1C1C4",
    },
  },
  historyList: {},
}))

const HistoryPanel = ({ data }) => {
  const { classes } = useStyles()
  return (
    <Container m="0" className={classes.main}>
      <Text component="h1">{data.listName}</Text>
      <Text component="p">{data.dateCreated}</Text>
      {data.lists.map((item) => {
        return <Category data={item} />
      })}
    </Container>
  )
}

export default HistoryPanel
