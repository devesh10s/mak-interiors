import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { BRAND, SOCIAL_LINKS } from '@/lib/constants';
import { formatPhoneNumber, generateWhatsAppLink } from '@/lib/utils';
import SectionHeader from '@/components/ui/SectionHeader';
import ContactForm from '@/components/forms/ContactForm';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const whatsappMessage = "Hi! I'm interested in your interior design services. Could you please provide more information?";

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-accent-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionHeader
              subtitle="Contact Us"
              title="Let's Create Something Beautiful Together"
              description="Ready to transform your space? Get in touch with us for a free consultation and let's bring your vision to life."
              centered
            />
          </div>

          {/* Quick Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <button
              onClick={() => window.open(`tel:${BRAND.phone}`, '_self')}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4 group-hover:bg-accent-500 transition-colors duration-300">
                <Phone className="w-8 h-8 text-accent-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Call Us Now</h3>
              <p className="text-neutral-600 mb-3">Speak directly with our design experts</p>
              <p className="text-accent-600 font-medium">{formatPhoneNumber(BRAND.phone)}</p>
            </button>

            <button
              onClick={() => window.open(generateWhatsAppLink(BRAND.phone, whatsappMessage), '_blank')}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 group-hover:bg-green-500 transition-colors duration-300">
                <MessageCircle className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">WhatsApp</h3>
              <p className="text-neutral-600 mb-3">Quick chat for instant responses</p>
              <p className="text-green-600 font-medium">Message Us</p>
            </button>

            <button
              onClick={() => window.open(`mailto:${BRAND.email}`, '_self')}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                <Mail className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Email Us</h3>
              <p className="text-neutral-600 mb-3">Send detailed project requirements</p>
              <p className="text-blue-600 font-medium">{BRAND.email}</p>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <SectionHeader
                  subtitle="Get in Touch"
                  title="Send Us a Message"
                  description="Fill out the form below and we'll get back to you within 24 hours with a detailed response."
                />
              </div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-neutral-50 rounded-xl p-8 sticky top-24">
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-8">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-accent-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-neutral-900 mb-1">Phone</h4>
                      <p className="text-neutral-600">{formatPhoneNumber(BRAND.phone)}</p>
                      <p className="text-sm text-neutral-500">Available 9 AM - 8 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-accent-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-neutral-900 mb-1">Email</h4>
                      <p className="text-neutral-600">{BRAND.email}</p>
                      <p className="text-sm text-neutral-500">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-accent-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-neutral-900 mb-1">Location</h4>
                      <p className="text-neutral-600">{BRAND.address}</p>
                      <p className="text-sm text-neutral-500">Serving Mumbai & surrounding areas</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-accent-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-neutral-900 mb-1">Business Hours</h4>
                      <div className="text-neutral-600 text-sm space-y-1">
                        <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                        <p>Saturday: 10:00 AM - 6:00 PM</p>
                        <p>Sunday: By appointment only</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-neutral-200">
                  <h4 className="font-medium text-neutral-900 mb-4">Follow Us</h4>
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-600 hover:text-accent-700 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @makx.interiors
                  </a>
                </div>

                <div className="mt-8">
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => window.open(generateWhatsAppLink(BRAND.phone, whatsappMessage), '_blank')}
                  >
                    <MessageCircle size={16} className="mr-2" />
                    Quick WhatsApp Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionHeader
              subtitle="Visit Us"
              title="Our Location"
              description="We're located in the heart of Mumbai, easily accessible from all major areas."
              centered
            />
          </div>

          {/* Map Placeholder */}
          <div className="bg-neutral-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-600 mb-2">Interactive Map</h3>
              <p className="text-neutral-500">
                Map integration would be added here<br />
                (Google Maps, Mapbox, etc.)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
