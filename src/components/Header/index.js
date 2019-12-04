import React from "react";
import Paper from "@material-ui/core/Paper";
import createNotes from "../../assets/add_note.svg";
import delNotes from "../../assets/delete_note.svg";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import uuid from "uuid";
import { addNoteAction, deleteNoteAction } from "../../redux/notes/actions";
import { iconsStyles } from "./styles";
import PropTypes from "prop-types";

const mapStateToProps = state => {
  return {
    folderId: state.folders.currentFolder,
    dataFolder: state.folders.data,
    dataNotes: state.notes.data
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addNoteAction,
      deleteNoteAction
    },
    dispatch
  );
};

const Header = ({
  addNoteAction,
  deleteNoteAction,
  folderId,
  noteId,
  dataFolder,
  dataNotes
}) => {
  const classes = iconsStyles();
  const notes = "";
  const submitData = () => {
    const noteId = uuid.v1();
    const del = dataNotes.find(note => note.notes === "");
    if (del) {
      deleteNoteAction(del.id);
    }
    addNoteAction(notes, noteId, folderId);
  };

  const deleteNote = param1 => () => {
    deleteNoteAction(param1);
  };
  const activeFolder = dataFolder.find(i => i.id === folderId);
  const disableBtn = activeFolder && folderId === activeFolder.id;
  return (
    <Paper className={classes.header}>
      <div className={classes.icons}>
        <button
          className={classes.btnIcon}
          onClick={submitData}
          disabled={!disableBtn}
        >
          <img
            src={createNotes}
            className={classes.iconsNote}
            alt="create note"
          />
        </button>
        <button
          className={classes.btnIcon}
          onClick={deleteNote(noteId)}
          disabled={!disableBtn}
        >
          <img src={delNotes} className={classes.iconsNote} alt="delete note" />
        </button>
      </div>
    </Paper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
Header.propTypes = {
  addNoteAction: PropTypes.func,
  deleteNoteAction: PropTypes.func,
  folderId: PropTypes.string,
  noteId: PropTypes.string,
  dataFolder: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string]))
  ),
  dataNotes: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string]))
  )
};
