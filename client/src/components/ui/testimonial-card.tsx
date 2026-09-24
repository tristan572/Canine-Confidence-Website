import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@shared/schema";

interface TestimonialCardProps {
  testimonial: Testimonial;
  excerpt?: string;
}

export default function TestimonialCard({ testimonial, excerpt }: TestimonialCardProps) {
  const validExcerpt = excerpt && testimonial.reviewText.includes(excerpt) && excerpt !== testimonial.reviewText ? excerpt : undefined;
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        aria-hidden="true"
        className={`w-5 h-5 ${
          i < rating ? "fill-sun text-sun" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Card className="h-full rounded-2xl border border-border bg-white shadow-sm">
      <CardContent className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-1" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>{renderStars(testimonial.rating)}</div>
          <Quote aria-hidden="true" className="w-9 h-9 text-sky-brand/30" />
        </div>
        
        <blockquote className="mb-6 font-quote text-xl italic leading-relaxed text-foreground sm:text-2xl">
          “{validExcerpt ?? testimonial.reviewText}”
        </blockquote>
        
        {validExcerpt && (
          <details className="mb-6">
            <summary className="min-h-11 cursor-pointer py-2 font-semibold text-primary-blue underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-blue">
              Read full review<span className="sr-only"> from {testimonial.clientName}</span>
            </summary>
            <blockquote className="mt-3 whitespace-pre-line leading-relaxed text-gray-800">“{testimonial.reviewText}”</blockquote>
          </details>
        )}
        <div className="border-t border-border pt-5">
          <div className="flex flex-wrap justify-between items-start gap-3">
            <div>
              <div className="font-bold text-charcoal text-lg">
                {testimonial.clientName}
              </div>
              {testimonial.dogName && (
                <div className="text-sm text-primary-blue font-medium mt-1">
                  Owner of {testimonial.dogName}
                </div>
              )}
            </div>
            <div className="text-right text-sm text-gray-600">
              {testimonial.service && (
                <div className="font-semibold text-charcoal">{testimonial.service}</div>
              )}
              {testimonial.location && <div className="mt-1">{testimonial.location}</div>}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
