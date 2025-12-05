// Brand Configuration
export const BRAND = {
  name: 'MAK Interiors',
  tagline: 'Transforming Spaces into Elegant Experiences',
  description: 'Crafting bespoke interiors that reflect your unique story and lifestyle.',
  phone: '+91 98765 43210',
  email: 'hello@makinteriors.com',
  address: 'Mumbai, Maharashtra, India',
  instagram: 'https://www.instagram.com/makx.interiors',
  whatsapp: 'https://wa.me/919876543210',
} as const;

// Navigation Links
export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Process', href: '/process' },
  { name: 'Contact', href: '/contact' },
] as const;

// Social Media Links
export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/makx.interiors',
  facebook: '#',
  linkedin: '#',
  pinterest: '#',
} as const;

// SEO Configuration
export const SEO = {
  title: 'MAK Interiors - Premium Interior Design Services in Mumbai',
  description: 'Transform your space with MAK Interiors. We specialize in luxury residential and commercial interior design, creating elegant and functional spaces that reflect your unique style.',
  keywords: 'interior design, luxury interiors, home design, commercial design, Mumbai interior designer, residential design, office interiors',
  url: 'https://makinteriors.com',
  image: '/og-image.jpg',
} as const;

