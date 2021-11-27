import { AppShell, MediaQuery, createStyles, Button } from "@mantine/core"
import React, { useCallback, useEffect, useState } from "react"
import ItemLists from "./ItemLists"
import ShoppiNav from "./ShoppiNav"
import ShoppingPanel from "./Panel/ShoppingPanel"
import NewItemPanel from "./Panel/Main/NewItemPanel"
import DetailPanel from "./Panel/Main/DetailPanel"

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

  const [activePanel, setactivePanel] = useState("shoppingList")

  const { classes } = useStyles()

  const addHandler = (category, name, id) => {
    let updated = currenItems
    // if current is none
    if (!updated.length) {
      updated = [
        {
          name: category,
          lists: [{ id: id, name: name, amount: 1 }],
        },
      ]
      setcurrenItems([...updated])
      return
    }

    let isChanged = false
    // current is existing
    updated.map((item) => {
      const data = item
      // catalog existed
      if (item.name === category) {
        let item

        data.lists.findIndex((obj) => {
          if (obj.id == id) {
            item = obj
          }
        })

        if (item) {
          item.amount++
          isChanged = true
        } else {
          data.lists.push({ id: id, name: name, amount: 1 })
          isChanged = true
        }

        return data
      }
    })

    if (isChanged) {
      setcurrenItems([...updated])
    } else {
      updated.push({
        name: category,
        lists: [{ id: id, name: name, amount: 1 }],
      })
      setcurrenItems([...updated])
    }
  }

  function getIndexPair(lists, category, id) {
    let idxRes
    lists.findIndex((obj, idx) => {
      if (obj.name == category) {
        const res = obj.lists.findIndex((item, itx) => {
          if (item.id == id) {
            idxRes = [idx, itx]
          }
        })
      }
    })
    return idxRes
  }

  function removeHandler(category, itemid) {
    const updated = currenItems
    let idxRes = getIndexPair(updated, category, itemid)
    updated[idxRes[0]].lists.splice(idxRes[1], 1)

    if (!updated[idxRes[0]].lists.length) {
      updated.splice(idxRes[0], 1)
    }

    setcurrenItems([...updated])
  }

  const itemIncrement = (category, id) => {
    const updated = currenItems
    let idxRes = getIndexPair(updated, category, id)
    const [a, b] = idxRes
    updated[a].lists[b].amount++
    setcurrenItems([...updated])
  }
  const itemDecrement = (category, id) => {
    const updated = currenItems
    let idxRes = getIndexPair(updated, category, id)
    const [a, b] = idxRes
    if (updated[a].lists[b].amount - 1 > 0) {
      updated[a].lists[b].amount--
    }
    setcurrenItems([...updated])
  }

  const itemHandler = {
    increment: itemIncrement,
    decrement: itemDecrement,
  }

  const searchHandler = (data) => {
    console.log(data)
  }

  useEffect(() => {
    const datas = fetch("/api/itemlist")
      .then((response) => response.json())
      .then((data) => {
        return setitemlist(data.itemlists)
      })
  }, [])

  let Panel

  const panelHandler = (target) => {
    console.log(target)
    setactivePanel(target)
  }

  switch (activePanel) {
    case "shoppingList":
      Panel = (
        <ShoppingPanel
          opened={opened}
          current={currenItems}
          removeHandler={removeHandler}
          itemHandler={itemHandler}
          panelHandler={panelHandler}
        />
      )
      break
    case "newitem":
      Panel = <NewItemPanel opened={opened} panelHandler={panelHandler} />
      break
    case "detail":
      Panel = <DetailPanel panelHandler={panelHandler} />
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
        navbar={
          <ShoppiNav
            cartHandler={() => {
              setopened(!opened)
            }}
          />
        }
      >
        <ItemLists
          data={itemlist}
          addHandler={addHandler}
          searchHandler={searchHandler}
        />
        {Panel}
      </AppShell>
    </MediaQuery>
  )
}

export default AppMainManager
