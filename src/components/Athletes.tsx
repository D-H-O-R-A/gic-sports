
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Filter, Play, User } from 'lucide-react';
import { Button } from './ui/button';

const Athletes = () => {
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedPosition, setSelectedPosition] = useState('all');
  const [selectedAge, setSelectedAge] = useState('all');
  const [selectedClub, setSelectedClub] = useState('all');

  const countries = ['all', 'brazil', 'france', 'spain', 'england', 'germany'];
  const positions = ['all', 'forward', 'midfielder', 'defender', 'goalkeeper'];
  const ages = ['all', 'u21', '22-25', '26-30', '30+'];
  const clubs = ['all', 'barcelona', 'psg', 'man-united', 'bayern', 'juventus'];

  const athletes = [
    { id: 1, name: 'Carlos Silva', country: 'brazil', position: 'forward', age: 'u21', club: 'barcelona' },
    { id: 2, name: 'Jean Dupont', country: 'france', position: 'midfielder', age: '22-25', club: 'psg' },
    { id: 3, name: 'Miguel Rodriguez', country: 'spain', position: 'defender', age: '26-30', club: 'barcelona' },
    { id: 4, name: 'John Smith', country: 'england', position: 'goalkeeper', age: '30+', club: 'man-united' },
    { id: 5, name: 'Hans Weber', country: 'germany', position: 'midfielder', age: '22-25', club: 'bayern' },
    { id: 6, name: 'Marco Rossi', country: 'spain', position: 'forward', age: '26-30', club: 'juventus' },
  ];

  const filteredAthletes = athletes.filter(athlete => 
    (selectedCountry === 'all' || athlete.country === selectedCountry) &&
    (selectedPosition === 'all' || athlete.position === selectedPosition) &&
    (selectedAge === 'all' || athlete.age === selectedAge) &&
    (selectedClub === 'all' || athlete.club === selectedClub)
  );

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="athletes" className="min-h-screen py-24 bg-gradient-to-b from-[#121212] to-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Athletes Represented</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
          className="mb-12"
        >
          <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-medium">Filter Athletes</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Country</label>
                <select 
                  className="w-full bg-[#252525] rounded-md border-gray-700 p-2 text-sm"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  {countries.map(country => (
                    <option key={country} value={country}>
                      {country === 'all' ? 'All Countries' : country.charAt(0).toUpperCase() + country.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Position</label>
                <select 
                  className="w-full bg-[#252525] rounded-md border-gray-700 p-2 text-sm"
                  value={selectedPosition}
                  onChange={(e) => setSelectedPosition(e.target.value)}
                >
                  {positions.map(position => (
                    <option key={position} value={position}>
                      {position === 'all' ? 'All Positions' : position.charAt(0).toUpperCase() + position.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Age Group</label>
                <select 
                  className="w-full bg-[#252525] rounded-md border-gray-700 p-2 text-sm"
                  value={selectedAge}
                  onChange={(e) => setSelectedAge(e.target.value)}
                >
                  {ages.map(age => (
                    <option key={age} value={age}>
                      {age === 'all' ? 'All Ages' : age.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Club</label>
                <select 
                  className="w-full bg-[#252525] rounded-md border-gray-700 p-2 text-sm"
                  value={selectedClub}
                  onChange={(e) => setSelectedClub(e.target.value)}
                >
                  {clubs.map(club => (
                    <option key={club} value={club}>
                      {club === 'all' ? 'All Clubs' : club.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAthletes.map((athlete, index) => (
            <motion.div
              key={athlete.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              variants={fadeIn}
            >
              <Card className="bg-[#1A1A1A] border-0 shadow-xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-tr from-blue-900/30 to-purple-900/30 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <User className="w-16 h-16 text-gray-600" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A1A1A] to-transparent h-24"></div>
                </div>
                
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{athlete.name}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                      {athlete.country.charAt(0).toUpperCase() + athlete.country.slice(1)}
                    </span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">
                      {athlete.position.charAt(0).toUpperCase() + athlete.position.slice(1)}
                    </span>
                    <span className="px-2 py-1 bg-teal-500/20 text-teal-400 rounded text-xs">
                      {athlete.age.toUpperCase()}
                    </span>
                  </div>
                  
                  <Tabs defaultValue="stats">
                    <TabsList className="grid grid-cols-3 mb-4">
                      <TabsTrigger value="stats">Stats</TabsTrigger>
                      <TabsTrigger value="history">History</TabsTrigger>
                      <TabsTrigger value="videos">Videos</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="stats" className="text-sm text-gray-300">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-gray-400">Age:</span>
                          <span>25</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-400">Height:</span>
                          <span>185 cm</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-400">Weight:</span>
                          <span>78 kg</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-400">Preferred Foot:</span>
                          <span>Right</span>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="history" className="text-sm text-gray-300">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>2020-Present</span>
                          <span>{athlete.club.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>2018-2020</span>
                          <span>Previous Club</span>
                        </div>
                        <div className="flex justify-between">
                          <span>2016-2018</span>
                          <span>Youth Academy</span>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="videos" className="text-sm text-gray-300">
                      <Button variant="ghost" className="w-full flex items-center justify-center gap-2 border border-gray-700">
                        <Play className="w-4 h-4" />
                        <span>Watch Highlights</span>
                      </Button>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <Button variant="link" className="text-blue-400 p-0 text-sm">
                      Contact Agent
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Athletes;
