import {
  Braces,
  Database,
  Film,
  Globe2,
  Heart,
  Link2,
  Palette,
  Server,
  Terminal,
} from 'lucide-react'

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const skillGroups = [
  {
    title: 'Frontend',
    description: 'Creating responsive, user-friendly web interfaces.',
    icon: Palette,
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript ES6+',
      'React.js',
      'Vite',
      'React Router',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend',
    description: 'Building server-side applications and API integrations.',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Database',
    description: 'Working with document databases and data models.',
    icon: Database,
    skills: ['MongoDB (basic)', 'Mongoose'],
  },
  {
    title: 'Programming',
    description: 'Programming fundamentals and problem solving.',
    icon: Terminal,
    skills: ['Python'],
  },
  {
    title: 'Tools',
    description: 'Development, testing, and deployment tools.',
    icon: Braces,
    skills: [
      'Git',
      'GitHub',
      'GitHub Copilot',
      'AI-Assisted Development',
      'npm',
      'Postman',
      'MongoDB Compass',
      'Vercel',
      'Render',
    ],
  },
]

export const education = [
  {
    qualification: 'Master of Computer Applications',
    abbreviation: 'MCA',
    institution: 'Uttaranchal University',
    period: '2026–2028',
    status: 'Currently pursuing',
  },
  {
    qualification: 'Bachelor of Computer Applications',
    abbreviation: 'BCA',
    institution: 'Forte Institute of Technology, affiliated with CCSU',
    period: '2023–2026',
    result: 'CGPA: 6.4/10',
  },
]

export const internship = {
  position: 'Frontend Development Trainee',
  organization: 'Skillians Academy / Ai Brix',
  period: 'April 2026 – August 2026',
  project: 'Job Portal Web Application',
  description:
    'Worked on a responsive job portal interface using React and Tailwind CSS. Practiced reusable component development, navigation, job listing interfaces, search and filtering, form handling, and REST API integration.',
  technologies: [
    'React.js',
    'Tailwind CSS',
    'React Router',
    'React Toastify',
    'REST APIs',
  ],
}

export const projects = [
  {
    number: '01',
    name: 'Vaikunth – Divine Journey',
    category: 'FEATURED FULL-STACK PROJECT',
    image: '/images/vaikunth.png',
    description:
      'A devotional web application dedicated to Lord Vishnu, with information about Dashavatar, temples, and selected stories from Vishnu Puran.',
    icon: Heart,
    accent: 'text-amber-300',
    visual:
      'from-amber-300/15 via-orange-400/5 to-transparent border-amber-200/10',
    featured: true,
    tags: [
      'React.js',
      'Vite',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'REST APIs',
    ],
    features: [
      'Dashavatar information and details',
      'Temple information and dedicated detail pages',
      'Selected Vishnu Puran stories',
      'User signup and login',
      'User profile management',
      'Favorites functionality',
    ],
    deployments: ['Frontend: Vercel', 'Backend: Render'],
    demoUrl: 'https://vaikunth-devine-journey.vercel.app/',
  },
  {
    number: '02',
    name: 'Country Explorer',
    category: 'REACT APPLICATION',
    image: '/images/countryexplorer.png',
    description:
      'A React application for exploring country information using data from a REST API.',
    icon: Globe2,
    accent: 'text-cyan-300',
    visual:
      'from-cyan-300/15 via-blue-400/5 to-transparent border-cyan-200/10',
    tags: ['React.js', 'Vite', 'Tailwind CSS', 'REST API'],
    features: [
      'Country search',
      'Region-based filtering',
      'Reusable React components',
      'Pagination and sorting',
      'Dynamic country data',
    ],
    deployments: ['Vercel'],
    sourcePlaceholder: true,
    demoUrl:'https://country-explorer-zeta-five.vercel.app/',
  },
  {
    number: '03',
    name: 'URL Shortener',
    category: 'BACKEND PRACTICE',
    image: '/images/urlshortner.png',
    description:
      'A URL-shortening application that creates shorter links through a backend API and stores URL information in a database.',
    icon: Link2,
    accent: 'text-violet-300',
    visual:
      'from-violet-300/15 via-fuchsia-400/5 to-transparent border-violet-200/10',
    tags: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'REST API endpoints',
      'URL data persistence',
      'Backend development',
      'Database integration',
    ],
    deployments: ['Frontend: Vercel (if applicable)', 'Backend: Render'],
    demoUrl:'https://url-shortner-six-wine.vercel.app/',
  },
  
  {
    number: '04',
    name: 'Movie App',
    category: 'JAVASCRIPT LEARNING PROJECT',
    image: '/images/movie.png',
    description:
      'A JavaScript-based movie application built to practice DOM manipulation and dynamic UI updates.',
    icon: Film,
    accent: 'text-rose-300',
    visual:
      'from-rose-300/15 via-pink-400/5 to-transparent border-rose-200/10',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Dynamic movie cards',
      'Search and filtering',
      'Sorting',
      'Carousel interface',
    ],
    demoUrl:'https://movie-app-pi-roan.vercel.app/'
  },
]

export const contact = {
  email: 'anshulgothwal123@gmail.com',
  github: 'https://github.com/AnshulGothwal',
  linkedin: 'https://www.linkedin.com/in/anshul-gothwal-49609a269/',
}
