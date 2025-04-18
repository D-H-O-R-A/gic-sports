
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    'home',
    'about',
    'athletes',
    'young-talents',
    'scouting',
    'deals',
    'news',
    'web3',
    'exchange',
    'roadmap',
    'whitepaper',
    'contact'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="text-xl sm:text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              GIC Sports
            </span>
          </div>
          
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-white hover:opacity-80 capitalize transition-colors text-sm lg:text-base font-medium whitespace-nowrap"
              >
                {section.replace('-', ' ')}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link to="/admin">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/10 hidden md:flex items-center gap-1"
              >
                <ShieldCheck className="h-4 w-4" />
                Admin
              </Button>
            </Link>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-white" />
              ) : (
                <Menu className="h-5 w-5 text-white" />
              )}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-2 bg-black/95 backdrop-blur-md rounded-b-lg"
          >
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 capitalize transition-colors text-sm font-medium"
              >
                {section.replace('-', ' ')}
              </button>
            ))}
            <Link to="/admin" className="block w-full">
              <button className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors text-sm font-medium">
                <ShieldCheck className="h-4 w-4" />
                Admin
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
