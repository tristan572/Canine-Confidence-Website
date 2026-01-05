import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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
import ConsultationForm from "@/components/forms/consultation-form";
import { useState } from "react";
import aboutHeroImageWebp from "@assets/_com.apple.Foundation.NSItemProvider.abN4B8_1760871363453_opt.webp";
import aboutHeroImageJpeg from "@assets/_com.apple.Foundation.NSItemProvider.abN4B8_1760871363453.jpeg";
import aboutTrainingImageWebp from "@assets/IMG_0076_1758798863394_opt.webp";
import aboutTrainingImageJpeg from "@assets/IMG_0076_1758798863394.jpeg";

export default function AboutPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO 
        title="About Tristan - NDTF Certified Dog Trainer"
        description="Meet Tristan, North Brisbane's NDTF certified dog trainer. From redundancy in 2020 to certification in 2022, discover the personal journey behind Canine Confidence's unique play-based training approach."
        canonical="https://canineconfidence.com.au/about"
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
            From <span className="text-primary-blue">Passion</span> to Obsession
          </h2>
          <p className="text-xl text-medium-grey mb-8">
            My journey into dog behaviour started in 2016 when I began training my own dog. I became fascinated by the process, but for years, it was just a serious passion alongside a standard 9-to-5.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-charcoal">The <span className="text-primary-blue">Turning Point</span></h2>
                <p className="text-lg text-medium-grey leading-relaxed">
                  That changed in 2020. When I was made redundant, I saw it as the push I needed to turn that passion into a career. I didn't want to be another backyard trainer; I wanted to master the craft.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed">
                  Since then, I have been relentless. I formalised my skills by earning my Certificate III in Dog Behaviour and Training through the National Dog Trainers Federation (NDTF), but that certification was just the starting point.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed">
                  I have spent every day since 2020 immersing myself in the industry—devouring theory from books, podcasts, online courses, and travelling to seminars. However, this academic knowledge is only the theory. The real expertise comes from the countless dogs I have worked with across North Brisbane, as hands-on experience and real-world application always outweigh the textbook.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed">
                  At Canine Confidence, you get the benefit of that obsession. I don't rely on "natural bonds" or guesswork. I rely on advanced canine psychology and continuous professional study to handle complex behavioural challenges and build an unbreakable bond with your dog.
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
              <picture>
                <source 
                  type="image/webp"
                  srcSet={aboutHeroImageWebp}
                />
                <img 
                  src={aboutHeroImageJpeg} 
                  alt="Tristan, NDTF certified dog trainer from North Brisbane, with his dog Cleo demonstrating successful play-based training and genetic fulfillment approach" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  width={600}
                  height={400}
                  loading="eager"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* Training Philosophy Section */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">The Canine <span className="text-primary-blue">Confidence</span> Philosophy</h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              At Canine Confidence, training goes beyond basic commands and corrections. It is about building a bond based on real understanding. By focusing on the mechanics of how dogs learn and what they need biologically, we create a relationship built on clarity, not just compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Play-Based Learning</h3>
              <p className="text-medium-grey">
                We use play as our primary engine for engagement. When a dog works for a game rather than just a treat or to avoid a correction, their motivation skyrockets. We turn training from a stressful chore into a shared activity that builds a powerful bond.
              </p>
            </Card>

            <Card className="bg-white p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Real-World Skills</h3>
              <p className="text-medium-grey">
                We don't just train for the living room; we train for reality. We equip your dog with the essential life skills they need to navigate the modern world safely, ensuring they can handle public environments with confidence.
              </p>
            </Card>

            <Card className="bg-white p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Genetic Fulfilment</h3>
              <p className="text-medium-grey">
                Most behavioural issues stem from frustration. We identify what your dog was bred to do and provide a constructive outlet for that energy. By meeting their biological needs first, we eliminate the root cause of many problem behaviours.
              </p>
            </Card>

            <Card className="bg-white p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Glasses className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Predictability & Clarity</h3>
              <p className="text-medium-grey">
                Anxiety comes from confusion. We provide clear expectations and consistent boundaries so your dog knows exactly what is expected of them. When expectations are predictable, your dog feels secure, confident, and calm.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <picture>
                <source 
                  type="image/webp"
                  srcSet={aboutTrainingImageWebp}
                />
                <img 
                  src={aboutTrainingImageJpeg} 
                  alt="Tristan demonstrating play-based dog training approach with client's dog in North Brisbane, showcasing positive reinforcement techniques and genetic fulfillment methods" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              
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
                  Many trainers focus solely on commands, corrections, and simply "fixing" symptoms. I focus on the root cause. I learned that when you tap into a dog's natural drives—through play, engagement, and genetic fulfilment—you don't just train a dog, you build an unbreakable bond. My own dog, Cleo, is proof of this approach. She has never been destructive or highly anxious because her needs are met consistently. That is the outcome I work towards for every family: a fulfilled, confident dog, and a household free from the stress of unpredictable behaviour.
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
                    <h3 className="text-lg font-semibold text-charcoal mb-2">Verified Results</h3>
                    <p className="text-medium-grey">Over 100+ 5-Star Outcomes. View detailed testimonials from North Brisbane families on our Client Results Page.</p>
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
              We take the time to understand your dog's individual needs, genetics, and personality, creating a bespoke strategy that fits both your dog's natural learning style and your family's lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white p-6 text-center border border-gray-100">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Behavioural Audit</h3>
              <p className="text-sm text-medium-grey">Comprehensive evaluation of your dog's current behaviour, needs, and specific goals.</p>
            </Card>

            <Card className="bg-white p-6 text-center border border-gray-100">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Personalised Strategy</h3>
              <p className="text-sm text-medium-grey">A customised training program designed specifically for your dog's learning style.</p>
            </Card>

            <Card className="bg-white p-6 text-center border border-gray-100">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Hands-On Skill Transfer</h3>
              <p className="text-sm text-medium-grey">Focused sessions with both dog and owner to build practical skills and confidence.</p>
            </Card>

            <Card className="bg-white p-6 text-center border border-gray-100">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Sustained Results</h3>
              <p className="text-sm text-medium-grey">Ongoing guidance and support to maintain and improve long-term behaviour.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Real Confidence?</h2>
          <p className="text-xl text-white/90 mb-12">
            Stop the frustration caused by confusion and inconsistency. Experience our proven, play-centred approach that delivers confidence through clarity, ensuring an unbreakable bond that lasts a lifetime.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-700 hover:bg-gray-50 px-8 py-4 text-lg"
              onClick={() => window.open('https://canineconfidence.simplybook.net/v2/', '_blank')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Training Session
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="border-white bg-white/10 text-white hover:bg-white/20 px-8 py-4 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Free Consultation
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogTitle>Free Consultation</DialogTitle>
                <DialogDescription>Connect with us for a complimentary consultation to discuss your dog's training needs and how we can help.</DialogDescription>
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