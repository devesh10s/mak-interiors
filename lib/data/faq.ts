export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'process' | 'timeline';
}

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What is your design process and how long does it take?',
    answer: 'Our design process consists of 6 key phases: Consultation, Concept Development, Design & 3D Visualization, Material Selection, Execution, and Final Handover. The timeline varies based on project scope, typically ranging from 3-12 months for residential projects and 6-18 months for commercial spaces.',
    category: 'process'
  },
  {
    id: 'faq-2',
    question: 'How do you determine the cost of an interior design project?',
    answer: 'Project costs depend on several factors including space size, design complexity, material selections, and scope of work. We provide detailed cost estimates after the initial consultation and concept development phase. Our pricing is transparent with no hidden charges.',
    category: 'pricing'
  },
  {
    id: 'faq-3',
    question: 'Do you handle both residential and commercial projects?',
    answer: 'Yes, we specialize in both residential and commercial interior design. Our portfolio includes luxury homes, apartments, corporate offices, retail spaces, hospitality projects, and more. Each project receives the same level of attention and expertise.',
    category: 'general'
  },
  {
    id: 'faq-4',
    question: 'What is included in your turnkey interior design service?',
    answer: 'Our turnkey service includes complete project management from concept to completion: design development, 3D visualization, material procurement, vendor coordination, execution supervision, quality control, and final styling. You get a fully furnished, ready-to-use space.',
    category: 'general'
  },
  {
    id: 'faq-5',
    question: 'Can I see my design before the actual execution begins?',
    answer: 'Absolutely! We provide detailed 3D renderings and virtual walkthroughs of your space before execution begins. This allows you to visualize the final result and make any necessary changes to ensure the design meets your expectations.',
    category: 'process'
  },
  {
    id: 'faq-6',
    question: 'Do you work within a specific budget range?',
    answer: 'We work with various budget ranges and can customize our services accordingly. During the initial consultation, we discuss your budget and create design solutions that maximize value within your financial parameters.',
    category: 'pricing'
  },
  {
    id: 'faq-7',
    question: 'What happens if there are delays in the project timeline?',
    answer: 'We maintain realistic timelines and keep you updated on progress regularly. If delays occur due to unforeseen circumstances, we communicate immediately and work to minimize impact. Our project management ensures most projects complete on or ahead of schedule.',
    category: 'timeline'
  },
  {
    id: 'faq-8',
    question: 'Do you provide warranty on your work?',
    answer: 'Yes, we provide warranty on our workmanship and installations. The warranty period varies by component - typically 1 year for general work and up to 5 years for specific installations. We also provide maintenance guidelines to help preserve your interiors.',
    category: 'general'
  },
  {
    id: 'faq-9',
    question: 'Can you work with my existing furniture and decor?',
    answer: 'Certainly! We can incorporate your existing furniture and decor items into the new design. During the consultation, we assess existing pieces and determine how they can be integrated or repurposed in the new design scheme.',
    category: 'process'
  },
  {
    id: 'faq-10',
    question: 'Do you handle permits and approvals for renovations?',
    answer: 'Yes, we assist with necessary permits and approvals required for renovation projects. Our team is familiar with local regulations and can guide you through the approval process to ensure compliance with all requirements.',
    category: 'process'
  }
];

export const getFAQsByCategory = (category: FAQ['category']) => 
  FAQS.filter(faq => faq.category === category);

