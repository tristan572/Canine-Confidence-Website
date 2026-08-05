import { useState } from "react";
import { Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ConsultationForm from "@/components/forms/consultation-form";
import { openBookingUrl } from "@/lib/analytics";
import { ASSESSMENT_URL } from "@/lib/funnel";

interface AssessmentButtonProps {
  location: string;
  className?: string;
  label?: string;
  showIcon?: boolean;
}

export function AssessmentButton({
  location,
  className = "",
  label = "Book an Assessment",
  showIcon = true,
}: AssessmentButtonProps) {
  return (
    <Button
      className={`btn-primary ${className}`}
      onClick={() =>
        openBookingUrl(
          ASSESSMENT_URL,
          "service",
          `Initial Canine Success Assessment | ${location}`,
        )
      }
    >
      {showIcon && <Calendar className="mr-2 h-5 w-5" />}
      {label}
    </Button>
  );
}

export function ConsultationButton({
  className = "",
  label = "Free 15-min Consult",
  showIcon = true,
}: {
  className?: string;
  label?: string;
  showIcon?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className={className}>
          {showIcon && <Phone className="mr-2 h-5 w-5" />}
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-md overflow-y-auto">
        <DialogTitle>Free Phone Consultation</DialogTitle>
        <DialogDescription>
          Request a free 15-minute call to talk through what is happening with
          your dog and whether I can help.
        </DialogDescription>
        <ConsultationForm />
      </DialogContent>
    </Dialog>
  );
}
