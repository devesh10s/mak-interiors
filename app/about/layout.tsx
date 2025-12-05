import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About MAK Interiors - Our Story & Design Philosophy',
  description: 'Learn about MAK Interiors, our journey in interior design, our values, and our commitment to creating beautiful, functional spaces in Mumbai.',
  keywords: 'about MAK Interiors, interior design company Mumbai, design philosophy, interior design team',
  openGraph: {
    title: 'About MAK Interiors - Our Story & Design Philosophy',
    description: 'Learn about MAK Interiors, our journey in interior design, our values, and our commitment to creating beautiful, functional spaces in Mumbai.',
    url: 'https://makinteriors.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
