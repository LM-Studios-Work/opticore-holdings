import type { StaticImageData } from "next/image";

import usbPenlight from "../../public/usb_rechargable_medical_lightpen.jpeg";
import medicalBag from "../../public/double_layer_medical_bag.jpeg";
import fireBlanket from "../../public/fibre_glass_fabric.jpeg";
import firstAidKit from "../../public/first_aid_kit.jpeg";
import emergencyBlanket from "../../public/emergency_blanket.jpeg";
import bloodPressureCuff from "../../public/blood_pressure_cuff.jpeg";
import wristBpMonitor from "../../public/stock_wrist_blood_pressure_monitor.jpeg";
import electronicBpMonitor from "../../public/electronic_blood_pressure_monitor.jpeg";
import stockElectronicBpMonitor from "../../public/stock_electronic_blood_pressure_monitor.jpeg";
import oximeter from "../../public/stock_oximeter.jpeg";
import autoBpMonitor from "../../public/automatic_digital_blood_pressure_monitor.jpeg";
import wristHeatingWrap from "../../public/stock_wrist_heating_wrap.jpeg";
import vinylGloves from "../../public/vinyl_blend_gloves.jpeg";
import meshNebulizer from "../../public/stock_mesh_nebulizer.jpeg";
import ultrasonicNebulizer from "../../public/ultrasonic_nebulizer.jpeg";
import calfMassager from "../../public/portable_calf_massager.jpeg";

// Gallery-only imagery
import galleryMedicalKit from "../../public/medical_kit.jpeg";
import gallerySurgicalMask from "../../public/surgical_mask.jpeg";
import galleryGloves from "../../public/dispoable_gloves.jpeg";
import galleryStethoscope from "../../public/stethoscope.jpeg";
import galleryBpMachine from "../../public/blood_pressure_machine.jpeg";
import galleryOxygenKit from "../../public/oxygen_kit.jpeg";
import galleryScissors from "../../public/medical_scissors_kit.jpeg";
import galleryBandages from "../../public/bandages_from_first_aid.jpeg";
import galleryConsumables from "../../public/room_with_sanitary_products.jpeg";
import galleryWorkerSanitising from "../../public/worker_sanitizing.jpeg";
import gallerySanitisingGun from "../../public/sanitizing_and_defecting_service_gun.jpeg";
import galleryWindowWash from "../../public/cleaning_service_window_wash.jpeg";

// Poster imagery
import posterAdvancedCleaning from "../../public/poster/advanced cleaning solutiobs.jpeg";
import posterSanitizedCleaning from "../../public/poster/sanitized cleaning services.jpeg";
import posterSanitizedCleaningV2 from "../../public/poster/sanitized cleaning services v2.jpeg";
import posterMedicalSuppliesStock from "../../public/poster/medical supplies stock.jpeg";

