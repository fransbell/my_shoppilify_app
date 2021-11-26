import { createStyles } from "@mantine/styles"
import { Head } from "next/document"
import React, { useState } from "react"

const useStyles = createStyles((theme) => ({}))

function AppMainManager() {
  const [state, setstate] = useState({
    panelOpened: true,
    activePanel: "itemlist",
  })

  const { classes } = useStyles()

  return <div>ello</div>
}

export default AppMainManager
