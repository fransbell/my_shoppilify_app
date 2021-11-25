import { createStyles, Container, Text, SimpleGrid, Paper } from "@mantine/core"
import React from "react"

const useStyles = createStyles((theme) => ({
  root: {
    width: "100%",
  },
  card: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    [`p`]: {
      color: "#000",
    },
    [`p:last-child`]: {
      position: "absolute",
      fontSize: "16px",
      color: "#F9A10A",
      right: "2%",
      top: "1%",
    },
  },
}))

const Category = ({ data }) => {
  const { classes } = useStyles()
  return (
    <Container padding="0" className={classes.root}>
      <Text my="12px" style={{ fontSize: "18px", fontWeight: "500" }}>
        {data.name}
      </Text>
      <SimpleGrid
        cols={4}
        spacing="lg"
        breakpoints={[
          { maxWidth: 980, cols: 3, spacing: "md" },
          { maxWidth: 755, cols: 2, spacing: "sm" },
          { maxWidth: 600, cols: 1, spacing: "sm" },
        ]}
      >
        {data.items.map((item) => {
          return (
            <Paper
              className={classes.card}
              padding="md"
              shadow="md"
              radius="md"
              withBorder
            >
              <Text component="p" size="lg" component="p" m="0">
                {item.name}
              </Text>
              <Text component="h1" size="lg" component="p" m="0">
                {`${item.amounts} pcs`}
              </Text>
            </Paper>
          )
        })}
      </SimpleGrid>
    </Container>
  )
}

export default Category
