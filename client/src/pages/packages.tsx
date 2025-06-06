import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Star, Clock, Users, CheckCircle, Calendar } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import type { Package } from "@shared/schema";

declare global {
  interface Window {
    SimplybookWidget: any;
  }
}

const PackageBookingWidget = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const widgetInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!isOpen || !widgetContainerRef.current) return;

    const loadWidget = () => {
      if (window.SimplybookWidget && widgetContainerRef.current) {
        // Clear any existing widget
        widgetContainerRef.current.innerHTML = '';
        
        // Create the package-specific widget
        widgetInstanceRef.current = new window.SimplybookWidget({
          "widget_type": "iframe",
          "url": "https://canineconfidence.simplybook.net",
          "theme": "simple_beauty_theme",
          "theme_settings": {
            "sb_base_color": "#2563EB",
            "header_color": "#ffffff",
            "timeline_hide_unavailable": "1",
            "hide_past_days": "0",
            "timeline_show_end_time": "0",
            "timeline_modern_display": "as_slots",
            "display_item_mode": "block",
            "body_bg_color": "#ffffff",
            "sb_review_image": "",
            "dark_font_color": "#374151",
            "light_font_color": "#ffffff",
            "btn_color_1": "#2563EB",
            "sb_company_label_color": "#374151",
            "hide_img_mode": "0",
            "show_sidebar": "1",
            "sb_busy": "#E5E7EB",
            "sb_available": "#DBEAFE"
          },
          "timeline": null,
          "datepicker": null,
          "is_rtl": false,
          "app_config": {
            "clear_session": 0,
            "allow_switch_to_ada": 0,
            "predefined": []
          },
          "navigate": "packages"
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
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b bg-primary-blue">
          <h2 className="text-xl font-bold text-white">Book Your Package</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary-blue/20 transition-colors"
            aria-label="Close booking widget"
          >
            ×
          </button>
        </div>
        
        <div 
          ref={widgetContainerRef}
          className="h-[600px] w-full"
          id="simplybook-packages-widget-container"
        />
      </div>
    </div>
  );
};

const PackageCard = ({ pkg }: { pkg: Package }) => {
  const [showBookingWidget, setShowBookingWidget] = useState(false);

  return (
    <>
      <Card className={`relative ${pkg.isPopular ? 'ring-2 ring-primary-blue' : ''} hover:shadow-lg transition-shadow`}>
        {pkg.isPopular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-primary-blue text-white px-4 py-1">
              <Star className="w-3 h-3 mr-1" />
              Most Popular
            </Badge>
          </div>
        )}
        
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl font-bold text-charcoal">{pkg.name}</CardTitle>
          <div className="flex items-center justify-center gap-4 text-sm text-medium-grey mt-2">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {pkg.duration}
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {pkg.sessions} sessions
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="text-medium-grey text-center">{pkg.description}</p>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="text-3xl font-bold text-primary-blue">{pkg.price}</span>
              {pkg.originalPrice && (
                <span className="text-lg text-medium-grey line-through">{pkg.originalPrice}</span>
              )}
            </div>
            {pkg.originalPrice && (
              <p className="text-sm text-green-600 font-medium mt-1">
                Save {parseInt(pkg.originalPrice.replace('$', '')) - parseInt(pkg.price.replace('$', ''))} AUD
              </p>
            )}
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-charcoal">What's Included:</h4>
            <ul className="space-y-2">
              {pkg.features?.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button 
            onClick={() => setShowBookingWidget(true)}
            className="w-full btn-primary text-lg py-3"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book This Package
          </Button>
        </CardContent>
      </Card>

      <PackageBookingWidget 
        isOpen={showBookingWidget} 
        onClose={() => setShowBookingWidget(false)} 
      />
    </>
  );
};

export default function PackagesPage() {
  const { data: packages = [], isLoading } = useQuery({
    queryKey: ['/api/packages'],
    queryFn: () => apiRequest('GET', '/api/packages').then(res => res.json())
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Packages' },
    { value: 'puppy', label: 'Puppy Programs' },
    { value: 'behaviour', label: 'Behaviour Modification' },
    { value: 'advanced', label: 'Advanced Training' },
    { value: 'rehabilitation', label: 'Rehabilitation' }
  ];

  const filteredPackages = selectedCategory === 'all' 
    ? packages 
    : packages.filter((pkg: Package) => pkg.category === selectedCategory);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue to-secondary-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Training Packages
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Comprehensive training programs designed to transform your dog's behaviour and strengthen your bond
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 rounded-lg px-6 py-3">
              <div className="text-2xl font-bold">100+</div>
              <div className="text-sm">Dogs Trained</div>
            </div>
            <div className="bg-white/20 rounded-lg px-6 py-3">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm">Success Rate</div>
            </div>
            <div className="bg-white/20 rounded-lg px-6 py-3">
              <div className="text-2xl font-bold">5★</div>
              <div className="text-sm">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className={selectedCategory === category.value ? "btn-primary" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg: Package) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-medium-grey">No packages found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Packages Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Why Choose Our Training Packages?
            </h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              Our structured programs provide comprehensive solutions for lasting behaviour change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Proven Methods</h3>
              <p className="text-medium-grey">
                Science-based training techniques that focus on building trust and confidence
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Personalised Approach</h3>
              <p className="text-medium-grey">
                Every program is tailored to your dog's unique personality and learning style
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Ongoing Support</h3>
              <p className="text-medium-grey">
                Continued guidance and support throughout your training journey
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}