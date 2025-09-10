
export enum FragranceFamily {
  Woody = 'Woody',
  Citrus = 'Citrus',
  Oriental = 'Oriental',
  Floral = 'Floral',
  Spicy = 'Spicy',
  Fresh = 'Fresh',
  Aromatic = 'Aromatic',
}

export enum Usage {
  Day = 'Day',
  Night = 'Night',
  AllSeason = 'All Season',
  SpecialOccasion = 'Special Occasion',
}

export interface Perfume {
  id: number;
  name: string;
  tagline: string;
  mainChords: FragranceFamily[];
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  usage: Usage;
  price: number;
  originalPrice?: number;
  isOnSale?: boolean;
  size: number;
  isBestSeller: boolean;
  image: string;
  isSignature?: boolean;
}
