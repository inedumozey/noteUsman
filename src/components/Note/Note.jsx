import React, { useContext } from 'react'
import { notesContext } from '../../context/Context';
import './note.css'

function Note({note}) {
    const state = useContext(notesContext);
    const { removeNote, vewNote} = state;

    // destructuring cause i don't wanna write everytime note.text , note.id
    const { text, id } = note

    return (
        <div className='note'>
            <div>
                <h5>{text}</h5>
            </div>
            
            <div>
                <button className='btn red' onClick={() => removeNote(id) }>Del</button>
                <button className='btn green' onClick={() => vewNote(id)}>View</button>
            </div>
        </div>
    )
}

export default Note