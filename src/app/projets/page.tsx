"use client";

import { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import ThreeScene from "../scene/Scene";

const Page: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const locoScroll = new LocomotiveScroll({
      el: scrollerRef.current,
      smooth: true,
      getDirection: true,
      direction: "horizontal",
      smartphone: {
        smooth: true,
        direction: "horizontal",
      },
    });

    return () => {
      locoScroll.destroy(); // Nettoyage en cas de changement de page
    };
  }, []);

  return (
    <main
      ref={scrollerRef}
      data-scroll-container
      className="absolute h-screen w-screen overflow-hidden"
    >

      <div data-scroll-section className=" w-screen h-full">
        <ThreeScene />
      </div>
      <section
        data-scroll-section
        className="flex flex-row w-[300vw] h-full"
      >
        <div className="w-[100vw] h-full flex items-center justify-center bg-blue-500">
          Section 1
        </div>
      </section>
    </main>
  );
};

export default Page;
