import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { StaticSEO } from "@/components/SEO";
import { Link } from "wouter";
import { MapPin, Phone, Check, Heart, Users, Footprints } from "lucide-react";
import { CTA_COLOURS } from "@/components/funnel/funnel-cta";
import ConsultationForm from "@/components/forms/consultation-form";
import tristanPortraitWebp from "@assets/trainer_kelpie_600.webp";
import tristanPortraitJpeg from "@assets/trainer_kelpie_800.jpg";
import { getBookingLinkProps } from "@/lib/analytics";
import { usePricing } from "@/hooks/use-pricing";
import FinalCta from "@/components/funnel/final-cta";

export default function NorthgatePage() {
  const pricing = usePricing();
  const assessmentPrice = pricing.servicePrice("Initial Canine Success Assessment");
  const walkTrainPrice = pricing.servicePrice("Walk and Train");
  const coachingPrice = pricing.servicePrice("One-on-One Private Coaching");
  const reliabilityPrice = pricing.packagePrice("The Real World Reliability Package");
  const reliabilityPerSession = pricing.packagePerSession("The Real World Reliability Package");
  const reliabilitySaving = pricing.packageSaving("The Real World Reliability Package");
  const focusedProgressPrice = pricing.packagePrice("The Focused Progress Plan");
  const focusedProgressPerSession = pricing.packagePerSession("The Focused Progress Plan");
  const focusedProgressSaving = pricing.packageSaving("The Focused Progress Plan");
  const [showAssessmentDialog, setShowAssessmentDialog] = useState(false);
  const [showWalkTrainDialog, setShowWalkTrainDialog] = useState(false);
  const [showWalkTrainPackageDialog, setShowWalkTrainPackageDialog] = useState(false);
  const [showCoachingDialog, setShowCoachingDialog] = useState(false);
  const [showCoachingPackageDialog, setShowCoachingPackageDialog] = useState(false);
  const [showPackagesDialog, setShowPackagesDialog] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBookAssessment = () => {
    setShowAssessmentDialog(false);
  };

  const handleBookWalkTrain = () => {
    setShowWalkTrainDialog(false);
  };

  const handleBookCoaching = () => {
    setShowCoachingDialog(false);
  };

  const handleBookWalkTrainPackage = () => {
    setShowWalkTrainPackageDialog(false);
  };

  const handleBookCoachingPackage = () => {
    setShowCoachingPackageDialog(false);
  };

  const handleBookPackages = () => {
    setShowPackagesDialog(false);
  };

  return (
    <div className="min-h-screen">
      <StaticSEO
        path="/dog-training-northgate"
        keywords={[
          'dog training Northgate',
          'dog trainer Nundah',
          'dog training Kalinga',
          'Kalinga Park dog training',
          'Northgate leash training',
          'Nundah dog trainer'
        ]}
      />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary-blue" />
                  <span className="text-primary-blue font-semibold">Northgate, Nundah & Kalinga</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-extrabold text-charcoal leading-tight">
                  Northgate & Nundah Dog Training: Reliable, Real-life Obedience
                </h1>
                <p className="text-lg text-medium-grey leading-relaxed">
                  If your dog pulls on the Kedron Brook bikeway or loses it at every dog in Kalinga Park, the problem isn't the location. It's that the training hasn't been built for real-world conditions.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed font-medium">
                  My Walk and Train and One-on-One Private Coaching programs are.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline"
                      className="btn-secondary text-lg px-8 py-4"
                      data-testid="button-request-call-hero"
                    >
                      <Phone className="w-5 h-5 mr-2" />
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
                <Button
                  onClick={() => setShowAssessmentDialog(true)}
                  className={`btn-cta ${CTA_COLOURS} text-lg px-8 py-4 order-first`}
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
                  alt="Tristan, NDTF certified dog trainer, crouching with a red Kelpie cross in a North Brisbane park"
                  className="aspect-[4/5] w-full rounded-[26px] object-cover object-center"
                  width={800}
                  height={1000}
                  loading="eager"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* Service 1: Walk & Train */}
      <section className="py-20 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-sand text-primary-blue px-4 py-2 rounded-full text-sm font-medium">
                <Footprints className="w-4 h-4" />
                High-Frequency Results
              </div>
              <h2 className="text-4xl font-extrabold text-charcoal">
                The Kalinga Park <span className="text-primary-blue">Walk and Train</span>
              </h2>
              <p className="text-lg text-medium-grey leading-relaxed">
                Designed for busy owners who need consistency without having to be there for every session.
              </p>
              <p className="text-lg text-medium-grey leading-relaxed">
                I take your dog for focused 30-minute training sessions in Kalinga Park, Nundah, or along the Kedron Brook. I handle the repetition. You see the results.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Leash Reactivity Rehabilitation</h3>
                    <p className="text-medium-grey">I work on fulfilment and impulse control while building clarity around expectations — teaching dogs not to react at every dog that passes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Loose-Lead Mastery</h3>
                    <p className="text-medium-grey">Stopping the pulling while passing joggers and cyclists on the bikeway.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Focus Under Distraction</h3>
                    <p className="text-medium-grey">Proofing commands in the Kalinga Park off-lead area, where distractions are constant and the training actually has to hold.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-medium-grey mb-4">
                  See current options on my <Link href="/walking-adventure" className="text-primary-blue hover:underline font-semibold">Adventure &amp; Training page</Link>.
                </p>
                <Button 
                  onClick={() => setShowWalkTrainDialog(true)}
                  className={`btn-cta ${CTA_COLOURS} `}
                  data-testid="button-book-walk-train"
                >
                  Book Assessment
                </Button>
              </div>
            </div>

            <Card className="rounded-[22px] border border-navy/10 bg-white shadow-none">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-extrabold text-charcoal mb-4">Session Details & Pricing</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-sand rounded-lg">
                      <div>
                        <p className="font-semibold text-charcoal">Single 40-Minute Session</p>
                      </div>
                      <div className="text-2xl font-bold text-primary-blue">{walkTrainPrice}</div>
                    </div>

                    <div className="border-2 border-primary-blue rounded-lg p-4 bg-sand">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-semibold text-charcoal">The Real World Reliability Package</p>
                          <p className="text-sm text-medium-grey">5 Sessions</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-blue">{reliabilityPrice}</div>
                          <p className="text-sm text-primary-blue">{reliabilityPerSession} per session</p>
                        </div>
                      </div>
                      <p className="text-primary-blue font-semibold text-center">Save {reliabilitySaving} across the package.</p>
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

                  <Button
                    onClick={() => setShowWalkTrainPackageDialog(true)}
                    className={`btn-cta ${CTA_COLOURS} w-full`}
                    data-testid="button-book-walk-train-package"
                  >
                    Book Assessment
                  </Button>
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
              <div className="inline-flex items-center gap-2 bg-sand text-navy px-4 py-2 rounded-full text-sm font-bold">
                <Users className="w-4 h-4" />
                Owner Skill Building
              </div>
              <h2 className="text-4xl font-extrabold text-charcoal">
                <span className="text-primary-blue">One-on-One Private Coaching</span> Sessions
              </h2>
              <p className="text-lg text-medium-grey leading-relaxed">
                For owners who want to understand what they're doing and why.
              </p>
              <p className="text-lg text-medium-grey leading-relaxed">
                These 60-minute sessions are built around you as much as your dog. I teach you the timing, body language, and communication mechanics that make training actually stick — so you're not dependent on me showing up every week.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">Handling Mechanics</h5>
                    <p className="text-medium-grey">The exact timing and technique that makes the difference between a dog that listens and one that doesn't.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">Complex Behaviour Work</h5>
                    <p className="text-medium-grey">Reactivity, anxiety, recall, impulse control. Addressed directly, with a clear explanation of what's driving it.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">Skills That Transfer</h5>
                    <p className="text-medium-grey">You leave each session knowing how to maintain and build on what we covered. The goal is your independence, not mine.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={() => setShowCoachingDialog(true)}
                  className={`btn-cta ${CTA_COLOURS} `}
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
                    <h3 className="text-2xl font-extrabold text-charcoal mb-4">Session Details & Pricing</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                        <div>
                          <p className="font-semibold text-charcoal">Single 60-Minute Session</p>
                        </div>
                        <div className="text-2xl font-bold text-primary-blue">{coachingPrice}</div>
                      </div>

                      <div className="border-2 border-primary-blue rounded-lg p-4 bg-sand">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-semibold text-charcoal">The Focused Progress Plan</p>
                            <p className="text-sm text-medium-grey">5 Sessions</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary-blue">{focusedProgressPrice}</div>
                            <p className="text-sm text-primary-blue">{focusedProgressPerSession} per session</p>
                          </div>
                        </div>
                        <p className="text-primary-blue font-semibold text-center">Save {focusedProgressSaving} across the package.</p>
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

                  <div className="bg-sand border border-navy/15 rounded-lg p-4">
                    <p className="text-primary-blue font-semibold text-center">
                      The goal is a dog that responds to you — not just to me.
                    </p>
                  </div>

                  <Button
                    onClick={() => setShowCoachingPackageDialog(true)}
                    className={`btn-cta ${CTA_COLOURS} w-full`}
                    data-testid="button-book-coaching-package"
                  >
                    Book Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Assessment Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold text-charcoal">
                Every dog is different. The plan should be too.
              </h2>
              <p className="text-lg text-medium-grey leading-relaxed">
                Every adult dog is different. Before any training begins, I need to understand what's actually driving the behaviour, not just what it looks like from the outside.
              </p>
              <p className="text-lg text-medium-grey leading-relaxed">
                This 60-minute session covers your dog's history, current challenges, and what you want life to look like on the other side. You leave with a clear picture of what's going on and a specific plan to address it.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-extrabold text-charcoal">What it covers:</h3>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Trigger identification</h4>
                    <p className="text-medium-grey">Exactly what causes your dog to react, and why.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Environment review</h4>
                    <p className="text-medium-grey">Your walking routes, your home setup, the specific demands of where you live.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">A training roadmap</h4>
                    <p className="text-medium-grey">A step-by-step plan built around your dog and your situation, not a template.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 hidden lg:block">
                <Button
                  onClick={() => setShowAssessmentDialog(true)}
                  className={`btn-cta ${CTA_COLOURS} px-8`}
                  data-testid="button-book-assessment-section"
                >
                  Book your assessment
                </Button>
              </div>
            </div>

            <Card className="rounded-[22px] border border-navy/10 bg-white shadow-none">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center pb-4 border-b">
                    <h3 className="text-2xl font-extrabold text-charcoal mb-2">Initial Canine Success Assessment</h3>
                    <div className="text-4xl font-bold text-primary-blue">{assessmentPrice}</div>
                    <p className="text-medium-grey mt-2">60 minutes · One-off session</p>
                  </div>

                  <p className="text-medium-grey">
                    One session. A clear picture of your dog, their triggers, and the plan to move forward. It's also how I work out whether Walk and Train, One-on-One Private Coaching, or a combination of both is the right fit.
                  </p>

                  <Button
                    onClick={() => setShowAssessmentDialog(true)}
                    className={`btn-cta ${CTA_COLOURS} w-full`}
                    data-testid="button-book-assessment-card"
                  >
                    Book Your Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <FinalCta
        heading="Ready to walk Kedron Brook without the battle?"
        text="Start with an assessment at your home, or ask about your dog first and I'll help you work out where to start."
        location="Northgate final CTA"
      />

      {/* Security Dialogs */}
      <Dialog open={showAssessmentDialog} onOpenChange={setShowAssessmentDialog}>
        <DialogContent className="max-w-md">
          <DialogTitle>Continue to Secure Booking</DialogTitle>
          <DialogDescription>
            You'll be redirected to my secure booking system to schedule your Initial Canine Success Assessment ({assessmentPrice}).
          </DialogDescription>
          <div className="flex gap-3 justify-end mt-4">
            <Button
              variant="outline"
              onClick={() => setShowAssessmentDialog(false)}
              data-testid="button-cancel-assessment"
            >
              Cancel
            </Button>
            <Button asChild className={`btn-cta ${CTA_COLOURS} `}>
              <a
                {...getBookingLinkProps(
                  "https://canineconfidence.simplybook.net/v2/#book/service/16/count/1/",
                  "service",
                  "Initial Canine Success Assessment",
                  handleBookAssessment,
                )}
                data-testid="button-continue-assessment"
              >
                Continue to Secure Booking
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showWalkTrainDialog} onOpenChange={setShowWalkTrainDialog}>
        <DialogContent className="max-w-md">
          <DialogTitle>Continue to Secure Booking</DialogTitle>
          <DialogDescription>
            You'll be redirected to my secure booking system to schedule your Kalinga Park Walk & Train sessions.
          </DialogDescription>
          <div className="flex gap-3 justify-end mt-4">
            <Button
              variant="outline"
              onClick={() => setShowWalkTrainDialog(false)}
              data-testid="button-cancel-walk-train"
            >
              Cancel
            </Button>
            <Button asChild className={`btn-cta ${CTA_COLOURS} `}>
              <a
                {...getBookingLinkProps(
                  "https://canineconfidence.simplybook.net/v2/#book/service/16/count/1/",
                  "service",
                  "Initial Canine Success Assessment",
                  handleBookWalkTrain,
                )}
                data-testid="button-continue-walk-train"
              >
                Continue to Secure Booking
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showCoachingDialog} onOpenChange={setShowCoachingDialog}>
        <DialogContent className="max-w-md">
          <DialogTitle>Continue to Secure Booking</DialogTitle>
          <DialogDescription>
            New clients start with the {assessmentPrice} Initial Canine Success Assessment before booking private coaching.
          </DialogDescription>
          <div className="flex gap-3 justify-end mt-4">
            <Button
              variant="outline"
              onClick={() => setShowCoachingDialog(false)}
              data-testid="button-cancel-coaching"
            >
              Cancel
            </Button>
            <Button asChild className={`btn-cta ${CTA_COLOURS} `}>
              <a
                {...getBookingLinkProps(
                  "https://canineconfidence.simplybook.net/v2/#book/service/16/count/1/",
                  "service",
                  "Initial Canine Success Assessment",
                  handleBookCoaching,
                )}
                data-testid="button-continue-coaching"
              >
                Continue to Secure Booking
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showPackagesDialog} onOpenChange={setShowPackagesDialog}>
        <DialogContent className="max-w-md">
          <DialogTitle>Continue to Secure Booking</DialogTitle>
          <DialogDescription>
            You'll be redirected to book the {assessmentPrice} Initial Canine Success Assessment.
          </DialogDescription>
          <div className="flex gap-3 justify-end mt-4">
            <Button
              variant="outline"
              onClick={() => setShowPackagesDialog(false)}
              data-testid="button-cancel-packages"
            >
              Cancel
            </Button>
            <Button asChild className={`btn-cta ${CTA_COLOURS} `}>
              <a
                {...getBookingLinkProps(
                  "https://canineconfidence.simplybook.net/v2/#book/service/16/count/1/",
                  "service",
                  "Initial Canine Success Assessment",
                  handleBookPackages,
                )}
                data-testid="button-continue-packages"
              >
                Continue to Secure Booking
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showWalkTrainPackageDialog} onOpenChange={setShowWalkTrainPackageDialog}>
        <DialogContent className="max-w-md">
          <DialogTitle>Continue to Secure Booking</DialogTitle>
          <DialogDescription>
            New clients start with the {assessmentPrice} Initial Canine Success Assessment before booking The Real World Reliability Package.
          </DialogDescription>
          <div className="flex gap-3 justify-end mt-4">
            <Button
              variant="outline"
              onClick={() => setShowWalkTrainPackageDialog(false)}
              data-testid="button-cancel-walk-train-package"
            >
              Cancel
            </Button>
            <Button asChild className={`btn-cta ${CTA_COLOURS} `}>
              <a
                {...getBookingLinkProps(
                  "https://canineconfidence.simplybook.net/v2/#book/service/16/count/1/",
                  "service",
                  "Initial Canine Success Assessment",
                  handleBookWalkTrainPackage,
                )}
                data-testid="button-continue-walk-train-package"
              >
                Continue to Secure Booking
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showCoachingPackageDialog} onOpenChange={setShowCoachingPackageDialog}>
        <DialogContent className="max-w-md">
          <DialogTitle>Continue to Secure Booking</DialogTitle>
          <DialogDescription>
            New clients start with the {assessmentPrice} Initial Canine Success Assessment before booking The Focused Progress Plan.
          </DialogDescription>
          <div className="flex gap-3 justify-end mt-4">
            <Button
              variant="outline"
              onClick={() => setShowCoachingPackageDialog(false)}
              data-testid="button-cancel-coaching-package"
            >
              Cancel
            </Button>
            <Button asChild className={`btn-cta ${CTA_COLOURS} `}>
              <a
                {...getBookingLinkProps(
                  "https://canineconfidence.simplybook.net/v2/#book/service/16/count/1/",
                  "service",
                  "Initial Canine Success Assessment",
                  handleBookCoachingPackage,
                )}
                data-testid="button-continue-coaching-package"
              >
                Continue to Secure Booking
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
