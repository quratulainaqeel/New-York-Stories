import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sigup from './Pages/Signup';
import Home from './Pages/Home';
import Contactus from './Pages/Contactus';
import About from './Pages/About';
import Login from './Pages/Login';
import Protected from './Pages/Protected';

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/home" element={<Protected Component={Home} />} />
        <Route path="/contact" element={<Protected Component={Contactus} />} />
        <Route path="/about" element={<Protected Component={About} />} />
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Sigup />} />
      </Routes>
    </>
  );
}
