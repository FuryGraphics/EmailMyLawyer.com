export type City = {
  name: string;
  county: string;
};

// Full list of served cities & the counties they fall in.
export const cities: City[] = [
  { name: "Carlsbad", county: "San Diego County" },
  { name: "Chula Vista", county: "San Diego County" },
  { name: "Coronado", county: "San Diego County" },
  { name: "Del Mar", county: "San Diego County" },
  { name: "El Cajon", county: "San Diego County" },
  { name: "Encinitas", county: "San Diego County" },
  { name: "Escondido", county: "San Diego County" },
  { name: "Imperial Beach", county: "San Diego County" },
  { name: "La Mesa", county: "San Diego County" },
  { name: "Lemon Grove", county: "San Diego County" },
  { name: "National City", county: "San Diego County" },
  { name: "Oceanside", county: "San Diego County" },
  { name: "Poway", county: "San Diego County" },
  { name: "San Marcos", county: "San Diego County" },
  { name: "Santee", county: "San Diego County" },
  { name: "Vista", county: "San Diego County" },
  { name: "Temecula", county: "Riverside County" },
  { name: "Riverside", county: "Riverside County" },
  { name: "Murrieta", county: "Riverside County" },
  { name: "Menifee", county: "Riverside County" },
  { name: "Hemet", county: "Riverside County" },
  { name: "Lake Elsinore", county: "Riverside County" },
];

// Neighborhoods / communities within San Diego for the primary-city card.
export const sanDiegoNeighborhoods = [
  "Downtown / Gaslamp",
  "North Park",
  "Pacific Beach",
  "La Jolla",
  "Mission Valley",
  "Hillcrest",
  "Point Loma",
  "Clairemont",
  "Kearny Mesa",
  "Mira Mesa",
  "Rancho Bernardo",
  "Otay Mesa",
  "San Ysidro",
  "Barrio Logan",
  "College Area",
  "Serra Mesa",
];
