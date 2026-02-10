
export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

export interface ContactInfo {
  businessName: string;
  address: string;
  phone: string;
  displayPhone: string;
}

export interface GalleryItem {
  id: number;
  image: string;
  category: string;
  title: string;
}

export interface BusinessHour {
  day: string;
  hours: string;
}
