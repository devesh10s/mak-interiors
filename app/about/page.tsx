import Image from 'next/image';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { BRAND } from '@/lib/constants';

const milestones = [
  {
    year: '2019',
    title: 'Founded MAK Interiors',
    description: 'Started our journey with a vision to transform spaces into beautiful, functional environments.'
  },
  {
    year: '2020',
    title: 'First Commercial Project',
    description: 'Successfully completed our first major commercial interior design project, establishing our reputation in the industry.'
  },
  {
    year: '2021',
    title: 'Expanded Team',
    description: 'Grew our team of talented designers and project managers to handle multiple projects simultaneously.'
  },
  {
    year: '2022',
    title: '50+ Projects Milestone',
    description: 'Reached the significant milestone of completing over 50 successful interior design projects.'
  },
  {
    year: '2023',
    title: 'Award Recognition',
    description: 'Received recognition for excellence in interior design and client satisfaction in the Mumbai region.'
  },
  {
    year: '2024',
    title: 'Digital Innovation',
    description: 'Introduced advanced 3D visualization and virtual reality tools to enhance client experience.'
  }
];

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for perfection in every project, ensuring the highest quality in design and execution.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients, understanding their vision and bringing it to life.'
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'We deliver on our promises, completing projects on time and within budget.'
  },
  {
    icon: CheckCircle,
    title: 'Innovation',
    description: 'We embrace new technologies and design trends to create contemporary, functional spaces.'
  }
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-accent-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                subtitle="About Us"
                title="Creating Spaces That Tell Your Story"
                description="At MAK Interiors, we believe that every space has a story to tell. Our passion lies in transforming ordinary spaces into extraordinary environments that reflect your personality, lifestyle, and aspirations."
              />
              
              <div className="mt-8 space-y-4">
                <p className="text-neutral-600 leading-relaxed">
                  Founded with a vision to redefine interior design in Mumbai, we have grown from a small team of passionate designers to a full-service interior design firm. Our approach combines creativity with functionality, ensuring that every space we design is not only beautiful but also practical for everyday living.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  We specialize in both residential and commercial projects, bringing the same level of dedication and expertise to every client, regardless of project size or budget.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="MAK Interiors Team"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-2xl font-bold text-accent-600">50+</div>
                <div className="text-sm text-neutral-600">Projects Completed</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-2xl font-bold text-accent-600">5+</div>
                <div className="text-sm text-neutral-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionHeader
              subtitle="Our Values"
              title="What Drives Us"
              description="Our core values guide every decision we make and every project we undertake."
              centered
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-6 group-hover:bg-accent-500 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-accent-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionHeader
              subtitle="Our Journey"
              title="Milestones & Achievements"
              description="From our humble beginnings to becoming a trusted name in interior design, here's our story."
              centered
            />
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent-200 hidden lg:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className="flex-1 lg:text-right lg:pr-8 text-center lg:text-left">
                    <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="inline-block bg-accent-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-neutral-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-accent-600 rounded-full border-4 border-white shadow-lg hidden lg:block" />
                  
                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-accent-600 to-accent-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
            Let's work together to create a space that truly reflects your vision and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BRAND.phone}`}
              className="btn-primary bg-white text-accent-600 hover:bg-accent-50"
            >
              Get Started Today
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="btn-secondary border-white text-white hover:bg-white hover:text-accent-600"
            >
              Send us an Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

