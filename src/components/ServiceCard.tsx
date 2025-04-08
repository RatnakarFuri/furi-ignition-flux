
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  className?: string;
  style?: React.CSSProperties;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  features,
  className,
  style,
}) => {
  return (
    <div 
      className={cn(
        'bg-furi-charcoal-light rounded-xl p-6 card-hover border border-gray-800',
        className
      )}
      style={style}
    >
      <div className="h-12 w-12 rounded-lg bg-gradient-iris flex items-center justify-center mb-4 animate-pulse-glow">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      {features && features.length > 0 && (
        <ul className="space-y-2 mt-4">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-300 text-sm">
              • {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;
