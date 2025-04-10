
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
  hasGradient?: boolean;
}

const SectionHeading = ({
  title,
  subtitle,
  alignment = 'center',
  className,
  hasGradient = true,
}: SectionHeadingProps) => {
  return (
    <div 
      className={cn(
        'mb-12',
        alignment === 'center' && 'text-center',
        alignment === 'left' && 'text-left',
        alignment === 'right' && 'text-right',
        className
      )}
    >
      <h2 
        className={cn(
          'text-3xl sm:text-4xl md:text-5xl font-bold mb-4',
          hasGradient && 'text-gradient'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
