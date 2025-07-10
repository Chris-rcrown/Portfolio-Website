import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Instagram } from 'lucide-react';
import LogoComponent from './LogoComponent';
import toast from 'react-hot-toast';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // toast.success(`Navigating to ${id.charAt(0).toUpperCase() + id.slice(1)} section`);
    }
    setIsMenuOpen(false);
  };

  const handleSocialClick = (platform: string, url: string) => {
    // toast.success(`Opening ${platform} profile!`);
    window.open(url, '_blank');
  };

  const menuItems = ['about', 'skills', 'projects', 'contact'];

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/20 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-2xl font-bold text-white cursor-pointer"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LogoComponent />
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 capitalize font-medium relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {[
              { icon: Github, url: 'https://github.com', name: 'GitHub' },
              { icon: Linkedin, url: 'https://linkedin.com', name: 'LinkedIn' },
              { icon: Instagram, url: 'https://instagram.com', name: 'Instagram' }
            ].map((social, index) => (
              <motion.button
                key={social.name}
                onClick={() => handleSocialClick(social.name, social.url)}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.6, duration: 0.3 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={20} />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              className="md:hidden mt-4 pb-4 border-t border-gray-600 overflow-hidden"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col space-y-3 pt-4">
                {menuItems.map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-left text-gray-300 hover:text-blue-400 transition-colors duration-200 capitalize font-medium py-2"
                    variants={itemVariants}
                    whileHover={{ x: 10, color: '#60a5fa' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.button>
                ))}
                <motion.div 
                  className="flex items-center space-x-4 pt-4"
                  variants={itemVariants}
                >
                  {[
                    { icon: Github, url: 'https://github.com', name: 'GitHub' },
                    { icon: Linkedin, url: 'https://linkedin.com', name: 'LinkedIn' },
                    { icon: Instagram, url: 'https://instagram.com', name: 'Instagram' }
                  ].map((social) => (
                    <motion.button
                      key={social.name}
                      onClick={() => handleSocialClick(social.name, social.url)}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon size={20} />
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;