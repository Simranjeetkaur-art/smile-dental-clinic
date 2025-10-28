import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Star } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";

const Hero = () => {
  const [counters, setCounters] = useState({ years: 0, patients: 0, satisfaction: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    const heroElement = document.getElementById("hero");
    if (heroElement) observer.observe(heroElement);

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        years: Math.floor(15 * progress),
        patients: Math.floor(10000 * progress),
        satisfaction: Math.floor(98 * progress),
      });

      if (currentStep >= steps) clearInterval(interval);
    }, stepDuration);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center gradient-hero pt-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
              Your Smile Deserves{" "}
              <span className="text-primary">Expert Care</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Experience dental excellence in a comfortable, modern environment. 
              Comprehensive dental services for the whole family with the latest 
              technology and gentle care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("appointment")}
                className="gradient-primary text-white text-lg px-8 py-6 hover:opacity-90 transition-smooth group"
              >
                Book Appointment
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("services")}
                className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
              >
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary font-serif">
                  {counters.years}+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Years Experience
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-4xl font-bold text-secondary font-serif">
                  {counters.patients.toLocaleString()}+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Happy Patients
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-accent font-serif">
                  {counters.satisfaction}%
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-large">
              <img
                src={heroImage}
                alt="Professional dental care at Bright Smile Dental Clinic"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-large p-6 animate-fade-in">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" fill="currentColor" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-foreground">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Patient Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
