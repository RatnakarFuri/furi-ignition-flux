
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, MessageSquare, TrendingUp, Video, Code } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Brand Strategy & Design',
      description: 'Crafting identity, clarity, and emotional resonance from the ground up.',
      icon: Palette,
      features: ['Brand Positioning', 'Brand Personality', 'Brand Identity & Packaging Design', 'Brand Guidelines'],
    },
    {
      title: 'Brand Communication',
      description: 'Your voice — amplified, aligned, and always on-brand.',
      icon: MessageSquare,
      features: ['Content Creation', 'Social Media Marketing', 'Influencer Collaborations', 'Online Reputation Management', 'WhatsApp Marketing'],
    },
    {
      title: 'Growth Marketing',
      description: 'Performance-led, AI-optimized strategies that scale.',
      icon: TrendingUp,
      features: ['Paid Search & Social Media Marketing', 'Search Engine Optimization', 'E-commerce Marketing', 'Ad Campaign Management & Analytics'],
    },
    {
      title: 'Video Production',
      description: 'Storytelling that moves — across screens, cultures, and formats.',
      icon: Video,
      features: ['Brand Films, Corporate Tours & Explanatory Videos', 'Short-Form Social Content (IG Reels, YouTube Shorts)', 'Multi-Language Podcast Production'],
    },
    {
      title: 'Creative Technology',
      description: 'Where innovation meets interaction — powered by AI.',
      icon: Code,
      features: ['WhatsApp Chatbots', 'Conversational AI Chatbots', 'Generative AI Campaigns', 'Web & Application Development'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark relative overflow-hidden">
        <div className="dot-pattern absolute inset-0 opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
            AI-Powered, Emotionally Intelligent Marketing — Engineered for Impact.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            We combine cutting-edge AI technology with human creativity and expertise to deliver marketing solutions that drive real business results.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-furi-charcoal relative">
        <div className="dot-pattern absolute inset-0 opacity-5"></div>
        <div className="relative z-10">
          <SectionHeading
            title="Our Core Service Pillars"
            subtitle="Five essential capabilities, powered by AI, designed to transform your marketing."
            alignment="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section bg-furi-charcoal-dark relative">
        <div className="dot-pattern absolute inset-0 opacity-5"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
              Our AI-First Approach
            </h2>
            <p className="text-gray-300 mb-6">
              Unlike traditional agencies that added AI as an afterthought, we built FURI from the ground up with artificial intelligence at our core. Every strategy, campaign and creative asset is enhanced by our proprietary AI systems.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: 'Data-Driven Insights',
                  description: 'AI-powered analytics that inform all strategic decisions'
                },
                {
                  title: 'Continuous Optimization',
                  description: 'Machine learning algorithms that improve performance over time'
                },
                {
                  title: 'Emotional Intelligence',
                  description: 'AI systems trained to understand and connect with your audience'
                },
                {
                  title: 'Scalable Systems',
                  description: 'Technology frameworks that grow with your business needs'
                }
              ].map((item, index) => (
                <div key={index} className="bg-furi-charcoal-light p-4 rounded-lg border border-gray-800 relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-iris" style={{ width: `${(index + 1) * 25}%` }}></div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-iris rounded-lg blur-sm"></div>
            <div className="relative bg-furi-charcoal-dark p-6 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                alt="AI Technology" 
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-furi-charcoal relative">
        <div className="dot-pattern absolute inset-0 opacity-5"></div>
        <div className="relative z-10">
          <SectionHeading
            title="Our Service Process"
            subtitle="How we transform your ideas into data-intelligent, emotionally resonant campaigns."
            alignment="left"
          />
          
          <div className="space-y-12 mt-16">
            {[
              {
                step: '01',
                title: 'Discovery & Analysis',
                description: 'We gather data about your business, audience, and competitors to identify opportunities.'
              },
              {
                step: '02',
                title: 'Strategy Development',
                description: 'Our AI systems help develop a comprehensive marketing strategy tailored to your goals.'
              },
              {
                step: '03',
                title: 'Creative Production',
                description: 'We create emotionally resonant content and assets guided by data insights.'
              },
              {
                step: '04',
                title: 'Campaign Execution',
                description: 'Implement marketing campaigns across channels with continuous AI optimization.'
              },
              {
                step: '05',
                title: 'Analysis & Iteration',
                description: 'Measure results, gain insights, and refine approach for continuous improvement.'
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-gradient-iris flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-dark relative">
        <div className="dot-pattern absolute inset-0 opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's explore how our AI-powered marketing services can help you achieve your business goals.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center">
            Explore Our Full Stack of Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
