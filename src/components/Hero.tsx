
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-24 pb-20 bg-hero-pattern text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find Your Perfect Credit Card
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Compare top credit cards with exclusive rewards, cashback, and low interest rates. Apply in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-card-blue hover:bg-gray-100 text-lg px-8 py-6">
                Compare Cards
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-full h-full bg-card-blue rounded-xl transform rotate-6"></div>
              <div className="absolute -top-3 -left-3 w-full h-full bg-card-teal rounded-xl transform rotate-3"></div>
              <div className="relative bg-card-gradient rounded-xl p-8 shadow-2xl w-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="text-white font-bold">CardBright Rewards</div>
                  <div className="text-white/80">Platinum</div>
                </div>
                <div className="h-12 w-16 bg-gold-100/20 rounded-md mb-6"></div>
                <div className="text-lg text-white/90 mb-1">•••• •••• •••• 4242</div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs text-white/70 uppercase">Card Holder</div>
                    <div className="text-white">J. SMITH</div>
                  </div>
                  <div>
                    <div className="text-xs text-white/70 uppercase">Expires</div>
                    <div className="text-white">12/28</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
