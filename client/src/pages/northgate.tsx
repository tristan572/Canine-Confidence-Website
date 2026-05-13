import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { MapPin, Phone, Check, Calendar, ShieldCheck, Award, Heart, Users, Footprints } from "lucide-react";
import ConsultationForm from "@/components/forms/consultation-form";
import tristanPortraitWebp from "@assets/_com.apple.Foundation.NSItemProvider.abN4B8_1760871363453_opt.webp";
import tristanPortraitJpeg from "@assets/_com.apple.Foundation.NSItemProvider.abN4B8_1760871363453.jpeg";

const NorthgateLocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Canine Confidence - Northgate Dog Training",
    "description": "Professional dog training services in Northgate, Nundah, and Kalinga. Specialising in Walk & Train sessions at Kalinga Park and 1-on-1 private coaching for leash reactivity and obedience.",
    "url": "https://canineconfidence.com.au/dog-training-northgate",
    "telephone": "+61409521358",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Serving Northgate, Nundah & Kalinga",
      "addressLocality": "Northgate",
      "addressRegion": "QLD",
      "postalCode": "4013",
      "addressCountry": "AU"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Northgate"
      },
      {
        "@type": "City",
        "name": "Nundah"
      },
      {
        "@type": "City",
        "name": "Kalinga"
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

export default function NorthgatePage() {
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
        title="Northgate Dog Training"
        description="Professional dog training in Northgate, Nundah & Kalinga. Walk & Train at Kalinga Park, 1-on-1 coaching sessions. Expert leash reactivity rehabilitation and loose-leash training."
        canonical="https://canineconfidence.com.au/dog-training-northgate"
        keywords={[
          'dog training Northgate',
          'dog trainer Nundah',
          'dog training Kalinga',
          'Kalinga Park dog training',
          'Northgate leash training',
          'Nundah dog trainer'
        ]}
      />
      <NorthgateLocalBusinessSchema />

      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary-blue" />
                  <span className="text-primary-blue font-semibold">Northgate, Nundah & Kalinga</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
                  Northgate & Nundah Dog Training: Reliable, Real-life Obedience
                </h1>
                <p className="text-lg text-medium-grey leading-relaxed">
                  If your dog pulls on the Kedron Brook bikeway or loses it at every dog in Kalinga Park, the problem isn't the location. It's that the training hasn't been built for real-world conditions.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed font-medium">
                  My Walk and Train and One-on-One Coaching programs are.
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
                      Book a free 15-minute call to talk through what your dog needs.
                    </DialogDescription>
                    <ConsultationForm />
                  </DialogContent>
                </Dialog>
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

      {/* Step 1: Initial Assessment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-charcoal mb-4">
                The <span className="text-primary-blue">Canine Success Assessment</span>
              </h2>
              <p className="text-xl text-medium-grey mb-4">
                Every adult dog is different. Before any training begins, I need to understand what's actually driving the behaviour — not just what it looks like from the outside.
              </p>
              <p className="text-xl text-medium-grey mb-4">
                This 60-minute session covers your dog's history, current challenges, and what you want life to look like on the other side. You leave with a clear picture of what's going on and a specific plan to address it.
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

      {/* Service 1: Walk & Train */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <Footprints className="w-4 h-4" />
                High-Frequency Results
              </div>
              <h2 className="text-4xl font-bold text-charcoal">
                The Kalinga Park <span className="text-primary-blue">Walk and Train</span>
              </h2>
              <p className="text-lg text-medium-grey leading-relaxed">
                Designed for busy owners who need consistency without having to be there for every session.
              </p>
              <p className="text-lg text-medium-grey leading-relaxed">
                I take your dog for focused 40-minute training sessions in Kalinga Park, Nundah, or along the Kedron Brook. I handle the repetition. You see the results.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Leash Reactivity Rehabilitation</h3>
                    <p className="text-medium-grey">I work on fulfilment and impulse control while building clarity around expectations — teaching dogs not to react at every dog that passes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Loose-Lead Mastery</h3>
                    <p className="text-medium-grey">Stopping the pulling while passing joggers and cyclists on the bikeway.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Focus Under Distraction</h3>
                    <p className="text-medium-grey">Proofing commands in the Kalinga Park off-lead area, where distractions are constant and the training actually has to hold.</p>
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
                        <span className="text-medium-grey">Busy owners needing consistency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">Dogs requiring real-world proofing</span>
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

      {/* Service 2: 1-on-1 Coaching */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                <Users className="w-4 h-4" />
                Owner Skill Building
              </div>
              <h2 className="text-4xl font-bold text-charcoal">
                <span className="text-primary-blue">One-on-One Coaching</span> Sessions
              </h2>
              <p className="text-lg text-medium-grey leading-relaxed">
                For owners who want to understand what they're doing and why.
              </p>
              <p className="text-lg text-medium-grey leading-relaxed">
                These 60-minute sessions are built around you as much as your dog. I teach you the timing, body language, and communication mechanics that make training actually stick — so you're not dependent on me showing up every week.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">Handling Mechanics</h5>
                    <p className="text-medium-grey">The exact timing and technique that makes the difference between a dog that listens and one that doesn't.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">Complex Behaviour Work</h5>
                    <p className="text-medium-grey">Reactivity, anxiety, recall, impulse control. Addressed directly, with a clear explanation of what's driving it.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">Skills That Transfer</h5>
                    <p className="text-medium-grey">You leave each session knowing how to maintain and build on what we covered. The goal is your independence, not mine.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
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
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-medium-grey">In-home behavioural modification</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <p className="text-purple-800 font-semibold text-center">
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
                Ready to walk Kedron Brook without the battle?
              </h2>
              <p className="text-xl text-white opacity-90">
                A free 15-minute call is enough to work out what your dog needs and where to start.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="bg-white text-primary-blue hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
                    data-testid="button-free-call-cta"
                  >
                    Book a Free Call
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogTitle>Book a Free Call</DialogTitle>
                  <DialogDescription>
                    Book a free 15-minute call to talk through what your dog needs.
                  </DialogDescription>
                  <ConsultationForm />
                </DialogContent>
              </Dialog>

              <Button
                onClick={() => setShowPackagesDialog(true)}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-blue px-8 py-4 text-lg font-semibold"
                data-testid="button-book-now-cta"
              >
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
            You'll be redirected to our secure booking system to schedule your Kalinga Park Walk & Train sessions.
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
            You'll be redirected to our secure booking system to schedule your 1-on-1 Private Coaching session ($120).
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
