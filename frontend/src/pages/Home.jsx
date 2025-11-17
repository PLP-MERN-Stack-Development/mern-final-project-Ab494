import { Link } from 'react-router-dom';
import { 
  Heart, 
  BookOpen, 
  Calendar, 
  Users, 
  ArrowRight, 
  Star,
  TrendingUp,
  Globe,
  Award,
  Play
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';

const Home = () => {
  const { isAuthenticated } = useAuth();

  const impactStats = [
    { number: '50,000+', label: 'Women Empowered', icon: Heart },
    { number: '1,200+', label: 'Mentors Active', icon: Users },
    { number: '3,500+', label: 'Resources Shared', icon: BookOpen },
    { number: '850+', label: 'Events Organized', icon: Calendar }
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Educational Resources',
      description: 'Access thousands of curated resources on career development, entrepreneurship, and leadership skills.',
      href: '/resources'
    },
    {
      icon: Calendar,
      title: 'Events & Workshops',
      description: 'Join live events, webinars, and workshops to learn and network with like-minded women.',
      href: '/events'
    },
    {
      icon: Users,
      title: 'Mentorship Network',
      description: 'Connect with experienced mentors and accelerate your personal and professional growth.',
      href: '/mentorship'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Track your progress and discover new opportunities tailored to your career goals.',
      href: '/dashboard'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Tech Entrepreneur',
      content: 'This platform transformed my career journey. The mentorship I received was invaluable.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b55c?w=64&h=64&fit=crop&crop=face'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Healthcare Leader',
      content: 'The resources and community here gave me the confidence to start my own practice.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face'
    },
    {
      name: 'Amara Okafor',
      role: 'NGO Director',
      content: 'Through this platform, I found mentors who guided me to leadership roles in my field.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=64&h=64&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-hero py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Empower Women,
              <span className="gradient-primary bg-clip-text text-transparent">
                {' '}Transform Communities
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Join a global movement dedicated to advancing gender equality through education, 
              mentorship, and community support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" as={Link} to="/register" className="text-lg px-8">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" as={Link} to="/resources">
                Explore Resources
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Global Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Together, we're creating measurable change across the world
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive tools and resources designed specifically for women's empowerment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} hover className="text-center p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {feature.description}
                  </p>
                  <Button variant="ghost" as={Link} to={feature.href} className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real women, real transformations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of women who are already transforming their lives and communities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!isAuthenticated ? (
                <>
                  <Button 
                    size="lg" 
                    variant="secondary" 
                    className="text-lg px-8 bg-white text-primary-600 hover:bg-gray-100"
                    as={Link} 
                    to="/register"
                  >
                    Join Today
                  </Button>
                  <Button 
                    size="lg" 
                    variant="ghost" 
                    className="text-lg px-8 text-white border-white hover:bg-white/10"
                    as={Link} 
                    to="/mentorship"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </>
              ) : (
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="text-lg px-8 bg-white text-primary-600 hover:bg-gray-100"
                  as={Link} 
                  to="/dashboard"
                >
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;