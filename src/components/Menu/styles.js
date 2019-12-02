import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(theme => ({
  menuItem: {
    fontSize: "14px",
    padding: "0 5px",
    borderBottom: "1px dotted grey"
  },
  buttonMenu: {
    outline: "none",
    padding: 0,
    background: "none",
    border: "none",
    marginLeft: 15,
    marginBottom: 5,
    cursor: "pointer",
    fontSize: 14,
    width: 18,
    height: 18,
    "&:hover": {
      background: "white",
      borderRadius: "50%",
      marginTop: 5
    }
  },
  marginMenu: {
    marginLeft: 30,
    marginTop: 25
  },
  Menu: {
    margin: 0,
    width: 100
  },
  "@media screen and (max-width:768px)": {
    buttonMenu: {
      display: "none"
    }
  }
}));
