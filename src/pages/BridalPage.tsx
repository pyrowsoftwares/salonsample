import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { salonConfig } from "@/data/salonConfig";
import { ImageWithFallback } from "@/components/ImageWithFallback";

export function BridalPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventDate: "",
    eventType: "Traditional Muhurtham",
    serviceRequirement: "Bridal Hair & Makeup with Saree Draping",
    venueLocation: "Chennai Venue",
    notes: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Aurel Studio! I would like to enquire about Bridal / Occasion Artistry.\n\n*Name:* ${formData.name || "[Name]"}\n*Phone:* ${formData.phone || "[Phone]"}\n*Event Date:* ${formData.eventDate || "[Date]"}\n*Event Type:* ${formData.eventType}\n*Requirement:* ${formData.serviceRequirement}\n*Venue / City:* ${formData.venueLocation}\n*Notes:* ${formData.notes || "None"}\n\nPlease let me know your availability for a bridal consultation and preview trial.`;
    return encodeURIComponent(text);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Bridal Hero */}
      <section className="bg-[#FAF7F2] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#DED3C5]/80">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2D8] text-[#241E1A] text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#A87556]" />
            <span>Bridal & Occasion Lounge</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-[#241E1A] leading-tight">
            Timeless grace, <br />
            <span className="italic font-light text-[#A87556]">
              radiant for every celebration.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#34302D]/90 font-sans max-w-2xl mx-auto leading-relaxed">
            From the sacred rituals of morning Muhurthams to contemporary reception galas, we curate luminous skin, enduring hair architecture, and immaculate draping.
          </p>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F2EB]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
              alt="Traditional South Indian bride with poola jada and temple jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md md:mt-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
              alt="Contemporary evening bridal reception styling"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80"
              alt="Detailed bridal makeup and radiant complexion"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Bridal Services Overview */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-y border-[#DED3C5]/80">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#A87556] font-semibold">
              Bespoke Bridal Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#241E1A]">
              Curated Celebration Packages
            </h2>
            <p className="text-xs text-[#68615C] font-sans italic">
              *All bridal offerings are customized and priced upon consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#F6F2EB] border border-[#DED3C5] space-y-4">
              <span className="text-xs font-semibold text-[#A87556] uppercase tracking-wider">
                Signature
              </span>
              <h3 className="font-serif text-2xl text-[#241E1A]">
                The Muhurtham Bride
              </h3>
              <p className="text-xs sm:text-sm text-[#68615C] font-sans leading-relaxed">
                Dedicated traditional styling featuring high-definition humidity-resistant makeup, classic or contemporary poola jada fresh flower architecture, and traditional Kanjeevaram saree pleating.
              </p>
              <ul className="text-xs font-sans text-[#34302D] space-y-2 pt-2 border-t border-[#DED3C5]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A87556]" />
                  <span>Skin prep & dermal hydration barrier</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A87556]" />
                  <span>Long-wear sweat & tear-resistant formula</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A87556]" />
                  <span>Jewelry placement & setting</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#F6F2EB] border border-[#DED3C5] space-y-4">
              <span className="text-xs font-semibold text-[#A87556] uppercase tracking-wider">
                Evening Glamour
              </span>
              <h3 className="font-serif text-2xl text-[#241E1A]">
                Reception & Sangeet
              </h3>
              <p className="text-xs sm:text-sm text-[#68615C] font-sans leading-relaxed">
                Luminous red-carpet glamour tailored for evening lighting and celebration movement. Soft sculpted curls, modern textured chignons, and radiant dewy finish.
              </p>
              <ul className="text-xs font-sans text-[#34302D] space-y-2 pt-2 border-t border-[#DED3C5]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A87556]" />
                  <span>Flash photography calibration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A87556]" />
                  <span>Luxury individual lashes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A87556]" />
                  <span>Lehenga / gown draping & pin-up</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#F6F2EB] border border-[#DED3C5] space-y-4">
              <span className="text-xs font-semibold text-[#A87556] uppercase tracking-wider">
                Family & Bridal Party
              </span>
              <h3 className="font-serif text-2xl text-[#241E1A]">
                Bridesmaids & Entourage
              </h3>
              <p className="text-xs sm:text-sm text-[#68615C] font-sans leading-relaxed">
                Coordinated styling for mothers of the bride, sisters, and bridesmaids ensuring a cohesive aesthetic that complements the central bridal look.
              </p>
              <ul className="text-xs font-sans text-[#34302D] space-y-2 pt-2 border-t border-[#DED3C5]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A87556]" />
                  <span>Express glow makeup & hairstyling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A87556]" />
                  <span>Saree & dupatta draping assistance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A87556]" />
                  <span>Special group coordination packages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bridal Enquiry Form */}
      <section id="bridal-enquiry" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F2EB]">
        <div className="max-w-3xl mx-auto bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#DED3C5] shadow-sm">
          <div className="space-y-3 mb-8 text-center">
            <span className="text-xs uppercase tracking-widest text-[#A87556] font-semibold">
              Begin The Conversation
            </span>
            <h2 className="text-3xl font-serif text-[#241E1A]">
              Bridal Availability & Consultation Enquiry
            </h2>
            <p className="text-xs sm:text-sm text-[#68615C] font-sans">
              Share your wedding dates and location in Chennai. Our bridal coordinator will check date availability and schedule your consultation.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-[#F6F2EB] border border-[#A87556] text-center space-y-4 animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-[#EAE2D8] text-[#A87556] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#241E1A]">
                Enquiry Details Ready
              </h3>
              <p className="text-xs sm:text-sm text-[#68615C] font-sans max-w-md mx-auto">
                Because this is an appointment request, our bridal team confirms date availability directly. You can now send this summary via WhatsApp:
              </p>

              <div className="p-4 bg-[#FAF7F2] rounded-xl text-left text-xs font-mono text-[#34302D] space-y-1 overflow-x-auto border border-[#DED3C5]">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Date:</strong> {formData.eventDate}</p>
                <p><strong>Event:</strong> {formData.eventType}</p>
                <p><strong>Requirement:</strong> {formData.serviceRequirement}</p>
                <p><strong>Venue:</strong> {formData.venueLocation}</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${salonConfig.whatsappNumber}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#241E1A] text-[#F6F2EB] text-xs uppercase tracking-wider font-semibold hover:bg-[#A87556] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#A87556]" />
                  <span>Continue on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-5 py-2.5 rounded-full border border-[#DED3C5] text-xs font-sans text-[#34302D] hover:bg-[#EAE2D8]"
                >
                  Edit Enquiry Details
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#241E1A] mb-1.5 font-sans">
                    Bride / Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Priyadharshini"
                    className="w-full px-4 py-2.5 text-xs font-sans bg-[#F6F2EB] border border-[#DED3C5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A87556]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#241E1A] mb-1.5 font-sans">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98XXXXXXXX"
                    className="w-full px-4 py-2.5 text-xs font-sans bg-[#F6F2EB] border border-[#DED3C5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A87556]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#241E1A] mb-1.5 font-sans">
                    Wedding / Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs font-sans bg-[#F6F2EB] border border-[#DED3C5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A87556]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#241E1A] mb-1.5 font-sans">
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs font-sans bg-[#F6F2EB] border border-[#DED3C5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A87556]"
                  >
                    <option value="Traditional Muhurtham">Traditional Muhurtham</option>
                    <option value="Reception / Sangeet">Reception / Sangeet</option>
                    <option value="Engagement Ceremony">Engagement Ceremony</option>
                    <option value="Christian Wedding">Christian Wedding Ceremony</option>
                    <option value="Multiple Ceremonies">Multiple Ceremonies Package</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#241E1A] mb-1.5 font-sans">
                    Services Required
                  </label>
                  <select
                    value={formData.serviceRequirement}
                    onChange={(e) => setFormData({ ...formData, serviceRequirement: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs font-sans bg-[#F6F2EB] border border-[#DED3C5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A87556]"
                  >
                    <option value="Bridal Hair & Makeup with Saree Draping">Bridal Hair & Makeup + Draping</option>
                    <option value="Bride + Bridesmaids Entourage">Bride + Bridesmaids Entourage</option>
                    <option value="Preview Trial Session Only">Preview Trial Session Only</option>
                    <option value="Full Wedding Weekend Package">Full Wedding Weekend Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#241E1A] mb-1.5 font-sans">
                    Venue or Location (In / Around Chennai)
                  </label>
                  <input
                    type="text"
                    value={formData.venueLocation}
                    onChange={(e) => setFormData({ ...formData, venueLocation: e.target.value })}
                    placeholder="e.g. MRC Nagar, ECR, Anna Nagar, or Studio"
                    className="w-full px-4 py-2.5 text-xs font-sans bg-[#F6F2EB] border border-[#DED3C5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A87556]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#241E1A] mb-1.5 font-sans">
                  Special Notes or Trousseau Details (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share details such as Muhurtham timings (morning/evening), outfit color, or flower preference..."
                  className="w-full px-4 py-2.5 text-xs font-sans bg-[#F6F2EB] border border-[#DED3C5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A87556]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#241E1A] text-[#F6F2EB] text-xs uppercase tracking-widest font-semibold hover:bg-[#A87556] transition-colors shadow-md text-center"
                >
                  Generate WhatsApp Enquiry Details
                </button>
              </div>

              <p className="text-[11px] text-[#68615C] text-center font-sans">
                Notice: Submitting generates an enquiry summary. Bridal dates are secured only after direct confirmation with our salon coordinator.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
