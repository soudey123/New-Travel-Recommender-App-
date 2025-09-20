
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1600/600?random=1&grayscale&blur=2')" }}>
      <div className="absolute inset-0 bg-slate-900 bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white p-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Your Perfect Denver Weekend</h2>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Tell us what you love, and our AI will craft a unique itinerary just for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
