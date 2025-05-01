import React from 'react';
import { User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ReferralAdvisor: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-[#C1440E] text-white px-6 py-8 text-center">
          <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-md">
            <User size={48} className="text-[#C1440E]" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Solomon</h2>
          <p className="text-lg opacity-90">Your AI Referral Coach</p>
        </div>
        
        <div className="px-6 py-8">
          <p className="text-gray-600 text-center mb-8">
            Solomon helps you generate warm referrals, identify who's missing from your chapter, and sharpen your weekly ask.
          </p>
          
          <button
            onClick={() => navigate('/solomon')}
            className="w-full bg-orange-700 text-white text-center py-3 rounded-full font-medium hover:bg-orange-800 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Chat with Solomon
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReferralAdvisor;