import React from 'react';
import { ArrowUpDown } from 'lucide-react';

interface HeaderProps {
  onSort?: (option: 'firstName' | 'lastName' | 'contactSphere' | 'industry') => void;
}

const Header: React.FC<HeaderProps> = ({ onSort }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSort = (option: 'firstName' | 'lastName' | 'contactSphere' | 'industry') => {
    onSort?.(option);
    setIsOpen(false);
  };

  return (
    <header className="relative text-white py-12 mb-8 bg-cover bg-center" style={{
      backgroundImage: `
        linear-gradient(
          rgba(194, 64, 11, 0.8),
          rgba(194, 64, 11, 0.8)
        ),
        url('https://ryxhnmkmsevedgjiduxn.supabase.co/storage/v1/object/public/0004-bni-assets//AboveBeyond_WebPhoto_AS_908447677.jpeg')
      `
    }}>
      {onSort && (
        <div className="absolute top-4 right-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200 group"
            title="Sort Members"
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
      )}
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-3xl font-bold mb-4">Above & Beyond</h1>
        <blockquote className="text-xl italic mb-6">
          "A goal is a dream with a deadline."
          <footer className="text-sm mt-2">— Napoleon Hill</footer>
        </blockquote>
        <p className="text-lg font-medium italic mb-4">
          Givers Gain Goal: Spend 15 min per week reflecting on our team members – how can we help each other?
        </p>
      </div>
    </header>
  );
};

export default Header;