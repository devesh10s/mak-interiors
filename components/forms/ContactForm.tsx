'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const projectTypes = [
  'Residential - New Home',
  'Residential - Renovation',
  'Commercial - Office',
  'Commercial - Retail',
  'Hospitality',
  'Other'
];

const budgetRanges = [
  'Under ₹5 Lakhs',
  '₹5-10 Lakhs',
  '₹10-25 Lakhs',
  '₹25-50 Lakhs',
  '₹50 Lakhs+',
  'Prefer not to say'
];

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    city: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[\d\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, you would send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        projectType: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
          <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
          <p className="text-green-800">
            Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
          <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
          <p className="text-red-800">
            Sorry, there was an error sending your message. Please try again or call us directly.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={cn(
              'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-300',
              errors.name ? 'border-red-300' : 'border-neutral-300'
            )}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={cn(
              'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-300',
              errors.email ? 'border-red-300' : 'border-neutral-300'
            )}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={cn(
              'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-300',
              errors.phone ? 'border-red-300' : 'border-neutral-300'
            )}
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-2">
            City *
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={cn(
              'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-300',
              errors.city ? 'border-red-300' : 'border-neutral-300'
            )}
            placeholder="Enter your city"
          />
          {errors.city && (
            <p className="mt-1 text-sm text-red-600">{errors.city}</p>
          )}
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-neutral-700 mb-2">
            Project Type *
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={cn(
              'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-300',
              errors.projectType ? 'border-red-300' : 'border-neutral-300'
            )}
          >
            <option value="">Select project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p className="mt-1 text-sm text-red-600">{errors.projectType}</p>
          )}
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-2">
            Budget Range (Optional)
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-300"
          >
            <option value="">Select budget range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={cn(
            'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-300 resize-vertical',
            errors.message ? 'border-red-300' : 'border-neutral-300'
          )}
          placeholder="Tell us about your project requirements, timeline, and any specific preferences..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            Sending Message...
          </>
        ) : (
          <>
            <Send size={20} className="mr-2" />
            Send Message
          </>
        )}
      </Button>

      <p className="text-sm text-neutral-600 text-center">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  );
};

export default ContactForm;
