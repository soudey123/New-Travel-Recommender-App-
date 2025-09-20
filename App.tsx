
import React, { useState, useCallback } from 'react';
import { Interest, Itinerary } from './types';
import { generateItinerary } from './services/geminiService';
import Header from './components/Header';
import InterestSelector from './components/InterestSelector';
import ItineraryDisplay from './components/ItineraryDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer';
import Hero from './components/Hero';

const App: React.FC = () => {
  const [selectedInterests, setSelectedInterests] = useState<Interest[]>([]);
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleInterestChange = useCallback((interest: Interest) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  }, []);

  const handleGenerateItinerary = async () => {
    if (selectedInterests.length === 0) {
      setError("Please select at least one interest to generate an itinerary.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setItinerary(null);

    try {
      const result = await generateItinerary(selectedInterests);
      setItinerary(result);
    } catch (err) {
      console.error(err);
      setError("Sorry, we couldn't generate an itinerary at this time. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 -mt-20 relative z-10">
            <InterestSelector
              selectedInterests={selectedInterests}
              onInterestChange={handleInterestChange}
            />

            <div className="text-center mt-8">
              <button
                onClick={handleGenerateItinerary}
                disabled={isLoading || selectedInterests.length === 0}
                className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-md disabled:shadow-none"
              >
                {isLoading ? 'Generating...' : 'Create My Itinerary'}
              </button>
            </div>
          </div>

          <div className="mt-12">
            {isLoading && <LoadingSpinner />}
            {error && <div className="text-center text-red-500 bg-red-100 p-4 rounded-lg max-w-2xl mx-auto">{error}</div>}
            {itinerary && <ItineraryDisplay itinerary={itinerary} />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
