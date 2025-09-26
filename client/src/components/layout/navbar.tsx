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
import logoImage from "@assets/canine_confidence_logo_clean_1758887288824.png";

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
        <div className="flex items-center py-3">
          {/* Mobile Layout */}
          <div className="md:hidden flex items-center justify-between w-full">
            <Link href="/" className="flex items-center group" aria-label="Canine Confidence home" data-testid="link-brand">
              <img
                src={logoImage}
                alt="Canine Confidence logo"
                className="block h-12 w-auto drop-shadow-sm transition-[filter] group-hover:drop-shadow-md"
                data-testid="img-logo"
              />
            </Link>
            
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <span className="text-base font-semibold text-charcoal whitespace-nowrap">
                Brisbane Dog Training
              </span>
            </div>
            
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
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
          
          {/* Desktop Layout - Three Column */}
          <div className="hidden md:grid grid-cols-[auto,1fr,auto] items-center w-full">
            {/* Desktop Logo */}
            <Link href="/" className="flex items-center gap-3 lg:gap-4 shrink-0 group" aria-label="Canine Confidence home" data-testid="link-brand">
              <img
                src={logoImage}
                alt="Canine Confidence logo"
                className="block h-14 lg:h-16 w-auto drop-shadow-sm transition-[filter] group-hover:drop-shadow-md"
                data-testid="img-logo"
              />
              <div className="whitespace-nowrap">
                <span className="hidden lg:block text-base lg:text-lg font-semibold text-charcoal leading-tight">
                  Brisbane Dog Training
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 min-w-0">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative md:px-2 lg:px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
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
            <div className="flex items-center space-x-2 shrink-0">
              <ShoppingCart sessionId={getCartSessionId()} />
              
              {/* Consultation - Icon only on md, full text on lg */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:flex lg:hidden text-primary-blue hover:bg-blue-50">
                    <Phone className="w-4 h-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <ConsultationForm />
                </DialogContent>
              </Dialog>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="hidden lg:inline-flex border-primary-blue text-primary-blue hover:bg-blue-50 hover:border-primary-blue">
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
          </div>

        </div>
      </div>
    </nav>
  );
}
