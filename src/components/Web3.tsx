
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Link2, Layers, BarChart2, Coins, Database, Users } from 'lucide-react';
import { Button } from './ui/button';

const Web3 = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const initiatives = [
    {
      id: 1,
      title: "GSC Blockchain",
      icon: <Link2 className="w-8 h-8 text-blue-400" />,
      description: "Our proprietary blockchain designed specifically for sports management, player contracts, and performance analytics.",
      features: ["Transparent contract execution", "Performance data verification", "Secure transfer records"]
    },
    {
      id: 2,
      title: "Fan Tokens",
      icon: <Coins className="w-8 h-8 text-yellow-400" />,
      description: "Team and player-specific tokens that give fans unprecedented levels of engagement and exclusive access.",
      features: ["Voting rights on club decisions", "VIP experiences", "Exclusive merchandise"]
    },
    {
      id: 3,
      title: "Sports NFTs",
      icon: <Layers className="w-8 h-8 text-purple-400" />,
      description: "Digital collectibles that capture iconic moments, player achievements, and historical sports milestones.",
      features: ["Verifiable authenticity", "Limited editions", "Secondary market opportunities"]
    },
    {
      id: 4,
      title: "GIC Soccer League",
      icon: <Users className="w-8 h-8 text-green-400" />,
      description: "A pioneering digital football league with DAO governance and real economic stake for participants.",
      features: ["Community ownership", "Player-controlled teams", "Real prize pools"]
    }
  ];

  return (
    <section id="web3" className="min-h-screen py-24 bg-gradient-to-b from-[#0A0A0A] to-[#121212]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">GIC on Web3</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Pioneering the integration of sports and blockchain technology to create new value,
            transparency, and opportunities for athletes, clubs, and fans across the sports ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              variants={fadeIn}
            >
              <Card className="bg-[#1A1A1A] border-0 shadow-xl h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-[#252525]">
                      {initiative.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{initiative.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{initiative.description}</p>
                  
                  <div className="bg-[#252525] rounded-lg p-4 mb-6">
                    <h4 className="text-sm font-medium mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {initiative.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="w-full border-gray-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-blue-500/10 shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4">The GSC Ecosystem</h3>
              <p className="text-gray-300 mb-6">
                At the center of our Web3 initiatives is the GSC token, powering a comprehensive
                ecosystem that connects all aspects of the sports industry. The GSC token facilitates
                transactions, governance, rewards, and access across our platforms.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="w-5 h-5 text-blue-400" />
                    <h4 className="font-medium">Utility</h4>
                  </div>
                  <p className="text-sm text-gray-300">Platform access, premium features, and transaction fees</p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-purple-400" />
                    <h4 className="font-medium">Governance</h4>
                  </div>
                  <p className="text-sm text-gray-300">Voting rights on platform development and policy</p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Coins className="w-5 h-5 text-yellow-400" />
                    <h4 className="font-medium">Rewards</h4>
                  </div>
                  <p className="text-sm text-gray-300">Staking benefits and loyalty incentives</p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart2 className="w-5 h-5 text-green-400" />
                    <h4 className="font-medium">Value</h4>
                  </div>
                  <p className="text-sm text-gray-300">Appreciating asset tied to ecosystem growth</p>
                </div>
              </div>
              
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Explore the GSC Ecosystem
              </Button>
            </div>
            
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse-slow"></div>
                <div className="absolute inset-8 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 animate-pulse-slow animation-delay-500"></div>
                <div className="absolute inset-16 rounded-full bg-gradient-to-r from-blue-500/40 to-purple-500/40 animate-pulse-slow animation-delay-1000"></div>
                <div className="absolute inset-24 rounded-full bg-gradient-to-r from-blue-500/50 to-purple-500/50 animate-pulse-slow animation-delay-1500 flex items-center justify-center">
                  <span className="text-xl font-bold">GSC</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Web3;
