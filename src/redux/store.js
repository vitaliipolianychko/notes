import { reducer as formReducer } from "redux-form";
import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import notes from "./notes/notes.js";
import folders from "./folders/folders.js";

const rootReducer = combineReducers({
  notes,
  folders,
  form: formReducer
});

const store = createStore(rootReducer, devToolsEnhancer());
export default store;
