
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, MessageSquare, TrendingUp, Video, Code, MessageCircle } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  const [isTyping, setIsTyping] = useState(true);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Feed UR Idea. We\'ll Fire It Into the Future.🚀';
  const typingRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let currentIndex = 0;
    const typeNextCharacter = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        typingRef.current = setTimeout(typeNextCharacter, 75);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setTypedText('');
          setIsTyping(true);
          currentIndex = 0;
          typeNextCharacter();
        }, 5000);
      }
    };
    typeNextCharacter();
    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, []);

  const renderGradientText = (text: string) => {
    if (!text) return null;

    const parts = [];
    let i = 0;
    
    while (i < text.length) {
      if (text.substring(i, i + 4) === 'Feed') {
        parts.push(<span key={`feed-${i}`}><span className="gradient-text">F</span>eed</span>);
        i += 4;
      } else if (text.substring(i, i + 3) === ' UR') {
        parts.push(<span key={`ur-${i}`}><span> </span><span className="gradient-text">UR</span></span>);
        i += 3;
      } else if (text.substring(i, i + 5) === ' Idea') {
        parts.push(<span key={`idea-${i}`}><span> </span><span className="gradient-text">I</span>dea</span>);
        i += 5;
      } else if (text.substring(i, i + 12) === '. We\'ll Fire') {
        parts.push(<span key={`fire-${i}`}>. We'll Fire</span>);
        i += 12;
      } else if (text.substring(i, i + 6) === ' It In') {
        parts.push(<span key={`it-${i}`}> It In</span>);
        i += 6;
      } else if (text.substring(i, i + 13) === 'to the Future') {
        parts.push(<span key={`future-${i}`}>to the Future</span>);
        i += 13;
      } else {
        parts.push(<span key={`other-${i}`}>{text[i]}</span>);
        i++;
      }
    }
    
    return <>{parts}</>;
  };

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

  return <>
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark z-0"></div>
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,45,85,0.3)_0,rgba(255,45,85,0)_50%)]"></div>
        <div className="dot-pattern absolute inset-0 opacity-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 md:pt-0">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white flex items-center justify-center flex-wrap">
              {renderGradientText(typedText)}
              {isTyping && <span className="typing-cursor"></span>}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 animate-fade-in">
              FURI is your AI-powered digital marketing partner — creating data-intelligent, emotionally resonant campaigns.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Let's Talk
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Our AI Stack
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <a href="#services" className="flex flex-col items-center text-gray-400 hover:text-furi-red transition-colors" aria-label="Scroll down">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg className="animate-bounce w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      <section id="services" className="section bg-furi-charcoal relative">
        <div className="dot-pattern absolute inset-0 opacity-5"></div>
        <div className="relative z-10">
          <SectionHeading title="AI-Powered, Emotionally Intelligent Marketing" subtitle="Leverage cutting-edge AI technology with our human expertise to create marketing that resonates and converts." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} features={service.features} className="animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }} />)}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="btn-primary inline-flex items-center">
              Explore Our Full Stack of Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section id="industries" className="section bg-furi-charcoal-dark relative">
        <div className="dot-pattern absolute inset-0 opacity-5"></div>
        <div className="relative z-10">
          <SectionHeading title="Marketing That Thinks Across Industries" subtitle="Our AI solutions adapt to the unique challenges and opportunities in your specific market." />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['Luxury', 'Hospitality', 'Education', 'Health & Wellness', 'SaaS', 'E-commerce', 'Real Estate', 'Fashion & Beauty'].map((industry, index) => <div key={index} className="bg-furi-charcoal-light rounded-xl p-6 text-center card-hover" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <h3 className="text-white font-semibold">{industry}</h3>
              </div>)}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/industries" className="btn-primary inline-flex items-center">
              Let's Explore Yours
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section id="case-studies" className="section bg-furi-charcoal relative">
        <div className="dot-pattern absolute inset-0 opacity-5"></div>
        <div className="relative z-10">
          <SectionHeading title="Less Hype. More Metrics." subtitle="Real results for real businesses. See the impact of our AI-powered approach." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((study, index) => <CaseStudyCard key={index} title={study.title} result={study.result} image={study.image} onClick={() => {}} className="animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }} />)}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/performance" className="btn-primary inline-flex items-center">
              View Case Library
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section id="why-furi" className="section bg-furi-charcoal-dark relative">
        <div className="dot-pattern absolute inset-0 opacity-5"></div>
        <div className="relative z-10">
          <SectionHeading title="Built for Brilliance. Wired for Results." subtitle="What makes FURI different from other marketing agencies?" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            title: 'AI-First Thinking',
            description: 'We built our systems ground-up to leverage artificial intelligence.'
          }, {
            title: 'Creative That Converts',
            description: 'Emotional intelligence combined with data-driven decisions.'
          }, {
            title: 'Transparent Data Layer',
            description: 'Full visibility into how your marketing dollars perform.'
          }, {
            title: 'Systems for Sustainable Growth',
            description: 'We build marketing systems that scale with your business.'
          }].map((item, index) => <div key={index} className="bg-furi-charcoal-light rounded-xl p-6 card-hover border border-gray-800" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>)}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/why-furi" className="btn-primary inline-flex items-center">
              Learn Why We're Different
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="section bg-furi-charcoal relative">
        <div className="dot-pattern absolute inset-0 opacity-5"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionHeading title="You Bring the Idea. We'll Feed It." subtitle="Tell us what your brand wants to become. We'll build the AI engine to take you there." />
          
          <ContactForm />
        </div>
      </section>

      <a href="https://wa.me/917416992299" target="_blank" rel="noopener noreferrer" className="whatsapp-widget" aria-label="Chat with us on WhatsApp">
        <MessageCircle className="h-7 w-7 text-white" />
      </a>
    </>;
};

export default Index;
