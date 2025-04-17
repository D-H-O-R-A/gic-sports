
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="min-h-screen py-24 bg-gradient-to-b from-[#0A0A0A] to-[#121212]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions, feedback, or interested in our services? Reach out to our team through
            any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
          >
            <Card className="bg-[#1A1A1A] border-0 shadow-xl h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-8">Send Us a Message</h3>
                
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Enter your name" 
                      className="bg-[#252525] border-gray-700"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="bg-[#252525] border-gray-700"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      type="text" 
                      placeholder="What is this regarding?" 
                      className="bg-[#252525] border-gray-700"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="How can we help you?" 
                      className="bg-[#252525] border-gray-700 min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
            className="space-y-8"
          >
            <Card className="bg-[#1A1A1A] border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-blue-500/20">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-gray-300">contact@gicsports.com</p>
                      <p className="text-gray-300">support@gicsports.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-purple-500/20">
                      <Phone className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-gray-300">+44 20 1234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-teal-500/20">
                      <MapPin className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Headquarters</h4>
                      <p className="text-gray-300">
                        100 Innovation Way<br />
                        San Francisco, CA 94107<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1A1A1A] border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <a href="#" className="flex items-center gap-3 p-4 rounded-lg bg-[#252525] hover:bg-[#2a2a2a] transition-colors">
                    <Twitter className="w-6 h-6 text-blue-400" />
                    <span>Twitter</span>
                  </a>
                  
                  <a href="#" className="flex items-center gap-3 p-4 rounded-lg bg-[#252525] hover:bg-[#2a2a2a] transition-colors">
                    <Instagram className="w-6 h-6 text-pink-400" />
                    <span>Instagram</span>
                  </a>
                  
                  <a href="#" className="flex items-center gap-3 p-4 rounded-lg bg-[#252525] hover:bg-[#2a2a2a] transition-colors">
                    <Linkedin className="w-6 h-6 text-blue-500" />
                    <span>LinkedIn</span>
                  </a>
                  
                  <a href="#" className="flex items-center gap-3 p-4 rounded-lg bg-[#252525] hover:bg-[#2a2a2a] transition-colors">
                    <Facebook className="w-6 h-6 text-blue-600" />
                    <span>Facebook</span>
                  </a>
                </div>
                
                <div className="mt-8 p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg">
                  <h4 className="font-medium mb-2">For Press Inquiries</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Journalists and media professionals can reach our press team at:
                  </p>
                  <p className="text-blue-400">press@gicsports.com</p>
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
          className="bg-gradient-to-r from-blue-900/10 to-purple-900/10 rounded-lg p-8 shadow-xl border border-blue-500/10"
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Global Reach</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              We have regional offices and representatives across the globe to better serve our clients,
              partners, and athletes.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { region: "North America", cities: "New York, Los Angeles, Toronto" },
                { region: "Europe", cities: "London, Madrid, Paris" },
                { region: "Asia Pacific", cities: "Tokyo, Singapore, Sydney" },
                { region: "Latin America", cities: "São Paulo, Mexico City, Buenos Aires" }
              ].map((location, index) => (
                <div key={index} className="text-center">
                  <h4 className="font-semibold mb-2">{location.region}</h4>
                  <p className="text-gray-400 text-sm">{location.cities}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
