import React, { useState } from "react"
import Link from "next/link"
import {
  Navbar,
  Image,
  Container,
  Tooltip,
  Button,
  Anchor,
} from "@mantine/core"

import { useStyle } from "./ShoppiNav.useStyle"

function ShoppiNav({ cartHandler }) {
  const cartItems = 2
  const { classes } = useStyle()

  const [opened, setopened] = useState(false)
  return (
    <Navbar hidden={!opened} hiddenBreakpoint="sm" className={classes.navbar}>
      <Link href="/">
        <Anchor>
          <Image width="28px" src="icons/logo.svg" />
        </Anchor>
      </Link>

      <Container className={classes.menu}>
        <Tooltip label="items" color="dark" position="right" withArrow>
          <Link href="/">
            <Anchor>
              <Image src="icons/list.svg" />
            </Anchor>
          </Link>
        </Tooltip>
        <Tooltip label="history" color="dark" position="right" withArrow>
          <Link href="/history">
            <Anchor>
              <Image src="icons/replay.svg" />
            </Anchor>
          </Link>
        </Tooltip>
        <Tooltip label="statistic" color="dark" position="right" withArrow>
          <Link href="/statistics">
            <Anchor>
              <Image src="icons/poll.svg" />
            </Anchor>
          </Link>
        </Tooltip>
      </Container>

      <div className={classes.shoppingCart}>
        <Image src="icons/cart.svg" onClick={() => cartHandler()} />
        {cartItems ? (
          <Button className={classes.inCart} color="red" compact>
            {cartItems}
          </Button>
        ) : (
          ""
        )}
      </div>
    </Navbar>
  )
}

export default ShoppiNav
