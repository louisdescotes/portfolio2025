import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Poyzeet from './pages/Poyzeet';
import Sparky from './pages/Sparky';
import Explorations from './pages/Explorations';
import Accueil from './pages/Accueil';
import Nav from './layout/nav';
import Loading from './Loading';
import Invisibles from './pages/Invisibles';

export default function App() {
  const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading) {
        return <Loading/>
    }
  return (
    <div className=" w-full h-dvh">
      <Nav />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/poyzeet" element={<Poyzeet />} />
        <Route path="/invisibles" element={<Invisibles />} />
        <Route path="/sparky" element={<Sparky />} />
        <Route path="/explorations" element={<Explorations />} />
      </Routes>
    </div>
  );
}
