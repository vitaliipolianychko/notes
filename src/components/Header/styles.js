import { makeStyles } from "@material-ui/core/styles";
export const iconsStyles = makeStyles(theme => ({
  header: {
    width: 750,
    background: "#d3d3d3",
    borderRadius: 0
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 150,
    width: 200
  },
  iconsNote: {
    width: 15,
    height: 15,
    cursor: "pointer",
    background: "white",
    padding: "2px 5px"
  },
  btnIcon: {
    outline: "none",
    border: "none"
  },
  "@media screen and (max-width:768px)": {
    header: {
      display: "none"
    }
  }
}));
