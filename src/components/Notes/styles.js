import { makeStyles } from "@material-ui/core/styles";

export const customUseStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  leftSide: {
    width: 200,
    overflowX: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  textField: {
    width: 400,
    border: "none",
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0)
  },
  notes: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  img: {
    cursor: "pointer",
    width: 20,
    height: 20
  },
  rowActive: {
    background: "#FFDEAD"
  }
}));
