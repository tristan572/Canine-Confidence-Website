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
                title="Dog Training Sandgate & Shorncliffe | Canine Confidence"
                description="Dog training in Sandgate, Shorncliffe & Brighton — foreshore recall, cafe manners, and loose-leash walking. Local trainer, real results on the Northside."
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
                  Sandgate, Shorncliffe & Brighton Dog Training
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-charcoal">
                  Coastal Confidence
                </h2>
                <p className="text-lg text-medium-grey leading-relaxed">
                  Bayside living is brilliant. Walking your dog there shouldn't be a battle.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed">
                  Seagulls, bikes, pier crowds, off-lead dogs on the foreshore — the Sandgate strip is one of Brisbane's most distracting environments for a dog. I train yours to handle it.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed font-medium">
                  Real-world focus, built for where you actually live.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="btn-primary text-lg px-8 py-4" data-testid="button-book-assessment-hero">
                      <Phone className="w-5 h-5 mr-2" />
                      Book a Free Call
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
                    <DialogTitle>Book a Free Call</DialogTitle>
                    <DialogDescription>Book a free 15-minute call to talk through what your dog needs.</DialogDescription>
                    <ConsultationForm />
                  </DialogContent>
                </Dialog>
                <Button
                  onClick={() => setShowAssessmentDialog(true)}
                  className="btn-secondary text-lg px-8 py-4"
                  data-testid="button-book-assessment-hero-secondary"
                >
                  Book Assessment
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
                A one-on-one training and enrichment session built around the Sandgate foreshore. Real exercise, real fulfilment, real-world skills — in the environment where it actually needs to hold up.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 font-semibold text-xl">$80 per 60-minute session. Five-session packages available.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Foreshore Focus</h3>
                    <p className="text-medium-grey">I work on the Sandgate Foreshore off-lead mudflats between Second Avenue and Zeehan Street — reliable recall and impulse control, even with other dogs running past.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Proofing Distractions</h3>
                    <p className="text-medium-grey">Your dog learns to ignore moving bikes, passing crowds, and seagulls while walking calmly on Flinders Parade.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Café Manners</h3>
                    <p className="text-medium-grey">I practise Settle and Place behaviours so your dog can hold it while you enjoy a calamari from the local Fishmonger.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Leash Mastery</h3>
                    <p className="text-medium-grey">Loose-lead walking along Shorncliffe Pier, where distractions are at their peak.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={() => setShowAdventureDialog(true)}
                  className="btn-primary"
                  data-testid="button-book-adventure-walk"
                >
                  Book Adventure Walk
                </Button>
              </div>
            </div>

            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-charcoal mb-4">Session Details & Pricing</h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <p className="font-semibold text-charcoal">Single 60-Minute Session</p>
                      <div className="text-2xl font-bold text-primary-blue">$80</div>
                    </div>

                    <div className="border-2 border-green-600 rounded-lg p-4 bg-green-100">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-semibold text-charcoal">The Adventure Pack</p>
                          <p className="text-sm text-medium-grey">5 Sessions</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-blue">$375</div>
                          <p className="text-sm text-green-700">$75 per session</p>
                        </div>
                      </div>
                      <p className="text-green-700 font-semibold text-center">Save $25 across the package.</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-charcoal mb-3">Perfect For:</h4>
                    <ul className="space-y-2">
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
                        <span className="text-medium-grey">High-energy dogs needing beach exercise and real-world proofing</span>
                      </li>
                    </ul>
                  </div>

                  <Button
                    onClick={() => setShowAdventureDialog(true)}
                    className="btn-primary w-full"
                    data-testid="button-book-adventure-card"
                  >
                    Book Adventure Walk
                  </Button>
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
              <p className="text-lg text-medium-grey leading-relaxed font-medium">
                The first six months shape the next fifteen years.
              </p>
              <p className="text-lg text-medium-grey leading-relaxed">
                Most puppy owners start with group classes. Group classes teach basic commands in a hall full of distractions. What they don't teach is how your puppy should behave in your home, your yard, and your street.
              </p>
              <p className="text-lg text-medium-grey leading-relaxed">
                That's what this program is built around.
              </p>
              <p className="text-lg text-medium-grey leading-relaxed">
                Six private sessions, delivered in your Bayside home. We work on the foundations that actually matter — calm settling, clear communication, and the confidence to handle real life.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">Handling and Vet Prep</h5>
                    <p className="text-medium-grey">I work through comfortable handling from day one. Nail trims, ear checks, being restrained calmly. The earlier this is normal, the easier every vet visit becomes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">Separation Confidence</h5>
                    <p className="text-medium-grey">I build your puppy's ability to be alone without falling apart. Started early, done gradually, it becomes a non-issue.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">Environmental Confidence</h5>
                    <p className="text-medium-grey">Structured exposure to what Sandgate actually throws at a dog — skateboards on the footpath, strong winds off the foreshore, busy crowds. Your puppy learns the world is manageable.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">How to Learn</h5>
                    <p className="text-medium-grey">Before commands, your puppy needs to understand how to focus and take feedback. I build that foundation first. Everything else gets easier once it's in place.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">In-Home Training</h5>
                    <p className="text-medium-grey">Sessions happen in your actual environment. Toilet training, settling habits, and boundaries are built where they need to hold — not transferred from a classroom.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={() => setShowConfidentStartDialog(true)}
                  className="btn-primary"
                  data-testid="button-book-confident-start"
                >
                  Book The Confident Start Program
                </Button>
              </div>
            </div>

            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center pb-4 border-b">
                    <h3 className="text-2xl font-bold text-charcoal mb-2">The Confident Start Program</h3>
                    <p className="text-medium-grey mb-4">
                      6 private, one-hour, in-home sessions.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-4xl font-bold text-primary-blue">$480</span>
                      <span className="text-xl text-medium-grey line-through">$720</span>
                    </div>
                    <p className="text-green-600 font-semibold mt-2">Save $240 on individual session pricing.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-charcoal mb-3">What's included:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">6 x 60-minute private in-home sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Customised training plan for your home and environment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Direct access to me between sessions for questions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">My Real-Life Dog Raising Guide PDF, included at no extra cost</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-medium-grey text-sm">
                    The guide covers everything from socialisation and handling to toilet training and daily structure — written specifically for new dog owners.
                  </p>

                  <Button
                    onClick={() => setShowConfidentStartDialog(true)}
                    className="w-full btn-primary"
                    data-testid="button-book-confident-start-card"
                  >
                    Book The Confident Start Program
                  </Button>
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
              How to Get Started
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <Card className="bg-light-grey border-0">
              <CardContent className="p-8 text-center flex flex-col h-full">
                <h3 className="text-2xl font-bold text-charcoal mb-4">For Adult and Adolescent Dogs</h3>
                <p className="text-medium-grey mb-6 flex-1">
                  I start with an Initial Canine Success Assessment. One 60-minute session to assess your dog, identify what's driving the behaviour, and build a tailored plan before we begin.
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
              <CardContent className="p-8 text-center flex flex-col h-full">
                <h3 className="text-2xl font-bold text-charcoal mb-4">For Puppies</h3>
                <p className="text-medium-grey mb-6 flex-1">
                  The Confident Start Program needs no prior assessment. Book directly and we get started.
                </p>
                <div className="text-3xl font-bold text-primary-blue mb-6">$480 for 6 sessions</div>
                <Button
                  onClick={() => setShowConfidentStartDialog(true)}
                  className="btn-primary w-full"
                  data-testid="button-enrol-puppy"
                >
                  Book Puppy Program
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
                Ready to enjoy the foreshore again?
              </h2>
              <p className="text-xl text-white opacity-90">
                A free 15-minute call is all it takes to work out what your dog needs and where to start.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-white text-primary-blue hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Book a Free Call
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogTitle>Book a Free Call</DialogTitle>
                  <DialogDescription>Book a free 15-minute call to talk through what your dog needs.</DialogDescription>
                  <ConsultationForm />
                </DialogContent>
              </Dialog>

              <Button
                variant="outline"
                onClick={() => setShowPackagesDialog(true)}
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary-blue px-8 py-4 text-lg font-semibold transition-colors"
                data-testid="button-book-now-cta"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Now
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 text-blue-100">
              <div className="flex items-center">
                <ShieldCheck className="w-5 h-5 mr-2" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>NDTF Certified</span>
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
