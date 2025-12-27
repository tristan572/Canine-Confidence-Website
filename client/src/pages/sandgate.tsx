import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { Waves, MapPin, Phone, Check, Calendar, ShieldCheck, Award, Heart } from "lucide-react";
import sandgateHero from "@assets/IMG_0358_1762512636150.jpeg";
import ConsultationForm from "@/components/forms/consultation-form";

const SandgateLocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Canine Confidence - Sandgate Dog Training",
    "description": "Professional dog training services in Sandgate, Shorncliffe, and Brighton. Specialising in bayside training with real-world distractions including foreshore recall, cafe manners, and loose-leash walking.",
    "url": "https://canineconfidence.com.au/dog-training-sandgate",
    "telephone": "+61409521358",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Serving Sandgate, Shorncliffe & Brighton",
      "addressLocality": "Sandgate",
      "addressRegion": "QLD",
      "postalCode": "4017",
      "addressCountry": "AU"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Sandgate"
      },
      {
        "@type": "City",
        "name": "Shorncliffe"
      },
      {
        "@type": "City",
        "name": "Brighton"
      }
    ],
    "priceRange": "$$",
    "image": sandgateHero
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default function SandgatePage() {
  const [showAssessmentDialog, setShowAssessmentDialog] = useState(false);
  const [showAdventureDialog, setShowAdventureDialog] = useState(false);
  const [showConfidentStartDialog, setShowConfidentStartDialog] = useState(false);
  const [showPackagesDialog, setShowPackagesDialog] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBookAssessment = () => {
    setShowAssessmentDialog(false);
    window.open('https://canineconfidence.simplybook.net/v2/#book/service/16/count/1/', '_blank');
  };

  const handleBookAdventure = () => {
    setShowAdventureDialog(false);
    window.open('https://canineconfidence.simplybook.net/v2/#book/service/5', '_blank');
  };

  const handleBookConfidentStart = () => {
    setShowConfidentStartDialog(false);
    window.open('https://canineconfidence.simplybook.net/v2/#packages/6', '_blank');
  };

  const handleBookPackages = () => {
    setShowPackagesDialog(false);
    window.open('https://canineconfidence.simplybook.net/v2/#packages', '_blank');
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Sandgate Dog Training"
        description="Professional dog training in Sandgate, Shorncliffe & Brighton. Master foreshore recall, cafe manners, and loose-leash walking. Expert bayside training with real-world distractions."
        canonical="https://canineconfidence.com.au/dog-training-sandgate"
        ogImage="/attached_assets/IMG_0358_1762512636150.webp"
        keywords={[
          'dog training Sandgate',
          'dog trainer Shorncliffe',
          'dog training Brighton Brisbane',
          'Sandgate foreshore dog training',
          'bayside dog trainer',
          'Shorncliffe pier dog training'
        ]}
      />
      <SandgateLocalBusinessSchema />

      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary-blue" />
                  <span className="text-primary-blue font-semibold">Sandgate, Shorncliffe & Brighton</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
                  Sandgate, Shorncliffe & Brighton Dog Training: <span className="text-primary-blue">Coastal Confidence</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-charcoal">
                  Bayside Dog Training for the Real World: Mastering Seagulls, Bikes, and Crowds
                </h2>
                <p className="text-lg text-medium-grey leading-relaxed">
                  If you live by the water, you know a well-behaved dog isn't a luxury—it's essential. We specialise in building focus and control amidst the unique distractions of the Bayside area: the pier crowds, passing bikes, and those tempting seagulls. Our training proofs your dog's obedience against the highest real-world challenges.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setShowAssessmentDialog(true)}
                  className="btn-primary text-lg px-8 py-4"
                  data-testid="button-book-assessment-hero"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book Your Assessment
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={sandgateHero} 
                alt="Dog training at Shorncliffe Pier, Sandgate - where your dog learns real-world skills on Brisbane's bayside foreshore" 
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

      {/* Service 1: Bayside Adventure Walk */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Waves className="w-4 h-4" />
                Signature Service
              </div>
              <h2 className="text-4xl font-bold text-charcoal">
                The Bayside <span className="text-primary-blue">Adventure Walk</span>
              </h2>
              <p className="text-lg text-medium-grey leading-relaxed">
                This is our signature one-on-one training and enrichment session conducted by a professional trainer in the most challenging (and rewarding) local environments. Perfect for dogs that need real exercise and fullfilment, or those needing obedience proofed against real-world distractions.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 font-semibold text-xl">Available for all dogs. $80, per hour session.</p>
                <p className="text-blue-700">5 session packages available for great savings. Let your dog have the time of their life while also learning new skills!</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Foreshore Focus</h3>
                    <p className="text-medium-grey">We train specifically on the Sandgate Foreshore off-leash mudflats (between Second Avenue and Zeehan St) for reliable recall and impulse control, even with other dogs running past.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Proofing Distractions</h3>
                    <p className="text-medium-grey">Your dog learns to ignore high-value distractions like moving bikes, passing crowds, and pesky seagulls while walking calmly on Flinders Parade.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Cafe Manners</h3>
                    <p className="text-medium-grey">We practise calming "Settle" and "Place" behaviours, ensuring your dog can relax while you enjoy your favourite calamari from the local Fishmonger.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Leash Mastery</h3>
                    <p className="text-medium-grey">Perfecting your loose-leash walk along Shorncliffe Pier where distractions are at their peak.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-medium-grey mb-4">
                  Learn more about our <Link href="/services" className="text-primary-blue hover:underline font-semibold">Adventure Walk and Training service</Link>.
                </p>
                <Button 
                  onClick={() => setShowAdventureDialog(true)}
                  className="btn-primary"
                  data-testid="button-book-adventure-walk"
                >
                  Book Adventure Walk Training
                </Button>
              </div>
            </div>

            <Card className="bg-light-grey border-0">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal mb-4">Perfect For:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Dogs who pull on the leash near the foreshore</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Reactive dogs around bikes and crowds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Seagull chasers needing impulse control</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Dogs who need cafe manners training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">High-energy dogs needing beach exercise and play</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-charcoal mb-2">Beach Fun & Exercise</h3>
                    <p className="text-medium-grey">
                      Not every session is about strict training. Some dogs just need a great time running and playing on the beach. We combine exercise, enrichment, and fun in the beautiful bayside environment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service 2: Confident Start Program */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Perfect for Puppies
              </div>
              <h2 className="text-4xl font-bold text-charcoal">
                The <span className="text-primary-blue">Confident Start</span> Program
              </h2>
              <h3 className="text-2xl font-semibold text-charcoal">
                Stop Stressing, Start Thriving: Your Puppy's Best Life Starts at Home
              </h3>
              <p className="text-lg text-medium-grey leading-relaxed">
                Most puppy classes focus on basic commands in a crowded hall. We bring customised, private training directly to your Bayside home. Your puppy doesn't need to learn to sit in a sterile classroom; they need to learn to live calmly and confidently in your specific environment.
              </p>
              <p className="text-lg text-medium-grey leading-relaxed">
                Our 6-session private program is designed to build the foundations for an unbreakable bond and ensure your puppy develops into a calm, reliable Bayside companion. You'll move past common puppy challenges quickly, establishing immediate peace and a shared language.
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-charcoal">Key Skills for a Confident Bayside Life:</h4>
                
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">Positive Handling & Vet Prep</h5>
                    <p className="text-medium-grey">We specifically work on comfortable handling techniques, making nail trims, ear cleaning, and future vet visits stress-free experiences.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">Separation Confidence</h5>
                    <p className="text-medium-grey">We build the skills needed for your puppy to be happy and calm when left alone, preventing anxiety and destructive behaviours common in new homes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">Building Environmental Confidence</h5>
                    <p className="text-medium-grey">We guide you through structured desensitisation to handle common Sandgate sights and sounds—like skateboards on the footpath, strong winds by the foreshore, and loud crowds—ensuring your puppy can handle anything in the future.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">Learning How to Learn</h5>
                    <p className="text-medium-grey">We don't just teach tricks; we teach your puppy how to focus and love learning. This mastery of foundational focus makes all future obedience training effortless.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">In-Home Success</h5>
                    <p className="text-medium-grey">Training occurs in your actual home, yard, and family environment. This means faster and more reliable toilet training, and quick establishment of appropriate play and settling habits where they matter most.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  onClick={() => setShowConfidentStartDialog(true)}
                  className="btn-primary"
                  data-testid="button-book-confident-start"
                >
                  Enrol in The Confident Start Program Today
                </Button>
              </div>
            </div>

            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center pb-4 border-b">
                    <h3 className="text-2xl font-bold text-charcoal mb-2">The Confident Start Program: The Value</h3>
                    <p className="text-medium-grey mb-4">
                      This exclusive program includes 6 private, one-hour, in-home sessions. You gain the convenience and customised results that eliminate the stress of generalised training.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-4xl font-bold text-primary-blue">$480</span>
                      <span className="text-xl text-medium-grey line-through">$720</span>
                    </div>
                    <p className="text-green-600 font-semibold mt-2">Save $240</p>
                  </div>

                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                    <p className="text-green-800 font-semibold text-center mb-2">🎁 BONUS INCLUDED</p>
                    <p className="text-green-700 text-center">
                      Enrol today and receive our <strong>Dog Raising Guide (PDF)</strong> completely free, giving you the detailed strategy and resources used by professionals to maintain your puppy's success.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-charcoal mb-3">What You Get:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">6 x Private, One-Hour, In-Home Sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Comprehensive One-on-One Training with Dedicated Professional</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Customised Training Plan for Your Home Environment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">FREE Dog Raising Guide PDF (Value $50)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-medium-grey italic">
                      Ready to bypass the stress of group classes and raise a calm, confident Bayside companion?
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Getting Started with <span className="text-primary-blue">Training</span>
            </h2>
            <p className="text-xl text-medium-grey">
              For adolescent or adult dogs to begin your Adventure Walk package, we require a professional assessment to create a tailored program. Puppies can start the Confident Start Program directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-light-grey border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-charcoal mb-4">For Adult Dogs</h3>
                <p className="text-medium-grey mb-6">
                  Initial Canine Success Assessment required to create your tailored training program.
                </p>
                <div className="text-3xl font-bold text-primary-blue mb-6">$90</div>
                <Button 
                  onClick={() => setShowAssessmentDialog(true)}
                  className="btn-primary w-full"
                  data-testid="button-book-assessment-adult"
                >
                  Book Assessment
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-charcoal mb-4">For Puppies</h3>
                <p className="text-medium-grey mb-6">
                  Start the Confident Start Program immediately. No assessment required.
                </p>
                <div className="text-3xl font-bold text-primary-blue mb-6">Start Today</div>
                <Button 
                  onClick={() => setShowConfidentStartDialog(true)}
                  className="btn-primary w-full"
                  data-testid="button-enrol-puppy"
                >
                  Enrol Puppy Program
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">
                Ready to Build Real Confidence?
              </h2>
              <p className="text-xl text-white opacity-90">
                Stop the frustration caused by confusion and inconsistency. Experience our proven, play-centred approach that delivers confidence through clarity, ensuring an unbreakable bond that lasts a lifetime.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setShowPackagesDialog(true)}
                className="bg-white text-primary-blue hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
                data-testid="button-book-now-cta"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Now
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary-blue px-8 py-4 text-lg font-semibold transition-colors">
                    Request Free Call
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogTitle>Request Free Call</DialogTitle>
                  <DialogDescription>Connect with us for a complimentary consultation to discuss how we can help you and your dog in the Sandgate area.</DialogDescription>
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

      {/* Security Dialogs */}
      <Dialog open={showAssessmentDialog} onOpenChange={setShowAssessmentDialog}>
        <DialogContent className="max-w-md w-full p-6">
          <DialogTitle className="text-xl font-bold text-gray-800 mb-2">
            Secure Booking System
          </DialogTitle>
          <DialogDescription className="text-gray-600 mb-6">
            You'll access our secure booking platform where you can select your training service, choose your preferred time, and complete your booking with integrated payment processing.
          </DialogDescription>
          
          <div className="space-y-4">
            <Button 
              onClick={handleBookAssessment}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium"
            >
              Continue to Secure Booking
            </Button>
            
            <Button 
              onClick={() => setShowAssessmentDialog(false)}
              variant="outline"
              className="w-full py-3"
            >
              Cancel
            </Button>
          </div>
          
          <div className="mt-4 text-xs text-gray-500 text-center">
            <p>🔒 Secure SSL encrypted booking system</p>
            <p>📅 Real-time availability • 💳 Secure payments</p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showAdventureDialog} onOpenChange={setShowAdventureDialog}>
        <DialogContent className="max-w-md w-full p-6">
          <DialogTitle className="text-xl font-bold text-gray-800 mb-2">
            Secure Booking System
          </DialogTitle>
          <DialogDescription className="text-gray-600 mb-6">
            You'll access our secure booking platform where you can select your training service, choose your preferred time, and complete your booking with integrated payment processing.
          </DialogDescription>
          
          <div className="space-y-4">
            <Button 
              onClick={handleBookAdventure}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium"
            >
              Continue to Secure Booking
            </Button>
            
            <Button 
              onClick={() => setShowAdventureDialog(false)}
              variant="outline"
              className="w-full py-3"
            >
              Cancel
            </Button>
          </div>
          
          <div className="mt-4 text-xs text-gray-500 text-center">
            <p>🔒 Secure SSL encrypted booking system</p>
            <p>📅 Real-time availability • 💳 Secure payments</p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showConfidentStartDialog} onOpenChange={setShowConfidentStartDialog}>
        <DialogContent className="max-w-md w-full p-6">
          <DialogTitle className="text-xl font-bold text-gray-800 mb-2">
            Secure Booking System
          </DialogTitle>
          <DialogDescription className="text-gray-600 mb-6">
            You'll access our secure booking platform where you can select your training service, choose your preferred time, and complete your booking with integrated payment processing.
          </DialogDescription>
          
          <div className="space-y-4">
            <Button 
              onClick={handleBookConfidentStart}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium"
            >
              Continue to Secure Booking
            </Button>
            
            <Button 
              onClick={() => setShowConfidentStartDialog(false)}
              variant="outline"
              className="w-full py-3"
            >
              Cancel
            </Button>
          </div>
          
          <div className="mt-4 text-xs text-gray-500 text-center">
            <p>🔒 Secure SSL encrypted booking system</p>
            <p>📅 Real-time availability • 💳 Secure payments</p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showPackagesDialog} onOpenChange={setShowPackagesDialog}>
        <DialogContent className="max-w-md w-full p-6">
          <DialogTitle className="text-xl font-bold text-gray-800 mb-2">
            Secure Booking System
          </DialogTitle>
          <DialogDescription className="text-gray-600 mb-6">
            You'll access our secure booking platform where you can browse all available training packages and services, choose your preferred option, and complete your booking with integrated payment processing.
          </DialogDescription>
          
          <div className="space-y-4">
            <Button 
              onClick={handleBookPackages}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium"
            >
              Continue to Secure Booking
            </Button>
            
            <Button 
              onClick={() => setShowPackagesDialog(false)}
              variant="outline"
              className="w-full py-3"
            >
              Cancel
            </Button>
          </div>
          
          <div className="mt-4 text-xs text-gray-500 text-center">
            <p>🔒 Secure SSL encrypted booking system</p>
            <p>📅 Real-time availability • 💳 Secure payments</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
