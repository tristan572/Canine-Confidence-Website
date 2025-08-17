import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { 
  ShieldCheck, 
  Award, 
  Heart, 
  Users, 
  Target, 
  CheckCircle,
  Phone,
  MapPin,
  Clock
} from "lucide-react";
import BookingForm from "@/components/forms/booking-form";
import ConsultationForm from "@/components/forms/consultation-form";
import aboutHeroImage from "@assets/generated_images/Training_technique_demonstration_2fb75984.png";
import aboutTrainingImage from "@assets/generated_images/Successful_training_results_57dbd829.png";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-charcoal mb-6">
            About Canine Confidence
          </h1>
          <p className="text-xl text-medium-grey mb-8">
            With over 5 years of experience and 80 five-star reviews on the Madpaws platform, we're passionate about helping dogs and their humans live in harmony through modern training methods based in play, trust, and genetic fulfillment.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-charcoal">Our Mission</h2>
                <p className="text-lg text-medium-grey leading-relaxed">
                  At Canine Confidence, we're passionate about helping dogs and their humans live in harmony. Our mission is to transform dogs and their families' lives through our unique methods focusing on bond, trust, clarity, and fulfilment.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed">
                  We believe every dog and owner combination is unique, which is why we personalise plans for each individual partnership. We're truly dedicated to successful outcomes and seeing through until the end, offering ongoing support for the life of the dog.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed">
                  Play is at the heart of everything we do. We use it not just as a reward, but as a way to teach, connect, and motivate. Our approach focuses heavily on play with true care for the animal, ensuring your dog's genetic needs are met while building lasting confidence.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-white p-6 border border-gray-100">
                  <div className="text-3xl font-bold text-primary-blue mb-2">NDTF</div>
                  <div className="text-sm text-medium-grey">Certified Professional</div>
                </Card>
                <Card className="bg-white p-6 border border-gray-100">
                  <div className="text-3xl font-bold text-primary-blue mb-2">Insured</div>
                  <div className="text-sm text-medium-grey">Fully Covered</div>
                </Card>
                <Card className="bg-white p-6 border border-gray-100">
                  <div className="text-3xl font-bold text-primary-blue mb-2">5+</div>
                  <div className="text-sm text-medium-grey">Years Experience</div>
                </Card>
                <Card className="bg-white p-6 border border-gray-100">
                  <div className="text-3xl font-bold text-primary-blue mb-2">North Brisbane</div>
                  <div className="text-sm text-medium-grey">Local Expert</div>
                </Card>
              </div>
            </div>

            <div className="relative">
              <img 
                src={aboutHeroImage} 
                alt="Professional dog trainer in Brisbane working with happy dogs using trust-based methods" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Philosophy Section */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">Our Training Philosophy</h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              We believe in building confidence through play, skills, genetic fulfillment, and clarity—creating lasting bonds between dogs and their families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Play-Based Learning</h3>
              <p className="text-medium-grey">
                We use play not just as a reward, but as the primary method to teach, connect, and motivate. Play is the framework that strengthens bonds and builds lasting relationships.
              </p>
            </Card>

            <Card className="bg-white p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Skills</h3>
              <p className="text-medium-grey">
                We give dogs the essential skills they need to navigate through our world safely and in harmony with us, building confidence for life's everyday challenges.
              </p>
            </Card>

            <Card className="bg-white p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Genetic Fulfilment</h3>
              <p className="text-medium-grey">
                Every dog has genetic needs that must be met for true happiness. We identify and fulfil these needs as a priority.
              </p>
            </Card>

            <Card className="bg-white p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Clarity in Life</h3>
              <p className="text-medium-grey">
                Clear expectations and consistent communication create an environment where dogs feel secure and confident because they understand what's expected of them.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={aboutTrainingImage} 
                alt="Brisbane dog training environment showing professional leash training techniques" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-primary-blue p-6 rounded-xl shadow-lg text-white max-w-xs">
                <div className="text-center">
                  <div className="text-lg font-bold mb-1">We're not just here to train dogs</div>
                  <div className="text-blue-100 text-sm">We create real relationships and real confidence that lasts.</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-charcoal">Why Choose Canine Confidence?</h2>
                <p className="text-lg text-medium-grey leading-relaxed">
                  With a proven track record in North Brisbane, we've helped hundreds of dogs and their families build stronger, happier relationships through science-backed training methods.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">5+ Years Professional Experience</h3>
                    <p className="text-medium-grey">Certified professional dog trainer with extensive experience in behavior modification and obedience training.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">80+ Five-Star Reviews</h3>
                    <p className="text-medium-grey">Consistently rated 5 stars on Madpaws by satisfied clients who've seen real, lasting results.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">Lifetime Support Guarantee</h3>
                    <p className="text-medium-grey">We're committed to your success with ongoing support for the life of your dog.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">Modern, Science-Based Methods</h3>
                    <p className="text-medium-grey">Using the latest research in canine behavior and learning to ensure effective, humane training.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">Our Approach</h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              Every training program is tailored to your dog's unique needs, personality, and genetic fulfillment requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white p-6 text-center border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-primary-blue" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Assessment</h3>
              <p className="text-sm text-medium-grey">Comprehensive evaluation of your dog's behavior, needs, and goals.</p>
            </Card>

            <Card className="bg-white p-6 text-center border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary-blue" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Custom Plan</h3>
              <p className="text-sm text-medium-grey">Personalized training program designed specifically for your dog.</p>
            </Card>

            <Card className="bg-white p-6 text-center border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary-blue" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Training</h3>
              <p className="text-sm text-medium-grey">Hands-on sessions with both dog and owner to build skills and confidence.</p>
            </Card>

            <Card className="bg-white p-6 text-center border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6 text-primary-blue" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Support</h3>
              <p className="text-sm text-medium-grey">Ongoing guidance and support to maintain and improve results.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-charcoal mb-6">Ready to Start?</h2>
          <p className="text-xl text-medium-grey mb-12">
            Take the first step towards building a stronger relationship with your dog. We're here to help you succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary-blue hover:bg-blue-600 text-white px-8 py-4 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Book Training Session
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <BookingForm />
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="border-primary-blue text-primary-blue hover:bg-blue-50 px-8 py-4 text-lg">
                  Free Consultation
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <ConsultationForm />
              </DialogContent>
            </Dialog>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-primary-blue" />
              <div>
                <div className="font-semibold text-charcoal">Service Area</div>
                <div className="text-medium-grey">North Brisbane & Surrounds</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-primary-blue" />
              <div>
                <div className="font-semibold text-charcoal">Availability</div>
                <div className="text-medium-grey">6 Days a Week</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary-blue" />
              <div>
                <div className="font-semibold text-charcoal">Response Time</div>
                <div className="text-medium-grey">Within 24 Hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}