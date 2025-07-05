import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, TimerIcon } from "lucide-react";
import { toast } from "sonner";
import { BookingWidget } from "./BookingWidget";

const initialFormData = {
    name: "",
    email: "",
    projectType: "",
    timeline: "",
    budget: "",
    message: "",
  }
export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://resend-server.onrender.com/api/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data.success) {
        toast("✅ Message sent! I’ll get back to you ASAP.");
        setFormData(initialFormData)
      } else {
        toast("❌ Something went wrong. Try again later.");
        console.error(data.error);
      }
    } catch (err) {
      toast("❌ Couldn’t send. Please check your internet or try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 bg-gradient-card relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-up-fade">
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              Let's Build Your{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Empire
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tell me about your vision. I'll tell you how to make it convert.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact form */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up-fade">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select project type</option>
                    <option value="landing-page">Landing Page</option>
                    <option value="full-website">Full Website</option>
                    <option value="e-commerce">E-commerce Store</option>
                    <option value="portfolio">Portfolio Site</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (24-48 hours)</option>
                      <option value="1-week">Within 1 week</option>
                      <option value="2-weeks">1-2 weeks</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select budget</option>
                      <option value="150-400">$150 - $400</option>
                      <option value="400-800">$400 - $800</option>
                      <option value="1k-plus">$1k+</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Tell me about your vision
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="What's your business? Who's your audience? What results do you want?"
                  />
                </div>

                <Button
                  disabled={loading}
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                >
                  Send My Project Details
                </Button>
              </form>
            </div>

            {/* Contact info & calendar */}
            <div
              className="space-y-8 animate-slide-up-fade"
              style={{ animationDelay: "0.2s" }}
            >
              {/* Quick contact */}
              <div className="bg-gradient-primary rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Prefer to talk directly?
                </h3>

                <div className="space-y-4 mb-8">
                  <a
                    href="https://wa.me/+2349033951020"
                    className="flex items-center gap-4 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
                      <MessageCircle />
                    </div>
                    <div>
                      <div className="font-bold">WhatsApp</div>
                      <div className="text-white/80 text-sm">
                        Usually respond within 1 hour
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/zeirrow.dev"
                    className="flex items-center gap-4 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
                      <Instagram />
                    </div>
                    <div>
                      <div className="font-bold">Instagram DM</div>
                      <div className="text-white/80 text-sm">@zeirrow.dev</div>
                    </div>
                  </a>
                </div>

                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-sm text-white/80 mb-2">
                    <TimerIcon /> Response time
                  </div>
                  <div className="font-bold">Within 2 hours (Mon-Fri)</div>
                  <div className="font-bold">Within 4 hours (Weekends)</div>
                </div>
              </div>

              {/* Calendar booking */}
              <BookingWidget />
              {/* <div className="bg-card border border-border rounded-3xl p-8 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Book a Strategy Call
                </h3>
                <p className="text-muted-foreground mb-6">
                  30-minute call to discuss your project, timeline, and goals.
                  No sales pitch, just strategy.
                </p>

                <Button variant="cta" size="lg" className="w-full">
                  Schedule Free Call
                </Button>

                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Available slots this week: 3
                </p>
              </div> */}

              {/* Guarantee */}
              <div className="bg-gradient-card border border-border rounded-3xl p-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    100% Satisfaction Guarantee
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    If you're not completely satisfied with your website, I'll
                    keep working until you are. No questions asked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
