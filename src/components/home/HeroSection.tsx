
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
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

  return (
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
  );
};

export default HeroSection;
