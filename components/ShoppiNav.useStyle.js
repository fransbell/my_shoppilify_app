import { createStyles } from "@mantine/styles"

const useStyle = createStyles((theme) => ({
  navbar: {
    width: "74px",
    position: "fixed",
    padding: "25px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navbarGroup: {
    padding: "0",
    height: "100%",
    justifyContent: "space-between",
  },
  logo: {
    width: "21px",
  },
  flex: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    ["img"]: {
      margin: "24px 0",
    },
  },
  shoppingCart: {
    background: "#F9A109",
    position: "relative",
    width: "40px",
    height: "42px",
    borderRadius: "50%",
    ["figure"]: {
      height: "42px",
    },
    ["img"]: {
      color: "#fff",
      width: "24px",
      height: "24px",
      margin: "23%",
    },
  },
  inCart: {
    position: "absolute",
    top: "-6px",
    right: "-8px",
    padding: "0",
    width: "20px",
    height: "20px",
  },
}))

export { useStyle }
