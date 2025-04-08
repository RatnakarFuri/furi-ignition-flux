
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import TeamMemberCard from '@/components/TeamMemberCard';

const Team = () => {
  const coreTeam = [
    {
      name: 'Alex Chen',
      role: 'AI Strategist & Founder',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Former AI research scientist who saw the potential for AI to transform marketing.',
      linkedIn: '#',
      twitter: '#'
    },
    {
      name: 'Sarah Johnson',
      role: 'Creative Architect',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Award-winning creative director with a passion for data-driven storytelling.',
      linkedIn: '#',
      twitter: '#'
    },
    {
      name: 'Marcus Williams',
      role: 'Marketing Technologist',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      bio: 'Tech wizard who bridges the gap between marketing strategy and technical implementation.',
      linkedIn: '#',
      twitter: '#'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Data & Performance Lead',
      image: 'https://randomuser.me/api/portraits/women/63.jpg',
      bio: 'Data scientist turned marketing analyst who finds the stories hidden in the numbers.',
      linkedIn: '#',
      twitter: '#'
    }
  ];

  const extendedTeam = [
    {
      name: 'David Kim',
      role: 'SEO & Content Specialist',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      linkedIn: '#'
    },
    {
      name: 'Jessica Chen',
      role: 'UX Designer',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      linkedIn: '#'
    },
    {
      name: 'Michael Thompson',
      role: 'Frontend Developer',
      image: 'https://randomuser.me/api/portraits/men/55.jpg',
      linkedIn: '#'
    },
    {
      name: 'Olivia Martinez',
      role: 'Client Success Manager',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      linkedIn: '#'
    },
    {
      name: 'James Wilson',
      role: 'Paid Media Specialist',
      image: 'https://randomuser.me/api/portraits/men/42.jpg',
      linkedIn: '#'
    },
    {
      name: 'Sophia Lee',
      role: 'Social Media Strategist',
      image: 'https://randomuser.me/api/portraits/women/52.jpg',
      linkedIn: '#'
    },
    {
      name: 'Ryan Clark',
      role: 'Backend Developer',
      image: 'https://randomuser.me/api/portraits/men/62.jpg',
      linkedIn: '#'
    },
    {
      name: 'Emma White',
      role: 'Project Manager',
      image: 'https://randomuser.me/api/portraits/women/22.jpg',
      linkedIn: '#'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Meet the Minds Behind FURI
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            We&apos;re a diverse team of AI specialists, creatives, technologists, and data scientists united by a passion for intelligent marketing.
          </p>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="section bg-furi-charcoal">
        <SectionHeading
          title="Core Leadership Team"
          subtitle="The visionaries driving FURI's innovation and strategy."
          alignment="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {coreTeam.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              bio={member.bio}
              linkedIn={member.linkedIn}
              twitter={member.twitter}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </section>

      {/* Extended Team Section */}
      <section className="section bg-furi-charcoal-dark">
        <SectionHeading
          title="The FURI Team"
          subtitle="Talented specialists who bring our vision to life every day."
          alignment="left"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {extendedTeam.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              linkedIn={member.linkedIn}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </section>

      {/* Our Culture Section */}
      <section className="section bg-furi-charcoal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
              Our Culture
            </h2>
            <p className="text-gray-300 mb-6">
              At FURI, we believe that innovation thrives in an environment of collaboration, curiosity, and continuous learning. Our team combines diverse perspectives and skill sets to create marketing solutions that push boundaries.
            </p>
            <ul className="space-y-4">
              {[
                'We embrace both data science and creative intuition',
                'We prioritize impact over industry conventions',
                'We believe in transparency with our team and clients',
                "We're committed to ethical AI and responsible marketing"
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
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="Team Culture" 
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="section bg-furi-charcoal-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We&apos;re always looking for talented individuals who are passionate about the intersection of AI and marketing.
          </p>
          <div className="bg-furi-charcoal-light rounded-xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">Current Openings</h3>
            <ul className="space-y-4 mb-6">
              {[
                'Senior AI Engineer – Marketing Applications',
                'Creative Strategist with Data Background',
                'Performance Marketing Specialist',
                'Content Producer with AI Experience'
              ].map((position, index) => (
                <li key={index} className="flex items-center justify-between p-3 border border-gray-700 rounded-lg hover:bg-furi-charcoal-dark transition-colors">
                  <span className="text-white">{position}</span>
                  <ArrowRight className="h-5 w-5 text-furi-red" />
                </li>
              ))}
            </ul>
            <Link to="/careers" className="btn-primary inline-flex items-center">
              View All Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to partner with our team of AI marketing experts to transform your business?
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

export default Team;
