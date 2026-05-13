import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { MapPin, Phone, Check, ShieldCheck, Award, Users, Footprints } from "lucide-react";
import ConsultationForm from "@/components/forms/consultation-form";
import tristanPortraitWebp from "@assets/_com.apple.Foundation.NSItemProvider.abN4B8_1760871363453_opt.webp";
import tristanPortraitJpeg from "@assets/_com.apple.Foundation.NSItemProvider.abN4B8_1760871363453.jpeg";

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
      { "@type": "City", "name": "Chermside" },
      { "@type": "City", "name": "Kedron" },
      { "@type": "City", "name": "Stafford Heights" }
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
  const [showWalkTrainDialog, setShowWalkTrainDialog] = useState(false);
  const [showCoachingDialog, setShowCoachingDialog] = useState(false);
  const [showPackagesDialog, setShowPackagesDialog] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBookAssessment = () => {
    setShowAssessmentDialog(false);
    window.open('https://canineconfidence.simplybook.net/v2/#book/service/16/count/1/', '_blank');
  };

  const handleBookWalkTrain = () => {
    setShowWalkTrainDialog(false);
    window.open('https://canineconfidence.simplybook.net/v2/#book/service/6', '_blank');
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                  I work with dogs in the places they actually live: busy streets, apartment blocks, shopping precincts. The goal isn't perfect behaviour in a sterile setting. It's a dog that knows how to switch off when Chermside demands it.
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

            <div className="relative hidden lg:block">
              <picture>
                <source type="image/webp" srcSet={tristanPortraitWebp} />
                <img
                  src={tristanPortraitJpeg}
                  alt="Tristan, NDTF certified dog trainer, with his dog"
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

      {/* Assessment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-charcoal mb-4">
                The <span className="text-primary-blue">Canine Success Assessment</span>
              </h2>
              <p className="text-xl text-medium-grey mb-4">
                Every dog is different. Before any training begins, I need to understand your dog: their genetics, their triggers, how they move through your specific environment. A proper assessment tells me everything.
              </p>
              <p className="text-xl text-medium-grey mb-4">
                The Initial Canine Success Assessment is a 60-minute, one-on-one session. You walk away with a clear picture of what's driving your dog's behaviour and a structured plan to address it.
              </p>
              <p className="text-xl text-medium-grey">
                It's also how I work out whether Walk and Train, One-on-One Coaching, or a combination of both is the right fit for your dog.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="inline-flex items-center gap-4 bg-blue-50 border border-blue-200 rounded-lg px-6 py-4">
                <div>
                  <span className="text-2xl font-bold text-primary-blue">$90</span>
                  <span className="text-sm text-medium-grey ml-2">One-off Initial Canine Success Assessment</span>
                </div>
                <Button
                  onClick={() => setShowAssessmentDialog(true)}
                  className="btn-primary"
                  data-testid="button-book-assessment-section"
                >
                  Book Your Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Walk & Train Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <Footprints className="w-4 h-4" />
                High-Frequency Results
              </div>
              <h2 className="text-4xl font-bold text-charcoal">
                Walk and Train at <span className="text-primary-blue">7th Brigade Park</span>
              </h2>
              <p className="text-lg text-medium-grey leading-relaxed">
                A dog that listens in your lounge room isn't the goal. The goal is a dog that listens when it actually matters.
              </p>
              <p className="text-lg text-medium-grey leading-relaxed">
                I run sessions at 7th Brigade Park and the surrounding streets because that's where the real work happens. Other dogs, cyclists, kids on scooters, unfamiliar surfaces, noise. If your dog can hold focus here, they can hold it anywhere.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Distraction tolerance</h3>
                    <p className="text-medium-grey">Staying connected to you when the environment is genuinely competing for your dog's attention.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Environmental confidence</h3>
                    <p className="text-medium-grey">Different surfaces, loud spaces, unpredictable movement. A settled dog doesn't need a quiet setting.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Reliable recall</h3>
                    <p className="text-medium-grey">"Come" has to mean come, even when there are ten other dogs in the park.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-medium-grey mb-4">
                  Learn more about my <Link href="/services" className="text-primary-blue hover:underline font-semibold">Walk & Train service</Link>.
                </p>
                <Button
                  onClick={() => setShowWalkTrainDialog(true)}
                  className="btn-primary"
                  data-testid="button-book-walk-train"
                >
                  Book Walk & Train Sessions
                </Button>
              </div>
            </div>

            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-charcoal mb-4">Session Details & Pricing</h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div>
                        <p className="font-semibold text-charcoal">Single 40-Minute Session</p>
                      </div>
                      <div className="text-2xl font-bold text-primary-blue">$60</div>
                    </div>

                    <div className="border-2 border-green-600 rounded-lg p-4 bg-green-100">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-semibold text-charcoal">The Real World Reliability Package</p>
                          <p className="text-sm text-medium-grey">5 Sessions</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-blue">$280</div>
                          <p className="text-sm text-green-700">$56 per session</p>
                        </div>
                      </div>
                      <p className="text-green-700 font-semibold text-center">Save $20 across the package.</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-charcoal mb-3">Perfect For:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Busy owners needing consistency without attending every session</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Dogs requiring real-world proofing in urban environments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Leash reactive dogs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* One-on-One Coaching Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Users className="w-4 h-4" />
                Owner Skill Building
              </div>
              <h2 className="text-4xl font-bold text-charcoal">
                <span className="text-primary-blue">One-on-One Coaching</span> Sessions
              </h2>
              <p className="text-lg text-medium-grey leading-relaxed">
                Apartment and townhouse dogs face a different daily reality. Shared corridors, lift doors, neighbours at close range, constant foot traffic outside the front door. These aren't edge cases. They're Tuesday.
              </p>
              <p className="text-lg text-medium-grey leading-relaxed">
                These 60-minute sessions are built around you as much as your dog. I teach you the timing, body language, and communication mechanics that make training actually stick, so you're not dependent on me showing up every week.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Lifts and shared spaces</h3>
                    <p className="text-medium-grey">Most dogs aren't taught how to hold themselves in a confined space with a stranger. I work on calm neutrality in exactly those situations, so getting to the car park doesn't become a production.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Threshold control</h3>
                    <p className="text-medium-grey">Door bolting, barking at footsteps in the hall, losing it every time someone passes. Threshold work teaches your dog that the boundary of your home is a calm place, not a launch point.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Urban distraction tolerance</h3>
                    <p className="text-medium-grey">Buses, sirens, shopping trolleys, foot traffic. The goal isn't ignoring everything. It's a dog that notices, processes, and moves on without you having to manage every moment.</p>
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
                  Book a Coaching Session
                </Button>
              </div>
            </div>

            <Card className="bg-light-grey border-0">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal mb-4">Session Details & Pricing</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                        <div>
                          <p className="font-semibold text-charcoal">Single 60-Minute Session</p>
                        </div>
                        <div className="text-2xl font-bold text-primary-blue">$120</div>
                      </div>

                      <div className="border-2 border-green-600 rounded-lg p-4 bg-green-100">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-semibold text-charcoal">The Focused Progress Plan</p>
                            <p className="text-sm text-medium-grey">5 Sessions</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary-blue">$550</div>
                            <p className="text-sm text-green-700">$110 per session</p>
                          </div>
                        </div>
                        <p className="text-green-700 font-semibold text-center">Save $50 across the package.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-charcoal mb-3">Ideal For:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Dogs in apartments, townhouses, or high-density living</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Owners who want hands-on involvement in training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Complex behavioural issues requiring expert guidance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Building owner confidence and handling skills</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-primary-blue font-semibold text-center">
                      The goal is a dog that responds to you — not just to me.
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
                Your dog can handle Chermside. They just need the right foundation.
              </h2>
              <p className="text-xl text-white opacity-90">
                If walks feel like damage control and your building's corridor is a source of dread, that's worth fixing. A calm, connected dog isn't a personality type. It's a skill set. One you can build.
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
                Book Assessment
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

      <Dialog open={showWalkTrainDialog} onOpenChange={setShowWalkTrainDialog}>
        <DialogContent className="max-w-md">
          <DialogTitle>Continue to Secure Booking</DialogTitle>
          <DialogDescription>
            You'll be redirected to our secure booking system to schedule your Walk and Train session.
          </DialogDescription>
          <div className="flex gap-3 justify-end mt-4">
            <Button
              variant="outline"
              onClick={() => setShowWalkTrainDialog(false)}
              data-testid="button-cancel-walk-train"
            >
              Cancel
            </Button>
            <Button
              onClick={handleBookWalkTrain}
              className="btn-primary"
              data-testid="button-continue-walk-train"
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
