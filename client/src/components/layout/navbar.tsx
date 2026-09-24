import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Calendar, Menu } from "lucide-react";
// 320px-wide WebP (30 KB) instead of the 868px PNG (267 KB) — the logo never
// renders wider than ~105 CSS px, and this loads eagerly on every page.
import logoImage from "@assets/canine_confidence_logo_320_opt.webp";
import { ASSESSMENT_URL } from "@/lib/funnel";
import { openBookingUrl } from "@/lib/analytics";
import { ConsultationButton } from "@/components/funnel/funnel-cta";
import { GOOGLE_RATING } from "@shared/social-proof";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/puppy", label: "Puppy" },
    { href: "/behaviour-obedience", label: "Behaviour" },
    { href: "/walking-adventure", label: "Adventure" },
    { href: "/method", label: "Method" },
    { href: "/reviews", label: "Reviews" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ];

  const bookAssessment = () =>
    openBookingUrl(ASSESSMENT_URL, "service", "Initial Canine Success Assessment | Navbar");

  const isActive = (href: string) => {
    if (href === "/") {
      return location === "/";
    }
    return location.startsWith(href);
  };

  return (
    <nav className="bg-cream/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      {/* Credentials bar */}
      <div className="bg-navy text-[#D9DBEF]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 px-4 py-2 text-xs font-semibold sm:px-6 sm:text-sm lg:justify-between lg:px-8">
          <span className="hidden lg:inline">In-home dog training across North Brisbane</span>
          <span className="flex items-center gap-2 sm:gap-4">
            <span>NDTF certified</span>
            <span aria-hidden="true" className="text-[#5C60A0]">|</span>
            <span>Professional &amp; insured</span>
            <span aria-hidden="true" className="text-[#5C60A0]">|</span>
            <span className="text-white">{GOOGLE_RATING}★ on Google</span>
          </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-3">
          {/* Mobile Layout */}
          <div className="lg:hidden flex items-center gap-3 w-full">
            <Link href="/" className="flex items-center shrink-0 group" aria-label="Canine Confidence home" data-testid="link-brand">
              <img
                src={logoImage}
                alt="Canine Confidence logo"
                className="block h-12 w-auto drop-shadow-sm transition-[filter] group-hover:drop-shadow-md"
                data-testid="img-logo"
                width={60}
                height={48}
                loading="eager"
                decoding="async"
              />
            </Link>
            
            {/* Flows in the row rather than absolutely centred: at 360px and
                below the centred version overlapped the logo. */}
            <span className="hidden min-w-0 flex-1 truncate text-center text-sm font-semibold text-charcoal min-[360px]:block sm:text-base">
              Brisbane Dog Training
            </span>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu" className="h-11 w-11 shrink-0 border-[1.5px] border-input bg-transparent text-primary">
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
                    <Button onClick={bookAssessment} className="w-full btn-primary">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Assessment
                    </Button>
                    <ConsultationButton className="btn-secondary w-full" showIcon={false} />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* Desktop Logo */}
            <Link href="/" className="flex items-center shrink-0 group" aria-label="Canine Confidence home" data-testid="link-brand">
              <img
                src={logoImage}
                alt="Canine Confidence logo"
                className="block h-14 lg:h-16 w-auto drop-shadow-sm transition-[filter] group-hover:drop-shadow-md"
                data-testid="img-logo"
                width={80}
                height={64}
                loading="eager"
                decoding="async"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-1 xl:gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-2 py-2 text-sm font-semibold transition-colors duration-200 rounded-lg xl:text-[15px] ${
                    isActive(item.href)
                      ? "text-primary bg-sand"
                      : "text-foreground hover:text-sky-deep"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <ConsultationButton className="btn-secondary hidden h-11 px-4 py-0 text-sm xl:inline-flex" showIcon={false} />
              <Button onClick={bookAssessment} className="btn-primary h-11 px-5 py-0 text-sm">
                Book an Assessment
              </Button>
            </div>
          </div>

        </div>
      </div>
      
    </nav>
  );
}
