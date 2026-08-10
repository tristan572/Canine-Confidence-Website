import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { SEO } from "@/components/SEO";
import TestimonialCard from "@/components/ui/testimonial-card";
import { AssessmentButton } from "@/components/funnel/funnel-cta";
import type { Testimonial } from "@shared/schema";

export default function ReviewsPage() {
  const { data: testimonials = [], isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  return (
    <div className="min-h-screen">
      <SEO
        title="Dog Training Reviews North Brisbane | Canine Confidence"
        description="Read what North Brisbane dog owners say about working with Canine Confidence and see verified five-star review sources."
        canonical="https://www.canineconfidence.com.au/reviews"
      />
      <section className="hero-gradient py-16 text-center lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-4 flex justify-center gap-1" aria-label="Five stars">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-7 w-7 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h1 className="mb-5 text-4xl font-bold text-charcoal lg:text-5xl">
            Real Dogs. Real Owners. Real Results.
          </h1>
          <p className="mb-6 text-xl text-medium-grey">
            These owners wanted calmer homes, easier walks and a relationship
            with their dog they could actually enjoy. Their words are the best
            proof of what the work can change.
          </p>
          <div className="flex flex-wrap justify-center gap-5 font-semibold text-primary-blue">
            <a href="https://share.google/NJfyc690NWAMVb3LX" target="_blank" rel="noreferrer" className="hover:underline">
              Read Google reviews
            </a>
            <a
              href="https://www.madpaws.com.au/petsitter/boondall-qld/tristan-p-nationally-accredited-dog-trainer-professional-reliable-and-flexible"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Read Mad Paws reviews
            </a>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <p className="text-center text-medium-grey">Loading reviews...</p>
          ) : (
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="bg-primary-blue py-16 text-center text-white">
        <h2 className="mb-3 text-3xl font-bold">Want the kind of change these owners describe?</h2>
        <p className="mx-auto mb-7 max-w-2xl px-4 text-lg text-blue-100">
          Start with an assessment and get a plan built around your dog, your
          challenges and the life you want together.
        </p>
        <AssessmentButton
          location="Reviews final CTA"
          className="bg-white text-primary-blue hover:bg-gray-50"
        />
      </section>
    </div>
  );
}
