export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
  instagram?: string;
  experienceYears?: string;
}

export const sampleTeamMembers: TeamMember[] = [
  {
    id: "t1",
    name: "Arjun Venkatesh",
    role: "Artistic Director & Head Stylist",
    specialty: "Precision Architecture & Sculpted Bobs",
    bio: "Trained across London and Mumbai academies, Arjun specializes in face-shape calibration, dry precision texturing, and effortless low-maintenance silhouettes.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    experienceYears: "12+ years",
  },
  {
    id: "t2",
    name: "Meera Subramanian",
    role: "Senior Colour Specialist",
    specialty: "French Balayage & Dimensional Brunettes",
    bio: "A master of seamless colour transitions, Meera creates customized honey, mocha, and caramel ribbons that preserve hair cuticle integrity and require minimal touch-ups.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    experienceYears: "9 years",
  },
  {
    id: "t3",
    name: "Kavitha Rajan",
    role: "Bridal Artistry Director",
    specialty: "Traditional Muhurtham & Contemporary Receptions",
    bio: "Renowned for skin-first radiance and elaborate South Indian poola jada hair architecture, Kavitha designs timeless bridal looks that photograph impeccably in every light.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    experienceYears: "10 years",
  },
  {
    id: "t4",
    name: "Deepak Kumar",
    role: "Master Barber & Scalp Specialist",
    specialty: "Precision Fades, Beard Sculpting & Trichology",
    bio: "Deepak merges classical barbering scissor craft with modern skin-tapering and therapeutic botanical scalp rituals designed for Chennai's tropical humidity.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    experienceYears: "8 years",
  },
];
