import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import BookingWidget from "@/components/ui/booking-widget";
import { Calendar, Clock, MapPin } from "lucide-react";

interface BookingFormProps {
  preselectedService?: number;
}

export default function BookingForm({ preselectedService }: BookingFormProps) {
  const [showBookingWidget, setShowBookingWidget] = useState(false);

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-2xl font-bold text-charcoal">Book a Training Session</DialogTitle>
          <DialogDescription className="text-medium-grey">
            Choose your preferred service and book directly through our secure booking system.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid gap-4">
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
              <Calendar className="h-5 w-5 text-primary-blue" />
              <div>
                <h3 className="font-semibold text-charcoal">Easy Online Booking</h3>
                <p className="text-sm text-medium-grey">Select your preferred time and pay securely online</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
              <Clock className="h-5 w-5 text-primary-blue" />
              <div>
                <h3 className="font-semibold text-charcoal">Flexible Scheduling</h3>
                <p className="text-sm text-medium-grey">Choose from available times that work for you</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
              <MapPin className="h-5 w-5 text-primary-blue" />
              <div>
                <h3 className="font-semibold text-charcoal">Your Location or Ours</h3>
                <p className="text-sm text-medium-grey">In-home visits or meet at our training locations</p>
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <Button 
              onClick={() => setShowBookingWidget(true)}
              className="btn-primary w-full py-6 text-lg"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Your Session Now
            </Button>
          </div>

          <div className="text-center text-sm text-medium-grey">
            <p>Questions about which service is right for you?</p>
            <p>Call us at <a href="tel:0409521358" className="text-primary-blue hover:underline">0409 521 358</a></p>
          </div>
        </div>
      </div>

      <BookingWidget 
        isOpen={showBookingWidget} 
        onClose={() => setShowBookingWidget(false)} 
      />
    </>
  );
}
