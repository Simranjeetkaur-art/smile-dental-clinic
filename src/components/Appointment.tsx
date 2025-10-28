import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Phone, Mail, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simulate form submission
    setSubmitted(true);
    toast.success("Appointment request sent! We'll contact you soon.");
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="appointment" className="py-24 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Schedule Your Visit Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take the first step towards a healthier, brighter smile
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="bg-card rounded-3xl p-8 shadow-large">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircle2 className="w-20 h-20 text-primary mb-6" />
                <h3 className="text-3xl font-serif font-bold mb-4 text-foreground">
                  Request Received!
                </h3>
                <p className="text-muted-foreground text-lg">
                  Thank you for choosing Bright Smile Dental. We'll contact you shortly to confirm your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Phone Number *
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="h-12"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Preferred Date
                    </label>
                    <Input
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Preferred Time
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full h-12 px-3 rounded-lg border border-input bg-background"
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (8AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 5PM)</option>
                      <option value="evening">Evening (5PM - 6PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    Service Type
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-12 px-3 rounded-lg border border-input bg-background"
                  >
                    <option value="">Select a service</option>
                    <option value="checkup">General Checkup</option>
                    <option value="cleaning">Teeth Cleaning</option>
                    <option value="cosmetic">Cosmetic Consultation</option>
                    <option value="orthodontics">Orthodontics</option>
                    <option value="implants">Dental Implants</option>
                    <option value="emergency">Emergency Care</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    Additional Notes
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your dental concerns or questions..."
                    className="min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-primary text-white h-14 text-lg hover:opacity-90 transition-smooth"
                >
                  Book Appointment
                </Button>
              </form>
            )}
          </div>

          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-card rounded-3xl p-8 shadow-soft">
              <h3 className="text-2xl font-serif font-bold mb-6 text-foreground">
                Office Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-semibold text-foreground">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-semibold text-foreground">9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-semibold text-destructive">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-soft">
              <h3 className="text-2xl font-serif font-bold mb-6 text-foreground">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:5551234567"
                  className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-smooth group"
                >
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                      (555) 123-4567
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@brightsmile.dental"
                  className="flex items-center gap-4 p-4 bg-secondary/5 rounded-xl hover:bg-secondary/10 transition-smooth group"
                >
                  <Mail className="w-6 h-6 text-secondary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-semibold text-foreground group-hover:text-secondary transition-smooth">
                      info@brightsmile.dental
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-primary rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Emergency? Call Now!
              </h3>
              <p className="mb-4 text-white/90">
                We offer same-day emergency appointments for urgent dental issues.
              </p>
              <a
                href="tel:5551234567"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-smooth"
              >
                <Phone className="w-5 h-5" />
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
