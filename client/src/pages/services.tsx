import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SEO } from "@/components/SEO";
import ReactMarkdown from "react-markdown";
import servicesHeroImage from "@assets/IMG_0237_1760870579906.jpeg";
import { 
  GraduationCap, 
  Footprints, 
  User, 
  Route, 
  Home, 
  Phone, 
  Clock,
  MapPin,
  DollarSign,
  CheckCircle,
  TreePine,
  Camera,
  ClipboardList,
  MapPinned,
  Mountain,
  Heart,
  Brain
} from "lucide-react";
import ConsultationForm from "@/components/forms/consultation-form";
import type { Service } from "@shared/schema";

export default function ServicesPage() {
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);
  const [showBookingDialog, setShowBookingDialog] = useState(false);

  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  const serviceIcons = {
    "Behaviour Modification": GraduationCap,
    "Walk & Train Sessions": Footprints,
    "One-on-One Coaching": User,
    "Professional Walks": Route,
    "House Visits": Home,
    "Initial Assessment": ClipboardList,
    "In-Home Obedience": Home,
    "Virtual Coaching and Support": Phone,
    "Local Walk": MapPinned,
    "Adventure Walk and Training": Mountain,
    "Walk and Train": Footprints,
  };

  if (isLoading) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-8">
                  <div className="h-12 w-12 bg-gray-200 rounded-lg mb-6"></div>
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="h-20 bg-gray-200 rounded mb-6"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO 
        title="Obedience Training Boondall"
        description="Professional dog training services in North Brisbane. Assessment, coaching, in-home training, walk & train, and adventure walks. Play-based methods focused on genetic fulfillment and lasting results."
        canonical="/services"
        keywords={[
          'dog training services Brisbane',
          'puppy training North Brisbane',
          'in-home dog training',
          'walk and train Brisbane',
          'dog behaviour assessment',
          'adventure dog walks Brisbane'
        ]}
      />
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-charcoal">Professional Dog Training Services in Brisbane</h1>
                <p className="text-xl text-medium-grey">
                  Every dog is unique, every family is different. That's why we don't believe in cookie-cutter training methods. Our approach centers on play, connection, and understanding your dog's individual needs to build genuine partnerships that create confidence and joy for both you and your dog.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={servicesHeroImage} 
                alt="Tristan, NDTF certified professional dog trainer, providing play-based training services in North Brisbane with positive reinforcement methods" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services?.map((service) => {
              const IconComponent = serviceIcons[service.name as keyof typeof serviceIcons] || GraduationCap;
              return (
                <Card key={service.id} className="bg-light-grey card-hover border border-gray-100 overflow-hidden">
                  {service.imageUrl && (
                    <div className="relative h-64 w-full overflow-hidden">
                      <img 
                        src={service.imageUrl} 
                        alt={`${service.name} training service`}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="bg-primary-blue p-3 rounded-lg w-fit mb-6">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-charcoal mb-4">{service.name}</h3>
                    <div className="text-medium-grey mb-6 prose prose-sm max-w-none">
                      <ReactMarkdown>{service.description}</ReactMarkdown>
                    </div>
                    
                    {service.features && service.features.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-charcoal mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-medium-grey">
                              <CheckCircle className="w-4 h-4 mr-2 text-primary-blue" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-medium-grey">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-medium-grey">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{service.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-charcoal font-semibold">
                        <DollarSign className="w-4 h-4 mr-2" />
                        <span>{service.price}</span>
                      </div>
                    </div>
                    <Button 
                      onClick={() => {
                        setSelectedServiceId(service.id);
                        setShowBookingDialog(true);
                      }}
                      className="w-full btn-primary"
                    >
                      Book Session
                    </Button>
                  </CardContent>
                </Card>
              );
            })}

            {/* Free Consultation Card */}
            <Card className="bg-primary-blue text-white card-hover">
              <CardContent className="p-8">
                <div className="bg-white p-3 rounded-lg w-fit mb-6">
                  <Phone className="h-6 w-6 text-primary-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Free Phone Consultation</h3>
                <p className="text-blue-100 mb-6">
                  Unsure about the right service for your needs? Schedule a complimentary, no-obligation call with our knowledgeable team. During your Free Phone Consult, we'll help you clarify your options, answer your questions, and provide advice tailored to your situation. Whether you need general guidance or specific recommendations, we're here to support you—at absolutely no cost, so you can make confident, informed decisions.
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
                    <DialogDescription>Get complimentary advice tailored to your situation with our 15-minute phone consultation.</DialogDescription>
                    <ConsultationForm />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Training Philosophy Section */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Our Training Philosophy</h2>
          <p className="text-lg text-medium-grey mb-8">
            We believe training should be an enjoyable, engaging experience that creates genuine fulfillment for your dog. When dogs feel secure through clear expectations and consistent communication, they naturally become more confident and eager to learn. This approach builds lasting happiness for both dogs and their families.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Play-Based Learning</h3>
              <p className="text-medium-grey text-sm">
                We use play not just as a reward, but as a way to teach, connect, and motivate your dog.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Thoughtful Approach</h3>
              <p className="text-medium-grey text-sm">
                We understand your dog's natural learning style and work with their genetics to create genuine fulfillment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Owner Education</h3>
              <p className="text-medium-grey text-sm">
                We empower you with the tools and understanding to continue training at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
        <DialogContent className="max-w-md w-full p-6">
          <DialogTitle className="text-xl font-bold text-gray-800 mb-2">
            Secure Booking System
          </DialogTitle>
          <DialogDescription className="text-gray-600 mb-6">
            You'll access our secure booking platform where you can select your training service, choose your preferred time, and complete your booking with integrated payment processing.
          </DialogDescription>
          
          <div className="space-y-4">
            <Button 
              onClick={() => {
                const selectedService = services?.find(s => s.id === selectedServiceId);
                if (selectedService) {
                  const serviceMap: Record<string, number> = {
                    "Initial Canine Success Assessment": 16,
                    "One-on-One Private Coaching": 7,
                    "Virtual Coaching and Support": 10,
                    "Walk and Train": 6,
                    "In-home Day Train": 8,
                    "Adventure Walk and Training": 5,
                    "Local Walk": 4,
                  };
                  const serviceId = serviceMap[selectedService.name];
                  const url = serviceId 
                    ? `https://canineconfidence.simplybook.net/v2/#book/service/${serviceId}`
                    : "https://canineconfidence.simplybook.net/v2/";
                  window.open(url, '_blank');
                }
                setShowBookingDialog(false);
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium"
            >
              Continue to Secure Booking
            </Button>
            
            <Button 
              onClick={() => setShowBookingDialog(false)}
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
    </div>
  );
}
