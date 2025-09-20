
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 my-8">
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      <p className="text-slate-600 font-semibold">Crafting your perfect weekend...</p>
    </div>
  );
};

export default LoadingSpinner;
