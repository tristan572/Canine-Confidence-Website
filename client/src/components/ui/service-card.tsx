import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, DollarSign, Calendar, type LucideIcon } from "lucide-react";
import BookingWidget from "@/components/ui/booking-widget";
import type { Service } from "@shared/schema";

interface ServiceCardProps {
  service: Service;
  icon: LucideIcon;
}

export default function ServiceCard({ service, icon: Icon }: ServiceCardProps) {
  const [showBookingWidget, setShowBookingWidget] = useState(false);

  return (
    <>
      <Card className="bg-light-grey card-hover border border-gray-100">
        <CardContent className="p-8">
          <div className="bg-primary-blue p-3 rounded-lg w-fit mb-6">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-charcoal mb-4">{service.name}</h3>
          <p className="text-medium-grey mb-6">{service.description}</p>
          <div className="space-y-2 mb-6">
            <div className="flex items-center text-sm text-medium-grey">
              <Clock className="w-4 h-4 mr-2" />
              <span>{service.duration}</span>
            </div>
            <div className="flex items-center text-sm text-medium-grey">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{service.location}</span>
            </div>
            <div className="flex items-center text-sm text-charcoal font-semibold">
              <DollarSign className="w-4 h-4 mr-2" />
              <span>{service.price}</span>
            </div>
          </div>
          <Button 
            onClick={() => setShowBookingWidget(true)}
            className="w-full btn-primary"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Book Session
          </Button>
        </CardContent>
      </Card>

      <BookingWidget 
        isOpen={showBookingWidget} 
        onClose={() => setShowBookingWidget(false)} 
      />
    </>
  );
}
