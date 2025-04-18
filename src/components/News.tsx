import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Calendar, User, ArrowRight, Newspaper } from 'lucide-react';
import { Button } from './ui/button';

const News = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const newsItems = [
    {
      id: 1,
      title: "GIC Sports Completes Record-Breaking Q1 Transfer Period",
      excerpt: "With over €120 million in transfers facilitated, GIC Sports has had its most successful quarter to date, representing players across 12 countries.",
      date: "April 12, 2025",
      author: "Maria Thompson",
      category: "Company Update",
      image: "business"
    },
    {
      id: 2,
      title: "New Partnership with Leading European Academy Announced",
      excerpt: "GIC Sports is proud to announce an exclusive partnership with FC Advancement, one of Europe's premier youth development institutions.",
      date: "April 5, 2025",
      author: "James Wilson",
      category: "Partnerships",
      image: "partnership"
    },
    {
      id: 3,
      title: "GSC Token Sees 40% Growth Following Platform Expansion",
      excerpt: "The GSC token has experienced significant growth following the expansion of GIC's Web3 ecosystem, particularly the launch of the new scouting platform.",
      date: "March 28, 2025",
      author: "Alex Chen",
      category: "Web3",
      image: "crypto"
    }
  ];

  const pressReleases = [
    {
      id: 1,
      title: "GIC Sports Expands Operations to South America",
      date: "March 15, 2025"
    },
    {
      id: 2,
      title: "Annual Talent Showcase Dates Announced",
      date: "March 8, 2025"
    },
    {
      id: 3,
      title: "GIC Foundation Launches Youth Scholarship Program",
      date: "February 27, 2025"
    }
  ];

  return (
    <section id="news" className="min-h-screen py-16 sm:py-24 bg-gradient-to-b from-[#121212] to-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Latest News</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto px-4">
            Stay updated with the latest developments at GIC Sports
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              variants={fadeIn}
            >
              <Card className="bg-[#1A1A1A] border-0 shadow-xl overflow-hidden h-full">
                <div className={`bg-gradient-to-tr ${
                  item.image === 'business' ? 'from-blue-900/30 to-purple-900/30' :
                  item.image === 'partnership' ? 'from-teal-900/30 to-blue-900/30' :
                  'from-purple-900/30 to-pink-900/30'
                } aspect-video relative`}>
                  <div className="absolute top-4 left-4 px-2 py-1 bg-blue-500/90 text-white rounded text-xs font-medium">
                    {item.category}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{item.title}</h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">{item.excerpt}</p>
                  
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{item.date}</span>
                    <User className="w-4 h-4 mr-1" />
                    <span>{item.author}</span>
                  </div>
                  
                  <Button variant="link" className="px-0 text-blue-400">
                    Read more <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
            className="lg:col-span-2"
          >
            <Card className="bg-[#1A1A1A] border-0 shadow-xl overflow-hidden h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Newspaper className="text-purple-400 w-5 h-5" />
                  <h3 className="text-xl font-semibold">Featured Interview</h3>
                </div>
                
                <h4 className="text-2xl font-bold mb-4">
                  "The Future of Sports Management is Decentralized"
                </h4>
                
                <p className="text-gray-300 mb-3">
                  In an exclusive interview, GIC Sports CEO Marco Rossetti discusses how blockchain technology
                  and Web3 innovations are transforming the sports management industry, creating new opportunities
                  for athletes, clubs, and fans alike.
                </p>
                
                <blockquote className="border-l-4 border-purple-500 pl-4 my-6 italic text-gray-300">
                  "We're witnessing a paradigm shift in how value is created and distributed in sports. 
                  With blockchain technology, we're able to create more direct, transparent relationships
                  between athletes and their supporters."
                </blockquote>
                
                <p className="text-gray-300 mb-6">
                  Rossetti outlines GIC's vision for a sports ecosystem where athlete performance data,
                  contract negotiations, and fan engagement all benefit from the transparency and efficiency
                  of blockchain technology.
                </p>
                
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Read Full Interview
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
            <Card className="bg-[#1A1A1A] border-0 shadow-xl overflow-hidden h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Press Releases</h3>
                
                <div className="space-y-4">
                  {pressReleases.map((release) => (
                    <div key={release.id} className="border-b border-gray-800 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-start">
                        <Calendar className="w-4 h-4 text-gray-400 mt-1 mr-2" />
                        <div>
                          <span className="block text-sm text-gray-400">{release.date}</span>
                          <h4 className="font-medium mt-1">{release.title}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    View All Press Releases
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-6">
              <h4 className="font-medium mb-2">Subscribe to Our Newsletter</h4>
              <p className="text-gray-300 text-sm mb-4">
                Stay informed with our latest news, events, and updates delivered directly to your inbox.
              </p>
              
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 bg-[#252525] rounded-md border-gray-700 p-2 text-sm"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default News;
