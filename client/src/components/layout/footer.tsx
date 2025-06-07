import { Link } from "wouter";
import { Dog, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ConsultationForm from "@/components/forms/consultation-form";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/attached_assets/Business logo 1_1749266952529.jpg" 
                alt="Canine Confidence" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-200">
              Building strong bonds between dogs and their humans through balanced, relationship-focused training in Brisbane.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary-blue">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary-blue">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary-blue">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-200 hover:text-white transition-colors">
                  Behaviour Modification
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-200 hover:text-white transition-colors">
                  Walk & Train
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-200 hover:text-white transition-colors">
                  One-on-One Coaching
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-200 hover:text-white transition-colors">
                  Professional Walks
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-200 hover:text-white transition-colors">
                  House Visits
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-200 hover:text-white transition-colors">
                  Training Blog
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-200 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-gray-200 hover:text-white transition-colors text-left">
                      Free Consultation
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <ConsultationForm />
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-blue" />
                <span className="text-gray-200">0409 521 358</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-blue" />
                <span className="text-gray-200">info@canineconfidence.com.au</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-blue" />
                <span className="text-gray-200">Brisbane, QLD</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-200 text-sm">
            © 2024 Canine Confidence. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-gray-200 hover:text-white transition-colors text-sm">
              Privacy Policy
            </button>
            <button className="text-gray-200 hover:text-white transition-colors text-sm">
              Terms of Service
            </button>
            <button className="text-gray-200 hover:text-white transition-colors text-sm">
              Cancellation Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
