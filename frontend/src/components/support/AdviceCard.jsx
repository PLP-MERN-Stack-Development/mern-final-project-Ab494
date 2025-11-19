import { format } from 'date-fns';
import { User, Calendar } from 'lucide-react';
import Card from '../common/Card';

const AdviceCard = ({ advice }) => {
  const getCategoryColor = (category) => {
    const colors = {
      'financial': 'bg-warm-100 text-warm-800 dark:bg-warm-900 dark:text-warm-300',
      'mental health': 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-300',
      'body positivity': 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300',
      'general support': 'bg-vibrant-100 text-vibrant-800 dark:bg-vibrant-900 dark:text-vibrant-300'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  };

  return (
    <Card hover className="h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(advice.category)}`}>
            {advice.category}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {advice.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow line-clamp-3">
          {advice.summary}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mt-auto">
          <div className="flex items-center space-x-1">
            <User className="h-3 w-3" />
            <span>{advice.createdBy?.name || 'Anonymous'}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{format(new Date(advice.createdAt), 'MMM dd, yyyy')}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AdviceCard;