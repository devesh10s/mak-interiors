import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Design Services - Residential & Commercial | MAK Interiors',
  description: 'Comprehensive interior design services including residential design, commercial spaces, renovations, 3D visualization, and turnkey solutions in Mumbai.',
  keywords: 'interior design services, residential design, commercial interiors, home renovation, office design, 3D visualization, Mumbai interior designer',
  openGraph: {
    title: 'Interior Design Services - Residential & Commercial | MAK Interiors',
    description: 'Comprehensive interior design services including residential design, commercial spaces, renovations, 3D visualization, and turnkey solutions in Mumbai.',
    url: 'https://makinteriors.com/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
