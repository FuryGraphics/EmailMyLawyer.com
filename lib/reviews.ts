export type Review = {
  name: string;
  initials: string;
  source: string;
  date: string;
  rating: number;
  body: string;
};

// Real 5-star reviews from the firm's Google Business Profile.
// Bodies are transcribed verbatim from the visible review text (some were
// truncated on Google with "…More" and are shown here up to the last complete
// sentence). Relative dates converted to month/year (as of Aug 2026).
export const reviews: Review[] = [
  {
    name: "Julia Scull",
    initials: "JS",
    source: "Google",
    date: "Jan 2026",
    rating: 5,
    body: "Marcus DeBose represented us in four separate cases, both felony and misdemeanor, over an approximate four-year time period. In all cases, the final result was “Case Dismissed” with no charges noted on the record.",
  },
  {
    name: "Guillermo Sanchez",
    initials: "GS",
    source: "Google",
    date: "Feb 2026",
    rating: 5,
    body: "Marcus and his team are very professional and caring. Marcus communicated very well by answering phone calls and returning text messages. He provided updates on everything that transpired during and between court dates.",
  },
  {
    name: "Nestor Gonzalez",
    initials: "NG",
    source: "Google",
    date: "May 2026",
    rating: 5,
    body: "Attorney Marcus was very professional & knowledgeable & was very helpful & clear about my 2nd DUI case. His consultation was free, I couldn't ask for a better attorney. I recommend anyone with an open case to reach out to Attorney Marcus.",
  },
  {
    name: "Katy Herrera",
    initials: "KH",
    source: "Google",
    date: "May 2026",
    rating: 5,
    body: "Marcus went above and beyond during our consultation. He has been a great resource and I would highly recommend him to anyone seeking legal advice. I'm more than appreciative of his professionalism and personalism.",
  },
  {
    name: "Monique",
    initials: "M",
    source: "Google",
    date: "Feb 2026",
    rating: 5,
    body: "Marcus DeBose help me with information on my DUI case from DMV hearing, discovery and understanding my booking changes. Mr DeBose is the lawyer you want representing you. Thank you Marcus for being there.",
  },
  {
    name: "AJ Hawkins",
    initials: "AJ",
    source: "Google",
    date: "Jun 2026",
    rating: 5,
    body: "Marcus DeBose did an excellent job representing for a DUI case and was able to help explain terms clearly and confidently. A phenomenal lawyer!",
  },
  {
    name: "Janine Martinez",
    initials: "JM",
    source: "Google",
    date: "Sep 2025",
    rating: 5,
    body: "Marcus and his team are life savers! Process that could have been way worse they made seemless. Thank you again Marcus and team!!",
  },
  {
    name: "Izzy Monroy",
    initials: "IM",
    source: "Google",
    date: "2025",
    rating: 5,
    body: "When I had called because I was in a possible DUI accident I was very nervous on what my news might be. When I talked to Marcus it was very brief but he did not disappoint. I gave him my information and as soon as he could he called me back.",
  },
  {
    name: "Aik Dents",
    initials: "AD",
    source: "Google",
    date: "2025",
    rating: 5,
    body: "Am still amazed at the efficiency and skills level of Mr Marcus Debose. He was referred to me by a friend's sister in law. I met Mr Debose as a broken man with an allegation of domestic violence and a Temporary Restraining Order.",
  },
  {
    name: "Candy Valen",
    initials: "CV",
    source: "Google",
    date: "2024",
    rating: 5,
    body: "I have put my future in this very capable man's hands and he has been nothing short of an angel. I will trust no other. If you are in need, Marcus is your man. Be open and honest — he is real, down to earth and very understanding. Not the judgmental type at all.",
  },
];
