import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { MapPin, Phone, Check, Calendar, ShieldCheck, Award, Heart, Users, Footprints } from "lucide-react";
import ConsultationForm from "@/components/forms/consultation-form";

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
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary-blue" />
                  <span className="text-primary-blue font-semibold">Northgate, Nundah & Kalinga</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
                  Northgate Dog Training: <span className="text-primary-blue">Reliable, Real-life Obedience</span>
                </h1>
                <p className="text-lg text-medium-grey leading-relaxed">
                  Northgate locals demand real results. Whether your dog pulls relentlessly on the Kedron Brook bikeway or barks at every dog in Kalinga Park, our proven Walk & Train and 1-on-1 Coaching programs deliver measurable, lasting transformation.
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

      {/* Step 1: Initial Assessment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Required First Step
              </div>
              <h2 className="text-4xl font-bold text-charcoal mb-4">
                Step 1: The <span className="text-primary-blue">Canine Success Assessment</span>
              </h2>
              <p className="text-xl text-medium-grey">
                All new adult dog clients must start here. This 60-minute session is essential for diagnosing your dog's current behaviour, setting realistic goals, and determining the optimal training plan (Walk & Train or 1-on-1 Coaching) for their specific needs.
              </p>
            </div>

            <Card className="bg-light-grey border-0">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal mb-4">Assessment Goal:</h3>
                    <p className="text-lg text-medium-grey">
                      Create a customised, immediate action plan to tackle your primary obedience challenge, including complex issues like leash reactivity.
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <p className="text-blue-800 font-semibold text-xl mb-2">Next Step: Required gateway to booking all further sessions and packages.</p>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl font-bold text-primary-blue">$90</span>
                      <span className="text-lg text-medium-grey">One-Off Initial Canine Success Assessment</span>
                    </div>
                    <Button 
                      onClick={() => setShowAssessmentDialog(true)}
                      className="btn-primary w-full"
                      data-testid="button-book-assessment-section"
                    >
                      Book Assessment Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service 1: Walk & Train */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <Footprints className="w-4 h-4" />
                High-Frequency Results
              </div>
              <h2 className="text-4xl font-bold text-charcoal">
                The Kalinga Park <span className="text-primary-blue">'Walk & Train'</span>
              </h2>
              <p className="text-lg text-medium-grey leading-relaxed">
                Designed for busy owners who need consistency and real-world proofing. Our trainers take your dog for focused, 40-minute training sessions in Kalinga Park, Nundah, or along the Kedron Brook. We handle the repetition; you see the results.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Leash Reactivity Rehabilitation</h3>
                    <p className="text-medium-grey">We work on fulfilment and impulse control while creating clarity in expectations, teaching dogs to not react at every dog passing by.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Loose-Leash Mastery</h3>
                    <p className="text-medium-grey">Stopping the pulling while passing joggers and cyclists on the bikeway.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Unbreakable Focus</h3>
                    <p className="text-medium-grey">Proofing commands against the high distraction of the Kalinga Park off-leash area.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-medium-grey mb-4">
                  Learn more about our <Link href="/services" className="text-primary-blue hover:underline font-semibold">Walk & Train service</Link>.
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
                          <p className="font-semibold text-charcoal">Package Deal</p>
                          <p className="text-sm text-medium-grey">5 Sessions</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-blue">$280</div>
                          <p className="text-sm text-green-700">$56 per session</p>
                        </div>
                      </div>
                      <p className="text-green-700 font-semibold text-center">Save $20 - Best Value!</p>
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
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                <Users className="w-4 h-4" />
                Owner Skill Building
              </div>
              <h2 className="text-4xl font-bold text-charcoal">
                <span className="text-primary-blue">1-on-1 Coaching</span> Sessions
              </h2>
              <p className="text-lg text-medium-grey leading-relaxed">
                For owners who want to be deeply involved in the process, our intensive, 60-minute private sessions focus on teaching you the professional handling skills and techniques needed for long-term success.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-800 text-xl mb-2">Coaching Goal:</h3>
                <p className="text-blue-700">
                  We guide you through the training process, teaching you the timing and mechanics required to maintain and generalise the behaviours.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-charcoal">Focus:</h4>
                <p className="text-medium-grey">
                  Perfect for developing owner confidence and addressing specific, complex issues within the home environment or on structured outdoor sessions.
                </p>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">Professional Handling Skills</h5>
                    <p className="text-medium-grey">Learn exact timing, body language, and communication techniques used by professional trainers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">Complex Issue Resolution</h5>
                    <p className="text-medium-grey">Deep dive into specific behavioural challenges with personalised solutions tailored to your dog.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">Long-Term Success</h5>
                    <p className="text-medium-grey">Build the skills to maintain and generalise behaviours yourself, ensuring lasting results.</p>
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
                    <h3 className="text-2xl font-bold text-charcoal mb-4">Session Format:</h3>
                    <div className="bg-white rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-charcoal">60-Minute Private Session</span>
                        <span className="text-2xl font-bold text-primary-blue">$120</span>
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
                      Empower yourself with professional training skills
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
                Ready to Transform Your Dog's Behaviour in Northgate?
              </h2>
              <p className="text-xl text-white opacity-90">
                Join Northgate, Nundah, and Kalinga dog owners who've achieved real results with our proven training programs.
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
