
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { History, Target, Trophy, Globe } from 'lucide-react';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="min-h-screen py-24 bg-gradient-to-b from-[#0A0A0A] to-[#121212]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About GIC Sports</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-semibold mb-4">Our History</h3>
            <p className="text-gray-300 mb-6">
              Founded in 2018, GIC Sports has rapidly grown from a boutique agency to a global powerhouse
              in athlete representation and sports technology. With roots in traditional sports management,
              we've embraced Web3 innovations to revolutionize the athlete-fan relationship.
            </p>
            <p className="text-gray-300">
              Our journey has been defined by a commitment to integrity, transparency, and cutting-edge
              solutions that empower athletes to take control of their careers and brand development in
              the digital age.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeIn}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold">Since 2018</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <Card className="bg-[#1A1A1A] border-0 shadow-xl">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500/20 mb-4">
                    <Target className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Mission</h3>
                  <p className="text-gray-300">
                    To empower athletes with innovative tools and representation that maximize their potential
                    both on and off the field, while creating meaningful connections with fans through Web3 technologies.
                  </p>
                </div>
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
            <Card className="bg-[#1A1A1A] border-0 shadow-xl">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-500/20 mb-4">
                    <History className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Vision</h3>
                  <p className="text-gray-300">
                    To pioneer the integration of sports and blockchain technology, creating a decentralized
                    ecosystem where athletes, fans, and stakeholders benefit from transparent, equitable,
                    and innovative engagement opportunities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            variants={fadeIn}
          >
            <Card className="bg-[#1A1A1A] border-0 shadow-xl">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-500/20 mb-4">
                    <Trophy className="w-8 h-8 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Values</h3>
                  <p className="text-gray-300">
                    Integrity, innovation, excellence, and athlete empowerment guide everything we do.
                    We believe in responsible disruption, transparent operations, and creating equitable
                    value for all participants in the sports ecosystem.
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
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4">International Partnerships</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['Europe', 'Americas', 'Asia', 'Africa'].map((region, index) => (
            <motion.div
              key={region}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              variants={fadeIn}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-800 mb-4">
                <Globe className="w-8 h-8 text-gray-300" />
              </div>
              <h4 className="text-lg font-medium">{region}</h4>
              <p className="text-gray-400 text-center">Strategic partnerships across {region}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
