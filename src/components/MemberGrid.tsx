import React from 'react';
import MemberCard from './MemberCard';

interface Member {
  id: string;
  name: string;
  business_name: string;
  google_profile?: string | null;
  phone?: string | null;
  email?: string | null;
  photo_url?: string | null;
  ask_date: string;
  ask_text: string;
  facebook?: string | null;
  instagram?: string | null;
  linkedin?: string | null;
  youtube?: string | null;
  specialty?: string | null;
  industry?: string | null;
}

interface MemberGridProps {
  members: Member[];
}

const MemberGrid: React.FC<MemberGridProps> = ({ members }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {members.map(member => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
};

export default MemberGrid;