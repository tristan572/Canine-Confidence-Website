import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ConsultationForm from "@/components/forms/consultation-form";
import logoImage from "@assets/canine_confidence_logo_clean_1758887288824.png";
import { serviceAreas } from "@/config/locations";

export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-white rounded-lg px-3 py-2 inline-flex">
                <img
                  src={logoImage}
                  alt="Canine Confidence logo"
                  className="h-10 w-auto"
                />
              </div>
            </div>
            <p className="text-white">
              Calmer homes. Stronger bonds. Dogs that are fulfilled and thriving.
            </p>
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Follow Me</h4>
              <div className="flex space-x-3">
                <a 
                  href="https://www.facebook.com/p/Canine-Confidence-61571910674491/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit my Facebook page"
                  data-testid="link-facebook"
                  className="bg-primary-blue hover:bg-blue-700 p-3 rounded-lg transition-colors"
                >
                  <Facebook className="h-6 w-6 text-white" />
                </a>
                <a 
                  href="https://www.instagram.com/canine_confidence" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit my Instagram page"
                  data-testid="link-instagram"
                  className="bg-primary-blue hover:bg-blue-700 p-3 rounded-lg transition-colors"
                >
                  <Instagram className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) =>
                area.isLive ? (
                  <li key={area.slug}>
                    <Link
                      href={area.slug}
                      className="text-white hover:text-primary-blue transition-colors"
                    >
                      {area.name}
                    </Link>
                  </li>
                ) : (
                  <li key={area.slug}>
                    <span className="text-gray-400" title="Page coming soon">
                      {area.name}
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-white hover:text-primary-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-white hover:text-primary-blue transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-primary-blue transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white hover:text-primary-blue transition-colors">
                  Training Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-primary-blue transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white hover:text-primary-blue transition-colors">
                  FAQ
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
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-primary-blue mt-0.5" />
                <div className="text-white">
                  <div>0409521358</div>
                  <div className="text-xs text-gray-300">Phone hours: Mon-Sat, 8am - 8pm</div>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-blue" />
                <span className="text-white">info@canineconfidence.com.au</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-blue" />
                <span className="text-white">44 Leona St, Boondall, QLD</span>
              </li>
              <li className="flex items-start space-x-2 mt-3">
                <div className="h-4 w-4 mt-0.5">
                  <div className="h-4 w-4 bg-primary-blue rounded-full flex items-center justify-center">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-white">
                  <div className="font-medium">Training Hours</div>
                  <div className="text-sm mt-1 space-y-1">
                    <div>Mon-Fri: 5:30am - 8pm</div>
                    <div>Saturday: 7am - 5pm</div>
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
            © 2026 Canine Confidence. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-white hover:text-primary-blue transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white hover:text-primary-blue transition-colors text-sm">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
