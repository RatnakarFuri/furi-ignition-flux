
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, ChartBar, Shield, Zap } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const WhyFuri = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Built for Brilliance. Wired for Results.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            What makes FURI different from other marketing agencies? We're purpose-built from the ground up for the AI era.
          </p>
        </div>
      </section>

      {/* Core Strengths Section */}
      <section className="section bg-furi-charcoal">
        <SectionHeading
          title="Our Core Strengths"
          subtitle="Four pillars that define our approach to AI-powered marketing."
          alignment="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-furi-charcoal-light rounded-xl p-8 card-hover border border-gray-800 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="h-12 w-12 rounded-lg bg-gradient-iris flex items-center justify-center mb-6 animate-pulse-glow">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">AI-First Thinking</h3>
            <p className="text-gray-300 mb-6">
              Unlike agencies that add AI as an afterthought, our entire approach is built around artificial intelligence from day one. We leverage AI at every stage of the marketing process for maximum impact.
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-furi-red/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-3 w-3 text-furi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Proprietary AI models trained on marketing data</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-furi-red/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-3 w-3 text-furi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Continuous model updating and enhancement</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-furi-red/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-3 w-3 text-furi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Decision intelligence that gets smarter over time</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-furi-charcoal-light rounded-xl p-8 card-hover border border-gray-800 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="h-12 w-12 rounded-lg bg-gradient-iris flex items-center justify-center mb-6 animate-pulse-glow">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Creative That Converts</h3>
            <p className="text-gray-300 mb-6">
              We combine emotional intelligence with data-driven decisions to create marketing assets that not only look good but actually drive conversions and business results.
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-furi-red/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-3 w-3 text-furi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>AI-optimized creative testing and selection</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-furi-red/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-3 w-3 text-furi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Emotional response prediction for all content</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-furi-red/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-3 w-3 text-furi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Human creatives enhanced by AI insights</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-furi-charcoal-light rounded-xl p-8 card-hover border border-gray-800 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="h-12 w-12 rounded-lg bg-gradient-iris flex items-center justify-center mb-6 animate-pulse-glow">
              <ChartBar className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Transparent Data Layer</h3>
            <p className="text-gray-300 mb-6">
              We provide full visibility into how your marketing dollars perform. No black boxes, no hidden metrics—just clear, actionable data you can trust.
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-furi-red/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-3 w-3 text-furi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Real-time performance dashboards</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-furi-red/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-3 w-3 text-furi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>AI decision explanations for all recommendations</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-furi-red/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-3 w-3 text-furi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Full attribution modeling across channels</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-furi-charcoal-light rounded-xl p-8 card-hover border border-gray-800 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="h-12 w-12 rounded-lg bg-gradient-iris flex items-center justify-center mb-6 animate-pulse-glow">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Systems for Sustainable Growth</h3>
            <p className="text-gray-300 mb-6">
              We build marketing systems that scale with your business, creating sustainable growth rather than short-term spikes that can't be maintained.
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-furi-red/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-3 w-3 text-furi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Long-term growth modeling and forecasting</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-furi-red/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-3 w-3 text-furi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Automated systems that grow with your needs</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-furi-red/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-3 w-3 text-furi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Technology that adapts to market changes</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section bg-furi-charcoal-dark">
        <SectionHeading
          title="How We Compare"
          subtitle="See how FURI stacks up against traditional marketing agencies and other AI marketing solutions."
        />
        
        <div className="overflow-x-auto mt-12">
          <table className="min-w-full bg-furi-charcoal-light rounded-xl overflow-hidden">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left text-gray-400 font-medium">Feature</th>
                <th className="px-6 py-4 text-center text-gradient font-bold">FURI</th>
                <th className="px-6 py-4 text-center text-gray-400 font-medium">Traditional Agency</th>
                <th className="px-6 py-4 text-center text-gray-400 font-medium">AI Marketing Tools</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="px-6 py-4 text-white">AI-Powered Strategy</td>
                <td className="px-6 py-4 text-center text-furi-red">✓ Full Integration</td>
                <td className="px-6 py-4 text-center text-gray-400">Limited</td>
                <td className="px-6 py-4 text-center text-gray-400">Partial</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-white">Human Creativity</td>
                <td className="px-6 py-4 text-center text-furi-red">✓ AI-Enhanced</td>
                <td className="px-6 py-4 text-center text-gray-400">Traditional</td>
                <td className="px-6 py-4 text-center text-gray-400">Minimal/None</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-white">Data Transparency</td>
                <td className="px-6 py-4 text-center text-furi-red">✓ Complete</td>
                <td className="px-6 py-4 text-center text-gray-400">Limited</td>
                <td className="px-6 py-4 text-center text-gray-400">Partial</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-white">Continuous Optimization</td>
                <td className="px-6 py-4 text-center text-furi-red">✓ Real-time</td>
                <td className="px-6 py-4 text-center text-gray-400">Monthly/Quarterly</td>
                <td className="px-6 py-4 text-center text-gray-400">Automated Only</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-white">Industry Expertise</td>
                <td className="px-6 py-4 text-center text-furi-red">✓ AI + Human</td>
                <td className="px-6 py-4 text-center text-gray-400">Human Only</td>
                <td className="px-6 py-4 text-center text-gray-400">Limited/Generic</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-white">Scalability</td>
                <td className="px-6 py-4 text-center text-furi-red">✓ Unlimited</td>
                <td className="px-6 py-4 text-center text-gray-400">Team Dependent</td>
                <td className="px-6 py-4 text-center text-gray-400">Platform Dependent</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section bg-furi-charcoal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
              Our Values
            </h2>
            <p className="text-gray-300 mb-8">
              At FURI, we believe in combining the power of AI with human creativity and empathy to create marketing that not only performs but resonates on an emotional level.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Innovation First",
                  description: "We constantly push the boundaries of what's possible in marketing technology."
                },
                {
                  title: "Data With Heart",
                  description: "We use data to understand human emotions and create meaningful connections."
                },
                {
                  title: "Transparent Partnership",
                  description: "We believe in full visibility and working collaboratively with our clients."
                },
                {
                  title: "Sustainable Growth",
                  description: "We focus on building systems that create long-term value, not quick fixes."
                }
              ].map((value, index) => (
                <div key={index} className="flex">
                  <div className="h-10 w-10 rounded-full bg-furi-red/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-furi-red font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-iris rounded-lg blur-sm"></div>
            <div className="relative bg-furi-charcoal-dark p-6 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="Our Team" 
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
            Ready for a Different Approach?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how our unique blend of AI intelligence and human creativity can transform your marketing.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center">
            Learn Why We're Different
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default WhyFuri;
