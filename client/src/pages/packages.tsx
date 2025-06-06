import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Star, Clock, Users, CheckCircle, Calendar } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import type { Package } from "@shared/schema";

declare global {
  interface Window {
    SimplybookWidget: any;
  }
}

const PackageBookingWidget = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const handleBookingClick = () => {
    // Open SimplyBook.me booking page - let user navigate to packages
    window.open('https://canineconfidence.simplybook.net/v2/', '_blank');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full p-6">
        <DialogTitle className="text-xl font-bold text-gray-800 mb-2">
          Secure Booking System
        </DialogTitle>
        <DialogDescription className="text-gray-600 mb-6">
          You'll be redirected to our secure booking platform. Once there, please select "Training Packages" from the service categories to book your preferred package with integrated payment processing.
        </DialogDescription>
        
        <div className="space-y-4">
          <Button 
            onClick={handleBookingClick}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium"
          >
            Continue to Secure Booking
          </Button>
          
          <Button 
            onClick={onClose}
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
    </Dialog>
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
          <CardTitle className="text-2xl font-bold text-gray-800">{pkg.name}</CardTitle>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mt-2">
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
    { value: 'advanced', label: 'Advanced Training' },
    { value: 'rehabilitation', label: 'Rehabilitation' }
  ];

  const filteredPackages = selectedCategory === 'all' 
    ? packages 
    : packages.filter((pkg: Package) => pkg.category === selectedCategory);

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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Training Packages
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">
            Comprehensive training programs designed to transform your dog's behaviour and strengthen your bond
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 rounded-lg px-6 py-3">
              <div className="text-2xl font-bold text-white">100+</div>
              <div className="text-sm text-white">Dogs Trained</div>
            </div>
            <div className="bg-white/20 rounded-lg px-6 py-3">
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-sm text-white">Success Rate</div>
            </div>
            <div className="bg-white/20 rounded-lg px-6 py-3">
              <div className="text-2xl font-bold text-white">5★</div>
              <div className="text-sm text-white">Average Rating</div>
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
              Our structured programs provide comprehensive solutions for lasting behaviour change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Proven Methods</h3>
              <p className="text-gray-600">
                Science-based training techniques that focus on building trust and confidence
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
                Continued guidance and support throughout your training journey
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}