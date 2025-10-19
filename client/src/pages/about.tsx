import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SEO } from "@/components/SEO";
import { 
  ShieldCheck, 
  Award, 
  Heart, 
  Users, 
  Target, 
  CheckCircle,
  Phone,
  MapPin,
  Clock,
  Glasses,
  Search,
  FileText,
  Handshake,
  HeartHandshake,
  TrendingUp,
  Calendar
} from "lucide-react";
import BookingForm from "@/components/forms/booking-form";
import ConsultationForm from "@/components/forms/consultation-form";
import aboutHeroImage from "@assets/_com.apple.Foundation.NSItemProvider.abN4B8_1760871363453.jpeg";
import aboutTrainingImage from "@assets/IMG_0076_1758798863394.jpeg";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO 
        title="About Tristan - NDTF Certified Dog Trainer"
        description="Meet Tristan, North Brisbane's NDTF certified dog trainer. From redundancy in 2020 to certification in 2022, discover the personal journey behind Canine Confidence's unique play-based training approach."
        canonical="/about"
        keywords={[
          'NDTF certified dog trainer',
          'North Brisbane dog trainer',
          'professional dog trainer Brisbane',
          'certified animal behaviourist',
          'play-based training specialist'
        ]}
      />
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-charcoal mb-4">
            About Us
          </h1>
          <h2 className="text-3xl font-semibold text-charcoal mb-6">
            A Different Path to Dog Training
          </h2>
          <p className="text-xl text-medium-grey mb-8">
            I'm Tristan, the owner of Canine Confidence. I didn't grow up with dogs, and I didn't have a "problem dog" that pushed me into training. For me, it's always been simple—I just love dogs. Wherever I went, I found myself connecting with them, and they seemed to connect with me. That natural bond was always there.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-charcoal">Turning Passion Into Purpose</h2>
                <p className="text-lg text-medium-grey leading-relaxed">
                  In 2020, life threw me a curveball when I was made redundant from my job. It made me realise how quickly things can change, and how important it is to spend your time doing something you truly love. For me, that meant finally pursuing dog training.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed">
                  As soon as I made the decision, I dove straight in. I began working with dogs in 2020 and by 2022 I became a nationally accredited dog trainer through the National Dog Trainers Federation (NDTF). From the beginning, my focus has been on creating a better life for family dogs and the people who love them.
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
                  <div className="text-3xl font-bold text-primary-blue mb-2">2020</div>
                  <div className="text-sm text-medium-grey">Started Training</div>
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
                alt="Tristan, NDTF certified dog trainer from North Brisbane, with his dog Cleo demonstrating successful play-based training and genetic fulfillment approach" 
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
            <h2 className="text-4xl font-bold text-charcoal mb-4">The Canine Confidence Philosophy</h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              At Canine Confidence, we believe dog training should be about more than commands and corrections. It's about creating harmony between dogs and families through understanding, fulfilment, and connection. Every dog deserves to be genuinely living their best life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Play-Based Learning</h3>
              <p className="text-medium-grey">
                Through play, dogs learn to love working with their humans, and humans discover how much fun it can be to teach and guide their dogs. Training becomes a positive, engaging experience rather than a stressful task.
              </p>
            </Card>

            <Card className="bg-white p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
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
                <Glasses className="w-8 h-8 text-white" />
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
                alt="Tristan demonstrating play-based dog training approach with client's dog in North Brisbane, showcasing positive reinforcement techniques and genetic fulfillment methods" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              
              <div className="absolute -top-6 -right-6 bg-primary-blue p-6 rounded-xl shadow-lg text-white max-w-xs">
                <div className="text-center">
                  <div className="text-lg font-bold mb-1">We're not just here to train dogs</div>
                  <div className="text-blue-100 text-sm">We create real relationships and real confidence that lasts.</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-charcoal">Why I Train Differently</h2>
                <p className="text-lg text-medium-grey leading-relaxed">
                  Many trainers focus heavily on commands, corrections, and "fixing" dogs. But what I've learned is that when you tap into a dog's natural drives—through play, engagement, and genetic fulfilment—you don't just train a dog, you build harmony.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed">
                  My own dog, Cleo, has thrived with this approach. She's never been destructive, anxious, or difficult around the home because her needs are met. She gets to play, connect, and live the kind of life every dog deserves.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed">
                  That's what I want for every dog and family I work with: a dog that feels fulfilled and content, a household that's calm, happy, and free from the stress of problem behaviours, and a bond built on trust, communication, and fun.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">NDTF Certified Professional</h3>
                    <p className="text-medium-grey">Nationally accredited dog trainer through the National Dog Trainers Federation, certified in 2022 with a focus on genetic fulfilment and play-based learning.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">90+ Five-Star Reviews</h3>
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
                    <p className="text-medium-grey">Using the latest research in canine behaviour and learning to ensure effective, humane training.</p>
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
              We take the time to understand your dog's individual needs, genetics, and personality, creating a personalised approach that fits both your dog's natural learning style and your family's lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white p-6 text-center border border-gray-100">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Assessment</h3>
              <p className="text-sm text-medium-grey">Comprehensive evaluation of your dog's behaviour, needs, and goals.</p>
            </Card>

            <Card className="bg-white p-6 text-center border border-gray-100">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Custom Plan</h3>
              <p className="text-sm text-medium-grey">Personalised training program designed specifically for your dog.</p>
            </Card>

            <Card className="bg-white p-6 text-center border border-gray-100">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Training</h3>
              <p className="text-sm text-medium-grey">Hands-on sessions with both dog and owner to build skills and confidence.</p>
            </Card>

            <Card className="bg-white p-6 text-center border border-gray-100">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Support</h3>
              <p className="text-sm text-medium-grey">Ongoing guidance and support to maintain and improve results.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Begin?</h2>
          <p className="text-xl text-white/90 mb-12">
            If you want a dog who listens, engages, and fits beautifully into your family life—not through force or frustration, but through play, clarity, and fulfilment—then you're in the right place. Let's build your dog's confidence and your peace of mind.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-50 px-8 py-4 text-lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Training Session
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <BookingForm />
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="border-white bg-white/10 text-white hover:bg-white/20 px-8 py-4 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Free Consultation
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <ConsultationForm />
              </DialogContent>
            </Dialog>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5 text-white" />
              <div>
                <div className="font-semibold text-white">Service Area</div>
                <div className="text-white/90">North Brisbane & Surrounds</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-5 h-5 text-white" />
              <div>
                <div className="font-semibold text-white">Availability</div>
                <div className="text-white/90">6 Days a Week</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-white" />
              <div>
                <div className="font-semibold text-white">Response Time</div>
                <div className="text-white/90">Within 24 Hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}