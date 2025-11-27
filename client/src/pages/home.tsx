import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SEO } from "@/components/SEO";
import { LocalBusinessSchema } from "@/components/StructuredData";
import heroImageJpeg from "@assets/IMG_0177_fallback_opt.jpg";
import heroImage400 from "@assets/IMG_0177_hero_400_opt.webp";
import heroImage800 from "@assets/IMG_0177_hero_800_opt.webp";
import heroImage1200 from "@assets/IMG_0177_hero_1200_opt.webp";
import testimonialsImageJpeg from "@assets/DSC_0171_fallback_opt.jpg";
import testimonialsImage400 from "@assets/DSC_0171_testimonials_400_opt.webp";
import testimonialsImage800 from "@assets/DSC_0171_testimonials_800_opt.webp";
import testimonialsImage1200 from "@assets/DSC_0171_testimonials_1200_opt.webp";
import { 
  GraduationCap, 
  Footprints, 
  User, 
  Route, 
  Home, 
  Phone, 
  ShieldCheck, 
  Award, 
  Heart,
  Clock,
  MapPin,
  DollarSign,
  Target,
  Calendar,
  CheckCircle,
  Star,
  ClipboardList,
  MapPinned,
  Mountain
} from "lucide-react";
import BookingWidget from "@/components/ui/booking-widget";
import ConsultationForm from "@/components/forms/consultation-form";
import ServiceCard from "@/components/ui/service-card";
import ProductCard from "@/components/ui/product-card";
import BlogCard from "@/components/ui/blog-card";
import TestimonialCard from "@/components/ui/testimonial-card";
import ReactMarkdown from "react-markdown";
import type { Service, Product, BlogPost, Package, Testimonial } from "@shared/schema";

