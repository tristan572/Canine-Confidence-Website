import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { MapPin, Phone, Check, Calendar, ShieldCheck, Award, Heart, Building2, Users, Target } from "lucide-react";
import ConsultationForm from "@/components/forms/consultation-form";

const ChermsideLocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Canine Confidence - Chermside Dog Training",
    "description": "Professional dog training services in Chermside, Kedron, and Stafford Heights. Specialising in urban dog training for apartment living, elevator etiquette, and real-world proofing at 7th Brigade Park.",
    "url": "https://canineconfidence.com.au/dog-training-chermside",
    "telephone": "+61409521358",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Serving Chermside, Kedron & Stafford Heights",
      "addressLocality": "Chermside",
      "addressRegion": "QLD",
      "postalCode": "4032",
      "addressCountry": "AU"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Chermside"
      },
      {
        "@type": "City",
        "name": "Kedron"
      },
      {
        "@type": "City",
        "name": "Stafford Heights"
      }
    ],
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default function ChermsidePage() {
  const [showAssessmentDialog, setShowAssessmentDialog] = useState(false);
  const [showCoachingDialog, setShowCoachingDialog] = useState(false);
  const [showPackagesDialog, setShowPackagesDialog] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBookAssessment = () => {
    setShowAssessmentDialog(false);
    window.open('https://canineconfidence.simplybook.net/v2/#book/service/16/count/1/', '_blank');
  };

  const handleBookCoaching = () => {
    setShowCoachingDialog(false);
    window.open('https://canineconfidence.simplybook.net/v2/#book/service/7', '_blank');
  };

  const handleBookPackages = () => {
    setShowPackagesDialog(false);
    window.open('https://canineconfidence.simplybook.net/v2/#packages', '_blank');
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Chermside Dog Training"
        description="Professional dog training in Chermside, Kedron & Stafford Heights. Urban dog training for apartment living, elevator etiquette, and real-world proofing at 7th Brigade Park."
        canonical="https://canineconfidence.com.au/dog-training-chermside"
        keywords={[
          'dog training Chermside',
          'dog trainer Kedron',
          'dog training Stafford Heights',
          '7th Brigade Park dog training',
          'apartment dog training Brisbane',
          'urban dog trainer Chermside'
        ]}
      />
      <ChermsideLocalBusinessSchema />

      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary-blue" />
                  <span className="text-primary-blue font-semibold">Chermside, Kedron & Stafford Heights</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
                  Chermside Dog Training for the <span className="text-primary-blue">Urban Environment</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-charcoal">
                  Is Your Dog Ready for Chermside Life?
                </h2>
                <p className="text-lg text-medium-grey leading-relaxed">
                  Living in a high-density hub like Chermside offers convenience, but it demands a higher level of "urban neutrality" from your dog. If your dog is struggling with the sensory overload of apartment living or the busy corridors of Gympie Road, standard obedience classes in a quiet field won't solve your problems.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed">
                  At Canine Confidence, we specialise in training dogs to thrive in Brisbane's busiest suburbs. We don't just teach "sit"; we teach your dog how to switch off and remain calm in the middle of the Chermside hustle.
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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="btn-secondary text-lg px-8 py-4"
                      data-testid="button-request-call-hero"
                    >
                      Request Free Call
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogTitle>Request Free Call</DialogTitle>
                    <DialogDescription>
                      Tell us about your dog and we'll call you back to discuss the best training approach.
                    </DialogDescription>
                    <ConsultationForm />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apartment Dog Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Building2 className="w-4 h-4" />
                Urban Specialisation
              </div>
              <h2 className="text-4xl font-bold text-charcoal">
                Solving the <span className="text-primary-blue">"Apartment Dog"</span> Challenges
              </h2>
              <p className="text-lg text-medium-grey leading-relaxed">
                Living in a unit or townhouse near Westfield Chermside requires a specific set of skills. We help you address the unique challenges of high-density living that standard training programs simply don't cover.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Elevator & Hallway Etiquette</h3>
                    <p className="text-medium-grey">Transforming reactive lunging or fearful "pancaking" into calm neutrality when meeting neighbours in confined spaces.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Threshold Control</h3>
                    <p className="text-medium-grey">Stopping the door-bolting and frantic barking every time someone walks past your apartment door.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">The "Urban On-Switch"</h3>
                    <p className="text-medium-grey">Teaching your dog to ignore the constant distractions of buses, sirens, and heavy foot traffic so you can enjoy your local coffee run.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-medium-grey mb-4">
                  Learn more about our <Link href="/services" className="text-primary-blue hover:underline font-semibold">private coaching services</Link>.
                </p>
                <Button 
                  onClick={() => setShowCoachingDialog(true)}
                  className="btn-primary"
                  data-testid="button-book-coaching"
                >
                  Book 1-on-1 Coaching Session
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
                        <span className="text-medium-grey">Dogs living in apartments or townhouses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Reactive dogs in elevators or hallways</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Door-bolters and excessive barkers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Dogs overwhelmed by urban distractions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Owners near Westfield Chermside precinct</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-charcoal mb-2">Urban Neutrality Training</h3>
                    <p className="text-medium-grey">
                      We teach your dog to be calm and composed in the busiest environments—essential for stress-free apartment living in Chermside.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7th Brigade Park Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <Target className="w-4 h-4" />
                Real-World Proofing
              </div>
              <h2 className="text-4xl font-bold text-charcoal">
                Real-World Proofing at <span className="text-primary-blue">7th Brigade Park</span>
              </h2>
              <p className="text-lg text-medium-grey leading-relaxed">
                Traditional training often falls apart the moment you leave your backyard. We take our sessions to where the distractions are real. We work with you at 7th Brigade Park and the surrounding urban precincts to proof your dog's obedience against:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">High-Level Distractions</h3>
                    <p className="text-medium-grey">Other dogs, cyclists, and kids on scooters—the real challenges you face every day.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Environmental Stress</h3>
                    <p className="text-medium-grey">Training your dog to feel secure on different surfaces and in loud environments.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Reliable Recall</h3>
                    <p className="text-medium-grey">Ensuring "Come" means "Come," even when there are dozens of other dogs nearby.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  onClick={() => setShowAssessmentDialog(true)}
                  className="btn-primary"
                  data-testid="button-book-assessment-park"
                >
                  Start Your Training Journey
                </Button>
              </div>
            </div>

            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-charcoal mb-4">Our Approach</h3>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-800 text-xl mb-2">Logical, Results-Driven Methods</h4>
                    <p className="text-blue-700">
                      I don't offer fluff or "quick-fix" gimmicks. My approach is rooted in biological fulfilment and clear communication. We use play-centred training to build a working relationship where your dog wants to engage with you, making the distractions of Chermside irrelevant.
                    </p>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-charcoal mb-3 text-xl">Direct. Constructive. Effective.</h4>
                    <p className="text-medium-grey mb-4">
                      We give you the tools to handle a high-drive dog in a high-density suburb.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Play-centred methodology</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Biological fulfilment focus</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Clear communication building</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Real-world environment training</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Urban Assessment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-charcoal">
                Stop Guessing. <span className="text-primary-blue">Start Training.</span>
              </h2>
              <p className="text-lg text-medium-grey leading-relaxed">
                Every dog is an individual, and every urban living situation is unique. A generic "puppy school" won't address the specific triggers of a reactive dog living in a Chermside apartment.
              </p>
              <p className="text-lg text-medium-grey leading-relaxed">
                Before we start, we conduct a 1-on-1 Urban Suitability Assessment. This is a logical, deep-dive evaluation of your dog's genetics, current temperament, and your specific living environment.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-charcoal">What the assessment covers:</h3>
                
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Trigger Identification</h4>
                    <p className="text-medium-grey">Pinpointing exactly what causes your dog to lose focus or react.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Environmental Analysis</h4>
                    <p className="text-medium-grey">Assessing your local walking routes and home setup.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">A Clear Roadmap</h4>
                    <p className="text-medium-grey">A constructive, step-by-step plan to achieve neutrality and reliability.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  onClick={() => setShowAssessmentDialog(true)}
                  className="btn-primary px-8"
                  data-testid="button-book-assessment-section"
                >
                  Book Your Urban Assessment
                </Button>
              </div>
            </div>

            <Card className="bg-light-grey border-0">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center pb-4 border-b">
                    <h3 className="text-2xl font-bold text-charcoal mb-2">Urban Suitability Assessment</h3>
                    <div className="text-4xl font-bold text-primary-blue">$90</div>
                    <p className="text-medium-grey mt-2">60-minute 1-on-1 evaluation</p>
                  </div>

                  <div className="pt-4">
                    <p className="text-medium-grey text-center italic">
                      Direct, expert guidance for Chermside dog owners.
                    </p>
                  </div>
                </div>
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
                Ready to Build Urban Confidence?
              </h2>
              <p className="text-xl text-white opacity-90">
                Stop the frustration of managing a reactive dog in Chermside's busiest areas. Experience our proven, play-centred approach that delivers confidence through clarity, ensuring an unbreakable bond that lasts a lifetime.
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
                  <Button 
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-blue px-8 py-4 text-lg font-semibold"
                    data-testid="button-request-call-cta"
                  >
                    Request Free Call
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogTitle>Request Free Call</DialogTitle>
                  <DialogDescription>
                    Tell us about your dog and we'll call you back to discuss the best training approach.
                  </DialogDescription>
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
        <DialogContent className="max-w-md">
          <DialogTitle>Continue to Secure Booking</DialogTitle>
          <DialogDescription>
            You'll be redirected to our secure booking system to schedule your Initial Canine Success Assessment ($90).
          </DialogDescription>
          <div className="flex gap-3 justify-end mt-4">
            <Button
              variant="outline"
              onClick={() => setShowAssessmentDialog(false)}
              data-testid="button-cancel-assessment"
            >
              Cancel
            </Button>
            <Button
              onClick={handleBookAssessment}
              className="btn-primary"
              data-testid="button-continue-assessment"
            >
              Continue to Secure Booking
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showCoachingDialog} onOpenChange={setShowCoachingDialog}>
        <DialogContent className="max-w-md">
          <DialogTitle>Continue to Secure Booking</DialogTitle>
          <DialogDescription>
            You'll be redirected to our secure booking system to schedule your 1-on-1 Coaching Session ($120).
          </DialogDescription>
          <div className="flex gap-3 justify-end mt-4">
            <Button
              variant="outline"
              onClick={() => setShowCoachingDialog(false)}
              data-testid="button-cancel-coaching"
            >
              Cancel
            </Button>
            <Button
              onClick={handleBookCoaching}
              className="btn-primary"
              data-testid="button-continue-coaching"
            >
              Continue to Secure Booking
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showPackagesDialog} onOpenChange={setShowPackagesDialog}>
        <DialogContent className="max-w-md">
          <DialogTitle>Continue to Secure Booking</DialogTitle>
          <DialogDescription>
            You'll be redirected to our secure booking system to view all available packages and services.
          </DialogDescription>
          <div className="flex gap-3 justify-end mt-4">
            <Button
              variant="outline"
              onClick={() => setShowPackagesDialog(false)}
              data-testid="button-cancel-packages"
            >
              Cancel
            </Button>
            <Button
              onClick={handleBookPackages}
              className="btn-primary"
              data-testid="button-continue-packages"
            >
              Continue to Secure Booking
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
