"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    if (sceneRef.current) {
      renderer.setSize(window.innerWidth, window.innerHeight);
      sceneRef.current.appendChild(renderer.domElement);
    }

    let geometry: THREE.PlaneGeometry;
    if (window.innerWidth > 425 && window.innerWidth <= 768) {
      geometry = new THREE.PlaneGeometry(6, 4, 1, 1);
    } else if (window.innerWidth >= 768) {
      geometry = new THREE.PlaneGeometry(8, 5, 1, 1); 
    } else {
      geometry = new THREE.PlaneGeometry(3, 3, 1, 1);
    }

    const material = new THREE.MeshBasicMaterial({ color: 0x000 });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 5;

    const plane1Geometry = new THREE.PlaneGeometry(5, 4.5, 1, 1)
    const plane1Material = new THREE.MeshBasicMaterial({ color: 0x000 });
    const plane1 = new THREE.Mesh(plane1Geometry, plane1Material);
    plane1.position.set(8, .8, 0)
    scene.add(plane1);


    const resizeHandler = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", resizeHandler);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeHandler);
      if (sceneRef.current) {
        sceneRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="absolute top-0 left-0 w-full h-full z-50"
      />
  );};

export default ThreeScene;
