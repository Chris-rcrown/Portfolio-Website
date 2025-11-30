import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Palette, Server, Download } from 'lucide-react';
import { downloadResume } from '../utils/resumeDownload';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = React.useMemo(() => [
    'Frontend Developer',
    'Full Stack Developer',
    'MERN Stack Developer',
    'Problem Solver'
  ], []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 500);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
     // toast.success(`Navigating to ${id.charAt(0).toUpperCase() + id.slice(1)} section`);
    }
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-transparent">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-screen filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-screen filter blur-xl opacity-30"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-400 rounded-full mix-blend-screen filter blur-xl opacity-30"
          animate={{
            x: [-50, 50, -50],
            y: [-30, 30, -30],
          }}
          transition={{
            duration: 12,
            repeat: Infinity
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-6 md:mb-8" variants={itemVariants}>
            <motion.div 
              className="inline-block p-6 glass-morphism rounded-full shadow-lg mb-3 shimmer"
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src="/post2.jpg"
                alt="Profile"
                className="w-35 h-40  rounded-full object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
            variants={itemVariants}
          >
            Hi, I'm <span className="gradient-text">Oluwarotimi</span>
          </motion.h1>
          
          <motion.div 
            className="text-2xl md:text-3xl text-gray-200 mb-8 h-12"
            variants={itemVariants}
          >
            I'm a <span className="text-blue-400 font-semibold">{currentText}</span>
            <motion.span 
              className="text-blue-400"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Passionate about creating beautiful, functional web experiences. 
            Currently transitioning from frontend to full-stack development with expertise in modern technologies.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg shimmer"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 glass-morphism border-2 border-blue-400 text-blue-400 rounded-lg font-medium"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                backgroundColor: "rgba(59, 130, 246, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Get In Touch
            </motion.button>
            <motion.button
              onClick={handleDownloadResume}
              className="px-8 py-3 glass-morphism border-2 border-green-400 text-green-400 rounded-lg font-medium flex items-center space-x-2"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                backgroundColor: "rgba(34, 197, 94, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Download size={20} />
              <span>Resume</span>
            </motion.button>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-8 mb-12"
            variants={itemVariants}
          >
            {[
              { icon: Code, text: "Clean Code", color: "text-blue-600" },
              { icon: Palette, text: "Modern Design", color: "text-purple-600" },
              { icon: Server, text: "Full Stack", color: "text-green-600" }
            ].map((item, index) => (
              <motion.div 
                key={item.text}
                className="flex items-center space-x-2 text-gray-300"
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: `${index * 0.5}s` }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <item.icon className={item.color} size={24} />
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            onClick={() => scrollToSection('about')}
            className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
            whileHover={{ scale: 1.2 }}
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;