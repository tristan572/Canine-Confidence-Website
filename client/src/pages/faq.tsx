import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StaticSEO } from "@/components/SEO";
import { Phone, Mail, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import { FAQ_ITEMS } from "@shared/faq-content";

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
            {FAQ_ITEMS.map((item) => (
              <Card key={item.question} className="bg-white p-6">
                <h3 className="font-semibold text-charcoal mb-3">{item.question}</h3>
                {item.answer.map((paragraph, index) => (
                  <p
                    key={index}
                    className={index === 0 ? "text-medium-grey text-sm" : "text-medium-grey text-sm mt-2"}
                  >
                    {typeof paragraph === "string"
                      ? paragraph
                      : paragraph.map((segment, segmentIndex) =>
                          typeof segment === "string" ? (
                            segment
                          ) : (
                            <Link key={segmentIndex} href={segment.href} className="text-primary-blue hover:underline">
                              {segment.text}
                            </Link>
                          ),
                        )}
                  </p>
                ))}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="mx-2 my-12 overflow-hidden rounded-[28px] sm:mx-4 lg:mx-6 lg:rounded-[32px] py-16 bg-primary-blue">
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
