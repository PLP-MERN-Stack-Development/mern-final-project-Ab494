import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import api from '../services/api';
import Spinner from '../components/common/Spinner';
import CategoryFilter from '../components/support/CategoryFilter';
import SearchBar from '../components/support/SearchBar';
import AdviceCard from '../components/support/AdviceCard';
import EmergencyContacts from '../components/support/EmergencyContacts';

const Support = () => {
  const [advices, setAdvices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchAdvices = async () => {
    try {
      setLoading(true);
      const params = {};
      if (selectedCategory) params.category = selectedCategory;
      if (searchQuery) params.search = searchQuery;

      const response = await api.get('/advice', { params });
      setAdvices(response.data.advices || []);
    } catch (error) {
      console.error('Error fetching advices:', error);
      toast.error('Failed to load advice content');
      setAdvices([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvices();
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Support & Advice
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Find helpful advice and support resources tailored to empower women in various aspects of life.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <SearchBar
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Spinner size="lg" />
        </div>
      ) : advices.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            {searchQuery || selectedCategory ? 'No advice found matching your criteria.' : 'No advice content available yet.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advices.map((advice) => (
            <AdviceCard key={advice._id} advice={advice} />
          ))}
        </div>
      )}

      <EmergencyContacts />
    </div>
  );
};

export default Support;