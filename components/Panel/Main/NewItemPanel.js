import {
  Button,
  Container,
  Input,
  InputWrapper,
  Select,
  Text,
  Textarea,
} from "@mantine/core"
import { createStyles } from "@mantine/styles"
import React from "react"
const useStyles = createStyles((theme) => ({
  root: {
    width: "30%",
    background: "#F0F0F0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflowY: "scroll",
    padding: "1rem",
    transitionDuration: "0.4s",
    transitionTimingFunction: "ease-out",
    position: "relative",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: "none",
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      width: "50%",
    },
    [`input`]: {
      marginBottom: "16px",
      height: "60px",
    },
    [`.note textarea`]: {
      height: "110px",
      marginBottom: "16px",
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
  control: {
    [`button`]: {
      margin: "0 10px",
    },
  },
}))
const NewItemPanel = ({ toHandler }) => {
  const { classes, cx } = useStyles()
  return (
    <div className={cx(classes.root, classes.scroll)}>
      <Container size="lg" m="0">
        <Text>Add a new item</Text>
        <InputWrapper label="Name">
          <Input
            className="name"
            radius="md"
            required
            placeholder="Enter a name"
          />
        </InputWrapper>
        <InputWrapper label="Note (optional)">
          <Textarea className="note" placeholder="Enter a note" />
        </InputWrapper>
        <InputWrapper className="image" label="Image (optional)">
          <Input placeholder="Enter a url" />
        </InputWrapper>
        <InputWrapper className="category" label="Category">
          <Select
            searchable
            data={[
              { value: "fruitvegs", label: "Fruit and vegetables" },
              { value: "meatfish", label: "Meat and Fish" },
              { value: "beverage", label: "Beverages" },
            ]}
          />
        </InputWrapper>
      </Container>

      <Container className={classes.control}>
        <Button onClick={() => toHandler()}>cancel</Button>
        <Button color="yellow">Save</Button>
      </Container>
    </div>
  )
}

export default NewItemPanel
