export const site = {
  legalName: "Tegnelia & DeBose, APC",
  brand: "EmailMyLawyer.com",
  attorney: "Marcus DeBose", // casual, used in body copy
  attorneyLegal: "Marcus E. DeBose", // formal legal name (schema)
  attorneyBar: "Marcus E. DeBose, Esq.", // responsible-attorney line for header/footer (compliance)
  phone: "(619) 876-0992",
  phoneHref: "tel:+16198760992",
  email: "marcus@emailmylawyer.com",
  address: {
    street: "2820 Camino Del Rio S, Suite 110",
    city: "San Diego",
    state: "CA",
    zip: "92108",
    full: "2820 Camino Del Rio S, Suite 110, San Diego, CA 92108",
  },
  domain: "https://emailmylawyer.com",
  maps: "https://maps.app.goo.gl/PFcfTJ1F2y2vb1Pm7",
  // Google Maps place embed for the office (address-based query)
  mapEmbed:
    "https://www.google.com/maps?q=2820+Camino+Del+Rio+S+Suite+110+San+Diego+CA+92108&output=embed",
  facebook: "https://www.facebook.com/EmailMyLawyer/",
  primaryCity: "San Diego",
  state: "CA",
  rating: 4.4,
  reviewCount: 22,
  hours: [
    { day: "Monday", time: "8:00 AM – 6:00 PM" },
    { day: "Tuesday", time: "8:00 AM – 6:00 PM" },
    { day: "Wednesday", time: "8:00 AM – 6:00 PM" },
    { day: "Thursday", time: "8:00 AM – 6:00 PM" },
    { day: "Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "By Appointment" },
    { day: "Sunday", time: "24/7 Case Review Line" },
  ],
  yearsInPractice: 25,
  tagline: "Serving San Diego clients for 25 years",
  trustBadges: [
    "25 Years' Experience",
    "Free Consultation",
    "Se Habla Español",
    "24/7 Case Review",
  ],
} as const;

export type NavChild = { label: string; href: string };
export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};
