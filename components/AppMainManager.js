import { createStyles } from "@mantine/styles"
import React, { useState } from "react"

const useStyles = createStyles((theme) => ({}))

function AppMainManager() {
  const [state, setstate] = useState({
    panelOpened: true,
    activePanel: "itemlist",
  })

  const { classes } = useStyles()

  return <div></div>
}

export default AppMainManager
