import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Transition = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(false), 500); // Cache après 500ms
    return () => clearTimeout(timeout); // Nettoie le timeout
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-screen h-screen bg-red-500 z-50 origin-top"
        />
      )}
    </AnimatePresence>
  );
};

export default Transition;
