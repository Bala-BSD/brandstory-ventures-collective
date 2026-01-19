export interface Company {
  name: string;
  category: string;
  description: string;
  ownership: string;
  website?: string;
}

export const companies: Company[] = [
  {
    name: "BrandStory.In",
    category: "Digital Marketing",
    description: "Bengaluru-based full-service digital marketing and branding agency delivering SEO, performance marketing, web design, content, and digital strategy.",
    ownership: "Bala",
    website: "https://brandstory.in/"
  },
  {
    name: "BrandStory UAE",
    category: "Digital Marketing",
    description: "Dubai-based digital marketing and branding agency delivering SEO, performance marketing, social media, and web solutions for business growth.",
    ownership: "Bala",
    website: "http://brandstory.ae/"
  },
  {
    name: "Brandstory AI",
    category: "AI & Technology",
    description: "AI-powered digital marketing and growth solutions platform focused on automation, performance, and data-driven brand outcomes.",
    ownership: "Bala",
    website: "https://brandstory.ai/"
  },
  {
    name: "Brandstory Global",
    category: "Digital Marketing",
    description: "Global full-service digital marketing and branding agency helping businesses grow through SEO, performance marketing, web design, content, and digital strategy.",
    ownership: "Bala",
    website: "https://brandstoryglobal.com/"
  },
  {
    name: "Brand Signages",
    category: "Manufacturing",
    description: "Bengaluru-based signage design and manufacturing company specializing in custom LED, acrylic, metal, and digital branding sign solutions.",
    ownership: "Bala",
    website: "https://brandsignages.com/"
  },
  {
    name: "Origin UX",
    category: "Design & UX",
    description: "Bengaluru-based UI/UX and customer experience design agency helping businesses create intuitive, user-centric digital products and services.",
    ownership: "Bala / Vaishnavi",
    website: "https://www.originux.com/"
  },
  {
    name: "Talentskape",
    category: "HR & Talent",
    description: "Bengaluru-based talent network and staffing platform connecting businesses with vetted UI/UX designers, researchers, developers, and digital talent.",
    ownership: "Bala / Vaishnavi",
    website: "https://talentskape.com/"
  },
  {
    name: "RelGrow",
    category: "Real Estate",
    description: "Bengaluru-based real estate lifecycle management company offering end-to-end solutions across construction, interiors, and property optimization.",
    ownership: "Bala",
    website: "https://relgrow.com/"
  },
  {
    name: "ContextRead",
    category: "Content & Media",
    description: "Content writing and content marketing agency delivering SEO-focused content to help businesses improve engagement and online visibility.",
    ownership: "Bala",
    website: "https://contextread.com/"
  },
  {
    name: "Database Providers",
    category: "B2B Services",
    description: "Provides verified B2B databases and strategic ABM services to help businesses reach the right decision-makers and drive measurable growth.",
    ownership: "Bala / Madhavan",
    website: "https://thedatabaseproviders.com/"
  },
  {
    name: "WD Agency",
    category: "Digital Marketing",
    description: "Leading web development agency based in Dubai, UAE, specializing in creating innovative digital solutions that drive business growth and success.",
    ownership: "Bala",
    website: "https://websitedevelopmentagency.ae/"
  },
  {
    name: "EditAtEase",
    category: "Content & Media",
    description: "Professional video editing service providing fast, affordable editing for brands and content creators, including long-form and short-form video edits.",
    ownership: "Bala / Anil",
    website: "https://editatease.com/"
  },
  {
    name: "SwayKart",
    category: "AI & Technology",
    description: "AI-driven influencer marketing platform helping brands find creators, run campaigns, and measure results with transparency and data-driven insights.",
    ownership: "Bala / Nidhi",
    website: "https://www.swaykart.com/"
  },
  {
    name: "Ingoude",
    category: "AI & Technology",
    description: "Dubai-based insurance technology platform providing API-driven software solutions for insurance brokers to quote, compare, manage clients, and handle policies.",
    ownership: "Bala / Vijay",
    website: "https://ingoude.ae/"
  },
  {
    name: "Lights on Talent",
    category: "HR & Talent",
    description: "Casting and talent discovery platform that connects aspiring actors and models with brands and projects.",
    ownership: "Bala / Bala Murugan"
  },
  {
    name: "RoundTable Central",
    category: "Content & Media",
    description: "YouTube channel featuring in-depth panel discussions and think-tank style conversations on global issues, technology, and policy topics.",
    ownership: "Bala",
    website: "https://www.youtube.com/@RoundTableCentral"
  },
  {
    name: "Global PR Council",
    category: "B2B Services",
    description: "Online marketplace connecting businesses with top public relations and communication service providers worldwide.",
    ownership: "Bala",
    website: "https://globalprcouncil.com/"
  },
  {
    name: "Sol Cakes",
    category: "Consumer",
    description: "Bengaluru-based cake brand specializing in freshly baked cakes and custom dessert orders.",
    ownership: ""
  },
  {
    name: "Wintrust Legal",
    category: "Professional Services",
    description: "India-based law firm offering corporate, litigation, and compliance legal services.",
    ownership: "Bala",
    website: "https://wintrustlegal.com/"
  },
  {
    name: "New Business Setup",
    category: "Professional Services",
    description: "Premier digital-first platform for business formation and compliance services, targeting the UAE market with a roadmap for global expansion.",
    ownership: "Bala",
    website: "https://www.newbusinesssetup.com/"
  },
  {
    name: "TrulyRecycle",
    category: "Sustainability",
    description: "Building India's circular economy through technology, transparency, and community engagement. Transforming waste management for a sustainable future.",
    ownership: "Bala / Vikas",
    website: "https://trulyrecycle.com/"
  },
  {
    name: "AccelNow",
    category: "AI & Technology",
    description: "Specialized enterprise AI platform combining open-source core with managed, compliance-heavy infrastructure for regulated industries like BFSI.",
    ownership: "",
    website: "https://accelnow.ai/"
  }
];

export const categories = [
  "All",
  "Digital Marketing",
  "AI & Technology",
  "Design & UX",
  "HR & Talent",
  "Content & Media",
  "B2B Services",
  "Professional Services",
  "Real Estate",
  "Manufacturing",
  "Sustainability",
  "Consumer"
];
