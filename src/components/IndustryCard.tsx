
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface IndustryCardProps {
  title: string;
  stats?: string;
  image: string;
  className?: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({
  title,
  stats,
  image,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl aspect-square card-hover cursor-pointer group',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-furi-charcoal-dark to-transparent opacity-70" />
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        
        <div 
          className={cn(
            'overflow-hidden transition-all duration-300',
            isHovered ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          {stats && <p className="text-furi-red font-medium">{stats}</p>}
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;
