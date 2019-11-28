import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import createNotes from "../../assets/add_note.svg";
import delNotes from "../../assets/delete_note.svg";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { addNoteAction, deleteNoteAction } from "../../redux/notes/actions";

export const iconsStyles = makeStyles(theme => ({
  header: {
    width: 750,
    background: "#d3d3d3"
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
  }
}));

const generateUniqueId = require("uuid/v1");

const mapStateToProps = state => {
  return {
    folderId: state.folders.currentFolder,
    dataFolder: state.folders.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNote: (values, notes, noteId, folderId) => {
      dispatch(addNoteAction(values, notes, noteId, folderId));
    },
    deleteNote: noteId => {
      dispatch(deleteNoteAction(noteId));
    }
  };
};

const Header = ({ addNote, deleteNote, folderId, noteId, dataFolder }) => {
  const classes = iconsStyles();
  const notes = "";
  const submitData = () => {
    const noteId = generateUniqueId();
    const values = "New Note";
    addNote(values, notes, noteId, folderId);
  };
  const activeFolder = dataFolder.find(i => i.id === folderId);
  return (
    <Paper className={classes.header}>
      <div className={classes.icons}>
        <button
          style={{ outline: "none", border: "none" }}
          onClick={submitData}
          disabled={
            activeFolder !== undefined && folderId === activeFolder.id
              ? false
              : true
          }
        >
          <img
            src={createNotes}
            className={classes.iconsNote}
            alt="create note"
          />
        </button>
        <button
          style={{ outline: "none", border: "none" }}
          onClick={() => {
            deleteNote(noteId);
          }}
          disabled={
            activeFolder !== undefined && folderId === activeFolder.id
              ? false
              : true
          }
        >
          <img src={delNotes} className={classes.iconsNote} alt="delete note" />
        </button>
      </div>
    </Paper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
