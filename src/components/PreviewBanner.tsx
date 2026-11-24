"use client";

import React, { useState } from "react";
import { Info, X } from "lucide-react";
import { salonConfig } from "@/data/salonConfig";

export function PreviewBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || !salonConfig.features.previewNoticeBanner) {
    return null;
  }

  return (
    <aside
      aria-label="Demo Preview Notice"
      className="bg-[#241E1A] text-[#FAF7F2] text-xs py-2 px-4 border-b border-[#34302D] relative z-50 transition-all font-sans"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 font-semibold text-[#A87556] uppercase tracking-wider text-[11px] shrink-0">
            <Info className="w-3.5 h-3.5" />
            Design Preview Mode:
          </span>
          <span className="text-[#DED3C5]/90 hidden sm:inline">
            Aurel Studio is a demonstration identity for client review. Contact numbers, WhatsApp channel, and final service pricing will be linked before production launch.
          </span>
          <span className="text-[#DED3C5]/90 sm:hidden">
            Design preview mode. Pricing and contact details are illustrative.
          </span>
        </div>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="text-[#DED3C5]/60 hover:text-[#FAF7F2] p-1 rounded focus:outline-none"
          aria-label="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
