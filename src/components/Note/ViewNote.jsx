import React, {useContext, useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { notesContext } from '../../context/Context';

function ViewNote() {
    const state = useContext(notesContext)
    const { notes, removeNote, editNote } = state;
    const navigate = useNavigate();
    const [ txt, sxtTxt ] = useState("")

    //get the id from url
    const params = useParams()
    const { id } = params

    //use the id in params to check whether it exists of note notes array
    const index = notes.findIndex(note =>note.id === id);
    //if index exist inte, will return the index otherwise will return -1
    // const {text} = notes[noteObj

    useEffect(()=>{
        //if index not in notes array, redirect the route to viewNotes route 
        if(index == -1){
            navigate("/vewNotes");
        }else{
            //if index exist in notes array, get the text of the object with that index
            const note = notes[index];
            sxtTxt(note);
        }

    }, [])

    return (
        txt ?
            (
            <div>
                <h3>you're viewing note</h3><br />
                <div className='note'>
                    <div>
                        <h5>{txt.text}</h5>
                    </div>
                    <div>
                        <button className='btn red' onClick={() => removeNote(txt.id) }>Del</button>
                        <button className='btn green' onClick={() => editNote(txt.id) }>Edit</button>
                    </div>
                </div>
            </div>
        ):
        (
            ''
        )
    )

}

export default ViewNote

