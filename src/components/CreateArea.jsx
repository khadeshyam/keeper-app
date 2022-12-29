import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';
import fabStyle from "./styles/Fab.js";


function CreateArea(props) {
  
  const [isExpanded,setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target
    setNote((prevNote) => {
      return ({
        ...prevNote,
        [name]: value
      })
    })
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }


  return (
    <div>
      <form className="create-note" onSubmit={submitNote}>

        {isExpanded &&
          <input name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />}
        <textarea
          name="content"
          onClick ={expand}
          placeholder="Take a note..."
          rows={ isExpanded ? "3" : "1"}
          onChange={handleChange}
          value={note.content}
        />

        <Zoom in={isExpanded}>
           <Fab  type="submit" style={fabStyle}>
              <AddIcon/>
           </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
