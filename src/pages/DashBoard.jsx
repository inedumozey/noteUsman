import React from 'react'
import { useLocation, useNavigate } from 'react-router';

function DashBoard() {
 let location = useLocation()
 console.log(location);
 const { user } = location.state || 'User'
 console.log(user, 'user');
 return (
  <div>
   <h1> Logined in as {user} </h1>
  </div>
 )
}

export default DashBoard