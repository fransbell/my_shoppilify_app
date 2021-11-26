import { AppShell, MediaQuery, createStyles } from "@mantine/core"
import React, { useEffect, useState } from "react"
import ItemLists from "./ItemLists"
import ShoppiNav from "./ShoppiNav"
import ShoppingPanel from "./Panel/ShoppingPanel"

const useStyles = createStyles((theme) => ({
  root: {
    Height: "100%",
  },
  shellRoot: {
    minHeight: "100vh",
    height: "1px",
    minWidth: "100vw",
    width: "1px",
    maxWidth: "1440px",
  },
  shellBody: { height: "100%" },
  shellMain: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
  },
}))

function AppMainManager() {
  const [itemlist, setitemlist] = useState([])

  const [currenItems, setcurrenItems] = useState([])

  const [opened, setopened] = useState(true)

  const { classes } = useStyles()

  useEffect(() => {
    const datas = fetch("/api/itemlist")
      .then((response) => response.json())
      .then((data) => {
        return setitemlist(data.itemlists)
      })
  }, [])

  return (
    <MediaQuery query="(min-width: 768px)" styles={{ paddingLeft: "74px" }}>
      <AppShell
        styles={{
          root: classes.shellRoot,
          body: classes.shellBody,
          main: classes.shellMain,
        }}
        padding="0"
        navbar={
          <ShoppiNav
            cartHandler={() => {
              setopened(!opened)
            }}
          />
        }
      >
        <ItemLists data={itemlist} />
        <ShoppingPanel opened={opened} current={currenItems} />
      </AppShell>
    </MediaQuery>
  )
}

export default AppMainManager
