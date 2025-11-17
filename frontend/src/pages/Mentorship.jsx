import { Users, Star, MapPin, MessageCircle } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';

const Mentorship = () => {
  const mockMentors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      title: 'Technology Leadership Consultant',
      expertise: ['Leadership', 'Technology', 'Career Development'],
      location: 'San Francisco, CA',
      rating: 4.9,
      reviews: 127,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b55c?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      title: 'Healthcare Innovation Director',
      expertise: ['Healthcare', 'Innovation', 'Mentoring'],
      location: 'Austin, TX',
      rating: 4.8,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Mentorship Network
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Connect with experienced mentors who can guide your journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockMentors.map(mentor => (
            <Card key={mentor.id} hover className="p-6">
              <div className="text-center mb-6">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {mentor.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  {mentor.title}
                </p>
                <div className="flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm">{mentor.rating} ({mentor.reviews} reviews)</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {mentor.expertise.map(skill => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{mentor.location}</span>
                </div>
              </div>
              
              <Button fullWidth>
                <MessageCircle className="mr-2 h-4 w-4" />
                Request Mentorship
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentorship;