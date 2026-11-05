// Single source of truth for all profile content shown on the site.
// Keep this in sync with public/Ravikant-Upadhyay-Resume.pdf.

export const profile = {
  name: 'Ravikant Upadhyay',
  initials: 'RU',
  role: 'Software Developer',
  tagline: 'AI & ML · Full-Stack · CRM/DMS · IoT',
  location: 'Vadodara, Gujarat, India',
  availability: 'Open to full-time roles & freelance projects',
  email: 'nravikant123@gmail.com',
  phone: '+91 70962 91214',
  phoneHref: 'tel:+917096291214',
  github: 'https://github.com/Ravikant-1811',
  githubUser: 'Ravikant-1811',
  linkedin: 'https://linkedin.com/in/ravikant-upadhyay',
  avatar: 'https://github.com/Ravikant-1811.png?size=400',
  resume: '/Ravikant-Upadhyay-Resume.pdf',
  summary:
    'Software Developer with expertise in AI & ML, full-stack development, CRM/DMS systems, and IoT solutions. Experienced in web development, automation, and microcontroller programming, with strong exposure to digital marketing — social media, paid campaigns, email and WhatsApp marketing. I focus on efficient, scalable, user-centric digital solutions that combine technology with business growth.',
};

export const stats = [
  { value: '21+', label: 'Websites delivered' },
  { value: '5+', label: 'Custom software systems' },
  { value: '98%', label: 'On-time delivery' },
  { value: '95%+', label: 'Repeat-client rate' },
];

