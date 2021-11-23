import { Text, createStyles, Button, UnstyledButton } from "@mantine/core"
import { useBooleanToggle, useClickOutside } from "@mantine/hooks"
import React, { useState } from "react"

const useStyles = createStyles((theme) => ({
  listing: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "4px 0.5rem",
    transitionDuration: "1s",
    overflow: "hidden",
    position: "relative",
    ["p"]: {
      margin: "0",
      padding: "8px 0",
    },
    ["button"]: {
      borderRadius: "16px",
      padding: "0 8px",
      height: "24px",
      ["span"]: {
        margin: "0",
      },
    },
  },
  optionSection: {
    background: "#fff",
    position: "relative",
    width: "auto",
    padding: "8px 0 8px 42px",
    borderRadius: "8px",
  },
  actionButton: {
    border: "none",
    background: "rgba(255,255,255,0)",
  },
  deleteAction: {
    position: "absolute",
    borderRadius: "4px",
    top: "0",
    left: "0",
    padding: "0",
  },
}))

const ListItem = ({ name, id, rmHandler }) => {
  const { classes } = useStyles()
  const [opened, settoggle] = useBooleanToggle(false)
  const [amout, setAmout] = useState(1)
  const ref = useClickOutside(() => settoggle(false))

  const increment = () => {
    setAmout(amout + 1)
  }
  const decrement = () => {
    if (amout - 1 < 1) {
      return
    }
    setAmout(amout - 1)
  }

  const removeItem = (target) => {
    rmHandler(target)
  }

  return (
    <div className={classes.listing}>
      <Text component="p">{name}</Text>
      <section ref={ref} className={opened ? classes.optionSection : ""}>
        {opened ? (
          <Button
            radius="xs"
            color="yellow"
            className={classes.deleteAction}
            onClick={() => {
              removeItem(id)
            }}
            styles={{ root: { minHeight: "42px", padding: "0" } }}
          >
            <img src="/icons/delete.svg" />
          </Button>
        ) : (
          ""
        )}
        {opened ? (
          <Button
            onClick={() => {
              increment()
            }}
            className={classes.actionButton}
            variant="outline"
          >
            +
          </Button>
        ) : (
          ""
        )}
        <Button variant="outline" onClick={() => settoggle()} width="auto">
          {amout} pcs
        </Button>
        {opened ? (
          <Button
            onClick={() => {
              decrement()
            }}
            className={classes.actionButton}
            variant="outline"
          >
            -
          </Button>
        ) : (
          ""
        )}
      </section>
    </div>
  )
}

function ItemPanel({ items, rmHandler }) {
  return (
    <>
      {items.map((any) => {
        return <ListItem key={any} id={any} rmHandler={rmHandler} name={any} />
      })}
    </>
  )
}

export default ItemPanel