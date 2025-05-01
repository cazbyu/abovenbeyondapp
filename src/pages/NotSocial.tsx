import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotSocial: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <img
          src="https://ryxhnmkmsevedgjiduxn.supabase.co/storage/v1/object/public/0004-bni-assets/peeking.gif"
          alt="Peeking GIF"
          className="w-64 h-64 object-cover mx-auto mb-6 rounded-lg"
        />
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          This person is not being social on this platform 😅
        </h1>
        <p className="text-slate-600 mb-6">
          They might be hiding behind their computer... or maybe they're just too busy networking in person!
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors duration-200"
        >
          Back to Members
        </button>
      </div>
    </div>
  );
};

export default NotSocial;