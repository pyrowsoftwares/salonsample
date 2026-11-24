import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Calendar as CalendarIcon,
  CheckCircle2,
  Copy,
  Check,
  MessageCircle,
  AlertCircle,
} from "lucide-react";
import { getAllServices } from "@/data/services";
import { salonConfig } from "@/data/salonConfig";

export function BookPage() {
  const [searchParams] = useSearchParams();
  const initialServiceSlug = searchParams.get("service") || "";

  const services = getAllServices();

  const [selectedService, setSelectedService] = useState(initialServiceSlug);
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("11:00 AM");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [acknowledged, setAcknowledged] = useState(true);

  const [step, setStep] = useState<"form" | "preview">("form");
  const [copied, setCopied] = useState(false);

  // Set min date to tomorrow
  const [minDate, setMinDate] = useState("");
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setMinDate(tomorrow.toISOString().split("T")[0]);
    setPreferredDate(tomorrow.toISOString().split("T")[0]);
  }, []);

  // Update selected service if param changes
  useEffect(() => {
    if (initialServiceSlug) {
      setSelectedService(initialServiceSlug);
    }
  }, [initialServiceSlug]);

  const activeServiceObj = services.find((s) => s.slug === selectedService);

  const generateEnquiryText = () => {
    const serviceName = activeServiceObj
      ? `${activeServiceObj.name} (${activeServiceObj.startingPrice})`
      : "General Styling / Consultation";

    return `Hello Aurel Studio!\nI would like to request an appointment:\n\n*Service:* ${serviceName}\n*Preferred Date:* ${preferredDate}\n*Preferred Time:* ${preferredTime}\n*Name:* ${name || "[Name]"}\n*Phone:* ${phone || "[Phone]"}${email ? `\n*Email:* ${email}` : ""}${notes ? `\n*Notes:* ${notes}` : ""}\n\nPlease let me know if this slot is available to confirm my appointment.`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateEnquiryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("preview");
  };

  const timeSlots = [
    "10:30 AM",
    "11:30 AM",
    "12:30 PM",
    "02:00 PM",
    "03:30 PM",
    "04:30 PM",
    "05:30 PM",
    "06:30 PM",
    "07:30 PM",
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-[#FAF7F2] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#DED3C5]/80">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D8] text-[#241E1A] text-xs uppercase tracking-widest font-semibold">
            <CalendarIcon className="w-3.5 h-3.5 text-[#A87556]" />
            <span>Appointment Request</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#241E1A]">
            Request Your Visit
          </h1>
          <p className="text-xs sm:text-sm text-[#68615C] font-sans max-w-lg mx-auto leading-relaxed">
            Choose your service and preferred date. As a bespoke salon, we review stylist schedules and confirm your appointment directly.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#F6F2EB]">
        <div className="max-w-2xl mx-auto">
          {step === "preview" ? (
            <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#A87556] shadow-sm space-y-6 animate-fade-in">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#EAE2D8] text-[#A87556] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#241E1A]">
                  Appointment Request Summary
                </h2>
                <p className="text-xs sm:text-sm text-[#68615C] font-sans">
                  Review your appointment request details before handing off to WhatsApp:
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-[#F6F2EB] p-5 rounded-2xl border border-[#DED3C5] font-sans text-xs sm:text-sm space-y-2.5">
                <div className="flex justify-between py-1 border-b border-[#DED3C5]/60">
                  <span className="text-[#68615C]">Service:</span>
                  <span className="font-semibold text-[#241E1A]">
                    {activeServiceObj ? activeServiceObj.name : "Consultation / Haircut"}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#DED3C5]/60">
                  <span className="text-[#68615C]">Estimated Price:</span>
                  <span className="font-semibold text-[#A87556]">
                    {activeServiceObj ? activeServiceObj.startingPrice : "Consultation"}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#DED3C5]/60">
                  <span className="text-[#68615C]">Date & Time:</span>
                  <span className="font-semibold text-[#241E1A]">
                    {preferredDate} at {preferredTime}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#DED3C5]/60">
                  <span className="text-[#68615C]">Client Name:</span>
                  <span className="font-semibold text-[#241E1A]">{name}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#68615C]">Phone:</span>
                  <span className="font-semibold text-[#241E1A]">{phone}</span>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-4 bg-[#EAE2D8]/70 rounded-xl flex items-start gap-3 text-xs font-sans text-[#34302D]">
                <AlertCircle className="w-4 h-4 text-[#A87556] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Important Confirmation Notice</p>
                  <p className="text-[#68615C] mt-0.5">
                    This step sends an appointment enquiry. Your booking is confirmed only after our salon coordinator verifies stylist availability and replies on WhatsApp.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/${salonConfig.whatsappNumber}?text=${encodeURIComponent(
                    generateEnquiryText()
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#241E1A] text-[#F6F2EB] text-xs uppercase tracking-widest font-semibold hover:bg-[#A87556] transition-colors shadow-md text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#A87556]" />
                  <span>Continue on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full border border-[#DED3C5] bg-[#FAF7F2] text-[#241E1A] text-xs uppercase tracking-wider font-medium hover:bg-[#EAE2D8] transition-colors text-center"
                >
                  {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? "Message Copied!" : "Copy Message Fallback"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep("form")}
                  className="w-full py-2.5 text-xs font-sans text-[#68615C] hover:text-[#241E1A] underline text-center"
                >
                  ← Edit Request Details
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#DED3C5] shadow-xs space-y-6"
            >
              {/* Service Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#241E1A] mb-1.5 font-sans">
                  Select Desired Service *
                </label>
                <select
                  required
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 text-xs sm:text-sm font-sans bg-[#F6F2EB] border border-[#DED3C5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A87556] text-[#241E1A]"
                >
                  <option value="">-- Choose a service from menu --</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.slug}>
                      {s.name} ({s.startingPrice}) — {s.duration}
                    </option>
                  ))}
                </select>
                {activeServiceObj && (
                  <p className="text-xs text-[#A87556] mt-1.5 font-sans">
                    {activeServiceObj.shortDescription}
                  </p>
                )}
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#241E1A] mb-1.5 font-sans">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    min={minDate}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm font-sans bg-[#F6F2EB] border border-[#DED3C5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A87556] text-[#241E1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#241E1A] mb-1.5 font-sans">
                    Preferred Time *
                  </label>
                  <select
                    required
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm font-sans bg-[#F6F2EB] border border-[#DED3C5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A87556] text-[#241E1A]"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Client Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#241E1A] mb-1.5 font-sans">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 text-xs sm:text-sm font-sans bg-[#F6F2EB] border border-[#DED3C5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A87556] text-[#241E1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#241E1A] mb-1.5 font-sans">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98XXXXXXXX"
                    className="w-full px-4 py-2.5 text-xs sm:text-sm font-sans bg-[#F6F2EB] border border-[#DED3C5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A87556] text-[#241E1A]"
                  />
                </div>
              </div>

              {/* Optional Email & Notes */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#241E1A] mb-1.5 font-sans">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm font-sans bg-[#F6F2EB] border border-[#DED3C5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A87556] text-[#241E1A]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#241E1A] mb-1.5 font-sans">
                  Notes or Hair Concerns (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Thick wavy hair, previous balayage 6 months ago, interested in scalp spa..."
                  className="w-full px-4 py-2.5 text-xs sm:text-sm font-sans bg-[#F6F2EB] border border-[#DED3C5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A87556] text-[#241E1A]"
                />
              </div>

              {/* Privacy Acknowledgement */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="ack"
                  checked={acknowledged}
                  onChange={(e) => setAcknowledged(e.target.checked)}
                  required
                  className="mt-1 accent-[#A87556] rounded"
                />
                <label htmlFor="ack" className="text-xs text-[#68615C] font-sans leading-relaxed">
                  I understand this is an appointment request. Aurel Studio will review stylist schedules and confirm availability on WhatsApp.
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={!acknowledged}
                className="w-full py-3.5 px-6 rounded-full bg-[#241E1A] text-[#F6F2EB] text-xs uppercase tracking-widest font-semibold hover:bg-[#A87556] transition-colors shadow-md text-center disabled:opacity-50"
              >
                Review Appointment Request
              </button>

              <p className="text-[11px] text-[#68615C] text-center font-sans">
                Transparent consultation. Final pricing and service scope confirmed before beginning.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
