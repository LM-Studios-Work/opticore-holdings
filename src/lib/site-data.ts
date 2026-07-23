export const siteConfig = {
  name: "OptiCore Holdings",
  legalName: "OptiCore Holdings (Pty) Ltd",
  tagline: "Cleaning, Hygiene, Pest Control & Medical Supplies",
  description:
    "OptiCore Holdings delivers professional facility management, medical consumables, and hygiene operations across South Africa. Built for residential, commercial, industrial, and healthcare sectors.",
  phone: "071 702 0817",
  phoneHref: "tel:+27717020817",
  whatsappHref: "https://wa.me/27717020817",
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
    description: "Professional Cleaning Operations",
  },
  {
    name: "OptiCore Sanitising",
    description: "Disinfection & Fogging",
  },
  {
    name: "OptiCore Pest Control",
    description: "Pest Management",
  },
  {
    name: "OptiCore Medical Supplies",
    description: "PPE & Consumables",
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
    slug: "medical-supplies",
    title: "Medical Supplies",
    shortDescription:
      "High-volume PPE, hygiene products, and medical consumables for healthcare providers and businesses.",
    description:
      "A complete pipeline of PPE, consumables, and chemicals for clinics, offices, and industrial sites.",
    icon: "Cross",
    image: "medical-hero",
    items: [
      "PPE & Gloves",
      "Masks & Sanitiser",
      "Medical Consumables",
      "Cleaning Chemicals & First Aid",
    ],
  },
  {
    slug: "cleaning",
    title: "Commercial & Residential Cleaning",
    shortDescription:
      "Scalable cleaning operations for homes, offices, and commercial properties.",
    description:
      "From routine office maintenance to heavy-duty post-construction clear-outs.",
    icon: "Sparkles",
    image: "cleaning-hero",
    items: [
      "Deep Cleaning",
      "Office Cleaning",
      "Residential Cleaning",
      "Move-in / Move-out",
      "Post-Construction",
      "Window & Carpet Cleaning",
    ],
  },
  {
    slug: "sanitising",
    title: "Sanitising & Disinfection",
    shortDescription:
      "Medical-grade fogging and targeted disinfection to protect high-traffic environments.",
    description:
      "Hospital-grade disinfectants and fogging technology to eliminate pathogens in high-risk environments.",
    icon: "ShieldCheck",
    image: "sanitising-hero",
    items: [
      "Fogging Services",
      "Medical-grade Disinfection",
      "Office & School Sanitising",
      "Virus & Bacteria Control",
    ],
  },
  {
    slug: "pest-control",
    title: "Pest Control",
    shortDescription:
      "Safe, effective, and compliant pest eradication for all property types.",
    description:
      "Targeted identification and eradication of infestations using regulation-compliant methods.",
    icon: "Bug",
    image: "pest-hero",
    items: [
      "Cockroaches & Ants",
      "Rodents",
      "Termites & Bed Bugs",
      "General Pest Management",
    ],
  },
];

export const values = [
  { title: "Professional", description: "Trained, well-presented teams who take pride in every job." },
  { title: "Reliable", description: "Consistent, on-time service you can build your operations around." },
  { title: "Affordable", description: "Transparent, competitive pricing with no hidden costs." },
  { title: "Quality Service", description: "Meticulous attention to detail on every visit." },
  { title: "Health & Safety Focused", description: "Compliant products, methods and protective equipment." },
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
    description: "Gowns, coveralls, and face shields for maximum workplace protection.",
    icon: "ShieldCheck",
  },
  {
    title: "Gloves",
    description: "Nitrile, latex, and vinyl options for medical and industrial applications.",
    icon: "Hand",
  },
  {
    title: "Masks",
    description: "Surgical and N95/FFP2 respirators built for strict compliance.",
    icon: "Cross",
  },
  {
    title: "Sanitiser",
    description: "Hand and surface sanitisers, available from personal issue to bulk commercial dispensers.",
    icon: "Droplet",
  },
  {
    title: "Medical Consumables",
    description: "Swabs, dressings, syringes, and daily essentials for busy practices.",
    icon: "Syringe",
  },
  {
    title: "Cleaning Chemicals",
    description: "Commercial-grade disinfectants, heavy-duty detergents, and specialist agents.",
    icon: "FlaskConical",
  },
  {
    title: "First Aid Supplies",
    description: "Fully stocked kits and rapid-refill supplies for offices, sites, and fleets.",
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
      "We use them for move-in/move-out cleaning across our units. Reliable and consistently high quality.",
  },
  {
    name: "Dr. S. Khumalo",
    role: "Clinic Owner, Randburg",
    quote:
      "Their medical-grade disinfection service and PPE supply have made compliance effortless for our practice.",
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
