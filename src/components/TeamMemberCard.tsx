
import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
  linkedIn?: string;
  twitter?: string;
  className?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  image,
  bio,
  linkedIn,
  twitter,
  className,
}) => {
  return (
    <div 
      className={cn(
        'bg-furi-charcoal-light rounded-xl overflow-hidden card-hover',
        className
      )}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-furi-charcoal-dark to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-furi-red font-medium mb-3">{role}</p>
        
        {bio && <p className="text-gray-400 text-sm mb-4">{bio}</p>}
        
        <div className="flex space-x-3">
          {linkedIn && (
            <a 
              href={linkedIn} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-furi-red transition-colors"
              aria-label={`${name}'s LinkedIn`}
            >
              <Linkedin size={18} />
            </a>
          )}
          
          {twitter && (
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-furi-red transition-colors"
              aria-label={`${name}'s Twitter`}
            >
              <Twitter size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
