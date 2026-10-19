export interface Wish {
  id: string;
  name: string;
  relation: string;
  message: string;
  date: string;
  likes: number;
}

export interface EventItem {
  id: string;
  title: string;
  type: string;
  date: string;
  formattedDate: string;
  time: string;
  venue: string;
  address: string;
  phone: string;
  googleMapsUrl: string;
  description: string;
  dressCode?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'portraits' | 'moments' | 'traditional';
  caption: string;
  gradient: string;
  accent: string;
}

export interface RsvpData {
  name: string;
  phone: string;
  email: string;
  attendance: 'attending' | 'declining';
  guestCount: number;
  dietaryPreference: string;
  message: string;
}
