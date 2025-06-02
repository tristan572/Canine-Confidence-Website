import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertBookingSchema } from "@shared/schema";
import type { Service } from "@shared/schema";

interface BookingFormProps {
  preselectedService?: number;
}

export default function BookingForm({ preselectedService }: BookingFormProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [step, setStep] = useState(1);

  const { data: services } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  const form = useForm({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      serviceId: preselectedService || 0,
      preferredDate: "",
      preferredTime: "",
      dogName: "",
      dogBreed: "",
      dogAge: "",
      dogWeight: "",
      behaviorConcerns: "",
      previousTraining: "",
      veterinaryInfo: "",
      emergencyContact: "",
      agreeToTerms: false,
    },
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/bookings", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Booking submitted successfully!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit booking. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: any) => {
    bookingMutation.mutate(data);
  };

  const nextStep = () => {
    if (step === 1) {
      // Validate basic info before proceeding
      const basicFields = ["clientName", "clientEmail", "serviceId"];
      const isValid = basicFields.every(field => !form.formState.errors[field]);
      if (isValid) {
        setStep(2);
      } else {
        form.trigger(basicFields);
      }
    } else if (step === 2) {
      // Validate dog info before proceeding
      const dogFields = ["dogName"];
      const isValid = dogFields.every(field => !form.formState.errors[field]);
      if (isValid) {
        setStep(3);
      } else {
        form.trigger(dogFields);
      }
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <DialogHeader className="mb-6">
        <DialogTitle className="text-2xl font-bold text-charcoal">Book a Training Session</DialogTitle>
        <DialogDescription className="text-medium-grey">
          Complete this form to book your training session. We'll contact you within 24 hours to confirm.
        </DialogDescription>
        <div className="flex items-center space-x-2 mt-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded ${
                i <= step ? "bg-primary-blue" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-medium-grey">
          Step {step} of 3: {step === 1 ? "Contact Info" : step === 2 ? "Dog Information" : "Schedule & Confirm"}
        </p>
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="clientName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="clientEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="clientPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="0411 123 456" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="serviceId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Type *</FormLabel>
                    <Select
                      value={field.value ? field.value.toString() : ""}
                      onValueChange={(value) => field.onChange(parseInt(value))}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {services?.map((service) => (
                          <SelectItem key={service.id} value={service.id.toString()}>
                            {service.name} - {service.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="dogName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dog's Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your dog's name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="dogBreed"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Breed</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Golden Retriever" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dogAge"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 2 years" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="dogWeight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Weight (approximate)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 25kg" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="behaviorConcerns"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Behavior Concerns or Goals</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe what you'd like to work on (e.g. pulling on leash, jumping, recall, etc.)"
                        className="resize-none"
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="previousTraining"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Previous Training Experience</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about any previous training your dog has had"
                        className="resize-none"
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="preferredDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="preferredTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Time</FormLabel>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                          <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="veterinaryInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Veterinary Information</FormLabel>
                    <FormControl>
                      <Input placeholder="Vet clinic name and any relevant medical info" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="emergencyContact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Emergency Contact</FormLabel>
                    <FormControl>
                      <Input placeholder="Name and phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="agreeToTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm">
                        I agree to the terms and conditions and consent to being contacted about training services. *
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>
          )}

          <div className="flex justify-between pt-6">
            {step > 1 && (
              <Button type="button" variant="outline" onClick={prevStep}>
                Previous
              </Button>
            )}
            
            {step < 3 ? (
              <Button type="button" onClick={nextStep} className="ml-auto">
                Next
              </Button>
            ) : (
              <Button 
                type="submit" 
                disabled={bookingMutation.isPending}
                className="ml-auto btn-primary"
              >
                {bookingMutation.isPending ? "Submitting..." : "Submit Booking"}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
