import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { salonConfig } from "@/data/salonConfig";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    ...(salonConfig.features.bridalEnabled
      ? [{ name: "Bridal", href: "/bridal" }]
      : []),
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F6F2EB]/95 backdrop-blur-md shadow-xs border-b border-[#DED3C5] py-3.5"
            : "bg-[#F6F2EB] border-b border-[#DED3C5]/80 py-4 sm:py-4.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Wordmark Logo */}
            <Link
              to="/"
              className="group flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A87556] rounded-sm"
              aria-label="Aurel Studio Home"
            >
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.08em] font-medium text-[#241E1A] group-hover:text-[#A87556] transition-colors">
                {salonConfig.wordmarkPrimary}
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#A87556] -mt-1 font-semibold">
                {salonConfig.wordmarkSecondary}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`font-sans text-sm tracking-wider uppercase transition-colors relative py-1 ${
                      isActive
                        ? "text-[#241E1A] font-semibold"
                        : "text-[#34302D]/80 hover:text-[#241E1A]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#A87556] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#241E1A] text-[#F6F2EB] text-xs uppercase tracking-widest font-medium hover:bg-[#A87556] transition-all duration-300 shadow-sm hover:shadow"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                className="p-2 rounded-md text-[#241E1A] hover:text-[#A87556] hover:bg-[#DED3C5]/30 focus:outline-none focus:ring-2 focus:ring-[#A87556]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#241E1A]/60 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#F6F2EB] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#DED3C5]">
                <div className="flex flex-col">
                  <span className="font-serif text-2xl tracking-[0.08em] font-medium text-[#241E1A]">
                    {salonConfig.wordmarkPrimary}
                  </span>
                  <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#A87556] -mt-1 font-semibold">
                    {salonConfig.wordmarkSecondary}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-[#241E1A] hover:bg-[#DED3C5]/40"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col space-y-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-lg font-serif tracking-wide py-2 px-3 rounded transition-colors flex items-center justify-between ${
                        isActive
                          ? "bg-[#DED3C5]/40 text-[#241E1A] font-semibold"
                          : "text-[#34302D] hover:text-[#A87556] hover:bg-[#FAF7F2]"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <Sparkles className="w-4 h-4 text-[#A87556]" />}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#DED3C5] space-y-4">
              <Link
                to="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#241E1A] text-[#F6F2EB] text-sm uppercase tracking-widest font-medium hover:bg-[#A87556] transition-colors text-center"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="text-center text-xs text-[#68615C] font-sans">
                {salonConfig.locationArea} • {salonConfig.salonType}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
