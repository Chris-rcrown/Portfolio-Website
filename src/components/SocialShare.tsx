import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Instagram, Linkedin, Twitter, Copy, Check, MessageCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const SocialShare = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = window.location.href;
  const shareText = "Check out my portfolio website! 🚀";

  const shareLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/oluwarotimi-adegborioye-17723b156',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={20} />,
      url: 'https://x.com/iamrotimi_crown?s=21',
      color: 'bg-blue-400 hover:bg-blue-500'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={20} />,
      url: 'https://www.instagram.com/am_rotimi_crown?igsh=MWdsenhudXlqc2t2ZA%3D%3D&utm_source=qr',
      color: 'bg-pink-600 hover:bg-pink-700'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle size={20} />,
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
      color: 'bg-green-600 hover:bg-green-700'
    }
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success('Link copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy link');
    }
  };

  const handleShare = (url: string, name: string) => {
    if (name === 'Instagram') {
      toast.success('Opening Instagram! You can share manually.');
      window.open('https://www.instagram.com/am_rotimi_crown?igsh=MWdsenhudXlqc2t2ZA%3D%3D&utm_source=qr', '_blank');
    } else {
      toast.success(`Sharing on ${name}!`);
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Share Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mb-4 space-y-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {shareLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => handleShare(link.url, link.name)}
                className={`w-12 h-12 rounded-full text-white flex items-center justify-center shadow-lg transition-all duration-200 ${link.color}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 10,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
                title={`Share on ${link.name}`}
              >
                {link.icon}
              </motion.button>
            ))}
            
            <motion.button
              onClick={handleCopyLink}
              className="w-12 h-12 rounded-full bg-gray-600 hover:bg-gray-700 text-white flex items-center justify-center shadow-lg transition-all duration-200"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.2, 
                rotate: -10,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              title="Copy link"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: -180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Copy size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Share Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) {
            toast.success('Share options opened!');
          }
        }}
        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)"
        }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          rotate: isOpen ? 45 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <Share2 size={24} />
      </motion.button>
    </div>
  );
};

export default SocialShare;