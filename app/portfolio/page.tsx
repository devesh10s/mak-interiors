'use client';

import { useState } from 'react';
import { PROJECTS, getProjectsByCategory } from '@/lib/data/projects';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/cards/ProjectCard';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'hospitality', label: 'Hospitality' },
  { id: 'retail', label: 'Retail' }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? PROJECTS 
    : getProjectsByCategory(activeCategory as any);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-accent-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionHeader
              subtitle="Our Portfolio"
              title="Transforming Spaces, Creating Stories"
              description="Explore our diverse portfolio of interior design projects that showcase our creativity, expertise, and commitment to excellence."
              centered
            />
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'px-6 py-3 rounded-full font-medium transition-all duration-300',
                  activeCategory === category.id
                    ? 'bg-accent-600 text-white shadow-lg'
                    : 'bg-white text-neutral-700 hover:bg-accent-50 hover:text-accent-600 shadow-md'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-neutral-600 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2">50+</div>
              <div className="text-neutral-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2">100%</div>
              <div className="text-neutral-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2">5+</div>
              <div className="text-neutral-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2">24/7</div>
              <div className="text-neutral-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}