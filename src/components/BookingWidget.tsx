import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { X } from 'lucide-react';

// Extend the Window interface to include Calendly
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export function BookingWidget() {
  const [showModal, setShowModal] = useState(false);

useEffect(() => {
  if (showModal) {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initPopupWidget({
          url: 'https://calendly.com/udodirimwisdom/30min',
        });
      }
    };

    return () => {
      // Clean up the script
      document.body.removeChild(script);

      // Re-enable scroll
      document.body.style.overflow = '';

      // 🧼 Manually remove Calendly's injected junk
      const overlay = document.querySelector('.calendly-overlay');
      const popupBackdrop = document.querySelector('.calendly-popup-close');

      if (overlay) overlay.remove();
      if (popupBackdrop) popupBackdrop.remove();

      // If more junk remains:
      document
        .querySelectorAll('[id^="calendly"]')
        .forEach((el) => el.remove());
    };
  }
}, [showModal]);

  return (
    <>
      {/* Booking Card */}
      <div className="bg-card border border-border rounded-3xl p-8 shadow-card">
        <h3 className="text-xl font-bold text-foreground mb-4">
          Book a Strategy Call
        </h3>
        <p className="text-muted-foreground mb-6">
          30-minute call to discuss your project, timeline, and goals.
        </p>
        <button 
          onClick={() => setShowModal(true)}
          className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg transition-colors"
        >
          Schedule Free Call
        </button>
      </div>

      {/* Modal Backdrop (hidden by default) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-lg w-full max-w-2xl h-[80vh]">
            {/* Close button */}
            <Button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <X className='text-gray-50' />
            </Button>
            
            {/* Calendly Inline Widget */}
            <div 
              className="calendly-inline-widget h-full w-full" 
              data-url="https://calendly.com/udodirimwisdom/30min"
            />
          </div>
        </div>
      )}
    </>
  );
}