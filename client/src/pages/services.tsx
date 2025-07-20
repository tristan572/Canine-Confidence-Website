import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import servicesHeroImage from "@assets/image_1750049481697.png";
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
  ClipboardList
} from "lucide-react";
import BookingWidget from "@/components/ui/booking-widget";
import ConsultationForm from "@/components/forms/consultation-form";
import type { Service } from "@shared/schema";

export default function ServicesPage() {
  const [showBookingWidget, setShowBookingWidget] = useState(false);
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
    "Virtual Consultation": Phone,
    "Local Walk": Footprints,
    "Adventure Walk": Footprints,
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
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-charcoal">
                  Professional Dog Training Services
                </h1>
                <p className="text-xl text-medium-grey">
                  Professional dog training in Brisbane, where trust, play, and clear communication builds stronger bonds. We help you create lasting behavioural foundations using modern methods that fulfils your dog's genetic desires and brings balance to your home.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
                      Free Consultation
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <ConsultationForm />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={servicesHeroImage} 
                alt="Professional dog training session showing positive reinforcement techniques" 
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
                <Card key={service.id} className="bg-light-grey card-hover border border-gray-100">
                  <CardContent className="p-8">
                    <div className="bg-primary-blue p-3 rounded-lg w-fit mb-6">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-charcoal mb-4">{service.name}</h3>
                    <p className="text-medium-grey mb-6">{service.description}</p>
                    
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
                      onClick={() => setShowBookingWidget(true)}
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
                  Not sure which service is right for you? Get personalized advice in a quick 15-minute phone consultation at no cost.
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
                  <DialogContent className="max-w-md">
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
            At Canine Confidence, we believe that confident dogs come from confident owners. Our considerate, relationship-focused approach ensures lasting results that strengthen the bond between you and your dog.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold text-charcoal mb-2">Play-Based Learning</h3>
              <p className="text-medium-grey text-sm">
                We use play not just as a reward, but as a way to teach, connect, and motivate your dog.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold text-charcoal mb-2">Positive Methods</h3>
              <p className="text-medium-grey text-sm">
                Science-based, humane training techniques that create lasting behavioral change.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold text-charcoal mb-2">Owner Education</h3>
              <p className="text-medium-grey text-sm">
                We empower you with the tools and understanding to continue training at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BookingWidget 
        isOpen={showBookingWidget} 
        onClose={() => setShowBookingWidget(false)} 
      />
    </div>
  );
}
