import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Cog, Target } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Lee Distributors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With years of experience in the printing industry, Lee Distributors has established itself as a trusted partner for businesses seeking reliable printing solutions and exceptional technical support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center border-border/50 bg-background/80 backdrop-blur-sm">
            <CardContent className="pt-8 pb-8">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground text-sm">
                Committed to delivering the highest quality printing solutions
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50 bg-background/80 backdrop-blur-sm">
            <CardContent className="pt-8 pb-8">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Partnership</h3>
              <p className="text-muted-foreground text-sm">
                Building long-term relationships with our valued clients
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50 bg-background/80 backdrop-blur-sm">
            <CardContent className="pt-8 pb-8">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cog className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive technical support and maintenance services
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50 bg-background/80 backdrop-blur-sm">
            <CardContent className="pt-8 pb-8">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground text-sm">
                Staying ahead with the latest printing technology trends
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To provide businesses with cutting-edge printing solutions backed by unparalleled technical expertise and customer service. We believe in empowering our clients with the tools and knowledge they need to succeed.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From initial consultation to ongoing support, we're committed to being your trusted technology partner every step of the way.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Expert Consultation</h4>
                  <p className="text-muted-foreground text-sm">Understanding your unique printing needs and requirements</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Professional Installation</h4>
                  <p className="text-muted-foreground text-sm">Complete setup and configuration by certified technicians</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Ongoing Support</h4>
                  <p className="text-muted-foreground text-sm">Continuous technical support and maintenance services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;