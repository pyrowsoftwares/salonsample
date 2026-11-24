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
    image: "https://images.pexels.com/photos/7752412/pexels-photo-7752412.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=1000",
    alt: "Soft caramel balayage on dark brunette hair with soft waves",
    description: "Multi-dimensional ribbons of warm honey and caramel hand-painted for natural, diffused growth.",
  },
  {
    id: "g2",
    title: "Sculpted Architectural Bob",
    category: "haircuts",
    categoryLabel: "Haircuts & Styling",
    image: "https://images.pexels.com/photos/8834098/pexels-photo-8834098.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=1000",
    alt: "Precision cut contemporary jawline bob haircut",
    description: "Sharp graduation contoured to the client's jawline with textured perimeter movement.",
  },
  {
    id: "g3",
    title: "Regal Muhurtham Bridal Styling",
    category: "bridal",
    categoryLabel: "Bridal & Occasion",
    image: "https://images.pexels.com/photos/12708653/pexels-photo-12708653.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=1000",
    alt: "Traditional South Indian bride with fresh jasmine poola jada and temple jewelry",
    description: "Traditional jasmine poola jada hair architecture with dewy, luminous skin sculpting.",
  },
  {
    id: "g4",
    title: "Minimalist Glaze & Chrome Nails",
    category: "nails",
    categoryLabel: "Nail Care",
    image: "https://images.pexels.com/photos/4965824/pexels-photo-4965824.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=1000",
    alt: "Elegantly manicured almond nails with pearl chrome glaze",
    description: "Subtle translucent chrome glaze on manicured almond nails for everyday understated luxury.",
  },
  {
    id: "g5",
    title: "Gloss Hydration & Keratin Therapy",
    category: "care",
    categoryLabel: "Hair & Scalp Care",
    image: "https://images.pexels.com/photos/17320162/pexels-photo-17320162.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=1000",
    alt: "Restored glossy healthy hair shining under warm salon lighting",
    description: "Deep lipid and protein infusion restoring cuticle health and mirror reflections.",
  },
  {
    id: "g6",
    title: "Aurel Studio Sanctuary Lounge",
    category: "studio",
    categoryLabel: "Studio Space",
    image: "https://images.pexels.com/photos/13068377/pexels-photo-13068377.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=1000",
    alt: "Warm ivory and espresso minimalist interior of the salon styling floor",
    description: "Bespoke styling stations with soft ambient lighting, natural stone, and brass finishes.",
  },
  {
    id: "g7",
    title: "Contemporary Fade & Scissor Craft",
    category: "haircuts",
    categoryLabel: "Haircuts & Styling",
    image: "https://images.pexels.com/photos/9992819/pexels-photo-9992819.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=1000",
    alt: "Precision men's fade with styled textured crop",
    description: "Seamless low taper fade blended into a textured, scissor-worked crown.",
  },
  {
    id: "g8",
    title: "Nordic Ash Blonde Highlights",
    category: "colour",
    categoryLabel: "Hair Colour",
    image: "https://images.pexels.com/photos/29555682/pexels-photo-29555682.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=1000",
    alt: "Fine micro foil blonde highlights with cool pearlescent tone",
    description: "Micro-woven foils creating soft multidimensional illumination with zero brassiness.",
  },
  {
    id: "g9",
    title: "Modern Sangeet Chignon",
    category: "bridal",
    categoryLabel: "Bridal & Occasion",
    image: "https://images.pexels.com/photos/19764064/pexels-photo-19764064.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=1000",
    alt: "Soft romantic textured low bun updo for evening reception",
    description: "Textured low chignon with face-framing tendrils designed for celebratory movement.",
  },
  {
    id: "g10",
    title: "Dermal Radiance Facial Ritual",
    category: "care",
    categoryLabel: "Skin Care",
    image: "https://images.pexels.com/photos/37229301/pexels-photo-37229301.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=1000",
    alt: "Relaxing botanical facial treatment in serene treatment room",
    description: "Lymphatic drainage and antioxidant serum infusion restoring natural skin vitality.",
  },
  {
    id: "g11",
    title: "Consultation & Colour Bar",
    category: "studio",
    categoryLabel: "Studio Space",
    image: "https://images.pexels.com/photos/7195805/pexels-photo-7195805.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=1000",
    alt: "Styling chairs and mirrors in modern high-end salon space",
    description: "Private consultation seating where our stylists assess hair biology before treatments.",
  },
  {
    id: "g12",
    title: "Deep Espresso Global Gloss",
    category: "colour",
    categoryLabel: "Hair Colour",
    image: "https://images.pexels.com/photos/6568231/pexels-photo-6568231.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces&w=800&h=1000",
    alt: "Velvet dark espresso brown hair with high shine finish",
    description: "Rich ammonia-conscious global colour providing uniform pigment depth and gloss.",
  }
];
