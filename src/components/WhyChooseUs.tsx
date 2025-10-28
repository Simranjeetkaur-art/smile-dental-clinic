import { Award, Shield, Heart, Stethoscope } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "World Class Treatment",
      description: "Premium materials and cutting-edge technology for exceptional results.",
      points: [
        "Globally certified dental partners",
        "Premium materials & cutting-edge tools",
        "Advanced tech: Laser dentistry & 3D scanning",
        "Member of prestigious dental associations"
      ]
    },
    {
      icon: Stethoscope,
      title: "Doctor-Led Patient Care",
      description: "Comprehensive care managed by experienced dental professionals.",
      points: [
        "Expert helpline managed by dentists",
        "50+ doctors delivering consistent care",
        "Treatments reviewed for quality assurance",
        "Structured post-treatment follow-up plans"
      ]
    },
    {
      icon: Heart,
      title: "15+ Years Of Experience",
      description: "Proven track record of successful dental treatments.",
      points: [
        "50+ experienced dental specialists",
        "10,000+ successful root canal treatments",
        "500+ implants placed with precision",
        "2,000+ completed orthodontic treatments"
      ]
    },
    {
      icon: Shield,
      title: "Unmatched Safety Standards",
      description: "Your safety is our top priority with advanced sterilization protocols.",
      points: [
        "10X safety protocols across all clinics",
        "Advanced sterilization technology",
        "4-step process ensuring deep sterilization",
        "Spotless, safe, and hygienic environment"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Why Trust Bright Smile Dental
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience exceptional dental care backed by expertise, technology, and unwavering commitment to your smile
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 ml-2">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
