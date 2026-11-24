import React from "react";
import { Link } from "react-router-dom";
import { salonConfig } from "@/data/salonConfig";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#241E1A] text-[#F6F2EB] pt-16 pb-24 md:pb-12 border-t border-[#34302D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#34302D]">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-3xl tracking-[0.08em] font-medium text-[#F6F2EB]">
                {salonConfig.wordmarkPrimary}
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#A87556] font-semibold -mt-1">
                {salonConfig.wordmarkSecondary}
              </span>
            </div>
            <p className="text-xs uppercase tracking-widest text-[#A87556] font-semibold">
              {salonConfig.tagline}
            </p>
            <p className="text-sm text-[#DED3C5]/80 leading-relaxed font-sans">
              Modern beauty, thoughtfully personal. A consultation-led salon experience in Anna Nagar, Chennai shaped around your bone structure, hair texture, and everyday lifestyle.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded bg-[#34302D] text-[#DED3C5] font-sans">
                <ShieldCheck className="w-3.5 h-3.5 text-[#A87556]" />
                {salonConfig.salonType}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg tracking-wider text-[#F6F2EB] font-medium">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <Link to="/" className="text-[#DED3C5]/80 hover:text-[#A87556] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#DED3C5]/80 hover:text-[#A87556] transition-colors">
                  Our Philosophy & Story
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#DED3C5]/80 hover:text-[#A87556] transition-colors">
                  Services Menu & Starting Rates
                </Link>
              </li>
              {salonConfig.features.bridalEnabled && (
                <li>
                  <Link to="/bridal" className="text-[#DED3C5]/80 hover:text-[#A87556] transition-colors">
                    Bridal & Occasion Artistry
                  </Link>
                </li>
              )}
              <li>
                <Link to="/gallery" className="text-[#DED3C5]/80 hover:text-[#A87556] transition-colors">
                  Curated Gallery & Looks
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-[#DED3C5]/80 hover:text-[#A87556] transition-colors">
                  Request an Appointment
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-[#DED3C5]/80 hover:text-[#A87556] transition-colors">
                  Privacy Policy & Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg tracking-wider text-[#F6F2EB] font-medium">
              Studio & Hours
            </h3>
            <div className="space-y-3 text-sm text-[#DED3C5]/80 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A87556] shrink-0 mt-1" />
                <div>
                  <p>{salonConfig.address.line1}</p>
                  <p>{salonConfig.address.line2}, {salonConfig.address.city} – {salonConfig.address.pincode}</p>
                  <p className="text-xs text-[#A87556] mt-0.5">{salonConfig.address.landmarks}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-[#34302D]">
                <Clock className="w-4 h-4 text-[#A87556] shrink-0 mt-1" />
                <div className="text-xs space-y-1">
                  <p>{salonConfig.openingHours.weekday}</p>
                  <p>{salonConfig.openingHours.weekend}</p>
                  <p className="text-[11px] text-[#DED3C5]/60">{salonConfig.openingHours.note}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Connect & Booking */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg tracking-wider text-[#F6F2EB] font-medium">
              Appointments
            </h3>
            <p className="text-sm text-[#DED3C5]/80 font-sans leading-relaxed">
              We welcome appointments by prior request to ensure unhurried consultations and tailored attention.
            </p>
            <div className="space-y-2 pt-1 font-sans text-sm">
              <div className="flex items-center gap-2 text-xs text-[#DED3C5]/70">
                <Mail className="w-3.5 h-3.5 text-[#A87556]" />
                <span>{salonConfig.email}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#DED3C5]/70">
                <Phone className="w-3.5 h-3.5 text-[#A87556]" />
                <span>{salonConfig.phone}</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/book"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#A87556] text-[#F6F2EB] text-xs uppercase tracking-widest font-medium hover:bg-[#BA8B6D] transition-colors"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Demo Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#DED3C5]/60 font-sans">
          <p>© {new Date().getFullYear()} {salonConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy" className="hover:text-[#F6F2EB] underline underline-offset-4">
              Privacy & Legal
            </Link>
            <a
              href={salonConfig.address.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F6F2EB] underline underline-offset-4"
            >
              Directions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
