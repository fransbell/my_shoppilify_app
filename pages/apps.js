import { AppShell, createStyles, MediaQuery } from "@mantine/core"
import { useState, useRef } from "react"
import ShoppiNav from "../components/ShoppiNav"
import ItemLists from "../components/ItemLists"
import ShoppingPanel from "../components/Panel/ShoppingPanel"

import NewItemPanel from "../components/Panel/Main/NewItemPanel"
import DetailPanel from "../components/Panel/Main/DetailPanel"
const useStyle = createStyles((theme) => ({
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
const Home = () => {
  const { classes } = useStyle()
  const [panel, setpanel] = useState(true)

  const [currentPanel, setcurrentPanel] = useState("itemlist")
  const togglePanel = () => {
    setpanel(!panel)
  }

  const toShopping = () => {
    setcurrentPanel("itemlist")
  }
  const toNewItem = () => {
    setcurrentPanel("additem")
  }

  let current
  switch (currentPanel) {
    case "itemlist":
      current = <ShoppingPanel toHandler={toNewItem} opened={panel} />
      break
    case "additem":
      current = <NewItemPanel toHandler={toShopping} opened={panel} />
      break
  }

  return (
    <MediaQuery query="(min-width: 768px)" styles={{ paddingLeft: "74px" }}>
      <AppShell
        styles={{
          root: classes.shellRoot,
          body: classes.shellBody,
          main: classes.shellMain,
        }}
        padding="0"
        navbar={<ShoppiNav cartHandler={togglePanel} />}
      >
        <ItemLists style={{ background: "#FAFAFE" }} />
        {/* {current} */}
        <DetailPanel />
      </AppShell>
    </MediaQuery>
  )
}

export default Home
