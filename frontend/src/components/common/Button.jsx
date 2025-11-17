import { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/helpers';

const Button = forwardRef(({
  children,
  className,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  type = 'button',
  ...props
}, ref) => {
  const baseStyles = `
    inline-flex items-center justify-center 
    font-medium rounded-lg transition-all duration-200 
    focus:outline-none focus:ring-2 focus:ring-offset-2 
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
  `;
  
  const variants = {
    primary: `
      bg-primary-600 text-white 
      hover:bg-primary-700 focus:ring-primary-500
      active:bg-primary-800
    `,
    secondary: `
      bg-secondary-600 text-white 
      hover:bg-secondary-700 focus:ring-secondary-500
      active:bg-secondary-800
    `,
    outline: `
      border-2 border-primary-600 text-primary-600 
      hover:bg-primary-50 focus:ring-primary-500
      dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/50
      active:bg-primary-100 dark:active:bg-primary-900
    `,
    ghost: `
      text-primary-600 
      hover:bg-primary-50 focus:ring-primary-500
      dark:text-primary-400 dark:hover:bg-primary-900/50
      active:bg-primary-100 dark:active:bg-primary-900
    `,
    danger: `
      bg-red-600 text-white 
      hover:bg-red-700 focus:ring-red-500
      active:bg-red-800
    `,
    success: `
      bg-green-600 text-white 
      hover:bg-green-700 focus:ring-green-500
      active:bg-green-800
    `,
    warning: `
      bg-yellow-600 text-white 
      hover:bg-yellow-700 focus:ring-yellow-500
      active:bg-yellow-800
    `,
    link: `
      text-primary-600 
      hover:underline focus:ring-primary-500
      dark:text-primary-400
      p-0 h-auto
    `
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6'
  };

  const isDisabled = disabled || loading;

  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        isDisabled && 'cursor-not-allowed',
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <Loader2 className={cn(iconSizes[size], 'animate-spin')} />
      ) : (
        <>
          {Icon && iconPosition === 'left' && (
            <Icon className={cn(iconSizes[size], children ? 'mr-2' : '')} />
          )}
          {children}
          {Icon && iconPosition === 'right' && (
            <Icon className={cn(iconSizes[size], children ? 'ml-2' : '')} />
          )}
        </>
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;