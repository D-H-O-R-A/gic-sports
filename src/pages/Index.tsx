
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Athletes from '@/components/Athletes';
import YoungTalents from '@/components/YoungTalents';
import ScoutingPlatform from '@/components/ScoutingPlatform';
import CompletedDeals from '@/components/CompletedDeals';
import News from '@/components/News';
import Web3 from '@/components/Web3';
import Exchange from '@/components/Exchange';
import Roadmap from '@/components/Roadmap';
import Whitepaper from '@/components/Whitepaper';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThreeBackground from '@/components/ThreeBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative">
      <ThreeBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Athletes />
          <YoungTalents />
          <ScoutingPlatform />
          <CompletedDeals />
          <News />
          <Web3 />
          <Exchange />
          <Roadmap />
          <Whitepaper />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
