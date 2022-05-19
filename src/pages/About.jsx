import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function About() {
 const navigate = useNavigate()
 return (
  <div>
   <h1>About page</h1>
   <h3 onClick={() => navigate('me')}>goto about me</h3>
   <Outlet />
  </div>
 )
}

export default About