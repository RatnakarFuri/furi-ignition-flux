
import React, { useState } from 'react';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    industry: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        brand: '',
        industry: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-furi-charcoal-light border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent transition-all duration-300"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-furi-charcoal-light border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent transition-all duration-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-gray-300 mb-1">
            Brand
          </label>
          <input
            id="brand"
            name="brand"
            type="text"
            value={formData.brand}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-furi-charcoal-light border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent transition-all duration-300"
          />
        </div>
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-1">
            Industry
          </label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-furi-charcoal-light border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent transition-all duration-300"
          >
            <option value="">Select Industry</option>
            <option value="Luxury">Luxury</option>
            <option value="Hospitality">Hospitality</option>
            <option value="Education">Education</option>
            <option value="Health & Wellness">Health & Wellness</option>
            <option value="SaaS">SaaS</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Fashion & Beauty">Fashion & Beauty</option>
            <option value="Nonprofits">Nonprofits</option>
            <option value="Logistics">Logistics</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md bg-furi-charcoal-light border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent transition-all duration-300"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full flex justify-center items-center"
      >
        {isSubmitting ? (
          <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
        ) : null}
        {isSubmitting ? 'Submitting...' : 'Submit & Connect →'}
      </button>
    </form>
  );
};

export default ContactForm;
