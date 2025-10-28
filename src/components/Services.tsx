import { Sparkles, Smile, Braces, Drill, Heart, Baby, Clock, Stethoscope } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Dentistry",
      description: "Comprehensive checkups, professional cleanings, and preventive care to maintain optimal oral health.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with teeth whitening, veneers, and bonding for a confident, radiant appearance.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Braces,
      title: "Orthodontics",
      description: "Straighten your teeth with braces, Invisalign, and advanced alignment solutions for all ages.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Drill,
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Heart,
      title: "Root Canal Treatment",
      description: "Pain-free endodontic procedures to save infected teeth and relieve discomfort.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Smile,
      title: "Periodontal Care",
      description: "Expert treatment for gum disease, scaling, and maintenance of healthy gums.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Baby,
      title: "Pediatric Dentistry",
      description: "Gentle, specialized dental care for children in a fun, welcoming environment.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Clock,
      title: "Emergency Care",
      description: "Same-day appointments for urgent dental issues. We're here when you need us most.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Dental Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive care tailored to your unique needs, delivered with expertise and compassion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-large transition-smooth hover:-translate-y-2 group cursor-pointer bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                  <Icon className={`w-7 h-7 ${service.color}`} />
                </div>
                
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <button className="mt-4 text-primary font-semibold hover:text-secondary transition-smooth flex items-center gap-2 group-hover:gap-3">
                  Learn More
                  <span>→</span>
                </button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
