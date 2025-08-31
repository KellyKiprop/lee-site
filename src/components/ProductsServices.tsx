import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import uvDtfImage from "@/assets/uv-dtf-printer.jpg";
import ecoSolventImage from "@/assets/eco-solvent-printer.jpg";
import cncRouterImage from "@/assets/cnc-router.jpg";
import laserCuttingImage from "@/assets/laser-cutting.jpg";
import ejectDtfImage from "@/assets/eject-dtf-printer.jpg";
import uvPrinterImage from "@/assets/uv-printer.jpg";
import largeFormatImage from "@/assets/large-format-printer.jpg";

const ProductsServices = () => {
  const products = [
    {
      title: "UV DTF Printers",
      description: "High-quality UV DTF printing technology for durable, vibrant transfers on various materials.",
      image: uvDtfImage,
      features: ["Direct-to-film printing", "UV-resistant inks", "High resolution output"]
    },
    {
      title: "Eco Solvent Printers",
      description: "Environmentally friendly large format printing solutions for outdoor and indoor applications.",
      image: ecoSolventImage,
      features: ["Eco-friendly inks", "Weather resistant", "Wide format capability"]
    },
    {
      title: "CNC Routers",
      description: "Precision cutting and engraving machines for wood, plastic, and composite materials.",
      image: cncRouterImage,
      features: ["Computer controlled", "High precision", "Multi-material capability"]
    },
    {
      title: "Laser Cutting & Engraving",
      description: "Advanced laser systems for precise cutting and detailed engraving applications.",
      image: laserCuttingImage,
      features: ["High precision cutting", "Detailed engraving", "Multiple material types"]
    },
    {
      title: "Eject DTF Printers",
      description: "Innovative direct-to-film printers with automatic ejection systems for increased productivity.",
      image: ejectDtfImage,
      features: ["Automatic ejection", "High productivity", "Consistent quality"]
    },
    {
      title: "UV Printers",
      description: "Versatile UV printing systems for rigid and flexible substrates with instant curing.",
      image: uvPrinterImage,
      features: ["Instant UV curing", "Rigid & flexible media", "Professional quality"]
    },
    {
      title: "Large Format Printers",
      description: "Professional wide-format printing solutions for banners, signage, and display graphics.",
      image: largeFormatImage,
      features: ["Wide format printing", "High resolution", "Professional output"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Products & <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive printing solutions tailored to meet your business needs with cutting-edge technology and professional support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden border-border/50 bg-background hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={scrollToContact}
                  variant="outline" 
                  className="w-full border-primary/30 hover:bg-primary/10"
                >
                  Get Information
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team of experts can help you find the perfect printing solution for your specific requirements. Contact us for personalized recommendations.
            </p>
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsServices;