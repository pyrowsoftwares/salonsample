export interface SalonConfig {
  name: string;
  wordmarkPrimary: string;
  wordmarkSecondary: string;
  tagline: string;
  locationArea: string;
  salonType: string;
  
  // Contact details
  phone: string;
  isPhoneConfigured: boolean;
  
  whatsappNumber: string; // e.g. "919840012345"
  isWhatsAppConfigured: boolean;
  
  email: string;
  isEmailConfigured: boolean;
  
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    landmarks?: string;
    googleMapsDirectionsUrl: string;
  };
  isAddressVerified: boolean;
  
  openingHours: {
    weekday: string;
    weekend: string;
    note?: string;
  };
  isHoursVerified: boolean;
  
  instagram: {
    handle: string;
    url: string;
    isConfigured: boolean;
  };
  
  // Feature flags
  features: {
    bridalEnabled: boolean;
    onlineBookingEnabled: boolean;
    previewNoticeBanner: boolean;
    showSampleTeam: boolean;
    showSampleReviews: boolean;
  };

  // Preview notices
  disclaimers: {
    pricingNotice: string;
    bookingNotice: string;
    addressNotice: string;
  };
}

export const salonConfig: SalonConfig = {
  name: "AUREL STUDIO — Hair & Beauty Lounge",
  wordmarkPrimary: "AUREL",
  wordmarkSecondary: "STUDIO",
  tagline: "Your Style. Beautifully Personal.",
  locationArea: "Anna Nagar, Chennai",
  salonType: "Premium Unisex Salon",
  
  // Sample contact data for interactive preview demonstration
  phone: "+91 44 2626 7890",
  isPhoneConfigured: true,
  
  whatsappNumber: "919840012345", // Live test number for WhatsApp appointment handoff demonstration
  isWhatsAppConfigured: true,
  
  email: "hello@aurelstudio.example",
  isEmailConfigured: true,
  
  address: {
    line1: "3rd Avenue, Near Roundtana",
    line2: "Anna Nagar",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600040",
    landmarks: "Opposite to Anna Nagar Tower Park Road",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Anna+Nagar+Chennai",
  },
  isAddressVerified: false, // Disclosed as demo location
  
  openingHours: {
    weekday: "Monday – Saturday: 10:00 AM – 8:30 PM",
    weekend: "Sunday: 10:00 AM – 7:00 PM",
    note: "Consultation and major colour/chemical services recommended before 6:30 PM.",
  },
  isHoursVerified: true,
  
  instagram: {
    handle: "@aurel.studio",
    url: "https://instagram.com",
    isConfigured: true,
  },
  
  features: {
    bridalEnabled: true,
    onlineBookingEnabled: true,
    previewNoticeBanner: false,
    showSampleTeam: true,
    showSampleReviews: true,
  },

  disclaimers: {
    pricingNotice: "Sample rates & service tiers shown for design preview. Final menus and taxes confirmed during in-studio consultation.",
    bookingNotice: "Online appointment requests are reviewed by our salon coordinator and confirmed directly on WhatsApp.",
    addressNotice: "Demo location profile. Replace with the actual salon street address prior to live launch.",
  },
};
