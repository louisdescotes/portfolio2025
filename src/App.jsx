import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "./pages/About";
import Poyzeet from "./pages/Poyzeet";
import Sparky from "./pages/Sparky";
import Explorations from "./pages/Explorations";
import Accueil from "./pages/Accueil";
import Invisibles from "./pages/Invisibles";
import Nav from "./layout/nav";
import Transition from "./components/transition";
import Loading from './Loading';
import { ReactLenis, useLenis } from 'lenis/react'


export default function App() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading) {
        return <Loading />
    }
  const location = useLocation(); 

  return (
    <ReactLenis root>
    <div root className="w-full h-dvh">
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Accueil />} />
          <Route path="/about" element={<About />} />
          <Route path="/poyzeet" element={<Poyzeet />} />
          <Route path="/invisibles" element={<Invisibles />} />
          <Route path="/sparky" element={<Sparky />} />
          <Route path="/explorations" element={<Explorations />} />
        </Routes>
      </AnimatePresence>
    </div>
    </ReactLenis>
  );
}
