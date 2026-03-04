import React from 'react';

// simplified, professional background
const CinematicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* subtle dark overlay */}
      <div className="absolute inset-0 bg-black/20" />
 </div>
 );
};

export default CinematicBackground;
