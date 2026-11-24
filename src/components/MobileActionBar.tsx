import React from "react";
import { Link } from "react-router-dom";
import { Calendar, MessageSquare, Phone } from "lucide-react";
import { salonConfig } from "../data/salonConfig";

export function MobileActionBar() {
  const whatsappUrl = `https://wa.me/${salonConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hello Aurel Studio! I would like to book an appointment at your Anna Nagar lounge."
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#F6F2EB]/95 backdrop-blur-md border-t border-[#DED3C5] p-2.5 px-4 pb-[max(10px,env(safe-area-inset-bottom))] md:hidden shadow-[0_-4px_16px_rgba(36,30,26,0.08)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Action */}
        <a
          href={salonConfig.isPhoneConfigured ? `tel:${salonConfig.phone}` : "/contact"}
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-[#FAF7F2] border border-[#DED3C5] text-[#241E1A] text-center active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#A87556]" />
          <span className="text-[10px] uppercase tracking-wider font-semibold mt-1">
            Call
          </span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-[#FAF7F2] border border-[#DED3C5] text-[#241E1A] text-center active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 text-[#25D366]" />
          <span className="text-[10px] uppercase tracking-wider font-semibold mt-1">
            WhatsApp
          </span>
        </a>

        {/* Book Action */}
        <Link
          to="/book"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-[#241E1A] text-[#F6F2EB] text-center active:scale-95 transition-transform shadow-sm"
        >
          <Calendar className="w-4 h-4 text-[#A87556]" />
          <span className="text-[10px] uppercase tracking-wider font-semibold mt-1">
            Book
          </span>
        </Link>
      </div>
    </div>
  );
}
