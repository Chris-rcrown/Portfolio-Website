import React from 'react';
import { motion } from 'framer-motion';

const LogoComponent = ({ size = 'normal', className = '' }: { size?: 'small' | 'normal' | 'large', className?: string }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    normal: 'w-10 h-10',
    large: 'w-16 h-16'
  };

  const textSizes = {
    small: 'text-lg',
    normal: 'text-2xl',
    large: 'text-4xl'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        {/* Majestic Animated Crown Logo */}
        <motion.div 
          className={`${sizeClasses[size]} relative`}
          whileHover={{ 
            rotate: [0, -8, 8, 0],
            scale: [1, 1.15, 1],
            y: [0, -3, 0]
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Crown shadow/base glow */}
          <motion.div 
            className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent rounded-full blur-sm"
            animate={{ 
              opacity: [0.3, 0.8, 0.3],
              scaleX: [0.8, 1.2, 0.8]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Crown base with royal gradient and 3D effect */}
          <motion.div 
            className="absolute bottom-0 w-full h-3 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 rounded-sm shadow-2xl border-t border-yellow-200"
            style={{
              background: 'linear-gradient(145deg, #fbbf24, #f59e0b, #d97706)',
              boxShadow: '0 4px 15px rgba(251, 191, 36, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
            }}
            animate={{ 
              boxShadow: [
                "0 4px 15px rgba(251, 191, 36, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                "0 6px 25px rgba(251, 191, 36, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
                "0 4px 15px rgba(251, 191, 36, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)"
              ]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          
          {/* Crown peaks with enhanced 3D effect and gradients */}
          <motion.div 
            className="absolute bottom-2 left-0 w-0 h-0"
            style={{
              borderLeft: '3px solid transparent',
              borderRight: '3px solid transparent',
              borderBottom: '6px solid #f59e0b',
              filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))'
            }}
            animate={{ 
              borderBottomColor: ['#f59e0b', '#fbbf24', '#f59e0b']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          <motion.div 
            className="absolute bottom-2 left-1/4 w-0 h-0"
            style={{
              borderLeft: '4px solid transparent',
              borderRight: '4px solid transparent',
              borderBottom: '8px solid #fbbf24',
              filter: 'drop-shadow(1px 1px 3px rgba(0,0,0,0.3))'
            }}
            animate={{ 
              borderBottomColor: ['#fbbf24', '#f59e0b', '#fbbf24']
            }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
          
          {/* Center peak - the tallest and most majestic */}
          <motion.div 
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderBottom: '12px solid #fbbf24',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.4))'
            }}
            animate={{ 
              borderBottomColor: ['#fbbf24', '#f59e0b', '#fbbf24'],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          
          <motion.div 
            className="absolute bottom-2 right-1/4 w-0 h-0"
            style={{
              borderLeft: '4px solid transparent',
              borderRight: '4px solid transparent',
              borderBottom: '8px solid #fbbf24',
              filter: 'drop-shadow(1px 1px 3px rgba(0,0,0,0.3))'
            }}
            animate={{ 
              borderBottomColor: ['#fbbf24', '#f59e0b', '#fbbf24']
            }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 0.5 }}
          />
          
          <motion.div 
            className="absolute bottom-2 right-0 w-0 h-0"
            style={{
              borderLeft: '3px solid transparent',
              borderRight: '3px solid transparent',
              borderBottom: '6px solid #f59e0b',
              filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))'
            }}
            animate={{ 
              borderBottomColor: ['#f59e0b', '#fbbf24', '#f59e0b']
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          
          {/* Royal Crown Jewels with enhanced animations */}
          {/* Center Diamond - The Crown Jewel */}
          <motion.div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 rounded-full shadow-xl"
            style={{
              background: 'radial-gradient(circle, #dbeafe, #3b82f6, #1e40af)',
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
            }}
            animate={{ 
              scale: [1, 1.4, 1],
              boxShadow: [
                "0 0 10px rgba(59, 130, 246, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
                "0 0 25px rgba(59, 130, 246, 0.9), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
                "0 0 10px rgba(59, 130, 246, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.5)"
              ],
              rotate: [0, 360]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Left Ruby */}
          <motion.div 
            className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full shadow-lg"
            style={{
              background: 'radial-gradient(circle, #fecaca, #dc2626, #991b1b)',
              boxShadow: '0 0 8px rgba(220, 38, 38, 0.5)'
            }}
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
              boxShadow: [
                "0 0 8px rgba(220, 38, 38, 0.5)",
                "0 0 15px rgba(220, 38, 38, 0.8)",
                "0 0 8px rgba(220, 38, 38, 0.5)"
              ]
            }}
            transition={{ duration: 2.8, repeat: Infinity, delay: 0.5 }}
          />
          
          {/* Right Emerald */}
          <motion.div 
            className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full shadow-lg"
            style={{
              background: 'radial-gradient(circle, #bbf7d0, #16a34a, #15803d)',
              boxShadow: '0 0 8px rgba(22, 163, 74, 0.5)'
            }}
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0],
              boxShadow: [
                "0 0 8px rgba(22, 163, 74, 0.5)",
                "0 0 15px rgba(22, 163, 74, 0.8)",
                "0 0 8px rgba(22, 163, 74, 0.5)"
              ]
            }}
            transition={{ duration: 3.2, repeat: Infinity, delay: 1 }}
          />
          
          {/* Left Amethyst */}
          <motion.div 
            className="absolute top-2 left-1/3 w-1 h-1 rounded-full shadow-md"
            style={{
              background: 'radial-gradient(circle, #e9d5ff, #9333ea, #7c3aed)',
              boxShadow: '0 0 6px rgba(147, 51, 234, 0.5)'
            }}
            animate={{ 
              opacity: [0.7, 1, 0.7],
              scale: [0.8, 1.4, 0.8],
              y: [0, -2, 0]
            }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }}
          />
          
          {/* Right Topaz */}
          <motion.div 
            className="absolute top-2 right-1/3 w-1 h-1 rounded-full shadow-md"
            style={{
              background: 'radial-gradient(circle, #fed7aa, #ea580c, #c2410c)',
              boxShadow: '0 0 6px rgba(234, 88, 12, 0.5)'
            }}
            animate={{ 
              opacity: [0.7, 1, 0.7],
              scale: [0.8, 1.4, 0.8],
              y: [0, -2, 0]
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
          />
          
          {/* Magical Sparkle Effects */}
          {[...Array(6)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute w-1 h-1"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 2 + Math.random() * 2, 
                repeat: Infinity, 
                delay: Math.random() * 3 
              }}
            >
              <div 
                className="w-full h-full rounded-full"
                style={{
                  background: 'radial-gradient(circle, #ffffff, #f0f9ff)',
                  boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)'
                }}
              />
            </motion.div>
          ))}
          
          {/* Crown Aura Effect */}
          <motion.div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, transparent 60%, rgba(251, 191, 36, 0.1) 100%)',
            }}
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </div>
      
      <div className={textSizes[size]}>
        <motion.span 
          className="font-black tracking-wider bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"
          style={{
            textShadow: '0 0 10px rgba(59, 130, 246, 0.3)',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
          whileHover={{ 
            scale: 1.05,
            textShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
          }}
          transition={{ duration: 0.3 }}
        >
          R
        </motion.span>
        <motion.span 
          className="font-black tracking-wider bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent ml-1"
          style={{
            textShadow: '0 0 10px rgba(251, 191, 36, 0.3)',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
          whileHover={{ 
            scale: 1.05,
            textShadow: '0 0 20px rgba(251, 191, 36, 0.5)'
          }}
          transition={{ duration: 0.3 }}
        >
          Crown
        </motion.span>
      </div>
    </div>
  );
};

export default LogoComponent;