import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Github, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">GIC Sports</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Pioneering the integration of sports management and Web3 technology to create value for
              athletes, clubs, and fans worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('athletes')} className="text-gray-300 hover:text-white transition-colors">Athletes</button></li>
              <li><button onClick={() => scrollToSection('young-talents')} className="text-gray-300 hover:text-white transition-colors">Young Talents</button></li>
              <li><button onClick={() => scrollToSection('scouting')} className="text-gray-300 hover:text-white transition-colors">Scouting Platform</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Web3</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('web3')} className="text-gray-300 hover:text-white transition-colors">GSC Blockchain</button></li>
              <li><button onClick={() => scrollToSection('exchange')} className="text-gray-300 hover:text-white transition-colors">Exchange</button></li>
              <li><button onClick={() => scrollToSection('exchange')} className="text-gray-300 hover:text-white transition-colors">DEX</button></li>
              <li><button onClick={() => scrollToSection('exchange')} className="text-gray-300 hover:text-white transition-colors">GIC Wallet</button></li>
              <li><button onClick={() => scrollToSection('whitepaper')} className="text-gray-300 hover:text-white transition-colors">Whitepaper</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('news')} className="text-gray-300 hover:text-white transition-colors">News</button></li>
              <li><button onClick={() => scrollToSection('deals')} className="text-gray-300 hover:text-white transition-colors">Completed Deals</button></li>
              <li><button onClick={() => scrollToSection('roadmap')} className="text-gray-300 hover:text-white transition-colors">Roadmap</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} GIC Sports. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center sm:justify-end gap-4">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Legal</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-900/10 to-purple-900/10 rounded-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-medium mb-1">Stay up to date with GIC</h4>
              <p className="text-gray-300 text-sm">Subscribe to our newsletter for updates.</p>
            </div>
            
            <div className="flex w-full sm:w-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-[#252525] rounded-l-md border-y border-l border-gray-700 p-2 text-sm min-w-[200px] sm:min-w-[300px]"
              />
              <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
                Subscribe <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
