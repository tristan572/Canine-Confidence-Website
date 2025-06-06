import { useEffect, useRef } from "react";

interface BookingWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingWidget({ isOpen, onClose }: BookingWidgetProps) {
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Add the widget script and initialize it
      const script1 = document.createElement('script');
      script1.src = '//widget.simplybook.net/v2/widget/widget.js';
      script1.type = 'text/javascript';
      
      const script2 = document.createElement('script');
      script2.type = 'text/javascript';
      script2.innerHTML = `
        var widget = new SimplybookWidget({
          "widget_type":"iframe",
          "url":"https://canineconfidence.simplybook.net",
          "theme":"simple_beauty_theme",
          "theme_settings":{
            "sb_base_color":"#5a7f9e",
            "header_color":"#ffffff",
            "timeline_hide_unavailable":"1",
            "hide_past_days":"0",
            "timeline_show_end_time":"0",
            "timeline_modern_display":"as_slots",
            "display_item_mode":"block",
            "body_bg_color":"#ffffff",
            "sb_review_image":"",
            "dark_font_color":"#474747",
            "light_font_color":"#ffffff",
            "btn_color_1":"#fad02c",
            "sb_company_label_color":"#352b05",
            "hide_img_mode":"1",
            "show_sidebar":"1",
            "sb_busy":"#c7b3b3",
            "sb_available":"#d6ebff"
          },
          "timeline":"modern",
          "datepicker":"top_calendar",
          "is_rtl":false,
          "app_config":{
            "clear_session":0,
            "allow_switch_to_ada":0,
            "predefined":[]
          }
        });
      `;

      document.head.appendChild(script1);
      document.body.appendChild(script2);

      return () => {
        if (document.head.contains(script1)) {
          document.head.removeChild(script1);
        }
        if (document.body.contains(script2)) {
          document.body.removeChild(script2);
        }
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden relative shadow-2xl">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-charcoal">Book Your Training Session</h2>
          <button
            onClick={onClose}
            className="text-medium-grey hover:text-charcoal text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close booking widget"
          >
            ×
          </button>
        </div>
        
        <div className="h-[700px] overflow-auto" ref={widgetContainerRef}>
          <div className="flex items-center justify-center h-full text-medium-grey">
            <div className="text-center">
              <div className="animate-spin w-8 h-8 border-4 border-primary-blue border-t-transparent rounded-full mx-auto mb-4"></div>
              <p>Loading your booking system...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}