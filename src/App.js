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
        <Skills />
        <Project />
        <Contact />
        
      </div>


    </>
  );
}

export default App;
