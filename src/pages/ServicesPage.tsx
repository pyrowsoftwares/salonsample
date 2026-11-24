import React, { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Search,
  ArrowRight,
  Clock,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Droplets,
  Heart,
  SlidersHorizontal,
} from "lucide-react";
import { serviceCategories, getAllServices } from "../data/services";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { salonConfig } from "../data/salonConfig";

export function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get("category") || "all";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(catParam);
  const [skinSubFilter, setSkinSubFilter] = useState<string>("all");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("all");
    }
  }, [searchParams]);

  const allServices = useMemo(() => getAllServices(), []);

  // Find active category object if not "all"
  const activeCategoryObj = useMemo(() => {
    return serviceCategories.find((c) => c.slug === selectedCategory);
  }, [selectedCategory]);

  const filteredServices = useMemo(() => {
    return allServices.filter((service) => {
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDescription
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || service.categorySlug === selectedCategory;

      // Sub-filter specific to skin-grooming
      let matchesSub = true;
      if (selectedCategory === "skin-grooming" && skinSubFilter !== "all") {
        if (skinSubFilter === "facials") {
          matchesSub =
            service.slug.includes("facial") ||
            service.slug.includes("hydra") ||
            service.slug.includes("vitamin");
        } else if (skinSubFilter === "cleanups") {
          matchesSub =
            service.slug.includes("clean-up") ||
            service.slug.includes("detox");
        } else if (skinSubFilter === "waxing-brows") {
          matchesSub =
            service.slug.includes("eyebrow") ||
            service.slug.includes("waxing");
        }
      }

      return matchesSearch && matchesCategory && matchesSub;
    });
  }, [allServices, searchQuery, selectedCategory, skinSubFilter]);

  return (
    <div className="flex flex-col w-full bg-[#F6F2EB]">
      {/* ───────────────────────────────────────
          1. DYNAMIC CATEGORY HERO BANNER
      ──────────────────────────────────────── */}
      {selectedCategory === "skin-grooming" ? (
        <section className="relative bg-[#241E1A] text-[#F6F2EB] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#34302D]">
          {/* Ambient background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#A87556]/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#DED3C5]/10 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#34302D] text-[#A87556] text-xs font-sans uppercase tracking-[0.25em] font-semibold border border-[#A87556]/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>04 // Clinical Dermal Aesthetics &amp; Skin Lounge</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl font-serif text-[#F6F2EB] leading-[1.08] font-normal">
                  Dermal Aesthetics &amp; <br />
                  <span className="italic font-light text-[#DED3C5]">
                    Cellular Skin Health
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-[#DED3C5]/85 font-sans max-w-xl leading-relaxed pt-1">
                  Non-invasive oxygen dome infusions, ultrasonic vortex pore purification, and gentle Italian liposoluble waxing—calibrated to restore moisture barriers against Chennai’s tropical heat and coastal humidity.
                </p>
              </div>

              {/* 4 Clinical Hygiene & Standard Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#34302D] text-xs font-sans text-[#DED3C5]">
                <div className="bg-[#2A231F] p-3 rounded-xl border border-[#34302D]">
                  <span className="font-semibold text-[#F6F2EB] block">Hospital Autoclave</span>
                  <span className="text-[11px] text-[#DED3C5]/60">Sterile instruments</span>
                </div>
                <div className="bg-[#2A231F] p-3 rounded-xl border border-[#34302D]">
                  <span className="font-semibold text-[#F6F2EB] block">Single-Use Linens</span>
                  <span className="text-[11px] text-[#DED3C5]/60">Sealed fresh per guest</span>
                </div>
                <div className="bg-[#2A231F] p-3 rounded-xl border border-[#34302D]">
                  <span className="font-semibold text-[#F6F2EB] block">Italian RICA Wax</span>
                  <span className="text-[11px] text-[#DED3C5]/60">Colophony-free &amp; gentle</span>
                </div>
                <div className="bg-[#2A231F] p-3 rounded-xl border border-[#34302D]">
                  <span className="font-semibold text-[#F6F2EB] block">Private Cabins</span>
                  <span className="text-[11px] text-[#DED3C5]/60">A/C temperature-controlled</span>
                </div>
              </div>
            </div>

            {/* Right Feature Card */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border-2 border-[#34302D] shadow-2xl relative">
                <ImageWithFallback
                  src="https://images.pexels.com/photos/37229301/pexels-photo-37229301.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=825"
                  alt="Aurel Studio Dermal Aesthetics suite"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1916]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="text-[#F6F2EB]">
                    <span className="text-[10px] uppercase font-sans tracking-widest text-[#A87556] font-semibold block">
                      Consultation Standard
                    </span>
                    <p className="font-serif text-lg font-medium">
                      Every skin ritual includes a dermatoscope barrier scan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : activeCategoryObj ? (
        <section className="bg-[#241E1A] text-[#F6F2EB] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#34302D]">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#34302D] text-[#A87556] text-xs font-sans uppercase tracking-[0.25em] font-semibold border border-[#A87556]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Category Selection</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif text-[#F6F2EB] leading-tight">
              {activeCategoryObj.name}
            </h1>
            <p className="text-base sm:text-lg text-[#DED3C5]/85 font-sans max-w-2xl leading-relaxed">
              {activeCategoryObj.description}
            </p>
          </div>
        </section>
      ) : (
        <section className="bg-[#FAF7F2] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#DED3C5]/80">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D8] text-[#241E1A] text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#A87556]" />
              <span>Curated Rituals &amp; Rates</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif text-[#241E1A]">
              The Full Service Menu
            </h1>
            <p className="text-base sm:text-lg text-[#34302D]/90 font-sans max-w-xl mx-auto">
              From precision architectural haircuts and custom French balayage to restorative scalp and dermal wellness.
            </p>
          </div>
        </section>
      )}

      {/* ───────────────────────────────────────
          2. FILTER & SEARCH NAVIGATION STRIP
      ──────────────────────────────────────── */}
      <section className="sticky top-[68px] sm:top-[72px] z-30 bg-[#F6F2EB]/95 backdrop-blur-md py-3.5 sm:py-4 px-4 sm:px-6 lg:px-8 border-b border-[#DED3C5] shadow-xs">
        <div className="max-w-7xl mx-auto space-y-3">
          {/* Top Row: Categories & Search Bar */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4">
            {/* Category Filter Pills (Wrapping on Desktop, Touch-scroll on mobile with zero scrollbar) */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto lg:flex-wrap no-scrollbar pb-1 lg:pb-0">
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setSkinSubFilter("all");
                  setSearchParams({});
                }}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-sans tracking-wider uppercase font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  selectedCategory === "all"
                    ? "bg-[#241E1A] text-[#F6F2EB] shadow-xs ring-1 ring-[#241E1A]"
                    : "bg-[#FAF7F2] border border-[#DED3C5] text-[#34302D] hover:bg-[#EAE2D8] hover:text-[#241E1A]"
                }`}
              >
                <span>All Rituals</span>
                <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  selectedCategory === "all" ? "bg-[#A87556] text-[#F6F2EB]" : "bg-[#DED3C5]/60 text-[#68615C]"
                }`}>
                  {allServices.length}
                </span>
              </button>

              {serviceCategories.map((cat) => {
                const isSelected = selectedCategory === cat.slug;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat.slug);
                      setSkinSubFilter("all");
                      setSearchParams({ category: cat.slug });
                    }}
                    className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-sans tracking-wider uppercase font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                      isSelected
                        ? "bg-[#241E1A] text-[#F6F2EB] shadow-xs ring-1 ring-[#241E1A]"
                        : "bg-[#FAF7F2] border border-[#DED3C5] text-[#34302D] hover:bg-[#EAE2D8] hover:text-[#241E1A]"
                    }`}
                  >
                    <span>{cat.shortName || cat.name}</span>
                    <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isSelected ? "bg-[#A87556] text-[#F6F2EB]" : "bg-[#DED3C5]/60 text-[#68615C]"
                    }`}>
                      {cat.services.length}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input Bar */}
            <div className="relative w-full lg:w-80 shrink-0">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#68615C]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search haircuts, balayage, facials..."
                className="w-full pl-9 pr-8 py-2 text-xs font-sans bg-[#FAF7F2] border border-[#DED3C5] rounded-full focus:outline-none focus:ring-2 focus:ring-[#A87556] text-[#241E1A] placeholder-[#68615C]/70 shadow-2xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#68615C] hover:text-[#241E1A] p-0.5"
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Connected Sub-Filter Row specifically for Skin & Grooming */}
          {selectedCategory === "skin-grooming" && (
            <div className="flex items-center justify-between gap-2 pt-2.5 border-t border-[#DED3C5]/70 text-xs font-sans">
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar">
                <span className="text-[11px] text-[#68615C] uppercase tracking-wider font-semibold shrink-0 mr-1 flex items-center gap-1">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#A87556]" />
                  <span>Skin Rituals:</span>
                </span>
                {[
                  { id: "all", label: "All Skin Care", count: 6 },
                  { id: "facials", label: "Medi-Facials & Infusions", count: 3 },
                  { id: "cleanups", label: "Pore Clarifiers & Clean-Ups", count: 2 },
                  { id: "waxing-brows", label: "Brows & Liposoluble Waxing", count: 2 },
                ].map((sub) => {
                  const isSubActive = skinSubFilter === sub.id;
                  return (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => setSkinSubFilter(sub.id)}
                      className={`px-3 py-1 rounded-full text-xs font-sans transition-all whitespace-nowrap shrink-0 ${
                        isSubActive
                          ? "bg-[#A87556] text-[#F6F2EB] font-semibold shadow-xs"
                          : "bg-[#FAF7F2] text-[#68615C] hover:text-[#241E1A] border border-[#DED3C5]"
                      }`}
                    >
                      <span>{sub.label}</span>
                      <span className="ml-1 opacity-70">({sub.count})</span>
                    </button>
                  );
                })}
              </div>

              {(searchQuery || skinSubFilter !== "all") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSkinSubFilter("all");
                  }}
                  className="text-[11px] text-[#A87556] hover:underline font-semibold shrink-0 hidden sm:inline-block"
                >
                  Reset filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ───────────────────────────────────────
          3. CHENNAI CLIMATE DEFENSE FEATURE BOX
          (Rendered for skin-grooming)
      ──────────────────────────────────────── */}
      {selectedCategory === "skin-grooming" && (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-b border-[#DED3C5]/80">
          <div className="max-w-7xl mx-auto bg-[#F6F2EB] rounded-2xl p-6 sm:p-8 border border-[#DED3C5] shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#A87556]">
                  <Droplets className="w-3.5 h-3.5" />
                  <span>The Science of Coastal Skin Defense</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#241E1A] font-medium leading-snug">
                  Formulated to counter Chennai’s humidity, urban pollution, and hard water.
                </h3>
                <p className="text-xs sm:text-sm text-[#68615C] font-sans leading-relaxed">
                  High tropical humidity often masks underlying dehydration—causing pores to overproduce sebum while skin cuticles become parched and dull. Our treatments pair gentle non-acidic ultrasonic cavitation with cryogenic ice-globe lymphatic drainage to purify deep congestion while reinforcing the natural ceramide skin barrier.
                </p>
              </div>

              <div className="lg:col-span-4 bg-[#FAF7F2] p-5 rounded-xl border border-[#DED3C5] space-y-2.5 text-xs font-sans">
                <span className="font-semibold text-[#241E1A] text-sm block">
                  Aurel Dermal Promise:
                </span>
                <div className="flex items-start gap-2 text-[#34302D]">
                  <CheckCircle2 className="w-4 h-4 text-[#A87556] shrink-0 mt-0.5" />
                  <span>Zero harsh chemical bleaches or aggressive abrasions</span>
                </div>
                <div className="flex items-start gap-2 text-[#34302D]">
                  <CheckCircle2 className="w-4 h-4 text-[#A87556] shrink-0 mt-0.5" />
                  <span>Individually sealed sterile disposable applicator tips</span>
                </div>
                <div className="flex items-start gap-2 text-[#34302D]">
                  <CheckCircle2 className="w-4 h-4 text-[#A87556] shrink-0 mt-0.5" />
                  <span>Calming botanical extracts with zero post-facial downtime</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ───────────────────────────────────────
          4. SERVICES GRID
      ──────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F2EB] flex-1">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-24 space-y-4">
              <p className="font-serif text-2xl text-[#241E1A]">
                No services found matching &ldquo;{searchQuery}&rdquo;
              </p>
              <p className="text-sm text-[#68615C] font-sans">
                Try clearing your search query or switching to another category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setSkinSubFilter("all");
                  setSearchParams({});
                }}
                className="mt-2 px-6 py-2 rounded-full bg-[#241E1A] text-[#F6F2EB] text-xs uppercase tracking-wider font-medium"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  id={service.categorySlug}
                  className="group bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#DED3C5] hover:border-[#A87556] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg"
                >
                  <div>
                    {/* Visual Media Container */}
                    <div className="aspect-[16/10] overflow-hidden relative border-b border-[#DED3C5]/60">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <span className="absolute top-3.5 left-3.5 bg-[#241E1A]/85 backdrop-blur-xs text-[#F6F2EB] text-[10px] font-sans uppercase tracking-wider px-3 py-1 rounded-full font-semibold shadow-xs">
                        {service.category}
                      </span>
                    </div>

                    {/* Service Information */}
                    <div className="p-6 sm:p-7 space-y-4">
                      <div>
                        <h2 className="font-serif text-xl sm:text-2xl text-[#241E1A] font-medium group-hover:text-[#A87556] transition-colors leading-snug">
                          <Link to={`/services/${service.slug}`}>
                            {service.name}
                          </Link>
                        </h2>
                        <p className="text-xs sm:text-sm text-[#68615C] font-sans leading-relaxed mt-2">
                          {service.shortDescription}
                        </p>
                      </div>

                      {/* Time and Price Bar */}
                      <div className="flex items-center justify-between text-xs font-sans pt-3 border-t border-[#DED3C5]/60">
                        <span className="flex items-center gap-1.5 text-[#68615C]">
                          <Clock className="w-3.5 h-3.5 text-[#A87556]" />
                          <span>{service.duration}</span>
                        </span>
                        <span className="font-semibold text-sm text-[#241E1A]">
                          {service.isPriceFrom
                            ? `From ${service.startingPrice}`
                            : service.startingPrice}
                        </span>
                      </div>

                      {/* What to expect bullets */}
                      {service.whatToExpect && service.whatToExpect.length > 0 && (
                        <div className="bg-[#F6F2EB] p-3.5 rounded-xl border border-[#DED3C5]/80 space-y-1.5 text-[11px] font-sans text-[#34302D]">
                          <span className="text-[10px] uppercase font-semibold text-[#68615C] block">
                            Key Protocol Highlights:
                          </span>
                          {service.whatToExpect.slice(0, 2).map((item, i) => (
                            <div key={i} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3 h-3 text-[#A87556] shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="p-6 pt-0 border-t border-[#DED3C5]/60 flex items-center justify-between gap-3 mt-4">
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-xs uppercase tracking-wider font-semibold text-[#241E1A] hover:text-[#A87556] transition-colors flex items-center gap-1"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      to={`/book?service=${service.slug}`}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#241E1A] text-[#F6F2EB] text-xs uppercase tracking-wider font-semibold hover:bg-[#A87556] transition-colors shadow-xs"
                    >
                      <span>Book Service</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ───────────────────────────────────────
          5. BOTTOM CONSULTATION BAR
      ──────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#241E1A] text-[#F6F2EB]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-light">
              Not sure which dermal ritual matches your skin?
            </h3>
            <p className="text-xs sm:text-sm text-[#DED3C5]/80 font-sans">
              Book a complimentary 15-minute skin barrier scan with our principal aesthetician in Anna Nagar.
            </p>
          </div>
          <Link
            to="/book?service=consultation"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#A87556] text-[#F6F2EB] text-xs uppercase tracking-widest font-semibold hover:bg-[#BA8B6D] transition-colors shadow-md"
          >
            <span>Book Dermal Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
