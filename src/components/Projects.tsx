import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import toast from 'react-hot-toast';

const Projects: React.FC = () => {
  const projects = [
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
    }
 
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const handleLiveDemo = (liveUrl: string, title: string) => {
    if (liveUrl && liveUrl !== '#') {
      window.open(liveUrl, '_blank', 'noopener,noreferrer');
      toast.success(`Opening ${title} live demo!`);
    } else {
      toast.error('Live demo not available.');
    }
  };

  const handleViewCode = (githubUrl: string, title: string) => {
    if (githubUrl && githubUrl.trim() !== '#' && githubUrl.trim() !== '') {
      window.open(githubUrl.trim(), '_blank', 'noopener,noreferrer');
      toast.success(`Opening ${title} source code!`);
    } else {
      toast.error('Source code not available.');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-transparent relative">
      {/* Section background overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16 relative z-10">
          <motion.h3 
            className="text-2xl font-semibold text-white mb-8 flex items-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Star className="text-yellow-500 mr-2" size={24} />
            Featured Projects
          </motion.h3>
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="glass-morphism rounded-lg shadow-lg overflow-hidden shimmer"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <motion.div 
                    className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Featured
                  </motion.div>
                </motion.div>
                
                <div className="p-6">
                  <motion.h4 
                    className="text-xl font-semibold text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </motion.h4>
                  <motion.p 
                    className="text-gray-300 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + techIndex * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.1 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                  
                  <motion.div 
                    className="flex space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.button
                      onClick={() => handleLiveDemo(project.liveUrl, project.title)}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.button>
                    <motion.button
                      onClick={() => handleViewCode(project.githubUrl, project.title)}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Other Projects */}
        <div className="relative z-10">
          <motion.h3 
            className="text-2xl font-semibold text-white mb-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Other Projects
          </motion.h3>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="glass-morphism rounded-lg shadow-lg overflow-hidden shimmer"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover"
                  />
                </motion.div>
                
                <div className="p-4">
                  <motion.h4 
                    className="text-lg font-semibold text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </motion.h4>
                  <motion.p 
                    className="text-gray-300 text-sm mb-3 line-clamp-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-1 mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + techIndex * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.1 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 3 && (
                      <motion.span 
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.3 }}
                        whileHover={{ scale: 1.1 }}
                        viewport={{ once: true }}
                      >
                        +{project.technologies.length - 3}
                      </motion.span>
                    )}
                  </motion.div>
                  
                  <motion.div 
                    className="flex space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.button
                      onClick={() => handleLiveDemo(project.liveUrl, project.title)}
                      className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm"
                      whileHover={{ scale: 1.05, x: 3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={14} />
                      <span>Live</span>
                    </motion.button>
                    <motion.button
                      onClick={() => handleViewCode(project.githubUrl, project.title)}
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      whileHover={{ scale: 1.05, x: 3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;