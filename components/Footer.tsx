
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-400 mt-16">
      <div className="container mx-auto px-4 py-6 text-center">
        <p>
          Powered by AI. Built for your next adventure.
        </p>
        <p className="text-sm mt-1">
          &copy; {new Date().getFullYear()} Denver Getaway Planner. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
