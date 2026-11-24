import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Send,
  Navigation,
} from "lucide-react";
import { salonConfig } from "../data/salonConfig";

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "General Consultation Enquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppEnquiry = () => {
    const text = `Hello Aurel Studio!\n*Enquiry from Website:*\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Subject:* ${form.subject}\n*Message:* ${form.message}`;
    return encodeURIComponent(text);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-[#FAF7F2] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#DED3C5]/80">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D8] text-[#241E1A] text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#A87556]" />
            <span>Connect & Visit</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-[#241E1A]">
            We&apos;re Here to Listen
          </h1>
          <p className="text-base sm:text-lg text-[#34302D]/90 font-sans max-w-xl mx-auto">
            Located in the heart of Anna Nagar, Chennai. Reach out for appointments, bespoke bridal enquiries, or styling consultations.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F2EB]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#DED3C5] space-y-6">
              <h2 className="font-serif text-2xl text-[#241E1A]">
                Studio Coordinates
              </h2>

              <div className="space-y-4 font-sans text-sm text-[#34302D]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#A87556] shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#241E1A]">{salonConfig.name}</p>
                    <p className="text-[#68615C]">{salonConfig.address.line1}</p>
                    <p className="text-[#68615C]">{salonConfig.address.line2}, {salonConfig.address.city} – {salonConfig.address.pincode}</p>
                    <p className="text-xs text-[#A87556] mt-1">{salonConfig.address.landmarks}</p>
                    <span className="text-[11px] text-[#68615C] block italic mt-1">(Sample address for demo preview)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#DED3C5]">
                  <Clock className="w-5 h-5 text-[#A87556] shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#241E1A]">Business Hours</p>
                    <p className="text-[#68615C]">{salonConfig.openingHours.weekday}</p>
                    <p className="text-[#68615C]">{salonConfig.openingHours.weekend}</p>
                    <p className="text-xs text-[#68615C] mt-1">{salonConfig.openingHours.note}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#DED3C5]">
                  <Mail className="w-5 h-5 text-[#A87556] shrink-0" />
                  <div>
                    <p className="font-semibold text-[#241E1A]">Email</p>
                    <a
                      href={`mailto:${salonConfig.email}`}
                      className="text-[#68615C] hover:text-[#A87556] transition-colors"
                    >
                      {salonConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#DED3C5]">
                  <Phone className="w-5 h-5 text-[#A87556] shrink-0" />
                  <div>
                    <p className="font-semibold text-[#241E1A]">Phone</p>
                    <a
                      href={`tel:${salonConfig.phone}`}
                      className="text-[#68615C] hover:text-[#A87556] transition-colors"
                    >
                      {salonConfig.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={salonConfig.address.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#241E1A] text-[#F6F2EB] text-xs uppercase tracking-wider font-semibold hover:bg-[#A87556] transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
                <Link
                  to="/book"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-[#241E1A] text-[#241E1A] text-xs uppercase tracking-wider font-semibold hover:bg-[#241E1A] hover:text-[#F6F2EB] transition-colors"
                >
                  <span>Book Appointment Directly</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7F2] p-8 sm:p-10 rounded-3xl border border-[#DED3C5] shadow-xs">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#241E1A] mb-2">
                Send a Message
              </h2>
              <p className="text-xs sm:text-sm text-[#68615C] font-sans mb-6">
                Have a question regarding hair colouring, scalp treatments, or bridal dates? Leave a message below:
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#F6F2EB] border border-[#A87556] text-center space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#EAE2D8] text-[#A87556] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#241E1A]">
                    Message Ready
                  </h3>
                  <p className="text-xs sm:text-sm text-[#68615C] font-sans max-w-md mx-auto">
                    Thank you, {form.name}. For immediate assistance or appointment confirmation, continue on WhatsApp:
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${salonConfig.whatsappNumber}?text=${getWhatsAppEnquiry()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#241E1A] text-[#F6F2EB] text-xs uppercase tracking-wider font-semibold hover:bg-[#A87556] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-[#A87556]" />
                      <span>Continue on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-full border border-[#DED3C5] text-xs font-sans text-[#34302D] hover:bg-[#EAE2D8]"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#241E1A] mb-1 font-sans">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Ananya"
                        className="w-full px-4 py-2.5 text-xs font-sans bg-[#F6F2EB] border border-[#DED3C5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A87556]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#241E1A] mb-1 font-sans">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98XXXXXXXX"
                        className="w-full px-4 py-2.5 text-xs font-sans bg-[#F6F2EB] border border-[#DED3C5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A87556]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#241E1A] mb-1 font-sans">
                      Subject
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs font-sans bg-[#F6F2EB] border border-[#DED3C5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A87556]"
                    >
                      <option value="General Consultation Enquiry">General Consultation Enquiry</option>
                      <option value="Hair Colour / Balayage Consultation">Hair Colour / Balayage Consultation</option>
                      <option value="Bridal & Occasion Styling">Bridal & Occasion Styling</option>
                      <option value="Keratin / Scalp Spa Advice">Keratin / Scalp Spa Advice</option>
                      <option value="Career & Stylist Opportunities">Career & Stylist Opportunities</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#241E1A] mb-1 font-sans">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us what you're looking for..."
                      className="w-full px-4 py-2.5 text-xs font-sans bg-[#F6F2EB] border border-[#DED3C5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A87556]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#241E1A] text-[#F6F2EB] text-xs uppercase tracking-widest font-semibold hover:bg-[#A87556] transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Enquiry Note</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
