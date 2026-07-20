export const siteConfig = {
  name: "OptiCore Holdings",
  legalName: "OptiCore Holdings (Pty) Ltd",
  tagline: "Cleaning, Hygiene, Pest Control & Medical Supplies",
  description:
    "OptiCore Holdings is a South African company providing professional cleaning, hygiene, medical supply, and facility management solutions to residential, commercial, industrial, and healthcare clients.",
  phone: "061 320 2590",
  phoneHref: "tel:+27613202590",
  whatsappHref: "https://wa.me/27613202590",
  email: "info@opticoreholdings.co.za",
  address: "Bryanston, Sandton, Johannesburg, South Africa",
  hours: "Mon – Fri: 07:00 – 17:00 | Sat: 08:00 – 13:00 | Emergency call-outs available",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Bryanston,+Sandton,+South+Africa&output=embed",
} as const;

export const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "TikTok", href: "#" },
] as const;

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Medical Supplies", href: "/medical-supplies" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
] as const;

export const brands = [
  {
    name: "Zenako Cleaning Co.",
    description: "Professional Cleaning Services",
  },
  {
    name: "OptiCore Sanitising",
    description: "Disinfection & Fogging",
  },
  {
    name: "OptiCore Pest Control",
    description: "Pest Management Solutions",
  },
  {
    name: "OptiCore Medical Supplies",
    description: "PPE, Hygiene & Medical Consumables",
  },
] as const;

export type ServiceCategory = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  items: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "cleaning",
    title: "Commercial & Residential Cleaning",
    shortDescription:
      "Professional cleaning for homes, offices and commercial properties of every size.",
    description:
      "From routine office cleaning to intensive post-construction clean-ups, our trained teams deliver consistent, high-quality results using professional-grade equipment and eco-conscious products.",
    icon: "Sparkles",
    image: "cleaning-hero",
    items: [
      "Deep Cleaning",
      "Office Cleaning",
      "Residential Cleaning",
      "Move-in / Move-out Cleaning",
      "Post-Construction Cleaning",
      "Window Cleaning",
      "Carpet Cleaning",
      "Upholstery Cleaning",
    ],
  },
  {
    slug: "sanitising",
    title: "Sanitising & Disinfection",
    shortDescription:
      "Medical-grade disinfection and fogging services to protect the people in your space.",
    description:
      "We use hospital-grade disinfectants and fogging equipment to eliminate harmful bacteria and viruses in offices, schools, hospitals and other high-traffic environments.",
    icon: "ShieldCheck",
    image: "sanitising-hero",
    items: [
      "Fogging Services",
      "Medical-grade Disinfection",
      "Office Sanitising",
      "School & Hospital Sanitising",
      "Virus & Bacteria Control",
    ],
  },
  {
    slug: "pest-control",
    title: "Pest Control",
    shortDescription:
      "Safe, effective pest management for residential, commercial and industrial properties.",
    description:
      "Our qualified pest control technicians identify, treat and prevent infestations using safe, regulation-compliant methods tailored to your property and risk profile.",
    icon: "Bug",
    image: "pest-hero",
    items: [
      "Cockroaches",
      "Rodents",
      "Ants",
      "Termites",
      "Bed Bugs",
      "General Pest Management",
    ],
  },
  {
    slug: "medical-supplies",
    title: "Medical Supplies",
    shortDescription:
      "PPE, hygiene products and medical consumables for businesses and healthcare providers.",
    description:
      "We supply a full range of PPE, medical consumables and cleaning chemicals to clinics, hospitals, offices and industrial sites, backed by reliable stock availability and delivery.",
    icon: "Cross",
    image: "medical-hero",
    items: [
      "PPE Equipment",
      "Gloves",
      "Masks",
      "Sanitiser",
      "Medical Consumables",
      "Cleaning Chemicals",
      "First Aid Supplies",
    ],
  },
];

export const values = [
  { title: "Professional", description: "Trained, well-presented teams who take pride in every job." },
  { title: "Reliable", description: "Consistent, on-time service you can build your operations around." },
  { title: "Affordable", description: "Transparent, competitive pricing with no hidden costs." },
  { title: "Quality Service", description: "Meticulous attention to detail on every visit." },
  { title: "Health & Safety Focused", description: "Compliant products, methods and protective equipment." },
  { title: "Customer Satisfaction", description: "We're not done until you're happy with the result." },
] as const;

