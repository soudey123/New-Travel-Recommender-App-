
import React from 'react';
import { Itinerary, Activity } from '../types';

interface ItineraryDisplayProps {
  itinerary: Itinerary;
}

const TimeOfDayIcon: React.FC<{ timeOfDay: Activity['timeOfDay'] }> = ({ timeOfDay }) => {
  const iconMap = {
    Morning: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />,
    Afternoon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />,
    Evening: <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />,
  };
  return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>{iconMap[timeOfDay]}</svg>;
};

const ActivityCard: React.FC<{ activity: Activity }> = ({ activity }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-5 mb-4 border-l-4 border-blue-500">
    <div className="flex justify-between items-start">
      <div>
        <div className="flex items-center space-x-2 text-blue-600">
          <TimeOfDayIcon timeOfDay={activity.timeOfDay} />
          <span className="font-bold text-sm uppercase tracking-wider">{activity.timeOfDay}</span>
        </div>
        <h4 className="text-xl font-bold mt-1 text-slate-800">{activity.name}</h4>
      </div>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{activity.category}</span>
    </div>
    <p className="text-slate-600 mt-2 text-base">{activity.description}</p>
  </div>
);

const ItineraryDisplay: React.FC<ItineraryDisplayProps> = ({ itinerary }) => {
  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
        <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-800">{itinerary.title}</h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-slate-500">{itinerary.summary}</p>
        </div>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <h3 className="text-3xl font-bold text-slate-700 mb-6 pb-2 border-b-2 border-blue-300">Saturday</h3>
          <div>
            {itinerary.saturday.map((activity, index) => (
              <ActivityCard key={`sat-${index}`} activity={activity} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-slate-700 mb-6 pb-2 border-b-2 border-green-300">Sunday</h3>
          <div>
            {itinerary.sunday.map((activity, index) => (
              <ActivityCard key={`sun-${index}`} activity={activity} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryDisplay;
