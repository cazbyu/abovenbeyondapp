import React, { useState } from 'react';
import { Send } from 'lucide-react';

const AIAdvisor: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for AI response
    setResponse('Based on the member data and referral patterns, I recommend focusing on healthcare providers in your network. They have shown a high propensity for referrals in similar business contexts.');
    setPrompt('');
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask your referral question..."
            className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:border-[#C1440E] focus:ring-1 focus:ring-[#C1440E] min-h-[120px]"
          />
          <button
            type="submit"
            className="absolute bottom-4 right-4 text-[#C1440E] hover:text-[#A03A0C] transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </form>

      {response && (
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">AI Response:</h3>
          <p className="text-gray-700">{response}</p>
        </div>
      )}
    </div>
  );
}

export default AIAdvisor;