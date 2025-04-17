
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { FileText, Download, Layers, Coins, Users, BarChart2 } from 'lucide-react';
import { Button } from './ui/button';

const Whitepaper = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const sections = [
    {
      id: 1,
      title: "Introduction",
      pages: "1-5",
      description: "The vision, mission, and philosophy behind GIC Sports and its Web3 initiatives."
    },
    {
      id: 2,
      title: "Market Analysis",
      pages: "6-15",
      description: "Comprehensive analysis of the sports management and blockchain landscape."
    },
    {
      id: 3,
      title: "GSC Ecosystem",
      pages: "16-30",
      description: "Detailed explanation of the GIC Sports ecosystem and its various components."
    },
    {
      id: 4,
      title: "Tokenomics",
      pages: "31-42",
      description: "Distribution, utility, and economic model of the GSC token."
    },
    {
      id: 5,
      title: "Technology",
      pages: "43-55",
      description: "Technical architecture, blockchain implementation, and security features."
    },
    {
      id: 6,
      title: "Governance",
      pages: "56-62",
      description: "DAO structure, voting mechanisms, and community participation."
    },
    {
      id: 7,
      title: "Roadmap",
      pages: "63-70",
      description: "Development timeline, milestones, and future plans."
    },
    {
      id: 8,
      title: "Team & Advisors",
      pages: "71-80",
      description: "Profiles of the leadership team, developers, and strategic advisors."
    }
  ];

  return (
    <section id="whitepaper" className="min-h-screen py-24 bg-gradient-to-b from-[#121212] to-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Whitepaper</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our comprehensive whitepaper outlines GIC's vision for revolutionizing sports management
            through Web3 technology, detailing our ecosystem, tokenomics, and roadmap.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
            className="lg:col-span-2"
          >
            <Card className="bg-[#1A1A1A] border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold">Whitepaper Contents</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sections.map((section) => (
                    <div key={section.id} className="border border-gray-800 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{section.title}</h4>
                        <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                          Pages {section.pages}
                        </span>
                      </div>
                      <p className="text-sm text-gray-300">{section.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Download className="mr-2 h-4 w-4" /> Download Full Whitepaper (PDF)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <Card className="bg-[#1A1A1A] border-0 shadow-xl h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Key Highlights</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Layers className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Ecosystem Architecture</h4>
                      <p className="text-sm text-gray-300">
                        The interconnected components that form the GIC Sports Web3 ecosystem.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Coins className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Token Utility</h4>
                      <p className="text-sm text-gray-300">
                        How GSC tokens power transactions, governance, and value creation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-teal-500/20 rounded-lg">
                      <Users className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Community Governance</h4>
                      <p className="text-sm text-gray-300">
                        The DAO structure that allows stakeholders to participate in decision-making.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-500/20 rounded-lg">
                      <BarChart2 className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Economic Model</h4>
                      <p className="text-sm text-gray-300">
                        How value flows through the ecosystem to benefit all participants.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Executive Summary</h4>
                  <p className="text-sm text-gray-300 mb-4">
                    For those short on time, we've prepared a condensed executive summary highlighting
                    the most important aspects of our whitepaper.
                  </p>
                  <Button variant="outline" className="w-full border-gray-700">
                    Download Executive Summary
                  </Button>
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <Card className="bg-gradient-to-br from-blue-900/20 to-blue-700/20 border-0 shadow-xl">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Tokenomics</h3>
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <Coins className="w-8 h-8 text-blue-400" />
              </div>
              <p className="text-gray-300 text-sm">
                Detailed breakdown of token distribution, vesting schedules, and economic incentives.
              </p>
              <Button variant="link" className="mt-4 text-blue-400">
                View Token Allocation
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-900/20 to-purple-700/20 border-0 shadow-xl">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Technical Paper</h3>
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-purple-400" />
              </div>
              <p className="text-gray-300 text-sm">
                In-depth technical documentation of our blockchain implementation and architecture.
              </p>
              <Button variant="link" className="mt-4 text-purple-400">
                View Technical Details
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-teal-900/20 to-teal-700/20 border-0 shadow-xl">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Governance</h3>
              <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-teal-400" />
              </div>
              <p className="text-gray-300 text-sm">
                Explanation of voting mechanisms, proposal systems, and community treasury management.
              </p>
              <Button variant="link" className="mt-4 text-teal-400">
                View Governance Framework
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Whitepaper;
