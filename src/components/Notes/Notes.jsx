import React, { useContext } from 'react'
import { notesContext } from '../../context/Context';
import Note from '../Note/Note'

function Notes() {
    // renders Note based on the notes arr
    const state = useContext(notesContext);
    const { notes} = state;

    return (
    <div>
        <h1>My Notes</h1>
        <div className="container">
            {
            notes.length > 0 ?
                (
                    notes.map(note => {
                        return (
                            <Note
                                key={note.id}
                                note={note}
                            />
                        )
                    })
                )
                :
                (
                <h3>No Notes to view</h3> 
                )
            }
        </div>
    </div>
    )
}

export default Notes