
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BarChart3, LineChart, PieChart, TrendingUp } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CaseStudyCard from '@/components/CaseStudyCard';
import { cn } from '@/lib/utils';

const MetricCard = ({ title, value, change, icon: Icon, className }: { 
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  className?: string;
}) => (
  <div className={cn("bg-furi-charcoal-light rounded-xl p-6 card-hover", className)}>
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-gray-400 font-medium">{title}</h3>
      <Icon className="h-5 w-5 text-furi-red" />
    </div>
    <p className="text-3xl font-bold text-white mb-2">{value}</p>
    <div className="flex items-center text-green-500">
      <ArrowUpRight className="h-4 w-4 mr-1" />
      <span>{change}</span>
    </div>
  </div>
);

const Performance = () => {
  const caseStudies = [
    {
      title: 'Luxury Retail Brand',
      result: '6.2x ROAS in 90 days',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    },
    {
      title: 'HealthTech Platform',
      result: '+123% qualified leads',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    },
    {
      title: 'EdTech Startup',
      result: '+67% funnel conversion',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    },
    {
      title: 'Fashion E-commerce',
      result: '-38% CPA with AI automation',
      image: 'https://images.unsplash.com/photo-1589810635657-232948472d98',
    },
    {
      title: 'SaaS Platform',
      result: '+92% demo requests',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    },
    {
      title: 'Real Estate Agency',
      result: '+45% lead quality score',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Less Hype. More Metrics.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            We judge our success by the real business results we deliver for our clients, not by vanity metrics or industry awards.
          </p>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="section bg-furi-charcoal">
        <SectionHeading
          title="Our Performance Metrics"
          subtitle="A snapshot of the results we've delivered across all client accounts."
          alignment="left"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <MetricCard
            title="Average ROAS"
            value="4.7x"
            change="+112% vs. previous"
            icon={BarChart3}
            className="animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          />
          <MetricCard
            title="Lead Quality"
            value="+63%"
            change="Higher conversion rate"
            icon={TrendingUp}
            className="animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          />
          <MetricCard
            title="CPA Reduction"
            value="41%"
            change="Average across accounts"
            icon={LineChart}
            className="animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          />
          <MetricCard
            title="Revenue Growth"
            value="87%"
            change="Year over year average"
            icon={PieChart}
            className="animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          />
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section bg-furi-charcoal-dark">
        <SectionHeading
          title="Case Studies"
          subtitle="Real results for real businesses. See the impact of our AI-powered approach."
          alignment="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              title={study.title}
              result={study.result}
              image={study.image}
              onClick={() => {}}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-furi-charcoal">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what our clients have to say about working with FURI."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {[
            {
              quote: "FURI transformed our marketing approach. Their AI-powered strategies doubled our qualified leads while reducing our ad spend by 30%.",
              author: "Sarah Johnson",
              role: "CMO, TechVision",
              image: "https://randomuser.me/api/portraits/women/45.jpg"
            },
            {
              quote: "Working with FURI has been a game-changer for our e-commerce brand. The personalized AI recommendations have significantly increased our conversion rates.",
              author: "Michael Chen",
              role: "Founder, StyleCraft",
              image: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            {
              quote: "The team at FURI doesn't just talk about AI – they deliver real results. Our ROAS increased by 5.8x within the first quarter of working together.",
              author: "Jessica Williams",
              role: "Marketing Director, HealthFirst",
              image: "https://randomuser.me/api/portraits/women/63.jpg"
            },
            {
              quote: "FURI's ability to analyze data and derive actionable insights has transformed our marketing strategy and yielded exceptional results for our SaaS platform.",
              author: "David Miller",
              role: "CEO, CloudSolutions",
              image: "https://randomuser.me/api/portraits/men/75.jpg"
            }
          ].map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-furi-charcoal-light rounded-xl p-8 card-hover border border-gray-800 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start mb-6">
                <div className="mr-4">
                  <svg className="h-12 w-12 text-furi-red opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 mb-4">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="h-10 w-10 rounded-full mr-3" 
                    />
                    <div>
                      <h4 className="text-white font-medium">{testimonial.author}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
            Ready for Results-Driven Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI-powered marketing approach can deliver measurable results for your business.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center">
            View Case Library
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Performance;
