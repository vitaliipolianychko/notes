import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  deleteFolderAction,
  currentFolderIdAction
} from "../../redux/folders/actions";
import { deleteNoteAction } from "../../redux/notes/actions";
import { useStyles } from "./styles";
import PropTypes from "prop-types";

const mapStateToProps = state => {
  return {
    dataNotes: state.notes.data,
    folderId: state.folders.currentFolder
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      currentFolderIdAction,
      deleteFolderAction,
      deleteNoteAction
    },
    dispatch
  );
};

function SimpleMenu({
  folderId,
  deleteFolderAction,
  deleteNoteAction,
  setEditFolderName,
  submitData,
  currentFolderIdAction,
  dataNotes
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const delFolder = () => {
    deleteFolderAction(folderId);
    setAnchorEl(null);
    dataNotes.map(i => {
      return i.folderId === folderId && deleteNoteAction(i.id);
    });
    currentFolderIdAction(null);
  };
  const editFolder = () => {
    setEditFolderName(true);
    setAnchorEl(null);
  };
  const addFolder = () => {
    submitData();
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <button onClick={handleClick} className={classes.buttonMenu}>
        ...
      </button>
      <Menu
        variant="selectedMenu"
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.marginMenu}
      >
        <div className={classes.Menu}>
          <MenuItem className={classes.menuItem} onClick={editFolder}>
            Edit
          </MenuItem>
          <MenuItem className={classes.menuItem} onClick={delFolder}>
            Delete
          </MenuItem>
          <MenuItem className={classes.menuItem} onClick={addFolder}>
            Add Folder
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(SimpleMenu);
SimpleMenu.propTypes = {
  folderId: PropTypes.string,
  deleteFolderAction: PropTypes.func,
  deleteNoteAction: PropTypes.func,
  setEditFolderName: PropTypes.func,
  submitData: PropTypes.func,
  currentFolderIdAction: PropTypes.func,
  dataNotes: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string]))
  )
};
