export interface Project {
  id: string;
  title: string;
  location: string;
  category: 'residential' | 'commercial' | 'hospitality' | 'retail';
  description: string;
  area: string;
  timeline: string;
  style: string;
  images: string[];
  featured: boolean;
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'luxury-penthouse-mumbai',
    title: 'Luxury Penthouse',
    location: 'Bandra, Mumbai',
    category: 'residential',
    description: 'A sophisticated penthouse design featuring contemporary elegance with panoramic city views. The space combines luxury with functionality, creating an urban oasis.',
    area: '3,500 sq ft',
    timeline: '6 months',
    style: 'Contemporary Luxury',
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    tags: ['luxury', 'penthouse', 'contemporary', 'city-views']
  },
  {
    id: 'modern-office-bkc',
    title: 'Corporate Headquarters',
    location: 'BKC, Mumbai',
    category: 'commercial',
    description: 'A modern corporate office design that promotes collaboration and innovation while maintaining professional elegance.',
    area: '15,000 sq ft',
    timeline: '8 months',
    style: 'Modern Corporate',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    tags: ['office', 'corporate', 'modern', 'collaborative']
  },
  {
    id: 'minimalist-apartment',
    title: 'Minimalist Apartment',
    location: 'Powai, Mumbai',
    category: 'residential',
    description: 'A serene minimalist design focusing on clean lines, natural materials, and optimal space utilization for a young professional couple.',
    area: '1,200 sq ft',
    timeline: '4 months',
    style: 'Minimalist Modern',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    tags: ['minimalist', 'apartment', 'modern', 'space-optimization']
  },
  {
    id: 'boutique-hotel-suite',
    title: 'Boutique Hotel Suite',
    location: 'Juhu, Mumbai',
    category: 'hospitality',
    description: 'Luxurious hotel suite design combining comfort with sophisticated aesthetics, creating a memorable guest experience.',
    area: '800 sq ft',
    timeline: '3 months',
    style: 'Luxury Hospitality',
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    tags: ['hotel', 'luxury', 'hospitality', 'suite']
  },
  {
    id: 'family-villa-lonavala',
    title: 'Family Villa',
    location: 'Lonavala, Maharashtra',
    category: 'residential',
    description: 'A warm and inviting family villa design that blends traditional elements with contemporary comfort for multi-generational living.',
    area: '4,500 sq ft',
    timeline: '10 months',
    style: 'Contemporary Traditional',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    tags: ['villa', 'family', 'traditional', 'contemporary']
  },
  {
    id: 'retail-flagship-store',
    title: 'Fashion Flagship Store',
    location: 'Palladium Mall, Mumbai',
    category: 'retail',
    description: 'An innovative retail space design that enhances the shopping experience through strategic layout and ambient lighting.',
    area: '2,500 sq ft',
    timeline: '5 months',
    style: 'Modern Retail',
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    tags: ['retail', 'fashion', 'flagship', 'modern']
  }
];

export const getFeaturedProjects = () => PROJECTS.filter(project => project.featured);
export const getProjectsByCategory = (category: Project['category']) => 
  PROJECTS.filter(project => project.category === category);

