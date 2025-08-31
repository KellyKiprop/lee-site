import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Award, Zap, HeadphonesIcon, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Star,
      title: "Professional Excellence",
      description: "Decades of experience in the printing industry with a proven track record of delivering exceptional results."
    },
    {
      icon: Users,
      title: "Trusted Service",
      description: "Hundreds of satisfied customers trust us for their printing technology needs across various industries."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Only the highest quality equipment from reputable manufacturers with rigorous testing standards."
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "Quick response times for technical support, maintenance, and emergency service calls."
    },
    {
      icon: HeadphonesIcon,
      title: "Expert Support",
      description: "Dedicated technical support team with deep expertise in all printer technologies we offer."
    },
    {
      icon: TrendingUp,
      title: "Growth Partnership",
      description: "We grow with your business, providing scalable solutions that adapt to your changing needs."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">Lee Distributors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the difference that comes with working with true printing technology professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card key={index} className="border-border/50 bg-background/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Customer Satisfaction is Our Priority
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We measure our success by your success. Our commitment goes beyond selling equipment – we're invested in helping your business achieve its printing and production goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-xs font-bold">✓</span>
                  </div>
                  <span className="text-foreground">Personalized consultation and recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-xs font-bold">✓</span>
                  </div>
                  <span className="text-foreground">Ongoing technical support and maintenance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-xs font-bold">✓</span>
                  </div>
                  <span className="text-foreground">Flexible financing and payment options</span>
                </div>
              </div>
            </div>
            
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-8 border border-border/50">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Customer Satisfaction Rate</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Quality</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Support</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Value</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
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

export default WhyChooseUs;