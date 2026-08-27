export interface EditorialArticle {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  author: { name: string; role: string };
  publishedAt: string;
  image: string;
  summary: string;
  content: string[];
  keyTakeaway: string;
  routineProductIds: string[];
}

export interface TraceProductStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  details: { label: string; value: string }[];
  scientificNote: string;
}

export interface TraceProduct {
  id: string;
  name: string;
  brand: string;
  tagline: string;
  steps: TraceProductStep[];
}

export interface IntelligenceStage {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  signalSample: string;
  metric: string;
  outcome: string;
}

export interface SustainabilityMetric {
  id: string;
  metric: string;
  unit: string;
  label: string;
  description: string;
  verifiedBy: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  bio: string;
  highlight: string;
}

export interface CareerRole {
  title: string;
  department: "Engineering & AI" | "R&D & Science" | "Product & UX" | "Brand & Creative";
  location: string;
  type: string;
  description: string;
}

export interface CommunityReview {
  id: string;
  author: string;
  location: string;
  climate: string;
  skinType: string;
  ageGroup: string;
  concern: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
  pairedProducts: string[];
  helpfulCount: number;
}

/* ==========================================================================
   EDITORIAL CONTENT ("THE BEAUTY EDIT")
   ========================================================================== */
export const editorialArticles: EditorialArticle[] = [
  {
    id: "art-active-layering",
    title: "The Architecture of Active Layering: How to Prevent Barrier Fatigue",
    subtitle: "Why percentage racing does not equal results, and how our chemists design actives to cooperate.",
    category: "Science & Formulation",
    readTime: "4 min read",
    author: { name: "Dr. Ananya Ray", role: "VP of Formulation R&D" },
    publishedAt: "August 2026",
    image: "science",
    summary:
      "Modern skincare often overwhelms the stratum corneum with competing acids and high-strength serums. Here is the science of stabilizing skin while targeting congestion and dullness.",
    content: [
      "When formulating active serums, the biggest challenge is not concentration : it is bio-compatibility. A 2% salicylic acid serum with the right pH buffer delivers superior pore clarification compared to higher percentages that trigger inflammatory rebound.",
      "In our consumer trials, pairing an oil-soluble BHA with a soothing zinc humectant offsets moisture depletion by 42% within the first 14 days of use.",
      "The golden rule: Cleanse gently, treat with one targeted hero active per routine, cushion with water-light humectants, and seal with broad-spectrum UV protection.",
    ],
    keyTakeaway:
      "More actives do not yield faster results. Synergy, correct molecular weight, and barrier buffering dictate true efficacy.",
    routineProductIds: ["tdc-salicylic-serum", "aq-hydrate-gel", "aq-glow-sunscreen"],
  },
  {
    id: "art-climate-routine",
    title: "Climate-Adaptive Beauty: Why Your Skin Behaves Differently in India vs. UAE",
    subtitle: "Ambient relative humidity and UV index dictate whether a moisturizer cushions or suffocates your skin.",
    category: "Climate & Intelligence",
    readTime: "5 min read",
    author: { name: "Devika Mathur", role: "Lead Cosmetic Chemist" },
    publishedAt: "July 2026",
    image: "hydration",
    summary:
      "In 80%+ relative humidity, heavy occlusives trap sweat and sebum, triggering summer folliculitis. In arid air-conditioned environments, transepidermal water loss spikes dramatically.",
    content: [
      "Skin does not live in a vacuum; it is the boundary organ negotiating between your biology and your environment. When ambient moisture is saturated, skin needs breathable cross-linked hyaluronic gels that feel weightless.",
      "Conversely, traveling to desert climates or working in 18°C air-conditioned offices demands lipid replenishment : squalane and ceramides to lock moisture into the extracellular matrix.",
      "That is why Honasa's beauty intelligence layer adjusts routine weight based on the user's country and seasonal climate.",
    ],
    keyTakeaway:
      "A routine that worked in the UK will fail in India. Adapt the texture and occlusivity of your hydration step to ambient humidity.",
    routineProductIds: ["aq-glow-sunscreen", "aq-hydrate-gel", "me-ubtan-face-wash"],
  },
  {
    id: "art-inside-out",
    title: "The Convergence: When Topicals Meet Nutritional Cellular Beauty",
    subtitle: "Why the modern skincare routine begins with gut wellness, micronutrients and cellular support.",
    category: "Holistic Wellness",
    readTime: "3 min read",
    author: { name: "Dr. Vikram Seth", role: "Chief Medical Advisor, Honasa Health" },
    publishedAt: "August 2026",
    image: "nature",
    summary:
      "Topical serums treat the stratum corneum, but cellular collagen synthesis, oxidative stress defense, and keratin resilience are fed from within.",
    content: [
      "The next era of personal care erases the boundary between skincare and nutrition. Integrating pure botanical antioxidants, bioavailability-optimized biotin, and bio-fermented co-factors amplifies topical results.",
      "When topical niacinamide is backed by internal antioxidant protection, cellular defense against urban particulate matter and blue light increases significantly.",
    ],
    keyTakeaway:
      "Radiance is a two-way pathway: protect the barrier from outside, fuel the dermal matrix from inside.",
    routineProductIds: ["hh-glow-collagen", "ds-haldi-vitc-serum", "lu-night-repair-cream"],
  },
];

