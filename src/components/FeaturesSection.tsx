import { Button } from "@/components/ui/button";

export function FeaturesSection() {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast Delivery",
      description: "3-day average turnaround. No months of waiting. Your business needs speed.",
      highlight: "3 Days"
    },
    {
      icon: "📱",
      title: "Mobile-First Design",
      description: "80% of your traffic is mobile. We design for phones first, desktop second.",
      highlight: "Mobile Ready"
    },
    {
      icon: "🚀",
      title: "SEO Optimized",
      description: "Built to rank. Clean code, fast loading, optimized for Google from day one.",
      highlight: "Google Loves It"
    },
    {
      icon: "🎯",
      title: "Conversion Focused",
      description: "Pretty doesn't pay bills. Every element designed to turn visitors into customers.",
      highlight: "Sales Machine"
    },
    {
      icon: "🔧",
      title: "Custom Coded",
      description: "No WordPress plugins. Hand-coded React for maximum performance and security.",
      highlight: "Premium Code"
    },
    {
      icon: "💬",
      title: "Direct Communication",
      description: "DM me anytime. No corporate bullshit. Just real talk about your vision.",
      highlight: "Real Human"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            Why Choose <span className="bg-gradient-accent bg-clip-text text-transparent">Me?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm not just another web designer. I'm the plug for websites that actually work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-glow group animate-slide-up-fade"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <div className="mb-3">
                <span className="inline-block bg-gradient-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {feature.highlight}
                </span>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center bg-gradient-primary rounded-3xl p-12 animate-slide-up-fade">
          <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Ready to Stop Looking Amateur?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the creators, entrepreneurs, and hustlers who chose premium over basic.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl">
              Book Your Spot Now
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              See Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}