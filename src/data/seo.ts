export interface FaqItem {
  q: string;
  a: string;
}

const SITE_URL = "https://trycrucible.com";

const organization = {
  name: "Crucible",
  legalName: "Polychlorinated Ventures LLC",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/flame-icon.png`,
  email: "hello@trycrucible.com",
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    ...organization,
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Crucible",
    url: `${SITE_URL}/`,
    publisher: { "@type": "Organization", name: organization.name },
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Crucible",
    description:
      "Crucible turns a 10-minute recording into a week of content: video shorts, deep dives, and multi-channel written posts in your own voice.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${SITE_URL}/`,
    publisher: { "@type": "Organization", name: organization.name },
    offers: [
      {
        "@type": "Offer",
        name: "Starter",
        price: "49",
        priceCurrency: "USD",
        description: "4 complete weekly campaigns per month, 1 brand voice profile, 1 user seat.",
      },
      {
        "@type": "Offer",
        name: "Pro",
        price: "149",
        priceCurrency: "USD",
        description:
          "16 complete campaigns per month with Social Research & Competitor Gap Engine and priority video processing.",
      },
    ],
  };
}

export function webPageSchema(url: string, title: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: { "@type": "WebSite", name: "Crucible", url: `${SITE_URL}/` },
  };
}

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
