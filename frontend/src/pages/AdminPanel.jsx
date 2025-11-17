import { Routes, Route, Navigate } from 'react-router-dom';
import { Users, BarChart3, Settings, FileText, Shield } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';

const AdminPanel = () => {
  const adminStats = [
    { title: 'Total Users', value: '2,847', icon: Users, color: 'bg-blue-500' },
    { title: 'Active Resources', value: '156', icon: FileText, color: 'bg-green-500' },
    { title: 'Monthly Events', value: '23', icon: BarChart3, color: 'bg-purple-500' },
    { title: 'Pending Reviews', value: '7', icon: Shield, color: 'bg-orange-500' }
  ];

  const recentUsers = [
    { name: 'Alice Johnson', email: 'alice@example.com', role: 'User', joined: '2 hours ago' },
    { name: 'Maria Garcia', email: 'maria@example.com', role: 'Mentor', joined: '1 day ago' },
    { name: 'Sarah Chen', email: 'sarah@example.com', role: 'User', joined: '3 days ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage platform users, content, and system settings
          </p>
        </div>

        {/* Admin Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {adminStats.map((stat, index) => {
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
          {/* Recent Users */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Recent Registrations
              </h2>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {recentUsers.map((user, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {user.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {user.email}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full">
                      {user.role}
                    </span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {user.joined}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <Button fullWidth variant="outline" icon={Users}>
                Manage Users
              </Button>
              <Button fullWidth variant="outline" icon={FileText}>
                Content Moderation
              </Button>
              <Button fullWidth variant="outline" icon={BarChart3}>
                View Analytics
              </Button>
              <Button fullWidth variant="outline" icon={Settings}>
                System Settings
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;