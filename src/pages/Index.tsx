
import React from 'react';
import { MessageCircle } from 'lucide-react';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import WhyFuriSection from '@/components/home/WhyFuriSection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <WhyFuriSection />
      <ContactSection />
      
      <a href="https://wa.me/917416992299" target="_blank" rel="noopener noreferrer" className="whatsapp-widget" aria-label="Chat with us on WhatsApp">
        <MessageCircle className="h-7 w-7 text-white" />
      </a>
    </>
  );
};

export default Index;
