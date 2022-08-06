import NotesList from "./components/NotesList";
import {useState} from "react";
import {nanoid} from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text: 'This is my first note!',
            date: '15/04/2022',
        },
        {
            id: nanoid(),
            text: 'This is my second note!',
            date: '21/04/2022',
        },
        {
            id: nanoid(),
            text: 'This is my third note!',
            date: '28/04/2022',
        },
        {
            id: nanoid(),
            text: 'This is my new note!',
            date: '30/04/2022',
        },
    ]);

    const [searchText, setSearchText] = useState('')
    const [darkMode, setdarkMode] = useState(false)
    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
        }

        const newsNotes = [...notes, newNote];
        setNotes(newsNotes)
    }

    const deleteNote = (id) => {
        const newNote = notes.filter(note => note.id !== id)
        setNotes(newNote)
    }
    return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className="container">
                <Header handleToggleDarkMode={setdarkMode}/>
                <Search handleSearchNote={setSearchText}/>
                <NotesList notes={notes.filter((note) =>
                    note.text.toLowerCase().includes(searchText)
                )} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
            </div>
        </div>

    );
}

export default App;
