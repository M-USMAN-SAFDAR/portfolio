export const FRONTEND_SKILLS = [
  { name: 'JavaScript', category: 'Frontend', color: '#F7DF1E', slug: 'js' },
  { name: 'React', category: 'Frontend', color: '#61DAFB', slug: 'react' },
  { name: 'Flutter', category: 'Frontend', color: '#02569B', slug: 'flutter' },
  { name: 'Tailwind CSS', category: 'Frontend', color: '#06B6D4', slug: 'tailwind' },
  { name: 'HTML5', category: 'Frontend', color: '#E34F26', slug: 'html' },
  { name: 'CSS3', category: 'Frontend', color: '#1572B6', slug: 'css' },
  { name: 'Vite', category: 'Frontend', color: '#646CFF', slug: 'vite' },
  { name: 'Dart', category: 'Frontend', color: '#0175C2', slug: 'dart' },
]

export const BACKEND_SKILLS = [
  { name: 'Node.js', category: 'Backend & Database', color: '#5FA04E', slug: 'nodejs' },
  { name: 'Express', category: 'Backend & Database', color: '#EDEDED', slug: 'express' },
  { name: 'MongoDB', category: 'Backend & Database', color: '#47A248', slug: 'mongodb' },
  { name: 'PostgreSQL', category: 'Backend & Database', color: '#4169E1', slug: 'postgres' },
  { name: 'FastAPI', category: 'Backend & Database', color: '#009688', slug: 'fastapi' },
  { name: 'Python', category: 'Backend & Database', color: '#3776AB', slug: 'py' },
  { name: 'Firebase', category: 'Backend & Database', color: '#FFCA28', slug: 'firebase' },
  { name: 'SQL', category: 'Backend & Database', color: '#4479A1', slug: 'mysql' },
  { name: 'REST APIs', category: 'Backend & Database', color: '#FF6C37', slug: 'postman' },
  { name: 'Mongoose', category: 'Backend & Database', color: '#880000', slug: 'mongodb' },
]

export const TOOLING_SKILLS = [
  { name: 'Git', category: 'Tools', color: '#F05032', slug: 'git' },
  { name: 'GitHub', category: 'Tools', color: '#EDEDED', slug: 'github' },
  { name: 'Android Studio', category: 'Tools', color: '#3DDC84', slug: 'androidstudio' },
  { name: 'Postman', category: 'Tools', color: '#FF6C37', slug: 'postman' },
  { name: 'Figma', category: 'Tools', color: '#F24E1E', slug: 'figma' },
  { name: 'cPanel', category: 'Tools', color: '#FF6C2C', slug: 'cpanel', iconUrl: 'https://cdn.simpleicons.org/cpanel/FF6C2C' },
  { name: 'Vercel', category: 'Tools', color: '#EDEDED', slug: 'vercel' },
  { name: 'n8n', category: 'Tools', color: '#EA4B71', slug: 'n8n', iconUrl: 'https://cdn.simpleicons.org/n8n/EA4B71' },
  { name: 'Claude Code', category: 'Tools', color: '#D97757', slug: 'claude', iconUrl: 'https://cdn.simpleicons.org/anthropic/D97757' },
  { name: 'Antigravity IDE', category: 'Tools', color: '#8B5CF6', slug: 'antigravity', iconUrl: 'https://antigravity.google/assets/image/antigravity-logo.png' },
]

export const CMS_SKILLS = [
  { name: 'WordPress', category: 'CMS & E-commerce', color: '#21759B', slug: 'wordpress', iconUrl: 'https://cdn.simpleicons.org/wordpress/21759B' },
  { name: 'Elementor', category: 'CMS & E-commerce', color: '#92003B', slug: 'elementor', iconUrl: 'https://cdn.simpleicons.org/elementor/92003B' },
  { name: 'WooCommerce', category: 'CMS & E-commerce', color: '#96588A', slug: 'woocommerce', iconUrl: 'https://cdn.simpleicons.org/woocommerce/96588A' },
  { name: 'Plugin Integration', category: 'CMS & E-commerce', color: '#8C8C8C', slug: 'wordpress', iconUrl: 'https://cdn.simpleicons.org/wordpress/8C8C8C' },
]

