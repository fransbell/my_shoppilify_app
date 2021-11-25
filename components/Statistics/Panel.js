import React from "react"
import { Text, Progress, createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  utilsflex: {
    display: "flex",
    justifyContent: "space-between",
  },
}))

const Panel = ({ data, color }) => {
  const { classes } = useStyles()
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.name}>
            <div className={classes.utilsflex}>
              <Text my="0.75rem">{item.name}</Text>
              <Text>{`${item.value} %`}</Text>
            </div>

            <Progress color={color} size="md" value={item.value} />
          </div>
        )
      })}
    </>
  )
}

export default Panel
