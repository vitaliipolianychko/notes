import { makeStyles } from "@material-ui/core/styles";

export const customUseStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 0,
    height: 336,
    overflowY: "auto"
  },
  leftSide: {
    width: 200,
    backgroundColor: "rgba(0, 0, 0, .1)"
  },
  textField: {
    width: 400,
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0)
  },
  row: {
    cursor: "pointer",
    borderBottom: "2px dotted black"
  },
  rowActive: {
    background: "rgba(0, 0, 0, .4)",
    borderBottom: "1px dotted black"
  },
  content: {
    width: 165,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  picture: {
    width: "15px",
    height: "15px",
    marginRight: "5px"
  },
  backTableRoot: {
    display: "none"
  },
  buttonsResponsive: {
    display: "none"
  },
  "@media screen and (max-width:768px)": {
    root: { flexDirection: "column", marginTop: 20 },
    leftSide: { width: "100%" },
    textField: { width: "100%" },
    backTableRoot: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      background: "#d3d3d3",
      alignItems: "center",
      paddingBottom: 10,
      paddingTop: 10,
      borderBottom: "1px dotted grey",
      borderRadius: "none"
    },
    responsive: {
      display: "block",
      marginLeft: 30,
      cursor: "pointer"
    },
    content: {
      width: 200
    },
    buttonsResponsive: {
      display: "block",
      background: "none",
      border: "none",
      outline: "none",
      "&:hover": {
        cursor: "pointer"
      }
    },
    menuPictures: {
      width: 20,
      height: 20
    },
    responsiveFolder: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around"
    }
  }
}));
