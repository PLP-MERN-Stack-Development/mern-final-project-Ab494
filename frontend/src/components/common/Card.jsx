import { forwardRef } from 'react';
import { cn } from '@/utils/helpers';

const Card = forwardRef(({
  children,
  className,
  hover = false,
  padding = 'default',
  shadow = 'md',
  ...props
}, ref) => {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8'
  };
  
  const shadowStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  };

  return (
    <div
      ref={ref}
      className={cn(
        'bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700',
        'transition-shadow duration-300',
        shadowStyles[shadow],
        hover && 'hover:shadow-lg hover:-translate-y-1',
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;