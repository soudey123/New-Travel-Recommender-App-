import { GoogleGenAI, Type } from "@google/genai";
import { Interest, Itinerary } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING, description: "A catchy title for the weekend trip plan." },
    summary: { type: Type.STRING, description: "A brief, one-paragraph summary of the weekend vibe based on selected interests." },
    saturday: {
      type: Type.ARRAY,
      description: "An array of activities for Saturday.",
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING, description: "Name of the place or activity." },
          description: { type: Type.STRING, description: "A detailed description of the activity and why it's recommended." },
          timeOfDay: { type: Type.STRING, enum: ['Morning', 'Afternoon', 'Evening'], description: "The part of the day for this activity." },
          category: { type: Type.STRING, description: "A category for the activity (e.g., Food, Outdoor, Museum, Music)." }
        },
        required: ["name", "description", "timeOfDay", "category"]
      }
    },
    sunday: {
      type: Type.ARRAY,
      description: "An array of activities for Sunday.",
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING, description: "Name of the place or activity." },
          description: { type: Type.STRING, description: "A detailed description of the activity and why it's recommended." },
          timeOfDay: { type: Type.STRING, enum: ['Morning', 'Afternoon', 'Evening'], description: "The part of the day for this activity." },
          category: { type: Type.STRING, description: "A category for the activity (e.g., Food, Outdoor, Museum, Music)." }
        },
        required: ["name", "description", "timeOfDay", "category"]
      }
    }
  },
  required: ["title", "summary", "saturday", "sunday"]
};

export const generateItinerary = async (interests: Interest[]): Promise<Itinerary> => {
  const prompt = `
    You are a creative Denver, Colorado travel expert with a knack for crafting unique experiences.
    Create a personalized, exciting, and detailed 2-day weekend itinerary (Saturday and Sunday) for a trip to Denver.
    Please ensure this itinerary is fresh and avoids generic, repetitive suggestions.
    The itinerary should be tailored to the following interests: ${interests.join(', ')}.
    
    For each day, provide 3-4 specific and actionable recommendations for morning, afternoon, and evening. 
    Include names of real places, restaurants, neighborhoods, or trails.
    Make the descriptions engaging and helpful for a tourist, focusing on what makes the experience special.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.9
      },
    });

    const text = response.text.trim();
    // Sometimes the model might wrap the JSON in markdown backticks, so we remove them.
    const cleanedJson = text.replace(/^```json\n?/, '').replace(/\n?```$/, '');
    const parsedItinerary: Itinerary = JSON.parse(cleanedJson);
    
    return parsedItinerary;

  } catch (error) {
    console.error("Error generating itinerary:", error);
    throw new Error("Failed to communicate with the AI model.");
  }
};