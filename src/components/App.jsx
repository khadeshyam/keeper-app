import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);

  function addNote(newNote) {
    setNotes(prevNotes => {
      const currNotes = [...prevNotes, newNote];  
      localStorage.setItem("notes",JSON.stringify(currNotes));
      return currNotes;
    });
  }

  function deleteNote(id) {
    notes.splice(id, 1);
    localStorage.setItem("notes",JSON.stringify(notes));
    setNotes([...notes]);
    // setNotes(prevNotes => {
    //   return prevNotes.filter((noteItem, index) => {
    //     return !(index === id);
    //   });
    // });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
