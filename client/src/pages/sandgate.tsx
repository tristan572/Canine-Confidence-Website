import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { StaticSEO } from "@/components/SEO";
import { Link } from "wouter";
import { Waves, MapPin, Check, Heart } from "lucide-react";
import sandgateHero from "@assets/shorncliffe-pier-sunset.jpeg";
import { AssessmentButton, ConsultationButton, CTA_COLOURS } from "@/components/funnel/funnel-cta";
import { getBookingLinkProps } from "@/lib/analytics";
import { usePricing } from "@/hooks/use-pricing";
import FinalCta from "@/components/funnel/final-cta";
import MeetTristan from "@/components/meet-tristan";
import HowItWorks from "@/components/how-it-works";
import { HERO_PHOTO, HERO_SECTION } from "@/lib/hero";

export default function SandgatePage() {
  const pricing = usePricing();
  const assessmentPrice = pricing.servicePrice("Initial Canine Success Assessment");
  const adventurePrice = pricing.servicePrice("Adventure Walk and Training");
  const adventurePackPrice = pricing.packagePrice("The Adventure Pack");
  const adventurePackPerSession = pricing.packagePerSession("The Adventure Pack");
  const adventurePackSaving = pricing.packageSaving("The Adventure Pack");
  const confidentStartPrice = pricing.packagePrice("The Confident Start Program");
  const confidentStartSessions = pricing.packageSessions("The Confident Start Program");
  const [showAssessmentDialog, setShowAssessmentDialog] = useState(false);
  const [showAdventureDialog, setShowAdventureDialog] = useState(false);
  const [showAdventurePackageDialog, setShowAdventurePackageDialog] = useState(false);
  const [showConfidentStartDialog, setShowConfidentStartDialog] = useState(false);
  const [showPackagesDialog, setShowPackagesDialog] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBookAssessment = () => {
    setShowAssessmentDialog(false);
  };

  const handleBookAdventure = () => {
    setShowAdventureDialog(false);
  };

  const handleBookAdventurePackage = () => {
    setShowAdventurePackageDialog(false);
  };

  const handleBookConfidentStart = () => {
    setShowConfidentStartDialog(false);
  };

  const handleBookPackages = () => {
    setShowPackagesDialog(false);
  };

  return (
    <div className="min-h-screen">
      <StaticSEO
        path="/dog-training-sandgate"
        ogImage="/attached_assets/shorncliffe-pier-sunset.webp"
        keywords={[
          'dog training Sandgate',
          'dog trainer Shorncliffe',
          'dog training Brighton Brisbane',
          'Sandgate foreshore dog training',
          'bayside dog trainer',
          'Shorncliffe pier dog training'
        ]}
      />

      {/* Hero Section */}
      <section className={HERO_SECTION}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary-blue" />
                  <span className="text-primary-blue font-semibold">Sandgate, Shorncliffe & Brighton</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-extrabold text-charcoal leading-tight">
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

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <AssessmentButton label={`Book an Assessment · ${assessmentPrice}`} location="Sandgate hero" className="px-7 py-4 text-lg" />
                <ConsultationButton className="btn-secondary px-7 py-4 text-lg" />
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={sandgateHero} 
                alt="Dog training at Shorncliffe Pier, Sandgate - where your dog learns real-world skills on Brisbane's bayside foreshore" 
                className={`rounded-[26px] w-full h-auto ${HERO_PHOTO}`}
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
              <div className="inline-flex items-center gap-2 bg-sand text-navy px-4 py-2 rounded-full text-sm font-bold">
                <Waves className="w-4 h-4" />
                Signature Service
              </div>
              <h2 className="text-4xl font-extrabold text-charcoal">
                The Bayside <span className="text-primary-blue">Adventure Walk and Training</span>
              </h2>
              <p className="text-lg text-medium-grey leading-relaxed">
                A one-on-one training and enrichment session built around the Sandgate foreshore. Real exercise, real fulfilment, real-world skills — in the environment where it actually needs to hold up.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Foreshore Focus</h3>
                    <p className="text-medium-grey">I work on the Sandgate Foreshore off-lead mudflats between Second Avenue and Zeehan Street — reliable recall and impulse control, even with other dogs running past.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Proofing Distractions</h3>
                    <p className="text-medium-grey">Your dog learns to ignore moving bikes, passing crowds, and seagulls while walking calmly on Flinders Parade.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Café Manners</h3>
                    <p className="text-medium-grey">I practise Settle and Place behaviours so your dog can hold it while you enjoy Brisbane's best calamari from the local Fishmonger.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Leash Mastery</h3>
                    <p className="text-medium-grey">Loose-lead walking along Shorncliffe Pier, where distractions are at their peak.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={() => setShowAdventureDialog(true)}
                  className={`btn-cta ${CTA_COLOURS} `}
                  data-testid="button-book-adventure-walk"
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
                      <p className="font-semibold text-charcoal">Single 60-Minute Session</p>
                      <div className="text-2xl font-bold text-primary-blue">{adventurePrice}</div>
                    </div>

                    <div className="border-2 border-primary-blue rounded-lg p-4 bg-sand">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-semibold text-charcoal">The Adventure Pack</p>
                          <p className="text-sm text-medium-grey">5 Sessions</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-blue">{adventurePackPrice}</div>
                          <p className="text-sm text-primary-blue">{adventurePackPerSession} per session</p>
                        </div>
                      </div>
                      <p className="text-primary-blue font-semibold text-center">Save {adventurePackSaving} across the package.</p>
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
                    onClick={() => setShowAdventurePackageDialog(true)}
                    className={`btn-cta ${CTA_COLOURS} w-full`}
                    data-testid="button-book-adventure-package-card"
                  >
                    Book Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service 2: Confident Start Program */}
      <section className="py-20 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-sand text-primary-blue px-4 py-2 rounded-full text-sm font-medium">
                Perfect for Puppies
              </div>
              <h2 className="text-4xl font-extrabold text-charcoal">
                <span className="text-primary-blue">The Confident Start Program</span>
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
                Six private sessions, delivered in your Bayside home. I work on the foundations that actually matter — calm settling, clear communication, and the confidence to handle real life.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">Handling and Vet Prep</h5>
                    <p className="text-medium-grey">I work through comfortable handling from day one. Nail trims, ear checks, being restrained calmly. The earlier this is normal, the easier every vet visit becomes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">Separation Confidence</h5>
                    <p className="text-medium-grey">I build your puppy's ability to be alone without falling apart. Started early, done gradually, it becomes a non-issue.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">Environmental Confidence</h5>
                    <p className="text-medium-grey">Structured exposure to what Sandgate actually throws at a dog — skateboards on the footpath, strong winds off the foreshore, busy crowds. Your puppy learns the world is manageable.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">How to Learn</h5>
                    <p className="text-medium-grey">Before commands, your puppy needs to understand how to focus and take feedback. I build that foundation first. Everything else gets easier once it's in place.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-charcoal mb-1">In-Home Training</h5>
                    <p className="text-medium-grey">Sessions happen in your actual environment. Toilet training, settling habits, and boundaries are built where they need to hold — not transferred from a classroom.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={() => setShowConfidentStartDialog(true)}
                  className={`btn-cta ${CTA_COLOURS} `}
                  data-testid="button-book-confident-start"
                >
                  Book The Confident Start Program
                </Button>
              </div>
            </div>

            <Card className="rounded-[22px] border border-navy/10 bg-white shadow-none">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center pb-4 border-b">
                    <h3 className="text-2xl font-extrabold text-charcoal mb-2">The Confident Start Program</h3>
                    <p className="text-medium-grey mb-4">
                      6 private, one-hour, in-home sessions.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-4xl font-bold text-primary-blue">{confidentStartPrice}</span>
                    </div>
                    <p className="text-primary-blue font-semibold mt-2">Six private in-home puppy sessions.</p>
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
                    className={`btn-cta ${CTA_COLOURS} w-full`}
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

      <HowItWorks intro="From your home to the foreshore and Shorncliffe Pier, the plan is built around your dog and the places you want to enjoy together." />

      <MeetTristan />

      {/* CTA Section */}
      <FinalCta
        heading="Ready to enjoy the foreshore again?"
        text="Start with an assessment at your home, or ask about your dog first and I'll help you work out where to start."
        location="Sandgate final CTA"
      />

      {/* Security Dialogs */}
      <Dialog open={showAssessmentDialog} onOpenChange={setShowAssessmentDialog}>
        <DialogContent className="max-w-md w-full p-6">
          <DialogTitle className="text-xl font-bold text-charcoal mb-2">
            Secure Booking System
          </DialogTitle>
          <DialogDescription className="text-medium-grey mb-6">
            You'll be redirected to book the {assessmentPrice} Initial Canine Success Assessment.
          </DialogDescription>
          
          <div className="space-y-4">
            <Button asChild className={`btn-cta ${CTA_COLOURS} w-full py-3 text-base`}>
              <a
                {...getBookingLinkProps(
                  "https://canineconfidence.simplybook.net/v2/#book/service/16/count/1/",
                  "service",
                  "Initial Canine Success Assessment",
                  handleBookAssessment,
                )}
              >
                Continue to Secure Booking
              </a>
            </Button>
            
            <Button 
              onClick={() => setShowAssessmentDialog(false)}
              variant="outline"
              className="w-full py-3"
            >
              Cancel
            </Button>
          </div>
          
          <div className="mt-4 text-xs text-medium-grey text-center">
            <p>🔒 Secure SSL encrypted booking system</p>
            <p>📅 Real-time availability • 💳 Secure payments</p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showAdventureDialog} onOpenChange={setShowAdventureDialog}>
        <DialogContent className="max-w-md w-full p-6">
          <DialogTitle className="text-xl font-bold text-charcoal mb-2">
            Secure Booking System
          </DialogTitle>
          <DialogDescription className="text-medium-grey mb-6">
            New clients start with the {assessmentPrice} Initial Canine Success Assessment before booking Adventure Walk and Training.
          </DialogDescription>

          <div className="space-y-4">
            <Button asChild className={`btn-cta ${CTA_COLOURS} w-full py-3 text-base`}>
              <a
                {...getBookingLinkProps(
                  "https://canineconfidence.simplybook.net/v2/#book/service/16/count/1/",
                  "service",
                  "Initial Canine Success Assessment",
                  handleBookAdventure,
                )}
              >
                Continue to Secure Booking
              </a>
            </Button>

            <Button
              onClick={() => setShowAdventureDialog(false)}
              variant="outline"
              className="w-full py-3"
            >
              Cancel
            </Button>
          </div>

          <div className="mt-4 text-xs text-medium-grey text-center">
            <p>🔒 Secure SSL encrypted booking system</p>
            <p>📅 Real-time availability • 💳 Secure payments</p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showAdventurePackageDialog} onOpenChange={setShowAdventurePackageDialog}>
        <DialogContent className="max-w-md">
          <DialogTitle>Continue to Secure Booking</DialogTitle>
          <DialogDescription>
            New clients start with the {assessmentPrice} Initial Canine Success Assessment before booking The Adventure Pack.
          </DialogDescription>
          <div className="flex gap-3 justify-end mt-4">
            <Button
              variant="outline"
              onClick={() => setShowAdventurePackageDialog(false)}
              data-testid="button-cancel-adventure-package"
            >
              Cancel
            </Button>
            <Button asChild className={`btn-cta ${CTA_COLOURS} `}>
              <a
                {...getBookingLinkProps(
                  "https://canineconfidence.simplybook.net/v2/#book/service/16/count/1/",
                  "service",
                  "Initial Canine Success Assessment",
                  handleBookAdventurePackage,
                )}
                data-testid="button-continue-adventure-package"
              >
                Continue to Secure Booking
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showConfidentStartDialog} onOpenChange={setShowConfidentStartDialog}>
        <DialogContent className="max-w-md w-full p-6">
          <DialogTitle className="text-xl font-bold text-charcoal mb-2">
            Secure Booking System
          </DialogTitle>
          <DialogDescription className="text-medium-grey mb-6">
            You'll be redirected to The Confident Start Program, which includes {confidentStartSessions ?? "…"} sessions for {confidentStartPrice}. No assessment is required.
          </DialogDescription>
          
          <div className="space-y-4">
            <Button asChild className={`btn-cta ${CTA_COLOURS} w-full py-3 text-base`}>
              <a
                {...getBookingLinkProps(
                  "https://canineconfidence.simplybook.net/v2/#packages/6",
                  "package",
                  "The Confident Start Program",
                  handleBookConfidentStart,
                )}
              >
                Continue to Secure Booking
              </a>
            </Button>
            
            <Button 
              onClick={() => setShowConfidentStartDialog(false)}
              variant="outline"
              className="w-full py-3"
            >
              Cancel
            </Button>
          </div>
          
          <div className="mt-4 text-xs text-medium-grey text-center">
            <p>🔒 Secure SSL encrypted booking system</p>
            <p>📅 Real-time availability • 💳 Secure payments</p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showPackagesDialog} onOpenChange={setShowPackagesDialog}>
        <DialogContent className="max-w-md w-full p-6">
          <DialogTitle className="text-xl font-bold text-charcoal mb-2">
            Secure Booking System
          </DialogTitle>
          <DialogDescription className="text-medium-grey mb-6">
            You'll be redirected to book the {assessmentPrice} Initial Canine Success Assessment.
          </DialogDescription>
          
          <div className="space-y-4">
            <Button asChild className={`btn-cta ${CTA_COLOURS} w-full py-3 text-base`}>
              <a
                {...getBookingLinkProps(
                  "https://canineconfidence.simplybook.net/v2/#book/service/16/count/1/",
                  "service",
                  "Initial Canine Success Assessment",
                  handleBookPackages,
                )}
              >
                Continue to Secure Booking
              </a>
            </Button>
            
            <Button 
              onClick={() => setShowPackagesDialog(false)}
              variant="outline"
              className="w-full py-3"
            >
              Cancel
            </Button>
          </div>
          
          <div className="mt-4 text-xs text-medium-grey text-center">
            <p>🔒 Secure SSL encrypted booking system</p>
            <p>📅 Real-time availability • 💳 Secure payments</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
