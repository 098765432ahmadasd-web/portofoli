/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PortfolioVersion {
  id: string;
  title: string;
  targetAudience: string;
  wordCount: number;
  readingTime: string;
  description: string;
  paragraphs: {
    heading?: string;
    text: string;
    tag?: string;
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  overview: string;
  approach: string;
  kadunaRelevance: string;
  deliverables: string[];
  turnaround: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'portraits' | 'cultural' | 'commercial';
  categoryLabel: string;
  image: string;
  location: string;
  story: string;
  technicalExif: {
    lens: string;
    focalLength: string;
    aperture: string;
    lighting: string;
  };
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  organizationOrContext: string;
  quote: string;
  location: string;
}

export const PORTFOLIO_VERSIONS: PortfolioVersion[] = [
  {
    id: 'master',
    title: 'Master Portfolio Description',
    targetAudience: 'Clients, Art Enthusiasts & Kaduna Businesses (All Audiences)',
    wordCount: 412,
    readingTime: '2 min read',
    description: 'The definitive 300–500 word narrative crafted to showcase unique style, emotional resonance, and deep community roots in Kaduna without generic clichés.',
    paragraphs: [
      {
        heading: 'The Journey & The Eye',
        text: 'Every photograph begins with an invitation to slow down and truly look. Based in Kaduna, Nigeria, my journey with photography grew out of an enduring fascination with the quiet rhythms of our community—the amber glow of late afternoon across earthen architecture, the unforced dignity in an elder’s gaze, and the electric pulse of our vibrant commercial quarters. Through "asd," I set out to create more than just sharp pictures; I craft thoughtful visual narratives that honor who you are, grounded in honest human emotion and cultural reverence.',
        tag: 'Introduction & Journey'
      },
      {
        heading: 'Portraiture & Personal Narrative',
        text: 'A portrait should never feel staged or hurried. Whether photographing artists, families, or professionals, I create an unhurried, comfortable atmosphere where your true character emerges naturally. Every frame highlights subtle expressions, rich textures, and the quiet confidence within.',
        tag: 'Service: Portraits'
      },
      {
        heading: 'Cultural Celebrations & Milestone Gatherings',
        text: 'From traditional weddings to community festivals across northern Nigeria, I document celebrations with an unobtrusive, documentary sensitivity. I focus on candid laughter, generational connections, and the vibrant textiles and rituals that make your milestone unforgettable.',
        tag: 'Service: Cultural Events'
      },
      {
        heading: 'Commercial & Brand Storytelling for Kaduna Businesses',
        text: 'For Kaduna’s growing businesses, artisans, and culinary ventures, quality imagery is the cornerstone of trust. I collaborate closely with local founders to translate your craftsmanship, team energy, and physical space into refined editorial visuals that draw customers in and elevate your market presence.',
        tag: 'Service: Commercial'
      },
      {
        heading: 'The "asd" Distinction',
        text: 'What sets "asd" apart is an intuitive balance between artistic vision and genuine community connection. I don’t believe in stiff poses or generic templates. Instead, I observe how natural light interacts with Kaduna’s distinct landscapes and interior spaces, paying close attention to nuanced stories that often go unnoticed. You receive a collaborative partner dedicated to portraying your world with artistic elegance, technical mastery, and profound respect.',
        tag: 'The Unique Approach'
      },
      {
        heading: 'Let’s Create Timeless Work',
        text: 'Whether you are planning a milestone celebration, refreshing your personal portrait, or building a distinctive visual identity for your business in Kaduna, I would love to tell your story. Explore the curated portfolios below, discover the stories behind each series, and let’s connect to create something timeless together.',
        tag: 'Call to Action'
      }
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Client Proposal Pitch',
    targetAudience: 'Kaduna Local Businesses, Hospitality, Artisans & Enterprise',
    wordCount: 295,
    readingTime: '1.5 min read',
    description: 'Tailored specifically for founders, retail venues, and creative entrepreneurs in Kaduna who need visuals that drive customer trust and sales.',
    paragraphs: [
      {
        heading: 'Elevating Kaduna’s Enterprise Through Visual Storytelling',
        text: 'In an increasingly visual marketplace, how your business is seen dictates how it is valued. At "asd," based right here in Kaduna, I partner with forward-thinking local brands, artisanal workshops, and commercial venues to produce high-impact editorial imagery that communicates quality at a glance.',
        tag: 'Commercial Focus'
      },
      {
        heading: 'A Collaborative, Brand-First Approach',
        text: 'Rather than running generic photo shoots, I immerse myself in your brand ethos. We highlight the human hands behind your craft, the authentic ambiance of your space, and the genuine satisfaction of your patrons. From culinary spaces along Barnawa to manufacturing and creative studios in Kaduna Central, my imagery bridges artistic sophistication with commercial clarity.',
        tag: 'Process & Value'
      },
      {
        heading: 'Ready for Marketing, Web & Press',
        text: 'Every commission delivers high-resolution assets optimized for modern web presence, social marketing, and promotional print. Partner with a Kaduna photographer who understands your market and shares your passion for community-driven enterprise.',
        tag: 'Next Steps'
      }
    ]
  },
  {
    id: 'fineart',
    title: 'Artist Statement & Fine Art Monograph',
    targetAudience: 'Art Collectors, Curators & Cultural Enthusiasts',
    wordCount: 270,
    readingTime: '1.2 min read',
    description: 'Philosophical statement emphasizing light, Sahelian aesthetics, and the preservation of northern Nigerian cultural dignity.',
    paragraphs: [
      {
        heading: 'Preserving Dignity in Light and Shadow',
        text: 'Light in northern Nigeria possesses a singular cadence—diffused through gentle Harmattan dust in winter, golden and direct over Sahelian plains in dry season. "asd" began as an ongoing inquiry into how this natural luminescence dignifies the human form and reflects northern Nigerian memory.',
        tag: 'Artistic Philosophy'
      },
      {
        heading: 'Documenting the Living Texture of Kaduna',
        text: 'My work rejects decorative exoticism in favor of intimate visual ethnography. By photographing community members in their unvarnished environments—surrounded by hand-woven textiles, raw adobe clay, and the living geometry of Kaduna—I seek to archive the quiet nobility of everyday moments.',
        tag: 'Methodology'
      }
    ]
  },
  {
    id: 'social',
    title: 'Compact Press & Social Bio',
    targetAudience: 'Social Media Profiles, Event Programs & Directory Listings',
    wordCount: 145,
    readingTime: '45 sec read',
    description: 'Concise, high-impact overview ready to paste into Instagram, Behance, LinkedIn, or exhibition brochures.',
    paragraphs: [
      {
        heading: 'About asd Photography',
        text: '"asd" is a Kaduna-based visual storytelling studio founded on the belief that honest photography begins with deep cultural empathy and an eye for natural light. Specializing in intimate portraiture, milestone celebrations, and brand imagery for local businesses across northern Nigeria, "asd" crafts timeless, documentary-grade visuals that honor individual stories and elevate community pride.',
        tag: 'Bio Summary'
      }
    ]
  }
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'portraiture',
    title: 'Portraiture & Personal Narrative',
    subtitle: 'Soulful, unhurried individual and family sessions',
    image: '/src/assets/images/service_portrait_intimacy_1793264940728.jpg',
    alt: 'Elderly northern Nigerian man in traditional attire seated in warm natural light',
    overview: 'Portraits designed to capture true character rather than stiff poses. We take the time to converse, observe, and find the natural gesture that makes you unmistakable.',
    approach: 'Natural ambient light combined with subtle reflectors to preserve organic skin tones and eye warmth.',
    kadunaRelevance: 'Conducted in intimate home settings, architectural landmarks, or open landscapes across Kaduna.',
    deliverables: ['25–40 high-resolution master retouched frames', 'Private online gallery with download access', 'Fine-art print recommendation sheet'],
    turnaround: '5–7 business days'
  },
  {
    id: 'cultural-events',
    title: 'Cultural Celebrations & Milestone Gatherings',
    subtitle: 'Traditional weddings, anniversaries & community assemblies',
    image: '/src/assets/images/service_cultural_events_1793264941251.jpg',
    alt: 'Vibrant cultural wedding and celebration gathering in northern Nigeria with joyful laughter',
    overview: 'Milestone moments documented with documentary sensitivity and reverence for heritage, family bonds, and northern Nigerian celebration traditions.',
    approach: 'Unobtrusive, multi-perspective documentary coverage capturing both grand ritual moments and private emotional glances.',
    kadunaRelevance: 'Deep familiarity with northern Nigerian cultural protocols, family dynamics, and ceremony paces.',
    deliverables: ['Full documentary photo chronicle (300+ edited images)', 'Curated highlight storybook gallery', 'Family heirloom memory archive'],
    turnaround: '10–14 business days'
  },
  {
    id: 'commercial-storytelling',
    title: 'Commercial & Brand Storytelling',
    subtitle: 'Elevating Kaduna businesses, artisans & hospitality venues',
    image: '/src/assets/images/service_commercial_kaduna_1793264940951.jpg',
    alt: 'Kaduna artisanal space with pottery maker and coffee bar team in warm ambient environment',
    overview: 'Editorial visual packages that tell the authentic story behind your business, helping Kaduna ventures attract discerning customers and build lasting trust.',
    approach: 'Pre-production brand alignment, space scouting, authentic staff-in-action documentation, and product context shots.',
    kadunaRelevance: 'Specifically tailored for Kaduna restaurants, creative workshops, apparel makers, and commercial institutions.',
    deliverables: ['Comprehensive brand imagery library (website + social + print)', 'Commercial usage license included', 'Content crop variations for digital platforms'],
    turnaround: '7–10 business days'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'hero-portrait',
    title: 'The Golden Hour on Malali Ridge',
    category: 'portraits',
    categoryLabel: 'Portraiture',
    image: '/src/assets/images/hero_kaduna_portrait_1793264939887.jpg',
    location: 'Malali Outskirts, Kaduna',
    story: 'Captured in the golden twilight light of late dry season. The subject’s indigo wrap catches the warm western glow, illustrating the serene beauty and calm resilience of Kaduna’s younger generation.',
    technicalExif: {
      lens: '85mm f/1.4 Prime',
      focalLength: '85mm',
      aperture: 'f/2.0',
      lighting: 'Sahelian golden hour natural backlight'
    }
  },
  {
    id: 'elder-portrait',
    title: 'Quiet Reflections in Earth and Clay',
    category: 'portraits',
    categoryLabel: 'Portraiture',
    image: '/src/assets/images/service_portrait_intimacy_1793264940728.jpg',
    location: 'Old Settlement Quarter, Kaduna',
    story: 'A portrait of patience and oral history. Lit solely by ambient daylight streaming through a weathered wooden window frame, highlighting the rich textures of traditional woven fabric and hand-laid mud architecture.',
    technicalExif: {
      lens: '50mm f/1.2 Art',
      focalLength: '50mm',
      aperture: 'f/2.8',
      lighting: 'North-facing single window diffused daylight'
    }
  },
  {
    id: 'celebration-harmony',
    title: 'Rhythms of Joy at the Royal Durbar Gathering',
    category: 'cultural',
    categoryLabel: 'Cultural Events',
    image: '/src/assets/images/service_cultural_events_1793264941251.jpg',
    location: 'Kaduna Central Cultural Grounds',
    story: 'The air filled with talking drums and choral chants. A documentary capture of genuine celebration where generations dance shoulder to shoulder, surrounded by hand-dyed fabrics.',
    technicalExif: {
      lens: '35mm f/1.4 Wide',
      focalLength: '35mm',
      aperture: 'f/4.0',
      lighting: 'Late afternoon ambient with open sky fill'
    }
  },
  {
    id: 'artisan-hamdala',
    title: 'Craft and Community: Hamdala Artisan Collective',
    category: 'commercial',
    categoryLabel: 'Commercial Enterprise',
    image: '/src/assets/images/service_commercial_kaduna_1793264940951.jpg',
    location: 'Barnawa Commercial District, Kaduna',
    story: 'Promotional narrative commissioned for a modern Kaduna creative hub. Showing the potter shaping indigenous terracotta alongside the energetic coffee bar, celebrating local entrepreneurship.',
    technicalExif: {
      lens: '24-70mm f/2.8 II',
      focalLength: '28mm',
      aperture: 'f/3.5',
      lighting: 'Natural store skylight balanced with warm tungsten'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Hadiza Al-Hassan',
    role: 'Founder & Head of Operations',
    organizationOrContext: 'Hamdala Artisan Space, Kaduna',
    quote: 'asd completely transformed how our space is perceived. Ahmad took the time to understand the heartbeat of our cafe and pottery workshop before ever lifting his camera. Our web traffic and local footfall increased noticeably after deploying these visuals.',
    location: 'Barnawa, Kaduna'
  },
  {
    id: '2',
    clientName: 'Ibrahim & Fatima Sani',
    role: 'Wedding Clients',
    organizationOrContext: 'Traditional Nuptial Chronicle',
    quote: 'We wanted photos that felt like memory rather than a plastic photoshoot. Looking back at our wedding gallery, every single image carries the actual sound and warmth of that day. He treated our elders with immense respect.',
    location: 'GRA, Kaduna'
  },
  {
    id: '3',
    clientName: 'Bala Danjuma',
    role: 'Creative Director',
    organizationOrContext: 'Kaduna Cultural Heritage Trust',
    quote: 'In northern Nigeria, it is rare to find a photographer who understands both the technical subtlety of our unique light and the cultural nuance of our people. "asd" is the standard for visual documentation here.',
    location: 'Kaduna City'
  }
];

export const PACKAGES = [
  {
    id: 'portrait',
    name: 'Personal Portrait & Narrative Session',
    duration: '90 Minutes',
    location: 'On Location in Kaduna or Private Studio',
    idealFor: 'Artists, Executives, Creative Founders, Personal Milestones',
    deliverables: '30 High-Resolution Retouched Images · Online Gallery · Print Rights',
    priceNGN: 85000,
    priceUSD: 60
  },
  {
    id: 'event',
    name: 'Cultural Celebration & Gathering Chronicle',
    duration: 'Full Day Coverage (Up to 8 Hours)',
    location: 'Ceremonial Grounds, Hotels or Private Residencies in Kaduna',
    idealFor: 'Traditional Weddings, Milestone Anniversaries, Cultural Gatherings',
    deliverables: '350+ Curated High-Res Images · Story Highlight Deck · Same-Week Preview',
    priceNGN: 250000,
    priceUSD: 180
  },
  {
    id: 'commercial',
    name: 'Kaduna Brand & Commercial Storytelling',
    duration: 'Half-Day or Multi-Location Shoot',
    location: 'Your Storefront, Workshop, or Culinary Venue in Kaduna',
    idealFor: 'Local Businesses, Cafes, Hospitality, Artisans & Tech Spaces',
    deliverables: '60+ Brand Assets · Full Commercial Licensing · Web & Print Formats',
    priceNGN: 180000,
    priceUSD: 130
  }
];
