import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, Users, TrendingUp } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';

const GetStarted = () => {
  const steps = [
    {
      icon: BookOpen,
      title: 'Explore Resources',
      description: 'Browse our extensive library of educational materials, career guides, and skill development resources.',
      href: '/resources',
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
    },
    {
      icon: Calendar,
      title: 'Join Events',
      description: 'Participate in webinars, workshops, and networking events to connect with other women.',
      href: '/events',
      color: 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400'
    },
    {
      icon: Users,
      title: 'Request Mentorship',
      description: 'Connect with experienced mentors who can guide you in your personal and professional journey.',
      href: '/mentorship',
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400'
    },
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Monitor your growth and achievements through our comprehensive dashboard and analytics.',
      href: '/dashboard',
      color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Begin Your
            <span className="gradient-primary bg-clip-text text-transparent">
              {' '}Journey?
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Follow these simple steps to start your empowerment journey with our comprehensive platform.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} hover className="text-center p-8">
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center`}>
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {step.description}
                </p>
                <Button 
                  variant="ghost" 
                  as={Link} 
                  to={step.href} 
                  className="w-full"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-primary-500 to-secondary-500">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Community Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Take the first step towards your empowerment journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                as={Link} 
                to="/register"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                Create Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                as={Link} 
                to="/login"
                className="border-white text-white hover:bg-white/10"
              >
                Sign In
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;