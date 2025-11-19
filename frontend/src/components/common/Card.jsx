import { forwardRef } from 'react';
import { motion } from 'framer-motion';
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { 
        y: -8,
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { type: "spring", stiffness: 300, damping: 20 }
      } : {}}
      whileTap={hover ? { 
        scale: 0.98,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      } : {}}
      className={cn(
        'bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700',
        'transition-shadow duration-300',
        shadowStyles[shadow],
        hover && 'cursor-pointer',
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      <motion.div
        initial={false}
        animate={hover ? { scale: 1 } : { scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
});

Card.displayName = 'Card';

export default Card;