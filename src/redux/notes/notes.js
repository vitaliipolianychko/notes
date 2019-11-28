import {
  DELETE_NOTE,
  ADD_NOTE,
  UPDATE_NOTE,
  UPDATE_NOTE_NAME
} from "./actions";

const initialState = { data: [] };
const Notes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const newNote = {
        ...action.payload
      };
      return {
        ...state,
        data: [...state.data, newNote]
      };

    case DELETE_NOTE:
      return {
        ...state,
        data: state.data.filter(note => note.id !== action.payload.noteId)
      };

    case UPDATE_NOTE:
      const currentNote = state.data.findIndex(
        note => note.id === action.payload.noteId
      );
      state.data[currentNote].notes = action.payload.noteMessage;
      return {
        ...state,
        data: state.data
      };
    case UPDATE_NOTE_NAME:
      const currentName = state.data.findIndex(
        note => note.id === action.payload.noteId
      );
      state.data[currentName].notesName = action.payload.noteName;
      return Object.assign({}, state, {
        data: state.data
      });
    default:
      return state;
  }
};

export default Notes;
