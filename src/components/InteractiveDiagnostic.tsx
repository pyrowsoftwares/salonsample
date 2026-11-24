import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Scissors,
  Droplets,
  HeartHandshake,
  RotateCcw,
} from "lucide-react";

interface HairProfile {
  id: string;
  label: string;
  subtitle: string;
}

interface HairGoal {
  id: string;
  label: string;
  subtitle: string;
  icon: string;
}

interface Recommendation {
  title: string;
  subtitle: string;
  duration: string;
  startingPrice: string;
  stylistMatch: string;
  serviceSlug: string;
  description: string;
  steps: string[];
}

const hairProfiles: HairProfile[] = [
  {
    id: "fine-straight",
    label: "Fine & Straight",
    subtitle: "Lacks root volume, gets oily quickly in humidity",
  },
  {
    id: "wavy-frizzy",
    label: "Wavy & Humidity-Frizzy",
    subtitle: "Loss of natural definition, swells in Chennai air",
  },
  {
    id: "curly-coily",
    label: "Curly, Coily or Thick",
    subtitle: "Requires moisture sealing, shape definition & slip",
  },
  {
    id: "color-damaged",
    label: "Bleached / Chemically Treated",
    subtitle: "Porous, brittle ends, brassiness or breakage",
  },
];

const hairGoals: HairGoal[] = [
  {
    id: "balayage",
    label: "Dimensional French Balayage",
    subtitle: "Sun-kissed ribbon highlights with seamless root grow-out",
    icon: "sparkles",
  },
  {
    id: "smoothing",
    label: "Anti-Humidity Silk Keratin",
    subtitle: "Zero formaldehyde, mirror-gloss shine with natural movement",
    icon: "droplets",
  },
  {
    id: "haircut",
    label: "Architectural Precision Cut",
    subtitle: "Weight removal & face-framing calibrated to bone structure",
    icon: "scissors",
  },
  {
    id: "scalp-spa",
    label: "Botanical Scalp Detox & Revival",
    subtitle: "Micro-circulation, follicle exfoliation & lipid replenishment",
    icon: "heart",
  },
];

