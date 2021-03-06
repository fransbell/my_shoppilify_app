import { Paper, Text, createStyles, UnstyledButton } from "@mantine/core"
import React from "react"

const useStyles = createStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ["button"]: {
      width: "18px",
      height: "18px",
      textAlign: "center",
      fontSize: "32px",
    },
    ["p"]: {
      width: "80%",
    },
  },
  addHandler: {
    fontSize: "32px",
    lineHeight: "0",
    color: "#C1C1C4;",
    [`&:hover`]: {
      cursor: "pointer",
    },
  },
}))

function Item({ name, category, id, addHandler }) {
  const { classes } = useStyles()

  const clickHanlder = (ev) => {
    addHandler(category, name, id)
  }

  return (
    <Paper
      className={classes.root}
      padding="md"
      shadow="md"
      radius="lg"
      withBorder
      style={{ cursor: "pointer" }}
      onClick={() => console.log(category, name, id)}
    >
      <Text component="p" size="lg" component="p" m="0">
        {name}
      </Text>
      <div onClick={clickHanlder} className={classes.addHandler}>
        +
      </div>
    </Paper>
  )
}

export default Item
