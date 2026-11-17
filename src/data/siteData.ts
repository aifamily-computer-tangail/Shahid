import {
  SpecialityItem,
  BusinessTrack,
  PricingPlan,
  ClientItem,
  TestimonialItem,
  ProfileItem,
} from '../types.ts';

export const SPECIALITIES: SpecialityItem[] = [
  {
    id: 'ai-work',
    title: 'A I Work',
    description: 'I will setup your traditional business to online presents using ai workflows.',
    iconName: 'Cpu',
    tag: 'Next-Gen Automation',
  },
  {
    id: 'online-setup',
    title: 'Online Business Setup',
    description: 'I will setup your traditional business to online presents or your idea base online business.',
    iconName: 'Globe',
    tag: 'Turnkey Launch',
  },
  {
    id: 'offline-scale',
    title: 'Offline Business Scale',
    description: 'You can scale your offline business to a large online consumers.',
    iconName: 'TrendingUp',
    tag: 'Market Expansion',
  },
  {
    id: 'customizable',
    title: 'Easy to Customize',
    description: 'You can easily customize/modify later, if you want to change anything on your hands.',
    iconName: 'Sliders',
    tag: 'Full Ownership',
  },
  {
    id: 'quality-design',
    title: 'Fresh Quality Design',
    description: 'I will give you quality and professional layouts for your business and give a modern look.',
    iconName: 'Palette',
    tag: 'Bespoke UI/UX',
  },
  {
    id: 'google-supported',
    title: 'Google Supported',
    description: 'My work will be Google Supported and Your website will be Google Console Verified.',
    iconName: 'CheckCircle2',
    tag: 'Search Ready',
  },
  {
    id: 'future-update',
    title: 'Future Update',
    description: 'Your business will be future updatable and All themes and plugins will be auto update.',
    iconName: 'RefreshCw',
    tag: 'Zero Maintenance Friction',
  },
  {
    id: 'after-sales',
    title: 'After Sales Support',
    description: 'After complete my work on your project, you will get support easily as per terms.',
    iconName: 'LifeBuoy',
    tag: 'Dedicated Assurance',
  },
];

export const BUSINESS_TRACKS: BusinessTrack[] = [
  {
    id: 'start-work',
    title: 'Start Work',
    subtitle: 'From Concept to Functional Web Presence',
    summary:
      'Kickstart your new commercial venture with clear architecture, professional branding, and a fast launch pipeline tailored for Bangladeshi and international markets.',
    outcomes: [
      'Discovery session & business goal mapping',
      'Modern responsive website tailored to your niche',
      'Domain, secure hosting, and business email integration',
      'Direct WhatsApp and lead inquiry setup',
    ],
    bestFor: 'New startups, consultants, and independent practitioners',
    badge: 'Foundation',
  },
  {
    id: 'online-business',
    title: 'Online Business',
    subtitle: 'Full-Featured Digital Storefronts & Services',
    summary:
      'Complete e-commerce, digital catalog, and service management system engineered to convert visitors into loyal paying customers.',
    outcomes: [
      'Product catalogue & secure checkout workflow',
      'Inventory control and order management',
      'Customer account portal and transaction notifications',
      'Mobile-first performance optimization',
    ],
    bestFor: 'Retailers, wholesalers, and specialized service providers',
    badge: 'E-Commerce',
  },
  {
    id: 'offline-business-scalling',
    title: 'Offline Business Scalling',
    subtitle: 'Digitize Physical Stores to Nationwide Reach',
    summary:
      'Transform your local physical shop, showroom, or manufacturing business into an expansive online powerhouse reaching consumers across Bangladesh and beyond.',
    outcomes: [
      'Offline inventory to online sync strategy',
      'Local search SEO & Google Business Profile dominance',
      'Customer outreach and automated retargeting funnels',
      'Scalable hosting architecture built for traffic spikes',
    ],
    bestFor: 'Brick-and-mortar merchants, distributors, and regional brands',
    badge: 'Scale',
  },
  {
    id: 'marketing-branding',
    title: 'Marketing and Branding',
    subtitle: 'High-Impact Brand Identity & Acquisition',
    summary:
      'Position your business with authoritative visual identity, clear brand storytelling, and data-backed conversion funnels that build long-term market trust.',
    outcomes: [
      'Comprehensive brand guideline and typography system',
      'Social media promotional assets and ad creatives',
      'High-converting landing page layouts with split-testing',
      'Customer review collection and trust-proof architecture',
    ],
    bestFor: 'Growing enterprises looking to command premium pricing',
    badge: 'Growth',
  },
  {
    id: 'sales-engineering',
    title: 'Sales Engineering',
    subtitle: 'Technical Sales Architecture & Automation',
    summary:
      'As a Sales Engineer, I bridge technical software architecture with revenue-generating sales workflows, CRM pipelines, and AI automated lead qualification.',
    outcomes: [
      'Automated sales funnels & CRM integration',
      'Custom quotation generators and pricing calculators',
      'Technical proof-of-concept demos for enterprise clients',
      'Milestone-driven project contracts and SLA guarantees',
    ],
    bestFor: 'B2B companies, tech services, and enterprise agencies',
    badge: 'Engineering',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'light',
    name: 'Light',
    target: 'Light for Single Business',
    price: '৳14999',
    tier: 'Essential',
    features: [
      { text: 'Support', included: true },
      { text: 'Require Options', included: true },
      { text: 'Business Platform', included: true },
      { text: 'No SEO', included: false },
    ],
    buttonLabel: 'Hire',
    popular: false,
  },
  {
    id: 'great',
    name: 'Great',
    target: 'Great for Single Business',
    price: '৳20000',
    tier: 'Professional',
    features: [
      { text: 'Support', included: true },
      { text: 'Customized Options', included: true },
      { text: 'Business Platform', included: true },
      { text: 'Google SEO', included: true },
    ],
    buttonLabel: 'Hire',
    popular: true,
  },
  {
    id: 'fly',
    name: 'Fly',
    target: 'Great for Multiple business',
    price: '% - %',
    tier: 'Business',
    features: [
      { text: 'Support', included: true },
      { text: 'Advance Options', included: true },
      { text: 'Professional Platform', included: true },
      { text: 'SEO and Ads Ready', included: true },
    ],
    buttonLabel: 'Start',
    popular: false,
  },
];

