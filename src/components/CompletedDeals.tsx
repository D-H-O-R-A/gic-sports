import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { CheckCircle, TrendingUp, Users, Quote } from 'lucide-react';
import { Button } from './ui/button';

const CompletedDeals = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const deals = [
    {
      id: 1,
      player: "Ricardo Fernandez",
      fromClub: "Sporting Lisbon",
      toClub: "Manchester City",
      value: "€45 million",
      year: 2023,
      highlight: "Record fee for a defensive midfielder from Portugal"
    },
    {
      id: 2,
      player: "Jamal Wilson",
      fromClub: "Ajax Amsterdam",
      toClub: "Paris Saint-Germain",
      value: "€38 million",
      year: 2022,
      highlight: "Completed within 72 hours of initial interest"
    },
    {
      id: 3,
      player: "Elena Kovač",
      fromClub: "Olympique Lyon",
      toClub: "Chelsea Women",
      value: "€2.5 million",
      year: 2023,
      highlight: "One of the highest fees in women's football"
    }
  ];

  const testimonials = [
    {
      id: 1,
      author: "Carlos Vidal",
      role: "Sporting Director, FC Barcelona",
      text: "The GIC Sports team demonstrated extraordinary professionalism and attention to detail throughout the entire negotiation process. Their innovative approach using blockchain for contract transparency was a game-changer."
    },
    {
      id: 2,
      author: "Sophie Laurent",
      role: "CEO, Lyon Féminin",
      text: "Working with GIC Sports has transformed our recruitment strategy. Their scouting platform provided us with insights that we simply couldn't access elsewhere, leading to several key signings."
    }
  ];

  return (
    <section id="deals" className="min-h-screen py-16 sm:py-24 bg-gradient-to-b from-[#0A0A0A] to-[#121212]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Completed Deals</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto px-4">
            A track record of successful transfers and negotiations across the global football ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <span>Notable Transfers</span>
            </h3>
            
            <div className="space-y-6">
              {deals.map((deal, index) => (
                <Card key={deal.id} className="bg-[#1A1A1A] border-0 shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-3 border-b border-gray-800">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">{deal.player}</h4>
                      <span className="text-green-400 text-sm font-medium">{deal.value}</span>
                    </div>
                  </div>
                  
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm text-gray-400">From: <span className="text-white">{deal.fromClub}</span></div>
                      <TrendingUp className="w-4 h-4 text-blue-500 mx-2" />
                      <div className="text-sm text-gray-400">To: <span className="text-white">{deal.toClub}</span></div>
                    </div>
                    
                    <div className="flex items-center gap-1 text-sm text-gray-400 mb-3">
                      <span>Completed: {deal.year}</span>
                    </div>
                    
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded p-2 text-sm">
                      {deal.highlight}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Button variant="outline" className="border-gray-700">
                View All Transfers
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Users className="text-purple-500 w-6 h-6" />
              <span>Case Studies & Testimonials</span>
            </h3>
            
            <div className="bg-[#1A1A1A] rounded-lg p-6 shadow-xl mb-8">
              <h4 className="text-xl font-medium mb-4">The Jamal Wilson Transfer</h4>
              <p className="text-gray-300 mb-4">
                When PSG expressed interest in Ajax's rising star Jamal Wilson, they needed to move quickly
                before competing clubs entered the race. Our team facilitated:
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Rapid negotiation process across three time zones</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Smart-contract powered agreement to streamline terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Innovative performance-based bonus structure</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Comprehensive relocation support for the player</span>
                </li>
              </ul>
              
              <Button className="w-full">Read Full Case Study</Button>
            </div>
            
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="bg-[#1A1A1A] border-0 shadow-xl">
                  <CardContent className="pt-6">
                    <Quote className="w-8 h-8 text-purple-400 mb-4 opacity-50" />
                    <p className="text-gray-300 italic mb-4">{testimonial.text}</p>
                    <div className="border-t border-gray-800 pt-4 mt-4">
                      <h5 className="font-medium">{testimonial.author}</h5>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompletedDeals;
