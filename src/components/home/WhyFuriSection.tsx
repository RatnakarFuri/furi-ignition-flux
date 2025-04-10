
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';

const WhyFuriSection = () => {
  const features = [{
    title: 'AI-First Thinking',
    description: 'We built our systems ground-up to leverage artificial intelligence.'
  }, {
    title: 'Creative That Converts',
    description: 'Emotional intelligence combined with data-driven decisions.'
  }, {
    title: 'Transparent Data Layer',
    description: 'Full visibility into how your marketing dollars perform.'
  }, {
    title: 'Systems for Sustainable Growth',
    description: 'We build marketing systems that scale with your business.'
  }];

  return (
    <section id="why-furi" className="section bg-furi-charcoal-dark relative">
      <div className="dot-pattern absolute inset-0 opacity-5"></div>
      <div className="relative z-10">
        <SectionHeading 
          title="Built for Brilliance. Wired for Results." 
          subtitle="What makes FURI different from other marketing agencies?" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="bg-furi-charcoal-light rounded-xl p-6 card-hover border border-gray-800" 
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/why-furi" className="btn-primary inline-flex items-center">
            Learn Why We're Different
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyFuriSection;
