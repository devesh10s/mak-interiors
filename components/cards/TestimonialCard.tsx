'use client';

import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '@/lib/data/testimonials';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

const TestimonialCard = ({ testimonial, className }: TestimonialCardProps) => {
  return (
    <div className={cn('bg-white rounded-xl shadow-lg p-6 relative', className)}>
      {/* Quote Icon */}
      <div className="absolute -top-3 left-6">
        <div className="bg-accent-500 text-white p-2 rounded-full">
          <Quote size={16} />
        </div>
      </div>
      
      {/* Rating */}
      <div className="flex items-center mb-4 pt-2">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-current" />
        ))}
      </div>
      
      {/* Content */}
      <blockquote className="text-neutral-700 mb-6 leading-relaxed">
        "{testimonial.content}"
      </blockquote>
      
      {/* Author */}
      <div className="flex items-center">
        {testimonial.image && (
          <div className="relative w-12 h-12 mr-4">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover rounded-full"
            />
          </div>
        )}
        <div>
          <h4 className="font-semibold text-neutral-900">
            {testimonial.name}
          </h4>
          <p className="text-sm text-neutral-600">
            {testimonial.location}
          </p>
          <p className="text-xs text-accent-600 font-medium">
            {testimonial.project}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

