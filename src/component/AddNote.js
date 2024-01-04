import { useState } from "react";

const AddNote = ({newNote}) =>{

    const [title,setTitle] =useState('');
    const [description,setDescripion] =useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        newNote(title,description);
        setTitle('');
        setDescripion('');
    }
    return(
        <form onSubmit={handleSubmit}>
            <input className="in-text" type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="title"/>
            <input className="in-text" type="text" value={description} onChange={(e)=> setDescripion(e.target.value)} placeholder="description"/>
            <input className="in-sub" type="submit" value="AddNote" />
        </form>
    )

}

export default AddNote ;