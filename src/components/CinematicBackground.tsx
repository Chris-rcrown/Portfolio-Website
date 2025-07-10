import React, { useEffect, useState } from 'react';

const CinematicBackground: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; delay: number; left: number }>>([]);

  useEffect(() => {
    // Generate particles
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      delay: Math.random() * 15,
      left: Math.random() * 100,
    }));
    setParticles(particleArray);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradientShift"></div>
      
      {/* Large floating elements */}
      <div className="absolute w-96 h-96 bg-blue-500/10 top-1/4 left-1/4 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute w-80 h-80 bg-purple-500/10 top-1/3 right-1/4 rounded-full filter blur-3xl animate-floatReverse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute w-72 h-72 bg-indigo-500/10 bottom-1/4 left-1/3 rounded-full filter blur-3xl animate-drift"></div>
      <div className="absolute w-64 h-64 bg-violet-500/10 bottom-1/3 right-1/3 rounded-full filter blur-3xl animate-driftSlow" style={{ animationDelay: '4s' }}></div>
      
      {/* Morphing blobs */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-400/5 to-purple-600/5 top-0 left-0 filter blur-2xl animate-morphing"></div>
      <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-purple-400/5 to-pink-600/5 bottom-0 right-0 filter blur-2xl animate-morphing" style={{ animationDelay: '5s' }}></div>
      <div className="absolute w-[350px] h-[350px] bg-gradient-to-r from-indigo-400/5 to-blue-600/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 filter blur-2xl animate-morphing" style={{ animationDelay: '8s' }}></div>
      
      {/* Rotating geometric shapes */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-blue-300/20 animate-rotate"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-purple-300/20 animate-rotate" style={{ animationDelay: '3s', animationDirection: 'reverse' }}></div>
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-particleFloat"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
          }}
        ></div>
      ))}
      
      {/* Pulsing orbs */}
      <div className="absolute top-1/3 left-1/5 w-16 h-16 bg-blue-400/20 rounded-full filter blur-sm animate-pulse-custom"></div>
      <div className="absolute bottom-1/3 right-1/5 w-12 h-12 bg-purple-400/20 rounded-full filter blur-sm animate-pulse-custom" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-2/3 left-2/3 w-20 h-20 bg-indigo-400/20 rounded-full filter blur-sm animate-pulse-custom" style={{ animationDelay: '4s' }}></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-12 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-white/10"></div>
          ))}
        </div>
      </div>
      
      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20"></div>
      
      {/* Additional atmospheric effects */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>
  );
};

export default CinematicBackground;