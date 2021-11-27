import React, { forwardRef } from "react"
import { Button, createStyles } from "@mantine/core"
import ItemListPanel from "./ItemListPanel"
import EmptyPanel from "./Main/EmptyPanel"

const useStyles = createStyles((theme) => ({
  root: {
    width: "30%",
    background: "#FFF0DE",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowY: "scroll",
    transitionDuration: "0.4s",
    transitionTimingFunction: "ease-out",
    position: "relative",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: "none",
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      width: "50%",
    },
  },
  addItems: {
    position: "relative",
    width: " 90%",
    marginTop: "42px",
    height: "auto",
    borderRadius: "16px",
    background: "#80485B",
    display: "flex",
    justifyContent: "flex-end",
    transitionDuration: "1s",
    [`img`]: {
      position: "absolute",
      width: "72px",
      top: "-25%",
      left: "5%",
    },
    [`section`]: {
      display: "flex",
      flexDirection: "column",
      width: "50%",
      padding: "1rem",
      marginRight: "10%",
      justifyContent: "space-between",
      color: "#fff",
      [`button`]: {
        color: "#333",
        overflow: "hidden",
      },
    },
  },
  scroll: {
    [`&::-webkit-scrollbar`]: {
      width: "3px",
      height: "3px",
    },
    [`&::-webkit-scrollbar-thumb`]: {
      background: "#B3AFB3",
      borderRadius: "30px",
    },
    [`&::-webkit-scrollbar-thumb:hover`]: {
      background: "#B3AFB3",
    },
    [`&::-webkit-scrollbar-track`]: {
      background: "#F0F0F0",
      borderRadius: "0px",
      boxShadow: "inset 0px 0px 0px 0px #F0F0F0",
    },
  },
}))

const ShoppingPanel = ({ opened, toHandler, current, removeHandler }) => {
  const { classes, cx } = useStyles()

  return (
    <div
      className={cx(classes.root, classes.scroll)}
      style={{ width: opened ? "30%" : "0" }}
    >
      <div className={classes.addItems} style={{ opacity: opened ? "1" : "0" }}>
        <img src="/icons/source.svg" />
        <section>
          <span>Didn’t find what you need?</span>
          <Button
            variant="white"
            onClick={() => {
              toHandler()
            }}
          >
            Add item
          </Button>
        </section>
      </div>
      <section
        style={{
          width: "100%",
          height: "100%",
          padding: "16px",
          opacity: opened ? "1" : "0",
          transitionDuration: "1s",
        }}
      >
        {current.length ? (
          <ItemListPanel data={current} removeHandler={removeHandler} />
        ) : (
          <EmptyPanel />
        )}
      </section>
    </div>
  )
}

export default ShoppingPanel
