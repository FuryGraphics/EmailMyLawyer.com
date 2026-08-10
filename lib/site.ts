export const site = {
  legalName: "Tegnelia & DeBose, APC",
  brand: "EmailMyLawyer.com",
  attorney: "Marcus DeBose",
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
  trustBadges: [
    "Free Consultation",
    "Se Habla Español",
    "24/7 Case Review",
    "Former Prosecutor Insight",
  ],
} as const;

export type NavChild = { label: string; href: string };
export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};
