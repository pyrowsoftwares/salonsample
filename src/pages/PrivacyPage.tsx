import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { salonConfig } from "../data/salonConfig";

export function PrivacyPage() {
  return (
    <div className="flex flex-col w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F6F2EB]">
      <div className="max-w-4xl mx-auto bg-[#FAF7F2] p-8 sm:p-12 rounded-3xl border border-[#DED3C5] shadow-xs space-y-8 font-sans text-sm text-[#34302D]">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#A87556] hover:text-[#241E1A] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-2 border-b border-[#DED3C5] pb-6">
          <div className="flex items-center gap-2 text-[#A87556]">
            <Shield className="w-5 h-5" />
            <span className="text-xs uppercase tracking-widest font-semibold">
              Draft Legal Notice
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#241E1A]">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#68615C]">
            Last updated: November 2026.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="font-serif text-xl text-[#241E1A] font-medium">
            1. Studio Information & Booking Privacy
          </h2>
          <p className="text-[#68615C] leading-relaxed">
            &ldquo;{salonConfig.name}&rdquo; respects your privacy and is committed to protecting your personal information. When you book appointments or contact our salon lounge, we collect necessary contact information strictly to coordinate your visit, confirm dates, and tailor your salon consultations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl text-[#241E1A] font-medium">
            2. Appointment Requests & WhatsApp Handoff
          </h2>
          <p className="text-[#68615C] leading-relaxed">
            When you submit an appointment request through our booking interface, your input is assembled locally to compose a pre-formatted message for WhatsApp handoff. We do not sell, rent, or trade personal phone numbers or contact details. An appointment request does not guarantee availability until confirmed directly by our salon coordinator.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl text-[#241E1A] font-medium">
            3. Pricing & Service Duration Disclaimers
          </h2>
          <p className="text-[#68615C] leading-relaxed">
            All prices indicated with &ldquo;From ₹...&rdquo; on this website represent sample starting rates and are subject to change based on hair length, density, chemical history, and customized consultation requirements. Applicable statutory taxes (GST) and final bills are confirmed prior to service execution.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl text-[#241E1A] font-medium">
            4. No Tracking Cookies
          </h2>
          <p className="text-[#68615C] leading-relaxed">
            This preview website does not use third-party behavioral advertising trackers, invasive cookies, or analytics scripts by default. If tracking is integrated at a later stage upon client request, compliant consent banners and opt-outs will be provided.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl text-[#241E1A] font-medium">
            5. Contact Information
          </h2>
          <p className="text-[#68615C] leading-relaxed">
            For privacy inquiries or to update your salon profile details, please contact: <br />
            <strong>Aurel Studio Administration</strong> <br />
            Email: {salonConfig.email} <br />
            Location: {salonConfig.locationArea}
          </p>
        </section>
      </div>
    </div>
  );
}
