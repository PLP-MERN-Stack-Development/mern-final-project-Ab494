import { ExternalLink, Globe } from 'lucide-react';
import Card from './common/Card';

const PartnerCard = ({ partner }) => {
  const getCategoryColor = (category) => {
    const colors = {
      'ngo': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      'corporate': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      'government': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      'local_organization': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      'international': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  };

  const formatCategory = (category) => {
    return category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <Card hover className="h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            {partner.logo ? (
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="w-12 h-12 object-contain rounded-lg bg-white dark:bg-gray-800 p-1"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            ) : null}
            <div className={`w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center ${!partner.logo ? '' : 'hidden'}`}>
              <Globe className="h-6 w-6 text-gray-400 dark:text-gray-500" />
            </div>
          </div>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(partner.category)}`}>
            {formatCategory(partner.category)}
          </span>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {partner.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
            {partner.description}
          </p>
        </div>

        <div className="mt-auto">
          <a
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium transition-colors"
          >
            <span>Visit Website</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default PartnerCard;