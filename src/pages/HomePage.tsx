import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  Shield,
  MessageCircle,
  Star,
  Quote,
  Sliders,
  ChevronDown,
} from "lucide-react";
import { salonConfig } from "@/data/salonConfig";
import { serviceCategories } from "@/data/services";
import { galleryItems } from "@/data/gallery";
import { sampleTeamMembers } from "@/data/team";
import { sampleTestimonials } from "@/data/testimonials";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { InteractiveDiagnostic } from "@/components/InteractiveDiagnostic";
import { TransformationShowcase } from "@/components/TransformationShowcase";
import { NeighborhoodBar } from "@/components/NeighborhoodBar";

export function HomePage() {
  const featuredLooks = galleryItems.slice(0, 6);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#F6F2EB]">
      {/* ───────────────────────────────────────
          A. CINEMATIC INSET-FRAME HERO SECTION
          (MotionSites AI Signature Luxury Craft)
      ──────────────────────────────────────── */}
      <section className="px-3 sm:px-6 lg:px-8 pt-3 sm:pt-5 pb-10 sm:pb-14 bg-[#F6F2EB]">
        <div className="relative min-h-[88vh] sm:min-h-[90vh] rounded-[24px] sm:rounded-[36px] overflow-hidden bg-[#1E1916] flex items-center border border-[#34302D] shadow-2xl">
          {/* Ambient Video Background Layer (MotionSites Floating Blossom loop) */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
              className={`w-full h-full object-cover opacity-20 sm:opacity-25 scale-105 transition-opacity duration-1000 ${
                videoLoaded ? "opacity-25" : "opacity-0"
              }`}
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261029_084141_6ac02cf2-9847-4e03-9a9c-81a4ec81dd93.mp4"
                type="video/mp4"
              />
            </video>
            {/* Edge-Blend Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E1916] via-[#1E1916]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E1916] via-transparent to-[#1E1916]/60" />
          </div>

          <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 py-16 sm:py-20 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Live Studio Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#2A231F]/90 border border-[#A87556]/40 backdrop-blur-md shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] sm:text-xs font-sans text-[#DED3C5] uppercase tracking-wider font-medium">
                  Studio Open Today • 09:30 AM – 08:30 PM • Anna Nagar
                </span>
              </div>

              {/* Display Typography */}
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-[#A87556] font-semibold">
                  01 // BESPOKE HAIR &amp; BEAUTY LOUNGE
                </p>
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-serif text-[#F6F2EB] leading-[1.08] font-normal tracking-tight break-words">
                  A little transformation. <br />
                  <span className="italic font-serif font-light text-[#DED3C5]">
                    Entirely you.
                  </span>
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-[#DED3C5]/85 max-w-xl font-sans leading-relaxed pt-1">
                  Thoughtful hair architecture, sun-kissed French balayage, and restorative scalp therapy shaped around your bone structure, hair biology, and personal lifestyle.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <Link
                  to="/book"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full bg-[#A87556] text-[#F6F2EB] text-xs uppercase tracking-widest font-semibold hover:bg-[#ba8b6d] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] text-center"
                >
                  <span>Book an Appointment</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href="#hair-diagnostic"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full bg-[#2A231F]/80 border border-[#DED3C5]/40 text-[#F6F2EB] text-xs uppercase tracking-widest font-medium hover:bg-[#34302D] hover:border-[#A87556] transition-all duration-300 backdrop-blur-xs text-center"
                >
                  <Sparkles className="w-4 h-4 text-[#A87556]" />
                  <span>30s Hair Diagnostic</span>
                </a>
              </div>

              {/* Editorial Micro-Metrics Bar */}
              <div className="pt-6 border-t border-[#34302D] grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs font-sans text-[#DED3C5]/70">
                <div className="bg-[#2A231F]/60 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none border border-[#34302D] sm:border-0">
                  <p className="font-serif text-base sm:text-lg text-[#F6F2EB] font-medium">1:1 Consultation</p>
                  <p className="text-[11px] text-[#DED3C5]/60 mt-0.5">Bone structure &amp; porosity analysis</p>
                </div>
                <div className="bg-[#2A231F]/60 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none border border-[#34302D] sm:border-0">
                  <p className="font-serif text-base sm:text-lg text-[#F6F2EB] font-medium">Bond-Protected</p>
                  <p className="text-[11px] text-[#DED3C5]/60 mt-0.5">Ammonia-free European color line</p>
                </div>
                <div className="bg-[#2A231F]/60 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none border border-[#34302D] sm:border-0">
                  <p className="font-serif text-base sm:text-lg text-[#F6F2EB] font-medium">Private Suites</p>
                  <p className="text-[11px] text-[#DED3C5]/60 mt-0.5">Bridal &amp; personal styling suites with valet</p>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#34302D] relative group">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80"
                    alt="Aurel Studio signature architectural cut and styling"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1916]/80 via-transparent to-transparent" />
                  
                  {/* Bottom Image Overlay Tag */}
                  <div className="absolute bottom-5 left-5 right-5 text-[#F6F2EB]">
                    <span className="text-[10px] uppercase font-sans tracking-widest text-[#A87556] font-semibold block">
                      Featured Styling
                    </span>
                    <p className="font-serif text-base sm:text-lg font-medium leading-snug">
                      Architectural Bob with Face-Framing Micro Layers
                    </p>
                  </div>
                </div>

                {/* Floating Glass Quote Card */}
                <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-6 bg-[#241E1A]/95 backdrop-blur-md text-[#F6F2EB] p-4 sm:p-5 rounded-2xl shadow-2xl max-w-full sm:max-w-[260px] border border-[#34302D]">
                  <p className="font-serif text-sm italic text-[#DED3C5] leading-relaxed">
                    &ldquo;A moment of calm, precision, and confidence in the heart of Anna Nagar.&rdquo;
                  </p>
                  <div className="mt-2.5 flex items-center justify-between text-[11px] font-sans text-[#A87556]">
                    <span className="uppercase tracking-widest font-semibold">Aurel Studio</span>
                    <span>Chennai</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────
          B. SERVICE DISCOVERY STRIP (Zazzle / Vurve Style)
      ──────────────────────────────────────── */}
      <section className="bg-[#FAF7F2] py-5 border-b border-[#DED3C5]/80 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 min-w-max">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#A87556] shrink-0 mr-2 flex items-center gap-1.5">
              <span>Rituals Menu:</span>
            </span>
            {serviceCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/services?category=${cat.slug}`}
                className="px-4 py-2 rounded-full bg-[#F6F2EB] border border-[#DED3C5] text-xs font-sans text-[#241E1A] hover:bg-[#241E1A] hover:text-[#F6F2EB] hover:border-[#241E1A] transition-all whitespace-nowrap shadow-2xs font-medium"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────
          C. BRAND PHILOSOPHY & ART DIRECTION
          (Inspired by Anlon & Visual Grammar)
      ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#F6F2EB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Composition */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-md mt-8 border border-[#DED3C5]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80"
                  alt="Aurel Studio interior styling station"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-[#DED3C5]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80"
                  alt="Aurel Studio French balayage result"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Editorial Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block text-xs uppercase tracking-widest text-[#A87556] font-semibold">
                02 // The Aurel Philosophy
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#241E1A] leading-[1.12]">
                More than a new look. <br />
                <span className="italic font-light text-[#A87556]">
                  A moment for yourself.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-[#34302D]/90 font-sans leading-relaxed">
                We believe true beauty is neither hurried nor one-size-fits-all.
                At Aurel Studio, every service begins with an open conversation:
                we examine your hair texture, scalp condition, daily routine, and
                personal aesthetic before a single cut or tone is selected.
              </p>
              <p className="text-sm sm:text-base text-[#68615C] font-sans leading-relaxed">
                Whether you seek a subtle refresh, a dimensional balayage
                transformation, or restorative scalp therapy after Chennai’s humid
                workdays, our artists provide quiet craftsmanship in a relaxed,
                unhurried atmosphere.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#241E1A] hover:text-[#A87556] transition-colors group"
                >
                  <span>Learn more about our approach</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────
          D. INTERACTIVE HAIR & SCALP DIAGNOSTIC
          (TONI&GUY & Visual Grammar Methodology)
      ──────────────────────────────────────── */}
      <InteractiveDiagnostic />

      {/* ───────────────────────────────────────
          E. BEFORE & AFTER TRANSFORMATION SHOWCASE
          (Inspired by TONI&GUY & Vurve Salon)
      ──────────────────────────────────────── */}
      <TransformationShowcase />

      {/* ───────────────────────────────────────
          F. SIGNATURE SERVICES (Categorized Menu)
      ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-y border-[#DED3C5]/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#A87556] font-semibold">
                03 // Curated Offerings
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#241E1A] mt-1">
                Signature Service Menu
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#241E1A] hover:text-[#A87556] transition-colors"
            >
              <span>View Full Menu &amp; Rates</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                className="group bg-[#F6F2EB] rounded-2xl overflow-hidden border border-[#DED3C5] hover:border-[#A87556] transition-all duration-300 flex flex-col shadow-xs hover:shadow-md"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <ImageWithFallback
                    src={category.heroImage}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-[#241E1A]/80 backdrop-blur-xs text-[#F6F2EB] text-[11px] font-sans px-3 py-1 rounded-full uppercase tracking-wider">
                    {category.services.length} Services
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl text-[#241E1A] font-medium group-hover:text-[#A87556] transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs text-[#A87556] font-semibold mt-1">
                      {category.tagline}
                    </p>
                    <p className="text-sm text-[#68615C] mt-2 line-clamp-2 font-sans">
                      {category.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DED3C5] flex items-center justify-between">
                    <span className="text-xs font-sans text-[#34302D]">
                      From{" "}
                      <span className="font-semibold text-[#241E1A]">
                        {category.services[0]?.startingPrice || "Consultation"}
                      </span>
                    </span>
                    <Link
                      to={`/services?category=${category.slug}`}
                      className="text-xs uppercase tracking-widest font-semibold text-[#241E1A] group-hover:text-[#A87556] flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────
          G. THE 4-STEP SALON EXPERIENCE JOURNEY
      ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#241E1A] text-[#F6F2EB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs uppercase tracking-widest text-[#A87556] font-semibold">
              04 // The Aurel Journey
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F6F2EB]">
              Consultation-Led Craftsmanship
            </h2>
            <p className="text-sm text-[#DED3C5]/80 font-sans">
              Every visit is designed to be intentional, transparent, and rejuvenating.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "We Listen.",
                desc: "An in-depth consultation exploring your hair history, scalp needs, lifestyle pace, and style goals before picking up shears or colour bowls.",
              },
              {
                step: "02",
                title: "We Personalise.",
                desc: "We calibrate formulas and cutting techniques specifically to your bone structure, skin undertones, and natural hair movement.",
              },
              {
                step: "03",
                title: "We Create.",
                desc: "Precision execution with gentle botanical products, clean scalp washes, and bond-building care in a calming, aesthetic setting.",
              },
              {
                step: "04",
                title: "You Leave Confident.",
                desc: "Finished with practical styling coaching and tailored aftercare so you look and feel like your best self long after leaving.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-[#34302D]/40 border border-[#34302D] hover:border-[#A87556] transition-colors space-y-3"
              >
                <span className="font-serif text-3xl font-light text-[#A87556]">
                  {item.step}
                </span>
                <h3 className="font-serif text-xl text-[#F6F2EB] font-medium">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#DED3C5]/80 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────
          H. RESIDENT SPECIALISTS SPOTLIGHT
      ──────────────────────────────────────── */}
      {salonConfig.features.showSampleTeam && (
        <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F6F2EB]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE2D8] text-[#241E1A] text-xs uppercase tracking-widest font-semibold mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#A87556]" />
                  <span>Artists &amp; Stylists</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-serif text-[#241E1A]">
                  Meet Our Resident Specialists
                </h2>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#241E1A] hover:text-[#A87556] transition-colors"
              >
                <span>Read Full Bios &amp; Philosophy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sampleTeamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#DED3C5] hover:border-[#A87556] transition-all flex flex-col shadow-2xs hover:shadow-md"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <h3 className="font-serif text-xl text-[#241E1A] font-medium">
                        {member.name}
                      </h3>
                      <p className="text-xs text-[#A87556] font-semibold mt-0.5">
                        {member.role}
                      </p>
                      <p className="text-xs text-[#68615C] font-sans mt-2 line-clamp-2">
                        {member.bio}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#DED3C5] flex items-center justify-between text-[11px] font-sans text-[#34302D]">
                      <span>{member.experienceYears}</span>
                      <Link
                        to="/book"
                        className="text-[#A87556] hover:underline font-semibold"
                      >
                        Book With {member.name.split(" ")[0]} &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───────────────────────────────────────
          I. FEATURED LOOKS & GALLERY TEASER
      ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-y border-[#DED3C5]/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#A87556] font-semibold">
                05 // Visual Curation
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#241E1A] mt-1">
                Featured Editorial Looks
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#241E1A] hover:text-[#A87556] transition-colors"
            >
              <span>Explore Full Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {featuredLooks.map((look) => (
              <Link
                key={look.id}
                to="/gallery"
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all border border-[#DED3C5]"
              >
                <ImageWithFallback
                  src={look.image}
                  alt={look.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241E1A]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 sm:p-5 flex flex-col justify-end text-[#F6F2EB]">
                  <span className="text-[10px] uppercase tracking-widest text-[#A87556] font-semibold">
                    {look.categoryLabel}
                  </span>
                  <p className="font-serif text-sm sm:text-base font-medium line-clamp-1">
                    {look.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────
          J. AUTHENTIC GUEST EXPERIENCES & REVIEWS
      ──────────────────────────────────────── */}
      {salonConfig.features.showSampleReviews && (
        <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F6F2EB]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE2D8] text-[#241E1A] text-xs uppercase tracking-widest font-semibold">
                <Quote className="w-3.5 h-3.5 text-[#A87556]" />
                <span>Client Words</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#241E1A]">
                The Guest Experience
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sampleTestimonials.map((t) => (
                <div
                  key={t.id}
                  className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#DED3C5] flex flex-col justify-between space-y-4 shadow-2xs hover:border-[#A87556] transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-[#A87556]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#A87556]" />
                      ))}
                    </div>
                    <p className="font-serif text-base sm:text-lg text-[#241E1A] italic leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DED3C5] text-xs font-sans">
                    <p className="font-semibold text-[#241E1A]">{t.clientName}</p>
                    <p className="text-[#A87556]">{t.serviceReceived}</p>
                    <p className="text-[#68615C] text-[11px] mt-0.5">{t.locationArea} • {t.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───────────────────────────────────────
          K. BESPOKE BRIDAL ATELIER (Anlon Art Style)
      ──────────────────────────────────────── */}
      {salonConfig.features.bridalEnabled && (
        <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-t border-[#DED3C5]/80">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#F6F2EB] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#DED3C5] shadow-sm">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#EAE2D8] text-[#241E1A] text-xs uppercase tracking-widest font-semibold">
                  06 // Bridal &amp; Occasion Atelier
                </div>
                <h2 className="text-3xl sm:text-5xl font-serif text-[#241E1A] leading-tight">
                  Elegance crafted for your most unforgettable day.
                </h2>
                <p className="text-base text-[#34302D]/90 font-sans leading-relaxed">
                  From traditional South Indian Muhurtham poola jada ceremonies to
                  contemporary evening receptions, our bridal team curates
                  skin-first, long-wearing makeup and bespoke hair sculpting that
                  moves gracefully and photographs radiantly under all lights.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/bridal"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#241E1A] text-[#F6F2EB] text-xs uppercase tracking-widest font-semibold hover:bg-[#A87556] transition-colors shadow-sm"
                  >
                    <span>Discuss Your Bridal Look</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/bridal#bridal-enquiry"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#241E1A] text-[#241E1A] text-xs uppercase tracking-widest font-medium hover:bg-[#241E1A] hover:text-[#F6F2EB] transition-colors"
                  >
                    <span>Request Trial Details</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-[#F6F2EB]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
                    alt="Bridal artistry model at Aurel Studio"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ───────────────────────────────────────
          L. ANNA NAGAR NEIGHBORHOOD IDENTITY
          (Inspired by Vurve Salon Chennai)
      ──────────────────────────────────────── */}
      <NeighborhoodBar />

      {/* ───────────────────────────────────────
          M. FINAL CALL TO ACTION (MotionSites Refined)
      ──────────────────────────────────────── */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#241E1A] text-[#F6F2EB] text-center relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#A87556]/10 blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto space-y-6 z-10 relative">
          <span className="text-xs uppercase tracking-widest text-[#A87556] font-semibold">
            Begin Your Consultation
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#F6F2EB] leading-tight">
            Your next favourite look <br />
            <span className="italic font-light text-[#DED3C5]">starts here.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#DED3C5]/85 font-sans max-w-xl mx-auto leading-relaxed">
            Take a moment for yourself. Experience personalized consultations and quiet luxury in our Anna Nagar lounge.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#A87556] text-[#F6F2EB] text-xs uppercase tracking-widest font-semibold hover:bg-[#ba8b6d] transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#DED3C5]/40 text-[#F6F2EB] text-xs uppercase tracking-widest font-medium hover:bg-[#34302D] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Talk to Our Team</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
