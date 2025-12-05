'use client';

import Link from 'next/link';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { BRAND, NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';
import { formatPhoneNumber } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-serif font-bold text-accent-400">
                {BRAND.name}
              </h3>
            </Link>
            <p className="text-neutral-300 mb-6 max-w-md">
              {BRAND.description}
            </p>
            <div className="flex space-x-4">
              <Link
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-800 rounded-full hover:bg-accent-600 transition-colors duration-300"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-accent-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-accent-400 mt-1 flex-shrink-0" />
                <div>
                  <Link
                    href={`tel:${BRAND.phone}`}
                    className="text-neutral-300 hover:text-accent-400 transition-colors duration-300"
                  >
                    {formatPhoneNumber(BRAND.phone)}
                  </Link>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-accent-400 mt-1 flex-shrink-0" />
                <div>
                  <Link
                    href={`mailto:${BRAND.email}`}
                    className="text-neutral-300 hover:text-accent-400 transition-colors duration-300"
                  >
                    {BRAND.email}
                  </Link>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-neutral-300">{BRAND.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © {currentYear} {BRAND.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-neutral-400 hover:text-accent-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-neutral-400 hover:text-accent-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

