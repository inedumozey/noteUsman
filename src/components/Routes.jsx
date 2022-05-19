// import React from 'react'
// import { BrowserRouter, Route, Routes, NavLink, Link, Navigate } from 'react-router-dom'
// import './App.css'
// import Input from './components/Input/Input';
// import Notes from './components/Notes/Notes';
// import { NotesProvider } from './context/Context';
// import About from './pages/About';
// import { Contact } from './pages/Contact';
// import Home from './pages/Home';
// import Me from './pages/Me';
// import Err from './pages/Err';
// import DashBoard from './pages/DashBoard';
// import Login from './pages/Login';

// function App() {
//  let isLogedIn = true
//  const data = {
//   user: 'Admin'
//  }
//  return (
//   <>
//    <BrowserRouter>
//     <div className='app'>
//      <nav>
//       <ul>
//        <li>
//         <NavLink to='/' style={({ isActive }) => {
//          return (
//           { backgroundColor: isActive ? 'red' : '' }
//          )
//         }}>home </NavLink>
//        </li>
//        <li>
//         <NavLink to='/about' style={({ isActive }) => {
//          return (
//           { backgroundColor: isActive ? 'red' : '' }
//          )
//         }}>About</NavLink>
//        </li>
//        <li>
//         <NavLink to='/contact/catagory/id' style={({ isActive }) => {
//          return (
//           { backgroundColor: isActive ? 'red' : '' }
//          )
//         }}>contact</NavLink>
//        </li>
//       </ul>
//      </nav>
//     </div>

//     <Routes>
//      <Route path='/' element={<Home />} />
//      <Route path='/about' element={<About />} >
//       <Route index element={<Me />} />
//      </Route>
//      <Route path='/contact/:name/:id' element={<Contact />} />
//      <Route path='/dashboard' element={<DashBoard />} />
//      <Route path='/login' element={isLogedIn ? <Navigate to='/dashboard' replace state={data} /> : <Navigate to='/login ' replace state={data} />} />
//      <Route path='*' element={<Err />} />
//     </Routes>
//    </BrowserRouter>

//   </>

//  )

// }


// export default App;