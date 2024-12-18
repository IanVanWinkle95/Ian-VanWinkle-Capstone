import React from 'react';
import { useState } from 'react'
import axios from "axios"
import { Route, Routes } from 'react-router-dom';

import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Services from "../pages/Services"
import Nav from "../components/Nav"
import './App.css'

function App() {
  
return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </div>
)
}

export default App
