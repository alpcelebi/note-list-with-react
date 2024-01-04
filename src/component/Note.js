const Note = ({note,removeNote})=>{
    return(
        <><li onClick={() => removeNote(note.id)} key={note.id}>{note.title}</li>
        <h1 className="title">
            {note.title} </h1>
            <p>{note.description}</p></>
    );
}

export default Note;