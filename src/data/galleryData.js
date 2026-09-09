import masterSiteZoning from "../assets/FloorPlan.png";
import boutiqueImg from "../assets/Boutique1.jpg";
import retailImg from "../assets/height Street retail.png";
// Gallery Data for Y2R HEIGHTS
export const GALLERY_CATEGORIES = [
  { id: "all", label: "All Spaces" },
  { id: "exterior", label: "Exterior" },
  { id: "retail", label: "Retail" },
  { id: "offices", label: "Offices" },
  { id: "studios", label: "Studios" },
  { id: "food-court", label: "Food Court" },
  { id: "floor-plans", label: "Floor Plans" }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Contemporary Glass Façade & Grand Entrance",
    category: "exterior",
    categoryLabel: "Exterior",
    aspect: "tall",
    image: "https://images.adsttc.com/media/images/63ff/639c/3552/d24e/95ae/0e60/newsletter/designing-a-grand-glass-entrance-in-residential-design_1.jpg?1677681570",
    caption: "Modern glass façade with architectural lighting and commanding street presence on Kursi Road.",
    tagline: "Main Elevation • Kursi Road",
    link: "/project",
    specs: [
      { label: "Elevation", value: "G + 7 Floors", icon: "building" },
      { label: "Glazing", value: "Acoustic Glass", icon: "sparkles" },
      { label: "Frontage", value: "100+ Ft Road", icon: "car" }
    ]
  },
  {
    id: 2,
    title: "Double-Height Ground Retail Boulevard",
    category: "retail",
    categoryLabel: "Retail",
    aspect: "wide",
    image: retailImg,
    caption: "High frontage showcase stores engineered for maximum footfall engagement and brand impact.",
    tagline: "Ground & 1st Floor • High Footfall",
    link: "/retail",
    specs: [
      { label: "Ceiling", value: "14 Ft Height", icon: "layers" },
      { label: "Visibility", value: "All-Glass Front", icon: "sparkles" },
      { label: "Access", value: "Direct Walk-In", icon: "door" }
    ]
  },
  {
    id: 3,
    title: "Boutique Executive Workspace",
    category: "offices",
    categoryLabel: "Offices",
    aspect: "square",
    image: boutiqueImg,
    caption: "Light-filled modern office suites designed for founders, consultants and high-performance teams.",
    tagline: "2nd Floor • Corporate Grade",
    link: "/offices",
    specs: [
      { label: "Floor Level", value: "Level 2 Suites", icon: "building" },
      { label: "Layout", value: "Modular Office", icon: "layers" },
      { label: "Power", value: "100% DG Backup", icon: "shield" }
    ]
  },
  {
    id: 4,
    title: "Modern Minimalist Studio Suite",
    category: "studios",
    categoryLabel: "Studios",
    aspect: "wide",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1600&auto=format&fit=crop",
    caption: "Contemporary residential studios located on the 3rd to 7th floors offering smart ergonomic layouts.",
    tagline: "3rd to 7th Floors • Studio Living",
    link: "/studios",
    specs: [
      { label: "Typology", value: "Studio Living", icon: "building" },
      { label: "Finish", value: "Premium Fitted", icon: "sparkles" },
      { label: "Security", value: "Smart Keycard", icon: "shield" }
    ]
  },
  {
    id: 5,
    title: "Curated F&B Food Court Concourse",
    category: "food-court",
    categoryLabel: "Food Court",
    aspect: "tall",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
    caption: "Vibrant dining destination with planned service circulation and communal seating.",
    tagline: "1st Floor • Dining & Leisure",
    link: "/food-court",
    specs: [
      { label: "Dining Zone", value: "Level 1 Concourse", icon: "building" },
      { label: "Capacity", value: "150+ Seating", icon: "layers" },
      { label: "Ventilation", value: "Commercial Duct", icon: "sparkles" }
    ]
  },
  {
    id: 6,
    title: "Architectural Master Site Zoning",
    category: "floor-plans",
    categoryLabel: "Floor Plans",
    aspect: "square",
    image: masterSiteZoning,
    caption: "Structured vertical integration connecting basement parking, retail, commercial and residential tiers.",
    tagline: "Master Plan • Approved Zoning",
    link: "/floor-plans",
    specs: [
      { label: "Zoning", value: "Mixed Commercial", icon: "building" },
      { label: "Parking", value: "Double Basement", icon: "car" },
      { label: "Approvals", value: "Bank & RERA", icon: "shield" }
    ]
  },
  {
    id: 7,
    title: "Evening Architectural Lighting Perspective",
    category: "exterior",
    categoryLabel: "Exterior",
    aspect: "wide",
    image: "https://www.lightingindia.in/wp-content/uploads/2026/04/lighting-design.jpg",
    caption: "Night-time elevation highlighting the iconic geometric silhouette.",
    tagline: "Façade Illuminations • Night",
    link: "/project",
    specs: [
      { label: "Lighting", value: "Facade LED", icon: "sparkles" },
      { label: "Structure", value: "G+7 Building", icon: "building" },
      { label: "Frontage", value: "Prime Visibility", icon: "map" }
    ]
  },
  {
    id: 8,
    title: "Premium Boutique Retail Storefront",
    category: "retail",
    categoryLabel: "Retail",
    aspect: "tall",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
    caption: "High-visibility retail formats suitable for luxury fashion, lifestyle and café concepts.",
    tagline: "Ground Level • Flagship Units",
    link: "/retail",
    specs: [
      { label: "Frontage", value: "Clear Glass", icon: "sparkles" },
      { label: "Floor", value: "Ground Floor", icon: "building" },
      { label: "Footfall", value: "Direct Lobby", icon: "door" }
    ]
  },
  {
    id: 9,
    title: "Collaborative Meeting & Conference Suite",
    category: "offices",
    categoryLabel: "Offices",
    aspect: "wide",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600&auto=format&fit=crop",
    caption: "Smart executive zones with natural light and minimal-wastage floor configurations.",
    tagline: "Level 2 • High-Speed Tech Ready",
    link: "/offices",
    specs: [
      { label: "Facility", value: "Boardroom Ready", icon: "building" },
      { label: "Comfort", value: "Central Air", icon: "sparkles" },
      { label: "Connectivity", value: "High-Speed Fiber", icon: "shield" }
    ]
  },
  {
    id: 10,
    title: "Y2R Landmark Panoramic Horizon",
    category: "exterior",
    categoryLabel: "Exterior",
    aspect: "square",
    image: "https://i.redd.it/55fjn0eg4v6a1.png",
    caption: "The crowning visual landmark of Kursi Road, establishing a new commercial and residential benchmark.",
    tagline: "Signature Landmark • Center Spotlight",
    link: "/project",
    specs: [
      { label: "Landmark", value: "Central Icon", icon: "sparkles" },
      { label: "Elevation", value: "Flagship View", icon: "building" },
      { label: "Status", value: "Under Construction", icon: "shield" }
    ]
  }
];
