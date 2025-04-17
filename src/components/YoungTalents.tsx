
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Star, Award, User, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';

const YoungTalents = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const talents = [
    {
      id: 1,
      name: 'Lucas Mendes',
      age: 17,
      country: 'Brazil',
      position: 'Attacking Midfielder',
      quote: 'My goal is to represent Brazil at the World Cup before I turn 21.',
      achievement: 'U17 World Cup Top Scorer'
    },
    {
      id: 2,
      name: 'Kylian Johnson',
      age: 16,
      country: 'France',
      position: 'Forward',
      quote: 'I model my game after the great strikers of the past, but with my own style.',
      achievement: 'European U16 Championship Best Player'
    },
    {
      id: 3,
      name: 'Sofia Martinez',
      age: 18,
      country: 'Argentina',
      position: 'Defensive Midfielder',
      quote: 'The tactical side of the game fascinates me as much as the technical aspects.',
      achievement: 'Professional Debut at Age 16'
    }
  ];

  return (
    <section id="young-talents" className="min-h-screen py-24 bg-gradient-to-b from-[#0A0A0A] to-[#121212]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Young Talents</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover the next generation of football stars. Our development programs identify and nurture 
            exceptional young talent, providing them with the platform to reach their full potential.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {talents.map((talent, index) => (
            <motion.div
              key={talent.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              variants={fadeIn}
            >
              <Card className="bg-[#1A1A1A] border-0 shadow-xl overflow-hidden h-full">
                <div className="bg-gradient-to-tr from-blue-900/30 to-purple-900/30 h-48 relative">
                  <div className="absolute top-4 left-4 px-2 py-1 bg-yellow-500/90 text-black rounded text-xs font-medium">
                    SPOTLIGHT
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <User className="w-16 h-16 text-gray-600" />
                  </div>
                </div>
                
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{talent.name}</h3>
                      <p className="text-gray-400 text-sm">{talent.age} years • {talent.country}</p>
                    </div>
                    <div className="flex">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="block text-sm text-gray-400 mb-1">Position</span>
                    <span className="text-white">{talent.position}</span>
                  </div>
                  
                  <div className="mb-4 p-3 bg-[#252525] rounded-lg">
                    <div className="flex gap-2 mb-2">
                      <MessageSquare className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                      <p className="text-sm italic text-gray-300">"{talent.quote}"</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-gray-300">{talent.achievement}</span>
                  </div>
                  
                  <Button variant="outline" className="w-full">View Full Profile</Button>
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
          className="bg-[#1A1A1A] rounded-lg p-8 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-4">Development Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium text-blue-400 mb-2">Elite Academy Partnership</h4>
              <p className="text-gray-300 mb-4">
                Our exclusive partnerships with top academies worldwide ensure young talents receive world-class
                training while maintaining academic excellence. We coordinate regular scouting events and
                provide comprehensive support throughout the development process.
              </p>
              <Button variant="link" className="text-blue-400 p-0">Learn more about our Academy Network</Button>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-purple-400 mb-2">GIC Mentorship Program</h4>
              <p className="text-gray-300 mb-4">
                Young talents are paired with established professionals and former stars who provide
                guidance on and off the field. This unique program addresses the mental, physical, and
                professional aspects of a developing career in football.
              </p>
              <Button variant="link" className="text-purple-400 p-0">Discover our Mentorship Approach</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YoungTalents;
