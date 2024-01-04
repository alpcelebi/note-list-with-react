import Note from "./Note";

const NoteList = ({notes , removeNote}) => {
    return notes.length > 0 ? (
        <div className="note-list">
        <ul>
            {notes.map(
                note => {
                    return (
                      <Note note={note} key={note.id} removeNote={removeNote}/>
                    );
                }
            )}
        </ul>
        </div>
    ) : (
        <div className="emty">Henüz Not Eklemediniz</div>
    ) ;
}

export default NoteList ;
