import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, Calendar, Ruler, Tag } from 'lucide-react';
import { PROJECTS } from '@/lib/data/projects';
import Button from '@/components/ui/Button';
import { BRAND } from '@/lib/constants';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = PROJECTS.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="container-custom py-8">
        <Link href="/portfolio">
          <Button variant="ghost" size="sm">
            <ArrowLeft size={16} className="mr-2" />
            Back to Portfolio
          </Button>
        </Link>
      </div>

      {/* Hero Image */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container-custom">
            <div className="text-white">
              <span className="inline-block px-3 py-1 bg-accent-600 text-sm font-medium rounded-full mb-4 capitalize">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                {project.title}
              </h1>
              <div className="flex items-center text-lg">
                <MapPin size={20} className="mr-2" />
                {project.location}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-6">
                Project Overview
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Image Gallery */}
              {project.images.length > 1 && (
                <div className="mb-12">
                  <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-6">
                    Project Gallery
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.images.slice(1).map((image, index) => (
                      <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`${project.title} - Image ${index + 2}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="mb-8">
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-4">
                  Project Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 bg-accent-50 text-accent-700 text-sm font-medium rounded-full"
                    >
                      <Tag size={14} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-neutral-50 rounded-xl p-8 sticky top-24">
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-6">
                  Project Details
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-accent-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-neutral-900">Location</div>
                      <div className="text-neutral-600">{project.location}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Ruler className="w-5 h-5 text-accent-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-neutral-900">Area</div>
                      <div className="text-neutral-600">{project.area}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-accent-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-neutral-900">Timeline</div>
                      <div className="text-neutral-600">{project.timeline}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Tag className="w-5 h-5 text-accent-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-neutral-900">Style</div>
                      <div className="text-neutral-600">{project.style}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-neutral-200">
                  <h4 className="font-semibold text-neutral-900 mb-4">
                    Interested in a Similar Project?
                  </h4>
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => window.open(`tel:${BRAND.phone}`, '_self')}
                  >
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-12 text-center">
            Related Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS
              .filter((p) => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link key={relatedProject.id} href={`/portfolio/${relatedProject.id}`}>
                  <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedProject.images[0]}
                        alt={relatedProject.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-serif font-semibold text-neutral-900 mb-2">
                        {relatedProject.title}
                      </h3>
                      <p className="text-neutral-600 text-sm">
                        {relatedProject.location}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
