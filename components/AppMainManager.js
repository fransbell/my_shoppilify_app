import { AppShell, MediaQuery, createStyles, Button } from "@mantine/core"
import React, { useCallback, useEffect, useState } from "react"
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

  const [currenItems, setcurrenItems] = useState([
    {
      name: "fruitsata",
      lists: [
        { id: 0, name: "Avocadoa", amount: 1 },
        { id: 1, name: "Bananaa", amount: 1 },
        { id: 2, name: "Pre Cooked Porka", amount: 1 },
        { id: 3, name: "Water melona", amount: 1 },
      ],
    },
    {
      name: "fruits",
      lists: [
        { id: 0, name: "Avocado", amount: 1 },
        { id: 1, name: "Banana", amount: 1 },
        { id: 2, name: "Pre Cooked Pork", amount: 1 },
        { id: 3, name: "Water melon", amount: 1 },
      ],
    },
  ])

  const [opened, setopened] = useState(true)

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
      setcurrenItems(updated)
      console.log(currenItems)
      return
    }
    const tmp = updated
    // current is existing
    updated.map((item) => {
      const data = item
      // catalog existed
      if (item.name === category) {
        data.lists.push({ id: id, name: name, amount: 1 })
        return data
      }
    })

    if (updated !== tmp) {
      setcurrenItems(updated)
      return
    }

    /* if (updated == tmp) {
      updated.push({
        name: category,
        lists: [{ id: id, name: name, amout: 1 }],
      })
    }
    setcurrenItems(updated)
    return */
  }

  function removeHandler(category, itemid) {
    const updated = currenItems
    let idxRes
    updated.findIndex((obj, idx) => {
      if (obj.name == category) {
        const res = obj.lists.findIndex((item, itx) => {
          if (item.id == itemid) {
            idxRes = [idx, itx]
          }
        })
      }
    })
    updated[idxRes[0]].lists.splice(idxRes[1], 1)
    
    if (!updated[idxRes[0]].lists.length) {
      updated.splice(idxRes[0], 1)
    }

    setcurrenItems([...updated])
  }

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
        <Button
          onClick={() => {
            addHandler("fruits and vegs", "avocado", 0)
          }}
        >
          add
        </Button>
        <ItemLists data={itemlist} />
        <ShoppingPanel
          opened={opened}
          current={currenItems}
          removeHandler={removeHandler}
        />
      </AppShell>
    </MediaQuery>
  )
}

export default AppMainManager
