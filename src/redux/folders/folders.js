import {
  DELETE_FOLDER,
  ADD_FOLDER,
  UPDATE_FOLDER_NAME,
  CURRENT_FOLDER
} from "./actions";

const initialState = { data: [], currentFolder: "" };
const Folders = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FOLDER:
      const newFolder = {
        ...action.payload
      };
      return {
        ...state,
        data: [...state.data, newFolder]
      };

    case DELETE_FOLDER:
      return {
        ...state,
        data: state.data.filter(folder => folder.id !== action.payload.folderId)
      };
    case UPDATE_FOLDER_NAME:
      const currentId = state.data.findIndex(
        folder => folder.id === action.payload.folderId
      );
      state.data[currentId].folders = action.payload.folderName;
      return Object.assign({}, state, {
        data: state.data
      });
    case CURRENT_FOLDER:
      return {
        ...state,
        currentFolder: action.payload.currentFolderId
      };

    default:
      return state;
  }
};

export default Folders;
