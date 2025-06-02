import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Clock, MapPin, DollarSign, type LucideIcon } from "lucide-react";
import BookingForm from "@/components/forms/booking-form";
import type { Service } from "@shared/schema";

interface ServiceCardProps {
  service: Service;
  icon: LucideIcon;
}

export default function ServiceCard({ service, icon: Icon }: ServiceCardProps) {
  return (
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
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full btn-primary">
              Book Session
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <BookingForm preselectedService={service.id} />
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
