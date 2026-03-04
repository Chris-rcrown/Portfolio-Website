import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Coffee } from 'lucide-react';
import { downloadResume } from '../utils/resumeDownload';

const About: React.FC = () => {
  const handleDownloadResume = () => {
    downloadResume();
  };
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-transparent relative">
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover my journey from frontend enthusiast to aspiring full-stack developer
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="prose prose-lg text-gray-300">
              <motion.p 
                className="mb-6"
                variants={itemVariants}
              >
                I’m a proactive and creative software developer specializing in frontend engineering, with a passion for transforming pixel-perfect designs into high-performance, accessible web applications. Over the past three years, I’ve mastered React.js, ES6+, Tailwind CSS, and HTML5 to build responsive interfaces that load up to 25% faster and consistently score above 95 on Lighthouse audits.
              </motion.p>
              
              <motion.p 
                className="mb-6"
                variants={itemVariants}
              >
                My journey has grown into full-stack development: I architect RESTful APIs with Node.js, Express.js, and MongoDB, implement JWT-based authentication, and optimize database integrations to deliver seamless end-to-end solutions. I pair clean-code principles with performance tuning to solve real-world problems and ensure scalable, maintainable architectures.
              </motion.p>

              <motion.p variants={itemVariants}>
              Outside of coding, I teach JavaScript, contribute to open-source projects, and lead hands-on workshops. I enjoy sharing what I’ve learned, mentoring teammates, and collaborating with designers and developers to build tools people love.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              {[
                { icon: MapPin, text: "Lagos, NG", color: "text-blue-600" },
                { icon: Calendar, text: "3+ Years Experience", color: "text-blue-600" },
                { icon: Coffee, text: "Code Enthusiast", color: "text-blue-600" }
              ].map((item) => (
                <motion.div 
                  key={item.text}
                  className="flex items-center space-x-2 text-gray-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon size={20} className={item.color} />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.button 
              onClick={handleDownloadResume}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg shimmer"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Download size={20} />
              <span>Download Resume</span>
            </motion.button>
          </motion.div>

            <motion.div 
              className="relative w-full"
              variants={imageVariants}
            >
              <motion.div 
              className="relative z-10 h-[70vh]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              >
              <img
              src="/Headshot.jpeg"
              alt="Working on laptop"
              className="rounded-lg shadow-2xl w-full h-full object-cover"
              />
              </motion.div>
            <motion.div 
              className="absolute top-4 left-4 w-full h-full bg-blue-500/20 rounded-lg -z-10"
              animate={{
                x: [0, 10, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 glass-morphism p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold text-blue-600">20+</div>
              <div className="text-sm text-gray-300">Projects</div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 glass-morphism p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold text-purple-600">{Date.now() - 2022} +</div>
              <div className="text-sm text-gray-300">Years</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;