
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Calendar, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const Roadmap = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const years = ['2023', '2024', '2025', '2026'];
  
  const quarters = {
    '2023': [
      {
        id: 1,
        title: 'Q1 2023',
        items: [
          { text: 'GIC Sports founded', completed: true },
          { text: 'Initial team assembled', completed: true },
          { text: 'Initial athlete partnerships', completed: true }
        ]
      },
      {
        id: 2,
        title: 'Q2 2023',
        items: [
          { text: 'Platform prototype development', completed: true },
          { text: 'Whitepaper release', completed: true },
          { text: 'First funding round', completed: true }
        ]
      },
      {
        id: 3,
        title: 'Q3 2023',
        items: [
          { text: 'Expansion to European market', completed: true },
          { text: 'GSC token concept development', completed: true },
          { text: 'Strategic partnerships', completed: true }
        ]
      },
      {
        id: 4,
        title: 'Q4 2023',
        items: [
          { text: 'Athlete representation platform beta', completed: true },
          { text: 'Initial Web3 development', completed: true },
          { text: 'Year-end strategic planning', completed: true }
        ]
      }
    ],
    '2024': [
      {
        id: 1,
        title: 'Q1 2024',
        items: [
          { text: 'GSC token launch', completed: true },
          { text: 'Exchange partnerships', completed: true },
          { text: 'Scouting platform alpha', completed: true }
        ]
      },
      {
        id: 2,
        title: 'Q2 2024',
        items: [
          { text: 'DEX development and testing', completed: true },
          { text: 'NFT marketplace launch', completed: true },
          { text: 'Youth development program', completed: true }
        ]
      },
      {
        id: 3,
        title: 'Q3 2024',
        items: [
          { text: 'Scouting platform public launch', completed: true },
          { text: 'Mobile app development', completed: true },
          { text: 'Asian market expansion', completed: true }
        ]
      },
      {
        id: 4,
        title: 'Q4 2024',
        items: [
          { text: 'GIC DEX public launch', completed: true },
          { text: 'Fan token system implementation', completed: true },
          { text: 'Major club partnerships', completed: true }
        ]
      }
    ],
    '2025': [
      {
        id: 1,
        title: 'Q1 2025',
        items: [
          { text: 'GSC ecosystem expansion', completed: true },
          { text: 'Cross-chain integration', completed: true },
          { text: 'Enhanced analytics platform', completed: false }
        ]
      },
      {
        id: 2,
        title: 'Q2 2025',
        items: [
          { text: 'GIC Soccer League launch', completed: false },
          { text: 'Global scouting network expansion', completed: false },
          { text: 'Advanced contract management system', completed: false }
        ]
      },
      {
        id: 3,
        title: 'Q3 2025',
        items: [
          { text: 'DAO governance implementation', completed: false },
          { text: 'Academy partnership program', completed: false },
          { text: 'Athlete token system launch', completed: false }
        ]
      },
      {
        id: 4,
        title: 'Q4 2025',
        items: [
          { text: 'Virtual training platform', completed: false },
          { text: 'Major league integrations', completed: false },
          { text: 'Strategic acquisitions', completed: false }
        ]
      }
    ],
    '2026': [
      {
        id: 1,
        title: 'Q1 2026',
        items: [
          { text: 'Metaverse integration', completed: false },
          { text: 'AI-powered scouting enhancements', completed: false },
          { text: 'African market expansion', completed: false }
        ]
      },
      {
        id: 2,
        title: 'Q2 2026',
        items: [
          { text: 'Enhanced DAO voting rights', completed: false },
          { text: 'Cross-sport expansion', completed: false },
          { text: 'Advanced performance analytics', completed: false }
        ]
      },
      {
        id: 3,
        title: 'Q3 2026',
        items: [
          { text: 'Decentralized agent certification', completed: false },
          { text: 'VR training integration', completed: false },
          { text: 'Expanded tokenomics model', completed: false }
        ]
      },
      {
        id: 4,
        title: 'Q4 2026',
        items: [
          { text: 'Global sports federation partnerships', completed: false },
          { text: 'Advanced metaverse experiences', completed: false },
          { text: 'Expanded GSC ecosystem', completed: false }
        ]
      }
    ]
  };

  return (
    <section id="roadmap" className="min-h-screen py-24 bg-gradient-to-b from-[#0A0A0A] to-[#121212]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Roadmap</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our strategic vision and development timeline, outlining past achievements
            and future milestones in our journey to revolutionize sports management.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="mb-12"
        >
          <Tabs 
            defaultValue="2025" 
            value={selectedYear}
            onValueChange={setSelectedYear}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-full max-w-md">
                {years.map(year => (
                  <TabsTrigger key={year} value={year}>{year}</TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {years.map(year => (
              <TabsContent key={year} value={year} className="mt-0">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500/50 to-purple-500/50"></div>
                  
                  <div className="space-y-12">
                    {quarters[year].map((quarter, index) => (
                      <div key={quarter.id} className="relative">
                        <div className="flex items-center justify-center mb-6">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center z-10">
                            <Calendar className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        
                        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${index % 2 === 0 ? 'md:rtl' : ''}`}>
                          <div></div>
                          <Card className="bg-[#1A1A1A] border-0 shadow-xl">
                            <CardContent className="p-6">
                              <h3 className="text-xl font-semibold mb-4">{quarter.title}</h3>
                              
                              <ul className="space-y-3">
                                {quarter.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start gap-3">
                                    {item.completed ? (
                                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                    ) : (
                                      <Clock className="w-5 h-5 text-blue-400 mt-0.5" />
                                    )}
                                    <span className={item.completed ? 'text-gray-300' : 'text-white'}>
                                      {item.text}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="flex justify-center"
        >
          <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-0 shadow-xl max-w-2xl w-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Long-Term Vision</h3>
              <p className="text-gray-300 mb-4 text-center">
                By 2030, GIC Sports aims to establish itself as the leading global sports management
                platform, integrating traditional athlete representation with cutting-edge Web3 technologies.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Decentralized Sports Economy</h4>
                    <p className="text-sm text-gray-300">
                      Creating a fully decentralized economy where athletes, clubs, and fans share in value creation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Global Talent Discovery</h4>
                    <p className="text-sm text-gray-300">
                      Democratizing talent discovery and development across all regions and socioeconomic backgrounds.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Transparent Sports Business</h4>
                    <p className="text-sm text-gray-300">
                      Setting new standards for transparency and fairness in all aspects of sports management.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
