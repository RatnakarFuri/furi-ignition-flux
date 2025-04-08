
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Let's Turn Your Idea Into Intelligence
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Ready to explore how our AI-powered marketing can transform your business? Get in touch, and let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-furi-charcoal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
              Get In Touch
            </h2>
            <p className="text-gray-300 mb-8">
              Fill out the form, and one of our team members will get back to you within 24 hours. We're excited to learn about your project and explore how we can help.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-lg bg-furi-red/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-5 w-5 text-furi-red" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email Us</h3>
                  <a href="mailto:hello@furiagency.com" className="text-gray-400 hover:text-white transition-colors">
                    hello@furiagency.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-lg bg-furi-red/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-5 w-5 text-furi-red" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Call Us</h3>
                  <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-lg bg-furi-red/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-furi-red" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Visit Us</h3>
                  <address className="text-gray-400 not-italic">
                    123 AI Boulevard<br />
                    San Francisco, CA 94105<br />
                    United States
                  </address>
                </div>
              </div>
            </div>
            
            <div className="bg-furi-charcoal-light rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-3">Office Hours</h3>
              <p className="text-gray-400 mb-4">
                Monday to Friday: 9am - 6pm PST<br />
                Saturday & Sunday: Closed
              </p>
              <p className="text-gray-400">
                Need urgent assistance? Email us with "URGENT" in the subject line, and we'll prioritize your request.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-furi-charcoal-light rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">
                Tell Us About Your Project
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-furi-charcoal-dark">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Find quick answers to common questions about working with FURI."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {[
            {
              question: "What information should I prepare for our first call?",
              answer: "It's helpful to have your current marketing challenges, business goals, target audience information, and any previous marketing data you're willing to share. This helps us provide the most value during our initial conversation."
            },
            {
              question: "How does your pricing work?",
              answer: "We offer customized pricing based on your specific needs and goals. After our initial consultation, we'll provide a detailed proposal with transparent pricing based on the services and solutions recommended for your business."
            },
            {
              question: "Do you offer one-time projects or only ongoing services?",
              answer: "We offer both one-time strategic projects and ongoing marketing partnerships. Many clients start with a focused project and then transition to a long-term relationship as they see results."
            },
            {
              question: "How do you measure success?",
              answer: "We establish clear KPIs based on your business objectives at the start of our engagement. These might include ROI, ROAS, lead quality, conversion rates, or other metrics specific to your goals."
            },
            {
              question: "What industries do you specialize in?",
              answer: "We have experience across many industries, with particular expertise in luxury, hospitality, education, health & wellness, SaaS, e-commerce, real estate, and fashion & beauty. Our AI systems adapt to any industry's unique challenges."
            },
            {
              question: "How is FURI different from other marketing agencies?",
              answer: "We're built from the ground up with AI at our core, but we combine this with human creativity and industry expertise. This hybrid approach allows us to deliver more personalized, effective, and innovative marketing solutions."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-furi-charcoal-light rounded-xl p-6 border border-gray-800">
              <h4 className="text-xl font-bold text-white mb-3">{faq.question}</h4>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Contact;
