import { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/utils/helpers';

const Input = forwardRef(({
  label,
  error,
  icon: Icon,
  iconPosition = 'left',
  type = 'text',
  required = false,
  placeholder,
  className,
  showPasswordToggle = false,
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className="w-full">
      {label && (
        <motion.label 
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {label}
          {required && (
            <motion.span 
              className="text-red-500 ml-1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, delay: 0.1 }}
            >*</motion.span>
          )}
        </motion.label>
      )}
      <div className="relative">
        {Icon && iconPosition === 'left' && (
          <motion.div
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Icon className="w-5 h-5" />
          </motion.div>
        )}
        <motion.input
          ref={ref}
          type={inputType}
          placeholder={placeholder}
          className={cn(
            'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent',
            'dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400',
            'transition-all duration-200',
            Icon && iconPosition === 'left' ? 'pl-10' : '',
            showPasswordToggle ? 'pr-10' : '',
            error 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500',
            className
          )}
          whileFocus={{ 
            scale: 1.01,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
          {...props}
        />
        {type === 'password' && showPasswordToggle && (
          <motion.button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              key={showPassword ? 'eye-off' : 'eye'}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              transition={{ duration: 0.2 }}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </motion.div>
          </motion.button>
        )}
        {Icon && iconPosition === 'right' && (
          <motion.div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Icon className="w-5 h-5" />
          </motion.div>
        )}
      </div>
      {error && (
        <motion.p 
          className="mt-1 text-sm text-red-600 dark:text-red-400"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;