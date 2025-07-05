import { Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does it actually take?",
      answer: "3 days average. I don't do the corporate 'we'll get back to you in 4-6 weeks' bullshit. You need a website yesterday, I deliver this week. Rush jobs in 24-48 hours available for urgent launches."
    },
    {
      question: "How much does this cost?",
      answer: "Starting at $2,997 for a premium landing page that converts. Full websites from $4,997. Think of it this way: if your new site increases conversions by even 2%, it pays for itself in weeks. Plus, payment plans available."
    },
    {
      question: "Do I need hosting or domain stuff?",
      answer: "Nope, I handle everything. Domain setup, hosting recommendations, SSL certificates, the whole technical nightmare. You focus on your business, I handle the tech. One-click deployments included."
    },
    {
      question: "What if I don't like it?",
      answer: "2 rounds of revisions included, plus I show you mockups before coding starts. But real talk: in 2+ years, I've never had an unsatisfied client. I don't just build what you ask for, I build what actually works."
    },
    {
      question: "Is it actually mobile-optimized?",
      answer: "Not just optimized - it's mobile-FIRST. I design for phones before desktop because that's where your traffic lives. Every button, every image, every animation tested on real devices. Your mobile users will thank you."
    },
    {
      question: "Can you integrate with my existing tools?",
      answer: "Email lists, payment processors, analytics, social media, calendars - if it has an API, I can connect it. Mailchimp, Stripe, Calendly, Instagram feeds, you name it. No more juggling 10 different platforms."
    },
    {
      question: "What makes you different from Fiverr designers?",
      answer: "I'm not pushing out templates for $50. This is custom code, conversion psychology, and real business strategy. Plus, I actually respond to messages and speak English. You get a partner, not a vendor."
    },
    {
      question: "Do you do ongoing maintenance?",
      answer: "Optional monthly retainer for updates, security, and new features. But the sites I build are rock-solid from day one. No WordPress vulnerabilities, no plugin conflicts, no 'oops your site is down' surprises."
    }
  ];

  return (
    <section id="faqs" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            Real Talk <span className="bg-gradient-accent bg-clip-text text-transparent">FAQ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No corporate speak. Just straight answers to what you're actually wondering.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 animate-slide-up-fade"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-card border border-border rounded-2xl p-6 hover:bg-card/80 transition-all duration-300 hover:shadow-glow"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg lg:text-xl font-bold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}>
                    +
                  </div>
                </div>
                
                {openIndex === index && (
                  <div className="mt-6 pt-6 border-t border-border animate-slide-up-fade">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 animate-slide-up-fade">
          <div className="bg-gradient-card border border-border rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              DM me directly. I actually respond within hours, not days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/+234*033951020" 
                className="inline-flex items-center justify-center gap-2 bg-gradient-accent text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <span><MessageCircle /></span> WhatsApp Me
              </a>
              <a 
                href="https://instagram.com/zeirrow.dev" 
                className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <span><Instagram /></span> Instagram DM
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}