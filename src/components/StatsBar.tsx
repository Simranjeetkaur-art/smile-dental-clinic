import { Users, Stethoscope, Building2, Calendar, Sparkles, Award, Crown } from "lucide-react";

const StatsBar = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Patients" },
    { icon: Stethoscope, value: "50+", label: "Expert Dentists" },
    { icon: Building2, value: "5", label: "Clinic Locations" },
    { icon: Calendar, value: "7 Days", label: "Open" },
    { icon: Sparkles, value: "500+", label: "Implants" },
    { icon: Award, value: "800+", label: "Dentures" },
    { icon: Crown, value: "2,000+", label: "Crowns" },
  ];

  return (
    <div className="bg-gradient-primary py-4 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-8 flex-wrap">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 text-white animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold font-serif">{stat.value}</div>
                  <div className="text-sm text-white/90">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
