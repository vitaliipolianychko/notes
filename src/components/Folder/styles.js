import { makeStyles } from "@material-ui/core/styles";

export const customUseStyle = makeStyles(() => ({
  backTableRoot: {
    height: 15,
    textAlign: "center",
    marginBottom: 10
  },
  root: {
    width: 150,
    overflowX: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontFamily: "Montserrat"
  },
  rowActive: {
    background: "#a0a0a0"
  },
  tdCell: {
    padding: 0
  }
}));
