import { AppShell, createStyles, MediaQuery } from "@mantine/core"
import ShoppiNav from "../components/ShoppiNav"
import HistoryPanel from "../components/History/HistoryPanel"
import OverviewPanel from "../components/History/OverviewPanel"

const useStyle = createStyles((theme) => ({
  root: {
    Height: "100%",
  },
  shellRoot: {
    minHeight: "100vh",
    height: "1px",
    minWidth: "100vw",
    width: "1px",
    maxWidth: "1440px",
  },
  shellBody: { height: "100%" },
  shellMain: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
  },
}))

const data = {
  listName: "shopping list",
  dateCreated: "Mon 24.8.2020",
  lists: [
    {
      name: "cookie",
      items: [
        { name: "sweet1", amounts: 1 },
        { name: "sweet2", amounts: 1 },
        { name: "sweet3", amounts: 1 },
        { name: "sweet4", amounts: 1 },
        { name: "sweet5", amounts: 1 },
        { name: "sweet6 sth very long desc", amounts: 1 },
      ],
    },
    {
      name: "baverage",
      items: [
        { name: "red", amounts: 1 },
        { name: "blue", amounts: 1 },
        { name: "yellow", amounts: 1 },
      ],
    },
  ],
}

const History = () => {
  const { classes } = useStyle()
  return (
    <MediaQuery query="(min-width: 768px)" styles={{ paddingLeft: "74px" }}>
      <AppShell
        styles={{
          root: classes.shellRoot,
          body: classes.shellBody,
          main: classes.shellMain,
        }}
        padding="0"
        navbar={
          <ShoppiNav
            cartHandler={() => {
              return console.log("noHandler")
            }}
          />
        }
      >
        <HistoryPanel />
        {/* <OverviewPanel data={data} /> */}
      </AppShell>
    </MediaQuery>
  )
}

export default History
