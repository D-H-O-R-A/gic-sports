
import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <div className="text-card-blue font-bold text-2xl">CardBright</div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#cards" className="text-card-gray-dark hover:text-card-blue transition-colors">
            Cards
          </a>
          <a href="#benefits" className="text-card-gray-dark hover:text-card-blue transition-colors">
            Benefits
          </a>
          <a href="#features" className="text-card-gray-dark hover:text-card-blue transition-colors">
            Features
          </a>
          <a href="#apply" className="text-card-gray-dark hover:text-card-blue transition-colors">
            Apply
          </a>
        </div>
        <div>
          <Button className="bg-card-blue hover:bg-card-blue-dark">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
