export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'CaptainTrack Booking Services',
    description: 'Responsive landing page for a Multi-Service booking platform. Dynamic content-loading for real-time updates',
    image: '/captaintrack.png',
    technologies: ['React', 'Javascript', 'Tailwindcss', 'Typescript'],
    liveUrl: 'https://captainTrack.ng',
    githubUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Menu Management App (MENUSWIFT)',
    description: 'Collaborative Full-stack Customized Digital Menu Boards for Restaurants,Generate a scannable QR code for your customers to browse the menu, order and enjoy - while you update everything in real time..',
    image: '/Menuswift.png',
    technologies: ['React', 'TypeScript', 'Micro-Services', 'Nginx', 'Postgress', 'S3 Bucket'],
    liveUrl: 'https://visit.menu/',
    githubUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Travel Ease',
    description: 'A flight booking web app that is used for tourism purposes. It contains hotels and resturant booking and has the flight search capabilities ',
    image: '/travelease.png',
    technologies: ['React', 'TypeScript', 'Amadeus API','Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://booking-platformbtml.vercel.app/',
    githubUrl: 'https://github.com/Chris-rcrown/booking-platform.git',
    featured: true
  },
  {
    id: 4,
    title: 'UK Summer Youth Program (In progress)',
    description: 'MERN-stack application for managing a summer youth program in the UK. Features include authentication, data visualization, event scheduling, participant registration, and real-time updates.',
    image: 'uk-youth.png',
    technologies: ['React', 'TypeScript', 'RESTful API', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://ukyouth-summer-jobs.vercel.app',
    githubUrl: 'https://github.com/Chris-rcrown/UKyouth-summer-jobs.git',
    featured: false
  },
  {
    id: 5,
    title: 'Event Ticket Generator',
    description: 'A web application for generating event tickets with customizable designs and QR codes. Users can create, manage, and download tickets for events.',
    image: '/Event ticket generator.png',
    technologies: ['React', 'Cloudinary','Javascript', 'IndexDB'],
    liveUrl: 'https://conference-form-generator.vercel.app/',
    githubUrl: 'https://github.com/Chris-rcrown/conference-form-generator.git',
    featured: false
  },
  {
    id: 6,
    title: 'Recipe Discovery',
    description: 'Recipe discovery application with ingredient-based search, meal planning, and nutritional information.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Redux', 'Styled Components'],
    liveUrl: 'https://recipe-rcrown.netlify.app/',
    githubUrl: 'https://github.com/Chris-rcrown/recipe-design.git',
    featured: false
  },
  {
    id: 7,
    title: 'SunnySide Website',
    description: 'A responsive landing page for a digital marketing agency, showcasing services, testimonials, and contact information.',
    image: 'sunnyside.png',
    technologies: ['React', 'Javascript', 'Tailwind CSS'],
    liveUrl: 'https://sunnyside-htmlcss-rcrown.netlify.app/',
    githubUrl: 'https://github.com/Chris-rcrown/sunnyside-agency-landing-page-main.git',
    featured: false
  },
  {
    id: 8,
    title: 'AI Solid',
    description: 'A Chrome extension that enhances productivity by providing AI-powered suggestions and tools directly in the browser.',
    image: '/ai-solid.png',
    technologies: ['React', 'Javascript', 'Chrome API', 'Tailwind CSS'],
    liveUrl: 'https://aisolid-rcrown.vercel.app/',
    githubUrl: '  https://github.com/Chris-rcrown/aisolid.git',
    featured: false
  },
  {
    id: 9,
    title: 'Dessert Shop',
    description: 'A dessert shop website featuring a product list with cart functionality, allowing users to browse and purchase desserts online.',
    image: '/dessert.png',
    technologies: ['React','Javascript', 'Tailwind CSS'],
    liveUrl: 'https://dessert-menu-page.netlify.app/',
    githubUrl: 'https://github.com/Chris-rcrown/product-list-with-cart-main.git',
    featured: false
  },
  {
    id:10,
    title: 'TEHC Personal Banking App',
    description: 'A personal banking app that allows users to manage their finances, view transaction history, and perform basic banking operations.',
    image: '/tehc.jpeg',
    technologies: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'AzureDevOps', 'Zustand', 'RESTful API'],
    liveUrl: 'https://persbankingapp-dev-awarc2cwdth8esds.westeurope-01.azurewebsites.net/',
    githubUrl: ' ',
    featured: true
  },
  {
    id:11,
    title: 'Inkbric',
    description: 'Full-Stack Architecture: Architected and built "Inkbric," a comprehensive STEM education platform using React 18, Node.js, and PostgreSQL, facilitating seamless interaction between students, parents, and educators. With advanced State Management implemented, it is highly scalable frontend state management using Zustand to handle complex user flows, including a multi-step e-commerce checkout and persistent shopping cart functionality. It has a secure API Design engineered. a robust RESTful API with Express.js featuring strict Role-Based Access Control (RBAC) and JWT authentication to secure sensitive data across four distinct user roles (Student, Parent, Teacher, Admin)',
    image: '/inkbrick.png',
    technologies: ['React','TypeScript', 'Node.js', 'Express', 'Render', 'PostgreSQL', 'Cloudinary', 'Tailwind CSS', 'Swagger/OpenAPI'],
    liveUrl: 'https://inkbric-full-custom.vercel.app/',
    githubUrl: '',
    featured: true
  }
];
