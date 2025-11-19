import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { 
  BookOpen, 
  Calendar, 
  Users, 
  TrendingUp, 
  Award,
  Clock,
  Target
} from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { 
      title: 'Resources Downloaded', 
      value: '12', 
      icon: BookOpen, 
      color: 'bg-blue-500' 
    },
    { 
      title: 'Events Attended', 
      value: '5', 
      icon: Calendar, 
      color: 'bg-green-500' 
    },
    { 
      title: 'Active Mentorships', 
      value: '2', 
      icon: Users, 
      color: 'bg-purple-500' 
    },
    { 
      title: 'Progress Score', 
      value: '87%', 
      icon: TrendingUp, 
      color: 'bg-orange-500' 
    }
  ];

  const recentActivity = [
    {
      type: 'event',
      title: 'Attended Women in Tech Summit',
      time: '2 hours ago',
      icon: Calendar
    },
    {
      type: 'resource',
      title: 'Downloaded Leadership Guide',
      time: '1 day ago',
      icon: BookOpen
    },
    {
      type: 'mentorship',
      title: 'Started mentorship with Sarah Johnson',
      time: '3 days ago',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Here's what's happening with your empowerment journey
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6">
                <div className="flex items-center">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-primary-100 dark:bg-primary-900/20 p-2 rounded-lg">
                      <Icon className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 dark:text-white font-medium">
                        {activity.title}
                      </p>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Clock className="h-3 w-3 mr-1" />
                        {activity.time}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <Button 
                fullWidth 
                variant="outline" 
                icon={BookOpen}
                as={Link}
                to="/resources"
              >
                Browse Resources
              </Button>
              <Button 
                fullWidth 
                variant="outline" 
                icon={Calendar}
                as={Link}
                to="/events"
              >
                View Upcoming Events
              </Button>
              <Button 
                fullWidth 
                variant="outline" 
                icon={Users}
                as={Link}
                to="/mentorship"
              >
                Find Mentors
              </Button>
              <Button 
                fullWidth 
                variant="outline" 
                icon={Target}
                as={Link}
                to="/goals/new"
              >
                Set New Goal
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;