export default function HomePage() {
  const [showBookingWidget, setShowBookingWidget] = useState(false);
  
  const { data: services, isLoading: servicesLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  const { data: packages, isLoading: packagesLoading } = useQuery<Package[]>({
    queryKey: ["/api/packages"],
  });

  const { data: products, isLoading: productsLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const { data: blogPosts, isLoading: blogLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  const { data: testimonials, isLoading: testimonialsLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const serviceIcons = {
    "Initial Assessment": ClipboardList,
    "Behaviour Modification": GraduationCap,
    "One-on-One Coaching": User,
    "In-Home Obedience": Home,
    "Walk and Train": Footprints,
    "Virtual Coaching and Support": Phone,
    "Local Walk": MapPinned,
    "Professional Walks": Route,
    "Walk & Train Sessions": Footprints,
    "House Visits": Home,
    "Adventure Walk and Training": Mountain,
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Professional Dog Training Boondall"
        description="Transform your dog's behaviour with Canine Confidence. NDTF certified dog training in North Brisbane focusing on play-based learning, genetic fulfillment, and lasting results. Book your free consultation today."
        canonical="/"
        keywords={[
          'dog training North Brisbane',
          'puppy training',
          'dog behaviour specialist',
          'certified dog trainer Brisbane',
          'play-based dog training',
          'positive reinforcement training',
          'dog obedience Brisbane',
          'reactive dog training'
        ]}
      />
      <LocalBusinessSchema />
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
                  North Brisbane's Most <span className="text-primary-blue">Trusted</span> Dog Trainer
                </h1>
                <h2 className="text-3xl lg:text-4xl font-semibold text-charcoal leading-tight">
                  Canine Confidence: <span className="text-primary-blue">Building Confident Dogs through Clarity and Play</span>
                </h2>
                <p className="text-xl text-medium-grey leading-relaxed">
                  Based in Boondall, we move beyond basic obedience. We use advanced, play-centred methods and canine psychology to give your dog the clear communication they need. The result is a fulfilled dog and an unbreakable bond, not just compliance.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="btn-primary text-lg px-8 py-4">
                      Free Phone Consult
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
                    <DialogTitle>Free Phone Consultation</DialogTitle>
                    <DialogDescription>Schedule a complimentary phone consultation to discuss your dog's training needs and find the right solution for your family.</DialogDescription>
                    <ConsultationForm />
                  </DialogContent>
                </Dialog>

                <Button 
                  onClick={() => setShowBookingWidget(true)}
                  variant="outline"
                  className="btn-secondary text-lg px-8 py-4"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Start Training Today
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-charcoal">5+</div>
                  <div className="text-sm text-medium-grey">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-charcoal">200+</div>
                  <div className="text-sm text-medium-grey">Confident Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-charcoal">100%</div>
                  <div className="text-sm text-medium-grey">Happier Dogs</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <picture>
                <source 
                  type="image/webp"
                  srcSet={`${heroImage400} 400w, ${heroImage800} 800w, ${heroImage1200} 1200w`}
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, 50vw"
                />
                <img 
                  src={heroImageJpeg} 
                  alt="Tristan, NDTF certified professional dog trainer, demonstrating expert dog training techniques in Brisbane outdoor setting" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  width={600}
                  height={400}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal">Certified Trainer</div>
                    <div className="text-sm text-medium-grey">Professional & Insured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4" />
                  Client Reviews
                </div>
                <h2 className="text-4xl font-bold text-charcoal">Over 100+ 5-Star Outcomes</h2>
                <p className="text-xl text-medium-grey">Read the real stories from North Brisbane families who have achieved lasting behaviour change and strengthened their bond through our clear, play-centred approach.</p>
              </div>

              {testimonialsLoading ? (
                <div className="space-y-6">
                  {[...Array(2)].map((_, i) => (
                    <Card key={i} className="animate-pulse">
                      <CardContent className="p-6">
                        <div className="h-4 bg-gray-200 rounded mb-4"></div>
                        <div className="h-16 bg-gray-200 rounded mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded w-32"></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : testimonials && testimonials.length > 0 ? (
                <div className="space-y-6">
                  {testimonials.slice(0, 4).map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-medium-grey">
                    More reviews available on our{" "}
                    <a 
                      href="https://www.madpaws.com.au/petsitter/boondall-qld/tristan-p-nationally-accredited-dog-trainer-professional-reliable-and-flexible"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-blue hover:underline"
                    >
                      Madpaws profile
                    </a>.
                  </p>
                </div>
              )}
            </div>
            
            <div className="relative">
              <picture>
                <source 
                  type="image/webp"
                  srcSet={`${testimonialsImage400} 400w, ${testimonialsImage800} 800w, ${testimonialsImage1200} 1200w`}
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, 50vw"
                />
                <img 
                  src={testimonialsImageJpeg} 
                  alt="Canine Confidence dog training in action - North Brisbane trainer working with French Bulldog using modern positive reinforcement techniques" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs border">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-charcoal">5.0/5</span>
                </div>
                <p className="text-sm text-medium-grey">
                  "Professional, effective training that really works!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Training Packages Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white content-visibility-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              Most Popular Training Solutions
            </div>
            <h2 className="text-4xl font-bold text-charcoal mb-4">Comprehensive Training Packages</h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              Stop wasting time on generic, one-size-fits-all training that fails to address the root cause. Our packages are a personalised strategy, meticulously tailored to your dog's genetics, individual behaviour, and your Brisbane lifestyle. We use our play-centred methodology to achieve lasting behaviour change and build an unbreakable bond that lasts a lifetime.
            </p>
          </div>

          {packagesLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-8">
                    <div className="h-6 bg-gray-200 rounded mb-4"></div>
                    <div className="h-16 bg-gray-200 rounded mb-6"></div>
                    <div className="h-8 bg-gray-200 rounded mb-4"></div>
                    <div className="space-y-2 mb-6">
                      {[...Array(3)].map((_, j) => (
                        <div key={j} className="h-4 bg-gray-200 rounded"></div>
                      ))}
                    </div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {packages?.map((pkg) => (
                <Card key={pkg.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 relative overflow-hidden group">
                  {pkg.name === "Complete Confidence Package" && (
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-yellow-400 to-orange-400 text-white px-3 py-1 text-xs font-bold">
                      BEST VALUE
                    </div>
                  )}
                  {pkg.imageUrl && (
                    <div className="h-48 w-full">
                      <img 
                        src={pkg.imageUrl} 
                        alt={`${pkg.name} training session`}
                        className="w-full h-full object-cover"
                        width={400}
                        height={192}
                        loading="lazy"
                      />
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                      <div className="text-gray-600 text-sm mb-4 prose prose-sm max-w-none text-left">
                        <ReactMarkdown>{pkg.description}</ReactMarkdown>
                      </div>
                      
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

                    <div className="space-y-3 mb-8">
                      <h4 className="font-semibold text-gray-800 text-sm">What's Included:</h4>
                      <ul className="space-y-2">
                        {pkg.features?.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                        {pkg.features && pkg.features.length > 4 && (
                          <li className="text-sm text-blue-600 font-medium">
                            + {pkg.features.length - 4} more benefits
                          </li>
                        )}
                      </ul>
                    </div>

                    <Link href="/packages">
                      <Button className="w-full btn-primary text-sm py-3 group-hover:bg-blue-700 transition-colors">
                        <Calendar className="w-4 h-4 mr-2" />
                        Learn More & Book
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-charcoal mb-2">Not sure which package is right for you?</h3>
              <p className="text-medium-grey mb-4">Get personalised recommendations in a free 15-minute consultation</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="btn-primary px-6">
                    <Phone className="w-4 h-4 mr-2" />
                    Get Free Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogTitle>Free Phone Consultation</DialogTitle>
                  <DialogDescription>Get personalised recommendations for your dog's training needs with a complimentary 15-minute phone consultation.</DialogDescription>
                  <ConsultationForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 bg-white content-visibility-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">Our Training Services</h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              Training isn't a chore—it's high-value engagement. By placing our play-based methodology at the centre of our approach, we accelerate your dog's learning and focus. This professional methodology ensures lasting results and builds a strong, trusting bond.
            </p>
          </div>

          {servicesLoading ? (
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
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services?.slice(0, 5).map((service) => {
                const IconComponent = serviceIcons[service.name as keyof typeof serviceIcons] || GraduationCap;
                return (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    icon={IconComponent}
                  />
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
                    <DialogContent className="max-w-md">
                      <DialogTitle>Request Free Phone Call</DialogTitle>
                      <DialogDescription>Schedule a 15-minute complimentary consultation to discuss your training needs and get expert advice.</DialogDescription>
                      <ConsultationForm />
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" className="btn-secondary">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Blog Preview Section */}
      <section className="py-20 bg-gray-50 content-visibility-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">Free Training Advice</h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">Understanding your dog's individual needs and how to effectively communicate is key to building the confident, fulfilled relationship you both deserve.</p>
          </div>

          {blogLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <div className="h-48 bg-gray-200"></div>
                  <CardContent className="p-6">
                    <div className="h-4 bg-gray-200 rounded mb-3"></div>
                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                    <div className="h-16 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts?.slice(0, 3).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button className="btn-primary">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-primary-blue content-visibility-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Ready to Build Real Confidence?</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Stop the frustration caused by confusion and inconsistency. Experience our proven, play-centred approach that delivers confidence through clarity, ensuring an unbreakable bond that lasts a lifetime.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setShowBookingWidget(true)}
                className="bg-white text-primary-blue hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your First Session
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary-blue px-8 py-4 text-lg font-semibold transition-colors">
                    Request Free Call
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogTitle>Request Free Call</DialogTitle>
                  <DialogDescription>Connect with us for a complimentary consultation to discuss how we can help you and your dog.</DialogDescription>
                  <ConsultationForm />
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 text-blue-100">
              <div className="flex items-center">
                <ShieldCheck className="w-5 h-5 mr-2" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>Certified Professional</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                <span>Satisfaction Guaranteed</span>
              </div>
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
