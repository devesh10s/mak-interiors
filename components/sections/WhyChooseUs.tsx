'use client';

import { Award, Clock, Palette, Users, CheckCircle, Star } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const features = [
  {
    icon: Palette,
    title: 'Design Expertise',
    description: 'Our team of experienced designers brings creativity and innovation to every project, ensuring unique and personalized spaces.',
    stats: '50+ Projects'
  },
  {
    icon: CheckCircle,
    title: 'End-to-End Execution',
    description: 'From initial concept to final styling, we handle every aspect of your interior design project with meticulous attention to detail.',
    stats: '100% Completion'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We understand the importance of timelines and consistently deliver projects on schedule without compromising on quality.',
    stats: '95% On-Time'
  },
  {
    icon: Award,
    title: 'Budget-Friendly Luxury',
    description: 'We create luxurious spaces that fit your budget, maximizing value through smart design choices and efficient project management.',
    stats: 'Best Value'
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'Your vision is our priority. We work closely with you throughout the process to ensure the final result exceeds your expectations.',
    stats: '100% Satisfaction'
  },
  {
    icon: Star,
    title: 'Quality Assurance',
    description: 'We maintain the highest standards of quality in materials, workmanship, and finishing to ensure lasting beauty and durability.',
    stats: '5-Year Warranty'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <SectionHeader
            subtitle="Why Choose Us"
            title="Excellence in Every Detail"
            description="We combine creativity, expertise, and dedication to transform your space into something extraordinary."
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-neutral-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-accent-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-accent-100 rounded-lg group-hover:bg-accent-500 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-accent-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-semibold text-accent-600 bg-accent-50 px-3 py-1 rounded-full">
                    {feature.stats}
                  </span>
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-accent-600 to-accent-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-accent-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
              <div className="text-accent-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-accent-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-accent-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

