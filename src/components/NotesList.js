import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({notes, handleAddNote,handleDeleteNote}) => {
    return (
        <div className='notes-list' key={notes.id}>
            {notes.map(note => (
                <Note note={note} handleDeleteNote={handleDeleteNote}/>
            ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    );
};

export default NotesList;