const recommendationMatrix: Record<string, Record<string, Recommendation>> = {
  "fine-straight": {
    balayage: {
      title: "French Micro-Balayage & Weightless Gloss",
      subtitle: "Creates optical depth & multi-tone dimension without weighing down fine hair.",
      duration: "2.5 – 3 hrs",
      startingPrice: "₹4,200",
      stylistMatch: "Meera Subramanian (Creative Color Specialist)",
      serviceSlug: "french-balayage",
      description: "Delicate baby-lights and surface contouring that add texture and volume, sealed with an acidic gloss toner.",
      steps: [
        "Porosity assessment & scalp protection barrier",
        "Fine foil-free hand painted highlights",
        "Ammonia-free bond-restoring gloss rinse",
        "Weightless thermal blow-out with root lift coaching",
      ],
    },
    smoothing: {
      title: "Lipid Glaze & Express Keratin Infusion",
      subtitle: "Smooths fine-hair frizz without collapsing natural body.",
      duration: "90 mins",
      startingPrice: "₹2,800",
      stylistMatch: "Arjun Venkatesh (Master Stylist)",
      serviceSlug: "keratin-infusion",
      description: "A lightweight protein infusion that seals moisture into cuticles, repelling monsoon humidity while preserving natural bounce.",
      steps: [
        "Deep clarifying wash",
        "Micro-keratin spray infusion under gentle warm mist",
        "Low-temp silk press seal",
        "Finishing dry oil gloss",
      ],
    },
    haircut: {
      title: "Architectural Perimeter & Invisible Layer Cut",
      subtitle: "Creates density at the ends with hidden internal movement.",
      duration: "45–60 mins",
      startingPrice: "₹899",
      stylistMatch: "Arjun Venkatesh (Master Stylist)",
      serviceSlug: "womens-haircut",
      description: "Blunt baseline contouring paired with micro-texturizing to double the visual density of fine hair.",
      steps: [
        "Facial contour & crown whorl analysis",
        "Wet precision scissor-over-comb baseline",
        "Dry point-cutting for airy volume",
        "Round-brush bounce blow-dry",
      ],
    },
    "scalp-spa": {
      title: "Follicle Oxygenation & Volumizing Scalp Therapy",
      subtitle: "Clears sebum buildup around roots to encourage lift and scalp micro-flora balance.",
      duration: "60 mins",
      startingPrice: "₹1,800",
      stylistMatch: "Deepak Kumar (Scalp & Texture Specialist)",
      serviceSlug: "scalp-detox-spa",
      description: "Salicylic acid botanical exfoliation paired with an organic peptide mask to stimulate roots in Chennai heat.",
      steps: [
        "Micro-camera scalp dermatoscope scan",
        "Detox clay & botanical cooling massage (15 mins)",
        "Herbal steam infusion",
        "Cold laser or peptide serum seal",
      ],
    },
  },
  "wavy-frizzy": {
    balayage: {
      title: "Sunlit Caramel Balayage & Olaplex Bond Infusion",
      subtitle: "Contrasting honey and warm mocha ribbons that celebrate natural wave patterns.",
      duration: "3 – 3.5 hrs",
      startingPrice: "₹4,800",
      stylistMatch: "Meera Subramanian (Creative Color Specialist)",
      serviceSlug: "french-balayage",
      description: "Freehand clay lightener applied along natural wave curves so color cascades organically when styled or air-dried.",
      steps: [
        "Wave elasticity test & tone selection",
        "Olaplex No. 1 bond-multiplier lightener application",
        "Customized demi-permanent toner",
        "Wave-diffused luxury blowout",
      ],
    },
    smoothing: {
      title: "Nanoplastia Silk Moisture Treatment",
      subtitle: "The ultimate Chennai humidity antidote. 100% formaldehyde-free smoothing.",
      duration: "2.5 – 3 hrs",
      startingPrice: "₹5,200",
      stylistMatch: "Arjun Venkatesh (Master Stylist)",
      serviceSlug: "keratin-infusion",
      description: "Nanotechnology amino acids penetrate deep into the cortex, transforming frizzy waves into silky, manageable hair for up to 5 months.",
      steps: [
        "Purifying deep hair wash",
        "Amino acid nano-emulsion saturation",
        "Infrared thermal sealing",
        "Nourishing argan barrier wash & silk styling",
      ],
    },
    haircut: {
      title: "Textured Curtain Cut & Wave Sculpting",
      subtitle: "Removes bulk and defines natural bends without triangle-shaped puffiness.",
      duration: "60 mins",
      startingPrice: "₹899",
      stylistMatch: "Arjun Venkatesh (Master Stylist)",
      serviceSlug: "womens-haircut",
      description: "Strategically carved weight distribution that allows waves to fall into romantic, touchable tiers.",
      steps: [
        "Wave shrink-factor consultation",
        "Dry curl mapping before wash",
        "Precision wet silhouette cut",
        "Hydrating curl-cream diffuser finish",
      ],
    },
    "scalp-spa": {
      title: "Ceramide Moisture Shield & Scalp Comfort Spa",
      subtitle: "Hydrates parched hair lengths while soothing sensitive scalps.",
      duration: "60 mins",
      startingPrice: "₹1,900",
      stylistMatch: "Deepak Kumar (Scalp Specialist)",
      serviceSlug: "scalp-detox-spa",
      description: "A nourishing botanical bath infused with plant ceramides and chamomile, calming irritation caused by sweat and hard water.",
      steps: [
        "Scalp hydration diagnostics",
        "Botanical oil soothing acupressure massage",
        "Nano-steam nutrient bath",
        "Cuticle-sealing cold rinse",
      ],
    },
  },
  "curly-coily": {
    balayage: {
      title: "Pintura Curl Highlighting & Moisture Glaze",
      subtitle: "Each curl ribbon hand-painted individually to accentuate spiral dimension.",
      duration: "3.5 hrs",
      startingPrice: "₹5,400",
      stylistMatch: "Meera Subramanian (Creative Color Specialist)",
      serviceSlug: "french-balayage",
      description: "No foils, no pulling. Gentle curl-safe clay lightener painted on curl clusters for a luminous, multi-tonal crown.",
      steps: [
        "Curl pattern identification (3A to 4C)",
        "Pintura hand-painting without disturbing curl clumps",
        "Intensive bond-building deep conditioner mask",
        "Finger-coil styling & slow hood drying",
      ],
    },
    smoothing: {
      title: "Botanical Cysteine Curl Elongation",
      subtitle: "Tames frizz and softens coil tightness while 100% preserving your natural curl pattern.",
      duration: "2 – 2.5 hrs",
      startingPrice: "₹4,200",
      stylistMatch: "Arjun Venkatesh (Master Stylist)",
      serviceSlug: "keratin-infusion",
      description: "Natural sugarcane and cysteine complex that eliminates unruly puffiness without pin-straight stiffness.",
      steps: [
        "Gentle sulfate-free cleanse",
        "Botanical cysteine coat",
        "Gentle heat-activation lock",
        "Moisture butter finish",
      ],
    },
    haircut: {
      title: "Dry 3D Curl Sculpting & Volume Architecture",
      subtitle: "Cut in its natural curl state so you never experience unexpected shrinkage.",
      duration: "60–75 mins",
      startingPrice: "₹999",
      stylistMatch: "Arjun Venkatesh (Master Stylist)",
      serviceSlug: "womens-haircut",
      description: "Every spiral is sculpted dry curl-by-curl according to its natural bounce and facial symmetry.",
      steps: [
        "Dry curl-by-curl shape carving",
        "Sulfate-free hydration cleanse & squish-to-condish",
        "Protein-moisture balance treatment",
        "Cast-forming gel application and diffused dry",
      ],
    },
    "scalp-spa": {
      title: "Ultra-Rich Shea & Murumuru Deep Restoration Spa",
      subtitle: "Deeply quenches thirsty curls from root to tip.",
      duration: "60 mins",
      startingPrice: "₹2,200",
      stylistMatch: "Deepak Kumar (Scalp Specialist)",
      serviceSlug: "scalp-detox-spa",
      description: "Raw Amazonian murumuru butter and organic argan lipids infused under warm mist to restore elasticity to tight curls.",
      steps: [
        "Scalp tension release massage",
        "Warm butter and oil application from roots to tips",
        "Micro-mist hydration canopy (20 mins)",
        "Leave-in silk conditioner lock",
      ],
    },
  },
  "color-damaged": {
    balayage: {
      title: "Corrective Bond Glaze & Melt Refresh",
      subtitle: "Neutralizes unwanted orange/yellow brassiness and rebuilds broken disulphide bonds.",
      duration: "2 hrs",
      startingPrice: "₹3,400",
      stylistMatch: "Meera Subramanian (Creative Color Specialist)",
      serviceSlug: "french-balayage",
      description: "Gentle low-pH color glossing enriched with Olaplex No. 1 & 2 that restores rich tonality and mirror-like shine.",
      steps: [
        "Elasticity & tensile pull test",
        "Olaplex Stand-Alone intense bond rebuild",
        "Acidic demi-permanent toning melt",
        "Heat-shield silk blow-dry",
      ],
    },
    smoothing: {
      title: "Molecular K18 & Nanoplastia Rescue Infusion",
      subtitle: "Rebuilds keratin chains broken by bleach, smoothing porous hair without heat trauma.",
      duration: "2 hrs",
      startingPrice: "₹4,500",
      stylistMatch: "Arjun Venkatesh (Master Stylist)",
      serviceSlug: "keratin-infusion",
      description: "Patented bioactive peptide treatment that permanently connects broken keratin chains, followed by a light humidity-resistant seal.",
      steps: [
        "Chelating detox to remove mineral/hard-water buildup",
        "K18 Peptide molecular leave-in mist",
        "Mild restorative nanoplastia seal at safe temperatures",
        "Ultra-soft silk finish",
      ],
    },
    haircut: {
      title: "Split-End Resection & Healthy Growth Reset",
      subtitle: "Clears brittle split ends while maintaining as much length as possible.",
      duration: "45 mins",
      startingPrice: "₹899",
      stylistMatch: "Arjun Venkatesh (Master Stylist)",
      serviceSlug: "womens-haircut",
      description: "Precision dusting and perimeter clean-up that stops split ends from traveling up the hair shaft.",
      steps: [
        "Damage boundary mapping under studio light",
        "Micro-dusting technique to preserve length",
        "Perimeter strengthening cut",
        "Argan seal finish",
      ],
    },
    "scalp-spa": {
      title: "Stem-Cell Scalp & Keratin Bond Emergency Spa",
      subtitle: "Intensive rescue for sensitized scalps and severely bleached lengths.",
      duration: "75 mins",
      startingPrice: "₹2,600",
      stylistMatch: "Deepak Kumar (Scalp Specialist)",
      serviceSlug: "scalp-detox-spa",
      description: "Combines plant stem-cell scalp serum with concentrated amino acid infusions to calm bleach irritation and rebuild fiber strength.",
      steps: [
        "Scalp redness and sensitivity scan",
        "Calming aloe-vera & tea tree barrier application",
        "Intensive amino acid bond mask under infrared warmth",
        "Cold peptide spray lock",
      ],
    },
  },
};

