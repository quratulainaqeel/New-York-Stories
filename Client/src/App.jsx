import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sigup from './Pages/Signup';
import Home from './Pages/Home';
import Contactus from './Pages/Contactus';
import About from './Pages/About';
import Login from './Pages/Login';

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Sigup />} />
      </Routes>
    </>
  );
}
