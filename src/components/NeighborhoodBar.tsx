import React from "react";
import { Link } from "react-router-dom";
import {
  Car,
  Coffee,
  Sparkles,
  Shield,
  Clock,
  MapPin,
  ArrowUpRight,
  PhoneCall,
  MessageCircle,
} from "lucide-react";
import { salonConfig } from "@/data/salonConfig";

export function NeighborhoodBar() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F2EB]">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#DED3C5] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#A87556]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Neighborhood Flagship • Anna Nagar</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#241E1A] mt-1">
              Thoughtfully Located in Central Chennai
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#68615C] font-sans max-w-md">
            Near Anna Nagar Roundtana and 2nd Avenue. Designed with discreet luxury, private suites, and seamless valet arrivals.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#DED3C5] space-y-3 shadow-2xs hover:border-[#A87556] transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#EAE2D8] flex items-center justify-center text-[#A87556]">
              <Car className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-[#241E1A] font-medium">
              Complimentary Valet
            </h3>
            <p className="text-xs text-[#68615C] font-sans leading-relaxed">
              Arrive effortlessly on busy 2nd Avenue. Our dedicated valet attendants take care of parking the moment you pull up.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#DED3C5] space-y-3 shadow-2xs hover:border-[#A87556] transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#EAE2D8] flex items-center justify-center text-[#A87556]">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-[#241E1A] font-medium">
              Private Styling Suites
            </h3>
            <p className="text-xs text-[#68615C] font-sans leading-relaxed">
              Enclosed private salons available upon request for bridal prep, hijab privacy, or quiet work calls while your color sets.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#DED3C5] space-y-3 shadow-2xs hover:border-[#A87556] transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#EAE2D8] flex items-center justify-center text-[#A87556]">
              <Coffee className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-[#241E1A] font-medium">
              Artisanal Refreshments
            </h3>
            <p className="text-xs text-[#68615C] font-sans leading-relaxed">
              Complimentary estate-sourced South Indian filter coffee, cold pressed ginger-lemon coolers, and loose-leaf chamomile tea.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#DED3C5] space-y-3 shadow-2xs hover:border-[#A87556] transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#EAE2D8] flex items-center justify-center text-[#A87556]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-[#241E1A] font-medium">
              Open Daily Until 8:30 PM
            </h3>
            <p className="text-xs text-[#68615C] font-sans leading-relaxed">
              Early morning bridal sessions (from 6:00 AM on request) and after-work blowout appointments for busy professionals.
            </p>
          </div>
        </div>

        {/* Quick Contact & Map Actions Strip */}
        <div className="bg-[#241E1A] text-[#F6F2EB] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-serif text-xl sm:text-2xl font-light">
              Visiting us today?
            </p>
            <p className="text-xs sm:text-sm text-[#DED3C5]/80 font-sans">
              3rd Avenue, Near Roundtana, Anna Nagar • Direct WhatsApp concierge available
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${salonConfig.whatsappNumber}?text=${encodeURIComponent(
                "Hello Aurel Studio! I would like to inquire about appointments at your Anna Nagar lounge."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#20ba59] transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Concierge</span>
            </a>
            <a
              href={salonConfig.address.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F6F2EB] text-[#241E1A] text-xs uppercase tracking-wider font-semibold hover:bg-[#DED3C5] transition-all"
            >
              <MapPin className="w-4 h-4 text-[#A87556]" />
              <span>Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
