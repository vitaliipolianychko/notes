import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "0px",
    boxShadow: theme.shadows[5],
    top: "50%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  },
  textField: {
    width: 400
  },
  "@media screen and (max-width:768px)": {
    paper: {
      width: 200
    },
    textField: {
      width: 200
    }
  }
}));
