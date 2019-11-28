import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import {
  deleteFolderAction,
  currentFolderIdAction
} from "../../redux/folders/actions";
import { deleteNoteAction } from "../../redux/notes/actions";

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
  }
}));

const mapStateToProps = state => {
  return {
    dataNotes: state.notes.data,
    folderId: state.folders.currentFolder
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteFolder: folderId => {
      dispatch(deleteFolderAction(folderId));
    },
    deleteNotes: noteId => {
      dispatch(deleteNoteAction(noteId));
    },
    currentFolder: folderId => {
      dispatch(currentFolderIdAction(folderId));
    }
  };
};

function SimpleMenu({
  folderId,
  deleteFolder,
  deleteNotes,
  setEditFolderName,
  submitData,
  currentFolder,
  dataNotes
}) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const delFolder = () => {
    deleteFolder(folderId);
    setAnchorEl(null);
    dataNotes.map(i => {
      i.folderId === folderId && deleteNotes(i.id);
    });
    currentFolder(null);
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