/* ==========================================================================
   SCIENCE & R&D: "TRACE THE PRODUCT" DATA
   ========================================================================== */
export const traceProducts: TraceProduct[] = [
  {
    id: "tdc-salicylic-serum",
    name: "2% Salicylic Acid Serum",
    brand: "The Derma Co.",
    tagline: "Precision active pore clarification",
    steps: [
      {
        stepNumber: "01",
        title: "Consumer Need & Signal",
        subtitle: "Over 82,000 queries regarding hormonal breakouts and stubborn sebum",
        description:
          "Consumers expressed frustration with harsh astringents that stripped the barrier without reaching deep pore debris. We identified the need for a non-drying, oil-soluble active.",
        details: [
          { label: "Target Concern", value: "Sub-surface congestion & blackheads" },
          { label: "User Feedback Point", value: "'I want clear pores without flaking'" },
        ],
        scientificNote:
          "Salicylic acid (BHA) is lipid-soluble, allowing it to penetrate through sebum plugs where water-soluble AHAs cannot reach.",
      },
      {
        stepNumber: "02",
        title: "Active Molecule & Purity",
        subtitle: "USP-grade 2% Salicylic Acid buffered with Zinc PCA",
        description:
          "Rather than using standard free salicylic acid that can cause stinging, our chemists stabilized the molecule with Zinc PCA at an optimal pH of 3.8–4.0.",
        details: [
          { label: "Active Concentration", value: "2.0% w/w Salicylic Acid" },
          { label: "Synergistic Co-factor", value: "1.0% Zinc PCA (sebum regulator)" },
          { label: "pH Range", value: "3.8 – 4.2 for maximum bio-availability" },
        ],
        scientificNote:
          "Buffering ensures sustained follicular delivery with minimal irritation to surrounding non-comedogenic tissue.",
      },
      {
        stepNumber: "03",
        title: "Sensory Matrix Formulation",
        subtitle: "Zero-tack, water-light slip with Panthenol cushioning",
        description:
          "Formulated in a low-viscosity aqueous matrix enriched with Provitamin B5 (Panthenol) and sodium hyaluronate to maintain skin hydration index throughout application.",
        details: [
          { label: "Viscosity", value: "Fluid serum with 15-second absorption" },
          { label: "Feel", value: "Non-sticky, leaves breathable matte finish" },
          { label: "Compatibility", value: "Layerable under moisturizers and SPF" },
        ],
        scientificNote:
          "No denatured alcohol or synthetic fragrance added, eliminating two primary triggers of barrier degradation.",
      },
      {
        stepNumber: "04",
        title: "Safety & Dermatological Testing",
        subtitle: "Rigorous patch testing and consumer perception trials",
        description:
          "Subject to repeat insult patch testing (HRIPT) across oily and sensitive skin profiles to verify non-comedogenic and hypoallergenic standards.",
        details: [
          { label: "Testing Standard", value: "Dermatologically tested under clinical observation" },
          { label: "Comedogenicity", value: "Zero pore-blocking rating" },
          { label: "Toxin Standard", value: "Free from parabens, mineral oils, SLS" },
        ],
        scientificNote:
          "All clinical benchmarks verified by independent dermatological testing panels.",
      },
      {
        stepNumber: "05",
        title: "Final Product & Continuous Evolution",
        subtitle: "Packaging in amber UV-protective dropper bottles",
        description:
          "Delivered in light-shielded glass with precision dosage droppers. Continuous customer telemetry drives future batch micro-refinements.",
        details: [
          { label: "Packaging", value: "Recyclable amber glass dropper bottle" },
          { label: "Routine Slot", value: "Evening Treatment (Step 02)" },
        ],
        scientificNote:
          "Protected against photo-oxidation to preserve active integrity from the first drop to the last.",
      },
    ],
  },
  {
    id: "aq-glow-sunscreen",
    name: "Glow+ Dewy Sunscreen SPF 50",
    brand: "Aqualogica",
    tagline: "Water-light broad-spectrum UV protection",
    steps: [
      {
        stepNumber: "01",
        title: "Consumer Need & Signal",
        subtitle: "The universal complaint: White cast, greasiness, and sweating in heat",
        description:
          "Tropical and humid weather consumers consistently skip daily sunscreen because existing mineral and heavy chemical sunscreens trigger sweating and leave a chalky film.",
        details: [
          { label: "Target Concern", value: "Daily photoaging & high UV exposure" },
          { label: "User Feedback Point", value: "'I need an SPF that feels like water'" },
        ],
        scientificNote:
          "Over 80% of premature facial aging stems from cumulative ambient UVA/UVB exposure, requiring non-negotiable daily wear.",
      },
      {
        stepNumber: "02",
        title: "Photostable Filter Matrix",
        subtitle: "Hybrid organic filters providing broad-spectrum SPF 50+ PA++++",
        description:
          "Engineered with advanced new-generation chemical and physical UV filters that absorb and disperse both UVA (photo-aging) and UVB (sunburn) rays.",
        details: [
          { label: "SPF Factor", value: "SPF 50+ (tested in-vitro & in-vivo)" },
          { label: "PA Rating", value: "PA++++ (critical wavelength > 370nm)" },
          { label: "Blue Light", value: "Tested protection against high-energy visible light" },
        ],
        scientificNote:
          "Modern organic UV absorbers offer significantly higher photostability without clogging sweat ducts.",
      },
      {
        stepNumber: "03",
        title: "Hydration Fusion System",
        subtitle: "Micro-droplets of Papaya Extract & Hyaluronic Acid",
        description:
          "Suspended in a water-burst emulsion that dissolves upon contact with skin temperature, leaving zero white cast across all Fitzpatrick skin types (I through VI).",
        details: [
          { label: "Texture", value: "Lightweight dewy fluid" },
          { label: "Finish", value: "Luminous, non-greasy glow with zero chalkiness" },
          { label: "Under Makeup", value: "Functions as a gripping, hydrating primer" },
        ],
        scientificNote:
          "Water-lock emulsion technology prevents the evaporation of intracellular water in air-conditioned environments.",
      },
      {
        stepNumber: "04",
        title: "Clinical Efficacy & Water Resistance",
        subtitle: "Validated broad-spectrum retention under sweat and heat",
        description:
          "Formulation evaluated for sweat resistance and eye-safety tolerance to prevent stinging during outdoor activity or workouts.",
        details: [
          { label: "Eye Safety", value: "Ophthalmologically tested non-stinging" },
          { label: "Residue Test", value: "Transparent on deep skin tones" },
        ],
        scientificNote:
          "Formulated without octinoxate and oxybenzone, respecting marine ecosystems.",
      },
      {
        stepNumber: "05",
        title: "Final Product & Global Readiness",
        subtitle: "Everyday shield built for worldwide climates",
        description:
          "Packaged in an airless pump to prevent filter oxidation, ensuring stable protection in temperatures up to 45°C.",
        details: [
          { label: "Packaging", value: "Precision airless pump tube" },
          { label: "Routine Slot", value: "Morning Protection (Step 03)" },
        ],
        scientificNote:
          "The cornerstone of any skin routine: protects every active and investment you put on your face.",
      },
    ],
  },
];

