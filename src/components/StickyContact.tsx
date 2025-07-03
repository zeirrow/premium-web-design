import { Button } from "@/components/ui/button";

export function StickyContact() {
  return (
    <>
      {/* Mobile sticky button */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <Button 
          variant="sticky" 
          size="lg" 
          className="shadow-2xl animate-glow-pulse"
          onClick={() => window.location.href = '#contact'}
        >
          Book Your Spot 🚀
        </Button>
      </div>

      {/* Desktop floating contact panel */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="bg-gradient-primary text-white rounded-2xl p-4 shadow-glow max-w-xs animate-slide-up-fade">
          <div className="text-center mb-4">
            <div className="text-2xl mb-2">🔥</div>
            <div className="font-bold text-sm">Limited Spots</div>
            <div className="text-xs opacity-90">Only 2 left this week</div>
          </div>
          
          <div className="space-y-2">
            <Button 
              variant="cta" 
              size="sm" 
              className="w-full text-xs"
              onClick={() => window.location.href = '#contact'}
            >
              Book Now
            </Button>
            
            <div className="flex gap-2">
              <a 
                href="https://wa.me/+2349033951020" 
                className="flex-1 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold py-2 px-3 rounded-lg text-center transition-all duration-300"
              >
                WhatsApp
              </a>
              <a 
                href="https://instagram.com/zeirrow.dev" 
                className="flex-1 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold py-2 px-3 rounded-lg text-center transition-all duration-300"
              >
                DM
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}