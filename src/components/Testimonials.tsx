import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      treatment: "Cosmetic Dentistry",
      rating: 5,
      text: "Dr. Johnson transformed my smile completely! I'm so much more confident now. The entire team was professional, caring, and made me feel comfortable throughout the process.",
      date: "2 weeks ago",
    },
    {
      name: "Robert Thompson",
      treatment: "Dental Implants",
      rating: 5,
      text: "After years of dental problems, Dr. Wilson gave me a permanent solution with implants. The procedure was painless, and the results are amazing. Highly recommend!",
      date: "1 month ago",
    },
    {
      name: "Lisa Anderson",
      treatment: "Orthodontics",
      rating: 5,
      text: "My daughter's experience with Dr. Chen for Invisalign was wonderful. He explained everything clearly, and the results exceeded our expectations. Worth every penny!",
      date: "3 weeks ago",
    },
    {
      name: "Michael Brown",
      treatment: "General Dentistry",
      rating: 5,
      text: "Best dental clinic I've ever been to! The staff is friendly, the facility is spotless, and they always accommodate my schedule. My whole family comes here now.",
      date: "1 week ago",
    },
    {
      name: "Emily Davis",
      treatment: "Pediatric Dentistry",
      rating: 5,
      text: "Dr. Rodriguez is amazing with kids! My son was terrified of dentists, but now he actually looks forward to his appointments. She's patient, gentle, and makes it fun.",
      date: "2 months ago",
    },
    {
      name: "David Wilson",
      treatment: "Emergency Care",
      rating: 5,
      text: "Had a dental emergency on a Saturday and they saw me the same day. Dr. Johnson relieved my pain and fixed the problem quickly. Grateful for their excellent care!",
      date: "3 days ago",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from our satisfied patients
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="font-semibold text-foreground">4.9/5.0</span>
              <span className="text-muted-foreground">Google Reviews</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-foreground">
              <span className="font-semibold text-2xl">500+</span>
              <span className="text-muted-foreground ml-2">5-Star Reviews</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-large transition-smooth relative bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-4 right-4" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-primary">{testimonial.treatment}</div>
                <div className="text-xs text-muted-foreground mt-1">{testimonial.date}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