/* ==========================================================================
   CONSUMER INTELLIGENCE: "WE LISTEN BEFORE WE BUILD"
   ========================================================================== */
export const consumerIntelligenceStages: IntelligenceStage[] = [
  {
    id: "stage-1",
    number: "01",
    title: "Consumer Signal",
    subtitle: "Real-time query detection across millions of touchpoints",
    description:
      "We aggregate unfiltered consumer inquiries, reviews, and community conversations. We don't ask focus groups in boardrooms; we listen to real morning and evening struggles.",
    signalSample: "“Every moisturizer I use during Indian monsoons causes tiny forehead bumps.”",
    metric: "120,000+ monthly signals analyzed",
    outcome: "Identifies unmet formulation voids before traditional FMCGs even draft briefs.",
  },
  {
    id: "stage-2",
    number: "02",
    title: "Data & Trend Synthesis",
    subtitle: "Translating conversational pain points into chemical parameters",
    description:
      "Our intelligence layer cross-references conversational queries with ambient humidity data, dermatological research, and search volume shifts.",
    signalSample: "Cross-correlating humidity > 75% with 3.4x spike in requests for 'oil-free dewy finish'.",
    metric: "15 proprietary consumer clusters",
    outcome: "Discovers that consumers don't want 'matte'; they want 'dewy without grease'.",
  },
  {
    id: "stage-3",
    number: "03",
    title: "Consumer Insight",
    subtitle: "Defining the exact formulation hypothesis",
    description:
      "We distill raw data into an actionable scientific brief: create a water-light gel emulsion containing fruit enzymes and hyaluronic acid that hydrates without lipid occlusion.",
    signalSample: "Formulate a tropical hydration barrier that locks moisture while breathing.",
    metric: "98% brief precision",
    outcome: "Clear directional mandate for R&D formulation chemists.",
  },
  {
    id: "stage-4",
    number: "04",
    title: "Clean R&D & Formulation",
    subtitle: "Rapid prototyping with dermatologist and chemist panels",
    description:
      "Our laboratories formulate with clean, certified active molecules, pairing traditional botanical wisdom with high-potency actives like Salicylic Acid, Niacinamide, and Peptides.",
    signalSample: "14 iterations tested to eliminate stickiness while maintaining 24-hr hydration.",
    metric: "Average 45-day formulation sprint",
    outcome: "High-efficacy, toxin-free prototypes ready for clinical safety verification.",
  },
  {
    id: "stage-5",
    number: "05",
    title: "Direct-to-Consumer Pilot",
    subtitle: "Small-batch community launch for real-world validation",
    description:
      "Products launch through our digital ecosystem first. Early adopters experience the product in their real homes, gyms, and commutes : not sterile test chambers.",
    signalSample: "Pilot batch of 5,000 units dispatched to verified community panel.",
    metric: "4.7 / 5.0 initial satisfaction threshold required",
    outcome: "Immediate diagnostic telemetry on scent, texture, and packaging dispensing.",
  },
  {
    id: "stage-6",
    number: "06",
    title: "Rapid Feedback Telemetry",
    subtitle: "Granular post-purchase sentiment tracking",
    description:
      "Our AI review engine categorizes thousands of reviews by skin profile, climate zone, and usage duration to detect subtle improvement opportunities.",
    signalSample: "“Love the texture, but the pump dispenses a bit too much product in one press.”",
    metric: "Sentiment mapped across 8 dimensions",
    outcome: "Granular packaging and formula adjustments initiated immediately.",
  },
  {
    id: "stage-7",
    number: "07",
    title: "Refined Better Product",
    subtitle: "Continuous versioning of beauty essentials",
    description:
      "Unlike traditional beauty products that stay unchanged on retail shelves for a decade, Honasa treats formulations like software: continually listening, refining, and perfecting.",
    signalSample: "Pump aperture re-engineered; humectant ratio fine-tuned for ultimate feather-light finish.",
    metric: "Generation 2.0 deployed in 90 days",
    outcome: "Iconic consumer favorites that get better with every batch.",
  },
];

