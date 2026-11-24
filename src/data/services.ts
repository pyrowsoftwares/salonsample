export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  startingPrice: string;
  isPriceFrom: boolean;
  duration: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  suitableFor: string[];
  whatToExpect: string[];
  aftercareTips?: string[];
  faqs: { question: string; answer: string }[];
}

export interface ServiceCategory {
  id: string;
  slug: string;
  name: string;
  shortName?: string;
  tagline: string;
  description: string;
  heroImage: string;
  services: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "haircuts-styling",
    slug: "haircuts-styling",
    name: "Haircuts & Architecture",
    shortName: "Haircuts",
    tagline: "Precision geometric cutting calibrated to your bone structure and natural hair density.",
    description: "Every cut begins with a dedicated face-shape, hair texture, and daily lifestyle consultation to create a contemporary, effortless silhouette.",
    heroImage: "https://images.pexels.com/photos/8834098/pexels-photo-8834098.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=1200&h=750",
    services: [
      {
        id: "womens-haircut",
        slug: "womens-haircut",
        name: "Women’s Signature Architectural Cut",
        category: "Haircuts & Styling",
        categorySlug: "haircuts-styling",
        startingPrice: "₹899",
        isPriceFrom: true,
        duration: "45–60 mins",
        shortDescription: "Tailored precision cut, scalp wash, and customized blow-dry finished to your bone structure.",
        fullDescription: "Our signature women's haircut is an architectural, consultation-first experience. We examine your natural hair growth patterns, density, and everyday styling routine to build shape, volume, and movement that stays fresh between visits.",
        image: "https://images.pexels.com/photos/3356170/pexels-photo-3356170.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=500",
        suitableFor: ["Fine to coarse textures", "Curated layered looks", "Effortless bobs and long cascades", "Regular silhouette maintenance"],
        whatToExpect: [
          "10-minute one-on-one style and texture diagnosis",
          "Relaxing hair wash and scalp massage with botanical cleansers",
          "Wet precision cutting followed by dry texture calibration",
          "Custom blow-out and styling guidance for home maintenance"
        ],
        aftercareTips: [
          "Wash with a sulphate-free gentle shampoo 2–3 times weekly",
          "Apply light heat protectant serum before blow-drying",
          "Schedule a maintenance trim every 6–8 weeks"
        ],
        faqs: [
          { question: "Does this include a hair wash and blow-dry?", answer: "Yes, every haircut appointment includes a thorough hair wash and customized finishing blow-dry." },
          { question: "Can I bring photo references?", answer: "We encourage reference images! Your stylist will discuss how to adapt the look to your unique hair density and facial profile." }
        ]
      },
      {
        id: "mens-haircut",
        slug: "mens-haircut",
        name: "Men’s Precision Scissor & Taper Cut",
        category: "Haircuts & Styling",
        categorySlug: "haircuts-styling",
        startingPrice: "₹499",
        isPriceFrom: true,
        duration: "30–45 mins",
        shortDescription: "Clean scissor-over-comb and clipper detailing with a refreshing wash and tailored finish.",
        fullDescription: "Sharp lines, seamless fades, and textured crowns. Designed for modern professionals seeking clean silhouettes and effortless day-to-day upkeep.",
        image: "https://images.pexels.com/photos/9992819/pexels-photo-9992819.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=500",
        suitableFor: ["Classic scissor work", "Modern tapers and fades", "Textured crops", "Business grooming"],
        whatToExpect: [
          "Consultation to match hairline and facial contours",
          "Precision cutting and neck tapering",
          "Soothing rinse and hot towel clean-up",
          "Matte pomade or tonic application with styling tips"
        ],
        aftercareTips: ["Maintain shape with a fresh cut every 3–4 weeks."],
        faqs: [
          { question: "Do you offer beard trims along with haircuts?", answer: "Yes, you can pair your haircut with our Beard Detailing ritual." }
        ]
      },
      {
        id: "wash-blow-dry",
        slug: "wash-blow-dry",
        name: "Sensory Wash & Blow-Dry",
        category: "Haircuts & Styling",
        categorySlug: "haircuts-styling",
        startingPrice: "₹699",
        isPriceFrom: true,
        duration: "35–45 mins",
        shortDescription: "Deep scalp cleanse followed by a voluminous, glossy blowout tailored for day or evening.",
        fullDescription: "A rejuvenating sensory wash paired with round-brush blowouts. Choose between sleek glass hair, bouncy Hollywood waves, or natural textured volume.",
        image: "https://images.pexels.com/photos/8834048/pexels-photo-8834048.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=500",
        suitableFor: ["Special meetings", "Evenings out", "Post-work refresh", "Quick confidence lift"],
        whatToExpect: ["Invigorating dual-cleanse wash", "Conditioning treatment", "Blowout styling with round thermal brushes"],
        faqs: [
          { question: "How long will the blowout hold?", answer: "Typically 2 to 3 days depending on climate humidity and your scalp type." }
        ]
      },
      {
        id: "occasion-hairstyling",
        slug: "occasion-hairstyling",
        name: "Occasion Hairstyling & Updos",
        category: "Haircuts & Styling",
        categorySlug: "haircuts-styling",
        startingPrice: "₹1,499",
        isPriceFrom: true,
        duration: "60 mins",
        shortDescription: "Intricate updos, textured ponytails, or red-carpet waves crafted for memorable events.",
        fullDescription: "From modern minimalist chignons to voluminous textured curls, our occasion styling creates enduring silhouettes that withstand celebrations and photography.",
        image: "https://images.pexels.com/photos/19764064/pexels-photo-19764064.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=500",
        suitableFor: ["Cocktails & galas", "Festive family gatherings", "Editorial photo sessions"],
        whatToExpect: ["Texture prep and thermal setting", "Sculpting, pin work, and finishing hold spray"],
        faqs: [
          { question: "Should I arrive with freshly washed hair?", answer: "Clean, dry hair washed the evening before or morning of provides the ideal texture grip." }
        ]
      },
      {
        id: "beard-styling",
        slug: "beard-styling",
        name: "Beard Sculpting & Hot Towel Treatment",
        category: "Haircuts & Styling",
        categorySlug: "haircuts-styling",
        startingPrice: "₹299",
        isPriceFrom: true,
        duration: "20–30 mins",
        shortDescription: "Crisp outline definition, clipper length gradation, and conditioning beard elixir.",
        fullDescription: "Carefully calibrated beard sculpting to flatter your jawline. Finished with warm towel therapy and nourishing botanical beard oil.",
        image: "https://images.pexels.com/photos/32329615/pexels-photo-32329615.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=500",
        suitableFor: ["Stubble maintenance", "Full beard shaping", "Mustache definition"],
        whatToExpect: ["Trimming to desired length gradient", "Razor-sharp cheek and neckline edging", "Hydrating oil massage"],
        faqs: [
          { question: "Is hot towel treatment included?", answer: "Yes, to soften facial hair and soothe sensitive neck skin." }
        ]
      }
    ]
  },
  {
    id: "hair-colour",
    slug: "hair-colour",
    name: "Tonal Mastery & Balayage",
    shortName: "Color & Balayage",
    tagline: "Dimensional tone, luminous reflections, and deep respect for hair integrity.",
    description: "Using world-class ammonia-conscious formulas, our colour specialists craft nuanced hues that grow out seamlessly and maintain natural gloss.",
    heroImage: "https://images.pexels.com/photos/14730864/pexels-photo-14730864.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=1200&h=750",
    services: [
      {
        id: "balayage",
        slug: "balayage",
        name: "Artisan French Balayage",
        category: "Hair Colour",
        categorySlug: "hair-colour",
        startingPrice: "₹5,999",
        isPriceFrom: true,
        duration: "180–240 mins",
        shortDescription: "Freehand hand-painted French balayage for soft, multi-dimensional, low-maintenance lightness.",
        fullDescription: "Our signature colour discipline. We hand-paint ribbons of light where the sun naturally hits your hair. Creates an organic, diffused transition with no harsh regrowth lines, allowing 4 to 6 months of effortless wear.",
        image: "https://images.pexels.com/photos/7752412/pexels-photo-7752412.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=500",
        suitableFor: ["First-time colour clients", "Low-maintenance lifestyles", "Sun-kissed caramel, mocha, and honey tones"],
        whatToExpect: [
          "Detailed consultation assessing skin undertone and hair porosity",
          "Hand-painted precision placement using bond-protecting lighteners",
          "Gloss toner bath to neutralize brass and impart mirror shine",
          "Deep restorative mask and signature blowout"
        ],
        aftercareTips: [
          "Wait 48 hours before the first wash",
          "Use colour-safe, sulphate-free shampoo and cool water",
          "Book a gloss refresh at the 8-week mark to maintain tonal richness"
        ],
        faqs: [
          { question: "Will balayage damage my hair?", answer: "We incorporate bond-building plex technology directly into every lightening step to protect structural disulfide bonds." },
          { question: "How often will I need touch-ups?", answer: "Because balayage is diffused at the root, clients enjoy 4 to 6 months between full appointments." }
        ]
      },
      {
        id: "global-hair-colour",
        slug: "global-hair-colour",
        name: "Global Radiant Colour",
        category: "Hair Colour",
        categorySlug: "hair-colour",
        startingPrice: "₹3,499",
        isPriceFrom: true,
        duration: "90–120 mins",
        shortDescription: "Rich, seamless root-to-tip colour infusion with deep shine and complete grey coverage.",
        fullDescription: "A luxurious single-process colour tailored to your complexion. From velvety espresso and mahogany to rich copper and hazelnut.",
        image: "https://images.pexels.com/photos/6568231/pexels-photo-6568231.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=500",
        suitableFor: ["Complete tone transformations", "Flawless grey coverage", "Deepening natural tones"],
        whatToExpect: ["Custom shade blending", "Even root-to-tip application", "Conditioning rinse and colour lock treatment"],
        faqs: [
          { question: "Does global colour cover 100% grey hair?", answer: "Yes, our formulation is calibrated specifically for opaque, luminous grey coverage." }
        ]
      },
      {
        id: "highlights",
        slug: "highlights",
        name: "Dimensional Foil Highlights",
        category: "Hair Colour",
        categorySlug: "hair-colour",
        startingPrice: "₹2,999",
        isPriceFrom: true,
        duration: "120–150 mins",
        shortDescription: "Precision micro-foiling or classic weaving to introduce brightness, contrast, and depth.",
        fullDescription: "Fine foil work designed to add sparkling contrasts and dimension throughout your crown and face-framing perimeter.",
        image: "https://images.pexels.com/photos/29555682/pexels-photo-29555682.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=500",
        suitableFor: ["Adding lightness around the face", "Creating multi-tonal depth", "Blending early greys"],
        whatToExpect: ["Weave or slice foil placement", "Gentle lift monitoring", "Neutralising gloss tone"],
        faqs: [
          { question: "Can I do partial face-framing foils?", answer: "Yes, our stylists can focus on face-framing 'money piece' foils or crown placements." }
        ]
      },
      {
        id: "root-touch-up",
        slug: "root-touch-up",
        name: "Root Touch-Up & Regrowth Blending",
        category: "Hair Colour",
        categorySlug: "hair-colour",
        startingPrice: "₹1,499",
        isPriceFrom: true,
        duration: "60 mins",
        shortDescription: "Precise regrowth colour matching up to 1.5 inches of new hair growth.",
        fullDescription: "Seamlessly blends your regrowth with existing mid-lengths and ends, restoring a fresh, unified appearance.",
        image: "https://images.pexels.com/photos/6270123/pexels-photo-6270123.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=500",
        suitableFor: ["Monthly grey regrowth maintenance", "Base shade upkeep"],
        whatToExpect: ["Accurate shade matching", "Clean scalp application", "Emulsification wash"],
        faqs: [
          { question: "How often should I touch up roots?", answer: "Typically every 4 to 6 weeks depending on hair growth rate." }
        ]
      }
    ]
  },
  {
    id: "hair-care",
    slug: "hair-care",
    name: "Trichology & Restorative Care",
    shortName: "Hair & Scalp Spa",
    tagline: "Restorative clinical wellness rituals that revive hair vitality from the root.",
    description: "Deep conditioning therapies and smoothing treatments designed to combat frizz, humidity, and chemical wear while strengthening hair cuticle health.",
    heroImage: "https://images.pexels.com/photos/7755473/pexels-photo-7755473.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=750",
    services: [
      {
        id: "keratin-treatment",
        slug: "keratin-treatment",
        name: "Advanced Keratin Infusion & Anti-Frizz",
        category: "Hair & Scalp Care",
        categorySlug: "hair-care",
        startingPrice: "₹4,999",
        isPriceFrom: true,
        duration: "150–210 mins",
        shortDescription: "Intensive keratin protein realignment to eliminate humidity frizz and restore mirror gloss.",
        fullDescription: "Chennai's coastal humidity is demanding on textured hair. Our advanced keratin treatment seals the outer cuticle layer with natural bio-keratins, cutting blow-dry time in half and delivering smooth, lustrous, manageable hair for months.",
        image: "https://images.pexels.com/photos/17320162/pexels-photo-17320162.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=500",
        suitableFor: ["Frizz-prone and rebellious hair", "Weather-sensitive curls", "Chemically damaged mid-lengths"],
        whatToExpect: [
          "Deep clarifying cleanse to open cuticle receptors",
          "Meticulous section-by-section keratin application",
          "Controlled thermal sealing with titanium irons",
          "Detailed aftercare schedule"
        ],
        aftercareTips: [
          "Use sulphate-free and sodium chloride-free shampoo exclusively",
          "Avoid tying or tucking hair for the initial 48 hours",
          "Sleep on a silk pillowcase for extended smoothness"
        ],
        faqs: [
          { question: "Will this completely straighten my hair?", answer: "Keratin relaxes curl patterns and eliminates frizz while preserving natural bounce and volume, unlike harsh rebonding." }
        ]
      },
      {
        id: "hair-smoothening",
        slug: "hair-smoothening",
        name: "Silk Protein Hair Smoothening",
        category: "Hair & Scalp Care",
        categorySlug: "hair-care",
        startingPrice: "₹4,499",
        isPriceFrom: true,
        duration: "180 mins",
        shortDescription: "Gentle realignment formula providing sleek, naturally straight, fluid movement.",
        fullDescription: "A gentle smoothing solution that tames coarse texture into silky, touchable straight hair with lasting manageability.",
        image: "https://images.pexels.com/photos/13469411/pexels-photo-13469411.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=500",
        suitableFor: ["Coarse, wavy, or unruly hair", "Those seeking a sleek, polished everyday look"],
        whatToExpect: ["Texture diagnosis", "Smoothening cream infusion", "Thermal press and neutralizing bath"],
        faqs: [
          { question: "How long does silk smoothening last?", answer: "Generally 3 to 5 months with recommended sulphate-free care." }
        ]
      },
      {
        id: "hair-spa",
        slug: "hair-spa",
        name: "Nourishing Botanical Scalp Spa",
        category: "Hair & Scalp Care",
        categorySlug: "hair-care",
        startingPrice: "₹1,299",
        isPriceFrom: true,
        duration: "45–60 mins",
        shortDescription: "Acupressure scalp massage with essential oils, warm steam infusion, and deep mask.",
        fullDescription: "A tranquil sanctuary ritual. Combines concentrated essential plant extracts with an extended scalp reflexology massage to stimulate microcirculation and deeply hydrate stressed strands.",
        image: "https://images.pexels.com/photos/8834048/pexels-photo-8834048.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=500",
        suitableFor: ["Dry or brittle hair", "Stressed scalps", "Mental relaxation"],
        whatToExpect: ["Customized ampoule selection", "15-minute scalp reflexology massage", "Micro-steam hydration", "Conditioning rinse"],
        faqs: [
          { question: "Can I combine hair spa with a haircut?", answer: "Absolutely, it is one of our most popular revitalising combinations." }
        ]
      },
      {
        id: "deep-conditioning",
        slug: "deep-conditioning",
        name: "Deep Lipid Conditioning Masque",
        category: "Hair & Scalp Care",
        categorySlug: "hair-care",
        startingPrice: "₹999",
        isPriceFrom: true,
        duration: "30 mins",
        shortDescription: "Intense lipid and moisture replenishment for instant elasticity and velvet softness.",
        fullDescription: "Concentrated lipid therapy to quench thirsty hair cuticles, ideal as an add-on to any haircut or blowout service.",
        image: "https://images.pexels.com/photos/39559306/pexels-photo-39559306.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=500",
        suitableFor: ["Sun-exposed hair", "Dry ends", "Quick hair boost"],
        whatToExpect: ["Rich lipid cream application", "Warm towel wrap", "Detangling cool rinse"],
        faqs: [
          { question: "Is this suitable for colored hair?", answer: "Yes, it protects and locks in colour pigments." }
        ]
      }
    ]
  },
  {
    id: "skin-grooming",
    slug: "skin-grooming",
    name: "Dermal Aesthetics & Skin Lounge",
    shortName: "Skin & Facials",
    tagline: "Cellular renewal, non-invasive oxygen infusions, and barrier defense formulated for Chennai’s tropical urban climate.",
    description: "From clarifying hydro-extractions to restorative oxygen facials and Italian liposoluble waxing, our aesthetic rituals celebrate radiant, healthy skin in private temperature-controlled suites.",
    heroImage: "https://images.pexels.com/photos/37229301/pexels-photo-37229301.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=750",
    services: [
      {
        id: "cellular-oxygen-facial",
        slug: "cellular-oxygen-facial",
        name: "Luminous Cellular Oxygen Facial",
        category: "Dermal Aesthetics & Skin",
        categorySlug: "skin-grooming",
        startingPrice: "₹1,899",
        isPriceFrom: true,
        duration: "60–75 mins",
        shortDescription: "Pressurized botanical oxygen dome infusion, enzymatic peeling, and lymphatic drainage for instant glass-skin radiance.",
        fullDescription: "A gentle yet transformative clinical facial specifically calibrated for Chennai's tropical humidity and UV exposure. Features deep double-cleansing, papaya enzymatic exfoliation, an extended lymphatic drainage face-and-neck massage, and pressurized 98% pure oxygen infusion paired with antioxidant vitamins C & E.",
        image: "https://images.pexels.com/photos/37229301/pexels-photo-37229301.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=500",
        suitableFor: ["Dull or tired urban complexions", "Dehydrated skin lacking bounce", "Pre-event, festive, and bridal radiance", "Sensitive and sun-exposed skin"],
        whatToExpect: [
          "Dermal hydration and sebum analysis scan",
          "Aromatherapy botanical double-cleansing",
          "Fruit enzyme peel to lift dead cells without redness",
          "Acupressure face, neck, and decollete massage",
          "Oxygen dome mist infusion with hyaluronic acid",
          "Cold algae rubber masque to lock in nutrients"
        ],
        aftercareTips: [
          "Avoid direct midday sun exposure for 24 hours",
          "Apply broad-spectrum mineral SPF 50 daily",
          "Drink plenty of water to maintain cellular plumpness"
        ],
        faqs: [
          { question: "Will my skin be red afterwards?", answer: "No. Our treatments use calming, anti-inflammatory extracts and cooling algae masks so you leave with a calm, illuminated glass-skin glow." },
          { question: "How often should I book an oxygen facial?", answer: "Once every 3 to 4 weeks maintains optimal cellular turnover and radiant hydration." }
        ]
      },
      {
        id: "hydra-dermal-glow",
        slug: "hydra-dermal-glow",
        name: "Hydra-Dermal Deep Pore Infusion & Cryo Globe Therapy",
        category: "Dermal Aesthetics & Skin",
        categorySlug: "skin-grooming",
        startingPrice: "₹2,499",
        isPriceFrom: true,
        duration: "75 mins",
        shortDescription: "Non-invasive vortex aqua-peel suction, blackhead extraction, and cryogenic ice-globe contouring.",
        fullDescription: "The premier treatment for congested pores and uneven texture. Utilizes gentle vortex liquid suction to painless vacuum blackheads and hard-water buildup from pores, followed by deep multi-molecular hyaluronic acid infusion and sub-zero cryogenic globe sculpting to tighten pores and reduce puffiness.",
        image: "https://images.pexels.com/photos/7446659/pexels-photo-7446659.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=500",
        suitableFor: ["Enlarged pores and blackheads", "Excess T-zone oiliness from humidity", "Uneven skin texture", "Puffy facial contours"],
        whatToExpect: [
          "Ultrasonic skin scrubber exfoliation",
          "Vortex lactic & salicylic acid pore flushing",
          "Painless hydro-vacuum blackhead extraction",
          "Deep peptide and niacinamide micro-mist penetration",
          "Cryogenic ice-globe soothing and contouring massage"
        ],
        aftercareTips: [
          "Do not apply heavy makeup for 12 hours after the session",
          "Keep skin hydrated with a gentle ceramide barrier cream"
        ],
        faqs: [
          { question: "Is hydro-dermabrasion painful?", answer: "Not at all. It feels like a cool, refreshing liquid vacuum sweeping across your skin with zero discomfort." }
        ]
      },
      {
        id: "anti-pollution-detox",
        slug: "anti-pollution-detox",
        name: "Chennai Anti-Pollution & Melanin Balancing Clean-Up",
        category: "Dermal Aesthetics & Skin",
        categorySlug: "skin-grooming",
        startingPrice: "₹1,199",
        isPriceFrom: true,
        duration: "45 mins",
        shortDescription: "Activated charcoal detoxification, warm botanical steam, and balancing tea-tree hydration.",
        fullDescription: "Formulated specifically to counteract Chennai's urban particulate pollution, traffic soot, and coastal sweat buildup. Clears deep impurities, calms active breakouts, and balances skin pH.",
        image: "https://images.pexels.com/photos/6978043/pexels-photo-6978043.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=500",
        suitableFor: ["Urban professionals with daily commute exposure", "Breakout-prone and congested skin", "Monthly maintenance refresh"],
        whatToExpect: [
          "Purifying tea-tree cleansing wash",
          "Ozone steam to soften pore debris",
          "Gentle mechanical and ultrasonic blackhead clearing",
          "Activated bamboo charcoal drawing mask",
          "Soothing green-tea hydration mist"
        ],
        faqs: [
          { question: "How is this different from a facial?", answer: "Clean-ups focus directly on deep pore clearing and hygiene extraction in 45 minutes, without the extended massage of a full facial." }
        ]
      },
      {
        id: "vitamin-c-radiance",
        slug: "vitamin-c-radiance",
        name: "Vitamin C Antioxidant & Melanin Brightening Treatment",
        category: "Dermal Aesthetics & Skin",
        categorySlug: "skin-grooming",
        startingPrice: "₹2,199",
        isPriceFrom: true,
        duration: "60 mins",
        shortDescription: "Freshly activated L-Ascorbic acid infusion to fade sun tan, pigmentation, and post-acne marks.",
        fullDescription: "A high-potency antioxidant ritual designed to combat hyperpigmentation and photo-damage caused by intense coastal UV rays. Leaves the complexion visibly luminous and even-toned.",
        image: "https://images.pexels.com/photos/36436447/pexels-photo-36436447.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=500",
        suitableFor: ["Sun-tanned face and neck", "Uneven skin tone and dark spots", "Brides seeking luminous skin 2 weeks before events"],
        whatToExpect: [
          "Gentle brightening mandelic acid sweep",
          "Freshly activated pure Vitamin C serum ionization",
          "Rosehip and squalane replenishing massage",
          "Gold bio-cellulose brightening face wrap"
        ],
        faqs: [
          { question: "Will Vitamin C sting sensitive skin?", answer: "We use a buffered, lipid-soluble Vitamin C formulation that is gentle and non-irritating even on sensitive Indian skin tones." }
        ]
      },
      {
        id: "eyebrow-architecture",
        slug: "eyebrow-architecture",
        name: "Precision Eyebrow Architecture & Organic Tint",
        category: "Dermal Aesthetics & Skin",
        categorySlug: "skin-grooming",
        startingPrice: "₹299",
        isPriceFrom: true,
        duration: "20 mins",
        shortDescription: "Geometric facial mapping, hypoallergenic cotton thread shaping, and soothing organic aloe vera seal.",
        fullDescription: "Elevate your brow silhouette with millimeter precision. We map your natural brow bone structure, contour clean lines with antibacterial combed cotton thread, and finish with cold organic aloe gel and optional vegetable tinting.",
        image: "https://images.pexels.com/photos/6135615/pexels-photo-6135615.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=500",
        suitableFor: ["Natural arch enhancement", "Tidying unruly brows", "Gentle depilation without wax pulling"],
        whatToExpect: [
          "Symmetry consultation & caliper brow mapping",
          "Precision cotton thread shaping",
          "Cooling organic aloe vera ice compress"
        ],
        faqs: [
          { question: "Is threading better than waxing for eyebrows?", answer: "Yes, threading provides micro-precision and avoids pulling the delicate skin around the eye orbital bone." }
        ]
      },
      {
        id: "rica-liposoluble-waxing",
        slug: "rica-liposoluble-waxing",
        name: "Italian RICA Liposoluble Waxing & Post-Epil Soothing",
        category: "Dermal Aesthetics & Skin",
        categorySlug: "skin-grooming",
        startingPrice: "₹799",
        isPriceFrom: true,
        duration: "30–45 mins",
        shortDescription: "100% colophony-free Italian white chocolate liposoluble wax for painless, velvet-smooth skin.",
        fullDescription: "Experience gentle hair removal formulated for sensitive skin. RICA liposoluble wax adheres only to the hair shaft rather than live skin cells, virtually eliminating redness, irritation, and ingrown hairs.",
        image: "https://images.pexels.com/photos/3865548/pexels-photo-3865548.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=500",
        suitableFor: ["Sensitive and easily irritated skin", "Ingrown-hair prone areas", "Silky full arms, underarms, and legs"],
        whatToExpect: [
          "Pre-wax cleansing and dry talc prep",
          "Low-temperature RICA white chocolate wax glide",
          "Gentle strip removal",
          "Post-wax azulene and chamomile calming emulsion"
        ],
        faqs: [
          { question: "Why choose RICA wax over regular wax?", answer: "RICA wax is free from petroleum and colophony allergens. It contains vegetable oils that nourish the skin barrier while cleanly removing fine and coarse hairs." }
        ]
      }
    ]
  },
  {
    id: "nail-care",
    slug: "nail-care",
    name: "Nail Lounge & Pedicure",
    shortName: "Nails & Pedicure",
    tagline: "Holistic nail therapy, clinical hygiene, and immaculate polish artistry.",
    description: "Relaxing manicures and pedicures delivered in a serene setting with medical-grade sanitization and curated polish palettes.",
    heroImage: "https://images.pexels.com/photos/7066298/pexels-photo-7066298.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=750",
    services: [
      {
        id: "classic-pedicure",
        slug: "classic-pedicure",
        name: "Restorative Classic Spa Pedicure",
        category: "Nail, Hand & Foot Care",
        categorySlug: "nail-care",
        startingPrice: "₹899",
        isPriceFrom: true,
        duration: "50 mins",
        shortDescription: "Aromatic foot soak, heel buffing, cuticle detail, and relaxing foot massage.",
        fullDescription: "Relieve tired urban feet with our signature soak in sea salts and essential oils. Includes pumice exfoliation, nail contouring, and a tension-melting massage.",
        image: "https://images.pexels.com/photos/22668317/pexels-photo-22668317.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=500",
        suitableFor: ["Dry heels", "Athletic or tired feet", "Routine hygiene maintenance"],
        whatToExpect: ["Dead sea salt soak", "Heel smoothing", "Cuticle nourishment", "Reflexology massage and polish"],
        faqs: [
          { question: "How do you sterilize nail tools?", answer: "We use hospital-grade autoclaves and disposable files for every guest." }
        ]
      },
      {
        id: "classic-manicure",
        slug: "classic-manicure",
        name: "Classic Spa Hand Therapy Manicure",
        category: "Nail, Hand & Foot Care",
        categorySlug: "nail-care",
        startingPrice: "₹699",
        isPriceFrom: true,
        duration: "40 mins",
        shortDescription: "Gentle hand exfoliation, nail shaping, cuticle nourishment, and flawless polish.",
        fullDescription: "Nurturing care for hands and nails. Cleanses, shapes, and hydrates with organic shea butter and botanical oils.",
        image: "https://images.pexels.com/photos/4965824/pexels-photo-4965824.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=500",
        suitableFor: ["Neat professional hands", "Cuticle conditioning"],
        whatToExpect: ["Nail shaping", "Warm bath soak", "Cuticle care", "Hand and arm massage", "Polish"],
        faqs: [
          { question: "Can I choose high-shine buffing instead of polish?", answer: "Yes, buffing produces a beautiful clean natural finish." }
        ]
      },
      {
        id: "gel-polish",
        slug: "gel-polish",
        name: "Long-Wear Gel Polish Overlay",
        category: "Nail, Hand & Foot Care",
        categorySlug: "nail-care",
        startingPrice: "₹999",
        isPriceFrom: true,
        duration: "45 mins",
        shortDescription: "Zero-dry-time LED cured colour lasting 2–3 weeks without chipping or dulling.",
        fullDescription: "Chip-resistant, ultra-glossy gel lacquer cured under LED light. Perfect for vacations and busy lifestyles.",
        image: "https://images.pexels.com/photos/16041439/pexels-photo-16041439.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=500",
        suitableFor: ["Extended chip-free wear", "Vacation nails", "Ultra-gloss finish"],
        whatToExpect: ["Nail prep", "Base coat bond", "Two colour coats under LED", "Mirror topcoat"],
        faqs: [
          { question: "How do I remove gel polish later?", answer: "We recommend gentle professional soak-off to protect your natural nail bed." }
        ]
      },
      {
        id: "nail-art",
        slug: "nail-art",
        name: "Bespoke Glaze & Chrome Nail Art",
        category: "Nail, Hand & Foot Care",
        categorySlug: "nail-care",
        startingPrice: "Consultation-based",
        isPriceFrom: false,
        duration: "Varies by design",
        shortDescription: "Minimalist French tips, chrome glazes, geometric lines, or custom handcrafted motifs.",
        fullDescription: "From subtle Hailey Bieber glazed donut chrome to intricate hand-drawn botanical lines, our nail artists create personalized nail statements.",
        image: "https://images.pexels.com/photos/7066298/pexels-photo-7066298.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=500",
        suitableFor: ["Weddings", "Festive occasions", "Personal artistic expression"],
        whatToExpect: ["Design consultation", "Colour and chrome selection", "Precision brushwork and cure"],
        faqs: [
          { question: "Can I bring my own Pinterest references?", answer: "Yes! Bring any references to your appointment and our artist will bring it to life." }
        ]
      }
    ]
  },
  {
    id: "bridal-occasion",
    slug: "bridal-occasion",
    name: "Bridal Artistry & Occasion",
    shortName: "Bridal",
    tagline: "Timeless grace, radiant artistry, and calm serenity for your most cherished moments.",
    description: "Dedicated bridal hair, makeup, and draping crafted to celebrate individual beauty while enduring the emotions and lighting of celebrations.",
    heroImage: "https://images.pexels.com/photos/12708653/pexels-photo-12708653.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=1200&h=750",
    services: [
      {
        id: "bridal-hair-makeup",
        slug: "bridal-hair-makeup",
        name: "Signature Muhurtham Bridal Artistry",
        category: "Bridal & Occasion",
        categorySlug: "bridal-occasion",
        startingPrice: "Consultation-based",
        isPriceFrom: false,
        duration: "180–240 mins",
        shortDescription: "High-definition, photography-ready makeup, intricate hair sculpting, and saree/dupatta draping.",
        fullDescription: "Our bespoke bridal service is designed around your unique vision, wedding trousseau, and lighting. We focus on skin-first radiance—flawless coverage that breathes, enhances your natural bone structure, and stays luminous from the first ceremony to the last photograph.",
        image: "https://images.pexels.com/photos/12708653/pexels-photo-12708653.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=500",
        suitableFor: ["Traditional Muhurtham ceremonies", "Contemporary Christian or Muslim weddings", "Sangeet and Reception galas"],
        whatToExpect: [
          "Pre-wedding consultation and mood board alignment",
          "Dermal prep and hydration barrier infusion",
          "High-definition skin sculpting with luxury global formulations",
          "Intricate bridal hair architecture and fresh flower/jewelry setting",
          "Expert saree or dupatta draping and setting"
        ],
        aftercareTips: [
          "Schedule a trial session 4–6 weeks prior to the wedding date",
          "Maintain regular hydration and gentle skin exfoliation in the month leading up"
        ],
        faqs: [
          { question: "Do you offer bridal trials?", answer: "Yes, we offer comprehensive preview trials where we test hair and makeup looks." },
          { question: "Do you travel to venues in Chennai?", answer: "Yes, on-location wedding venue services are available upon advance reservation." }
        ]
      },
      {
        id: "engagement-styling",
        slug: "engagement-styling",
        name: "Engagement & Sangeet Gala Styling",
        category: "Bridal & Occasion",
        categorySlug: "bridal-occasion",
        startingPrice: "₹7,999",
        isPriceFrom: true,
        duration: "120–150 mins",
        shortDescription: "Glamorous celebration hair, glowing party makeup, and precision styling for pre-wedding events.",
        fullDescription: "Striking balance between elegance and festive drama. Ideal for ring ceremonies, sangeet nights, and cocktail receptions.",
        image: "https://images.pexels.com/photos/20708571/pexels-photo-20708571.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=500",
        suitableFor: ["Engagements", "Cocktail parties", "Bridesmaids & close family"],
        whatToExpect: ["Skin prep", "Long-wear makeup application", "Glamorous hair styling", "Accessory pinning"],
        faqs: [
          { question: "Can this service be customized for bridesmaids?", answer: "Yes, we create coordinated bridesmaid packages." }
        ]
      },
      {
        id: "party-makeup",
        slug: "party-makeup",
        name: "Party & Evening Event Glam",
        category: "Bridal & Occasion",
        categorySlug: "bridal-occasion",
        startingPrice: "₹3,499",
        isPriceFrom: true,
        duration: "90 mins",
        shortDescription: "Sophisticated event makeup and blowout or hair styling tailored for special occasions.",
        fullDescription: "Camera-ready elegance designed for dinners, milestone birthdays, and festival galas.",
        image: "https://images.pexels.com/photos/28941551/pexels-photo-28941551.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=500",
        suitableFor: ["Social galas", "Anniversaries", "Red carpet events"],
        whatToExpect: ["Skin base prep", "Eye makeup and lash application", "Lip colour lock", "Quick hair finish"],
        faqs: [
          { question: "Are false lashes included?", answer: "Yes, premium natural or glam lashes can be included." }
        ]
      }
    ]
  }
];

export function getAllServices(): ServiceItem[] {
  return serviceCategories.flatMap((cat) => cat.services);
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return getAllServices().find((item) => item.slug === slug);
}
