
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
    camera.position.z = 20; // Increase camera distance
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Add point lights for better text illumination
    const pointLight1 = new THREE.PointLight(0xffffff, 1);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 1);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    let gicMesh: THREE.Mesh;
    let sportsMesh: THREE.Mesh;

    // Load font and create 3D text
    const fontLoader = new FontLoader();
    
    // Use the available font and create a callback to handle font loading
    fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
      // Check if font loaded properly
      console.log("Font loaded:", font);
      
      try {
        // Create "GIC" text - larger size
        const gicGeometry = new TextGeometry('GIC', {
          font: font,
          size: 6, // Larger size
          height: 1.5,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.2,
          bevelSize: 0.05,
          bevelOffset: 0,
          bevelSegments: 5
        });

        // Create "Sports" text - smaller size, same width
        const sportsGeometry = new TextGeometry('SPORTS', {
          font: font,
          size: 2.5, // Smaller size
          height: 0.8,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.1,
          bevelSize: 0.03,
          bevelOffset: 0,
          bevelSegments: 5
        });

        // Use a bright material for visibility
        const textMaterial = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          metalness: 0.3,
          roughness: 0.2,
          emissive: 0x222222
        });

        gicMesh = new THREE.Mesh(gicGeometry, textMaterial);
        sportsMesh = new THREE.Mesh(sportsGeometry, textMaterial);

        // Center both texts
        gicGeometry.computeBoundingBox();
        sportsGeometry.computeBoundingBox();
        
        const gicWidth = gicGeometry.boundingBox!.max.x - gicGeometry.boundingBox!.min.x;
        const sportsWidth = sportsGeometry.boundingBox!.max.x - sportsGeometry.boundingBox!.min.x;
        
        // Position texts
        gicMesh.position.set(-gicWidth / 2, 3, -15);
        
        // Position sports to be centered below GIC
        sportsMesh.position.set(-sportsWidth / 2, -1, -15);
        
        scene.add(gicMesh);
        scene.add(sportsMesh);

        // Initial position for animation
        gicMesh.position.x = -20;
        sportsMesh.position.x = 20;
        gicMesh.rotation.y = -Math.PI / 4;
        sportsMesh.rotation.y = Math.PI / 4;
        
        console.log("3D text added to scene:", gicMesh, sportsMesh);

        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);
          
          // Animate entrance
          if (gicMesh && sportsMesh) {
            gicMesh.position.x += ((-gicWidth / 2) - gicMesh.position.x) * 0.05;
            sportsMesh.position.x += ((-sportsWidth / 2) - sportsMesh.position.x) * 0.05;
            gicMesh.rotation.y += (0 - gicMesh.rotation.y) * 0.05;
            sportsMesh.rotation.y += (0 - sportsMesh.rotation.y) * 0.05;
          
            // Subtle floating animation
            gicMesh.position.y = 3 + Math.sin(Date.now() * 0.001) * 0.2;
            sportsMesh.position.y = -1 + Math.sin(Date.now() * 0.001 + Math.PI) * 0.2;
          }
          
          renderer.render(scene, camera);
        };

        animate();
      } catch (error) {
        console.error("Error creating 3D text:", error);
      }
    }, 
    // onProgress callback
    (xhr) => {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    // onError callback
    (error) => {
      console.error('Font loading error:', error);
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
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Clean up geometries and materials
      if (gicMesh) {
        (gicMesh.geometry as THREE.BufferGeometry).dispose();
        (gicMesh.material as THREE.Material).dispose();
      }
      if (sportsMesh) {
        (sportsMesh.geometry as THREE.BufferGeometry).dispose();
        (sportsMesh.material as THREE.Material).dispose();
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
