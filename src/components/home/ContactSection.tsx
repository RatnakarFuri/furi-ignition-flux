
import React from 'react';
import ContactForm from '@/components/ContactForm';
import SectionHeading from '@/components/SectionHeading';

const ContactSection = () => {
  return (
    <section id="contact" className="section bg-furi-charcoal-light relative">
      <div className="dot-pattern absolute inset-0 opacity-5"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeading 
          title="You Bring the Idea. We'll Feed It." 
          subtitle="Tell us what your brand wants to become. We'll build the AI engine to take you there." 
        />
        
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
