
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Teams from '@/components/Teams';
import Events from '@/components/Events';
import News from '@/components/News';
import Contact from '@/components/Contact';
import ThreeBackground from '@/components/ThreeBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white relative">
      <ThreeBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Teams />
          <Events />
          <News />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default Index;
