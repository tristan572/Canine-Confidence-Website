import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Clock, MapPin, DollarSign, Calendar, type LucideIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { Service } from "@shared/schema";

interface ServiceCardProps {
  service: Service;
  icon: LucideIcon;
}

export default function ServiceCard({ service, icon: Icon }: ServiceCardProps) {
  const [showDialog, setShowDialog] = useState(false);

  const getBookingUrl = () => {
    const serviceMap: Record<string, number> = {
      "Initial Canine Success Assessment": 16,
      "One-on-One Private Coaching": 7,
      "Virtual Coaching and Support": 10,
      "Walk and Train": 6,
      "In-Home Train and Play": 8,
      "Adventure Walk and Training": 5,
    };
    
    const serviceId = serviceMap[service.name];
    return serviceId 
      ? `https://canineconfidence.simplybook.net/v2/#book/service/${serviceId}`
      : "https://canineconfidence.simplybook.net/v2/";
  };

  const handleContinue = () => {
    setShowDialog(false);
    window.open(getBookingUrl(), '_blank');
  };

  return (
    <>
      <Card className="bg-light-grey card-hover border border-gray-100 overflow-hidden">
        {service.imageUrl && (
          <div className="h-48 w-full">
            <img 
              src={service.imageUrl} 
              alt={`${service.name} training service`}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <CardContent className="p-8">
          <div className="bg-primary-blue p-3 rounded-lg w-fit mb-6">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-charcoal mb-4">{service.name}</h3>
          <div className="text-medium-grey mb-6 prose prose-sm max-w-none">
            <ReactMarkdown>{service.description}</ReactMarkdown>
          </div>
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
            onClick={() => setShowDialog(true)}
            className="w-full btn-primary"
            data-testid={`button-book-${service.id}`}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Book Session
          </Button>
        </CardContent>
      </Card>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-md w-full p-6">
          <DialogTitle className="text-xl font-bold text-gray-800 mb-2">
            Secure Booking System
          </DialogTitle>
          <DialogDescription className="text-gray-600 mb-6">
            You'll access our secure booking platform where you can select your training service, choose your preferred time, and complete your booking with integrated payment processing.
          </DialogDescription>
          
          <div className="space-y-4">
            <Button 
              onClick={handleContinue}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium"
            >
              Continue to Secure Booking
            </Button>
            
            <Button 
              onClick={() => setShowDialog(false)}
              variant="outline"
              className="w-full py-3"
            >
              Cancel
            </Button>
          </div>
          
          <div className="mt-4 text-xs text-gray-500 text-center">
            <p>🔒 Secure SSL encrypted booking system</p>
            <p>📅 Real-time availability • 💳 Secure payments</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
