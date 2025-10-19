import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SEO } from "@/components/SEO";
import BookingWidget from "@/components/ui/booking-widget";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  HeadphonesIcon,
  Calendar,
  Video,
  Facebook,
  Instagram
} from "lucide-react";
import ContactForm from "@/components/forms/contact-form";
import ConsultationForm from "@/components/forms/consultation-form";
import ServiceAreaMap from "@/components/ui/service-area-map";
import contactHeroImage from "@assets/image_1750049297197.png";
import { useState } from "react";

export default function ContactPage() {
  const [showBookingWidget, setShowBookingWidget] = useState(false);
  
  return (
    <div className="min-h-screen">
      <SEO 
        title="Contact Us - Dog Training Brisbane"
        description="Contact Canine Confidence for professional dog training in North Brisbane. Book a free consultation, call 0409521358, or visit us. Serving Brisbane families and their dogs."
        canonical="/contact"
        keywords={[
          'dog trainer contact Brisbane',
          'book dog training Brisbane',
          'dog training consultation',
          'North Brisbane dog trainer contact'
        ]}
      />
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-charcoal">
                  Get in Touch
                </h1>
                <p className="text-xl text-medium-grey">
                  Ready to start your dog's transformation? We're here to help with any questions about our training services.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={contactHeroImage} 
                alt="Happy confident dog enjoying life after successful training with Canine Confidence in North Brisbane, demonstrating effective play-based training results" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-charcoal">Contact Information</h2>
                <p className="text-lg text-medium-grey">
                  We'd love to hear from you! Get in touch with us using any of the methods below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-light-blue p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal mb-1">Phone</div>
                    <div className="text-medium-grey mb-1">0409521358</div>
                    <div className="text-sm text-medium-grey">Available Monday - Saturday, 8AM - 8PM</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-light-blue p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal mb-1">Email</div>
                    <div className="text-medium-grey mb-1">info@canineconfidence.com.au</div>
                    <div className="text-sm text-medium-grey">We'll respond within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-light-blue p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal mb-1">Service Area</div>
                    <div className="text-medium-grey mb-1">20km radius from Boondall, Brisbane</div>
                    <div className="text-sm text-medium-grey">Mobile service - we come to you!</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-light-blue p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal mb-1">Business Hours</div>
                    <div className="text-medium-grey space-y-1">
                      <div>Monday - Friday: 5:30 AM - 8:00 PM</div>
                      <div>Saturday: 9:00 AM - 5:00 PM</div>
                      <div>Sunday: Closed</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-light-blue p-3 rounded-lg">
                    <Video className="h-6 w-6 text-primary-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal mb-1">Video Consultations</div>
                    <div className="text-medium-grey mb-1">Available Worldwide</div>
                    <div className="text-sm text-medium-grey">Remote training via video call</div>
                  </div>
                </div>
              </div>

              {/* Free Consultation Card */}
              <Card className="bg-light-grey p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-blue p-3 rounded-lg">
                    <HeadphonesIcon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-charcoal mb-2">Free Phone Consultation</h3>
                    <p className="text-medium-grey mb-4">
                      Unsure about the right service for your needs? Schedule a complimentary, no-obligation call with our knowledgeable team. During your Free Phone Consult, we'll help you clarify your options, answer your questions, and provide advice tailored to your situation. Whether you need general guidance or specific recommendations, we're here to support you—at absolutely no cost, so you can make confident, informed decisions.
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="btn-primary">
                          Request Free Call
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogTitle>Free Phone Consultation</DialogTitle>
                        <DialogDescription>Schedule a complimentary 15-minute phone consultation for personalised advice and recommendations.</DialogDescription>
                        <ConsultationForm />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="bg-light-grey p-8 rounded-xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-charcoal mb-2">Send us a Message</h3>
                <p className="text-medium-grey">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              Service Coverage
            </div>
            <h2 className="text-3xl font-bold text-charcoal mb-4">Our Service Area</h2>
            <p className="text-lg text-medium-grey max-w-3xl mx-auto mb-4">
              Based in Boondall, Brisbane, we provide mobile dog training services within a 20km radius. 
              Our service area covers North Brisbane and surrounding suburbs. We come to you for your convenience!
            </p>
            <p className="text-medium-grey max-w-3xl mx-auto">
              <strong>Note:</strong> Travel beyond 10km may incur additional charges. We're also available worldwide for video call consultations and training sessions!
            </p>
          </div>
          
          <ServiceAreaMap />
          
          <div className="mt-8 text-center">
            <p className="text-medium-grey">
              Not sure if you're in our service area? <a href="tel:0409521358" className="text-primary-blue hover:underline font-medium">Give us a call</a> and we'll be happy to check!
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-br from-primary-blue to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Connect With Us</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Follow our journey, see training success stories, and get daily tips on building confidence with your dog!
              </p>
            </div>
            
            <div className="flex justify-center gap-6">
              <a 
                href="https://facebook.canineconfidence.com.au" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                data-testid="link-facebook-contact"
                className="group"
              >
                <div className="bg-white hover:bg-gray-100 p-6 rounded-2xl shadow-xl transition-all transform hover:scale-105">
                  <Facebook className="h-12 w-12 text-primary-blue mx-auto mb-3" />
                  <div className="text-charcoal font-semibold">Facebook</div>
                  <div className="text-sm text-medium-grey mt-1">@canineconfidence</div>
                </div>
              </a>
              
              <a 
                href="https://instagram.canineconfidence.com.au" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                data-testid="link-instagram-contact"
                className="group"
              >
                <div className="bg-white hover:bg-gray-100 p-6 rounded-2xl shadow-xl transition-all transform hover:scale-105">
                  <Instagram className="h-12 w-12 text-primary-blue mx-auto mb-3" />
                  <div className="text-charcoal font-semibold">Instagram</div>
                  <div className="text-sm text-medium-grey mt-1">@canineconfidence</div>
                </div>
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-white text-lg">
                <strong>Join our community!</strong> See before-and-after transformations, training videos, and expert tips to help your dog thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-medium-grey">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">How soon can we start training?</h3>
              <p className="text-medium-grey text-sm">
                We typically have availability within 1-2 weeks of your initial consultation. For urgent behavioural issues, we may be able to accommodate earlier sessions.
              </p>
            </Card>

            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">Do you offer package deals?</h3>
              <p className="text-medium-grey text-sm">
                Yes! We offer multi-session packages that provide better value and ensure consistent progress. We'll discuss options during your consultation.
              </p>
            </Card>

            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">What areas do you service?</h3>
              <p className="text-medium-grey text-sm">
                Based in Boondall, we service a 20km radius covering North Brisbane and surrounding suburbs. Travel beyond 10km may incur additional charges. Check out the interactive map above to see if you're in our service area! We also offer video consultations worldwide for remote training.
              </p>
            </Card>

            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">What's your cancellation policy?</h3>
              <p className="text-medium-grey text-sm">
                We require 24 hours notice for cancellations. Sessions cancelled with less notice may incur a cancellation fee.
              </p>
            </Card>

            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">Do you work with aggressive dogs?</h3>
              <p className="text-medium-grey text-sm">
                We specialise in dog behavioural modification, however we do not handle cases involving human aggression. Please get in contact to ensure we can properly assess your situation and provide appropriate references if needed.
              </p>
            </Card>

            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">What payment methods do you accept?</h3>
              <p className="text-medium-grey text-sm">
                We accept all major payment methods through our secure online scheduling system. Payment is required upfront before sessions to confirm your booking.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Ready to Start Section */}
      <section className="py-16 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Ready to Begin Your Dog's Journey?</h2>
            <p className="text-xl text-blue-100">
              Let's chat about your dog's unique needs and start building the partnership you've been looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-white text-primary-blue hover:bg-gray-50 px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 0409521358
              </Button>
              <Button 
                onClick={() => setShowBookingWidget(true)}
                className="bg-white text-primary-blue hover:bg-gray-50 border border-white px-8 py-4 text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Now
              </Button>
            </div>
            <p className="text-blue-100 text-sm">
              We're here to help you and your dog thrive together
            </p>
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
