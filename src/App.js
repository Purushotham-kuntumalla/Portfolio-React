import React from 'react';
import './App.css';

import Hero from './Navbar/Hero/Hero';
import Skills from './Navbar/Skills/Skills';
import Project from './Navbar/Projects/Project';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Contact from './Navbar/Contact/Contact';
import NavbarF from './Navbar/Navbar';




function App() {
  return (
    <>
    <NavbarF />
      <div className="container">
      <Hero />
        <BrowserRouter>
          <Routes>
            <Route path='/skills' element={ < Skills/>} />
            <Route path='/projects' element={ < Project/>} />
            <Route path='/contact' element={ < Contact/>} />
        </Routes>
        </BrowserRouter>
        
      </div>


    </>
  );
}

export default App;
