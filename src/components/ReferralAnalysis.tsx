import React, { useState } from 'react';
import { members } from '../data/members';

const ReferralAnalysis: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState('');

  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Chapter View */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Chapter View</h2>
          <div className="bg-orange-50 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Top Missing Roles</h3>
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
              <option key={member.id} value={member.id}>{member.name}</option>
            ))}
          </select>

          {selectedMember && (
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Referral Score</h3>
                <p className="text-2xl font-bold text-green-600">92%</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Recommendations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Schedule 1-to-1 with Sarah (Tech Solutions)</li>
                  <li>• Follow up with Michael about financial planning leads</li>
                  <li>• Join the Healthcare power team</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReferralAnalysis;