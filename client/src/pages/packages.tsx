import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SEO } from "@/components/SEO";
import { Star, Clock, Users, CheckCircle, Calendar } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import type { Package } from "@shared/schema";
import packagesHeroImage from "@assets/IMG_0084_1758974180047.jpeg";

declare global {
  interface Window {
    SimplybookWidget: any;
  }
}

const PackageBookingWidget = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [showWidget, setShowWidget] = useState(false);
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const widgetInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!showWidget) return;

    const loadWidget = () => {
      if (window.SimplybookWidget && widgetContainerRef.current) {
        // Clear any existing widget
        widgetContainerRef.current.innerHTML = '';
        
        // Create the widget using your exact configuration
        try {
          widgetInstanceRef.current = new window.SimplybookWidget({
            "widget_type": "iframe",
            "url": "https://canineconfidence.simplybook.net",
            "theme": "simple_beauty_theme",
            "theme_settings": {
              "sb_base_color": "#2563EB",
              "header_color": "#ffffff",
              "timeline_hide_unavailable": "0",
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
        } catch (error) {
          console.error('Error creating widget:', error);
        }
      }
    };

    // Load the SimplyBook.me script
    if (!document.querySelector('script[src*="widget.simplybook.net"]')) {
      const script = document.createElement('script');
      script.src = '//widget.simplybook.net/v2/widget/widget.js';
      script.type = 'text/javascript';
      script.onload = () => {
        setTimeout(loadWidget, 500);
      };
      document.head.appendChild(script);
    } else {
      setTimeout(loadWidget, 500);
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
            You'll access our secure booking platform where you can select your training package, choose your preferred time, and complete your booking with integrated payment processing.
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
                Book Your Training Package
              </DialogTitle>
              <DialogDescription className="text-blue-100 text-sm">
                Select your preferred training package and schedule
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
};

const PackageCard = ({ pkg }: { pkg: Package }) => {
  const [showBookingWidget, setShowBookingWidget] = useState(false);

  return (
    <>
      <Card className={`relative ${pkg.isPopular ? 'ring-2 ring-primary-blue' : ''} hover:shadow-lg transition-shadow overflow-hidden`}>
        {pkg.isPopular && (
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
            <Badge className="bg-primary-blue text-white px-3 py-1.5 text-sm font-medium shadow-lg">
              <Star className="w-3 h-3 mr-1" />
              Most Popular
            </Badge>
          </div>
        )}
        
        {pkg.imageUrl && (
          <div className="relative h-64 w-full overflow-hidden">
            <img 
              src={pkg.imageUrl} 
              alt={`${pkg.name} training session`}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        )}
        
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl font-bold text-gray-800">{pkg.name}</CardTitle>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mt-2">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {pkg.duration}
            </div>
            
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="text-gray-600 text-center">{pkg.description}</p>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="text-3xl font-bold text-blue-600">{pkg.price}</span>
              {pkg.originalPrice && (
                <span className="text-lg text-gray-500 line-through">{pkg.originalPrice}</span>
              )}
            </div>
            {pkg.originalPrice && (
              <p className="text-sm text-green-600 font-medium mt-1">
                Save {parseInt(pkg.originalPrice.replace('$', '')) - parseInt(pkg.price.replace('$', ''))} AUD
              </p>
            )}
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800">What's Included:</h4>
            <ul className="space-y-2">
              {pkg.features?.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
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
  const { data: packages = [], isLoading, error } = useQuery({
    queryKey: ['/api/packages'],
    queryFn: () => apiRequest('GET', '/api/packages').then(res => res.json())
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Packages' },
    { value: 'puppy', label: 'Puppy Programs' },
    { value: 'behaviour', label: 'Behaviour Modification' },
    { value: 'obedience', label: 'Obedience Training' },
    { value: 'adventure', label: 'Adventure' }
  ];

  const filteredPackages = selectedCategory === 'all' 
    ? packages 
    : packages.filter((pkg: Package) => pkg.category.includes(selectedCategory));

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Error Loading Packages</h2>
          <p className="text-gray-600">Please try refreshing the page</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Dog Training Packages Brisbane"
        description="Affordable dog training packages in Brisbane. Puppy Foundation Program, Loose Leash Walking, From Chaos to Calm, and coaching packages. Expert training with lasting results and savings up to $240."
        canonical="/packages"
        keywords={[
          'dog training packages Brisbane',
          'puppy training program',
          'loose leash walking program',
          'reactivity training Brisbane',
          'dog training deals Brisbane',
          'affordable dog training packages'
        ]}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  Training Packages
                </h1>
                <p className="text-xl md:text-2xl text-white">Thoughtfully designed programs that honour your dog's individuality while building the skills and confidence they need to thrive in life.</p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 rounded-lg px-6 py-3">
                  <div className="text-2xl font-bold text-white">200+</div>
                  <div className="text-sm text-white">Confident Clients</div>
                </div>
                <div className="bg-white/20 rounded-lg px-6 py-3">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-white">Happier Dogs</div>
                </div>
                <div className="bg-white/20 rounded-lg px-6 py-3">
                  <div className="text-2xl font-bold text-white">5★</div>
                  <div className="text-sm text-white">Average Rating</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={packagesHeroImage} 
                alt="Active dog training session showing enrichment and play-based learning" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
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

          {filteredPackages.length === 0 && !isLoading && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No packages found in this category.</p>
              <p className="text-gray-500 mt-2">Total packages available: {packages.length}</p>
            </div>
          )}
        </div>
      </section>
      {/* Why Choose Our Packages Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Our Training Packages?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take the time to understand your dog's genetics, personality, and learning style, creating a tailored approach that fits your lifestyle and builds real fulfillment for your dog. Our cost-effective packages ensure regular training sessions, which creates real results because all training requires consistency in action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Proven Methods</h3>
              <p className="text-gray-600">
                Proven, effective training techniques that focus on building trust and confidence between dog and handler.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalised Approach</h3>
              <p className="text-gray-600">
                Every program is tailored to your dog's unique personality and learning style
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                Continued guidance and support throughout your training journey and dog's life
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}