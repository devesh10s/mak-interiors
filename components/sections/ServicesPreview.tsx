'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/data/services';
import SectionHeader from '@/components/ui/SectionHeader';
import ServiceCard from '@/components/cards/ServiceCard';
import Button from '@/components/ui/Button';

const ServicesPreview = () => {
  // Show first 3 services
  const previewServices = SERVICES.slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <SectionHeader
            subtitle="Our Services"
            title="Comprehensive Interior Solutions"
            description="From residential homes to commercial spaces, we offer complete interior design services tailored to your needs."
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button variant="primary" size="lg">
              View All Services
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;

