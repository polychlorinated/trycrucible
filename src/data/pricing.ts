export interface PricingPlan {
  name: string;
  price: string;
  per: string | null;
  badge: string | null;
  blurb: string | null;
  features: string[];
  creditNote: string | null;
  cta: { label: string; href: string };
  featured: boolean;
  muted: boolean;
}

export const APP_LOGIN_URL = "https://app.trycrucible.com/login";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$49",
    per: "/mo",
    badge: null,
    blurb: "Turn one weekly 10-minute brain dump into a full week of content.",
    features: [
      "4 Complete Weekly Campaigns / mo ($12.25/campaign)",
      "1 Brand Voice Profile",
      "1 User Seat",
      "Short video clips, deep dives, and multi-channel written posts",
    ],
    creditNote: "Includes 1 free credit for your first project",
    cta: { label: "Get started", href: APP_LOGIN_URL },
    featured: false,
    muted: false,
  },
  {
    name: "Pro",
    price: "$149",
    per: "/mo",
    badge: "Most Popular",
    blurb: "The full output engine for serious brands — weekly scale plus social research.",
    features: [
      "16 Complete Campaigns / mo ($9.31/campaign)",
      "Includes Social Research & Competitor Gap Engine",
      "1 Brand Voice Profile",
      "Priority Video Processing",
    ],
    creditNote: "Includes 1 free credit for your first project",
    cta: { label: "Get started", href: APP_LOGIN_URL },
    featured: true,
    muted: false,
  },
  {
    name: "Team & Agency",
    price: "Coming Soon",
    per: null,
    badge: null,
    blurb: "Multi-seat team collaboration, custom brand voice guardrails, and multi-brand workspaces.",
    features: [],
    creditNote: null,
    cta: { label: "Contact for Early Access", href: "/contact" },
    featured: false,
    muted: true,
  },
];

export const singleCreditNote = {
  prefix: "Just need a single campaign today? Single credits available ",
  linkLabel: "in-app",
  suffix: " for $19.",
};
