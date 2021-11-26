import { Container, SimpleGrid, Text } from "@mantine/core"
import Item from "./Item"
import React from "react"

function Category({ itemlist, name }) {
  return (
    <Container size="100%">
      <Text
        component={"p"}
        mt="24px"
        mb="36px"
        style={{ fontWeight: "500", fontFamily: "'Quicksand', sans-serif" }}
      >
        {name}
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
        {itemlist.map((item) => {
          return (
            <Item
              key={item.name}
              category={name}
              id={item.id}
              name={item.name}
            />
          )
        })}
      </SimpleGrid>
    </Container>
  )
}

export default Category
