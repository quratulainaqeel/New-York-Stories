import React from 'react'
import Sigup from './Pages/Signup'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { Navigate, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Sigup />
      {/* <Login/>
    <Home/> */}

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Sigup />} />
        <Route path="/logout" element={<Navigate to='/' replace={true} />} />
        <Route path="*" element={<Navigate to='/login' replace={true} />} />
      </Routes> */}
    </>


  )
}
