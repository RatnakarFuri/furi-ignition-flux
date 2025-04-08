
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import IndustryCard from '@/components/IndustryCard';

const Industries = () => {
  const industries = [
    {
      title: 'Luxury',
      stats: '+47% engagement for premium brands',
      image: 'https://images.unsplash.com/photo-1542327897-d73f4005b533'
    },
    {
      title: 'Hospitality',
      stats: '+83% direct bookings',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461'
    },
    {
      title: 'Education',
      stats: '-31% cost per enrollment',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1'
    },
    {
      title: 'Health & Wellness',
      stats: '+215% qualified patient leads',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b'
    },
    {
      title: 'SaaS',
      stats: '+78% demo conversions',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
    },
    {
      title: 'E-commerce',
      stats: '+124% ROAS improvement',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3'
    },
    {
      title: 'Real Estate',
      stats: '-42% time to close',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa'
    },
    {
      title: 'Fashion & Beauty',
      stats: '+67% social engagement',
      image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3'
    },
    {
      title: 'Nonprofits',
      stats: '+129% donation conversions',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6'
    },
    {
      title: 'Logistics',
      stats: '+38% efficiency in lead gen',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Marketing That Thinks Across Industries.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            We adapt our AI-powered marketing approach to the unique challenges and opportunities in your specific market.
          </p>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section className="section bg-furi-charcoal">
        <SectionHeading
          title="Industries We Serve"
          subtitle="Our AI marketing solutions are customized for a wide range of sectors, each with its own unique challenges and opportunities."
          alignment="left"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              title={industry.title}
              stats={industry.stats}
              image={industry.image}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
          
          <div className="bg-furi-charcoal-light rounded-xl flex items-center justify-center p-6 card-hover border border-dashed border-gray-700">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">Custom Solutions</h3>
              <p className="text-gray-400 text-sm">Don't see your industry? We create custom solutions for unique markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Approach Section */}
      <section className="section bg-furi-charcoal-dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
              Industry-Specific AI Models
            </h2>
            <p className="text-gray-300 mb-6">
              We don't use one-size-fits-all solutions. Our AI models are trained on industry-specific data to understand the unique language, buyer journey, and conversion triggers in your market.
            </p>
            <ul className="space-y-4">
              {[
                'Custom audience segmentation for your industry',
                'Specialized content strategies for your market',
                'Competitive intelligence specific to your sector',
                'Channel optimization based on industry benchmarks'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-furi-red/20 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-furi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-0.5 bg-gradient-iris rounded-lg blur-sm"></div>
            <div className="relative bg-furi-charcoal-dark p-6 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                alt="Industry Specific AI" 
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
            Let's Explore Your Industry
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to see how our AI-powered marketing solutions can be tailored to your specific industry challenges?
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center">
            Let's Explore Yours
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Industries;
