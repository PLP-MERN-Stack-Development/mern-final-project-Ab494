import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';

const Events = () => {
  const mockEvents = [
    {
      id: 1,
      title: 'Women in Leadership Summit 2024',
      description: 'Join us for a transformative summit featuring inspiring speakers and networking opportunities.',
      date: '2024-02-15',
      time: '10:00 AM',
      location: 'Virtual',
      attendees: 250,
      maxAttendees: 300
    },
    {
      id: 2,
      title: 'Tech Career Fair',
      description: 'Connect with leading tech companies and explore career opportunities in technology.',
      date: '2024-02-20',
      time: '2:00 PM',
      location: 'New York, NY',
      attendees: 120,
      maxAttendees: 150
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming Events
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Join events, workshops, and networking opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockEvents.map(event => (
            <Card key={event.id} hover className="p-6">
              <div className="flex items-start justify-between mb-4">
                <Calendar className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                <span className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900/20 text-secondary-700 dark:text-secondary-300 text-sm rounded-full">
                  Upcoming
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {event.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {event.description}
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <Clock className="h-4 w-4 mr-2" />
                  {event.date} at {event.time}
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  {event.location}
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <Users className="h-4 w-4 mr-2" />
                  {event.attendees}/{event.maxAttendees} registered
                </div>
              </div>
              
              <Button fullWidth>
                Register for Event
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;