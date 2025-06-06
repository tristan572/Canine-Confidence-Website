import { useEffect, useRef } from "react";

interface BookingWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    SimplybookWidget: any;
  }
}

export default function BookingWidget({ isOpen, onClose }: BookingWidgetProps) {
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const widgetInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!isOpen || !widgetContainerRef.current) return;

    const loadWidget = () => {
      if (window.SimplybookWidget && widgetContainerRef.current) {
        // Clear any existing widget
        widgetContainerRef.current.innerHTML = '';
        
        // Create the widget
        widgetInstanceRef.current = new window.SimplybookWidget({
          "widget_type": "iframe",
          "url": "https://canineconfidence.simplybook.net",
          "theme": "simple_beauty_theme",
          "theme_settings": {
            "sb_base_color": "#5a7f9e",
            "header_color": "#ffffff",
            "timeline_hide_unavailable": "1",
            "hide_past_days": "0",
            "timeline_show_end_time": "0",
            "timeline_modern_display": "as_slots",
            "display_item_mode": "block",
            "body_bg_color": "#ffffff",
            "sb_review_image": "",
            "dark_font_color": "#474747",
            "light_font_color": "#ffffff",
            "btn_color_1": "#fad02c",
            "sb_company_label_color": "#352b05",
            "hide_img_mode": "1",
            "show_sidebar": "1",
            "sb_busy": "#c7b3b3",
            "sb_available": "#d6ebff"
          },
          "timeline": "modern",
          "datepicker": "top_calendar",
          "is_rtl": false,
          "app_config": {
            "clear_session": 0,
            "allow_switch_to_ada": 0,
            "predefined": []
          }
        });
      }
    };

    // Check if SimplybookWidget is already loaded
    if (window.SimplybookWidget) {
      loadWidget();
    } else {
      // Load the script if not already loaded
      const existingScript = document.querySelector('script[src*="widget.simplybook.net"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = '//widget.simplybook.net/v2/widget/widget.js';
        script.type = 'text/javascript';
        script.onload = loadWidget;
        document.head.appendChild(script);
      } else {
        // Script exists but may not be loaded yet
        const checkWidget = () => {
          if (window.SimplybookWidget) {
            loadWidget();
          } else {
            setTimeout(checkWidget, 100);
          }
        };
        checkWidget();
      }
    }

    return () => {
      // Cleanup widget when component unmounts or closes
      if (widgetInstanceRef.current && widgetContainerRef.current) {
        widgetContainerRef.current.innerHTML = '';
        widgetInstanceRef.current = null;
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden relative shadow-2xl">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-charcoal">Book Your Training Session</h2>
          <button
            onClick={onClose}
            className="text-medium-grey hover:text-charcoal text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close booking widget"
          >
            ×
          </button>
        </div>
        
        <div 
          ref={widgetContainerRef}
          className="h-[700px] w-full"
          id="simplybook-widget-container"
        />
      </div>
    </div>
  );
}