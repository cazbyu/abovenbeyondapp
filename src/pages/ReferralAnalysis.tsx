import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface Member {
  id: string;
  name: string;
}

const ReferralAnalysis: React.FC = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState<Member[]>([]);
  const [selectedMember, setSelectedMember] = useState('');

  useEffect(() => {
    const fetchMembers = async () => {
      const { data, error } = await supabase
        .from('0004-above-n-beyond-members')
        .select('id, name')
        .order('name');

      if (!error && data) {
        setMembers(data);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => navigate('/')}
        className="mb-6 bg-orange-700 text-white rounded-full px-4 py-2 hover:bg-orange-800 transition-colors"
      >
        Back to Home
      </button>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Chapter View */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Top Missing Roles</h2>
          <div className="bg-orange-50 rounded-lg p-4">
            <ul className="space-y-2 text-gray-700">
              <li>• Commercial Real Estate Agent</li>
              <li>• Business Attorney</li>
              <li>• IT Security Specialist</li>
            </ul>
          </div>
        </div>

        {/* Member View */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Member View</h2>
          <select
            value={selectedMember}
            onChange={(e) => setSelectedMember(e.target.value)}
            className="w-full p-2 mb-4 rounded border border-gray-300 focus:border-[#C1440E] focus:ring-1 focus:ring-[#C1440E]"
          >
            <option value="">Select a member</option>
            {members.map(member => (
              <option key={member.id} value={member.id}>
                {member.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ReferralAnalysis;