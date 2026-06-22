// ============================================================================
// Al Jannat Restaurants — Shared Data Types
// ============================================================================

export type Locale = "en" | "zh";

export interface LocalizedText {
  en: string;
  zh: string;
}

export type SpiceLevel = 0 | 1 | 2 | 3; // 0 = none, 1-3 = chili icons

export type MenuCategory = "starters" | "mains" | "desserts" | "drinks";

export interface MenuItem {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  /** Price in RMB (¥) */
  price: number;
  /** Marks data that must be replaced with real figures before launch */
  isPlaceholder?: boolean;
  category: MenuCategory;
  image: string;
  spiceLevel?: SpiceLevel;
  isVeg?: boolean;
}

export interface StaffMember {
  id: string;
  name: string;
  role: LocalizedText;
  bio: LocalizedText;
  photo: string;
  isPlaceholder?: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: LocalizedText;
}

export interface BuffetSchedule {
  days: LocalizedText;
  time: string; // e.g. "5:00 PM – 10:00 PM"
}

export interface Branch {
  slug: "gulou" | "xianlin" | "jiangning" | "pukou";
  number: string; // "01" etc.
  name: LocalizedText;
  shortDescription: LocalizedText;
  longDescription: LocalizedText;
  address: LocalizedText;
  /** True if the exact address could not be verified and needs confirmation */
  addressIsPlaceholder?: boolean;
  phone: string;
  whatsapp: string;
  /** Aggregated public rating (e.g. Dianping). Verify before launch if isPlaceholder. */
  dianpingRating: number;
  ratingIsPlaceholder?: boolean;
  openingHours: string; // "10:00 AM – 10:00 PM"
  buffet: BuffetSchedule;
  heroImage: string;
  cardImage: string;
  mapQuery: string; // used to build Google/Apple/Baidu map links + embed
  coordinates?: { lat: number; lng: number };
  staff: StaffMember[];
  menu: MenuItem[];
  gallery: GalleryImage[];
}
