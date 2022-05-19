import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome'
import Nav from './components/Nav/Nav'
import Input from './components/Input/Input'
import Notes from './components/Notes/Notes'
import ViewNote from './components/Note/ViewNote'
import Err from './pages/Err'

function RouteComp() {
    return (
        <>
        <Routes>
            {/*at home i wanted to render Nav + Welcome component so i did with / and index  */}
            <Route path='/' element={<Nav />} >
                <Route index element={<Welcome />} />
                < Route path='addNotes' element={<Input />} />
                {/* another nested route for notes/id */}
                <Route path='vewNotes' element={<Notes />} />
                <Route path='vewNotes/:id' element={<ViewNote note='hello' />} />
            </Route>
            {/* not matching routes - page 404 not found */}
            <Route path='*' element={<Err />} />
        </Routes>
        </>
    );
}

export default RouteComp;