export interface Testimonial {
  id: string;
  clientName: string;
  serviceReceived: string;
  quote: string;
  rating: number;
  date: string;
  locationArea: string;
}

export const sampleTestimonials: Testimonial[] = [
  {
    id: "rev1",
    clientName: "Deepika R.",
    serviceReceived: "Artisan Balayage & Haircut",
    quote: "Finding a salon in Chennai that truly understands low-contrast balayage on dark Indian hair without harsh brassiness was a game changer. The consultation was thorough and unhurried.",
    rating: 5,
    date: "October 2026",
    locationArea: "Anna Nagar, Chennai",
  },
  {
    id: "rev2",
    clientName: "Dr. Siddharth M.",
    serviceReceived: "Men's Precision Cut & Beard Sculpting",
    quote: "Exceptional scissor work and great attention to bone structure. The studio is quiet and relaxing—none of the chaotic chatter of typical franchise salons.",
    rating: 5,
    date: "November 2026",
    locationArea: "Kilpauk, Chennai",
  },
  {
    id: "rev3",
    clientName: "Ananya & Harish",
    serviceReceived: "Muhurtham & Reception Bridal Package",
    quote: "Kavitha and the bridal team made my wedding morning so serene. The poola jada and makeup stayed luminous through 8 hours of ceremonies and heavy lighting.",
    rating: 5,
    date: "September 2026",
    locationArea: "Mylapore / Venue at ECR",
  },
];
