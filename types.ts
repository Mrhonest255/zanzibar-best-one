export interface Tour {
  id: string;
  title: string;
  slug: string;
  category: 'day' | 'package' | 'safari';
  price: number;
  priceLabel: string; // e.g., "/ person" or "/ group"
  duration: string;
  rating: number;
  reviews: number;
  badge?: string;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  includes: string[];
  whatToBring: string[];
  cancellationPolicy: string; // New field
  image: string; // URL
  gallery?: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  country: string;
  text: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  content?: string;
}

export interface TransferOption {
  id: string;
  route: string;
  vehicleType: string;
  capacity: string;
  price: number;
  features: string[];
}

export interface BookingRequest {
  fullName: string;
  email: string;
  phone: string;
  travelDate: string;
  travelers: number;
  details: string;
  type: 'tour' | 'transfer' | 'safari' | 'custom' | 'contact';
  itemName?: string; // e.g., "Safari Blue"
}