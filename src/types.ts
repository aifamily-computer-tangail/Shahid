export interface SpecialityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface BusinessTrack {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  outcomes: string[];
  bestFor: string;
  badge: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  target: string;
  price: string;
  tier: string;
  features: Array<{ text: string; included: boolean }>;
  buttonLabel: string;
  popular?: boolean;
}

export interface ClientItem {
  name: string;
  role: string;
  location: string;
  description: string;
  tag: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  title: string;
  organization: string;
  location: string;
  rating: number;
}

export interface ProfileItem {
  platform: 'Upwork' | 'Facebook' | 'Freelancer';
  title: string;
  subtitle: string;
  url: string;
  handle: string;
  highlight: string;
}
