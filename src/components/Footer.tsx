import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Lee Distributors</h3>
            <p className="text-background/80 mb-4 leading-relaxed">
              Your trusted partner in printers & printing technology. Providing professional solutions with exceptional support since our founding.
            </p>
            <div className="flex items-center space-x-2 text-background/80">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Nairobi CBD, Luthuli Avenue</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-background transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-background transition-colors text-sm"
                >
                  Products & Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-background transition-colors text-sm"
                >
                  Value Added Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-background transition-colors text-sm"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+15551234567" className="text-background/80 hover:text-background transition-colors text-sm">
                  +254715 005 558
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@leedistributors.com" className="text-background/80 hover:text-background transition-colors text-sm">
                  leemeshark4@gmail.com
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2 text-sm">Business Hours</h5>
              <p className="text-background/80 text-sm">
                Mon-Fri: 8:00 AM - 6:00 PM<br />
                Sat: 9:00 AM - 3:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © {currentYear} Lee Distributors. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-background/60 hover:text-background transition-colors text-sm">
                Privacy Policy
              </button>
              <button className="text-background/60 hover:text-background transition-colors text-sm">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;