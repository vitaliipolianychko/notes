import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
export const customUseStyle = makeStyles(() => ({
  backTableRoot: {
    height: 15,
    textAlign: "center",
    marginBottom: 10
  },
  root: {
    width: 150,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: "#d3d3d3",
    fontFamily: "Montserrat",
    overflowY: "auto",
    height: 336
  },
  row: {
    textAlign: "center",
    cursor: "pointer"
  },
  rowActive: {
    background: "#a0a0a0"
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
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
  editFolderName: {
    width: "145px",
    height: "15px"
  },
  content: {
    width: 90,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  picture: {
    width: "15px",
    height: "15px",
    marginRight: "5px"
  },
  responsive: {
    display: "none"
  },
  buttonResponsive: {
    border: "none",
    background: "none",
    outline: "none",
    cursor: "pointer"
  },
  buttonsResponsive: {
    display: "none"
  },
  labelFolder: {
    display: "none"
  },
  "@media screen and (max-width:768px)": {
    root: {
      width: 300,
      height: 100
    },
    backTableRoot: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      marginBottom: 0,
      paddingBottom: 10,
      paddingTop: 10,
      borderBottom: "1px dotted grey",
      background: "#d3d3d3"
    },
    responsive: {
      display: "block",
      marginLeft: 20,
      cursor: "pointer"
    },
    button: {
      display: "none"
    },
    content: {
      width: 150
    },
    buttonsResponsive: {
      display: "block",
      border: "none",
      background: "none",
      marginLeft: 18,
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
      paddingLeft: 20,
      fontFamily: "Montserrat"
    },
    editFolderName: {
      width: "98%"
    },
    labelFolder: {
      display: "block",
      textAlign: "center",
      cursor: "pointer",
      padding: 0,
      paddingBottom: 10,
      fontSize: 14
    },
    btnFolderResponsive: {
      padding: "5px 10px",
      background: "#d3d3d3",
      marginTop: 10,
      fontFamily: "Montserrat",
      cursor: "pointer",
      border: "1px dotted black",
      outline: "none"
    }
  }
}));

export const StyledTableCell = withStyles(theme => ({
  body: {
    padding: "0px",
    height: "25px",
    paddingLeft: "5px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }
}))(TableCell);
export const CustomTableCell = withStyles(theme => ({
  body: {
    padding: "0px",
    background: "none"
  }
}))(TableCell);
