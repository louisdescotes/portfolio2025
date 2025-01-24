import { useEffect, useState } from "react";

const Loading = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevCounter + 1; 
      });
    }, 12); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen w-full flex items-end p-8 lg:p-16">
      <p className="chargement">{counter}</p>
    </section>
  );
};

export default Loading;
