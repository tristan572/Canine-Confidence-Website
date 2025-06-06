import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Phone, Mail, User } from "lucide-react";

interface BookingWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  { id: 1, name: "Initial Assessment", price: "$180", duration: "90 min" },
  { id: 2, name: "Behaviour Modification", price: "$140", duration: "60 min" },
  { id: 3, name: "One-on-One Coaching", price: "$70", duration: "30 min" },
  { id: 4, name: "In-Home Obedience", price: "$140", duration: "60 min" },
  { id: 5, name: "Virtual Consultation", price: "$120", duration: "60 min" }
];

const timeSlots = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", 
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

export default function BookingWidget({ isOpen, onClose }: BookingWidgetProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    dogName: "",
    concerns: ""
  });

  const handleSubmit = () => {
    // Redirect to SimplyBook.me with pre-filled data
    const params = new URLSearchParams({
      service: formData.service,
      date: formData.date,
      time: formData.time,
      name: formData.name,
      email: formData.email,
      phone: formData.phone
    });
    
    window.open(`https://canineconfidence.simplybook.net?${params}`, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden relative shadow-2xl">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-charcoal">Book Your Training Session</h2>
          <button
            onClick={onClose}
            className="text-medium-grey hover:text-charcoal text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close booking widget"
          >
            ×
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Choose Your Service</h3>
                <p className="text-medium-grey">Select the training service that best fits your needs</p>
              </div>
              
              <div className="grid gap-4">
                {services.map((service) => (
                  <Card 
                    key={service.id}
                    className={`cursor-pointer transition-all ${
                      formData.service === service.name 
                        ? 'ring-2 ring-primary-blue bg-blue-50' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setFormData({...formData, service: service.name})}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-charcoal">{service.name}</h4>
                          <div className="flex items-center gap-4 text-sm text-medium-grey mt-1">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {service.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="text-primary-blue font-semibold">{service.price}</span>
                            </span>
                          </div>
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          formData.service === service.name 
                            ? 'bg-primary-blue border-primary-blue' 
                            : 'border-gray-300'
                        }`}></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Button 
                onClick={() => setStep(2)} 
                disabled={!formData.service}
                className="w-full btn-primary py-3"
              >
                Continue to Date & Time
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Select Date & Time</h3>
                <p className="text-medium-grey">Choose your preferred appointment slot</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="date" className="text-charcoal font-medium">Preferred Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    min={new Date().toISOString().split('T')[0]}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="time" className="text-charcoal font-medium">Preferred Time</Label>
                  <Select value={formData.time} onValueChange={(value) => setFormData({...formData, time: value})}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>{time}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Back
                </Button>
                <Button 
                  onClick={() => setStep(3)} 
                  disabled={!formData.date || !formData.time}
                  className="flex-1 btn-primary"
                >
                  Continue to Contact Info
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Contact Information</h3>
                <p className="text-medium-grey">We'll use this to confirm your appointment</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-charcoal font-medium">Your Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-charcoal font-medium">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your.email@example.com"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-charcoal font-medium">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="0409 521 358"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="dogName" className="text-charcoal font-medium">Dog's Name</Label>
                  <Input
                    id="dogName"
                    value={formData.dogName}
                    onChange={(e) => setFormData({...formData, dogName: e.target.value})}
                    placeholder="Enter your dog's name"
                    className="mt-2"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="concerns" className="text-charcoal font-medium">Training Goals or Concerns</Label>
                <Textarea
                  id="concerns"
                  value={formData.concerns}
                  onChange={(e) => setFormData({...formData, concerns: e.target.value})}
                  placeholder="Briefly describe what you'd like to work on with your dog..."
                  rows={3}
                  className="mt-2"
                />
              </div>
              
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                  Back
                </Button>
                <Button 
                  onClick={handleSubmit}
                  disabled={!formData.name || !formData.email || !formData.phone}
                  className="flex-1 btn-primary"
                >
                  Complete Booking
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}