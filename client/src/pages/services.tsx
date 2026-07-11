import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SEO } from "@/components/SEO";
import { ServiceSchema } from "@/components/StructuredData";
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
  Dna,
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
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  const handleBookService = (service: Service) => {
    const serviceMap: Record<string, number> = {
      "Initial Canine Success Assessment": 16,
      "One-on-One Private Coaching": 7,
      "Virtual Coaching and Support": 10,
      "Walk and Train": 6,
      "In-home Day Train": 8,
      "Adventure Walk and Training": 5,
      "Local Walk": 4,
    };
    const serviceId = serviceMap[service.name];
    const url = serviceId
      ? `https://canineconfidence.simplybook.net/v2/#book/service/${serviceId}`
      : "https://canineconfidence.simplybook.net/v2/";
    window.open(url, '_blank');
  };

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
    "Walk and Train": Footprints,  "Initial Canine Success Assessment": ClipboardList,  "One-on-One Private Coaching": Brain,  "In-home Day Train": Home,  "Initial Canine Success Assessment": ClipboardList,
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
                title="Dog Training Services | North Brisbane | Canine Confidence"
                description="Pulling on lead, ignoring recall, jumping on guests? I offer in-home dog training, walk & train, and adventure sessions across Brisbane's Northside."
        canonical="https://canineconfidence.com.au/services"
        keywords={[
          'dog training services Brisbane',
          'puppy training North Brisbane',
          'in-home dog training',
          'walk and train Brisbane',
          'dog behaviour assessment',
          'adventure dog walks Brisbane'
        ]}
      />
      {services?.map((service) => (
        <ServiceSchema key={service.id} name={service.name} description={service.description} price={service.price} />
      ))}
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-charcoal"><span className="text-primary-blue">Tailored</span> Dog Training Services in North Brisbane</h1>
                <p className="text-xl text-medium-grey">
                  I work with each dog as an individual. That means looking at genetics, drives, and how your household actually runs — then building training around that. The result is a dog that's calm, clear, and genuinely connected to you.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={servicesHeroImage} 
                alt="Tristan providing dog training in North Brisbane"
                className="rounded-2xl shadow-2xl w-full h-auto"
                width={600}
                height={400}
                loading="lazy"
                decoding="async"
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
                        width={400}
                        height={256}
                        loading="lazy"
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
                      onClick={() => handleBookService(service)}
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
                  Not sure which service fits? Book a free 15-minute call and I'll help you work out what your dog actually needs — no obligation, no sales pitch.
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
                    <DialogDescription>Get complimentary advice tailored to your situation with my 15-minute phone consultation.</DialogDescription>
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">My Method: The Confidence Difference</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">The Confidence Difference</h3>
              <p className="text-medium-grey">
                Training should be high-value engagement that creates behaviour-specific fulfilment for your dog. When dogs feel secure through clarity and consistent boundaries, they naturally build confidence and motivation. This approach builds lasting change and the strong bond you are looking for.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">Play as Engagement Engine</h3>
              <p className="text-medium-grey">
                I use play not just as a reward, but as a mechanism to accelerate learning, build motivation, and create high-level engagement with the owner.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mb-4">
                <Dna className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">Genetic Fulfilment</h3>
              <p className="text-medium-grey">
                I base my tailored plans on understanding your dog's genetics and individual learning style, delivering unrivalled fulfilment that addresses the root cause of problem behaviour.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">Owner Mastery</h3>
              <p className="text-medium-grey">
                I empower you with the clarity and practical tools necessary to maintain and advance your dog's training well beyond our sessions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
