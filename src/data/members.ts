interface Member {
  id: string;
  name: string;
  company: string;
  contact_sphere_1: string;
  contact_sphere_2: string;
  industry: string;
  top_GP: string[];
  top_RP: string[];
  health_score: number;
}

export const members: Member[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'Innovative Solutions Inc.',
    contact_sphere_1: 'Technology',
    contact_sphere_2: 'Professional Services',
    industry: 'Software Development',
    top_GP: ['Healthcare Providers', 'Financial Services', 'Manufacturing'],
    top_RP: ['IT Consultants', 'Business Analysts', 'Project Managers'],
    health_score: 85
  },
  {
    id: '2',
    name: 'Michael Chen',
    company: 'Financial Wizards LLC',
    contact_sphere_1: 'Finance',
    contact_sphere_2: 'Real Estate',
    industry: 'Financial Planning',
    top_GP: ['Small Business Owners', 'Real Estate Agents', 'Entrepreneurs'],
    top_RP: ['Tax Advisors', 'Insurance Agents', 'Mortgage Brokers'],
    health_score: 92
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    company: 'Creative Marketing Co.',
    contact_sphere_1: 'Marketing',
    contact_sphere_2: 'Retail',
    industry: 'Digital Marketing',
    top_GP: ['E-commerce', 'Local Businesses', 'Startups'],
    top_RP: ['Web Designers', 'Content Writers', 'Social Media Managers'],
    health_score: 78
  },
  {
    id: '4',
    name: 'David Thompson',
    company: 'Legal Eagles',
    contact_sphere_1: 'Legal',
    contact_sphere_2: 'Business Services',
    industry: 'Corporate Law',
    top_GP: ['Startups', 'Real Estate Developers', 'Healthcare Providers'],
    top_RP: ['Accountants', 'Business Consultants', 'Insurance Brokers'],
    health_score: 88
  },
  {
    id: '5',
    name: 'Lisa Parker',
    company: 'Healthcare Solutions',
    contact_sphere_1: 'Healthcare',
    contact_sphere_2: 'Wellness',
    industry: 'Medical Services',
    top_GP: ['Fitness Centers', 'Senior Living Facilities', 'Corporate Wellness'],
    top_RP: ['Physical Therapists', 'Nutritionists', 'Medical Equipment Suppliers'],
    health_score: 95
  }
];