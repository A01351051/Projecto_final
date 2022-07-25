
import './App.css';
import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CalificacionesS from './components/CalificacionesS';
import Cursos from './components/Cursos';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />}   />
        <Route path="/CalificacionesS" element={<CalificacionesS />}   />
        <Route path="/Cursos" element={<Cursos />}   />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
