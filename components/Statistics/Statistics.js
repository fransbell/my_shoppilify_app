import { Text, createStyles, Paper } from "@mantine/core"
import Panel from "./Panel"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts"
import React from "react"

const useStyles = createStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "auto",
    overflow: "hidden",

    overflowY: "scroll",
    [`h1`]: {
      padding: "1rem 0",
      margin: "0",
      fontSize: "26px",
      fontWeight: "700",
    },
    [`p`]: {
      color: "#C1C1C4",
    },
  },
  flex: {
    width: "100%",
    display: "flex",
    margin: "0",
    [`.content`]: {
      margin: "1rem 2rem",
      flex: "1",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column",
      margin: "0",
    },
  },
  graph: {
    height: " 50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    margin: "1rem 4rem",
    width: "90%",
    height: "500px",
  },
}))

const topitem = [
  { name: "Banana", value: "12" },
  { name: "Rice", value: "10" },
  { name: "Chicken 1kg", value: "8" },
]

const topcatagory = [
  { name: "Fruits and vegetables", value: "23" },
  { name: "Meat and Fish", value: "14" },
  { name: "Pets", value: "11" },
]

const HistoryPanel = ({ data }) => {
  const { classes } = useStyles()
  return (
    <div className={classes.main}>
      <div className={classes.flex}>
        <div className="content">
          <Text my="0.75rem">Top items</Text>
          <Panel color="blue" data={topitem} />
        </div>
        <div className="content">
          <Text my="0.75rem">Top Categories</Text>
          <Panel color="yellow" data={topcatagory} />
        </div>
      </div>
      <div style={{ width: "100%", display: "flex", margin: "0 4rem" }}>
        <Text>Monthly Summary</Text>
      </div>

      <Paper
        className={classes.paper}
        padding="md"
        shadow="md"
        radius="md"
        withBorder
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={[
              { name: "January", banana: 35, rice: 45, chicken: 51 },
              { name: "Febuary", banana: 105, rice: 49, chicken: 41 },
              { name: "March", banana: 30, rice: 51, chicken: 62 },
              { name: "April", banana: 12, rice: 37, chicken: 39 },
              { name: "May", banana: 40, rice: 14, chicken: 48 },
              { name: "June", banana: 52, rice: 3, chicken: 21 },
              { name: "July", banana: 32, rice: 24, chicken: 36 },
            ]}
          >
            <YAxis />
            <XAxis dataKey="name" />
            <Tooltip animationEasing="linear" labelStyle={{ color: "black" }} />
            <CartesianGrid strokeDasharray="0 0" />
            <Line type="monotone" dataKey="banana" stroke="#E0A800" />
            <Line type="monotone" dataKey="rice" stroke="#2C1320" />
            <Line type="monotone" dataKey="chicken" stroke="#FE4A49" />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </div>
  )
}

export default HistoryPanel

/* <div style={{ flex: "1" }}>
        <div className={classes.flex}>
          <div className="content">
            <Text my="0.75rem">Top items</Text>
            <Panel color="blue" data={topitem} />
          </div>
          <div className="content">
            <Text my="0.75rem">Top Categories</Text>
            <Panel color="yellow" data={topcatagory} />
          </div>
        </div>
        <Container m="0" className={classes.graph} padding="1rem" size="100%">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={[
                { name: "Page A", uv: 100, pv: 2400, amt: 2400 },
                { name: "Page B", uv: 200, pv: 2400, amt: 2400 },
              ]}
            >
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </Container>
      </div> */
