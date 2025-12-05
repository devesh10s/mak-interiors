import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { SERVICES } from '@/lib/data/services';
import { FAQS } from '@/lib/data/faq';
import { BRAND } from '@/lib/constants';
import SectionHeader from '@/components/ui/SectionHeader';
import FAQ from '@/components/ui/FAQ';
import Button from '@/components/ui/Button';

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-accent-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionHeader
              subtitle="Our Services"
              title="Comprehensive Interior Design Solutions"
              description="From concept to completion, we offer a full range of interior design services to transform your space into something extraordinary."
              centered
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={`tel:${BRAND.phone}`}
                    className="inline-flex items-center justify-center w-full bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Phone size={16} className="mr-2" />
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionHeader
              subtitle="Our Process"
              title="How We Work"
              description="Our streamlined process ensures that every project is completed efficiently and to the highest standards."
              centered
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We start with an in-depth consultation to understand your vision, requirements, and budget.'
              },
              {
                step: '02',
                title: 'Design Development',
                description: 'Our team creates detailed designs, 3D visualizations, and material selections for your approval.'
              },
              {
                step: '03',
                title: 'Execution',
                description: 'We manage the entire execution process, ensuring quality and timely completion.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 text-accent-600 font-bold text-xl rounded-full mb-6 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-300">
                  {item.step}
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-neutral-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/process">
              <Button variant="secondary" size="lg">
                View Detailed Process
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionHeader
              subtitle="FAQ"
              title="Frequently Asked Questions"
              description="Find answers to common questions about our interior design services and process."
              centered
            />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <FAQ faqs={FAQS} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-600 to-accent-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your interior design needs and create a space that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BRAND.phone}`}
              className="inline-flex items-center justify-center bg-white text-accent-600 hover:bg-accent-50 px-8 py-4 text-lg rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Phone size={20} className="mr-2" />
              Call Now
            </a>
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-accent-600">
                Get Free Consultation
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

