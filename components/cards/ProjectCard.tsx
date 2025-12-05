'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar, Ruler } from 'lucide-react';
import { Project } from '@/lib/data/projects';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  return (
    <Link href={`/portfolio/${project.id}`} className="block group">
      <div className={cn('card-hover bg-white rounded-xl shadow-lg overflow-hidden', className)}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-neutral-800 rounded-full capitalize">
              {project.category}
            </span>
          </div>
          
          {/* Project Info Overlay */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl font-serif font-semibold mb-2">
              {project.title}
            </h3>
            <div className="flex items-center text-sm opacity-90">
              <MapPin size={14} className="mr-1" />
              {project.location}
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-neutral-600 mb-4 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex items-center justify-between text-sm text-neutral-500">
            <div className="flex items-center">
              <Ruler size={14} className="mr-1" />
              {project.area}
            </div>
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              {project.timeline}
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-neutral-100">
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-neutral-100 text-xs text-neutral-600 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

