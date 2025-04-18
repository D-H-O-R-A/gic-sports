
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  return (
    <section id="features" className="py-20 bg-card-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced Card Features</h2>
            <p className="text-lg mb-8">
              Our credit cards come with cutting-edge technology and features designed to make your financial life easier and more secure.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <div className="h-6 w-6 flex items-center justify-center">1</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mobile App Control</h3>
                  <p className="text-white/80">
                    Lock your card, set spending limits, and receive instant transaction alerts from our award-winning mobile app.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <div className="h-6 w-6 flex items-center justify-center">2</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tap-to-Pay Technology</h3>
                  <p className="text-white/80">
                    Make quick, contactless payments with built-in NFC technology at millions of locations worldwide.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <div className="h-6 w-6 flex items-center justify-center">3</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart Purchase Analytics</h3>
                  <p className="text-white/80">
                    Track your spending patterns with AI-powered insights and personalized recommendations to optimize your finances.
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="mt-8 bg-white text-card-blue hover:bg-white/90 group">
              View All Features
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Mobile app interface showing credit card controls" 
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6">
                  <div className="bg-card-blue p-4 rounded-lg shadow-lg">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm text-white/80">User Satisfaction</div>
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

export default Features;
