export const DELETE_NOTE = "NOTE_DELETE";
export const ADD_NOTE = "NOTE_ADD";
export const UPDATE_NOTE = "NOTE_UPDATE";
export const UPDATE_NOTE_NAME = "NAME_NOTE_UPDATE";

export const deleteNoteAction = noteId => ({
  type: DELETE_NOTE,
  payload: { noteId }
});
export const addNoteAction = (notes, noteId, folderId) => ({
  type: ADD_NOTE,
  payload: { notes, id: noteId, folderId }
});
export const updateNoteAction = (noteId, noteMessage) => ({
  type: UPDATE_NOTE,
  payload: { noteId, noteMessage }
});
