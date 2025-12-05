'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data/testimonials';
import SectionHeader from '@/components/ui/SectionHeader';
import TestimonialCard from '@/components/cards/TestimonialCard';
import { cn } from '@/lib/utils';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <SectionHeader
            subtitle="Client Reviews"
            title="What Our Clients Say"
            description="Don't just take our word for it. Here's what our satisfied clients have to say about their experience with MAK Interiors."
            centered
          />
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white shadow-lg rounded-full text-neutral-600 hover:text-accent-600 hover:shadow-xl transition-all duration-300 -ml-6"
            disabled={TESTIMONIALS.length <= itemsPerView}
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white shadow-lg rounded-full text-neutral-600 hover:text-accent-600 hover:shadow-xl transition-all duration-300 -mr-6"
            disabled={TESTIMONIALS.length <= itemsPerView}
          >
            <ChevronRight size={20} />
          </button>

          {/* Testimonials Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={cn(
                    'flex-shrink-0 px-4',
                    itemsPerView === 1 && 'w-full',
                    itemsPerView === 2 && 'w-1/2',
                    itemsPerView === 3 && 'w-1/3'
                  )}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          {maxIndex > 0 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    'w-3 h-3 rounded-full transition-all duration-300',
                    index === currentIndex
                      ? 'bg-accent-600 scale-110'
                      : 'bg-neutral-300 hover:bg-accent-300'
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

