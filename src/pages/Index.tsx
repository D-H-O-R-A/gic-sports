
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CardComparison from '@/components/CardComparison';
import Benefits from '@/components/Benefits';
import Features from '@/components/Features';
import ApplicationForm from '@/components/ApplicationForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <CardComparison />
        <Benefits />
        <Features />
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
