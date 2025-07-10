import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      toast.error('Please fill in all fields.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }
    return true;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    // Simulate form submission with toast notifications
    toast.promise(
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Your EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Your EmailJS template ID
        formRef.current, // The form element reference
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        } // Your EmailJS public key
      ),
      // new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     if (Math.random() > 0.1) { // 90% success rate
      //       resolve('success');
      //     } else {
      //       reject('error');
      //     }
      //   }, 2000);
      // }),
      {
        loading: 'Sending your message...',
        success: 'Message sent successfully! I\'ll get back to you soon.',
        error: 'Failed to send message. Please try again.',
      }
    ).then(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com',
      color: 'text-gray-700 hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com',
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={20} />,
      url: 'https://instagram.com',
      color: 'text-pink-600 hover:text-pink-700'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={20} />,
      url: 'https://twitter.com',
      color: 'text-blue-400 hover:text-blue-500'
    }
  ];

  const handleSocialClick = (name: string, url: string) => {
    toast.success(`Opening ${name} profile!`);
    window.open(url, '_blank');
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-transparent relative">
      {/* Section background overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Let's discuss your next project or just say hello
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a chat about technology and development.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, text: "rotimiworkmail1@gmail.com", label: "Email", color: "bg-blue-100", iconColor: "text-blue-600" },
                { icon: Phone, text: "+234 8135920353", label: "Phone", color: "bg-green-100", iconColor: "text-green-600" },
                { icon: MapPin, text: "Lagos, NG", label: "Location", color: "bg-purple-100", iconColor: "text-purple-600" }
              ].map((item, index) => (
                <motion.div 
                  key={item.label}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon className={item.iconColor} size={20} />
                  </motion.div>
                  <div>
                    <p className="text-white font-medium">{item.label}</p>
                    <p className="text-gray-300">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={social.name}
                    onClick={() => handleSocialClick(social.name, social.url)}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${social.color}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    viewport={{ once: true }}
                  >
                    {social.icon}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="glass-morphism rounded-lg shadow-lg p-8 shimmer"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div 
                className="grid md:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-white placeholder-gray-400"
                    placeholder="Your name"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-white placeholder-gray-400"
                    placeholder="your@email.com"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-white placeholder-gray-400"
                  placeholder="Project inquiry"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none text-white placeholder-gray-400"
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shimmer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -2,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                ref={formRef}
              >
                {isSubmitting ? (
                  <>
                    <motion.div 
                      className="w-5 h-5 border-b-2 border-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

