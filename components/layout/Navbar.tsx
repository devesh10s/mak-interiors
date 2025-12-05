'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Instagram, Phone } from 'lucide-react';
import { NAV_LINKS, BRAND, SOCIAL_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-serif font-bold text-accent-700">
              {BRAND.name}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-300 hover:text-accent-600',
                  pathname === link.href
                    ? 'text-accent-600'
                    : isScrolled
                    ? 'text-neutral-700'
                    : 'text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'p-2 rounded-full transition-colors duration-300',
                isScrolled
                  ? 'text-neutral-600 hover:text-accent-600'
                  : 'text-white hover:text-accent-200'
              )}
            >
              <Instagram size={20} />
            </Link>
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open(`tel:${BRAND.phone}`, '_self')}
            >
              <Phone size={16} className="mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={cn(
              'lg:hidden p-2 rounded-md transition-colors duration-300',
              isScrolled
                ? 'text-neutral-700 hover:bg-neutral-100'
                : 'text-white hover:bg-white/10'
            )}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container-custom py-6">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-medium py-2 transition-colors duration-300 hover:text-accent-600',
                  pathname === link.href
                    ? 'text-accent-600'
                    : 'text-neutral-700'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-neutral-200">
              <Link
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-600 hover:text-accent-600 transition-colors duration-300"
              >
                <Instagram size={20} />
              </Link>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  window.open(`tel:${BRAND.phone}`, '_self');
                  setIsOpen(false);
                }}
                className="flex-1"
              >
                <Phone size={16} className="mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

