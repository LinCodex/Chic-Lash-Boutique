
import { Service, ContactInfo, GalleryItem, BusinessHour } from './types';

export const CONTACT_INFO: ContactInfo = {
  businessName: "Chic Lash Boutique",
  address: "20A Main St, Port Washington, NY 11050",
  phone: "5167870577",
  displayPhone: "(516) 787-0577",
};

export const BUSINESS_HOURS: BusinessHour[] = [
  { day: "Monday", hours: "10:00 AM – 7:30 PM" },
  { day: "Tuesday", hours: "Closed" },
  { day: "Wednesday", hours: "10:00 AM – 7:30 PM" },
  { day: "Thursday", hours: "10:00 AM – 7:30 PM" },
  { day: "Friday", hours: "10:00 AM – 7:30 PM" },
  { day: "Saturday", hours: "10:00 AM – 7:30 PM" },
  { day: "Sunday", hours: "10:00 AM – 5:00 PM" },
];

export const SERVICES: Service[] = [
  // --- Extensions ---
  {
    id: "classic-set",
    name: "Classic Full Set",
    description: "One extension applied to each natural lash for a subtle, natural enhancement. Perfect for first-time clients seeking an effortlessly polished look.",
    duration: "2 HOURS",
    image: "/naturalclassic.webp"
  },
  {
    id: "hybrid-set",
    name: "Hybrid Full Set",
    description: "A beautiful blend of classic and volume fans for a textured, dimensional look. The perfect balance between natural and glamorous.",
    duration: "2 - 2.5 HOURS",
    image: "/hybridvolume.webp"
  },
  {
    id: "volume-set",
    name: "Volume Full Set",
    description: "Handmade fans of ultra-fine lashes applied to each natural lash for a full, fluffy, and dramatic finish. Ideal for those who love a bold look.",
    duration: "2.5 - 3 HOURS",
    image: "/volumefullset.webp"
  },
  {
    id: "mega-volume-set",
    name: "Mega Volume Full Set",
    description: "Ultra-dense fans of the finest lashes for a striking, show-stopping effect. Maximum fullness and intensity for the ultimate glam lover.",
    duration: "3 - 3.5 HOURS",
    image: "/megavolume.webp"
  },
  // --- Lifts & Tints ---
  {
    id: "lash-lift",
    name: "Lash Lift",
    description: "A semi-permanent treatment that curls your natural lashes from base to tip, creating the appearance of longer, more lifted lashes without extensions.",
    duration: "45 MINS",
    image: "/LL.webp"
  },
  {
    id: "lash-lift-tint",
    name: "Lash Lift & Tint",
    description: "Combine a lash lift with a custom tint for beautifully curled and darkened lashes. Wake up looking refreshed and polished every day.",
    duration: "1 HOUR",
    image: "/Lashtint.webp"
  },
  {
    id: "lash-tint",
    name: "Lash Tint",
    description: "A gentle semi-permanent dye applied to your natural lashes to enhance their color and depth. Great on its own or paired with a lash lift.",
    duration: "20 MINS",
    image: "/eyelash-tint.webp"
  },
  // --- Maintenance ---
  {
    id: "classic-refill",
    name: "Classic Refill",
    description: "Maintain your classic set with a fill. We replace grown-out or shed lashes to keep your extensions looking full and fresh.",
    duration: "1 HOUR",
    image: "/classicrefill.webp"
  },
  {
    id: "volume-refill",
    name: "Volume / Hybrid Refill",
    description: "Keep your volume or hybrid set looking flawless. We rebuild fans and fill gaps for a seamless, like-new appearance.",
    duration: "1 - 1.5 HOURS",
    image: "/hybridvolume.webp"
  },
  {
    id: "lash-removal",
    name: "Lash Extension Removal",
    description: "Safe, gentle removal of lash extensions using a professional-grade cream remover. Protects your natural lashes throughout the process.",
    duration: "30 MINS",
    image: "/extensionremoval.webp"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    image: "/hybridvolume1.webp",
    category: "Volumes",
    title: "Hybrid Volume Set"
  },
  {
    id: 2,
    image: "/classicset.webp",
    category: "Classic",
    title: "Natural Classic"
  },
  {
    id: 3,
    image: "/megavolume1.webp",
    category: "Dramatic",
    title: "Mega Volume"
  },
  {
    id: 4,
    image: "/GLashExtension.webp",
    category: "Extensions",
    title: "Lash Extensions"
  },
  {
    id: 5,
    image: "/GLashLift1.webp",
    category: "Lifts",
    title: "Lash Lift"
  },
  {
    id: 6,
    image: "/Gliftandtint.webp",
    category: "Lifts",
    title: "Lash Lift & Tint"
  }
];
