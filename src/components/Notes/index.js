import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import editNote from "../../assets/edit.svg";
import { customUseStyles } from "./styles.js";
import { useStyles } from "../styles";
import { connect } from "react-redux";
import {
  updateNoteNameAction,
  updateNoteAction
} from "../../redux/notes/actions";
import SimpleModal from "../Modal";

const mapStateToProps = state => {
  return {
    dataNotes: state.notes.data,
    folderId: state.folders.currentFolder
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNoteName: (noteId, noteName) => {
      dispatch(updateNoteNameAction(noteId, noteName));
    },
    updateNote: (noteId, messageNote) => {
      dispatch(updateNoteAction(noteId, messageNote));
    }
  };
};

function CustomNotes({
  updateNoteName,
  dataNotes,
  folderId,
  setNoteId,
  updateNote,
  input
}) {
  const classes = customUseStyles();
  const classesOne = useStyles();
  const [activeNoteId, setActiveNoteId] = useState("");
  const [currentNote, setCurrentNote] = useState("");
  const [currentNoteName, setCurrentNoteName] = useState("");
  const [editNoteName, setEditNoteName] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const test = dataNotes.find(i => i.id === activeNoteId);
  const handleChange = event => {
    setCurrentNote(event.target.value);
    updateNote(activeNoteId, event.target.value);
  };
  return (
    <Paper className={classes.root}>
      <Paper className={classes.leftSide}>
        <Table>
          <TableBody>
            {dataNotes.map(
              note =>
                folderId === note.folderId && (
                  <TableRow
                    className={
                      activeNoteId !== note.id
                        ? classesOne.row
                        : classes.rowActive
                    }
                  >
                    {editNoteName && activeNoteId === note.id ? (
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <input
                          style={{
                            width: "195px",
                            height: "20px"
                          }}
                          name="changeName"
                          value={currentNoteName}
                          autoFocus
                          onChange={event => {
                            setCurrentNoteName(event.target.value);
                            event.target.value !== ""
                              ? updateNoteName(activeNoteId, event.target.value)
                              : updateNoteName(activeNoteId, "New Note");
                          }}
                          onBlur={() => {
                            setEditNoteName(false);
                          }}
                        />
                      </div>
                    ) : (
                      <TableCell
                        className={classes.notes}
                        onClick={() => {
                          setActiveNoteId(note.id);
                          setNoteId(note.id);
                          setCurrentNoteName(note.notesName);
                          setCurrentNote(note.notes);
                        }}
                        onDoubleClick={() => setOpen(true)}
                      >
                        {note.notesName}
                        <div
                          onClick={() => {
                            setCurrentNoteName(note.notesName);
                            setEditNoteName(true);
                          }}
                        >
                          <img
                            className={classes.img}
                            src={editNote}
                            alt="edit Note"
                          />
                        </div>
                      </TableCell>
                    )}
                  </TableRow>
                )
            )}
          </TableBody>
        </Table>
      </Paper>
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
        disabled={
          test !== undefined && folderId === test.folderId ? false : true
        }
        rows="17"
        className={classes.textField}
        variant="outlined"
        onChange={handleChange}
        value={
          test !== undefined && folderId === test.folderId ? test.notes : ""
        }
      />
    </Paper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomNotes);
