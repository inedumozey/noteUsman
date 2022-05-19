import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const notesContext = createContext();

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([])
    const [editing, setEditing] = useState({status: false, data: ""});

    const navigate = useNavigate();

    //delete note action
    const removeNote = (id) => {
        // filtring notes arr based on the clicked note id.
        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes);

        //navigate to vewNote when note is deleted
        navigate("/vewNotes");
    }

    //view note action
    const vewNote = (id) => {
        // creating another note (view one) which will be shown on every view-btn click based on its id
        const [vNote] = notes.filter(note => note.id === id)
        navigate(`/vewNotes/${vNote.id}`)
    }

    //edit action
    const editNote = (id) => {
        const [vNote] = notes.filter(note => note.id === id);

        //update editing state and navigate to addNote route
        setEditing({
            status: true,
            data: vNote
        })
        navigate(`/addNotes`)
    }

    //all your state should be defined in context api and share to the neccessary components
    const state = {
        notes,
        editNote,
        setNotes,
        vewNote,
        removeNote,
        editing,
        setEditing
    }

    return (
    <notesContext.Provider value={state}>
        {children}
    </notesContext.Provider>

    )
}