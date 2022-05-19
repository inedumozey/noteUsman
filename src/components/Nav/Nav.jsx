import React from 'react'
import { NavLink, useNavigate, Outlet } from 'react-router-dom'

import './nav.css'


function Nav() {
 const Navigate = useNavigate()
 return (
  <nav className='nav'>
   <ul className='nav-ul'>
    {/* // we can pass {} to navigate fun to pass data to the component is how we can pass data to  */}
    <li onClick={() => Navigate('/addNotes', { send: 'data' })}>Add Note</li>
    <li>
     <NavLink to='/vewNotes' style={() => {
      return (
       {
        color: 'black',
        textDecoration: 'none'
       }
      )
     }}>vew Notes </NavLink>

    </li>
   </ul>
   {/* Welcome will render heres */}
   <Outlet />
  </nav>
 )
}

export default Nav