/* ==========================================================================
   SUSTAINABILITY & IMPACT: "BEAUTY WITH A PURPOSE"
   ========================================================================== */
export const sustainabilityMetrics: SustainabilityMetric[] = [
  {
    id: "sus-plastic",
    metric: "100%+",
    unit: "Plastic Positive",
    label: "Recycling Surplus",
    description:
      "We recycle more plastic than we consume across our supply chains, verified by independent plastic waste management auditors.",
    verifiedBy: "Certified Environmental Audit Protocol",
  },
  {
    id: "sus-trees",
    metric: "600,000+",
    unit: "Trees Planted",
    label: "Plant Goodness Initiative",
    description:
      "Every order placed on Mamaearth links directly to a tree planted with local farmers, complete with verified geotags and growth updates.",
    verifiedBy: "SankalpTaru & Verified Geo-Tagging",
  },
  {
    id: "sus-toxin",
    metric: "Zero",
    unit: "Harsh Chemicals",
    label: "Clean Standard",
    description:
      "Formulated strictly without parabens, mineral oils, SLS, sulfates, or harmful phthalates. Certified Cruelty-Free across the portfolio.",
    verifiedBy: "Made Safe & PETA Certifications",
  },
  {
    id: "sus-sourcing",
    metric: "Ethical",
    unit: "Traceable Supply",
    label: "Botanical Sourcing",
    description:
      "Partnering with indigenous growers for traditional ingredients like turmeric, saffron, amla, and aloe vera, ensuring fair agricultural livelihoods.",
    verifiedBy: "Direct Farmer Fair-Trade Pacts",
  },
];

