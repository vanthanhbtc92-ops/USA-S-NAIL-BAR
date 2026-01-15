
import { ServiceItem, GalleryImage, Testimonial } from './types';

export const COLORS = {
  GOLD: '#D4AF37',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  DARK_GRAY: '#1A1A1A'
};

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    name: 'Luxury Manicure',
    description: 'A soothing hand soak, nail shaping, cuticle care, buffing, and a relaxing hand massage followed by polish.',
    price: 'From $25',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800',
    category: 'manicure'
  },
  {
    id: '2',
    name: 'Spa Pedicure',
    description: 'Refreshing foot soak, callus removal, exfoliation, massage, and hot towel wrap for perfectly pampered feet.',
    price: 'From $35',
    image: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&q=80&w=800',
    category: 'pedicure'
  },
  {
    id: '3',
    name: 'Full Set Acrylic',
    description: 'Strong and beautiful acrylic extensions tailored to your desired shape and length.',
    price: 'From $45',
    image: 'https://images.unsplash.com/photo-1604654894610-df4909985730?auto=format&fit=crop&q=80&w=800',
    category: 'acrylic'
  },
  {
    id: '4',
    name: 'Dip Powder',
    description: 'Lightweight, durable, and odor-free powder dipping for natural looking nails with long-lasting shine.',
    price: 'From $40',
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=800',
    category: 'dip'
  },
  {
    id: '5',
    name: 'Custom Nail Art',
    description: 'Exquisite hand-painted designs, 3D charms, and intricate patterns by our expert artists.',
    price: 'Varies',
    image: 'https://images.unsplash.com/photo-1600057081960-03012846c20c?auto=format&fit=crop&q=80&w=800',
    category: 'art'
  },
  {
    id: '6',
    name: 'Eyelash Extensions',
    description: 'Enhance your natural beauty with professionally applied eyelash extensions for a stunning look.',
    price: 'From $80',
    image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&q=80&w=800',
    category: 'eyelash'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  url: `https://picsum.photos/seed/${i + 50}/800/1000`,
  title: `Nail Design ${i + 1}`
}));

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: 'Sarah Miller', text: 'Best nail salon in Texas City! The attention to detail is incredible.', rating: 5, platform: 'Google' },
  { id: 2, name: 'Jessica Davis', text: 'So clean and professional. My acrylics lasted for weeks without lifting!', rating: 5, platform: 'Yelp' },
  { id: 3, name: 'Michelle Rodriguez', text: 'Love the luxury vibe. The technicians are true artists.', rating: 5, platform: 'Google' }
];

export const CONTACT_INFO = {
  PHONE: '409-948-9077',
  ADDRESS: '3109 Palmer Hwy, Texas City, TX 77590',
  HOURS: [
    { day: 'Monday - Saturday', time: '9:00 AM - 7:00 PM' },
    { day: 'Sunday', time: '11:00 AM - 5:00 PM' }
  ]
};
