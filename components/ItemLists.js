import {
  Container,
  Text,
  createStyles,
  Input,
  Image,
  LoadingOverlay,
} from "@mantine/core"
import React, { forwardRef } from "react"
import Category from "./Cards/Category"

const useStyles = createStyles((theme) => ({
  main: {
    padding: "16px",
    margin: "0",
    flex: "1",
    maxWidth: "1440px",
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "'Quicksand', sans-serif;",
    fontSize: "26px",
    width: "70%",
    [`span`]: {
      color: "#F9A109",
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
    margin: "0",
    flex: "1",
    position: "relative",
  },
}))

const items = [
  "Avocado",
  "Banana dada tulnanna",
  "Carrot",
  "Chicken",
  "Pre Cooked Pork ",
]

const ItemLists = ({ data, addHandler }) => {
  const { classes } = useStyles()
  const contents = data ? data : []
  return (
    <Container
      className={classes.scroll}
      size="100%"
      style={{ overflowY: "scroll", padding: "16px 0" }}
    >
      <Container className={classes.main}>
        <Text className={classes.title}>
          <span>Shoppify</span> allows you take your shopping list wherever you
          go
        </Text>
        <Container mx="0">
          <Input
            icon={<Image width="50%" src="/icons/search.svg" />}
            placeholder="Search item"
            radius="sm"
          />
        </Container>
      </Container>
      {data == false ? <LoadingOverlay visible={true} /> : ""}

      {contents.map((item) => {
        return (
          <Category
            key={item.category}
            name={item.category}
            itemlist={item.items}
            addHandler={addHandler}
          />
        )
      })}
    </Container>
  )
}

export default ItemLists
