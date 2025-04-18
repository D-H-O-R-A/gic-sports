
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { BarChart2, Lock, RefreshCw, Shield, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Exchange = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="exchange" className="min-h-screen py-24 bg-gradient-to-b from-[#121212] to-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Exchange / DEX / GSCscan</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our suite of decentralized trading and monitoring tools empowers users to engage with
            the GIC ecosystem securely and efficiently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
          >
            <Card className="bg-[#1A1A1A] border-0 shadow-xl h-full">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <RefreshCw className="text-blue-500 w-5 h-5" />
                  <span>GIC Exchange</span>
                </h3>
                
                <p className="text-gray-300 mb-6">
                  Our centralized exchange platform provides a secure and user-friendly environment
                  for trading GSC tokens and other sports-related digital assets.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-[#252525] p-3 rounded">
                    <h4 className="text-sm font-medium mb-1">Trading Pairs</h4>
                    <p className="text-sm text-gray-400">GSC/USDT, GSC/ETH, GSC/BTC and more</p>
                  </div>
                  
                  <div className="bg-[#252525] p-3 rounded">
                    <h4 className="text-sm font-medium mb-1">Features</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Advanced order types</li>
                      <li>• Real-time market data</li>
                      <li>• Multi-factor security</li>
                    </ul>
                  </div>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Launch Exchange
                </Button>
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
              <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-700"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <RefreshCw className="text-purple-500 w-5 h-5" />
                  <span>GIC DEX</span>
                </h3>
                
                <p className="text-gray-300 mb-6">
                  Our decentralized exchange enables peer-to-peer trading with non-custodial
                  wallets, providing maximum control and privacy for our users.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-[#252525] p-3 rounded">
                    <h4 className="text-sm font-medium mb-1">Liquidity Pools</h4>
                    <p className="text-sm text-gray-400">Automated market making with competitive yields</p>
                  </div>
                  
                  <div className="bg-[#252525] p-3 rounded">
                    <h4 className="text-sm font-medium mb-1">Features</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• No KYC required</li>
                      <li>• Low transaction fees</li>
                      <li>• Yield farming opportunities</li>
                    </ul>
                  </div>
                </div>
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Connect Wallet
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeIn}
          >
            <Card className="bg-[#1A1A1A] border-0 shadow-xl h-full">
              <div className="h-2 bg-gradient-to-r from-teal-500 to-teal-700"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <BarChart2 className="text-teal-500 w-5 h-5" />
                  <span>GSCscan</span>
                </h3>
                
                <p className="text-gray-300 mb-6">
                  Our blockchain explorer provides complete transparency for all transactions
                  on the GIC network, with detailed analytics and monitoring tools.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-[#252525] p-3 rounded">
                    <h4 className="text-sm font-medium mb-1">Track Transactions</h4>
                    <p className="text-sm text-gray-400">Real-time monitoring of blockchain activity</p>
                  </div>
                  
                  <div className="bg-[#252525] p-3 rounded">
                    <h4 className="text-sm font-medium mb-1">Features</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Smart contract verification</li>
                      <li>• Token analytics</li>
                      <li>• Developer APIs</li>
                    </ul>
                  </div>
                </div>
                
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Explore GSCscan
                </Button>
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
        >
          <div className="bg-[#1A1A1A] rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">Security Measures</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex gap-3">
                <Shield className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Multi-Layer Security</h4>
                  <p className="text-sm text-gray-300">
                    Advanced encryption, cold storage, and regular security audits protect user assets.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Lock className="w-6 h-6 text-purple-400 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Identity Protection</h4>
                  <p className="text-sm text-gray-300">
                    Two-factor authentication and advanced fraud detection systems secure accounts.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <RefreshCw className="w-6 h-6 text-teal-400 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Insurance Fund</h4>
                  <p className="text-sm text-gray-300">
                    A dedicated reserve fund to protect against unforeseen security incidents.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 rounded-lg">
              <div>
                <h4 className="text-lg font-medium mb-2">Ready to start trading?</h4>
                <p className="text-gray-300">
                  Create an account to access all GIC exchange services and features.
                </p>
              </div>
              
              <div className="flex gap-4">
                <Button variant="outline" className="border-gray-700">
                  Learn More
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Sign Up <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
          >
            <Card className="bg-[#1A1A1A] border-0 shadow-xl h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">GIC Wallet</h3>
                <p className="text-gray-300 mb-6">
                  Our secure, user-friendly digital wallet for managing GSC tokens and other
                  crypto assets. Available as a browser extension and mobile app.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#252525] p-3 rounded">
                    <h4 className="text-sm font-medium mb-1">Multi-Chain Support</h4>
                    <p className="text-xs text-gray-400">ETH, BSC, Polygon & more</p>
                  </div>
                  
                  <div className="bg-[#252525] p-3 rounded">
                    <h4 className="text-sm font-medium mb-1">NFT Support</h4>
                    <p className="text-xs text-gray-400">View & manage digital collectibles</p>
                  </div>
                </div>
                
                <Button className="w-full">Download GIC Wallet</Button>
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
                <h3 className="text-xl font-semibold mb-4">User Guides</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive documentation to help you navigate our Web3 ecosystem
                  with confidence.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-300">Getting Started with GIC Exchange</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-300">How to Provide Liquidity on GIC DEX</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-300">Security Best Practices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-300">Understanding GSC Tokenomics</span>
                  </li>
                </ul>
                
                <Button variant="outline" className="w-full border-gray-700">
                  View Documentation
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Exchange;