export function InteractiveDiagnostic() {
  const [selectedProfile, setSelectedProfile] = useState<string>("wavy-frizzy");
  const [selectedGoal, setSelectedGoal] = useState<string>("smoothing");

  const recommendation =
    recommendationMatrix[selectedProfile]?.[selectedGoal] ||
    recommendationMatrix["wavy-frizzy"]["smoothing"];

  return (
    <section
      id="hair-diagnostic"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#241E1A] text-[#F6F2EB] relative overflow-hidden"
    >
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#A87556]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#DED3C5]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#34302D] text-[#A87556] text-xs font-sans uppercase tracking-[0.25em] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Consultation Tool</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F6F2EB] font-normal leading-tight">
            Find Your Ideal Salon Ritual in <span className="italic font-light text-[#DED3C5]">30 Seconds</span>
          </h2>
          <p className="text-sm sm:text-base text-[#DED3C5]/80 font-sans max-w-2xl mx-auto leading-relaxed">
            Inspired by TONI&amp;GUY diagnostic methodology. Select your current hair profile and desired outcome to receive our resident specialists&apos; custom formula recommendation.
          </p>
        </div>

        {/* Diagnostic Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step 1 & 2 Selectors (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Hair Profile */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#A87556]">
                  01 // Step One: Your Natural Hair Biology
                </span>
                <span className="text-[11px] text-[#DED3C5]/60 font-sans">
                  Select 1 option
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {hairProfiles.map((profile) => {
                  const isSelected = selectedProfile === profile.id;
                  return (
                    <button
                      key={profile.id}
                      type="button"
                      onClick={() => setSelectedProfile(profile.id)}
                      className={`text-left p-4 rounded-xl border transition-all duration-200 relative ${
                        isSelected
                          ? "bg-[#34302D] border-[#A87556] shadow-md ring-1 ring-[#A87556]"
                          : "bg-[#2A231F] border-[#34302D] hover:border-[#DED3C5]/40"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="font-serif text-base text-[#F6F2EB] font-medium">
                          {profile.label}
                        </span>
                        {isSelected && (
                          <CheckCircle2 className="w-4 h-4 text-[#A87556] shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-[#DED3C5]/70 font-sans mt-1">
                        {profile.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Desired Goal */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#A87556]">
                  02 // Step Two: Your Desired Transformation
                </span>
                <span className="text-[11px] text-[#DED3C5]/60 font-sans">
                  Select 1 goal
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {hairGoals.map((goal) => {
                  const isSelected = selectedGoal === goal.id;
                  return (
                    <button
                      key={goal.id}
                      type="button"
                      onClick={() => setSelectedGoal(goal.id)}
                      className={`text-left p-4 rounded-xl border transition-all duration-200 relative ${
                        isSelected
                          ? "bg-[#34302D] border-[#A87556] shadow-md ring-1 ring-[#A87556]"
                          : "bg-[#2A231F] border-[#34302D] hover:border-[#DED3C5]/40"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="font-serif text-base text-[#F6F2EB] font-medium">
                          {goal.label}
                        </span>
                        {isSelected && (
                          <CheckCircle2 className="w-4 h-4 text-[#A87556] shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-[#DED3C5]/70 font-sans mt-1">
                        {goal.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Step 3: Recommendation Result Card (Right 5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF7F2] text-[#241E1A] rounded-2xl p-6 sm:p-8 border border-[#DED3C5] shadow-2xl space-y-6 sticky top-24">
              <div className="flex items-center justify-between border-b border-[#DED3C5] pb-4">
                <div>
                  <span className="text-[11px] uppercase tracking-widest font-bold text-[#A87556]">
                    Tailored Match
                  </span>
                  <p className="text-xs text-[#68615C] font-sans">
                    Based on your consultation choices
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProfile("wavy-frizzy");
                    setSelectedGoal("smoothing");
                  }}
                  className="text-xs text-[#68615C] hover:text-[#241E1A] flex items-center gap-1 font-sans"
                  title="Reset selections"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Title & Core Details */}
              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#241E1A] leading-snug">
                  {recommendation.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A87556] font-semibold">
                  {recommendation.subtitle}
                </p>
                <p className="text-xs text-[#34302D]/90 font-sans leading-relaxed pt-1">
                  {recommendation.description}
                </p>
              </div>

              {/* Metrics Pill Grid */}
              <div className="grid grid-cols-2 gap-3 py-2 border-y border-[#DED3C5]/80 text-xs font-sans">
                <div className="bg-[#F6F2EB] p-2.5 rounded-lg border border-[#DED3C5]">
                  <span className="text-[10px] uppercase text-[#68615C] block font-semibold">
                    Estimated Time
                  </span>
                  <span className="font-semibold text-[#241E1A] text-sm">
                    {recommendation.duration}
                  </span>
                </div>
                <div className="bg-[#F6F2EB] p-2.5 rounded-lg border border-[#DED3C5]">
                  <span className="text-[10px] uppercase text-[#68615C] block font-semibold">
                    Starting Investment
                  </span>
                  <span className="font-semibold text-[#241E1A] text-sm">
                    {recommendation.startingPrice}
                  </span>
                </div>
              </div>

              {/* Specialist & Steps */}
              <div className="space-y-3">
                <div className="text-xs font-sans">
                  <span className="text-[#68615C] block text-[11px] font-semibold uppercase">
                    Recommended Artist
                  </span>
                  <p className="font-medium text-[#241E1A]">{recommendation.stylistMatch}</p>
                </div>

                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#68615C] font-semibold block">
                    What This Ritual Includes:
                  </span>
                  {recommendation.steps.map((st, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#34302D]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A87556] shrink-0 mt-0.5" />
                      <span>{st}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2.5">
                <Link
                  to={`/book?service=${recommendation.serviceSlug}&from=diagnostic`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#241E1A] text-[#F6F2EB] text-xs uppercase tracking-widest font-semibold hover:bg-[#A87556] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span>Book This Recommended Ritual</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to={`/services/${recommendation.serviceSlug}`}
                  className="w-full text-center text-xs text-[#68615C] hover:text-[#241E1A] underline font-sans py-1"
                >
                  View full ritual specifications &amp; aftercare &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
