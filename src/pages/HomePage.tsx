import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import MemberGrid from '../components/MemberGrid';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface Member {
  id: string;
  name: string;
  business_name: string;
  google_profile?: string | null;
  phone?: string | null;
  email?: string | null;
  website?: string | null;
  photo_url?: string | null;
  ask_date: string;
  ask_text: string;
  facebook?: string | null;
  instagram?: string | null;
  linkedin?: string | null;
  youtube?: string | null;
  specialty?: string | null;
  industry?: string | null;
  contact_sphere_1?: string | null;
  contact_sphere_2?: string | null;
}

type SortOption = 'firstName' | 'lastName' | 'contactSphere' | 'industry';

const spherePriority: { [key: string]: number } = {
  'BF': 1,
  'BF/HB': 2,
  'BF/ME': 3,
  'BF/RE': 4,
  'HA': 5,
  'HA/BF': 6
};

const HomePage: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [sortedMembers, setSortedMembers] = useState<Member[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const { data: members, error } = await supabase
        .from('0004-above-n-beyond-members')
        .select('*')
        .order('name');

      if (error) {
        console.error('Error fetching members:', error);
        return;
      }

      if (members) {
        setMembers(members);
        setSortedMembers(members);
        const latestDate = members.reduce((latest: string, member: Member) => {
          if (!member.ask_date) return latest;
          try {
            return !latest || new Date(member.ask_date) > new Date(latest) 
              ? member.ask_date 
              : latest;
          } catch {
            return latest;
          }
        }, '');
        setLastUpdated(latestDate);
      }
    };

    fetchMembers();
  }, []);

  const getContactSpherePriority = (member: Member) => {
    const sphere1 = member.contact_sphere_1 || '';
    const sphere2 = member.contact_sphere_2 || '';
    const combinedSphere = sphere2 ? `${sphere1}/${sphere2}` : sphere1;
    return spherePriority[combinedSphere] || 999;
  };

  const handleSort = (option: SortOption) => {
    const sorted = [...members].sort((a, b) => {
      switch (option) {
        case 'firstName':
          return (a.name.split(' ')[0] || '').localeCompare(b.name.split(' ')[0] || '');
        case 'lastName': {
          const aLastName = (a.name.split(' ').slice(-1)[0] || '');
          const bLastName = (b.name.split(' ').slice(-1)[0] || '');
          return aLastName.localeCompare(bLastName);
        }
        case 'contactSphere': {
          const priorityA = getContactSpherePriority(a);
          const priorityB = getContactSpherePriority(b);
          
          if (priorityA !== priorityB) {
            return priorityA - priorityB;
          }
          
          // If priorities are equal, sort alphabetically by sphere name
          const sphereA = (a.contact_sphere_1 || '').toUpperCase();
          const sphereB = (b.contact_sphere_1 || '').toUpperCase();
          return sphereA.localeCompare(sphereB);
        }
        case 'industry': {
          const industryA = (a.industry || '').toUpperCase();
          const industryB = (b.industry || '').toUpperCase();
          return industryA.localeCompare(industryB);
        }
        default:
          return 0;
      }
    });
    setSortedMembers(sorted);
  };

  return (
    <>
      <Header onSort={handleSort} />
      <div className="mt-8">
        <MemberGrid members={sortedMembers} />
        <Footer lastUpdated={lastUpdated || '—'} />
      </div>
    </>
  );
};

export default HomePage;