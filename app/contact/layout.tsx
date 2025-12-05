import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact MAK Interiors - Free Interior Design Consultation',
  description: 'Get in touch with MAK Interiors for a free consultation. Call, email, or visit our Mumbai office to discuss your interior design project requirements.',
  keywords: 'contact interior designer, free consultation, MAK Interiors Mumbai, interior design quote, design consultation booking',
  openGraph: {
    title: 'Contact MAK Interiors - Free Interior Design Consultation',
    description: 'Get in touch with MAK Interiors for a free consultation. Call, email, or visit our Mumbai office to discuss your interior design project requirements.',
    url: 'https://makinteriors.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
