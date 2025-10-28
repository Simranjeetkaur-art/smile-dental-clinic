import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept most major dental insurance plans including PPO and HMO plans. We also work with Medicare and Medicaid. Our staff will verify your benefits and help you understand your coverage before any treatment.",
    },
    {
      question: "What should I expect on my first visit?",
      answer: "Your first visit includes a comprehensive dental examination, digital X-rays if needed, oral cancer screening, and a thorough cleaning. We'll discuss your dental history, concerns, and create a personalized treatment plan. The entire visit typically takes 60-90 minutes.",
    },
    {
      question: "Do you offer emergency dental services?",
      answer: "Absolutely! We provide same-day emergency appointments for urgent dental issues such as severe toothaches, broken teeth, lost fillings, or dental trauma. Call us immediately at (555) 123-4567 if you have a dental emergency.",
    },
    {
      question: "Are your treatments painful?",
      answer: "We prioritize your comfort! We use modern anesthetics, gentle techniques, and offer sedation options for anxious patients. Most procedures are virtually pain-free, and we'll ensure you're comfortable throughout your visit.",
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible financing options through CareCredit and in-house payment plans. We believe cost shouldn't prevent you from receiving quality dental care. Our staff will work with you to find an affordable solution.",
    },
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend visiting every six months for routine checkups and cleanings. However, some patients may need more frequent visits depending on their oral health condition. We'll create a schedule that's right for you.",
    },
    {
      question: "Do you treat children?",
      answer: "Yes! Dr. Emily Rodriguez specializes in pediatric dentistry. We provide gentle, age-appropriate care for children of all ages in a fun, welcoming environment. We recommend starting dental visits by age one or when the first tooth appears.",
    },
    {
      question: "What are your office hours?",
      answer: "We're open Monday-Friday from 8:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 3:00 PM. We offer early morning and evening appointments to accommodate your schedule.",
    },
    {
      question: "What safety measures do you have in place?",
      answer: "We follow strict sterilization protocols and CDC guidelines. All instruments are sterilized after each use, we use disposable materials whenever possible, and our facility is regularly sanitized. Your safety is our top priority.",
    },
    {
      question: "How long does teeth whitening take?",
      answer: "In-office professional whitening takes about 60-90 minutes and can brighten your teeth by several shades in one visit. We also offer take-home whitening kits that produce results in 1-2 weeks.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our dental services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 shadow-soft border-0"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <a
              href="tel:5551234567"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-smooth"
            >
              Call Us: (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
