import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail, User, Globe } from 'lucide-react';

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

interface MemberCardProps {
  member: Member;
}

const SocialIcons = {
  facebook: "https://ryxhnmkmsevedgjiduxn.supabase.co/storage/v1/object/public/0004-bni-assets/Facebook%20Logo_Shiny-02.png",
  instagram: "https://ryxhnmkmsevedgjiduxn.supabase.co/storage/v1/object/public/0004-bni-assets/Instagram%20Logo_Shiny-03.png",
  linkedin: "https://ryxhnmkmsevedgjiduxn.supabase.co/storage/v1/object/public/0004-bni-assets/LinkedIn%20Logo_Shiny-06.png",
  youtube: "https://ryxhnmkmsevedgjiduxn.supabase.co/storage/v1/object/public/0004-bni-assets/YouTube%20Logo_Shiny-05.png"
};

const getBackgroundStyle = (member: Member) => {
  const sphere1 = member.contact_sphere_1;
  const sphere2 = member.contact_sphere_2;

  // Handle members with no contact spheres
  if (!sphere1 && !sphere2) {
    return {
      background: 'linear-gradient(to right, #9333EA, #1E3A8A, #FACC15, #DC2626, #16A34A)'
    };
  }

  // Member-specific backgrounds
  const memberBackgrounds: { [key: string]: string } = {
    'Sean Culley': 'linear-gradient(to right, #DC2626, #1E3A8A)',
    'Kurt London': 'linear-gradient(to right, #16A34A, #FACC15)',
    'Asa Brandis': 'linear-gradient(to right, #DC2626, #1E3A8A)',
    'Eric Ramaekers': 'linear-gradient(to right, #1E3A8A, #DC2626)',
    'Enji Sok': '#FACC15',
    'Megan Gorton': '#16A34A',
    'Carmen John': 'linear-gradient(to right, #FACC15, #9333EA)',
    'Josh Floisand': '#1E3A8A',
    'Douglas Warner': '#FACC15',
    'Katelyn Thompson': '#FACC15',
    'Brad Harper': 'linear-gradient(to right, #1E3A8A, #DC2626)',
    'Jade Lopez': 'linear-gradient(to right, #DC2626, #1E3A8A)',
    'Valerie Hawker': '#FACC15',
    'Liz Quinteros': '#1E3A8A',
    'Lucy Santos': 'linear-gradient(to right, #DC2626, #1E3A8A)',
    'Peter Cazier': '#9333EA',
    'Olga De La Cruz': 'linear-gradient(to right, #DC2626, #1E3A8A)',
    'Dave Hatch': 'linear-gradient(to right, #DC2626, #1E3A8A)',
    'Jeff Ballif': '#FACC15',
    'Paul Cazier': 'linear-gradient(to right, #9333EA, #1E3A8A, #FACC15, #DC2626, #16A34A)',
    'Sariah Fuller': 'linear-gradient(to right, #DC2626, #1E3A8A)',
    'Nicole Burleigh': '#FACC15',
    'Chase Cameron': '#FACC15',
    'Carlos Valdivia': 'linear-gradient(to right, #DC2626, #1E3A8A)',
    'John Evans': 'linear-gradient(to right, #1E3A8A, #DC2626)',
    'Jose Baeza': 'linear-gradient(to right, #FACC15, #1E3A8A)',
    'Kara Steel': 'linear-gradient(to right, #1E3A8A, #1E3A8A)',
    'David Dolan-Rabideau': 'linear-gradient(to right, #FACC15, #16A34A)',
    'Jason Mair': 'linear-gradient(to right, #DC2626, #1E3A8A)'
  };

  const background = memberBackgrounds[member.name];
  if (background) {
    return { background };
  }

  // Default background for unspecified members
  return {
    background: 'linear-gradient(to right, #9333EA, #1E3A8A, #FACC15, #DC2626, #16A34A)'
  };
};

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  const [contactOpen, setContactOpen] = useState(false);
  const [askOpen, setAskOpen] = useState(false);
  const [socialsOpen, setSocialsOpen] = useState(false);

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return '—';
    }
  };

  const getSocialUrl = (platform: string, url: string | null | undefined) => {
    if (!url) return null;
    try {
      const urlObj = new URL(url);
      return urlObj.hostname + urlObj.pathname;
    } catch {
      return url;
    }
  };

  return (
    <div className="rounded-xl shadow-lg overflow-visible transition-all duration-300 hover:shadow-2xl" style={getBackgroundStyle(member)}>
      <div className="relative">
        {/* Semi-transparent overlay for readability */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Contact Sphere Code */}
        <div className="absolute top-3 left-3 px-2 py-1 bg-black/30 rounded-sm text-xs font-medium text-white/85">
          {member.contact_sphere_1 || 'OTHER'}
          {member.contact_sphere_2 && ` / ${member.contact_sphere_2}`}
        </div>

        {/* Profile Section */}
        <div className="relative px-4 py-6 text-white">
          {/* Profile Image */}
          <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center overflow-hidden mb-4 border-4 border-white shadow-md">
            {member.photo_url ? (
              <img 
                src={member.photo_url} 
                alt={`${member.name}'s profile`} 
                className="w-full h-full object-cover"
              />
            ) : (
              <User size={48} className="text-slate-400" />
            )}
          </div>

          {/* Name and Business */}
          <h2 className="text-2xl font-bold text-center mb-2">{member.name}</h2>
          {member.google_profile ? (
            <a
              href={member.google_profile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm italic text-white hover:text-opacity-80 block text-center transition-colors duration-200"
            >
              {member.business_name}
            </a>
          ) : (
            <p className="text-sm italic text-white text-center">
              {member.business_name || 'Business name not available'}
            </p>
          )}
          {member.specialty && (
            <p className="italic text-sm text-white/90 pt-1 text-center">
              {member.specialty}
            </p>
          )}
        </div>

        {/* Card Body */}
        <div className="p-4 space-y-4">
          {/* Current Ask */}
          <div className="relative group">
            <button
              onClick={() => setAskOpen(!askOpen)}
              className="w-full flex items-center justify-between text-white px-4 py-2 rounded-lg transition-all duration-200 bg-black/10 hover:bg-black/20 border border-white/20 hover:border-white/40"
            >
              <span className="font-medium">Current Ask</span>
              <div className={`transform transition-transform duration-200 ${askOpen ? 'rotate-180' : ''}`}>
                <ChevronDown size={20} />
              </div>
            </button>
            <div className={`mt-2 transition-all duration-200 ease-in-out ${askOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0'}`}>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>{member.ask_date ? formatDate(member.ask_date) : 'Not available'}</span>
                </div>
                <p className="leading-relaxed">{member.ask_text || 'No current ask'}</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="relative group">
            <button
              onClick={() => setContactOpen(!contactOpen)}
              className="w-full flex items-center justify-between text-white px-4 py-2 rounded-lg transition-all duration-200 bg-black/10 hover:bg-black/20 border border-white/20 hover:border-white/40"
            >
              <span className="font-medium">Contact</span>
              <div className={`transform transition-transform duration-200 ${contactOpen ? 'rotate-180' : ''}`}>
                <ChevronDown size={20} />
              </div>
            </button>
            <div className={`mt-2 transition-all duration-200 ease-in-out ${contactOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0'}`}>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center hover:opacity-80 transition-colors duration-200"
                  >
                    <Phone size={16} className="mr-2" />
                    {member.phone}
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center hover:opacity-80 transition-colors duration-200 mt-2"
                  >
                    <Mail size={16} className="mr-2" />
                    {member.email}
                  </a>
                )}
                {member.website && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:opacity-80 transition-colors duration-200 mt-2"
                  >
                    <Globe size={16} className="mr-2" />
                    {member.website}
                  </a>
                )}
                {member.industry && (
                  <span className="inline-block rounded-full bg-white/50 text-xs font-semibold px-2 py-1 mt-2">
                    {member.industry}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="relative group">
            <button
              onClick={() => setSocialsOpen(!socialsOpen)}
              className="w-full flex items-center justify-between text-white px-4 py-2 rounded-lg transition-all duration-200 bg-black/10 hover:bg-black/20 border border-white/20 hover:border-white/40"
            >
              <span className="font-medium">Social Media</span>
              <div className={`transform transition-transform duration-200 ${socialsOpen ? 'rotate-180' : ''}`}>
                <ChevronDown size={20} />
              </div>
            </button>
            <div className={`mt-2 transition-all duration-200 ease-in-out ${socialsOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0'}`}>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4">
                  {['facebook', 'instagram', 'linkedin', 'youtube'].map((platform) => (
                    <div key={platform} className="flex flex-col items-center">
                      <a
                        href={member[platform as keyof Member] || `/not-social`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-8 h-8 mb-2 transition-all duration-200 hover:scale-110 ${!member[platform as keyof Member] ? 'opacity-50 hover:opacity-75' : ''}`}
                      >
                        <img
                          src={SocialIcons[platform as keyof typeof SocialIcons]}
                          alt={`${platform} icon`}
                          className="w-full h-full object-contain"
                        />
                      </a>
                      <span className="text-xs break-all text-center">
                        {getSocialUrl(platform, member[platform as keyof Member]) || '—'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;