export const CLIENTS: ClientItem[] = [
  {
    name: 'Basail Paurashava',
    role: 'Municipal Government Portal',
    location: 'Tangail, Bangladesh',
    description:
      'Official digital governance portal streamlining civic citizen notices, municipal administrative records, and public welfare services.',
    tag: 'Govt. Administration',
  },
  {
    name: 'GIHN Foundation',
    role: 'Global Humanitarian NGO',
    location: 'National & Global',
    description:
      'Online donor engagement platform, program transparency reports, and community healthcare initiative dashboards.',
    tag: 'Healthcare & NGO',
  },
  {
    name: 'AI Family Computer',
    role: 'Digital Skills & Tech Academy',
    location: 'Tangail, Bangladesh',
    description:
      'Technical training hub and vocational online platform empowering regional youth with practical freelancing and computing literacy.',
    tag: 'Education & Training',
  },
  {
    name: 'Brainchild Digital',
    role: 'Technology & Business Partner',
    location: 'Dhaka / Tangail',
    description:
      'Comprehensive online business incubator delivering custom web development, e-commerce rollouts, and multi-channel marketing.',
    tag: 'Enterprise Agency',
  },
  {
    name: 'Tangail Agro & Handloom Hub',
    role: 'Heritage & Trade Exporter',
    location: 'Tangail, Bangladesh',
    description:
      'Direct-to-consumer e-commerce expansion empowering local artisanal textile weavers and agro-merchants with nationwide shipping.',
    tag: 'E-Commerce & Export',
  },
  {
    name: 'Apex Smart Solutions',
    role: 'B2B Industrial Services',
    location: 'Dhaka Division',
    description:
      'Automated sales quotation portal and client onboarding workflow with Google Search Console verification.',
    tag: 'B2B Sales Engineering',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'Engr. M. Rahman',
    title: 'Senior Officer',
    organization: 'Basail Paurashava (Municipality)',
    location: 'Tangail, Bangladesh',
    quote:
      'Shahid delivered our municipal digital infrastructure on time and exactly according to government specifications. His milestone-based approach gave our committee complete confidence, and the after-sales support has been exemplary.',
    rating: 5,
  },
  {
    id: 'test-2',
    author: 'Kazi Farhan',
    title: 'Director of Outreach',
    organization: 'GIHN Foundation',
    location: 'Bangladesh / International',
    quote:
      'From the initial business architecture to Google Search Console verification, M Shahid Islam demonstrated deep expertise in both sales engineering and web development. Our donation page conversions increased significantly.',
    rating: 5,
  },
  {
    id: 'test-3',
    author: 'Ashraful Alam',
    title: 'Founder & Managing Director',
    organization: 'Tangail Agro Export & Crafts',
    location: 'Tangail, Bangladesh',
    quote:
      'Taking our physical offline business into an online e-commerce platform seemed overwhelming until we consulted with Shahid. He set up our AI workflows, streamlined customer inquiries via WhatsApp, and delivered clean, future-updatable code.',
    rating: 5,
  },
  {
    id: 'test-4',
    author: 'Tanvir Hossain',
    title: 'Operations Head',
    organization: 'AI Family Computer Center',
    location: 'Tangail, Bangladesh',
    quote:
      'Shahid is a true business advisor who understands sales psychology as thoroughly as code. His Fresh Quality Design transformed our brand presence, and his support is always accessible.',
    rating: 5,
  },
];

export const PROFILES: ProfileItem[] = [
  {
    platform: 'Upwork',
    title: 'Upwork',
    subtitle: 'View Profile and Hire',
    url: 'https://www.upwork.com/freelancers/~01b5a5b54a7f292c0a',
    handle: 'Shahidul I. – Sales Engineer & Web Developer',
    highlight: 'Top Rated Freelancer with 100% Job Success & Verified Escrow Protection',
  },
  {
    platform: 'Facebook',
    title: 'Facebook',
    subtitle: 'View Profile and Hire',
    url: 'https://www.facebook.com/Brainchild.BD',
    handle: '@Brainchild.BD – Your Ultimate Business Solution Partner',
    highlight: 'Active community, client case studies, live consultations, and direct messenger support',
  },
  {
    platform: 'Freelancer',
    title: 'Freelancer',
    subtitle: 'View Profile and Hire',
    url: 'https://www.freelancer.com/u/mshahidi',
    handle: 'mshahidi – Preferred Freelancer & Business Developer',
    highlight: 'Milestone payment protection, verified identity, and international client reviews',
  },
];

export const CONTACT_INFO = {
  name: 'M Shahid Islam',
  roles: ['Sales Engineer', 'Business Developer', 'Website Developer'],
  organization: 'Brainchild BD / AI Family',
  email: 'aifamily.computer.tangail@gmail.com',
  phone: '+8801760443030',
  whatsappUrl: 'https://wa.me/8801760443030',
  location: 'Tangail, Dhaka Division, Bangladesh',
  availability: 'Open for new projects & consultations',
  milestoneNote: 'All work will be mailestone basis payments.',
};
