import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Design Process - From Concept to Completion | MAK Interiors',
  description: 'Discover our proven 6-step interior design process that ensures quality, timely delivery, and complete client satisfaction for every project.',
  keywords: 'interior design process, design consultation, project timeline, interior design steps, design methodology',
  openGraph: {
    title: 'Our Design Process - From Concept to Completion | MAK Interiors',
    description: 'Discover our proven 6-step interior design process that ensures quality, timely delivery, and complete client satisfaction for every project.',
    url: 'https://makinteriors.com/process',
  },
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
