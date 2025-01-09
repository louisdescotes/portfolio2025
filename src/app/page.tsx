"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Accueil() {
  const nameProject = ["Sparky", "Poyzeet", "Projet3"];
  const imageProjet = ["one", "two", "three"]
  const [numberProjet, setNumberProjet] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const numberSlider = gsap.timeline({ repeat: -1 });
    const projetSlider = gsap.timeline({ repeat: -1 });

    numberSlider.to(".number", {
      y: -30,
      ease: "power1.out",
      duration: .5,
      delay: 1.5,
      onStart: () => {
        setNumberProjet((prev) => (prev + 1) % 3);
      },
    })
    .to(".number", {
      y: -60,
      ease: "power1.out",
      duration: 0.5,
      delay: 1.3,
      onStart: () => {
        setNumberProjet((prev) => (prev + 1) % 3);
      },
    })
    .to(".number", {
      y: 0,
      duration: 0.5,
      delay: 1.3, 
      onStart: () => {
        setNumberProjet((prev) => (prev + 1) % 3);
      },
    });

    projetSlider.to(".projet", {
      y: -60,
      ease: "power1.out",
      duration: 0.5,
      delay: 1.5,
    })
    .to(".projet", {
      y: -120,
      ease: "power1.out",
      duration: 0.5,
      delay: 1.3,
    })
    .to(".projet", {
      y: 0,
      duration: 0.5,
      delay: 1.3,
    });

    return () => {
      numberSlider.kill();
      projetSlider.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex items-center w-full h-full p-8"
    >
      <div className="flex flex-col gap-4 h-6 w-fit overflow-hidden">
        {nameProject.map((number, index) => (
          <span key={number} className="number">
            0{index + 1}
          </span>
        ))}
      </div>
      <aside className="w-full h-full flex flex-col items-center justify-center gap-6">
        <div className="flex items-center justify-center h-fit w-full overflow-hidden">
          <Image className="w-5/6" src={`/${imageProjet[numberProjet]}.jpg`} alt="disque" width={1128} height={632} />
        </div>
        <div className="flex flex-col gap-4 max-h-12 w-fit overflow-hidden">
          {nameProject.map((number) => (
            <div className="projet h-18 flex items-center" key={number}>
              <h3 className="">{number}</h3>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
