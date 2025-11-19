import { Search } from 'lucide-react';
import Input from '../common/Input';

const SearchBar = ({ value, onChange, placeholder = "Search advice..." }) => {
  return (
    <div className="w-full max-w-md">
      <Input
        icon={Search}
        iconPosition="left"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full"
      />
    </div>
  );
};

export default SearchBar;