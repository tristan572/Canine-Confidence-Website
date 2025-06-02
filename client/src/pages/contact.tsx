import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  HeadphonesIcon
} from "lucide-react";
import ContactForm from "@/components/forms/contact-form";
import ConsultationForm from "@/components/forms/consultation-form";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-charcoal mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-medium-grey mb-8">
            Ready to start your dog's transformation? We're here to help with any questions about our training services.
          </p>
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
                    <div className="text-medium-grey mb-1">0411 123 456</div>
                    <div className="text-sm text-medium-grey">Available 7 days a week, 8AM - 8PM</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-light-blue p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal mb-1">Email</div>
                    <div className="text-medium-grey mb-1">hello@canineconfidence.com.au</div>
                    <div className="text-sm text-medium-grey">We'll respond within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-light-blue p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal mb-1">Service Area</div>
                    <div className="text-medium-grey mb-1">Brisbane & Surrounding Areas</div>
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
                      <div>Monday - Friday: 8:00 AM - 8:00 PM</div>
                      <div>Saturday - Sunday: 9:00 AM - 6:00 PM</div>
                    </div>
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
                      Not sure which service is right for you? Get personalized advice in a quick 15-minute phone consultation at no cost.
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="btn-primary">
                          Request Free Call
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
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
                We typically have availability within 1-2 weeks of your initial consultation. For urgent behavioral issues, we may be able to accommodate earlier sessions.
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
                We provide mobile training services throughout Brisbane and surrounding areas including Logan, Ipswich, and the Gold Coast corridor.
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
                Yes, we specialize in behavioral modification including aggression cases. Safety is our top priority, and we'll assess each situation individually.
              </p>
            </Card>

            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">What payment methods do you accept?</h3>
              <p className="text-medium-grey text-sm">
                We accept cash, bank transfer, and all major credit cards. Payment is due at the time of service unless other arrangements are made.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Need Immediate Help?</h2>
            <p className="text-xl text-blue-100">
              For urgent behavioral issues or emergencies, don't hesitate to call us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-white text-primary-blue hover:bg-gray-50 px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 0411 123 456
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-blue px-8 py-4 text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Text for Quick Response
              </Button>
            </div>
            <p className="text-blue-100 text-sm">
              Available 7 days a week for urgent matters
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
