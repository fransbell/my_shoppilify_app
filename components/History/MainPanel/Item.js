import { Paper, Text, createStyles, Container } from "@mantine/core"
import React from "react"

const useStyles = createStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "space-between",
  },
  flex: {
    display: "flex",
    [`div`]: {
      padding: "8px",
    },
  },
}))

const Item = ({ name, date, status }) => {
  const { classes } = useStyles()
  return (
    <Paper padding="xs" my="xs" shadow="xs" withBorder className={classes.main}>
      <div className={classes.flex}>
        <Text>{name}</Text>
      </div>

      <div className={classes.flex}>
        <Text>{date}</Text>
        <Text>{status}</Text>
        <Text
          style={{ cursor: "pointer", color: "#F9A109", fontWeight: "bold" }}
          onClick={() => console.log("selected")}
        >
          {">"}
        </Text>
      </div>
    </Paper>
  )
}

export default Item
