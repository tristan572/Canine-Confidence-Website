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
                  Chermside Dog Training
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-charcoal">
                  Dogs in dense suburbs face a different problem.
                </h2>
                <p className="text-lg text-medium-grey leading-relaxed">
                  Tight footpaths. Trolleys, prams, other dogs around every corner. The sensory load of Westfield on a Saturday. None of that is something your dog was prepared for in a quiet oval with ten other puppies.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed">
                  If your dog is reactive, anxious, or just can't settle when the world gets loud, that's not a training failure. It's a gap in the environment you've trained in.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed">
                  I work with dogs in the places they actually live — busy streets, apartment blocks, shopping precincts. The goal isn't perfect behaviour in a sterile setting. It's a dog that knows how to switch off when Chermside demands it.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed font-medium">
                  Start with a free 15-minute phone call. No commitment, just clarity.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="btn-primary text-lg px-8 py-4"
                      data-testid="button-request-call-hero"
                    >
                      <Phone className="w-5 h-5 mr-2" />
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
                <Button
                  onClick={() => setShowAssessmentDialog(true)}
                  className="btn-secondary text-lg px-8 py-4"
                  data-testid="button-book-assessment-hero"
                >
                  Book Assessment
                </Button>
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
                Training for High-Density Living
              </h2>
              <p className="text-lg text-medium-grey leading-relaxed">
                Apartment and townhouse dogs face a different daily reality. Shared corridors, lift doors, neighbours at close range, constant foot traffic outside the front door. These aren't edge cases — they're Tuesday.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Lifts and shared spaces</h3>
                    <p className="text-medium-grey">Most dogs aren't taught how to hold themselves in a confined space with a stranger. I work on calm neutrality in exactly those situations — so getting to the car park doesn't become a production.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Threshold control</h3>
                    <p className="text-medium-grey">Door bolting, barking at footsteps in the hall, losing it every time someone passes — threshold work teaches your dog that the boundary of your home is a calm place, not a launch point.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Urban distraction tolerance</h3>
                    <p className="text-medium-grey">Buses, sirens, shopping trolleys, foot traffic. The goal isn't ignoring everything — it's a dog that notices, processes, and moves on without you having to manage every moment.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-medium-grey mb-4">
                  Learn more about my <Link href="/services" className="text-primary-blue hover:underline font-semibold">coaching services</Link>.
                </p>
                <Button
                  onClick={() => setShowCoachingDialog(true)}
                  className="btn-primary"
                  data-testid="button-book-coaching"
                >
                  Book a 1-on-1 Coaching Session
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
                      I teach your dog to be calm and composed in the busiest environments—essential for stress-free apartment living in Chermside.
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
                A dog that listens in your lounge room isn't the goal. The goal is a dog that listens when it actually matters.
              </p>
              <p className="text-lg text-medium-grey leading-relaxed">
                I run sessions at 7th Brigade Park and the surrounding streets because that's where the real work happens. Other dogs, cyclists, kids on scooters, unfamiliar surfaces, noise. If your dog can hold focus here, they can hold it anywhere.
              </p>
              <p className="text-lg font-semibold text-charcoal">What we work on:</p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Distraction tolerance</h3>
                    <p className="text-medium-grey">Staying connected to you when the environment is genuinely competing for your dog's attention.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Environmental confidence</h3>
                    <p className="text-medium-grey">Different surfaces, loud spaces, unpredictable movement. A settled dog doesn't need a quiet setting.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Reliable recall</h3>
                    <p className="text-medium-grey">"Come" has to mean come, even when there are ten other dogs in the park.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="btn-primary" data-testid="button-book-assessment-park">
                      Book a free call to get started
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogTitle>Book a Free Call</DialogTitle>
                    <DialogDescription>
                      Tell us about your dog and we'll discuss the best training approach for you.
                    </DialogDescription>
                    <ConsultationForm />
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-charcoal">My Approach</h3>

                  <p className="text-medium-grey leading-relaxed">
                    The method is built around what dogs actually need: biological fulfilment, play-based learning, and communication that's clear enough for the dog to trust.
                  </p>
                  <p className="text-medium-grey leading-relaxed">
                    When those foundations are in place, a dog doesn't need a quiet environment to behave. They understand what's being asked of them and have a reason to do it.
                  </p>
                  <p className="text-medium-grey leading-relaxed">
                    I give you the tools to handle your dog in the environment you actually live in. Not in theory. In the street outside your home.
                  </p>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {["Play-based learning", "Fulfilment-led", "Real-world proofing", "Skill transfer to the owner"].map((tag) => (
                        <span key={tag} className="bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
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
                Every dog is different. The plan should be too.
              </h2>
              <p className="text-lg text-medium-grey leading-relaxed">
                Before any training begins, I need to understand your dog — their genetics, their triggers, how they move through your specific environment. A session at the dog park tells me very little. A proper assessment tells me everything.
              </p>
              <p className="text-lg text-medium-grey leading-relaxed">
                The Initial Canine Success Assessment is a 60-minute, one-on-one session. You walk away with a clear picture of what's driving your dog's behaviour and a structured plan to address it.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-charcoal">What it covers:</h3>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Trigger identification</h4>
                    <p className="text-medium-grey">Exactly what causes your dog to react, and why.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Environment review</h4>
                    <p className="text-medium-grey">Your walking routes, your home setup, the specific demands of where you live.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">A training roadmap</h4>
                    <p className="text-medium-grey">A step-by-step plan built around your dog and your situation, not a template.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={() => setShowAssessmentDialog(true)}
                  className="btn-primary px-8"
                  data-testid="button-book-assessment-section"
                >
                  Book your assessment
                </Button>
              </div>
            </div>

            <Card className="bg-light-grey border-0">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center pb-4 border-b">
                    <h3 className="text-2xl font-bold text-charcoal mb-2">Initial Canine Success Assessment</h3>
                    <div className="text-4xl font-bold text-primary-blue">$90</div>
                    <p className="text-medium-grey mt-2">60 minutes</p>
                  </div>

                  <div className="pt-4 space-y-4">
                    <p className="text-medium-grey">
                      One session. A clear picture of your dog, their triggers, and the plan to move forward.
                    </p>
                    <Button
                      onClick={() => setShowAssessmentDialog(true)}
                      className="btn-primary w-full"
                    >
                      Book now
                    </Button>
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
                Your dog can handle Chermside. They just need the right foundation.
              </h2>
              <p className="text-xl text-white opacity-90">
                If walks feel like damage control and your building's corridor is a source of dread, that's worth fixing. A calm, connected dog isn't a personality type — it's a skill set. One you can build.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-blue px-8 py-4 text-lg font-semibold"
                    data-testid="button-request-call-cta"
                  >
                    Book a free call
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogTitle>Book a Free Call</DialogTitle>
                  <DialogDescription>
                    Tell us about your dog and we'll call you back to discuss the best training approach.
                  </DialogDescription>
                  <ConsultationForm />
                </DialogContent>
              </Dialog>

              <Button
                onClick={() => setShowAssessmentDialog(true)}
                className="bg-white text-primary-blue hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
                data-testid="button-book-now-cta"
              >
                Book now
              </Button>
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
            You'll be redirected to my secure booking system to view all available packages and services.
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
