import { Card } from "@/components/ui/card";
import { StaticSEO } from "@/components/SEO";
import { HelpCircle } from "lucide-react";
import { Link } from "wouter";
import { FAQ_ITEMS } from "@shared/faq-content";
import FaqAnswer from "@/components/faq-answer";
import FinalCta from "@/components/funnel/final-cta";

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <StaticSEO
        path="/faq"
        keywords={[
          'dog training FAQ Brisbane',
          'dog trainer questions',
          'North Brisbane dog training questions',
          'canine confidence FAQ'
        ]}
      />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-sand text-navy px-4 py-2 rounded-full text-sm font-bold mb-6">
            <HelpCircle className="w-4 h-4" />
            Got questions?
          </div>
          <h1 className="text-5xl font-extrabold text-charcoal mb-6">
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
            {FAQ_ITEMS.map((item) => (
              <Card key={item.question} className="bg-white p-6">
                <h3 className="font-semibold text-charcoal mb-3">{item.question}</h3>
                <div className="space-y-2">
                  <FaqAnswer answer={item.answer} className="text-medium-grey text-sm" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions CTA */}
      <FinalCta
        heading="Still have questions?"
        text={<>Call me on <a href="tel:0409521358" className="font-bold text-primary underline-offset-4 hover:underline">0409 521 358</a> or email <a href="mailto:info@canineconfidence.com.au" className="font-bold text-primary underline-offset-4 hover:underline">info@canineconfidence.com.au</a>. I'm happy to help.</>}
        location="FAQ final CTA"
      />
    </div>
  );
}
