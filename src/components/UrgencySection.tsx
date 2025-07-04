import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function UrgencySection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-neon-orange animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-electric animate-neon-flicker"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-slide-up-fade">
          {/* Alert banner */}
          <div className="bg-neon-orange text-white font-bold px-6 py-3 rounded-full inline-block mb-8 animate-bounce-in">
            🔥 LIMITED SPOTS AVAILABLE
          </div>

          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Only Taking{" "}
            <span className="text-neon-orange animate-neon-flicker">
              3 Clients
            </span>{" "}
            This Week
          </h2>

          <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Quality over quantity. I focus on delivering{" "}
            <span className="font-bold text-neon-orange">results</span>, not
            churning out mediocre websites. When these spots are gone, you wait
            until next week.
          </p>

          {/* Countdown timer */}
          <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-3xl p-8 mb-12 animate-slide-up-fade">
            <h3 className="text-2xl font-bold text-white mb-6">
              ⏰ This offer expires in:
            </h3>

            <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Min", value: timeLeft.minutes },
                { label: "Sec", value: timeLeft.seconds },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="bg-gradient-accent rounded-xl p-4 animate-bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl lg:text-4xl font-black text-white">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm text-white/80 font-semibold">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spots taken */}
          <div className="mb-12 animate-slide-up-fade">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-md mx-auto">
              <h4 className="text-lg font-bold text-white mb-4">
                Spots Taken This Week:
              </h4>

              <div className="flex justify-center gap-2 mb-4">
                {[1, 2, 3].map((spot) => (
                  <div key={spot} className="relative">
                    <div
                      className={`w-16 h-16 rounded-full border-2 flex items-center justify-center font-bold ${
                        spot <= 1
                          ? "bg-red-500 border-red-400 text-white"
                          : "bg-white/20 border-white/40 text-white"
                      }`}
                    >
                      {spot}
                    </div>
                    {spot <= 1 && (
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                        TAKEN
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-white/80 text-sm">
                <span className="text-neon-orange font-bold">
                  2 spots remaining
                </span>{" "}
                for this week
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-6">
            <Button
              variant="cta"
              size="xl"
              className="text-xl px-12 py-6 animate-glow-pulse"
              onClick={() => (window.location.href = "#contact")}
            >
              Claim Your Spot Now
            </Button>

            <p className="text-white/80 text-sm max-w-md mx-auto">
              ⚡ <strong>Fast action bonus:</strong> Book in the next 2 hours
              and get free rush delivery (save $500)
            </p>
          </div>

          {/* Social proof ticker */}
        </div>
      </div>
    </section>
  );
}
