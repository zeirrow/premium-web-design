import portfolioImage from "@/assets/mobile-portfolio.jpg";

export function PortfolioSection() {
  const projects = [
    {
      title: "Creator Brand",
      description: "TikTok influencer's personal brand site",
      metrics: "2.3x conversion increase",
      color: "from-neon-pink to-electric"
    },
    {
      title: "Startup MVP",
      description: "SaaS product launch website",
      metrics: "10k+ signups in 1 month",
      color: "from-cyber-blue to-primary"
    },
    {
      title: "E-commerce Store",
      description: "Streetwear brand online shop",
      metrics: "180% sales boost",
      color: "from-neon-orange to-accent"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            Real Work, <span className="bg-gradient-accent bg-clip-text text-transparent">Real Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These aren't just pretty pictures. These are conversion machines that pay for themselves.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Portfolio showcase */}
          <div className="relative animate-slide-up-fade">
            <div className="relative">
              <img 
                src={portfolioImage} 
                alt="Mobile portfolio showcase" 
                className="w-full rounded-3xl shadow-card hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating stats */}
              <div className="absolute -top-6 -right-6 bg-gradient-accent text-white p-4 rounded-2xl shadow-neon animate-bounce-in">
                <div className="text-2xl font-black">97%</div>
                <div className="text-sm">Mobile Optimized</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-primary text-white p-4 rounded-2xl shadow-neon animate-bounce-in" style={{animationDelay: '0.5s'}}>
                <div className="text-2xl font-black">&lt;3s</div>
                <div className="text-sm">Load Time</div>
              </div>
            </div>
          </div>

          {/* Project highlights */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-glow transition-all duration-300 animate-slide-up-fade"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white font-bold text-xl md:text-4xl shrink-0`}>
                    {index + 1}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-3">{project.description}</p>
                    
                    <div className="flex items-center gap-2">
                      <span className="bg-gradient-accent text-white text-sm font-bold px-3 py-1 rounded-full">
                        {project.metrics}
                      </span>
                      <span className="text-electric text-sm font-semibold">📈 Results</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Trust indicators */}
            <div className="bg-gradient-card border border-border rounded-2xl p-6 animate-slide-up-fade">
              <div className="text-center">
                <h4 className="text-lg font-bold text-foreground mb-4">Trusted by creators worldwide</h4>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-black text-electric">5★</div>
                    <div className="text-sm text-muted-foreground">Rated Service</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-neon-orange">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-neon-pink">100%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}