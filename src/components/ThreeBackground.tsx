
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0x0047AB, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Load font and create 3D text
    const fontLoader = new FontLoader();
    fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
      const textGeometry = new TextGeometry('GIC', {
        font: font,
        size: 5,
        height: 1,
      });

      const textMaterial = new THREE.MeshPhongMaterial({
        color: 0x0047AB,
        specular: 0x555555,
        shininess: 30,
      });

      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textGeometry.center();
      scene.add(textMesh);

      // Position camera
      camera.position.z = 15;

      // Animation
      const animate = () => {
        requestAnimationFrame(animate);
        textMesh.rotation.y += 0.002;
        renderer.render(scene, camera);
      };

      animate();
    });

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full opacity-20 pointer-events-none"
    />
  );
};

export default ThreeBackground;
