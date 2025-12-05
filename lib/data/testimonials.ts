export interface Testimonial {
  id: string;
  name: string;
  location: string;
  project: string;
  rating: number;
  content: string;
  image?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Priya Sharma',
    location: 'Bandra, Mumbai',
    project: 'Luxury Penthouse',
    rating: 5,
    content: 'MAK Interiors transformed our penthouse into a dream home. Their attention to detail and understanding of our lifestyle needs was exceptional. The team delivered beyond our expectations within the promised timeline.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'testimonial-2',
    name: 'Rajesh Patel',
    location: 'BKC, Mumbai',
    project: 'Corporate Office',
    rating: 5,
    content: 'The corporate office design by MAK Interiors has significantly improved our team productivity and client impressions. Their modern approach while maintaining functionality is commendable.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'testimonial-3',
    name: 'Anita Desai',
    location: 'Powai, Mumbai',
    project: 'Minimalist Apartment',
    rating: 5,
    content: 'Working with MAK Interiors was a delightful experience. They understood our vision for a minimalist home and executed it perfectly. The space feels larger and more peaceful now.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'testimonial-4',
    name: 'Vikram Singh',
    location: 'Juhu, Mumbai',
    project: 'Hotel Suite Design',
    rating: 5,
    content: 'MAK Interiors created stunning hotel suites that our guests absolutely love. The design perfectly balances luxury with comfort, and the feedback has been overwhelmingly positive.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'testimonial-5',
    name: 'Meera Gupta',
    location: 'Lonavala, Maharashtra',
    project: 'Family Villa',
    rating: 5,
    content: 'Our family villa renovation exceeded all expectations. MAK Interiors managed to blend traditional elements with modern comfort beautifully. Every family member loves their personalized spaces.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'testimonial-6',
    name: 'Arjun Kapoor',
    location: 'Lower Parel, Mumbai',
    project: 'Retail Store',
    rating: 5,
    content: 'The flagship store design has transformed our retail experience. Customer dwell time has increased significantly, and the space perfectly represents our brand identity. Highly recommended!'
  }
];

