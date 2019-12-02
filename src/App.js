import React, { useState } from "react";
import "./App.css";
import Folder from "./components/Folder";
import CustomNotes from "./components/Notes";
import Header from "./components/Header";

function App() {
  const [noteId, setNoteId] = useState("");
  return (
    <div className="notes">
      <Header noteId={noteId} />
      <div className="App">
        <Folder />
        <CustomNotes setNoteId={setNoteId} />
      </div>
    </div>
  );
}

export default App;
