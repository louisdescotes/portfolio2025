import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loading = () => {
  const [counter, setCounter] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter >= 100) {
          clearInterval(interval);
          setIsFinished(true);
          return 100;
        }
        return prevCounter + 1;
      });
    }, 12);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section className="h-dvh w-full flex items-end p-8 lg:p-16 relative overflow-hidden">
      <motion.p
      initial={{ opacity: 1, y:0}}
      animate={{ opacity: 0, y:"-100%" }}
      transition={{ delay: 2.2, duration: .3}}
      className="chargement z-50 text-[#FAFAFA]">{counter}</motion.p>

      {!isFinished && (
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.3, ease: [0.215, 0.61, 0.355, 1] }}
          style={{ transformOrigin: "bottom" }}
          className="fixed top-0 left-0 w-screen h-screen bg-black z-0"
        />
      )}

      {isFinished && (
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          style={{ transformOrigin: "top" }}
          className="fixed top-0 left-0 w-screen h-screen bg-black z-40"
        />
      )}
    </motion.section>
  );
};

export default Loading;
