import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import doctor4 from "@/assets/doctor-4.jpg";

const Team = () => {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      title: "Chief Dentist, DDS",
      specialization: "General & Cosmetic Dentistry",
      experience: "15+ years",
      image: doctor1,
      bio: "Passionate about creating beautiful smiles with advanced cosmetic techniques",
    },
    {
      name: "Dr. Michael Chen",
      title: "Cosmetic Specialist, DMD",
      specialization: "Aesthetic Dentistry",
      experience: "12+ years",
      image: doctor2,
      bio: "Expert in smile makeovers, veneers, and teeth whitening procedures",
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Pediatric Dentist, DDS",
      specialization: "Children's Dentistry",
      experience: "10+ years",
      image: doctor3,
      bio: "Dedicated to making dental visits fun and comfortable for children",
    },
    {
      name: "Dr. James Wilson",
      title: "Oral Surgeon, DDS",
      specialization: "Surgical Procedures",
      experience: "18+ years",
      image: doctor4,
      bio: "Specialized in dental implants, extractions, and complex oral surgery",
    },
  ];

  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Our board-certified dental professionals are committed to providing 
            exceptional care with compassion and expertise
          </p>
          <div className="max-w-3xl mx-auto text-left bg-card p-8 rounded-2xl shadow-soft">
            <h3 className="text-2xl font-serif font-semibold mb-4 text-primary">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Bright Smile Dental Clinic, we believe that everyone deserves access to 
              high-quality dental care in a comfortable, welcoming environment. Our mission 
              is to provide comprehensive dental services that not only treat oral health 
              issues but also promote long-term wellness and confidence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We combine cutting-edge technology with gentle, personalized care to ensure 
              every visit exceeds your expectations. Your smile is our passion, and your 
              comfort is our priority.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-smooth group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.title}`}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-1 text-foreground">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-2">{member.title}</p>
                <p className="text-sm text-muted-foreground mb-3">
                  {member.specialization}
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    {member.experience}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
