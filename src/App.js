import React, { useState } from "react";
import "./App.css";
import CustomizedTables from "./components/Folder";
import CustomNotes from "./components/Notes";
import Header from "./components/Header";

function App() {
  const [noteId, setNoteId] = useState("");
  return (
    <div className="notes">
      <Header noteId={noteId} />
      <div className="App">
        <CustomizedTables />
        <CustomNotes setNoteId={setNoteId} />
      </div>
    </div>
  );
}

export default App;
