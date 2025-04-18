
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Load font and create 3D text
    const fontLoader = new FontLoader();
    fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
      // Create "GIC" text
      const gicGeometry = new TextGeometry('GIC', {
        font: font,
        size: 5,
        height: 1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.05,
        bevelOffset: 0,
        bevelSegments: 5
      });

      // Create "Sports" text with smaller size
      const sportsGeometry = new TextGeometry('Sports', {
        font: font,
        size: 2,
        height: 0.5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.03,
        bevelOffset: 0,
        bevelSegments: 5
      });

      const textMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        specular: 0x555555,
        shininess: 30,
        transparent: true,
        opacity: 0.9
      });

      const gicMesh = new THREE.Mesh(gicGeometry, textMaterial);
      const sportsMesh = new THREE.Mesh(sportsGeometry, textMaterial);

      // Center both texts
      gicGeometry.center();
      sportsGeometry.center();

      // Position texts
      gicMesh.position.z = -10;
      gicMesh.position.y = 2;
      sportsMesh.position.z = -10;
      sportsMesh.position.y = -1;

      scene.add(gicMesh);
      scene.add(sportsMesh);

      // Initial position for animation
      gicMesh.position.x = -20;
      sportsMesh.position.x = 20;
      gicMesh.rotation.y = -Math.PI / 4;
      sportsMesh.rotation.y = Math.PI / 4;

      // Animate entrance
      const animateEntrance = () => {
        gicMesh.position.x += (0 - gicMesh.position.x) * 0.05;
        sportsMesh.position.x += (0 - sportsMesh.position.x) * 0.05;
        gicMesh.rotation.y += (0 - gicMesh.rotation.y) * 0.05;
        sportsMesh.rotation.y += (0 - sportsMesh.rotation.y) * 0.05;
      };

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        animateEntrance();
        
        // Subtle floating animation
        gicMesh.position.y = 2 + Math.sin(Date.now() * 0.001) * 0.1;
        sportsMesh.position.y = -1 + Math.sin(Date.now() * 0.001 + Math.PI) * 0.1;
        
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
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: 'linear-gradient(135deg, #1a1f2c 0%, #221F26 100%)' }}
    />
  );
};

export default ThreeBackground;
