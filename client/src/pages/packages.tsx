import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SEO } from "@/components/SEO";
import { Star, Clock, Users, CheckCircle, Calendar, Phone, DollarSign, ShieldCheck, Award } from "lucide-react";
import ConsultationForm from "@/components/forms/consultation-form";
import { apiRequest } from "@/lib/queryClient";
import FormattedText from "@/components/ui/formatted-text";
import type { Package } from "@shared/schema";
import packagesHeroImage from "@assets/IMG_0084_1760870993102.jpeg";

const PackageCard = ({ pkg }: { pkg: Package }) => {
  const getPackageBookingUrl = () => {
    // Keyed on the current package names (shared/storage.ts) — the
    // SimplyBook package IDs stay the same even if the marketing name
    // is later reworded, so update the key here rather than the ID.
    const packageMap: Record<string, number> = {
      "The Confident Start Program": 6,
      "The Connected Companion Walk": 13,
      "From Chaos to Calm Program": 9,
      "The Focused Progress Plan": 2,
      "The Foundation Program": 1,
      "The Real World Reliability Package": 3,
      "The Adventure Pack": 4,
      "The Neighbourhood Enrichment Pack": 5,
    };

    const packageId = packageMap[pkg.name];
    return packageId
      ? `https://canineconfidence.simplybook.net/v2/#packages/${packageId}`
      : "https://canineconfidence.simplybook.net/v2/#packages";
  };

  const handleBookClick = () => {
    window.open(getPackageBookingUrl(), '_blank');
  };

  return (
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
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: '400/256' }}>
            <img 
              src={pkg.imageUrl} 
              alt={`${pkg.name} training session`}
              className="w-full h-full object-cover object-center"
              width={400}
              height={256}
              loading="lazy"
              decoding="async"
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
          <div className="text-gray-600 text-left prose prose-sm max-w-none">
            <FormattedText text={pkg.description} />
          </div>

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
            onClick={handleBookClick}
            className="w-full btn-primary text-lg py-3"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book This Package
          </Button>
        </CardContent>
      </Card>
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
                title="Dog Training Packages North Brisbane | Canine Confidence"
                description="Training packages for every stage — from puppy foundations to off-lead freedom. Clear pricing, lasting results. Based in Boondall, serving North Brisbane."
        canonical="https://canineconfidence.com.au/packages"
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
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight">
                  North Brisbane Dog Training Packages: Your Complete <span className="text-primary-blue">Behaviour</span> Solution
                </h1>
                <p className="text-xl text-medium-grey">Each program is built around your dog — their genetics, their drives, and how your household actually runs. No guesswork, no one-size-fits-all. Just clarity, consistency, and results that hold up in the real world.</p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-white rounded-lg px-6 py-3 shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-charcoal">200+</div>
                  <div className="text-sm text-medium-grey">Confident Clients</div>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-charcoal">100%</div>
                  <div className="text-sm text-medium-grey">Happier Dogs</div>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-charcoal">5★</div>
                  <div className="text-sm text-medium-grey">Average Rating</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={packagesHeroImage} 
                alt="A dog training session in North Brisbane"
                className="rounded-2xl shadow-2xl w-full h-auto"
                width={600}
                height={400}
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

            {/* Free Consultation Card */}
            <Card className="bg-primary-blue text-white card-hover">
              <CardContent className="p-8">
                <div className="bg-white p-3 rounded-lg w-fit mb-6">
                  <Phone className="h-6 w-6 text-primary-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Free Phone Consultation</h3>
                <p className="text-blue-100 mb-6">
                  Not sure which package fits? Book a free 15-minute call and I'll help you work out what your dog actually needs — no obligation, no sales pitch.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-blue-100">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>15 minutes</span>
                  </div>
                  <div className="flex items-center text-sm text-blue-100">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>Phone call</span>
                  </div>
                  <div className="flex items-center text-sm text-white font-semibold">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span>Completely Free</span>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-white text-primary-blue hover:bg-gray-50">
                      Request Call
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
                    <DialogTitle>Request Free Phone Call</DialogTitle>
                    <DialogDescription>Book a free 15-minute call to talk through which package is right for your dog.</DialogDescription>
                    <ConsultationForm />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>

          {filteredPackages.length === 0 && !isLoading && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No packages found in this category.</p>
              <p className="text-gray-500 mt-2">Total packages available: {packages.length}</p>
            </div>
          )}
        </div>
      </section>
      {/* Why Choose my Packages Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why My Packages Deliver Lasting Change
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I take the time to analyse your dog's genetics and learning profile, creating an approach built around your dog that fits your Brisbane lifestyle and delivers confidence and genuine fulfilment. My value-driven packages guarantee the consistency required to achieve lasting results and the strong bond you are looking for.
            </p>
          </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Methodology for Results</h3>
              <p className="text-gray-600">
                Proven, effective techniques that focus on building confidence and clarity between dog and handler.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">A Plan Built Around Your Dog</h3>
              <p className="text-gray-600">
                Every program is built specifically for your dog, tailored to your dog's learning style and inherent drives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Lifetime Commitment</h3>
              <p className="text-gray-600">
                Continued guidance and support for the life of your dog, ensuring long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-primary-blue content-visibility-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Not sure which package is right for you?</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                A free 15-minute call is enough to work out what your dog actually needs — no pressure, no sales pitch.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-white text-primary-blue hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Book a Free Call
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogTitle>Book a Free Call</DialogTitle>
                  <DialogDescription>Book a free 15-minute call to talk through what your dog needs.</DialogDescription>
                  <ConsultationForm />
                </DialogContent>
              </Dialog>

              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary-blue px-8 py-4 text-lg font-semibold transition-colors"
                >
                  View All Services
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-12 pt-8 text-blue-100">
              <div className="flex items-center">
                <ShieldCheck className="w-5 h-5 mr-2" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>Certified Professional</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
