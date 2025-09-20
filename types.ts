
export enum Interest {
  Hiking = "Hiking",
  Breweries = "Breweries",
  ArtAndCulture = "Art & Culture",
  Foodie = "Foodie",
  FamilyFun = "Family Fun",
  Nightlife = "Nightlife",
  Shopping = "Shopping",
  LiveMusic = "Live Music",
}

export interface Activity {
  name: string;
  description: string;
  timeOfDay: 'Morning' | 'Afternoon' | 'Evening';
  category: string;
}

export interface Itinerary {
  title: string;
  summary: string;
  saturday: Activity[];
  sunday: Activity[];
}
