import { useEffect, useRef } from "react";

interface BookingWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingWidget({ isOpen, onClose }: BookingWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && widgetRef.current) {
      // Clear any existing widget
      widgetRef.current.innerHTML = '';
      
      // Create and inject the SimplyBook widget script
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

      // Append scripts to the widget container
      widgetRef.current.appendChild(script1);
      script1.onload = () => {
        widgetRef.current?.appendChild(script2);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-charcoal">Book Your Session</h2>
          <button
            onClick={onClose}
            className="text-medium-grey hover:text-charcoal text-2xl font-bold"
            aria-label="Close booking widget"
          >
            ×
          </button>
        </div>
        <div className="p-4 h-[600px] overflow-auto">
          <div ref={widgetRef} className="min-h-full"></div>
        </div>
      </div>
    </div>
  );
}