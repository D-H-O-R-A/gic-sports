
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Search, Filter, BarChart2, Map, Download, Users, Star } from 'lucide-react';
import { Button } from './ui/button';

const ScoutingPlatform = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="scouting" className="min-h-screen py-24 bg-gradient-to-b from-[#121212] to-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Scouting Platform</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our advanced scouting platform leverages data analytics and AI to identify promising talent worldwide.
            Access comprehensive profiles, performance metrics, and growth projections in one powerful tool.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
            className="lg:col-span-3 bg-[#1A1A1A] rounded-lg overflow-hidden shadow-xl"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Interactive Scouting Tool</h3>
              
              <div className="mb-6 flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px]">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input 
                      type="text"
                      placeholder="Search players, teams, or regions..." 
                      className="w-full bg-[#252525] rounded-md border-gray-700 pl-10 p-2 text-sm"
                    />
                  </div>
                </div>
                
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Filter className="w-4 h-4 mr-2" />
                  Advanced Filters
                </Button>
              </div>
              
              <div className="bg-[#252525] rounded-lg p-4 h-64 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <Map className="w-16 h-16 mx-auto mb-2 opacity-40" />
                  <p>Interactive map showing talent distribution</p>
                  <p className="text-sm">(Preview only - full functionality in platform)</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-gray-800">
              {[
                { icon: <Users className="w-5 h-5" />, label: "90,000+ Players" },
                { icon: <Map className="w-5 h-5" />, label: "120+ Countries" },
                { icon: <Star className="w-5 h-5" />, label: "Advanced Rating System" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`p-4 text-center ${index < 2 ? "sm:border-r border-gray-800" : ""}`}
                >
                  <div className="flex items-center justify-center gap-2 text-gray-300">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
            className="lg:col-span-2"
          >
            <Card className="bg-[#1A1A1A] border-0 shadow-xl h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Platform Features</h3>
                
                <ul className="space-y-4">
                  {[
                    { icon: <Search className="w-5 h-5 text-blue-400" />, title: "Advanced Search", description: "Filter by over 50 technical, physical, and performance parameters" },
                    { icon: <BarChart2 className="w-5 h-5 text-purple-400" />, title: "Performance Analytics", description: "Detailed metrics and comparison tools" },
                    { icon: <Download className="w-5 h-5 text-teal-400" />, title: "Custom Reports", description: "Generate and export comprehensive scouting reports" }
                  ].map((feature, index) => (
                    <li key={index} className="flex gap-3">
                      <div className="mt-1">{feature.icon}</div>
                      <div>
                        <h4 className="font-medium">{feature.title}</h4>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Request Platform Demo
                  </Button>
                  <p className="text-center text-gray-400 text-xs mt-2">
                    Professional subscriptions available for clubs and agents
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 shadow-xl border border-blue-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Ready to revolutionize your scouting?</h3>
              <p className="text-gray-300">
                Get early access to our beta platform and discover tomorrow's stars today.
              </p>
            </div>
            <Button size="lg" className="whitespace-nowrap bg-white text-[#0A0A0A] hover:bg-gray-100">
              Join Waitlist
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScoutingPlatform;
