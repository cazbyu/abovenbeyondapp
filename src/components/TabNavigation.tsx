import React, { useState } from 'react';
import { Brain, BarChart2, LineChart, Home, Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

const TabNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const tabs = [
    { path: '/solomon', label: 'Solomon', icon: Brain },
    { path: '/referral-analysis', label: 'Referral Analysis', icon: BarChart2 },
    { path: '/scorecard', label: 'Scorecard', icon: LineChart },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 -mt-8">
      <div className="container mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          {!isHomePage && (
            <NavLink
              to="/"
              className="px-4 py-4 text-gray-500 hover:text-[#C1440E] transition-colors duration-200"
            >
              <Home size={20} />
            </NavLink>
          )}
          <div className="flex flex-1">
            {tabs.map(({ path, label, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'border-b-2 border-[#C1440E] text-[#C1440E]'
                      : 'text-gray-500 hover:text-[#C1440E]'
                  }`
                }
              >
                <Icon size={18} />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between px-4">
            {!isHomePage && (
              <NavLink
                to="/"
                className="py-4 text-gray-500 hover:text-[#C1440E] transition-colors duration-200"
              >
                <Home size={20} />
              </NavLink>
            )}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-4 text-gray-500 hover:text-[#C1440E]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg">
              {tabs.map(({ path, label, icon: Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-6 py-4 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'bg-orange-50 text-[#C1440E]'
                        : 'text-gray-500 hover:text-[#C1440E] hover:bg-orange-50'
                    }`
                  }
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TabNavigation;