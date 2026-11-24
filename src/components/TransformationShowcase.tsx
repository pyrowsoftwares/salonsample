import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  Clock,
  ShieldCheck,
  User,
  Sliders,
  CheckCircle2,
  Split,
  Eye,
} from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

interface TransformationCase {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  beforeImage: string;
  afterImage: string;
  beforeCaption: string;
  afterCaption: string;
  duration: string;
  technique: string;
  productsUsed: string;
  artist: string;
  serviceSlug: string;
  quote: string;
}

const transformationCases: TransformationCase[] = [
  {
    id: "balayage-melt",
    category: "Couture Hair Colour",
    title: "Over-Processed Regrowth to Sunlit French Balayage",
    subtitle: "Diffused root melt with caramel ribbons & icy gloss",
    beforeImage: "https://images.pexels.com/photos/6270123/pexels-photo-6270123.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=1000",
    afterImage: "https://images.pexels.com/photos/7752412/pexels-photo-7752412.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=1000",
    beforeCaption: "Natural dark brunette baseline with uneven brassy demarcation lines.",
    afterCaption: "Seamless, multi-dimensional hand-painted caramel ribbons with mirror shine.",
    duration: "3.5 Hours",
    technique: "Freehand Clay Balayage + Acidic Shadow Root + Bond Glaze",
    productsUsed: "Olaplex No. 1 & No. 2 + Ammonia-free French Gloss Toner",
    artist: "Meera Subramanian (Creative Color Specialist)",
    serviceSlug: "french-balayage",
    quote: "My natural dark hair grew out with zero harsh demarcation lines even after 4 months.",
  },
  {
    id: "nanoplastia-silk",
    category: "Anti-Humidity Texture",
    title: "Chennai Humidity Frizz to Liquid Silk Fall",
    subtitle: "Zero formaldehyde nanoplastia with weightless bounce",
    beforeImage: "https://images.pexels.com/photos/33607400/pexels-photo-33607400.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=1000",
    afterImage: "https://images.pexels.com/photos/17320162/pexels-photo-17320162.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=1000",
    beforeCaption: "Porous cuticle layer with intense swelling and rebellion in coastal humidity.",
    afterCaption: "Sealed cuticle reflecting pure glass light, natural swing and volume preserved.",
    duration: "2.5 Hours",
    technique: "Amino Acid Nanocrystallization & Thermal Infrared Seal",
    productsUsed: "Organic Bio-Silk Keratin Infusion (100% Formaldehyde Free)",
    artist: "Arjun Venkatesh (Master Stylist)",
    serviceSlug: "keratin-infusion",
    quote: "I can step directly into Chennai outdoor humidity with zero puffiness. Hair dries silky smooth naturally.",
  },
  {
    id: "muhurtham-bridal",
    category: "Bridal Architecture",
    title: "Everyday Curls to Royal Muhurtham Elegance",
    subtitle: "Sculpted poola jada, jasmine architecture & dewy skin",
    beforeImage: "https://images.pexels.com/photos/11555705/pexels-photo-11555705.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=1000",
    afterImage: "https://images.pexels.com/photos/12708653/pexels-photo-12708653.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=1000",
    beforeCaption: "Client in pre-ceremony consultation robe with bare skin and unstyled hair.",
    afterCaption: "Sculpted heritage braid adorned with fresh veni, temple gold & 14-hour dewy base.",
    duration: "4.0 Hours",
    technique: "Architectural Braid Architecture + High-Definition Waterproof Base",
    productsUsed: "Charlotte Tilbury Airbrush + Fresh Madurai Malli & Temple Accents",
    artist: "Kavitha Rajan (Principal Bridal Artist)",
    serviceSlug: "bridal",
    quote: "My hair and makeup stayed fresh through the early morning Muhurtham ceremonies and afternoon reception.",
  },
  {
    id: "mens-taper",
    category: "Men’s Grooming",
    title: "Overgrown Bulk to Precision Razor Taper",
    subtitle: "Architectural scissor crown & crisp beard contour",
    beforeImage: "https://images.pexels.com/photos/11800909/pexels-photo-11800909.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=1000",
    afterImage: "https://images.pexels.com/photos/9992819/pexels-photo-9992819.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=1000",
    beforeCaption: "Heavy overgrown sides, undefined neckline, and loose beard perimeter.",
    afterCaption: "Clean low-skin taper fade, textured scissor crown & razor line-up.",
    duration: "45 Minutes",
    technique: "Scissor-Over-Comb Graduation + Foil Razor Detailing",
    productsUsed: "Organic Tea Tree Scalp Tonic + Matte Clay Pomade",
    artist: "Deepak Kumar (Men’s Grooming Specialist)",
    serviceSlug: "mens-haircut",
    quote: "The low fade grows out clean for over 3 weeks. Precision cutting at its finest.",
  },
];

