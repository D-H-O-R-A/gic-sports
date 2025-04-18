
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 25; // Further camera distance for better visibility
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Lighting for better visibility
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Add multiple point lights for better illumination
    const pointLight1 = new THREE.PointLight(0xffffff, 1.5);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 1.5);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    // Text group to animate together
    let textGroup = new THREE.Group();
    scene.add(textGroup);

    // Custom geometric shapes as fallback
    const createFallbackText = () => {
      console.log("Creating fallback 3D text with basic shapes");
      
      scene.remove(textGroup);
      textGroup = new THREE.Group();
      
      // Material with bright color and shininess
      const textMaterial = new THREE.MeshStandardMaterial({
        color: 0xf5f5f5,
        metalness: 0.5,
        roughness: 0.2,
        emissive: 0x222222
      });
      
      // G letter (box)
      const gBox = new THREE.BoxGeometry(4, 5, 1);
      const gMesh = new THREE.Mesh(gBox, textMaterial);
      gMesh.position.set(-8, 3, 0);
      
      // I letter (thin box)
      const iBox = new THREE.BoxGeometry(1, 5, 1);
      const iMesh = new THREE.Mesh(iBox, textMaterial);
      iMesh.position.set(-3, 3, 0);
      
      // C letter (partial torus)
      const cTorus = new THREE.TorusGeometry(2.5, 1, 16, 32, Math.PI);
      const cMesh = new THREE.Mesh(cTorus, textMaterial);
      cMesh.position.set(2, 3, 0);
      cMesh.rotation.y = Math.PI / 2;
      
      textGroup.add(gMesh, iMesh, cMesh);
      
      // SPORTS text (simplified as boxes)
      const lettersWidth = 16;
      const letterSpacing = lettersWidth / 6;
      
      for (let i = 0; i < 6; i++) {
        const letterBox = new THREE.BoxGeometry(1.5, 2.5, 1);
        const letterMesh = new THREE.Mesh(letterBox, textMaterial);
        letterMesh.position.set(i * letterSpacing - lettersWidth/2, -4, 0);
        textGroup.add(letterMesh);
      }
      
      // Position group and animate
      textGroup.position.z = -10;
      textGroup.position.x = -30; // Start off-screen for animation
      textGroup.rotation.y = -Math.PI / 4;
      
      scene.add(textGroup);
    };

    // Load the font and create 3D text
    console.log("Attempting to load font...");
    const fontLoader = new FontLoader();
    let fontLoaded = false;
    
    fontLoader.load('/fonts/helvetiker_regular.typeface.json', 
      // Success callback
      (font) => {
        console.log("Font loaded successfully:", font);
        fontLoaded = true;
        
        try {
          scene.remove(textGroup);
          textGroup = new THREE.Group();

          // Create materials with bright color for visibility
          const textMaterial = new THREE.MeshStandardMaterial({
            color: 0xf5f5f5,
            metalness: 0.5,
            roughness: 0.2
          });

          // Define shapes for "GIC"
          const gicShapes = font.generateShapes("GIC", 6);
          // Create "GIC" with extrusion for 3D effect
          const gicGeometry = new THREE.ExtrudeGeometry(gicShapes, {
            depth: 2,
            bevelEnabled: true,
            bevelThickness: 0.3,
            bevelSize: 0.2,
            bevelSegments: 3
          });

          // Define shapes for "SPORTS"
          const sportsShapes = font.generateShapes("SPORTS", 3);
          // Create "SPORTS" with extrusion for 3D effect
          const sportsGeometry = new THREE.ExtrudeGeometry(sportsShapes, {
            depth: 1,
            bevelEnabled: true,
            bevelThickness: 0.2,
            bevelSize: 0.1,
            bevelSegments: 3
          });

          const gicMesh = new THREE.Mesh(gicGeometry, textMaterial);
          const sportsMesh = new THREE.Mesh(sportsGeometry, textMaterial);

          // Center each text segment
          gicGeometry.computeBoundingBox();
          sportsGeometry.computeBoundingBox();
          
          const gicBox = gicGeometry.boundingBox!;
          const sportsBox = sportsGeometry.boundingBox!;
          
          const gicWidth = gicBox.max.x - gicBox.min.x;
          const sportsWidth = sportsBox.max.x - sportsBox.min.x;
          
          gicMesh.position.x = -gicWidth / 2;
          sportsMesh.position.x = -sportsWidth / 2;
          
          // Position the text vertically
          gicMesh.position.y = 4;  // Move GIC up
          sportsMesh.position.y = -3; // Move SPORTS down
          
          // Move text back in Z for better visibility with hero content
          gicMesh.position.z = -12;
          sportsMesh.position.z = -12;
          
          // Add to group for animation
          textGroup.add(gicMesh);
          textGroup.add(sportsMesh);
          
          // Initial position for entrance animation
          textGroup.position.x = -30; // Start off-screen
          textGroup.rotation.y = -Math.PI / 4; // Start slightly rotated
          
          scene.add(textGroup);
          
          console.log("3D text created successfully");
        } catch (error) {
          console.error("Error creating 3D text:", error);
          createFallbackText();
        }
      },
      // Progress callback
      (xhr) => {
        console.log(`Font loading: ${(xhr.loaded / xhr.total * 100)}% loaded`);
      },
      // Error callback
      (error) => {
        console.error('Font loading error:', error);
        createFallbackText();
      }
    );

    // Fallback if font doesn't load within timeout
    const fontLoadingTimeout = setTimeout(() => {
      if (!fontLoaded) {
        console.log("Font loading timed out, using fallback");
        createFallbackText();
      }
    }, 3000);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (textGroup) {
        // Smooth entrance animation
        textGroup.position.x += (0 - textGroup.position.x) * 0.05;
        textGroup.rotation.y += (0 - textGroup.rotation.y) * 0.05;
      
        // Subtle floating animation
        textGroup.position.y = Math.sin(Date.now() * 0.001) * 0.5;
        textGroup.rotation.z = Math.sin(Date.now() * 0.0005) * 0.03;
      }
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      clearTimeout(fontLoadingTimeout);
      window.removeEventListener('resize', handleResize);
      
      // Remove renderer from DOM
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of resources to prevent memory leaks
      if (textGroup) {
        textGroup.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach(material => material.dispose());
              } else {
                child.material.dispose();
              }
            }
          }
        });
      }
      
      scene.clear();
      renderer.dispose();
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
