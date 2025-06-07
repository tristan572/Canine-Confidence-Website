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
            With over 5 years of experience and 80 five-star reviews on Madpaws, we're passionate about helping dogs and their humans live in harmony through modern training methods focused on play, trust, and genetic fulfillment.
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
                  At Canine Confidence, we're passionate about helping dogs and their humans live in harmony. Based in North Brisbane, our mission is to transform challenging behaviors through modern training methods focused on play, trust, bond, clear communication, and genetic fulfillment.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed">
                  We believe every dog and owner combination is unique, which is why we personalize plans for each individual partnership. We're truly dedicated to successful outcomes and seeing through until the end, offering ongoing support for the life of the dog.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed">
                  Play is at the heart of everything we do. We use it not just as a reward, but as a way to teach, connect, and motivate. Our approach focuses heavily on play with true care for the animal, ensuring your dog's genetic needs are met while building lasting confidence.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800" 
                alt="Professional dog trainer in Brisbane working with happy dogs using trust-based methods" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-white p-6 border border-gray-100">
                  <div className="text-3xl font-bold text-primary-blue mb-2">CCPDT</div>
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
                src="https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700" 
                alt="Professional dog trainer with happy dogs" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-primary-blue p-6 rounded-xl shadow-lg text-white max-w-xs">
                <div className="text-center">
                  <div className="text-lg font-bold mb-1">We're not just here to train dogs</div>
                  <div className="text-blue-100 text-sm">We create real relationships and real confidence that lasts.</div>
                </div>
              </div>
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
              We believe that effective dog training starts with understanding, communication, and building trust between dog and owner.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white p-8 text-center card-hover">
              <div className="bg-primary-blue p-4 rounded-full w-fit mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Relationship-Focused</h3>
              <p className="text-medium-grey">
                We prioritize building strong, trusting relationships between dogs and their owners as the foundation for all training success.
              </p>
            </Card>

            <Card className="bg-white p-8 text-center card-hover">
              <div className="bg-primary-blue p-4 rounded-full w-fit mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Modern Training Methods</h3>
              <p className="text-medium-grey">
                Our training techniques focus on play, trust, bond, clear communication, and fulfilling your dog's genetic needs.
              </p>
            </Card>

            <Card className="bg-white p-8 text-center card-hover">
              <div className="bg-primary-blue p-4 rounded-full w-fit mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Owner Empowerment</h3>
              <p className="text-medium-grey">
                We teach owners the skills and confidence they need to continue training and maintain results long after our sessions end.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-4">What Makes Us Different</h2>
            <p className="text-lg text-medium-grey">
              Our unique approach combines professional expertise with genuine care for every dog and owner we work with.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="bg-primary-blue p-3 rounded-lg">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Play-Based Learning</h3>
                <p className="text-medium-grey">
                  We use play not just as a reward, but as a way to teach, connect, and motivate. This makes training enjoyable for both dogs and owners while creating lasting behavioral changes.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-primary-blue p-3 rounded-lg">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Individualized Approach</h3>
                <p className="text-medium-grey">
                  Every dog is unique, and so is every family. We create customized training plans that address your specific challenges and goals, ensuring the best possible outcomes.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-primary-blue p-3 rounded-lg">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Ongoing Support</h3>
                <p className="text-medium-grey">
                  Our commitment doesn't end when the session does. We provide ongoing support and guidance to ensure you and your dog continue to thrive together.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-primary-blue p-3 rounded-lg">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Local Brisbane Expertise</h3>
                <p className="text-medium-grey">
                  As Brisbane locals, we understand the unique challenges and opportunities for dog training in our city, from dog parks to local regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Track Record</h2>
            <p className="text-xl text-blue-100">
              Numbers that speak to our commitment to excellence and results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-100">Satisfaction Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Service Areas</h2>
          <p className="text-lg text-medium-grey mb-8">
            We provide mobile dog training services throughout Brisbane and surrounding areas.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white p-6">
              <MapPin className="h-8 w-8 text-primary-blue mx-auto mb-4" />
              <h3 className="font-semibold text-charcoal mb-2">Brisbane City</h3>
              <p className="text-medium-grey text-sm">Central Brisbane and inner suburbs</p>
            </Card>
            
            <Card className="bg-white p-6">
              <MapPin className="h-8 w-8 text-primary-blue mx-auto mb-4" />
              <h3 className="font-semibold text-charcoal mb-2">North Brisbane</h3>
              <p className="text-medium-grey text-sm">Northside suburbs and surrounding areas</p>
            </Card>
            
            <Card className="bg-white p-6">
              <MapPin className="h-8 w-8 text-primary-blue mx-auto mb-4" />
              <h3 className="font-semibold text-charcoal mb-2">South Brisbane</h3>
              <p className="text-medium-grey text-sm">Southside suburbs and Logan area</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-medium-grey mb-8">
            Let's work together to build the confident, happy relationship you and your dog deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="btn-primary text-lg px-8 py-4">
                  Book a Session
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <BookingForm />
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
                  <Phone className="w-4 h-4 mr-2" />
                  Free Consultation
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <ConsultationForm />
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12 text-medium-grey">
            <div className="flex items-center">
              <ShieldCheck className="w-5 h-5 mr-2 text-primary-blue" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2 text-primary-blue" />
              <span>Certified Professional</span>
            </div>
            <div className="flex items-center">
              <Heart className="w-5 h-5 mr-2 text-primary-blue" />
              <span>Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
