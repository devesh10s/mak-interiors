'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProjects } from '@/lib/data/projects';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/cards/ProjectCard';
import Button from '@/components/ui/Button';

const FeaturedProjects = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <SectionHeader
            subtitle="Our Work"
            title="Featured Projects"
            description="Discover our latest interior design projects that showcase our commitment to excellence and attention to detail."
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio">
            <Button variant="primary" size="lg">
              View All Projects
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

