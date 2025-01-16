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

    const geometry = new THREE.PlaneGeometry(8, 5, 1, 1); 
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 5;

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

  return <div className="webgl" id="root" ref={sceneRef} />;
};

export default ThreeScene;
