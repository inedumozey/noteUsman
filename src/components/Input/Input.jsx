import React, { useState, useContext, useRef, useEffect } from 'react'
import { notesContext } from '../../context/Context';
import { useNavigate } from 'react-router-dom'

import './input.css'

function Input() {        
    const navigate = useNavigate()
    const state = useContext(notesContext);
    const {notes, setNotes, setEditing, editing } = state;

    const initVal = {
        id: editing.status ? editing.data.id : "",
        data: editing.status ? editing.data.text : ""
    }
    
    const [ val, setVal ] = useState(initVal)

    const inpRef = useRef(null)
    useEffect(() => {
        inpRef.current.focus()
    }, [])
 

    function getInputVal(e){
        const { name, value } = e.target;
        setVal({...val, [name]: value})
    }

    const handelSubmit = (e) => {
        e.preventDefault()

        if(editing.status){
            //handle editing login
            if (val.data) {
                //find the note with the id and edit
                const index = notes.findIndex(note=>note.id == editing.data.id);
                const editingNote = notes[index];
                editingNote.id = editing.data.id
                editingNote.text = val.data;
                alert('Note Edited');

                //navigate to viewNote route
                navigate(`/vewNotes/${editing.data.id}`);

                //reset editing useState
                setEditing({status: false, data: ""})

                //clear input value
                setVal({id: "", data: ""})
                
            } else {
                alert('please enter Note')
                return;
            }

        }else{
            // handle normal submission logic
            if (val.data) {
                const id = `${Date.now()}-${Math.random()}`;
                const newNote = { id, text: val.data };
                setNotes([...notes, newNote])
                alert('Note Added');

                //clear input value
                setVal({id: "", data: ""})
                
            } else {
                alert('please enter Note')
                return;
            }
        }
    }

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input
                    ref={inpRef}
                    className='input'
                    value={val.data || ''}
                    onChange={getInputVal}
                    placeholder='Write Note'
                    type="text"
                    name="data"
                />
                <button type='submit' className='btn'>{editing.status ? "Edit Note" : "Add Note"}</button>
            </form>
        </div>
    )
}

export default Input