export const portfolioData = {
  profile: {
    name: 'Muhammad Usman Safdar',
    title: 'Full Stack Developer',
    role: 'Full Stack Developer',
    availability: 'Open for new opportunities',
    location: 'Remote / Global',
    email: 'usmansafdar12535@gmail.com',
    cvUrl: '/Muhammad_Usman_Safdar-CV.pdf',
    socials: {
      github: 'https://github.com/M-USMAN-SAFDAR',
      linkedin: 'https://www.linkedin.com/in/usmansafdar2025',
      twitter: 'https://x.com/oiiUsman',
      instagram: 'https://www.instagram.com/oiiusmann',
      facebook: 'https://www.facebook.com/usman.safdar.14289',
      discord: 'https://discord.com/oiiUsman',
    },
    formspreeEndpoint: 'https://formspree.io/f/xgoqzgza',
  },
  education: [
    {
      degree: 'BS Computer Science (Post-Associate)',
      institution: 'University of Education, Lahore',
      period: '2025 - 2027',
      tags: ['Computer Science', 'Undergraduate'],
    },
    {
      degree: 'Associate Degree in Computer Sciences',
      institution: 'Riphah International University, Lahore',
      period: '2023 - 2025',
      tags: ['Computer Sciences'],
    },
    {
      degree: 'Intermediate (ICS)',
      institution: 'Government College Gulberg, Lahore',
      period: '2020 - 2022',
      tags: ['Intermediate', 'Computer Science'],
    },
    {
      degree: 'Matriculation',
      institution: 'City District Govt Boys High School, Lahore',
      period: '2018 - 2020',
      tags: ['Secondary Education'],
    },
  ],
  projects: [
    {
      id: 'hrm',
      title: 'HR Management App',
      description: 'A full-stack HR management platform designed to simplify employee management and organizational workflows, featuring interactive dashboards and structured database handling.',
      modules: ['mongodb', 'express', 'react', 'nodejs'],
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      blueprint: {
        ai: 'HR management platform with interactive dashboards.',
        scalability: 'Structured database handling with MongoDB.',
        ux: 'Employee management and organizational workflows.',
      },
      image: '/projects/hrm.webp',
      link: 'https://hr-managementt.vercel.app/',
      featured: true,
    },
    {
      id: 'salon',
      title: 'Luxe Grooming',
      description: 'A salon booking and management solution using React JS, Tailwind CSS, Express JS, and MongoDB, featuring appointment booking and a secure admin dashboard.',
      modules: ['mongodb', 'express', 'react', 'nodejs'],
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
      blueprint: {
        ai: 'Salon booking and management solution.',
        scalability: 'MongoDB-backed application using Express and Node.js.',
        ux: 'Appointment booking with a secure admin dashboard.',
      },
      image: '/projects/salon.webp',
      link: 'https://luxehairsaloon.vercel.app/',
      featured: true,
    },
    {
      id: 'dispatch-by-rio',
      title: 'Dispatch by RIO',
      description: 'A modern dispatch website supporting owner-operators and growing fleets, with a clear overview of services, equipment, and how to get started.',
      modules: ['react', 'gsap', 'threejs'],
      tech: ['React', 'GSAP', 'Three.js'],
      blueprint: {
        ai: 'A polished website for a trucking dispatch service.',
        scalability: 'Organized service, equipment, and company information.',
        ux: 'Clear navigation and calls to action for owner-operators and fleets.',
      },
      image: '/projects/dispatch.webp',
      link: 'https://dispatchbyrio.com/',
      featured: true,
    },
  ],
  skills: [...FRONTEND_SKILLS, ...BACKEND_SKILLS, ...CMS_SKILLS, ...TOOLING_SKILLS],
  skillCategories: [
    { title: 'Frontend', skills: FRONTEND_SKILLS },
    { title: 'Backend & Database', skills: BACKEND_SKILLS },
    { title: 'CMS & E-commerce', skills: CMS_SKILLS },
    { title: 'Tools', skills: TOOLING_SKILLS },
  ],
  experience: [
    {
      role: 'Freelance WordPress & Web Developer',
      company: 'Self-Employed',
      location: 'Lahore, Pakistan',
      period: '2023 - Present',
      status: true,
      description: 'Developing responsive WordPress websites and WooCommerce stores, with a focus on tailored page design, dependable checkout flows, and ongoing site maintenance.',
      tags: ['WordPress', 'Elementor', 'WooCommerce', 'SEO', 'cPanel'],
      bullets: [
        'Customized responsive WordPress themes and built tailored landing pages with Elementor and visual builders.',
        'Configured WooCommerce stores, product catalogs, payment gateway integrations, and checkout flows.',
        'Improved website performance, SEO structure, and security, and managed domain hosting through cPanel.',
      ],
    },
  ],
  roles: [
    {
      id: 'fullstack',
      title: 'FULL STACK ENGINEERING',
      description: 'Building full-stack applications with React, Node.js, Express, and MongoDB.',
    },
    {
      id: 'frontend',
      title: 'FRONTEND & MOBILE',
      description: 'Creating responsive web experiences with React and cross-platform mobile apps with Flutter.',
    },
    {
      id: 'backend',
      title: 'APIS & DATA',
      description: 'Developing backend services and REST APIs with Node.js, Express, Python, and modern databases.',
    },
  ],
  services: [
    { title: 'Full Stack Engineering', desc: 'Building full-stack applications with React, Node.js, Express, and MongoDB.', icon: 'Code' },
    { title: 'Frontend & Mobile', desc: 'Creating responsive web experiences with React and cross-platform mobile apps with Flutter.', icon: 'Smartphone' },
    { title: 'APIs & Data', desc: 'Developing backend services and REST APIs with Node.js, Express, Python, and modern databases.', icon: 'Database' },
  ],
  offeredServices: [],
  testimonials: [],
  faqs: [],
  adventureNarratives: {
    ai: 'Building practical full-stack products with modern web and mobile technologies.',
    web: 'Creating responsive React interfaces and reliable backend services for real-world applications.',
    mobile: 'Developing cross-platform mobile applications with Flutter.',
    default: 'Full Stack Developer building web and mobile applications with React, Node.js, and Flutter.',
  },
}
