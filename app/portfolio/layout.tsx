import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Design Portfolio - Luxury Projects | MAK Interiors',
  description: 'Explore our portfolio of stunning interior design projects including luxury homes, commercial spaces, and hospitality projects in Mumbai and Maharashtra.',
  keywords: 'interior design portfolio, luxury interiors, residential projects, commercial design, Mumbai interior projects, before after interiors',
  openGraph: {
    title: 'Interior Design Portfolio - Luxury Projects | MAK Interiors',
    description: 'Explore our portfolio of stunning interior design projects including luxury homes, commercial spaces, and hospitality projects in Mumbai and Maharashtra.',
    url: 'https://makinteriors.com/portfolio',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
