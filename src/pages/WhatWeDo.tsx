
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, ChartBar, Code, MessageSquare, Rocket, Sparkles } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';

const WhatWeDo = () => {
  const services = [
    {
      title: 'AI Strategy & Intelligence',
      description: 'Our AI-powered approaches predict market trends and consumer behavior before they become mainstream.',
      icon: Brain,
      features: ['Predictive market modeling', 'Behavioral segmentation', 'Sentiment and trend detection'],
    },
    {
      title: 'Performance Marketing',
      description: 'Data-driven campaigns that optimize for ROI and conversion metrics in real-time.',
      icon: ChartBar,
      features: ['AI-optimized ad buying', 'Budget automation', 'Smart creative testing'],
    },
    {
      title: 'AI Content & SEO',
      description: 'Content that connects emotionally while ranking in search engines across all languages.',
      icon: Sparkles,
      features: ['NLP-driven writing', 'Emotion-optimized content', 'Voice search and multilingual indexing'],
    },
    {
      title: 'AI Agents & Automation',
      description: 'Intelligent bots and systems that qualify leads and provide support 24/7.',
      icon: MessageSquare,
      features: ['Chatbots for lead gen and support', 'CRM-integrated logic flows', 'Smart funnels and triggers'],
    },
    {
      title: 'AI-Powered Web Development',
      description: 'Fast, responsive websites that convert visitors into customers with personalization.',
      icon: Code,
      features: ['Conversion-focused, fast-loading websites', 'Personalized UX in real time', 'Customizable landing page systems'],
    },
    {
      title: 'Social & Creative Intelligence',
      description: 'Visuals and content that resonate at an emotional level based on audience data.',
      icon: Rocket,
      features: ['AI-driven content planning', 'Emotion-tagged visuals', 'Engagement loop optimization'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gradient">
            AI-Powered, Human-Crafted Marketing — End to End.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            We combine cutting-edge AI technology with human creativity and expertise to deliver marketing solutions that drive real business results.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-furi-charcoal">
        <SectionHeading
          title="Our Service Pillars"
          subtitle="Six core capabilities, powered by AI, designed to transform your marketing."
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
      </section>

      {/* AI Approach Section */}
      <section className="section bg-furi-charcoal-dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
              Our AI-First Approach
            </h2>
            <p className="text-gray-300 mb-6">
              Unlike traditional agencies that added AI as an afterthought, we built FURI from the ground up with artificial intelligence at our core. Every strategy, campaign and creative asset is enhanced by our proprietary AI systems.
            </p>
            <ul className="space-y-4">
              {[
                'Data-driven insights that power all decisions',
                'Continuous optimization through machine learning',
                'Emotional intelligence to connect with audiences',
                'Scalable systems that grow with your business'
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
      <section className="section bg-furi-charcoal">
        <SectionHeading
          title="Our Marketing Process"
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
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's explore how our AI-powered marketing services can help you achieve your business goals.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center">
            See Our Full Capabilities
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
