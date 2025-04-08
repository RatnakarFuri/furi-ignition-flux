
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Heart, LineChart, Zap } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gradient">
            We're Not Just Marketers. We're Architects of Intelligent Growth.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            FURI is a team of AI specialists, creative strategists, and marketing technologists committed to creating emotionally resonant, data-intelligent campaigns.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section bg-furi-charcoal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
              Our Story
            </h2>
            <p className="text-gray-300 mb-6">
              FURI was founded in 2021 by a team of marketing veterans and AI engineers who saw a gap in the industry: marketing agencies weren't effectively leveraging the power of artificial intelligence, and AI marketing tools lacked the human touch needed for truly effective campaigns.
            </p>
            <p className="text-gray-300 mb-6">
              We built FURI from the ground up to be different—a marketing agency with AI at its core, but with a deep understanding of human emotion and behavior. Our name, FURI, represents our commitment to take your ideas and "feed" them into our intelligent systems to create marketing that fires into the future.
            </p>
            <p className="text-gray-300">
              Today, we work with brands across industries, using our unique blend of AI technology and human creativity to drive measurable business results.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-0.5 bg-gradient-iris rounded-lg blur-sm"></div>
            <div className="relative bg-furi-charcoal-dark p-6 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                alt="Our Story" 
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="section bg-furi-charcoal-dark">
        <SectionHeading
          title="What We Believe"
          subtitle="Four core principles that drive everything we do at FURI."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="bg-furi-charcoal-light rounded-xl p-6 card-hover animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="h-12 w-12 rounded-lg bg-gradient-iris flex items-center justify-center mb-4 animate-pulse-glow">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Vision-Driven</h3>
            <p className="text-gray-400">
              We believe that the most effective marketing starts with a clear vision of what your brand can become. Our AI systems help turn that vision into reality.
            </p>
          </div>
          
          <div className="bg-furi-charcoal-light rounded-xl p-6 card-hover animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="h-12 w-12 rounded-lg bg-gradient-iris flex items-center justify-center mb-4 animate-pulse-glow">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Emotionally Smart</h3>
            <p className="text-gray-400">
              We understand that purchasing decisions are driven by emotions, not just logic. Our approach combines emotional intelligence with data-driven insights.
            </p>
          </div>
          
          <div className="bg-furi-charcoal-light rounded-xl p-6 card-hover animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="h-12 w-12 rounded-lg bg-gradient-iris flex items-center justify-center mb-4 animate-pulse-glow">
              <LineChart className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Full-Funnel Thinking</h3>
            <p className="text-gray-400">
              We don't just focus on one part of the customer journey. We create integrated strategies that move customers from awareness to advocacy.
            </p>
          </div>
          
          <div className="bg-furi-charcoal-light rounded-xl p-6 card-hover animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="h-12 w-12 rounded-lg bg-gradient-iris flex items-center justify-center mb-4 animate-pulse-glow">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Velocity Over Vanity</h3>
            <p className="text-gray-400">
              We prioritize real business results over vanity metrics. Our success is measured by the growth we create for our clients, not by awards or accolades.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="section bg-furi-charcoal">
        <SectionHeading
          title="How We Work"
          subtitle="Our proven process for creating AI-powered marketing that drives results."
          alignment="left"
        />
        
        <div className="space-y-12 mt-16">
          {[
            {
              step: '01',
              title: 'Deep Discovery',
              description: 'We start by understanding your business, audience, and objectives through a comprehensive discovery process enhanced by AI data analysis.'
            },
            {
              step: '02',
              title: 'System Mapping',
              description: 'We map out your existing marketing ecosystem and identify opportunities for AI-enhanced optimization and growth.'
            },
            {
              step: '03',
              title: 'AI & Creative Integration',
              description: 'Our team develops a custom marketing strategy that integrates AI technology with creative human insights.'
            },
            {
              step: '04',
              title: 'Adaptive Growth Optimization',
              description: 'We continuously monitor, learn, and adapt our approach based on real-time data and emerging trends.'
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
            Let's Turn Your Idea Into Intelligence.
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to experience the FURI difference? Let's talk about how we can help your brand grow.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center">
            Start Your FURI Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
