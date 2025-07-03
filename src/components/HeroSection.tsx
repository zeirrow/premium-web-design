import { Button } from "@/components/ui/button";
import heroImage from "@/assets/phone-mockup-hero.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-electric animate-glow-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-neon-pink animate-neon-flicker"></div>
        <div
          className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-cyber-blue animate-glow-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Copy */}
        <div className="text-center lg:text-left space-y-8 animate-slide-up-fade">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              Your Website
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                {" "}
                Shouldn't{" "}
              </span>
              <br />
              <span className="text-neon-orange animate-neon-flicker">
                Suck
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-2xl">
              Look legit in{" "}
              <span className="text-electric font-bold">3 days or less</span>.
              Premium websites that convert visitors into customers, not just
              pretty pictures.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              variant="hero"
              size="xl"
              className="group"
              onClick={() => (window.location.href = "#contact")}
            >
              Book Your Spot
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                🚀
              </span>
            </Button>

            <Button variant="neon" size="xl">
              See Examples
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-neon-orange font-bold text-lg">⚡</span>
              <span>3-day delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-electric font-bold text-lg">✓</span>
              <span>10+ projects launched</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neon-pink font-bold text-lg">🎯</span>
              <span>Conversion focused</span>
            </div>
          </div>
        </div>

        {/* Right side - Hero image */}
        <div
          className="relative animate-bounce-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative">
            <img
              src={heroImage}
              alt="Premium website mockup"
              className="w-full max-w-lg mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />

            {/* Floating elements */}
            <div
              className="absolute -top-4 -right-4 bg-gradient-accent text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce-in"
              style={{ animationDelay: "1s" }}
            >
              ✨ Mobile-First
            </div>

            <div
              className="absolute -bottom-4 -left-4 bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce-in"
              style={{ animationDelay: "1.2s" }}
            >
              🔥 SEO Ready
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-electric rounded-full flex justify-center">
          <div className="w-1 h-3 bg-electric rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
