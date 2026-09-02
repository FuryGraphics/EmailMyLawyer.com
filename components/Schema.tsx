import { site } from "@/lib/site";
import { reviews } from "@/lib/reviews";

const address = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  addressRegion: site.address.state,
  postalCode: site.address.zip,
  addressCountry: "US",
};

const openingHours = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
];

const aggregateRating = {
  "@type": "AggregateRating",
  ratingValue: site.rating,
  reviewCount: site.reviewCount,
  bestRating: 5,
  worstRating: 1,
};

// Individual Review nodes mirroring the reviews shown on the site.
const reviewNodes = reviews.map((r) => ({
  "@type": "Review",
  author: { "@type": "Person", name: r.name },
  datePublished: r.iso,
  reviewRating: {
    "@type": "Rating",
    ratingValue: r.rating,
    bestRating: 5,
    worstRating: 1,
  },
  reviewBody: r.body,
}));

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// LegalService — homepage
export function LegalServiceSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "LegalService",
        "@id": `${site.domain}/#organization`,
        name: site.brand,
        legalName: site.legalName,
        url: site.domain,
        telephone: site.phone,
        email: site.email,
        priceRange: "$$",
        image: `${site.domain}/images/office.jpg`,
        address,
        areaServed: "San Diego County, CA",
        openingHoursSpecification: openingHours,
        aggregateRating,
        review: reviewNodes,
        sameAs: [site.facebook, site.maps],
      }}
    />
  );
}

// Attorney — /attorney
export function AttorneySchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Attorney",
        name: `${site.attorney}`,
        worksFor: { "@type": "LegalService", name: site.brand, legalName: site.legalName },
        url: `${site.domain}/attorney`,
        telephone: site.phone,
        email: site.email,
        address,
        areaServed: "San Diego County, CA",
        knowsAbout: [
          "Criminal Defense",
          "DUI Defense",
          "Domestic Violence Defense",
          "Drug Crimes",
          "Felony Defense",
        ],
      }}
    />
  );
}

// LocalBusiness — /san-diego, /contact
export function LocalBusinessSchema({ path = "/contact" }: { path?: string }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${site.domain}${path}#localbusiness`,
        name: site.brand,
        legalName: site.legalName,
        image: `${site.domain}/images/office.jpg`,
        url: `${site.domain}${path}`,
        telephone: site.phone,
        email: site.email,
        priceRange: "$$",
        address,
        geo: {
          "@type": "GeoCoordinates",
          latitude: 32.7648,
          longitude: -117.1445,
        },
        openingHoursSpecification: openingHours,
        aggregateRating,
        review: reviewNodes,
        sameAs: [site.facebook, site.maps],
      }}
    />
  );
}
