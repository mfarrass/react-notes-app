import React from 'react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import NodeList from './components/NodeList'


const App = () => {
    const [notes, setNotes] = useState([
      {
        id: nanoid(),
        text: "This is my first note!",
        date: "15/04/2021"
      },
      {
        id: nanoid(),
        text: "This is my second note!",
        date: "21/04/2021"
      },
      {
        id: nanoid(),
        text: "This is my third note!",
        date: "28/04/2021"
      },
      {
        id: nanoid(),
        text: "This is my new note!",
        date: "30/04/2021"
      },
    ]);

    const addNote = (text) => {
      console.log(text);
    }

    return (
      <div className='container'>
      <NodeList notes={notes} handleAddNote={addNote}/>
      </div>
    )
  }

// 20:21

export default App