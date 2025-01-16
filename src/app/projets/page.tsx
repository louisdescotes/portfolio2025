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

      <div data-scroll-section className=" w-screen h-full z-50">
        <ThreeScene />
      </div>
      <section data-scroll-section className=" flex flex-row w-[100svw] h-full -z-10">
        <div className="w-[100svw] h-full grid grid-rows-5 grid-cols-6">
          <div className="row-start-4 row-end-6 col-start-2 col-end-6 lg:col-start-3 lg:col-end-5 flex justify-center items-center">
            <p className="max-w-lg w-auto text-wrap">
              Lorem ipsum dolor sit amet. Ut enim beatae qui numquam quasi sit quia voluptatem ut optio quasi sit quia voluptatem ut optio quasi sit quia voluptatem ut optio.<br />
              Lorem ipsum dolor sit amet. Ut enim beatae qui numquam quasi sit quia.
            </p>
          </div>
        </div>
      </section>

      <section data-scroll-section className="flex flex-row w-[100svw] h-full">
        <div className="w-[100svw] h-full grid grid-rows-5 grid-cols-6">
          <div className="row-start-4 row-end-6 col-start-2 col-end-6 lg:col-start-3 lg:col-end-5 flex justify-center items-center">
            <p className="max-w-lg w-auto text-wrap">
              Lorem ipsum dolor sit amet. Ut enim beatae qui numquam quasi sit quia voluptatem ut optio quasi sit quia voluptatem ut optio quasi sit quia voluptatem ut optio.<br />
              Lorem ipsum dolor sit amet. Ut enim beatae qui numquam quasi sit quia.
            </p>
          </div>
        </div>
      </section>

            <section data-scroll-section className="flex flex-row w-[100svw] h-full">
        <div className="w-[100svw] h-full grid grid-rows-5 grid-cols-6">
          <div className="row-start-4 row-end-6 col-start-2 col-end-6 lg:col-start-3 lg:col-end-5 flex justify-center items-center">
            <p className="max-w-lg w-auto text-wrap">
              Lorem ipsum dolor sit amet. Ut enim beatae qui numquam quasi sit quia voluptatem ut optio quasi sit quia voluptatem ut optio quasi sit quia voluptatem ut optio.<br />
              Lorem ipsum dolor sit amet. Ut enim beatae qui numquam quasi sit quia.
            </p>
          </div>
        </div>
      </section>

            <section data-scroll-section className="flex flex-row w-[100svw] h-full">
        <div className="w-[100svw] h-full grid grid-rows-5 grid-cols-6">
          <div className="row-start-4 row-end-6 col-start-2 col-end-6 lg:col-start-3 lg:col-end-5 flex justify-center items-center">
            <p className="max-w-lg w-auto text-wrap">
              Lorem ipsum dolor sit amet. Ut enim beatae qui numquam quasi sit quia voluptatem ut optio quasi sit quia voluptatem ut optio quasi sit quia voluptatem ut optio.<br />
              Lorem ipsum dolor sit amet. Ut enim beatae qui numquam quasi sit quia.
            </p>
          </div>
        </div>
      </section>
      
      <section data-scroll-section className="flex flex-row w-[100svw] h-full">
        <div className="w-[100svw] h-full grid grid-rows-5 grid-cols-6">
          <div className="row-start-3 row-end-4 col-start-2 col-end-6 lg:col-start-3 lg:col-end-5 flex flex-col justify-center items-center gap-0.5">
            <p className="max-w-lg w-auto text-wrap text-justify">
              Lorem ipsum dolor sit amet. Ut enim beatae qui numquam quasi sit quia voluptatem ut optio quasi sit quia voluptatem ut optio quasi sit quia voluptatem ut optio.<br />
              Lorem ipsum dolor sit amet. Ut enim beatae qui numquam quasi sit quia.
            </p>
            <div className="w-full flex items-center justify-between">
              <p>Projet perso</p>
              <p>DESCOTES Louis</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
