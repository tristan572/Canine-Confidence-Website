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

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
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
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Dog className="text-primary-blue text-2xl" />
            <span className="text-2xl font-bold text-charcoal">Canine Confidence</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-primary-blue"
                    : "text-charcoal hover:text-primary-blue"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ShoppingCart sessionId={getCartSessionId()} />
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-primary-blue text-primary-blue hover:bg-light-blue">
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
                <Button className="btn-primary">
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
