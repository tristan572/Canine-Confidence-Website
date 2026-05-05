import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SEO } from "@/components/SEO";
import { Award, Heart, Users, Target, CheckCircle, Phone, MapPin, Clock, Glasses, Search, FileText, HeartHandshake, Calendar } from "lucide-react";
import ConsultationForm from "@/components/forms/consultation-form";
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
        title="About Tristan Pearson | Canine Confidence Dog Training"
        description="Meet Tristan, North Brisbane's NDTF certified dog trainer. From redundancy in 2020 to certification in 2022, discover the story behind Canine Confidence's unique play-based training approach."
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
            About Tristan
          </h1>
          <h2 className="text-3xl font-semibold text-charcoal mb-6">
            From Hobby to <span className="text-primary-blue">Obsession</span>
          </h2>
          <p className="text-xl text-medium-grey mb-8">
            I started training my own dog in 2016. What began as a weekend hobby turned into something I couldn't stop thinking about.
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
                  For years I kept it alongside a regular job. Then in 2020, I was made redundant. I took it as the push I'd been waiting for.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed">
                  I didn't want to be another backyard trainer. I wanted to actually understand dogs.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed">
                  I formalised my training through the National Dog Trainers Federation, earning my Certificate III in Dog Behaviour and Training. The certificate was the starting point, not the destination.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed">
                  Since then I've spent every day immersed in the field. Books, podcasts, seminars, courses, and more importantly, dogs. Hundreds of them, across North Brisbane. That's where real understanding comes from.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed">
                  At Canine Confidence, you get the benefit of that obsession. I don't rely on guesswork or generic methods. I rely on applied canine behaviour, continuous study, and honest communication with every dog I work with.
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
                <source type="image/webp" srcSet={aboutHeroImageWebp} />
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
              Training is about more than commands. It's about understanding what a dog actually needs and building a relationship on that foundation. When the foundations are right, behaviour follows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Play-Based Learning</h3>
              <p className="text-medium-grey">
                Play is my primary training tool. A dog that works for a game is more motivated, more focused, and more engaged than one working only for food or to avoid a correction. It turns training into something your dog genuinely wants to do.
              </p>
            </Card>

            <Card className="bg-white p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Real-World Skills</h3>
              <p className="text-medium-grey">
                I don't train for the living room. I train for real life. Busy footpaths, cafés, parks, guests at the door. Your dog needs to handle the world, not just perform in ideal conditions.
              </p>
            </Card>

            <Card className="bg-white p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Genetic Fulfilment</h3>
              <p className="text-medium-grey">
                Most behavioural issues start with frustration. I identify what your dog is bred to do and give them a constructive outlet for that drive. When biological needs are met, a lot of the problem behaviour disappears on its own.
              </p>
            </Card>

            <Card className="bg-white p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Glasses className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Predictability & Clarity</h3>
              <p className="text-medium-grey">
                Anxiety comes from confusion. Clear expectations and consistent boundaries give your dog a framework they can rely on. When a dog knows what's expected, they settle.
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
                <source type="image/webp" srcSet={aboutTrainingImageWebp} />
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
                  <div className="text-lg font-bold mb-1">I'm not just here to train dogs</div>
                  <div className="text-blue-100 text-sm">A trained dog isn't the goal. A dog you can actually live with is.</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-charcoal">Why I Train Differently</h2>
                <p className="text-lg text-medium-grey leading-relaxed">
                  Most trainers work on symptoms. I work on the cause.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed">
                  When you understand what a dog is wired for and give them a real outlet for it, training becomes straightforward. My own dog Cleo is the clearest example. She's never been destructive or highly anxious because her needs are consistently met.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed">
                  That's the outcome I work towards for every client: a fulfilled dog, and a household that actually feels calm.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">NDTF Certified Professional</h3>
                    <p className="text-medium-grey">Nationally accredited through the National Dog Trainers Federation, with a focus on genetic fulfilment and play-based learning.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">100+ Five-Star Reviews</h3>
                    <p className="text-medium-grey">Verified across Google and Madpaws from North Brisbane families.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">Ongoing Support</h3>
                    <p className="text-medium-grey">Committed to your dog's progress for the long term, not just the sessions.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">Results-Based Methods</h3>
                    <p className="text-medium-grey">Grounded in current canine behaviour science and applied in the real world.</p>
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
            <h2 className="text-4xl font-bold text-charcoal mb-4">My Approach</h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              I take the time to understand your dog's individual needs, genetics, and personality, building a strategy that fits both your dog's natural learning style and your family's lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white p-6 text-center border border-gray-100">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Behavioural Audit</h3>
              <p className="text-sm text-medium-grey">A thorough look at your dog's current behaviour, history, and what's actually driving it.</p>
            </Card>

            <Card className="bg-white p-6 text-center border border-gray-100">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Personalised Strategy</h3>
              <p className="text-sm text-medium-grey">A training plan built around your dog's drives, learning style, and your household.</p>
            </Card>

            <Card className="bg-white p-6 text-center border border-gray-100">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Hands-On Skill Transfer</h3>
              <p className="text-sm text-medium-grey">Practical sessions where you learn to lead, not just watch.</p>
            </Card>

            <Card className="bg-white p-6 text-center border border-gray-100">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Sustained Results</h3>
              <p className="text-sm text-medium-grey">Ongoing guidance so progress holds up in real life.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to get started?</h2>
          <p className="text-xl text-white/90 mb-12">
            Book a free 15-minute call. We'll talk through what's going on with your dog and work out whether we're a good fit.
          </p>
          <div className="flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-50 px-8 py-4 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Book a Free Call
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogTitle>Free Consultation</DialogTitle>
                <DialogDescription>Book a free 15-minute call to talk through what's going on with your dog.</DialogDescription>
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
