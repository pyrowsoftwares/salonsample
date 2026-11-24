export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "haircuts" | "colour" | "care" | "bridal" | "nails" | "studio";
  categoryLabel: string;
  image: string;
  alt: string;
  description: string;
  credit?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Hand-Painted Caramel Balayage",
    category: "colour",
    categoryLabel: "Hair Colour",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=80",
    alt: "Soft caramel balayage on dark brunette hair with soft waves",
    description: "Multi-dimensional ribbons of warm honey and caramel hand-painted for natural, diffused growth.",
  },
  {
    id: "g2",
    title: "Sculpted Architectural Bob",
    category: "haircuts",
    categoryLabel: "Haircuts & Styling",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    alt: "Precision cut contemporary jawline bob haircut",
    description: "Sharp graduation contoured to the client's jawline with textured perimeter movement.",
  },
  {
    id: "g3",
    title: "Regal Muhurtham Bridal Styling",
    category: "bridal",
    categoryLabel: "Bridal & Occasion",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    alt: "Traditional South Indian bride with fresh jasmine poola jada and temple jewelry",
    description: "Traditional jasmine poola jada hair architecture with dewy, luminous skin sculpting.",
  },
  {
    id: "g4",
    title: "Minimalist Glaze & Chrome Nails",
    category: "nails",
    categoryLabel: "Nail Care",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=80",
    alt: "Elegantly manicured almond nails with pearl chrome glaze",
    description: "Subtle translucent chrome glaze on manicured almond nails for everyday understated luxury.",
  },
  {
    id: "g5",
    title: "Gloss Hydration & Keratin Therapy",
    category: "care",
    categoryLabel: "Hair & Scalp Care",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80",
    alt: "Restored glossy healthy hair shining under warm salon lighting",
    description: "Deep lipid and protein infusion restoring cuticle health and mirror reflections.",
  },
  {
    id: "g6",
    title: "Aurel Studio Sanctuary Lounge",
    category: "studio",
    categoryLabel: "Studio Space",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
    alt: "Warm ivory and espresso minimalist interior of the salon styling floor",
    description: "Bespoke styling stations with soft ambient lighting, natural stone, and brass finishes.",
  },
  {
    id: "g7",
    title: "Contemporary Fade & Scissor Craft",
    category: "haircuts",
    categoryLabel: "Haircuts & Styling",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
    alt: "Precision men's fade with styled textured crop",
    description: "Seamless low taper fade blended into a textured, scissor-worked crown.",
  },
  {
    id: "g8",
    title: "Nordic Ash Blonde Highlights",
    category: "colour",
    categoryLabel: "Hair Colour",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    alt: "Fine micro foil blonde highlights with cool pearlescent tone",
    description: "Micro-woven foils creating soft multidimensional illumination with zero brassiness.",
  },
  {
    id: "g9",
    title: "Modern Sangeet Chignon",
    category: "bridal",
    categoryLabel: "Bridal & Occasion",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    alt: "Soft romantic textured low bun updo for evening reception",
    description: "Textured low chignon with face-framing tendrils designed for celebratory movement.",
  },
  {
    id: "g10",
    title: "Dermal Radiance Facial Ritual",
    category: "care",
    categoryLabel: "Skin Care",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    alt: "Relaxing botanical facial treatment in serene treatment room",
    description: "Lymphatic drainage and antioxidant serum infusion restoring natural skin vitality.",
  },
  {
    id: "g11",
    title: "Consultation & Colour Bar",
    category: "studio",
    categoryLabel: "Studio Space",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80",
    alt: "Styling chairs and mirrors in modern high-end salon space",
    description: "Private consultation seating where our stylists assess hair biology before treatments.",
  },
  {
    id: "g12",
    title: "Deep Espresso Global Gloss",
    category: "colour",
    categoryLabel: "Hair Colour",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80",
    alt: "Velvet dark espresso brown hair with high shine finish",
    description: "Rich ammonia-conscious global colour providing uniform pigment depth and gloss.",
  }
];
