import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Phone, Mail, HelpCircle } from "lucide-react";
import { Link } from "wouter";

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Frequently Asked Questions | Canine Confidence Dog Training Brisbane"
        description="Honest answers to the questions most people have before booking a dog training session with Canine Confidence in North Brisbane."
        canonical="https://canineconfidence.com.au/faq"
        keywords={[
          'dog training FAQ Brisbane',
          'dog trainer questions',
          'North Brisbane dog training questions',
          'canine confidence FAQ'
        ]}
      />

      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Got questions?
          </div>
          <h1 className="text-5xl font-bold text-charcoal mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-medium-grey max-w-2xl mx-auto">
            Honest answers to the questions most people have before booking.
          </p>
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">What's your method?</h3>
              <p className="text-medium-grey text-sm">
                I use what the dog in front of me actually needs. Play, food, structure, clear feedback, proper rest, affection. No dogma. The goal is a calm, confident dog and an owner who knows how to lead without overthinking it.
              </p>
              <p className="text-medium-grey text-sm mt-2">
                For the longer version, read my blog posts or the PDF "The Four Building Blocks to A Balanced Dog".
              </p>
            </Card>

            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">What if my dog is reactive?</h3>
              <p className="text-medium-grey text-sm">
                That's a lot of the work I do. Reactive dogs aren't broken. They're either overstimulated, fearful or frustrated. I sort the foundations, then work on the behaviour itself.
              </p>
              <p className="text-medium-grey text-sm mt-2">
                If your dog has bitten a human before, mention it on the call. We'll plan accordingly.
              </p>
            </Card>

            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">Do you use corrections, e-collars or prong collars?</h3>
              <p className="text-medium-grey text-sm">
                I match the tool to the dog and the owner. Most of what I do is built on play, food, and clear communication. I use mild corrections (lead pressure, water spray, social disappointment) when the dog needs a clearer "no" than encouragement alone can give.
              </p>
              <p className="text-medium-grey text-sm mt-2">
                I'm trained on e-collars. I introduce them only when the owner is open to it and the dog will genuinely benefit. Prong collars are illegal in Queensland and I don't use them.
              </p>
              <p className="text-medium-grey text-sm mt-2">
                If aversives aren't for you, tell me. I'll show you what's possible without them and let you decide.
              </p>
            </Card>

            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">How long will training take?</h3>
              <p className="text-medium-grey text-sm">
                It depends on the dog, the goals, and how consistent the practice is at home. Most owners see meaningful change in three to six sessions. Real-world reliability (off-lead, distractions, public spaces) takes longer.
              </p>
              <p className="text-medium-grey text-sm mt-2">
                I'll give you a clearer estimate throughout the program.
              </p>
            </Card>

            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">How often should we train between sessions?</h3>
              <p className="text-medium-grey text-sm">
                Daily, in short bursts. Two to five minutes per session is enough. Short and frequent beats long and rare.
              </p>
            </Card>

            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">How often should we book sessions?</h3>
              <p className="text-medium-grey text-sm">
                Weekly or fortnightly works for coaching sessions. Weekly while you're learning the foundations, fortnightly once you're rolling.
              </p>
              <p className="text-medium-grey text-sm mt-2">
                In-home day trains should be 4-5 times a week as I'm doing the hands on training so it needs to be regular for best results.
              </p>
            </Card>

            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">What about treats? When can we stop using them?</h3>
              <p className="text-medium-grey text-sm">
                Food is one tool, not the whole toolkit. Once we work out what actually drives your dog (some are food-led, most are play-led underneath), we use that as the primary reward and fade the food over time. The goal is a dog who works with you because the relationship is the reward, not because there's a treat in your hand.
              </p>
            </Card>

            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">What if it rains?</h3>
              <p className="text-medium-grey text-sm">
                We work indoors, under cover, or reschedule. I'll let you know on the morning if the weather looks like it'll get in the way.
              </p>
            </Card>

            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">Where do you work?</h3>
              <p className="text-medium-grey text-sm">
                I come to you. Most sessions happen at your home or a nearby park or street. Some work moves into the real world (cafes, public spaces) once the foundations are in.
              </p>
              <p className="text-medium-grey text-sm mt-2">
                I cover the northside of Brisbane.
              </p>
            </Card>

            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">What does it cost?</h3>
              <p className="text-medium-grey text-sm">
                See the full service list on the{" "}
                <Link href="/services" className="text-primary-blue hover:underline">services page</Link>.
                {" "}The Initial Canine Success Assessment ($90) is the starting point for adult dogs.
              </p>
            </Card>

            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">What's the cancellation policy?</h3>
              <p className="text-medium-grey text-sm">
                Cancellations more than 24 hours out reschedule at no cost. Inside 24 hours and no-shows may be charged the full session fee. If something genuinely comes up, text me first and we'll work it out.
              </p>
            </Card>

            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">Will you judge me or my dog?</h3>
              <p className="text-medium-grey text-sm">
                No. Most clients have already tried a few things by the time they book me. You're in good company.
              </p>
            </Card>

            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">What if I can't be consistent?</h3>
              <p className="text-medium-grey text-sm">
                Be honest with me on the call. A plan you'll actually do beats a perfect plan you won't.
              </p>
            </Card>

            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">How soon can I start training?</h3>
              <p className="text-medium-grey text-sm">
                I typically have availability within 1-2 weeks of your initial consultation. For urgent behavioural issues, I may be able to accommodate earlier sessions.
              </p>
            </Card>

            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">Do you offer package deals?</h3>
              <p className="text-medium-grey text-sm">
                Yes! I offer multi-session packages that provide better value and ensure consistent progress. I'll discuss options during your consultation.
              </p>
            </Card>

            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">What areas do you service?</h3>
              <p className="text-medium-grey text-sm">
                Based in Boondall, I service a 20km radius covering North Brisbane and surrounding suburbs. Travel beyond 10km may incur additional charges. I also offer video consultations worldwide for remote training.
              </p>
            </Card>

            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">What payment methods do you accept?</h3>
              <p className="text-medium-grey text-sm">
                I accept all major payment methods through my secure online scheduling system. Payment is required upfront before sessions to confirm your booking.
              </p>
            </Card>

            <Card className="bg-white p-6">
              <h3 className="font-semibold text-charcoal mb-3">Do I need to be present for training?</h3>
              <p className="text-medium-grey text-sm">
                Coaching sessions are built around you as much as your dog. If the aim is for you to handle your dog confidently, you need to be part of the session — that's where the skill transfer happens.
              </p>
              <p className="text-medium-grey text-sm mt-2">
                Walks and In-home Day Trains don't require you to be present. I work directly with your dog and build the foundations. For Day Train sessions, I'll walk you through what we covered at the end so you can maintain it at home.
              </p>
              <p className="text-medium-grey text-sm mt-2">
                When you book, I'll let you know what's needed for your specific service.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="py-16 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Still have questions?</h2>
            <p className="text-xl text-blue-100">
              Don't hesitate to reach out — I'm happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild className="bg-white text-primary-blue hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
                <a href="tel:0409521358">
                  <Phone className="w-5 h-5 mr-2" />
                  0409 521 358
                </a>
              </Button>
              <Button asChild className="bg-white text-primary-blue hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
                <a href="mailto:info@canineconfidence.com.au">
                  <Mail className="w-5 h-5 mr-2" />
                  Send an Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
