import React from 'react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import NodeList from './components/NodeList'
import Search from './components/Search';

// template notes
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

    const [searchText, setSearchText] = useState('');

    // menambahkan notes
    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text, 
            date: date.toLocaleDateString()
        }
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    };

    // menghapus notes
    const deleteNote = (id) => {
        const newNotes = notes.filter((note)=> note.id !== id);
        setNotes(newNotes);
    }

    return (
      <div className='container'>
        <Search handleSearchNote={setSearchText}/>
      <NodeList 
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
      </div>
    )
  }



export default App

// 1.07.40 Toogling dark mode