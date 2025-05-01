import React from 'react';
import { ArrowUpDown } from 'lucide-react';

type SortOption = 'firstName' | 'lastName' | 'contactSphere' | 'industry';

interface SortMenuProps {
  onSort: (option: SortOption) => void;
}

const SortMenu: React.FC<SortMenuProps> = ({ onSort }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSort = (option: SortOption) => {
    onSort(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200 flex items-center gap-2"
      >
        <ArrowUpDown size={20} />
        <span className="sr-only">Sort members</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
          <button
            onClick={() => handleSort('firstName')}
            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            First Name
          </button>
          <button
            onClick={() => handleSort('lastName')}
            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Last Name
          </button>
          <button
            onClick={() => handleSort('contactSphere')}
            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Contact Sphere
          </button>
          <button
            onClick={() => handleSort('industry')}
            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Industry
          </button>
        </div>
      )}
    </div>
  );
};

export default SortMenu;