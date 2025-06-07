import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Dog, Phone } from "lucide-react";
import BookingForm from "@/components/forms/booking-form";
import ConsultationForm from "@/components/forms/consultation-form";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ShoppingCart from "@/components/ui/shopping-cart";
import { getCartSessionId } from "@/lib/cart";
import logoImage from "@assets/Business logo 1_1749266952529.jpg";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/packages", label: "Packages" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location === "/";
    }
    return location.startsWith(href);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-teal rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Dog className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-charcoal block leading-none">
                Canine Confidence
              </span>
              <span className="text-sm text-gray-600 block leading-none mt-0.5">
                Brisbane Dog Training
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                  isActive(item.href)
                    ? "text-primary-blue bg-blue-50"
                    : "text-gray-700 hover:text-primary-blue hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <ShoppingCart sessionId={getCartSessionId()} />
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="border-primary-blue text-primary-blue hover:bg-blue-50 hover:border-primary-blue">
                  <Phone className="w-3.5 h-3.5 mr-1.5" />
                  Consultation
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <ConsultationForm />
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="bg-primary-blue hover:bg-blue-600 text-white shadow-sm">
                  Book Now
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <BookingForm />
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`font-medium transition-colors py-2 ${
                      isActive(item.href)
                        ? "text-primary-blue"
                        : "text-charcoal hover:text-primary-blue"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="pt-4 space-y-3">
                  <div className="flex justify-center">
                    <ShoppingCart sessionId={getCartSessionId()} />
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full border-primary-blue text-primary-blue hover:bg-light-blue">
                        <Phone className="w-4 h-4 mr-2" />
                        Free Consultation
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <ConsultationForm />
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full btn-primary">
                        Book Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <BookingForm />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
