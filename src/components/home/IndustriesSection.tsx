
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';

const IndustriesSection = () => {
  const industries = ['Luxury', 'Hospitality', 'Education', 'Health & Wellness', 'SaaS', 'E-commerce', 'Real Estate', 'Fashion & Beauty'];

  return (
    <section id="industries" className="section bg-furi-charcoal-dark relative">
      <div className="dot-pattern absolute inset-0 opacity-5"></div>
      <div className="relative z-10">
        <SectionHeading 
          title="Marketing That Thinks Across Industries" 
          subtitle="Our AI solutions adapt to the unique challenges and opportunities in your specific market." 
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 text-center card-hover border border-furi-red/10" 
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <h3 className="text-furi-red font-semibold">{industry}</h3>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/industries" className="btn-primary inline-flex items-center">
            Let's Explore Yours
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
