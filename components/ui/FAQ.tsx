'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ as FAQType } from '@/lib/data/faq';
import { cn } from '@/lib/utils';

interface FAQProps {
  faqs: FAQType[];
  className?: string;
}

const FAQ = ({ faqs, className }: FAQProps) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className={cn('space-y-4', className)}>
      {faqs.map((faq) => {
        const isOpen = openItems.has(faq.id);
        return (
          <div
            key={faq.id}
            className="bg-white border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors duration-300"
            >
              <h3 className="font-semibold text-neutral-900 pr-4">
                {faq.question}
              </h3>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-accent-600 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0" />
              )}
            </button>
            
            <div
              className={cn(
                'overflow-hidden transition-all duration-300',
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              )}
            >
              <div className="px-6 pb-4">
                <p className="text-neutral-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;

