
import React from 'react';
import { Interest } from '../types';

interface InterestSelectorProps {
  selectedInterests: Interest[];
  onInterestChange: (interest: Interest) => void;
}

const interests: { id: Interest; icon: JSX.Element }[] = [
  { id: Interest.Hiking, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /> },
  { id: Interest.Breweries, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
  { id: Interest.ArtAndCulture, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l-4 4-4-4 4-4" /> },
  { id: Interest.Foodie, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4z" /> },
  { id: Interest.FamilyFun, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a9 9 0 00-9-9" /> },
  { id: Interest.Nightlife, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
  { id: Interest.Shopping, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /> },
  { id: Interest.LiveMusic, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /> },
];

const InterestSelector: React.FC<InterestSelectorProps> = ({ selectedInterests, onInterestChange }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-center text-slate-700">What are you in the mood for?</h3>
      <p className="text-center text-slate-500 mt-2 mb-6">Select one or more interests to customize your trip.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {interests.map((interest) => {
          const isSelected = selectedInterests.includes(interest.id);
          return (
            <button
              key={interest.id}
              onClick={() => onInterestChange(interest.id)}
              className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                isSelected
                  ? 'border-blue-500 bg-blue-50 text-blue-600 scale-105 shadow-md'
                  : 'border-slate-300 bg-white hover:border-blue-400 hover:bg-slate-50'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">{interest.icon}</svg>
              <span className="text-sm font-semibold text-center">{interest.id}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default InterestSelector;
