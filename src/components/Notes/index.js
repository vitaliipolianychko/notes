import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import createNotes from "../../assets/add_note.svg";
import delPicture from "../../assets/delete_note.svg";
import uuid from "uuid";
import { customUseStyles } from "./styles.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  updateNoteAction,
  addNoteAction,
  deleteNoteAction
} from "../../redux/notes/actions";
import SimpleModal from "../Modal";
import PropTypes from "prop-types";

const mapStateToProps = state => {
  return {
    dataNotes: state.notes.data,
    dataFolder: state.folders.data,
    folderId: state.folders.currentFolder
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateNoteAction,
      addNoteAction,
      deleteNoteAction
    },
    dispatch
  );
};

function CustomNotes({
  dataNotes,
  dataFolder,
  folderId,
  setNoteId,
  updateNoteAction,
  addNoteAction,
  deleteNoteAction,
  input
}) {
  const classes = customUseStyles();
  const [activeNoteId, setActiveNoteId] = useState("");
  const [currentNote, setCurrentNote] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const notes = "";
  const createNote = () => {
    const noteId = uuid.v1();
    const del = dataNotes.find(note => note.notes === "");
    if (del) {
      deleteNoteAction(del.id);
    }
    addNoteAction(notes, noteId, folderId);
    setActiveNoteId(noteId);
  };
  const delFolder = () => {
    deleteNoteAction(activeNoteId);
  };
  const activeFolder = dataFolder.find(i => i.id === folderId);
  const activeNote = dataNotes.find(i => i.id === activeNoteId);
  const handleChange = event => {
    setCurrentNote(event.target.value);
    updateNoteAction(activeNoteId, event.target.value);
  };
  const getInfoNote = (param1, param2) => () => {
    setActiveNoteId(param1);
    setNoteId(param1);
    setCurrentNote(param2);
  };
  const activeBtn = activeFolder && folderId === activeFolder.id;
  const activeField = activeNote && folderId === activeNote.folderId;
  return (
    <div className={classes.root}>
      <div className={classes.leftSide}>
        <div className={classes.backTableRoot}>
          Notes
          <div className={classes.responsive}>
            <button
              type="button"
              onClick={createNote}
              disabled={!activeBtn}
              className={classes.buttonsResponsive}
            >
              <img
                src={createNotes}
                className={classes.picture}
                alt="add note"
              />
            </button>
          </div>
        </div>
        <Table>
          <TableBody>
            {dataNotes.map(
              (note, index) =>
                folderId === note.folderId && (
                  <TableRow
                    key={index}
                    className={
                      activeNoteId !== note.id ? classes.row : classes.rowActive
                    }
                  >
                    <TableCell
                      key={note.id}
                      onClick={getInfoNote(note.id, note.notes)}
                      onDoubleClick={handleOpen}
                    >
                      <div className={classes.responsiveFolder}>
                        <div className={classes.content}>{note.notes}</div>
                        <button
                          type="button"
                          className={classes.buttonsResponsive}
                          onClick={delFolder}
                        >
                          <img
                            src={delPicture}
                            className={classes.menuPictures}
                            alt="delete folder"
                          />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                )
            )}
          </TableBody>
        </Table>
      </div>

      <SimpleModal
        open={open}
        handleClose={handleClose}
        currentNote={currentNote}
        activeNoteId={activeNoteId}
        setCurrentNote={setCurrentNote}
      />
      <TextField
        {...input}
        multiline
        disabled={!activeField}
        rows="17"
        className={classes.textField}
        onChange={handleChange}
        value={
          activeNote && folderId === activeNote.folderId ? activeNote.notes : ""
        }
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomNotes);
CustomNotes.propTypes = {
  dataNotes: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string]))
  ),
  dataFolder: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string]))
  ),
  folderId: PropTypes.string,
  setNoteId: PropTypes.func,
  updateNoteAction: PropTypes.func,
  addNoteAction: PropTypes.func,
  deleteNoteAction: PropTypes.func,
  input: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool
    ])
  )
};
