
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

    let textGroup = new THREE.Group();
    scene.add(textGroup);

    // Create a fallback 3D text using basic geometric shapes if font loading fails
    const createFallbackText = () => {
      console.log("Creating fallback 3D text");
      
      // Clear any existing text
      scene.remove(textGroup);
      textGroup = new THREE.Group();
      
      // Material for the text
      const textMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.3,
        roughness: 0.2,
        emissive: 0x222222
      });
      
      // Create "GIC" with simple geometries
      const gicGroup = new THREE.Group();
      
      // G letter
      const gGeometry = new THREE.BoxGeometry(2, 4, 1);
      const gMesh = new THREE.Mesh(gGeometry, textMaterial);
      gicGroup.add(gMesh);
      
      // I letter
      const iGeometry = new THREE.BoxGeometry(1, 4, 1);
      const iMesh = new THREE.Mesh(iGeometry, textMaterial);
      iMesh.position.x = 3;
      gicGroup.add(iMesh);
      
      // C letter
      const cGeometry = new THREE.TorusGeometry(2, 0.5, 16, 32, Math.PI);
      const cMesh = new THREE.Mesh(cGeometry, textMaterial);
      cMesh.position.x = 6;
      cMesh.rotation.y = Math.PI / 2;
      gicGroup.add(cMesh);
      
      gicGroup.position.y = 3;
      gicGroup.position.z = -15;
      textGroup.add(gicGroup);
      
      // Create "SPORTS" with simple boxes
      const sportsGroup = new THREE.Group();
      const letters = ['S', 'P', 'O', 'R', 'T', 'S'];
      
      for (let i = 0; i < letters.length; i++) {
        const letterGeometry = new THREE.BoxGeometry(1, 2, 1);
        const letterMesh = new THREE.Mesh(letterGeometry, textMaterial);
        letterMesh.position.x = i * 2 - 5;
        sportsGroup.add(letterMesh);
      }
      
      sportsGroup.position.y = -1;
      sportsGroup.position.z = -15;
      textGroup.add(sportsGroup);
      
      // Center the whole text group
      textGroup.position.x = 0;
      
      // Initial position for animation
      textGroup.position.x = -30;
      textGroup.rotation.y = -Math.PI / 4;
      
      scene.add(textGroup);
    };

    // Attempt to load font and create text, with fallback
    let fontLoadingFailed = false;
    const fontLoader = new FontLoader();
    
    // Use the available font and create a callback to handle font loading
    fontLoader.load('/fonts/helvetiker_regular.typeface.json', 
      // onLoad callback
      (font) => {
        console.log("Font loaded successfully:", font);
        
        try {
          // Clear any existing text
          scene.remove(textGroup);
          textGroup = new THREE.Group();
          
          // Create "GIC" text with proper geometry
          const gicGeometry = new THREE.ExtrudeGeometry(
            font.generateShapes("GIC", 6),
            {
              depth: 1.5,
              bevelEnabled: true,
              bevelThickness: 0.2,
              bevelSize: 0.05,
              bevelSegments: 5
            }
          );

          // Create "SPORTS" text with proper geometry
          const sportsGeometry = new THREE.ExtrudeGeometry(
            font.generateShapes("SPORTS", 2.5),
            {
              depth: 0.8,
              bevelEnabled: true,
              bevelThickness: 0.1,
              bevelSize: 0.03,
              bevelSegments: 5
            }
          );
          
          // Use a bright material for visibility
          const textMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.3,
            roughness: 0.2,
            emissive: 0x222222
          });

          const gicMesh = new THREE.Mesh(gicGeometry, textMaterial);
          const sportsMesh = new THREE.Mesh(sportsGeometry, textMaterial);

          // Compute bounding boxes for centering
          gicGeometry.computeBoundingBox();
          sportsGeometry.computeBoundingBox();
          
          const gicBox = gicGeometry.boundingBox!;
          const sportsBox = sportsGeometry.boundingBox!;
          
          const gicWidth = gicBox.max.x - gicBox.min.x;
          const sportsWidth = sportsBox.max.x - sportsBox.min.x;
          
          // Center both meshes on their geometries
          gicMesh.position.x = -gicWidth / 2;
          sportsMesh.position.x = -sportsWidth / 2;
          
          // Position the texts vertically
          gicMesh.position.y = 3;
          sportsMesh.position.y = -1;
          gicMesh.position.z = -15;
          sportsMesh.position.z = -15;
          
          // Add to group for easier animation
          textGroup.add(gicMesh);
          textGroup.add(sportsMesh);

          // Initial position for animation
          textGroup.position.x = -30;
          textGroup.rotation.y = -Math.PI / 4;
          
          scene.add(textGroup);
          
          console.log("3D text created successfully");
        } catch (error) {
          console.error("Error creating 3D text with font:", error);
          fontLoadingFailed = true;
          createFallbackText();
        }
      }, 
      // onProgress callback
      (xhr) => {
        console.log(`Font loading: ${(xhr.loaded / xhr.total * 100)}% loaded`);
      },
      // onError callback
      (error) => {
        console.error('Font loading error:', error);
        fontLoadingFailed = true;
        createFallbackText();
      }
    );

    // Fallback if font doesn't load in a reasonable time
    const fontLoadingTimeout = setTimeout(() => {
      if (!textGroup.children.length || fontLoadingFailed) {
        console.log("Font loading timed out, using fallback");
        createFallbackText();
      }
    }, 3000);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Animate entrance if text exists
      if (textGroup) {
        // Smooth entrance animation
        textGroup.position.x += (0 - textGroup.position.x) * 0.05;
        textGroup.rotation.y += (0 - textGroup.rotation.y) * 0.05;
      
        // Subtle floating animation
        textGroup.position.y = Math.sin(Date.now() * 0.001) * 0.2;
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

    return () => {
      clearTimeout(fontLoadingTimeout);
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Clean up resources
      textGroup.children.forEach((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (child.material instanceof THREE.Material) {
            child.material.dispose();
          } else if (Array.isArray(child.material)) {
            child.material.forEach(material => material.dispose());
          }
        }
      });
      
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
