
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CaseStudyCard from '@/components/CaseStudyCard';
import SectionHeading from '@/components/SectionHeading';

const CaseStudiesSection = () => {
  const caseStudies = [{
    title: 'Luxury Retail Brand',
    result: '6.2x ROAS in 90 days',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
  }, {
    title: 'HealthTech Platform',
    result: '+123% qualified leads',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
  }, {
    title: 'EdTech Startup',
    result: '+67% funnel conversion',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
  }, {
    title: 'Fashion E-commerce',
    result: '-38% CPA with AI automation',
    image: 'https://images.unsplash.com/photo-1589810635657-232948472d98'
  }];

  return (
    <section id="case-studies" className="section bg-furi-charcoal relative">
      <div className="dot-pattern absolute inset-0 opacity-5"></div>
      <div className="relative z-10">
        <SectionHeading 
          title="Less Hype. More Metrics." 
          subtitle="Real results for real businesses. See the impact of our AI-powered approach." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudyCard 
              key={index} 
              title={study.title} 
              result={study.result} 
              image={study.image} 
              onClick={() => {}} 
              className="animate-fade-in" 
              style={{
                animationDelay: `${index * 0.1}s`
              }} 
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/performance" className="btn-primary inline-flex items-center">
            View Case Library
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
