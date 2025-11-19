import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import toast from 'react-hot-toast';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import api from '@/services/api';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!acceptTerms) {
      setError('Please accept the terms and conditions');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      const response = await api.post('/subscribers/subscribe', { email: email.trim() });

      if (response.data.success) {
        setIsSubscribed(true);
        setEmail('');
        setAcceptTerms(false);
        toast.success('Successfully subscribed to newsletter!');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to subscribe. Please try again.';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
        <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
          Successfully Subscribed!
        </h3>
        <p className="text-green-700 dark:text-green-300">
          Thank you for subscribing to our newsletter. You'll receive updates about women's empowerment initiatives.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Stay Updated
        </h3>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Subscribe to our newsletter for the latest updates on women's empowerment programs,
        events, and resources.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
          required
          disabled={isLoading}
        />

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="acceptTerms"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
            className="mt-1 w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            disabled={isLoading}
          />
          <label
            htmlFor="acceptTerms"
            className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            I agree to receive newsletters and updates. I understand I can unsubscribe at any time.
            <span className="text-red-500 ml-1">*</span>
          </label>
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader className="w-4 h-4 mr-2 animate-spin" />
              Subscribing...
            </>
          ) : (
            'Subscribe to Newsletter'
          )}
        </Button>
      </form>

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
        We respect your privacy and will never share your email address.
        Read our{' '}
        <a
          href="/privacy"
          className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline"
        >
          Privacy Policy
        </a>
        {' '}for more information.
      </p>
    </div>
  );
};

export default NewsletterSignup;