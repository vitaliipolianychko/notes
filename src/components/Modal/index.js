import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { updateNoteAction } from "../../redux/notes/actions";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    borderRadius: "5px",
    boxShadow: theme.shadows[5]
  }
}));

const mapDispatchToProps = dispatch => {
  return {
    updateNote: (noteId, messageNote) => {
      dispatch(updateNoteAction(noteId, messageNote));
    }
  };
};

function SimpleModal({
  open,
  currentNote,
  setCurrentNote,
  updateNote,
  activeNoteId,
  handleClose,
  input
}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <TextField
            {...input}
            multiline
            style={{ width: "400px" }}
            rows="17"
            variant="outlined"
            onChange={event => {
              setCurrentNote(event.target.value);
              updateNote(activeNoteId, event.target.value);
            }}
            value={currentNote}
          />
        </div>
      </Modal>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(SimpleModal);
