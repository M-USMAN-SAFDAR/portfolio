export const FRONTEND_SKILLS = [
  { name: 'JavaScript', category: 'Frontend', color: '#FFFFFF', slug: 'js' },
  { name: 'React', category: 'Frontend', color: '#FFFFFF', slug: 'react' },
  { name: 'Flutter', category: 'Frontend', color: '#FFFFFF', slug: 'flutter' },
  { name: 'Tailwind CSS', category: 'Frontend', color: '#FFFFFF', slug: 'tailwind' },
  { name: 'HTML5', category: 'Frontend', color: '#FFFFFF', slug: 'html' },
  { name: 'CSS3', category: 'Frontend', color: '#FFFFFF', slug: 'css' },
  { name: 'Vite', category: 'Frontend', color: '#FFFFFF', slug: 'vite' },
]

export const BACKEND_SKILLS = [
  { name: 'Node.js', category: 'Backend & Database', color: '#FFFFFF', slug: 'nodejs' },
  { name: 'Express', category: 'Backend & Database', color: '#FFFFFF', slug: 'express' },
  { name: 'MongoDB', category: 'Backend & Database', color: '#FFFFFF', slug: 'mongodb' },
  { name: 'PostgreSQL', category: 'Backend & Database', color: '#FFFFFF', slug: 'postgres' },
  { name: 'FastAPI', category: 'Backend & Database', color: '#FFFFFF', slug: 'fastapi' },
  { name: 'Python', category: 'Backend & Database', color: '#FFFFFF', slug: 'py' },
  { name: 'Firebase', category: 'Backend & Database', color: '#FFFFFF', slug: 'firebase' },
  { name: 'SQL', category: 'Backend & Database', color: '#FFFFFF', slug: 'mysql' },
  { name: 'REST APIs', category: 'Backend & Database', color: '#FFFFFF', slug: 'postman' },
  { name: 'Mongoose', category: 'Backend & Database', color: '#FFFFFF', slug: 'mongodb' },
]

export const TOOLING_SKILLS = [
  { name: 'Git', category: 'Tools', color: '#FFFFFF', slug: 'git' },
  { name: 'GitHub', category: 'Tools', color: '#FFFFFF', slug: 'github' },
  { name: 'Android Studio', category: 'Tools', color: '#FFFFFF', slug: 'androidstudio' },
  { name: 'Postman', category: 'Tools', color: '#FFFFFF', slug: 'postman' },
  { name: 'Figma', category: 'Tools', color: '#FFFFFF', slug: 'figma' },
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
  education: [],
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
  skills: [...FRONTEND_SKILLS, ...BACKEND_SKILLS, ...TOOLING_SKILLS],
  skillCategories: [
    { title: 'Frontend', skills: FRONTEND_SKILLS },
    { title: 'Backend & Database', skills: BACKEND_SKILLS },
    { title: 'Tools', skills: TOOLING_SKILLS },
  ],
  experience: [],
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
