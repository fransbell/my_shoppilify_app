import { Image, Text, Center } from "@mantine/core"
import { createStyles } from "@mantine/styles"
import React from "react"

const useStyles = createStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
}))

const EmptyPanel = () => {
  const { classes } = useStyles()
  return (
    <div className={classes.root}>
      <Center m="0" style={{ flex: 1 }}>
        <Text align="center">No items</Text>
      </Center>
      <Image mx="auto" width="80%" src="/icons/undraw_shopping_app.svg" />
    </div>
  )
}

export default EmptyPanel
