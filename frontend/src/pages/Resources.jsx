import { BookOpen, Search, Filter, Grid, List } from 'lucide-react';
import { useState } from 'react';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Card from '@/components/common/Card';
import { RESOURCE_CATEGORIES } from '@/utils/constants';

const Resources = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    sort: 'latest'
  });

  const mockResources = [
    {
      id: 1,
      title: 'Leadership in the Digital Age',
      description: 'A comprehensive guide to developing leadership skills in today\'s technology-driven world.',
      category: 'Leadership',
      author: 'Dr. Sarah Johnson',
      downloads: 1250,
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      title: 'Women in Tech: Breaking Barriers',
      description: 'Inspiring stories and practical advice for women pursuing careers in technology.',
      category: 'Technology',
      author: 'Maria Rodriguez',
      downloads: 980,
      createdAt: '2024-01-10'
    },
    {
      id: 3,
      title: 'Entrepreneurship Fundamentals',
      description: 'Essential knowledge for starting and growing your own business.',
      category: 'Entrepreneurship',
      author: 'Amara Okafor',
      downloads: 2100,
      createdAt: '2024-01-08'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Educational Resources
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Discover curated resources to advance your personal and professional journey
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search resources..."
                icon={Search}
                value={filters.search}
                onChange={(e) => setFilters({...filters, search: e.target.value})}
              />
            </div>
            <select
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              value={filters.category}
              onChange={(e) => setFilters({...filters, category: e.target.value})}
            >
              <option value="">All Categories</option>
              {RESOURCE_CATEGORIES.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'primary' : 'ghost'}
                onClick={() => setViewMode('grid')}
                icon={Grid}
              />
              <Button
                variant={viewMode === 'list' ? 'primary' : 'ghost'}
                onClick={() => setViewMode('list')}
                icon={List}
              />
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {mockResources.map(resource => (
            <Card key={resource.id} hover className={viewMode === 'list' ? 'flex' : ''}>
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-start justify-between mb-3">
                  <BookOpen className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full">
                    {resource.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>By {resource.author}</span>
                  <span>{resource.downloads} downloads</span>
                </div>
              </div>
              <div className={`p-6 ${viewMode === 'list' ? 'flex items-end' : 'pt-0'}`}>
                <Button fullWidth={viewMode === 'grid'}>
                  Download Resource
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;