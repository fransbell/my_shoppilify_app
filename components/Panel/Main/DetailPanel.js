import { Button, Container, Text, Image } from "@mantine/core"
import { createStyles } from "@mantine/styles"
import React from "react"

const useStyles = createStyles((theme) => ({
  root: {
    width: "30%",
    height: "auto",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflowY: "scroll",
    padding: "1rem",
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
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    flex: "1",
    [`p`]: {
      margin: "0.25rem 0",
    },
    [`h4`]: {
      margin: "0.25rem 0",
    },
  },
  control: {
    [`button`]: { margin: "0 0.25rem" },
  },
}))

const DetailPanel = ({ panelHandler }) => {
  const { classes, cx } = useStyles()
  return (
    <div className={cx(classes.root, classes.scroll)}>
      <Container mx="0" my="1rem" className={classes.container}>
        <Text
          onClick={() => {
            panelHandler("shoppingList")
          }}
          m="0"
          component="p"
          color="yellow"
          align="left"
        >
          {"<- Back"}
        </Text>
        <Image
          width={210}
          mx="auto"
          my="1rem"
          radius="md"
          src="/Avocado.webp"
        />
        <div>
          <Text component="h4">Name</Text>
          <Text component="p">{"Avocado"}</Text>
        </div>
        <div>
          <Text component="h4">Category</Text>
          <Text component="p">{"Fruit and vegetables"}</Text>
        </div>
        <div>
          <Text component="h4">Note</Text>
          <Text component="p">
            {
              "Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice. "
            }
          </Text>
          <Text component="p">
            {
              "Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice. "
            }
          </Text>
          <Text component="p">
            {
              "Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice. "
            }
          </Text>
        </div>
      </Container>
      <Container className={classes.control}>
        <Button variant="white" onClick={() => toHandler()}>
          Delete
        </Button>
        <Button color="yellow">Add to list</Button>
      </Container>
    </div>
  )
}

export default DetailPanel
