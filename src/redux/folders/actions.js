export const DELETE_FOLDER = "FOLDER_DELETE";
export const ADD_FOLDER = "FOLDER_ADD";
export const UPDATE_FOLDER_NAME = "NAME_FOLDER_UPDATE";
export const CURRENT_FOLDER = "FOLDER_CURRENT";

export const deleteFolderAction = folderId => ({
  type: DELETE_FOLDER,
  payload: { folderId }
});
export const addFolderAction = (values, folderId) => ({
  type: ADD_FOLDER,
  payload: { folders: values, id: folderId }
});
export const updateFolderNameAction = (folderId, folderName) => ({
  type: UPDATE_FOLDER_NAME,
  payload: { folderId, folderName }
});
export const currentFolderIdAction = currentFolderId => ({
  type: CURRENT_FOLDER,
  payload: { currentFolderId }
});
