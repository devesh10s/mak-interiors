export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  details: string[];
  icon: string;
  duration: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'consultation',
    step: 1,
    title: 'Consultation & Requirement Gathering',
    description: 'We begin with an in-depth consultation to understand your vision, lifestyle, and specific requirements.',
    details: [
      'Initial site visit and space assessment',
      'Detailed discussion of your needs and preferences',
      'Budget planning and timeline discussion',
      'Style preference analysis',
      'Functional requirement mapping'
    ],
    icon: 'MessageCircle',
    duration: '1-2 weeks'
  },
  {
    id: 'concept',
    step: 2,
    title: 'Concept Development & Moodboards',
    description: 'Our design team creates initial concepts and mood boards to visualize the design direction.',
    details: [
      'Space planning and layout optimization',
      'Color palette selection',
      'Material and texture exploration',
      'Furniture and decor concept boards',
      'Lighting design concepts'
    ],
    icon: 'Palette',
    duration: '2-3 weeks'
  },
  {
    id: 'design',
    step: 3,
    title: 'Design Development & 3D Visualization',
    description: 'Detailed design development with photorealistic 3D renders and technical drawings.',
    details: [
      'Detailed floor plans and elevations',
      'Photorealistic 3D renderings',
      'Virtual walkthrough creation',
      'Material specifications',
      'Custom furniture design'
    ],
    icon: 'Cube',
    duration: '3-4 weeks'
  },
  {
    id: 'selection',
    step: 4,
    title: 'Material Selection & Budgeting',
    description: 'Careful selection of materials, finishes, and furnishings with detailed cost planning.',
    details: [
      'Material sourcing and selection',
      'Vendor identification and coordination',
      'Detailed cost estimation',
      'Timeline finalization',
      'Contract preparation'
    ],
    icon: 'ShoppingCart',
    duration: '2-3 weeks'
  },
  {
    id: 'execution',
    step: 5,
    title: 'Execution & Project Management',
    description: 'Professional execution with dedicated project management ensuring quality and timelines.',
    details: [
      'Site preparation and coordination',
      'Quality control and supervision',
      'Regular progress updates',
      'Vendor and contractor management',
      'Timeline adherence monitoring'
    ],
    icon: 'Settings',
    duration: 'Project dependent'
  },
  {
    id: 'handover',
    step: 6,
    title: 'Final Styling & Handover',
    description: 'Final styling touches and complete handover of your beautifully designed space.',
    details: [
      'Final installation and setup',
      'Styling and accessory placement',
      'Quality inspection and touch-ups',
      'Client walkthrough and approval',
      'Maintenance guidelines and warranty'
    ],
    icon: 'CheckCircle',
    duration: '1-2 weeks'
  }
];

