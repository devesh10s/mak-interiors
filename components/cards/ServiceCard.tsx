'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Service } from '@/lib/data/services';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

const ServiceCard = ({ service, className }: ServiceCardProps) => {
  return (
    <div className={cn('group card-hover bg-white rounded-xl shadow-lg overflow-hidden', className)}>
      <div className="relative h-64 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
          {service.title}
        </h3>
        <p className="text-neutral-600 mb-4 line-clamp-3">
          {service.description}
        </p>
        
        <ul className="space-y-2 mb-6">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-neutral-600">
              <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        
        <Link
          href={`/services#${service.id}`}
          className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium transition-colors duration-300"
        >
          Learn More
          <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

