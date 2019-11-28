import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 7,
    paddingBottom: 7,
    border: 0,
    fontSize: "12px",
    color: "black",
    cursor: "pointer",
    background: "none",
    outline: "none",
    fontFamily: "Montserrat",
    "&:hover": {
      background: "none"
    }
  },
  row: {
    textAlign: "center",
    cursor: "pointer"
  },
  addFolder: {
    margin: "5px auto",
    display: "flex",
    flexDirection: "row"
  },
  inputFolder: {
    border: "1px solid #d3d3d3",
    width: 100,
    height: 20,
    outline: "none"
  }
}));
