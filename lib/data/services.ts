export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: 'residential',
    title: 'Residential Interior Design',
    description: 'Transform your home into a personalized sanctuary with our comprehensive residential design services.',
    features: [
      'Complete home makeovers',
      'Room-specific designs',
      'Space planning & optimization',
      'Custom furniture design',
      'Color consultation',
      'Lighting design'
    ],
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'commercial',
    title: 'Commercial & Office Spaces',
    description: 'Create inspiring work environments that boost productivity and reflect your brand identity.',
    features: [
      'Office space planning',
      'Reception area design',
      'Meeting room setups',
      'Collaborative spaces',
      'Brand integration',
      'Ergonomic solutions'
    ],
    icon: 'Building',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'renovation',
    title: 'Renovation & Remodeling',
    description: 'Breathe new life into existing spaces with our expert renovation and remodeling services.',
    features: [
      'Kitchen renovations',
      'Bathroom remodeling',
      'Living space updates',
      'Structural modifications',
      'Modern upgrades',
      'Heritage restoration'
    ],
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'visualization',
    title: '3D Visualization & Planning',
    description: 'Visualize your dream space before implementation with our advanced 3D modeling and rendering.',
    features: [
      '3D floor plans',
      'Photorealistic renders',
      'Virtual walkthroughs',
      'Material visualization',
      'Lighting simulation',
      'Design iterations'
    ],
    icon: 'Cube',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'turnkey',
    title: 'Turnkey Interior Solutions',
    description: 'Complete end-to-end interior solutions from concept to completion with full project management.',
    features: [
      'Project management',
      'Vendor coordination',
      'Quality control',
      'Timeline management',
      'Budget optimization',
      'Final styling'
    ],
    icon: 'Key',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