export const targetMarkets = [
  "Residential homeowners",
  "Offices & corporate businesses",
  "Schools",
  "Hospitals & clinics",
  "Medical practices",
  "Warehouses & industrial facilities",
  "Retail stores",
  "Restaurants",
  "Property managers",
] as const;

export const medicalProducts = [
  {
    title: "PPE Equipment",
    description: "Gowns, coveralls, face shields and general protective equipment for healthcare and industrial use.",
    icon: "ShieldCheck",
  },
  {
    title: "Gloves",
    description: "Nitrile, latex and vinyl gloves suited to medical, food service and industrial environments.",
    icon: "Hand",
  },
  {
    title: "Masks",
    description: "Surgical, N95/FFP2 and cloth masks for medical, hospitality and general workplace use.",
    icon: "Cross",
  },
  {
    title: "Sanitiser",
    description: "Hand and surface sanitisers in a range of sizes, from personal bottles to bulk dispensers.",
    icon: "Droplet",
  },
  {
    title: "Medical Consumables",
    description: "Swabs, dressings, syringes and other everyday consumables for clinics and practices.",
    icon: "Syringe",
  },
  {
    title: "Cleaning Chemicals",
    description: "Industrial and commercial-grade disinfectants, detergents and specialised cleaning agents.",
    icon: "FlaskConical",
  },
  {
    title: "First Aid Supplies",
    description: "Fully stocked first aid kits and refill supplies for offices, vehicles and job sites.",
    icon: "HeartPulse",
  },
] as const;

export const testimonials = [
  {
    name: "L. Naidoo",
    role: "Office Manager, Sandton",
    quote:
      "OptiCore's team is punctual, thorough and easy to work with. Our office has never looked better.",
  },
  {
    name: "T. van der Merwe",
    role: "Property Manager, Bryanston",
    quote:
      "We use them for move-in/move-out cleaning across our units. Reliable and consistently good quality.",
  },
  {
    name: "Dr. S. Khumalo",
    role: "Clinic Owner, Randburg",
    quote:
      "Their medical-grade disinfection service and PPE supply have made compliance so much easier for our practice.",
  },
] as const;

export const galleryImages = [
  { category: "cleaning", label: "Office Cleaning", image: "office-cleaning" },
  { category: "cleaning", label: "Residential Cleaning", image: "residential-cleaning" },
  { category: "cleaning", label: "Carpet Cleaning", image: "carpet-cleaning" },
  { category: "cleaning", label: "Upholstery Cleaning", image: "upholstery-cleaning" },
  { category: "cleaning", label: "Window Cleaning", image: "window-cleaning" },
  { category: "cleaning", label: "Post-Construction Cleaning", image: "post-construction" },
  { category: "sanitising", label: "Fogging Service", image: "fogging" },
  { category: "sanitising", label: "Office Sanitising", image: "office-sanitising" },
  { category: "sanitising", label: "School Sanitising", image: "school-sanitising" },
  { category: "pest-control", label: "Pest Inspection", image: "pest-inspection" },
  { category: "pest-control", label: "Rodent Control", image: "rodent-control" },
  { category: "medical-supplies", label: "PPE & Medical Supplies", image: "medical-supplies" },
] as const;

export const services = [
  "Commercial Cleaning",
  "Residential Cleaning",
  "Deep Cleaning",
  "Move-in / Move-out Cleaning",
  "Post-Construction Cleaning",
  "Window Cleaning",
  "Carpet Cleaning",
  "Upholstery Cleaning",
  "Sanitising & Disinfection / Fogging",
  "Pest Control",
  "Medical Supplies",
  "Other",
] as const;

export const propertyTypes = [
  "Residential Home",
  "Apartment / Unit",
  "Office",
  "Retail Store",
  "Warehouse / Industrial",
  "School",
  "Hospital / Clinic",
  "Restaurant",
  "Other",
] as const;