export const siteConfig = {
  name: "OptiCore Holdings",
  legalName: "OptiCore Holdings (Pty) Ltd",
  tagline: "Cleaning, Hygiene, Pest Control & Medical Supplies",
  description:
    "OptiCore Holdings delivers professional facility management, medical consumables, and hygiene operations across Johannesburg and South Africa. Built for residential, commercial, industrial, and healthcare sectors.",
  phone: "071 702 0817",
  phoneHref: "tel:+27717020817",
  whatsappHref: "https://wa.me/27717020817",
  email: "info@opticoreholdings.co.za",
  address: "Bryanston, Sandton, Johannesburg, South Africa",
  hours: "Mon – Fri: 07:00 – 17:00 | Sat: 08:00 – 13:00 | Emergency call-outs available",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Gauteng,+South+Africa&z=9&output=embed",
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

/** @deprecated Use `medicalCatalog` instead; this is kept only for backward-compat. */
export const medicalProducts = [
  { title: "PPE Equipment", description: "Gowns, coveralls, and face shields for maximum workplace protection.", icon: "ShieldCheck" },
  { title: "Gloves", description: "Nitrile, latex, and vinyl options for medical and industrial applications.", icon: "Hand" },
  { title: "Masks", description: "Surgical and N95/FFP2 respirators built for strict compliance.", icon: "Cross" },
  { title: "Sanitiser", description: "Hand and surface sanitisers, available from personal issue to bulk commercial dispensers.", icon: "Droplet" },
  { title: "Medical Consumables", description: "Swabs, dressings, syringes, and daily essentials for busy practices.", icon: "Syringe" },
  { title: "Cleaning Chemicals", description: "Commercial-grade disinfectants, heavy-duty detergents, and specialist agents.", icon: "FlaskConical" },
  { title: "First Aid Supplies", description: "Fully stocked kits and rapid-refill supplies for offices, sites, and fleets.", icon: "HeartPulse" },
] as const;

export type MedicalProduct = {
  title: string;
  category: string;
  description: string;
  icon: string;
  code?: string;
  image?: StaticImageData;
};

export const medicalCatalog: MedicalProduct[] = [
  {
    title: "USB Rechargeable Medical Penlight",
    category: "Diagnostic Tools",
    description:
      "USB rechargeable medical penlight with a pupil gauge and warm/white LED light — a reliable everyday diagnostic tool for clinicians and first responders.",
    icon: "FaHeartPulse",
    code: "O.108-19",
    image: usbPenlight,
  },
  {
    title: "Manual Blood Pressure Cuff with Stethoscope",
    category: "Diagnostic Tools",
    description:
      "Professional aneroid blood pressure monitor with an adult cuff, matching stethoscope, and carry bag. Accurate manual readings for clinical and home use.",
    icon: "FaHeartPulse",
    code: "B.AB-184",
    image: bloodPressureCuff,
  },
  {
    title: "Wrist Blood Pressure Monitor",
    category: "Diagnostic Tools",
    description:
      "Compact, portable digital wrist monitor with automatic systolic, diastolic, and pulse readings. Features a clear LED display, auto shut-off, and irregular-heartbeat detection for easy one-touch home monitoring.",
    icon: "FaHeartPulse",
    code: "C.DC-570",
    image: wristBpMonitor,
  },
  {
    title: "Automatic Digital Blood Pressure Monitor",
    category: "Diagnostic Tools",
    description:
      "Fully automatic digital blood pressure monitor for quick, accurate readings at the press of a button.",
    icon: "FaHeartPulse",
    code: "J",
    image: autoBpMonitor,
  },
  {
    title: "Electronic Blood Pressure Monitor",
    category: "Diagnostic Tools",
    description:
      "Electronic blood pressure monitor with a large LCD display — the date is clearly visible, making it ideal for elderly users. Small, lightweight, and easy to carry for health monitoring at home or while travelling.",
    icon: "FaHeartPulse",
    code: "B.AD-70",
    image: electronicBpMonitor,
  },
  {
    title: "Electronic Blood Pressure Monitor (LCD)",
    category: "Diagnostic Tools",
    description:
      "Large-screen LCD blood pressure monitor built for clear, easy reading. Compact and portable so you can keep an eye on your health anytime, anywhere — a thoughtful choice for elderly parents.",
    icon: "FaHeartPulse",
    code: "C.DC-32",
    image: stockElectronicBpMonitor,
  },
  {
    title: "Fingertip Pulse Oximeter",
    category: "Diagnostic Tools",
    description:
      "Compact fingertip oximeter for fast readings of blood oxygen saturation and pulse rate.",
    icon: "FaHeartPulse",
    code: "B.AB-166",
    image: oximeter,
  },
  {
    title: "Powder-Free Vinyl Blend Gloves (100pc)",
    category: "PPE & Gloves",
    description:
      "Latex-free, powder-free vinyl blend gloves for multi-purpose medical and industrial use. Box of 100.",
    icon: "FaHandHolding",
    code: "C.DC-481",
    image: vinylGloves,
  },
  {
    title: "Home First Aid Kit",
    category: "First Aid",
    description:
      "Large-capacity first aid and medicine storage bag — a portable, durable box for travel, outdoor camping, and survival or emergency use. Contents not included.",
    icon: "FaPlus",
    code: "B.AD-614",
    image: firstAidKit,
  },
  {
    title: "Emergency Fire Blanket (2m x 2m)",
    category: "Emergency & Safety",
    description:
      "Best-quality 420GSM fibreglass fire blanket for emergency fire suppression. Ideal for first aid stations, disaster kits, plants, offices, schools, and other public places.",
    icon: "FaShield",
    code: "B.AB-293",
    image: fireBlanket,
  },
  {
    title: "Emergency Thermal Blanket",
    category: "Emergency & Safety",
    description:
      "Foil Mylar thermal survival blanket — essential emergency gear for first aid kits, vehicles, and outdoor use.",
    icon: "FaShield",
    code: "C.JG-25",
    image: emergencyBlanket,
  },
  {
    title: "Tactical Double Layer Medical Bag",
    category: "Medical Bags & Storage",
    description:
      "Tactical Molle EDC double layer medical bag — durable, organised storage for first aid and medical supplies on the move.",
    icon: "FaBox",
    code: "C.JB-78",
    image: medicalBag,
  },
  {
    title: "Portable Mesh Nebulizer",
    category: "Respiratory Care",
    description:
      "Quiet, portable, low-power rechargeable mesh nebulizer with a mouthpiece and 2 masks for adults and kids — vapour therapy wherever you need it.",
    icon: "FaSyringe",
    code: "B.AB-177",
    image: meshNebulizer,
  },
  {
    title: "Ultrasonic Nebulizer",
    category: "Respiratory Care",
    description:
      "Ultrasonic nebulizer with innovative mesh technology — quiet, compact, portable, and lightweight. Suitable for all ages and ideal for children and the elderly, providing vapour therapy for colds, flu, bronchitis, and other respiratory ailments. Powered by 2 AA batteries or USB cable. Includes nebulizer, adult mask, child mask, mouthpiece, box, USB cable, and user manual. Size: 13×4.8×4cm.",
    icon: "FaSyringe",
    code: "O.8-1324",
    image: ultrasonicNebulizer,
  },
  {
    title: "Wrist Heating Wrap",
    category: "Therapy & Recovery",
    description:
      "Rechargeable wrist heating wrap that delivers soothing warmth for comfort and recovery.",
    icon: "FaWandMagicSparkles",
    code: "B.AF-87",
    image: wristHeatingWrap,
  },
  {
    title: "Portable Calf Massager",
    category: "Therapy & Recovery",
    description:
      "Portable calf massager designed for targeted relief, combining air compression and heat therapy to soothe muscle soreness and improve circulation. Offers multiple massage modes and intensity levels, switching between kneading and pushing techniques. Rechargeable and cordless for travel, home, or office use, with durable linen and breathable mesh that fits various calf sizes via adjustable Velcro straps.",
    icon: "FaWandMagicSparkles",
    code: "B.AF-84",
    image: calfMassager,
  },
];

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

export type GalleryImage = {
  category: "cleaning" | "sanitising" | "medical-supplies";
  label: string;
  image: StaticImageData;
};

export const galleryImages: GalleryImage[] = [
  // Featured Posters
  { category: "cleaning", label: "Advanced Cleaning Solutions Poster", image: posterAdvancedCleaning },
  { category: "cleaning", label: "Sanitized Cleaning Services Poster", image: posterSanitizedCleaning },
  { category: "sanitising", label: "Sanitized Cleaning & Disinfection Poster", image: posterSanitizedCleaningV2 },
  { category: "medical-supplies", label: "Medical Consumables & PPE Stock Poster", image: posterMedicalSuppliesStock },
  // Cleaning
  { category: "cleaning", label: "Window Cleaning", image: galleryWindowWash },
  // Sanitising
  { category: "sanitising", label: "Disinfection Service", image: galleryWorkerSanitising },
  { category: "sanitising", label: "Fogging & Sanitising", image: gallerySanitisingGun },
  // Medical supplies
  { category: "medical-supplies", label: "Medical Consumables", image: galleryConsumables },
  { category: "medical-supplies", label: "First Aid Kits", image: firstAidKit },
  { category: "medical-supplies", label: "Medical Kits", image: galleryMedicalKit },
  { category: "medical-supplies", label: "Surgical Masks", image: gallerySurgicalMask },
  { category: "medical-supplies", label: "Disposable Gloves", image: galleryGloves },
  { category: "medical-supplies", label: "Stethoscopes", image: galleryStethoscope },
  { category: "medical-supplies", label: "Blood Pressure Monitors", image: galleryBpMachine },
  { category: "medical-supplies", label: "Pulse Oximeters", image: oximeter },
  { category: "medical-supplies", label: "Nebulizers", image: ultrasonicNebulizer },
  { category: "medical-supplies", label: "Oxygen Kits", image: galleryOxygenKit },
  { category: "medical-supplies", label: "Medical Scissors", image: galleryScissors },
  { category: "medical-supplies", label: "Bandages & Dressings", image: galleryBandages },
];

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
