import Button from '../common/Button';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    { value: '', label: 'All' },
    { value: 'financial', label: 'Financial' },
    { value: 'mental health', label: 'Mental Health' },
    { value: 'body positivity', label: 'Body Positivity' },
    { value: 'general support', label: 'General Support' }
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <Button
          key={category.value}
          variant={selectedCategory === category.value ? 'primary' : 'outline'}
          size="sm"
          onClick={() => onCategoryChange(category.value)}
          className="transition-all duration-200"
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;