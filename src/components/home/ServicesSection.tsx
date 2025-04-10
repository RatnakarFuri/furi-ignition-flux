
import React from 'react';
import { ArrowRight, Palette, MessageSquare, TrendingUp, Video, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';
import SectionHeading from '@/components/SectionHeading';

const ServicesSection = () => {
  const services = [{
    title: 'Brand Strategy & Design',
    description: 'Crafting identity, clarity, and emotional resonance from the ground up.',
    icon: Palette,
    features: ['Brand Positioning', 'Brand Personality', 'Brand Identity & Packaging Design', 'Brand Guidelines']
  }, {
    title: 'Brand Communication',
    description: 'Your voice — amplified, aligned, and always on-brand.',
    icon: MessageSquare,
    features: ['Content Creation', 'Social Media Marketing', 'Influencer Collaborations', 'Online Reputation Management', 'WhatsApp Marketing']
  }, {
    title: 'Growth Marketing',
    description: 'Performance-led, AI-optimized strategies that scale.',
    icon: TrendingUp,
    features: ['Paid Search & Social Media Marketing', 'Search Engine Optimization', 'E-commerce Marketing', 'Ad Campaign Management & Analytics']
  }, {
    title: 'Video Production',
    description: 'Storytelling that moves — across screens, cultures, and formats.',
    icon: Video,
    features: ['Brand Films, Corporate Tours & Explanatory Videos', 'Short-Form Social Content (IG Reels, YouTube Shorts)', 'Multi-Language Podcast Production']
  }, {
    title: 'Creative Technology',
    description: 'Where innovation meets interaction — powered by AI.',
    icon: Code,
    features: ['WhatsApp Chatbots', 'Conversational AI Chatbots', 'Generative AI Campaigns', 'Web & Application Development']
  }];

  return (
    <section id="services" className="section bg-furi-charcoal relative">
      <div className="dot-pattern absolute inset-0 opacity-5"></div>
      <div className="relative z-10">
        <SectionHeading 
          title="AI-Powered, Emotionally Intelligent Marketing" 
          subtitle="Leverage cutting-edge AI technology with our human expertise to create marketing that resonates and converts." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
              features={service.features} 
              className="animate-fade-in" 
              style={{
                animationDelay: `${index * 0.1}s`
              }} 
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services" className="btn-primary inline-flex items-center">
            Explore Our Full Stack of Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
