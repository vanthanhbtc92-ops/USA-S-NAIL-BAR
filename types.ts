
export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price?: string;
  image: string;
  category: 'manicure' | 'pedicure' | 'acrylic' | 'dip' | 'art' | 'waxing' | 'eyelash';
}

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  platform: 'Google' | 'Yelp';
}
