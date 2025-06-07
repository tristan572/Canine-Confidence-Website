import { Link } from "wouter";
import { Dog, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ConsultationForm from "@/components/forms/consultation-form";
import logoImage from "@assets/Business logo 1_1749266952529.jpg";

export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">CC</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Canine</div>
                    <div className="text-lg font-semibold text-blue-400">CONFIDENCE</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-white">
              Building strong bonds between dogs and their humans through balanced, relationship-focused training in North Brisbane.
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
                <Link href="/services" className="text-white hover:text-primary-blue transition-colors">
                  Behaviour Modification
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-primary-blue transition-colors">
                  Walk & Train
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-primary-blue transition-colors">
                  One-on-One Coaching
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-primary-blue transition-colors">
                  Professional Walks
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-primary-blue transition-colors">
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
                <Link href="/about" className="text-white hover:text-primary-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white hover:text-primary-blue transition-colors">
                  Training Blog
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white hover:text-primary-blue transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-primary-blue transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-white hover:text-primary-blue transition-colors text-left">
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
                <span className="text-white">0409 521 358</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-blue" />
                <span className="text-white">info@canineconfidence.com.au</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-blue" />
                <span className="text-white">North Brisbane, QLD</span>
              </li>
              <li className="flex items-start space-x-2 mt-3">
                <div className="h-4 w-4 mt-0.5">
                  <div className="h-4 w-4 bg-primary-blue rounded-full flex items-center justify-center">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-white">
                  <div className="font-medium">Business Hours</div>
                  <div className="text-sm mt-1 space-y-1">
                    <div>Mon-Fri: 5:30am - 8pm</div>
                    <div>Saturday: 9am - 5pm</div>
                    <div>Sunday: Closed</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">
            © 2024 Canine Confidence. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-white hover:text-primary-blue transition-colors text-sm">
              Privacy Policy
            </button>
            <button className="text-white hover:text-primary-blue transition-colors text-sm">
              Terms of Service
            </button>
            <button className="text-white hover:text-primary-blue transition-colors text-sm">
              Cancellation Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
