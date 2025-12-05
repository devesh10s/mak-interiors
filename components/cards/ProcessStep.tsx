'use client';

import { ProcessStep as ProcessStepType } from '@/lib/data/process';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProcessStepProps {
  step: ProcessStepType;
  isActive?: boolean;
  isCompleted?: boolean;
  className?: string;
}

const ProcessStep = ({ step, isActive = false, isCompleted = false, className }: ProcessStepProps) => {
  return (
    <div className={cn('relative', className)}>
      {/* Step Card */}
      <div className={cn(
        'bg-white rounded-xl shadow-lg p-8 transition-all duration-300',
        isActive && 'ring-2 ring-accent-500 shadow-xl',
        isCompleted && 'bg-accent-50'
      )}>
        {/* Step Number */}
        <div className="flex items-center mb-6">
          <div className={cn(
            'flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg mr-4',
            isCompleted 
              ? 'bg-accent-500 text-white' 
              : isActive 
                ? 'bg-accent-100 text-accent-600' 
                : 'bg-neutral-100 text-neutral-600'
          )}>
            {isCompleted ? (
              <CheckCircle size={24} />
            ) : (
              step.step.toString().padStart(2, '0')
            )}
          </div>
          <div className="text-sm font-medium text-accent-600 bg-accent-50 px-3 py-1 rounded-full">
            {step.duration}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-4">
          {step.title}
        </h3>
        <p className="text-neutral-600 mb-6 leading-relaxed">
          {step.description}
        </p>

        {/* Details */}
        <ul className="space-y-3">
          {step.details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 mt-2 flex-shrink-0" />
              <span className="text-sm text-neutral-700">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProcessStep;
