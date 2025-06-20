import { Star } from "lucide-react";
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
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="flex">{renderStars(testimonial.rating)}</div>
          <span className="ml-2 text-sm text-gray-600">
            ({testimonial.rating}/5)
          </span>
        </div>
        
        <blockquote className="text-gray-700 mb-4 italic">
          "{testimonial.reviewText}"
        </blockquote>
        
        <div className="border-t pt-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-semibold text-charcoal">
                {testimonial.clientName}
              </div>
              {testimonial.dogName && (
                <div className="text-sm text-gray-600">
                  Owner of {testimonial.dogName}
                </div>
              )}
            </div>
            <div className="text-right text-sm text-gray-500">
              {testimonial.service && (
                <div className="font-medium">{testimonial.service}</div>
              )}
              {testimonial.location && <div>{testimonial.location}</div>}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}