import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
  ClipboardList
} from "lucide-react";
import BookingWidget from "@/components/ui/booking-widget";
import ConsultationForm from "@/components/forms/consultation-form";
import ServiceCard from "@/components/ui/service-card";
import ProductCard from "@/components/ui/product-card";
import BlogCard from "@/components/ui/blog-card";
import type { Service, Product, BlogPost, Package } from "@shared/schema";

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

  const serviceIcons = {
    "Initial Assessment": ClipboardList,
    "Behaviour Modification": GraduationCap,
    "One-on-One Coaching": User,
    "In-Home Obedience": Home,
    "Walk and Train": Footprints,
    "Virtual Consultation": Phone,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
                  Where <span className="text-primary-blue">Confidence</span> Begins
                </h1>
                <p className="text-xl text-medium-grey leading-relaxed">
                  Tailored training solutions designed to build confidence in both dogs and their owners through considerate, relationship-focused methods.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setShowBookingWidget(true)}
                  className="btn-primary text-lg px-8 py-4"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Start Training Today
                </Button>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
                      Free Phone Consult
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <ConsultationForm />
                  </DialogContent>
                </Dialog>
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
              <img 
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional dog trainer building confidence with happy dogs in Brisbane training session" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              
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

      {/* Training Packages Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              Most Popular Training Solutions
            </div>
            <h2 className="text-4xl font-bold text-charcoal mb-4">Comprehensive Training Packages</h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              Our structured training programs are designed to build confidence in both you and your dog through proven methods and ongoing support.
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
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                      
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
                  <ConsultationForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">Our Training Services</h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              Professional dog training in Brisbane, where trust, play, and clear communication builds stronger bonds. We help you create lasting behavioural foundations using modern methods that fulfils your dog's genetic desires and brings balance to your home.
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

      {/* Products Section */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">Training Products</h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              Professional-grade training equipment and toys recommended by our trainers to support your dog's learning journey.
            </p>
          </div>

          {productsLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <div className="h-48 bg-gray-200"></div>
                  <CardContent className="p-6">
                    <div className="h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-16 bg-gray-200 rounded mb-4"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products?.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/products">
              <Button variant="outline" className="btn-secondary">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">Free Training Advice</h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              Expert tips, guides, and insights to help you understand your dog better and build a stronger relationship together.
            </p>
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
      <section className="py-20 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Ready to Build Confidence?</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Start your dog's training journey today with a free consultation or book your first session online.
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
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-blue px-8 py-4 text-lg font-semibold">
                    Request Free Call
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
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
