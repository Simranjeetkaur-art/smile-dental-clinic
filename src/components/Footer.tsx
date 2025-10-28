import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-serif font-bold mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M12 2c-4 0-8 2-8 8s4 10 8 10 8-4 8-10-4-8-8-8z" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                </svg>
              </div>
              <span>Bright Smile</span>
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
              Your trusted partner in oral health, providing comprehensive dental care 
              with expertise and compassion since 2008.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-smooth"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-smooth"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Services", "About", "Team", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-background/70 hover:text-background transition-smooth"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Our Services</h3>
            <ul className="space-y-3 text-background/70">
              <li>General Dentistry</li>
              <li>Cosmetic Dentistry</li>
              <li>Orthodontics</li>
              <li>Dental Implants</li>
              <li>Root Canal Treatment</li>
              <li>Pediatric Dentistry</li>
              <li>Emergency Care</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-background/70 leading-relaxed">
                  123 Dental Avenue<br />
                  Suite 100<br />
                  Your City, ST 12345
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:5551234567"
                  className="text-background/70 hover:text-background transition-smooth"
                >
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@brightsmile.dental"
                  className="text-background/70 hover:text-background transition-smooth"
                >
                  info@brightsmile.dental
                </a>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-background/5 rounded-xl">
              <p className="text-sm text-background/70 mb-2">Office Hours:</p>
              <p className="text-sm">Mon-Fri: 8AM - 6PM</p>
              <p className="text-sm">Sat: 9AM - 3PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">
              © {currentYear} Bright Smile Dental Clinic. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-background/70 hover:text-background transition-smooth">
                Privacy Policy
              </button>
              <button className="text-background/70 hover:text-background transition-smooth">
                Terms of Service
              </button>
              <button className="text-background/70 hover:text-background transition-smooth">
                HIPAA Compliance
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
