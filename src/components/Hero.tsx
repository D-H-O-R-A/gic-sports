
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white"
        >
          <span className="block mb-2">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Dream It.</span>
          </span>
          <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">Do It.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-white text-lg sm:text-xl mb-12 max-w-2xl mx-auto px-4"
        >
          Unleashing athletic potential through innovative Web3 solutions
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-12 px-4"
        >
          <Button 
            variant="default" 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            onClick={() => document.getElementById('exchange')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Exchange <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="default" 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            onClick={() => document.getElementById('exchange')?.scrollIntoView({ behavior: 'smooth' })}
          >
            DEX <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="default" 
            size="lg"
            className="bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600"
            onClick={() => document.getElementById('web3')?.scrollIntoView({ behavior: 'smooth' })}
          >
            GIC Wallet <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="default" 
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
            onClick={() => document.getElementById('scouting')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Scouting Platform <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDownCircle className="w-10 h-10 text-gray-400 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