export function TransformationShowcase() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"split" | "after" | "before">("split");

  const currentCase = transformationCases[activeTab];

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-y border-[#DED3C5]/80">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DED3C5] pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2D8] text-[#241E1A] text-xs font-sans uppercase tracking-[0.25em] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#A87556]" />
              <span>Real Transformations</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#241E1A] leading-tight">
              Before &amp; After: <span className="italic font-light text-[#A87556]">Signature Results</span>
            </h2>
            <p className="text-sm sm:text-base text-[#68615C] font-sans max-w-2xl leading-relaxed">
              Explore documented transformations from our Anna Nagar chairs. Every treatment prioritizes biological hair integrity and long-term hair health.
            </p>
          </div>

          {/* View Mode Toggle Controls */}
          <div className="flex items-center gap-1.5 bg-[#EAE2D8] p-1.5 rounded-full text-xs font-sans shrink-0">
            <button
              type="button"
              onClick={() => setViewMode("split")}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all ${
                viewMode === "split"
                  ? "bg-[#241E1A] text-[#F6F2EB] shadow-xs font-semibold"
                  : "text-[#241E1A] hover:text-[#A87556]"
              }`}
            >
              <Split className="w-3.5 h-3.5" />
              <span>Side-by-Side</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("before")}
              className={`px-3 py-1.5 rounded-full transition-all ${
                viewMode === "before"
                  ? "bg-[#241E1A] text-[#F6F2EB] shadow-xs font-semibold"
                  : "text-[#241E1A] hover:text-[#A87556]"
              }`}
            >
              Before Only
            </button>
            <button
              type="button"
              onClick={() => setViewMode("after")}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full transition-all ${
                viewMode === "after"
                  ? "bg-[#241E1A] text-[#F6F2EB] shadow-xs font-semibold"
                  : "text-[#241E1A] hover:text-[#A87556]"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Finished Look</span>
            </button>
          </div>
        </div>

        {/* Case Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {transformationCases.map((c, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs font-sans uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-[#241E1A] text-[#F6F2EB] shadow-sm ring-1 ring-[#241E1A]"
                    : "bg-[#F6F2EB] text-[#241E1A] hover:bg-[#EAE2D8] border border-[#DED3C5]"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#A87556]" />
                <span>{c.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Case Display Card */}
        <div className="bg-[#F6F2EB] rounded-3xl border border-[#DED3C5] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-center">
          {/* Visual Showcase (7 Cols) */}
          <div className="lg:col-span-7">
            {viewMode === "split" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Before Card */}
                <div className="space-y-2">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-[#DED3C5] relative shadow-xs">
                    <ImageWithFallback
                      src={currentCase.beforeImage}
                      alt={`Before: ${currentCase.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#241E1A]/90 backdrop-blur-xs text-[#F6F2EB] text-[10px] uppercase font-sans tracking-widest px-3 py-1 rounded-full font-semibold">
                        Before (Baseline)
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[#68615C] font-sans italic leading-relaxed">
                    {currentCase.beforeCaption}
                  </p>
                </div>

                {/* After Card */}
                <div className="space-y-2">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#A87556] relative shadow-md">
                    <ImageWithFallback
                      src={currentCase.afterImage}
                      alt={`After: ${currentCase.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#A87556] text-[#F6F2EB] text-[10px] uppercase font-sans tracking-widest px-3 py-1 rounded-full font-semibold shadow-xs">
                        Finished Look (After)
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[#241E1A] font-sans font-medium leading-relaxed">
                    {currentCase.afterCaption}
                  </p>
                </div>
              </div>
            ) : (
              <div className="relative aspect-[16/11] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-[#DED3C5] shadow-lg group">
                <ImageWithFallback
                  src={
                    viewMode === "before"
                      ? currentCase.beforeImage
                      : currentCase.afterImage
                  }
                  alt={currentCase.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`text-xs uppercase font-sans tracking-widest px-3.5 py-1.5 rounded-full font-semibold shadow-md ${
                      viewMode === "before"
                        ? "bg-[#241E1A] text-[#F6F2EB]"
                        : "bg-[#A87556] text-[#F6F2EB]"
                    }`}
                  >
                    {viewMode === "before" ? "Client Baseline (Before)" : "Aurel Result (Finished)"}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-[#241E1A]/85 backdrop-blur-xs text-[#F6F2EB] p-3 sm:p-4 rounded-xl text-xs font-sans">
                  <p>
                    {viewMode === "before"
                      ? currentCase.beforeCaption
                      : currentCase.afterCaption}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Technical Case Notes (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#A87556]">
                {currentCase.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#241E1A] font-medium mt-1 leading-snug">
                {currentCase.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#68615C] font-sans mt-1">
                {currentCase.subtitle}
              </p>
            </div>

            {/* Technical Spec Box */}
            <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-2xl border border-[#DED3C5] space-y-3 text-xs font-sans">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#A87556] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase text-[#68615C] block font-semibold">
                    Chair Duration
                  </span>
                  <p className="font-semibold text-[#241E1A]">{currentCase.duration}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-[#DED3C5]/60">
                <Sliders className="w-4 h-4 text-[#A87556] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase text-[#68615C] block font-semibold">
                    Technique Calibrated
                  </span>
                  <p className="font-semibold text-[#241E1A]">{currentCase.technique}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-[#DED3C5]/60">
                <ShieldCheck className="w-4 h-4 text-[#A87556] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase text-[#68615C] block font-semibold">
                    Bond Multipliers &amp; Clean Formulas
                  </span>
                  <p className="text-[#34302D]">{currentCase.productsUsed}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-[#DED3C5]/60">
                <User className="w-4 h-4 text-[#A87556] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase text-[#68615C] block font-semibold">
                    Lead Artist
                  </span>
                  <p className="font-semibold text-[#A87556]">{currentCase.artist}</p>
                </div>
              </div>
            </div>

            {/* Client Feedback Quote */}
            <blockquote className="border-l-2 border-[#A87556] pl-4 italic font-serif text-sm text-[#34302D]">
              &ldquo;{currentCase.quote}&rdquo;
            </blockquote>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to={`/book?service=${currentCase.serviceSlug}&from=transformation`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#241E1A] text-[#F6F2EB] text-xs uppercase tracking-widest font-semibold hover:bg-[#A87556] transition-all shadow-sm"
              >
                <span>Book This Transformation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to={`/services/${currentCase.serviceSlug}`}
                className="inline-flex items-center gap-1.5 text-xs text-[#241E1A] hover:text-[#A87556] uppercase tracking-wider font-semibold"
              >
                <span>Full Details</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
