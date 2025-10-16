import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@shared/schema";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-6 h-6 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Card className="bg-gradient-to-br from-white to-blue-50/30 border-2 border-primary-blue/10 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] duration-300">
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-1">{renderStars(testimonial.rating)}</div>
          <Quote className="w-10 h-10 text-primary-blue/20" />
        </div>
        
        <blockquote className="text-gray-800 mb-6 text-lg leading-relaxed">
          "{testimonial.reviewText}"
        </blockquote>
        
        <div className="border-t-2 border-primary-blue/10 pt-5">
          <div className="flex justify-between items-start">
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