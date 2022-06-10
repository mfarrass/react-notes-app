import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import NodeList from './components/NodeList'
import Search from './components/Search';
import Header from './components/Header';

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

    const [darkMode, setDarkMode] = useState('');

    useEffect(() => {
      const savedNotes = JSON.parse
          (localStorage.getItem('react-notes-app-data')
      );

      if(savedNotes){
          setNotes(savedNotes);
      }
    }, []);

    useEffect(() => {
      localStorage.setItem('react-notes-app-data', JSON.stringify(notes)
      );
    }, [notes]);
    

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
      <div className={`${darkMode && 'dark-mode'}`}>
          <div className='container'>
            <Header handleToggleDarkMode={setDarkMode}/>
            <Search handleSearchNote={setSearchText}/>
          <NodeList 
            notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
          />
          </div>
      </div>
    )
  }



export default App

