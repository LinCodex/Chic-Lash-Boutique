
import { Service, ContactInfo, GalleryItem, BusinessHour } from './types';

export const CONTACT_INFO: ContactInfo = {
  businessName: "Chic Lash Boutique",
  address: "20A Main St, Port Washington, NY 11050",
  phone: "5167870577",
  displayPhone: "(516) 787-0577",
};

export const BUSINESS_HOURS: BusinessHour[] = [
  { day: "Monday", hours: "10:00 – 19:30" },
  { day: "Tuesday", hours: "Closed" },
  { day: "Wednesday", hours: "10:00 – 19:30" },
  { day: "Thursday", hours: "10:00 – 19:30" },
  { day: "Friday", hours: "10:00 – 19:30" },
  { day: "Saturday", hours: "10:00 – 19:30" },
  { day: "Sunday", hours: "10:00 – 17:00" },
];

export const SERVICES: Service[] = [
  {
    id: "gel-nails",
    name: "Classic Gel Nails",
    description: "Shiny, long-lasting gel polish that won't chip for weeks. We take extra care of your cuticles to make sure your hands look clean and pretty.",
    price: "$55",
    duration: "1 HOUR",
    image: "/classic gel nail.webp"
  },
  {
    id: "full-lashes",
    name: "Full Eye Lashes",
    description: "Get beautiful, long lashes that look natural but noticeable. Perfect for everyday wear so you can wake up ready to go without mascara.",
    price: "$120",
    duration: "1.5 HOURS",
    image: "/L3_Model.webp"
  },
  {
    id: "spa-pedi",
    name: "Relaxing Pedicure",
    description: "A nice treat for your feet. Includes a warm soak, scrubbing away dry skin, a soft massage, and your favorite color polish.",
    price: "$65",
    duration: "1 HOUR",
    image: "/Pedicure.webp"
  },
  {
    id: "quick-mani",
    name: "Simple Manicure",
    description: "A quick cleanup for your nails. We trim, shape, and paint them so you can get back to your day looking fresh.",
    price: "$35",
    duration: "45 MINS",
    image: "/simplemanicure.webp"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    image: "/minimalistline.webp",
    category: "Nail Art",
    title: "Minimalist Lines"
  },
  {
    id: 2,
    image: "/softpinkgel.webp",
    category: "Manicure",
    title: "Soft Pink Gel"
  },
  {
    id: 3,
    image: "/hybridvolume.webp",
    category: "Lashes",
    title: "Hybrid Volume Set"
  },
  {
    id: 4,
    image: "/goldfoil.webp",
    category: "Nail Art",
    title: "Gold Foil Accents"
  },
  {
    id: 5,
    image: "/naturalclassic.webp",
    category: "Lashes",
    title: "Natural Classic"
  },
  {
    id: 6,
    image: "/frenchtip.webp",
    category: "Pedicure",
    title: "French Tips"
  }
];
