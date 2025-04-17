
import React from "react";
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card-blue-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CardBright</h3>
            <p className="text-white/80 mb-4">
              Your trusted partner for credit card solutions with transparency and competitive offers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-card-teal transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-white hover:text-card-teal transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-white hover:text-card-teal transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-white hover:text-card-teal transition-colors">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Cashback Plus</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Platinum Rewards</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Prestige Elite</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Student Cards</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Business Cards</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Credit Score Guide</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Balance Transfer Tips</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Reward Point Calculator</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Card Comparison Tool</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Financial Education</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60 text-sm">
          <p>
            © {new Date().getFullYear()} CardBright. All rights reserved. CardBright is not a lender or issuer.
            Credit card offers are subject to credit approval. Terms and conditions apply.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
