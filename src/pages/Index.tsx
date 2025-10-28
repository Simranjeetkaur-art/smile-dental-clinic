import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ReviewsHighlight from "@/components/ReviewsHighlight";
import ServiceSelector from "@/components/ServiceSelector";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Appointment from "@/components/Appointment";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <StatsBar />
        <ReviewsHighlight />
        <ServiceSelector />
        <Services />
        <WhyChooseUs />
        <Team />
        <Testimonials />
        <Appointment />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
