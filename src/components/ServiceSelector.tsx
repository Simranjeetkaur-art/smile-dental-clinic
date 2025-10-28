import { ClipboardCheck, Drill, Baby, Braces, Calendar, Zap, Sparkles, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceSelector = () => {
  const services = [
    { icon: ClipboardCheck, label: "Regular Check-up", color: "from-blue-400 to-blue-600" },
    { icon: Drill, label: "Dental Implants", color: "from-cyan-400 to-cyan-600" },
    { icon: Baby, label: "Kids Dentistry", color: "from-pink-400 to-pink-600" },
    { icon: Braces, label: "Braces & Aligners", color: "from-purple-400 to-purple-600" },
    { icon: Calendar, label: "Follow Appointment", color: "from-green-400 to-green-600" },
    { icon: Zap, label: "Tooth Pain", color: "from-red-400 to-red-600" },
    { icon: Sparkles, label: "Tooth Cleaning", color: "from-teal-400 to-teal-600" },
    { icon: AlertCircle, label: "Emergency Care", color: "from-orange-400 to-orange-600" },
  ];

  const scrollToAppointment = () => {
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            How can we help you today?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select one option that best describes your need, then click 'Book Appointment'
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <button
                key={index}
                onClick={scrollToAppointment}
                className="flex flex-col items-center gap-4 p-6 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-smooth hover:scale-105 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-smooth`}>
                  <Icon className="w-8 h-8" />
                </div>
                <span className="text-sm font-semibold text-center text-foreground">
                  {service.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToAppointment}
            variant="orange"
            size="lg"
            className="text-lg px-8 py-6 h-auto"
          >
            Book Your Appointment Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSelector;
