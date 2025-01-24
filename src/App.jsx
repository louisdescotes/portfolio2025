import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Poyzeet from './pages/Poyzeet';
import Sparky from './pages/Sparky';
import Explorations from './pages/Explorations';
import Accueil from './pages/Accueil';
import Nav from './layout/nav';

export default function App() {
  return (
    <div className=" w-full h-screen">
      <Nav />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/poyzeet" element={<Poyzeet />} />
        <Route path="/sparky" element={<Sparky />} />
        <Route path="/explorations" element={<Explorations />} />
      </Routes>
    </div>
  );
}
