import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface BookingWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId?: number;
}

declare global {
  interface Window {
    SimplybookWidget: any;
  }
}

export default function BookingWidget({ isOpen, onClose, serviceId }: BookingWidgetProps) {
  const [showWidget, setShowWidget] = useState(false);
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const widgetInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!showWidget) return;

    const loadWidget = () => {
      if (window.SimplybookWidget && widgetContainerRef.current) {
        // Clear any existing widget
        widgetContainerRef.current.innerHTML = '';
        
        // Create the services widget
        try {
          const config: any = {
            "widget_type": "iframe",
            "url": "https://canineconfidence.simplybook.net",
            "theme": "default",
            "theme_settings": {
              "timeline_show_end_time": "0",
              "sb_base_color": "#2563EB",
              "body_bg_color": "#f7f7f7",
              "dark_font_color": "#494949",
              "light_font_color": "#ffffff",
              "btn_color_1": "#2563EB"
            },
            "timeline": "modern",
            "datepicker": "top_calendar",
            "is_rtl": false
          };

          widgetInstanceRef.current = new window.SimplybookWidget(config);
        } catch (error) {
          console.error('Error creating services widget:', error);
        }
      }
    };

    // Load the SimplyBook.me script
    if (!document.querySelector('script[src*="widget.simplybook.net"]')) {
      const script = document.createElement('script');
      script.src = '//widget.simplybook.net/v2/widget/widget.js';
      script.type = 'text/javascript';
      script.onload = () => {
        setTimeout(loadWidget, 1000);
      };
      document.head.appendChild(script);
    } else {
      setTimeout(loadWidget, 1000);
    }

    return () => {
      if (widgetContainerRef.current) {
        widgetContainerRef.current.innerHTML = '';
      }
      widgetInstanceRef.current = null;
    };
  }, [showWidget]);

  const handleContinue = () => {
    setShowWidget(true);
  };

  const handleClose = () => {
    setShowWidget(false);
    onClose();
  };

  // Reset widget state when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setShowWidget(false);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      {!showWidget ? (
        <DialogContent className="max-w-md w-full p-6">
          <DialogTitle className="text-xl font-bold text-gray-800 mb-2">
            Secure Booking System
          </DialogTitle>
          <DialogDescription className="text-gray-600 mb-6">
            You'll access our secure booking platform where you can select your training service, choose your preferred time, and complete your booking with integrated payment processing.
          </DialogDescription>
          
          <div className="space-y-4">
            <Button 
              onClick={handleContinue}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium"
            >
              Continue to Secure Booking
            </Button>
            
            <Button 
              onClick={handleClose}
              variant="outline"
              className="w-full py-3"
            >
              Cancel
            </Button>
          </div>
          
          <div className="mt-4 text-xs text-gray-500 text-center">
            <p>🔒 Secure SSL encrypted booking system</p>
            <p>📅 Real-time availability • 💳 Secure payments</p>
          </div>
        </DialogContent>
      ) : (
        <DialogContent className="max-w-5xl w-full max-h-[95vh] overflow-hidden p-0">
          <div className="bg-blue-600 p-4 flex justify-between items-center">
            <div>
              <DialogTitle className="text-xl font-bold text-white">
                Book Your Training Session
              </DialogTitle>
              <DialogDescription className="text-blue-100 text-sm">
                Select your preferred service and schedule your session
              </DialogDescription>
            </div>
            <Button
              onClick={handleClose}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-blue-700"
            >
              ✕
            </Button>
          </div>
          
          <div 
            ref={widgetContainerRef}
            className="w-full h-[650px] bg-white flex items-center justify-center"
            style={{ minHeight: '650px' }}
          >
            <div className="text-center">
              <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4" />
              <p className="text-gray-600">Loading booking system...</p>
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}