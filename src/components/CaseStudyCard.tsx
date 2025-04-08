
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CaseStudyCardProps {
  title: string;
  result: string;
  image: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  result,
  image,
  className,
  style,
  onClick,
}) => {
  return (
    <div 
      className={cn(
        'bg-furi-charcoal-light rounded-xl overflow-hidden card-hover cursor-pointer',
        className
      )}
      style={style}
      onClick={onClick}
    >
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-furi-red font-semibold mb-4">{result}</p>
        <div className="flex items-center text-white text-sm font-medium hover:text-furi-red transition-colors">
          <span>View Case Study</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
