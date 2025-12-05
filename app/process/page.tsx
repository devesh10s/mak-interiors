'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, CheckCircle, Clock } from 'lucide-react';
import { PROCESS_STEPS } from '@/lib/data/process';
import { BRAND } from '@/lib/constants';
import SectionHeader from '@/components/ui/SectionHeader';
import ProcessStep from '@/components/cards/ProcessStep';
import Button from '@/components/ui/Button';

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-accent-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionHeader
              subtitle="Our Process"
              title="From Vision to Reality"
              description="Our proven 6-step process ensures that every project is executed flawlessly, on time, and within budget."
              centered
            />
          </div>

          {/* Process Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
                <Clock className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Efficient Timeline
              </h3>
              <p className="text-neutral-600">
                Streamlined process that respects your time and delivers results quickly.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Quality Assurance
              </h3>
              <p className="text-neutral-600">
                Multiple checkpoints ensure the highest quality at every stage.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
                <Phone className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Constant Communication
              </h3>
              <p className="text-neutral-600">
                Regular updates and open communication throughout the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionHeader
              subtitle="Step by Step"
              title="Our Detailed Process"
              description="Each step is carefully planned and executed to ensure your complete satisfaction."
              centered
            />
          </div>

          {/* Interactive Process Timeline */}
          <div className="relative mb-16">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-neutral-200 hidden lg:block" />
            
            <div className="space-y-16">
              {PROCESS_STEPS.map((step, index) => (
                <div key={step.id} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className="flex-1 lg:px-8">
                    <ProcessStep 
                      step={step} 
                      isActive={activeStep === index}
                      isCompleted={activeStep > index}
                    />
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 hidden lg:block">
                    <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg transition-colors duration-300 ${
                      activeStep >= index ? 'bg-accent-600' : 'bg-neutral-300'
                    }`} />
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>

          {/* Process Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2">
              {PROCESS_STEPS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-accent-600 scale-125'
                      : 'bg-neutral-300 hover:bg-accent-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionHeader
              subtitle="Project Timeline"
              title="Typical Project Duration"
              description="Here's what you can expect in terms of timeline for different types of projects."
              centered
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-3xl font-bold text-accent-600 mb-2">3-4 Months</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">Small Residential</h3>
              <p className="text-neutral-600">1-2 bedroom apartments, single rooms, or small office spaces.</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-3xl font-bold text-accent-600 mb-2">6-8 Months</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">Large Residential</h3>
              <p className="text-neutral-600">3+ bedroom homes, villas, or comprehensive renovations.</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-3xl font-bold text-accent-600 mb-2">8-12 Months</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">Commercial Projects</h3>
              <p className="text-neutral-600">Office spaces, retail stores, restaurants, or hospitality projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-600 to-accent-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
            Let's begin with a consultation to understand your vision and start the transformation process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BRAND.phone}`}
              className="inline-flex items-center justify-center bg-white text-accent-600 hover:bg-accent-50 px-8 py-4 text-lg rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Phone size={20} className="mr-2" />
              Start Your Project
            </a>
            <Link href="/portfolio">
              <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-accent-600">
                View Our Work
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
