
import React from "react";
import { Shield, Clock, Globe, Gift, Percent, CreditCard } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: <Shield className="h-10 w-10 text-card-blue" />,
      title: "Fraud Protection",
      description: "24/7 monitoring and zero liability protection for unauthorized charges."
    },
    {
      id: 2,
      icon: <Clock className="h-10 w-10 text-card-blue" />,
      title: "Instant Approval",
      description: "Get approved in minutes with our streamlined application process."
    },
    {
      id: 3,
      icon: <Globe className="h-10 w-10 text-card-blue" />,
      title: "Global Acceptance",
      description: "Use your card worldwide with no foreign transaction fees."
    },
    {
      id: 4,
      icon: <Gift className="h-10 w-10 text-card-blue" />,
      title: "Exclusive Rewards",
      description: "Earn points on every purchase redeemable for travel, cash back, and more."
    },
    {
      id: 5,
      icon: <Percent className="h-10 w-10 text-card-blue" />,
      title: "Low Interest Rates",
      description: "Competitive APRs starting as low as 12.99% for qualified applicants."
    },
    {
      id: 6,
      icon: <CreditCard className="h-10 w-10 text-card-blue" />,
      title: "Virtual Cards",
      description: "Generate instant virtual cards for secure online shopping."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Card Benefits</h2>
          <p className="text-lg text-card-gray-dark max-w-2xl mx-auto">
            Enjoy premium benefits and protections with every CardBright credit card.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-card-gray-light p-6 rounded-lg transition-all duration-300 hover:shadow-md">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-card-blue">{benefit.title}</h3>
              <p className="text-card-gray-dark">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