export const focusAreas = [
  {
    title: 'Full-stack web',
    copy: 'PHP/MySQL applications, dashboards, authentication, APIs and responsive front-ends built for real users.',
  },
  {
    title: 'CRM & DMS systems',
    copy: 'Custom CRMs, dealer management and technician apps that cut manual workload and speed up reporting.',
  },
  {
    title: 'AI & automation',
    copy: 'AI model integration, AI content tools and workflow automation that remove repetitive work.',
  },
  {
    title: 'IoT & hardware',
    copy: 'Microcontroller programming, sensors and self-hosted infrastructure — from robots to Raspberry Pi servers.',
  },
  {
    title: 'WordPress platforms',
    copy: 'WordPress, Elementor and ACF builds with dynamic content, performance tuning and ongoing maintenance.',
  },
  {
    title: 'Digital marketing',
    copy: 'Social media, paid ads, email & WhatsApp campaigns, reels and creative production that drive reach.',
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Internship';
  current?: boolean;
  points: string[];
  tags: string[];
  link?: { label: string; href: string };
};

export const experience: Experience[] = [
  {
    role: 'Software Developer',
    company: 'Zeusinfinity Services',
    period: 'Jan 2026 — Present',
    location: 'Vadodara, Gujarat',
    type: 'Full-time',
    current: true,
    points: [
      'Develop and manage websites using WordPress, Elementor and ACF, creating dynamic, user-friendly interfaces.',
      'Build custom software solutions and implement AI tools & automation workflows to improve efficiency.',
      'Handle system support across software and basic hardware operations to keep the business running smoothly.',
    ],
    tags: ['WordPress', 'Elementor', 'ACF', 'AI Automation', 'Custom Software'],
  },
  {
    role: 'Software Developer',
    company: 'Mohphret Technologies LLP',
    period: 'Feb 2025 — Jan 2026',
    location: 'Vapi, Gujarat',
    type: 'Full-time',
    points: [
      'Developed the official Mohphret Technologies website, boosting online traffic by 35%.',
      'Built and enhanced key modules of the SV Placement platform, improving operational efficiency by 40%.',
      'Collaborated across teams to deliver scalable web solutions, reducing development turnaround by 25%.',
    ],
    tags: ['PHP', 'MySQL', 'JavaScript', 'Recruitment Platform'],
  },
  {
    role: 'Software Developer',
    company: 'Global Medical Devices',
    period: 'Jun 2024 — Nov 2024',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    points: [
      'Launched the company website, boosting online visibility and engagement by 40%.',
      'Built a custom CRM and technician mobile app, reducing manual workload by 50% and improving reporting efficiency by 60%.',
      'Aligned product features with operational needs across teams, accelerating task completion by 25%.',
    ],
    tags: ['CRM', 'Mobile App', 'Web', 'Reporting'],
  },
  {
    role: 'Social Media Manager',
    company: 'Corpbiz Experts Solution Pvt Ltd',
    period: 'Sep 2023 — Apr 2024',
    location: 'Wagholi, Pune',
    type: 'Full-time',
    points: [
      'Ran end-to-end social media for the Paint Serum brand — content planning, post design, reels and video editing.',
      'Wrote scripts, produced AI voiceovers and creative concepts (including Vedic-inspired ideas) to strengthen brand storytelling.',
      'Managed paid ads, email and WhatsApp marketing, content calendars and performance tracking to grow leads and reach.',
      'Contributed to Corpbiz’s dealer management software, supporting marketing automation and operational efficiency.',
    ],
    tags: ['Social Media', 'Paid Ads', 'WhatsApp & Email', 'DMS'],
    link: { label: '@paint_serum', href: 'https://www.instagram.com/paint_serum/' },
  },
  {
    role: 'Web Development Intern',
    company: 'Webbex Innovative India Pvt. Ltd.',
    period: 'Jun 2020 — Sep 2020',
    location: 'Chinchwad, Pune',
    type: 'Internship',
    points: [
      'Designed and developed responsive pages with HTML5, CSS3, JavaScript and PHP, improving load speed by 20%.',
      'Enhanced site features with senior developers, contributing to a 15% increase in session duration.',
      'Integrated APIs and streamlined debugging, cutting manual data handling by 30% with 99% cross-browser stability.',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'APIs'],
  },
];

export type Project = {
  title: string;
  context: string;
  description: string;
  highlights: string[];
  stack: string[];
  href?: string;
};

export const featuredProjects: Project[] = [
  {
    title: 'AI Autonomous Vacuum Cleaner with UV Disinfection',
    context: 'D. Y. Patil International University · Final-year project',
    description:
      'An AI-powered cleaning robot with ultrasonic obstacle detection, self-navigation, human-following and UV-based disinfection.',
    highlights: ['95% collision avoidance', '+40% cleaning efficiency', 'Bluetooth + voice control', '3-in-1 cleaning modes'],
    stack: ['AI', 'IoT', 'Microcontrollers', 'Sensors'],
  },
  {
    title: 'Raspberry Pi Web Hosting Server',
    context: 'Self-hosted infrastructure · Nov 2024 — Jan 2025',
    description:
      'A Raspberry Pi 3B configured as a full hosting server behind Cloudflare Tunnel, serving multiple custom-domain websites with its own mail stack.',
    highlights: ['99% remote accessibility', '<1% downtime', 'Postfix · Dovecot · Roundcube', 'Firewall & DNS tuning'],
    stack: ['Linux', 'Cloudflare', 'Mail Server', 'Networking'],
  },
  {
    title: 'Freelance Websites & Software',
    context: 'Independent client work',
    description:
      'End-to-end websites and backend systems with authentication, APIs and optimised architecture, plus ongoing maintenance for clients.',
    highlights: ['21+ websites', '5 custom software builds', '98% on-time delivery', '95%+ repeat clients'],
    stack: ['PHP', 'MySQL', 'WordPress', 'APIs'],
  },
];

export const openSource: Project[] = [
  {
    title: 'Taskflow',
    context: 'Open source',
    description: 'Multi-tenant task and workspace system with roles and task pipelines for small teams.',
    highlights: [],
    stack: ['PHP', 'SQLite', 'JavaScript'],
    href: 'https://github.com/Ravikant-1811/Taskflow-PHP',
  },
  {
    title: 'Multi-User Communication Platform',
    context: 'Open source',
    description: 'Role-based platform with separate admin and client dashboards, secure access and real-time chat.',
    highlights: [],
    stack: ['PHP', 'MySQL', 'AJAX'],
    href: 'https://github.com/Ravikant-1811/Multi-User-PHP-Web-Application',
  },
  {
    title: 'WhatsApp Campaign Console',
    context: 'Open source',
    description: 'Bulk-messaging dashboard with templates, scheduling, queue visibility and safer delivery controls.',
    highlights: [],
    stack: ['TypeScript', 'Node.js'],
    href: 'https://github.com/Ravikant-1811/Whatsapp-Bulk-Bot',
  },
  {
    title: 'Digital Card Generator',
    context: 'Open source',
    description: 'Create, manage and share digital business cards.',
    highlights: [],
    stack: ['PHP', 'SQLite'],
    href: 'https://github.com/Ravikant-1811/Digital-Card-Generator',
  },
  {
    title: 'Email Signature Tool',
    context: 'Open source',
    description: 'Email-safe signature builder with saved profiles.',
    highlights: [],
    stack: ['PHP', 'HTML'],
    href: 'https://github.com/Ravikant-1811/Email-Signature-Tool',
  },
  {
    title: 'Find Business',
    context: 'Open source',
    description: 'Business discovery and lead collection platform.',
    highlights: [],
    stack: ['PHP', 'MySQL'],
    href: 'https://github.com/Ravikant-1811/find-business',
  },
];

export const skillGroups = [
  { title: 'Languages', items: ['PHP', 'JavaScript', 'Python', 'C/C++', 'HTML', 'CSS', 'SQL'] },
  { title: 'Web & CMS', items: ['WordPress', 'Elementor', 'ACF', 'MySQL', 'API Integration', 'Git'] },
  { title: 'AI & ML', items: ['Machine Learning', 'AI Model Integration', 'AI Content Tools', 'ElevenLabs', 'Automation Workflows'] },
  { title: 'Infrastructure & IoT', items: ['Linux Server Management', 'Cloudflare', 'Raspberry Pi', 'Mail Servers', 'Microcontrollers'] },
  { title: 'Design & Media', items: ['Photoshop', 'Illustrator', 'Canva', 'Affinity Photo', 'Premiere Pro', 'CapCut', 'VN Editor'] },
  { title: 'Marketing', items: ['Meta Business Suite', 'Paid Campaigns', 'WhatsApp Marketing', 'Email Marketing', 'Content Strategy'] },
];

export const education = [
  {
    degree: 'B.Tech, Computer Science & Engineering',
    minor: 'Minor in Artificial Intelligence & Machine Learning',
    school: 'D. Y. Patil International University',
    place: 'Maharashtra, India',
    year: '2024',
    score: 'CGPA 7.47',
    note: 'AI-driven automation and IoT projects including a Smart Mirror, Autonomous Vacuum Cleaner and a voice-controlled smart home system with real-time monitoring.',
  },
  {
    degree: 'Higher Secondary (HSC)',
    minor: 'Computers',
    school: 'SSV Gyan Kendra School',
    place: 'Gujarat, India',
    year: '2019',
    score: '60%',
    note: 'Coding competitions and team web projects that sparked an interest in software engineering.',
  },
  {
    degree: 'Secondary (SSC)',
    minor: 'Mathematics',
    school: 'SSV Gyan Kendra School',
    place: 'Gujarat, India',
    year: '2017',
    score: '70.30%',
    note: 'Foundations in maths, reasoning and electronics through school exhibitions.',
  },
];

export const certifications = [
  { name: 'Introduction to Internet of Things', issuer: 'NPTEL', year: '2024' },
  { name: 'Cloud Computing', issuer: 'NPTEL', year: '2024' },
  { name: 'Learning Python', issuer: 'LinkedIn Learning', year: '2023' },
  { name: 'Advanced Java Programming', issuer: 'LinkedIn Learning', year: '2023' },
  { name: 'Introduction to Artificial Intelligence', issuer: 'LinkedIn Learning', year: '2023' },
  { name: 'C/C++', issuer: 'Disha Computer', year: '2023' },
  { name: 'Web Development Internship', issuer: 'SSV Gyan Kendra — built ssvgyankendra.com', year: '2018' },
];
