import React from 'react';
import { useNavigate } from 'react-router-dom';

const Scorecard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => navigate('/')}
        className="mb-6 bg-orange-700 text-white rounded-full px-4 py-2 hover:bg-orange-800 transition-colors"
      >
        Back to Home
      </button>

      <div className="flex items-center justify-center h-64">
        <p className="text-2xl text-gray-500 font-medium">
          Scorecard view coming soon...
        </p>
      </div>
    </div>
  );
};

export default Scorecard;