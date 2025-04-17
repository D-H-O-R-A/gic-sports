
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, CreditCard, Gem, Award } from "lucide-react";

const CardComparison = () => {
  const cards = [
    {
      id: 1,
      name: "Cashback Plus",
      icon: <CreditCard className="h-10 w-10 text-card-blue" />,
      description: "Perfect for everyday spending with generous cashback rewards.",
      annualFee: "$0",
      apr: "15.99% - 23.99%",
      cashback: "2% on all purchases",
      welcomeBonus: "$200 after spending $1,000 in first 3 months",
      color: "bg-white",
      popular: false,
    },
    {
      id: 2,
      name: "Platinum Rewards",
      icon: <Gem className="h-10 w-10 text-card-teal" />,
      description: "Premium travel benefits with accelerated rewards points.",
      annualFee: "$95",
      apr: "16.99% - 24.99%",
      cashback: "3% on travel, 2% on dining, 1% on everything else",
      welcomeBonus: "50,000 points after spending $3,000 in first 3 months",
      color: "bg-card-gradient text-white",
      popular: true,
    },
    {
      id: 3,
      name: "Prestige Elite",
      icon: <Award className="h-10 w-10 text-card-gold" />,
      description: "Exclusive benefits and concierge services for luxury lifestyles.",
      annualFee: "$495",
      apr: "18.99% - 25.99%",
      cashback: "5% on travel, 3% on dining, 1.5% on everything else",
      welcomeBonus: "75,000 points after spending $5,000 in first 3 months",
      color: "bg-card-gold-gradient text-white",
      popular: false,
    }
  ];

  return (
    <section id="cards" className="py-20 bg-card-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare Our Credit Cards</h2>
          <p className="text-lg text-card-gray-dark max-w-2xl mx-auto">
            Find the perfect card that fits your lifestyle and spending habits with our tailored offerings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <Card key={card.id} className={`${card.color} overflow-hidden transition-all duration-300 hover:shadow-xl relative h-full`}>
              {card.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-card-teal text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}
              <CardHeader>
                <div className="mb-4">{card.icon}</div>
                <CardTitle className={card.color.includes("text-white") ? "text-white" : "text-card-blue"}>
                  {card.name}
                </CardTitle>
                <CardDescription className={card.color.includes("text-white") ? "text-white/80" : "text-card-gray-dark"}>
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-opacity-20 pb-2">
                    <span className={card.color.includes("text-white") ? "text-white/80" : "text-card-gray-dark"}>Annual Fee</span>
                    <span className={card.color.includes("text-white") ? "text-white" : "text-black font-medium"}>{card.annualFee}</span>
                  </div>
                  <div className="flex justify-between border-b border-opacity-20 pb-2">
                    <span className={card.color.includes("text-white") ? "text-white/80" : "text-card-gray-dark"}>APR</span>
                    <span className={card.color.includes("text-white") ? "text-white" : "text-black font-medium"}>{card.apr}</span>
                  </div>
                  <div className="flex justify-between border-b border-opacity-20 pb-2">
                    <span className={card.color.includes("text-white") ? "text-white/80" : "text-card-gray-dark"}>Rewards</span>
                    <span className={card.color.includes("text-white") ? "text-white" : "text-black font-medium"}>{card.cashback}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={card.color.includes("text-white") ? "text-white/80" : "text-card-gray-dark"}>Welcome Bonus</span>
                    <span className={card.color.includes("text-white") ? "text-white" : "text-black font-medium"}>{card.welcomeBonus}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className={
                    card.color.includes("text-white") 
                      ? "w-full bg-white text-card-blue hover:bg-white/90" 
                      : "w-full bg-card-blue text-white hover:bg-card-blue-dark"
                  }
                >
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardComparison;
