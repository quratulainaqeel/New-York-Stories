import React from 'react'
import Sigup from './Pages/Signup'
import Home from './Pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    // <Sigup/>
    <Home/>

    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/contact" element={<ContactUs />} />
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/Signup" element={<Signup />} />
    //   <Route path="/contact" element={<Signup />} />
    //   <Route path="/finddoctor" element={<FindDoctor />} />
    //   <Route path="/services" element={<Services />} />
    //   <Route path="/logout" element={<Navigate to='/' replace={true} />} />
    //   <Route path="*" element={<Navigate to='/login' replace={true} />} />
    // </Routes>
  )
}
