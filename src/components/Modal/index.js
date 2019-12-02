import React from "react";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateNoteAction } from "../../redux/notes/actions";
import { useStyles } from "./styles";
import PropTypes from "prop-types";

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateNoteAction
    },
    dispatch
  );
};

function SimpleModal({
  open,
  currentNote,
  setCurrentNote,
  updateNoteAction,
  activeNoteId,
  handleClose,
  input
}) {
  const classes = useStyles();
  const saveNoteText = event => {
    setCurrentNote(event.target.value);
    updateNoteAction(activeNoteId, event.target.value);
  };
  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <TextField
            {...input}
            multiline
            className={classes.textField}
            rows="17"
            variant="outlined"
            onChange={saveNoteText}
            value={currentNote}
          />
        </div>
      </Modal>
    </div>
  );
}
export default connect(null, mapDispatchToProps)(SimpleModal);
SimpleModal.propTypes = {
  open: PropTypes.bool,
  currentNote: PropTypes.string,
  setCurrentNote: PropTypes.func,
  updateNoteAction: PropTypes.func,
  activeNoteId: PropTypes.string,
  handleClose: PropTypes.func,
  input: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool
    ])
  )
};
