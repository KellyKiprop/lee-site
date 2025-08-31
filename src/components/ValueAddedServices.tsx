import { Card, CardContent } from "@/components/ui/card";
import { Shield, GraduationCap, Wrench, CheckCircle } from "lucide-react";

const ValueAddedServices = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/30 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Value Added <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every purchase comes with comprehensive support to ensure your success from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center border-border/50 bg-background/90 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-12 pb-12">
              <div className="bg-gradient-to-br from-primary to-primary-light w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">1 Year Warranty</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Comprehensive warranty coverage on all equipment with full parts and labor protection for complete peace of mind.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Full parts coverage</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Labor included</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Priority support</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50 bg-background/90 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-12 pb-12">
              <div className="bg-gradient-to-br from-primary to-primary-light w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <GraduationCap className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Free User Training</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Comprehensive training programs to ensure your team can operate equipment efficiently and safely from day one.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Hands-on training</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Safety protocols</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Maintenance tips</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50 bg-background/90 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-12 pb-12">
              <div className="bg-gradient-to-br from-primary to-primary-light w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Wrench className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Free Installation</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Professional installation and setup by certified technicians to ensure optimal performance and configuration.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Professional setup</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>System optimization</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Quality testing</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Complete Support Package
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-4xl mx-auto leading-relaxed">
              When you choose Lee Distributors, you're not just buying equipment – you're investing in a partnership. Our comprehensive support ensures your success every step of the way.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Technical Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Satisfied Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueAddedServices;