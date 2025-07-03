import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { UrgencySection } from "@/components/UrgencySection";
import { FAQSection } from "@/components/FAQSection";
import { ContactForm } from "@/components/ContactForm";
import { StickyContact } from "@/components/StickyContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Sticky contact elements */}
      <StickyContact />
      
      {/* Main sections */}
      <HeroSection />
      <FeaturesSection />
      <PortfolioSection />
      <TestimonialSection />
      <UrgencySection />
      <FAQSection />
      <div id="contact">
        <ContactForm />
      </div>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Premium Web Design
              </h3>
              <p className="text-muted-foreground text-sm">
                Websites that convert. Built for creators, entrepreneurs, and hustlers who refuse to settle for basic.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Portfolio</div>
                <div>Pricing</div>
                <div>Process</div>
                <div>Contact</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Get In Touch</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <a 
                  href="https://wa.me/1234567890" 
                  className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                >
                  💬
                </a>
                <a 
                  href="https://instagram.com/yourhandle" 
                  className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                >
                  📸
                </a>
                <a 
                  href="mailto:hello@yoursite.com" 
                  className="w-10 h-10 bg-electric rounded-lg flex items-center justify-center text-black hover:scale-110 transition-transform duration-300"
                >
                  ✉️
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Premium Web Design. All rights reserved.</p>
            <p className="mt-2">
              🚀 <span className="text-electric font-semibold">Trusted by creators</span> • 
              ⚡ <span className="text-neon-orange font-semibold">3-day delivery</span> • 
              🎯 <span className="text-neon-pink font-semibold">Conversion focused</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;