import { Award, Zap, Armchair, Calendar, CreditCard, Shield } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Experienced Doctors",
      description: "Board-certified professionals with decades of combined experience",
      color: "text-primary",
    },
    {
      icon: Zap,
      title: "Advanced Technology",
      description: "State-of-the-art equipment for precise, comfortable treatments",
      color: "text-secondary",
    },
    {
      icon: Armchair,
      title: "Comfortable Environment",
      description: "Spa-like atmosphere designed for your relaxation and peace of mind",
      color: "text-accent",
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Evening and weekend appointments to fit your busy lifestyle",
      color: "text-primary",
    },
    {
      icon: CreditCard,
      title: "Payment Plans",
      description: "Affordable financing options and insurance accepted",
      color: "text-secondary",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Strict sterilization protocols and HIPAA-compliant practices",
      color: "text-accent",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Why Patients Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference that dedicated care and modern dentistry can make
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl hover:bg-muted/50 transition-smooth group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 transition-smooth">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-serif font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-70">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary font-serif">15+</div>
            <div className="text-sm text-muted-foreground">Years in Practice</div>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary font-serif">10k+</div>
            <div className="text-sm text-muted-foreground">Satisfied Patients</div>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="text-center">
            <div className="text-3xl font-bold text-accent font-serif">98%</div>
            <div className="text-sm text-muted-foreground">Would Recommend</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
