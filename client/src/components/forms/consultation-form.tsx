import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertConsultationSchema } from "@shared/schema";

export default function ConsultationForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm({
    resolver: zodResolver(insertConsultationSchema),
    defaultValues: {
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      preferredCallTime: "",
      dogInfo: "",
      concerns: "",
    },
  });

  const consultationMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/consultations", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Consultation request submitted!",
        description: "We'll call you within 24 hours to schedule your free consultation.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/consultations"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit consultation request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: any) => {
    consultationMutation.mutate(data);
  };

  return (
    <div className="max-w-md mx-auto">
      <DialogHeader className="mb-6">
        <DialogTitle className="text-2xl font-bold text-charcoal">Request Free Consultation</DialogTitle>
        <DialogDescription className="text-medium-grey">
          Get personalized advice in a quick 15-minute phone consultation at no cost.
        </DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="0411 123 456" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferredCallTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Call Time</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                    <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                    <SelectItem value="weekend">Weekend</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dogInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tell us about your dog</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Breed, age, size, personality..."
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
            name="concerns"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What would you like to discuss?</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Describe your concerns or training goals..."
                    className="resize-none"
                    rows={3}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={consultationMutation.isPending}
            className="w-full btn-primary"
          >
            {consultationMutation.isPending ? "Submitting..." : "Request Free Call"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
