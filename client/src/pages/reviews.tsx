import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { StaticSEO } from "@/components/SEO";
import TestimonialCard from "@/components/ui/testimonial-card";
import { AssessmentButton } from "@/components/funnel/funnel-cta";
import ReviewCards from "@/components/review-cards";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@shared/social-proof";
import type { Testimonial } from "@shared/schema";

export default function ReviewsPage() {
  const { data: testimonials = [], isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  return (
    <div className="min-h-screen">
      <StaticSEO path="/reviews" />
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
      {/* Stories with photos first, then every Google review in full. */}
      <section className="px-2 sm:px-4 lg:px-6">
        <div className="mx-auto max-w-[88rem] rounded-[28px] bg-primary py-16 text-white lg:rounded-[32px] lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.12em] text-[#8FD3F2]">Their stories</p>
            <h2 className="mb-10 max-w-3xl text-3xl font-extrabold lg:text-4xl">
              Where they started, and where they are now
            </h2>
            <ReviewCards />
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow mb-3">Google reviews</p>
              <h2 className="text-3xl font-extrabold text-charcoal lg:text-4xl">Every review, in their words</h2>
            </div>
            <p className="font-semibold text-medium-grey">{GOOGLE_RATING}★ average · {GOOGLE_REVIEW_COUNT} Google reviews</p>
          </div>
          {isLoading ? (
            <p className="text-center text-medium-grey">Loading reviews...</p>
          ) : (
            <div className="columns-1 gap-7 md:columns-2 [&>*]:mb-7 [&>*]:break-inside-avoid">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="mx-2 my-12 overflow-hidden rounded-[28px] sm:mx-4 lg:mx-6 lg:rounded-[32px] bg-primary-blue py-16 text-center text-white">
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
