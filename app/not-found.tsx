import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-accent-50 pt-20">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-accent-600 mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or you might have entered the wrong URL.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="primary" size="lg">
                <Home size={20} className="mr-2" />
                Go Home
              </Button>
            </Link>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={20} className="mr-2" />
              Go Back
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <p className="text-neutral-600 mb-4">
              Looking for something specific? Try these popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/portfolio" className="text-accent-600 hover:text-accent-700 transition-colors duration-300">
                Portfolio
              </Link>
              <Link href="/services" className="text-accent-600 hover:text-accent-700 transition-colors duration-300">
                Services
              </Link>
              <Link href="/about" className="text-accent-600 hover:text-accent-700 transition-colors duration-300">
                About Us
              </Link>
              <Link href="/contact" className="text-accent-600 hover:text-accent-700 transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