/* ==========================================================================
   CORPORATE LAYER: "INSIDE HONASA"
   ========================================================================== */
export const leadershipMembers: LeadershipMember[] = [
  {
    name: "Varun Alagh",
    role: "Co-Founder, Chairman & CEO",
    bio: "Ex-Unilever & Coca-Cola leader who co-founded Honasa with a vision to build digital-first, purpose-driven brands for the modern global consumer.",
    highlight: "Architecting the tech and supply platform powering India's fastest-growing beauty house.",
  },
  {
    name: "Ghazal Alagh",
    role: "Co-Founder & Chief Innovation Officer",
    bio: "Passionate innovator and corporate leader who pioneered toxin-free mother and baby care before scaling the House of Brands to active skincare and haircare.",
    highlight: "Leading consumer-first R&D, product philosophy, and brand community engagement.",
  },
  {
    name: "Raman Preet Sohi",
    role: "Chief Financial Officer",
    bio: "Seasoned finance strategist driving capital allocation, public market governance, and global expansion frameworks.",
    highlight: "Stewarding robust unit economics and transparent governance across all operating units.",
  },
  {
    name: "Dr. Ananya Ray",
    role: "VP of Formulation R&D",
    bio: "Doctorate in cosmetic chemistry with 18+ years optimizing bioactive skin permeation and clean dermatological formulation.",
    highlight: "Directing the advanced laboratory facilities behind The Derma Co. and Aqualogica.",
  },
];

