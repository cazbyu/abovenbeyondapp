import React from 'react';

interface FooterProps {
  lastUpdated: string;
}

const Footer: React.FC<FooterProps> = ({ lastUpdated }) => {
  return (
    <footer className="bg-gray-100 py-4 mt-8">
      <div className="container mx-auto px-4 text-center text-gray-600">
        Last Updated: {lastUpdated}
      </div>
    </footer>
  );
};

export default Footer;