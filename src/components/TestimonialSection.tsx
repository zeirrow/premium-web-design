import { Button } from "@/components/ui/button";
import testimonialImage from "@/assets/testimonial-person.jpg";

export function TestimonialSection() {
  return (
    <section className="py-20 bg-gradient-card relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-0 w-64 h-64 rounded-full bg-electric blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-64 h-64 rounded-full bg-neon-pink blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            Don't Take My <span className="bg-gradient-accent bg-clip-text text-transparent">Word</span> For It
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here's what happens when you stop settling for basic websites.
          </p>
        </div>

        {/* Main testimonial */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up-fade">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Profile */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  <img 
                    src={testimonialImage} 
                    alt="Client testimonial" 
                    className="w-32 h-32 rounded-full object-cover border-4 border-electric"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-accent text-white text-xs font-bold px-2 py-1 rounded-full">
                    ✓ Verified
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-foreground mb-2">Marcus Chen</h4>
                <p className="text-muted-foreground mb-2">@marcusdrops</p>
                <p className="text-sm text-electric">250K TikTok followers</p>
              </div>

              {/* Testimonial content */}
              <div className="lg:col-span-2">
                <div className="text-6xl text-electric opacity-50 font-bold mb-4">"</div>
                
                <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed mb-6">
                  "Before: My old site looked like it was made in 2015. Visitors would bounce instantly. 
                  After: <span className="bg-gradient-accent bg-clip-text text-transparent font-bold">My conversion rate went from 2% to 8.5%</span>. 
                  This guy doesn't just build websites, he builds money machines."
                </blockquote>

                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="bg-gradient-primary text-white px-4 py-2 rounded-full font-semibold">
                    🚀 325% revenue increase
                  </div>
                  <div className="bg-gradient-accent text-white px-4 py-2 rounded-full font-semibold">
                    ⚡ Delivered in 2 days
                  </div>
                  <div className="bg-electric text-black px-4 py-2 rounded-full font-semibold">
                    📱 Mobile conversion champion
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Before/After showcase */}
        <div className="max-w-4xl mx-auto mb-16 animate-slide-up-fade">
          <h3 className="text-3xl font-bold text-center mb-8">
            The <span className="text-red-500">Before</span> vs <span className="text-electric">After</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-4">
                <h4 className="text-lg font-bold text-red-400 mb-3">❌ Old Website</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• WordPress template (looked like everyone else)</li>
                  <li>• 6-second load time</li>
                  <li>• Mobile site was broken</li>
                  <li>• 2% conversion rate</li>
                  <li>• Zero social proof</li>
                </ul>
              </div>
              
              <div className="text-center text-red-400 font-bold">
                💔 Losing money daily
              </div>
            </div>

            {/* After */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="bg-electric/10 border border-electric/20 rounded-xl p-6 mb-4">
                <h4 className="text-lg font-bold text-electric mb-3">✅ New Website</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Custom React build (unique AF)</li>
                  <li>• Sub-2-second load time</li>
                  <li>• Mobile-first design</li>
                  <li>• 8.5% conversion rate</li>
                  <li>• Built-in social proof</li>
                </ul>
              </div>
              
              <div className="text-center text-electric font-bold">
                💰 Making money 24/7
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-slide-up-fade">
          <div className="bg-gradient-primary rounded-3xl p-8 inline-block">
            <h3 className="text-2xl lg:text-3xl font-black text-white mb-4">
              Want Results Like Marcus?
            </h3>
            <Button variant="cta" size="xl">
              Book Your Transformation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}