export const careerRoles: CareerRole[] = [
  {
    title: "Staff AI/ML Engineer : Personalization & RAG",
    department: "Engineering & AI",
    location: "Gurugram / Hybrid",
    type: "Full-time",
    description:
      "Design and deploy high-throughput recommendation architectures, conversational LLM beauty concierges, and dynamic routine synthesis engines.",
  },
  {
    title: "Lead Cosmetic Chemist : Active Skincare",
    department: "R&D & Science",
    location: "Innovation Lab, India",
    type: "Full-time",
    description:
      "Formulate breakthrough active delivery mechanisms, high-SPF fluid matrices, and clinical-grade formulations tailored to multi-climate performance.",
  },
  {
    title: "Senior Product Designer : Global Commerce UX",
    department: "Product & UX",
    location: "India / Remote",
    type: "Full-time",
    description:
      "Shape the world's most intuitive House of Brands digital experience, bridging conversational AI consultation with effortless cross-brand cart and routine building.",
  },
  {
    title: "Brand Creative Director : Global Portfolio",
    department: "Brand & Creative",
    location: "India / Hybrid",
    type: "Full-time",
    description:
      "Lead visual editorial direction, packaging identity, and storytelling campaigns that compete on the global luxury and masstige stage.",
  },
];

/* ==========================================================================
   COMMUNITY REVIEWS ("REAL PEOPLE. REAL ROUTINES.")
   ========================================================================== */
export const communityReviews: CommunityReview[] = [
  {
    id: "rev-1",
    author: "Kavita S.",
    location: "India",
    climate: "Tropical / Humid",
    skinType: "Oily & Acne-Prone",
    ageGroup: "25–34",
    concern: "Acne & Post-Acne Marks",
    rating: 5,
    date: "August 18, 2026",
    title: "Finally, an active routine that does not melt off in Indian heat",
    comment:
      "I was terrified of layering salicylic acid and sunscreen because my T-zone gets drenched in humidity. The AI suggested The Derma Co 2% BHA paired with the Aqualogica Dewy SPF. Within 3 weeks, my pores are noticeably clearer and I haven't had a single cystic breakout.",
    verifiedPurchase: true,
    pairedProducts: ["tdc-salicylic-serum", "aq-glow-sunscreen"],
    helpfulCount: 142,
  },
  {
    id: "rev-2",
    author: "Zainab Al-M.",
    location: "UAE",
    climate: "Desert Arid / High UV",
    skinType: "Combination / Dehydrated",
    ageGroup: "30–39",
    concern: "Dryness & Sun Protection",
    rating: 5,
    date: "August 12, 2026",
    title: "The climate switcher recommended exactly what UAE skin needs",
    comment:
      "Moving between 44°C outdoor heat and dry air-conditioned offices was wrecking my skin barrier. The routine built by Honasa paired the Dewy Gel with the Haldi Vitamin C serum. My skin feels bouncy throughout a 10-hour workday.",
    verifiedPurchase: true,
    pairedProducts: ["aq-hydrate-gel", "ds-haldi-vitc-serum", "aq-glow-sunscreen"],
    helpfulCount: 89,
  },
  {
    id: "rev-3",
    author: "Rohan D.",
    location: "India",
    climate: "Moderate / Urban",
    skinType: "Normal to Dry Hair",
    ageGroup: "28–35",
    concern: "Hair Frizz & Grooming",
    rating: 5,
    date: "August 04, 2026",
    title: "Simple 3-step hair and face routine that takes 4 minutes",
    comment:
      "I hate complicated 10-step regimens. Reginald face wash + BBlunt intense moisture shampoo solved my morning grooming completely. Quality products without the fluff.",
    verifiedPurchase: true,
    pairedProducts: ["rg-charcoal-face-wash", "bb-intense-moisture-shampoo"],
    helpfulCount: 64,
  },
  {
    id: "rev-4",
    author: "Sarah L.",
    location: "UK",
    climate: "Cool / Dry Winters",
    skinType: "Dry & Sensitive",
    ageGroup: "35–44",
    concern: "Ageing & Dullness",
    rating: 5,
    date: "July 29, 2026",
    title: "Luminéve Overnight Renewal is a revelation",
    comment:
      "The peptide texture is luxurious without being suffocating. I wake up with rested, luminous skin even when heating dries out the bedroom. Love that I can shop across the Honasa house in a single basket.",
    verifiedPurchase: true,
    pairedProducts: ["lu-night-repair-cream", "ds-haldi-vitc-serum"],
    helpfulCount: 112,
  },
];
