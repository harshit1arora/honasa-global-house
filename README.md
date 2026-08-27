# 🌿 Honasa Global House of Brands
### *Eight Specialized Houses. One Unified Regimen.*

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deploys%20Instant-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TanStack Router](https://img.shields.io/badge/TanStack-Router-FF4154?style=for-the-badge&logo=tanstack&logoColor=white)](https://tanstack.com/router)

---

## 📌 Executive Summary

**Honasa Global House** is a category-defining multi-brand personal care ecosystem designed for **Honasa Consumer Limited** (NSE & BSE listed). Rather than fragmenting digital-first brands into isolated storefronts, this platform unifies **eight specialized houses** into a single, climate-adaptive routine orchestrator:

- 🌿 **Mamaearth**: Natural Botanical Science & Toxin-Free Care
- 🧪 **The Derma Co.**: Clinical Actives & Dermaceutical Concentrates (Salicylic BHA, Niacinamide)
- 💧 **Aqualogica**: Water-Light Gel Hydration & Dewy Broad-Spectrum Sunscreens
- 💇 **BBlunt**: Salon-Grade Haircare & Anti-Humidity Damage Repair
- 🍃 **Dr. Sheth's**: Indian Ingredient Fusion & Vitamin C Antioxidant Defense
- 💄 **Staze**: 24H High-Pigment & Longwear Comfort Cosmetics
- ✨ **Luminéve**: Luxury Peptide Night Repair & Barrier Renewal
- 🧔 **Reginald Men**: Streamlined Men's Grooming & Activated Charcoal Cleanse

---

## 🧪 What We'd Validate (Product Hypotheses & Success Metrics)

Rather than presenting pre-launch estimates as historical results, our architecture is built around clear, falsifiable hypotheses to validate in live market trials:

| Hypothesis | Proposed Mechanism | Metric to Validate |
| :--- | :--- | :--- |
| **Cross-House Regimen Bundling** | Grouping Cleanse + Treat + Protect steps across 2-3 houses reduces friction compared to multi-site shopping. | **Basket Size & AOV Lift** vs single-brand baseline purchase history. |
| **Active Bio-Compatibility Checklist** | Verifying active ingredient compatibility (e.g. Salicylic Acid + Niacinamide) neutralizes buyer anxiety about ingredient clashing. | **Cart-to-Checkout Conversion Rate** for multi-active regimens. |
| **Climate Shift Recalibration** | Adjusting routine texture when users travel (e.g. Gurgaon monsoon to Dubai heat) maintains product efficacy. | **45-Day Retention & Reorder Propensity** among traveling cohorts. |
| **Natural Language AI Consultation** | Conversational diagnostic intent parsing delivers faster product matching than traditional 20-question quiz forms. | **Time-to-Routine-Selection** (< 90 seconds target). |

---

## 🎬 Golden Journey Rehearsed Demo Script (90 Seconds)

To present a zero-friction, demo-safe golden journey live to stakeholders:

1. **Step 1 — Natural Input**: Open AI Concierge and type:
   > *"I have acne, oily skin, live in Gurgaon, travelling to Dubai next week, budget under ₹2,000"*
2. **Step 2 — Explainable Routine**: AI synthesizes a 3-step routine across houses (Mamaearth Ubtan Wash + The Derma Co. 2% Salicylic + Aqualogica Dewy SPF) under ₹2,000. Inspect the visible *"Why this?"* rationale card for active ingredients.
3. **Step 3 — Dynamic Budget Adjuster**: Click **"Under ₹1,500"** to watch the system intelligently swap to value formulas with live price updates.
4. **Step 4 — Climate Transition**: Click **"Travelling to Dubai?"** to trigger side-by-side climate recalibration (Gurgaon monsoon vs Dubai 42°C heat), showing why heavy moisture was swapped for water-gel hydration and photostable PA++++ UV protection.
5. **Step 5 — Plain Language Explanation**: Ask *"why did you change this?"* to hear plain-language formulation reasoning.
6. **Step 6 — Checkout Flow**: Click **"Add entire routine to cart"** -> Review the **Bio-Compatibility Checklist** (verifying zero active clashes) -> Complete Express Checkout.
7. **Step 7 — Profile & Next Best Action**: Open My Beauty Profile (`Shivang Jain · VIP Member`) to view the saved routine and credible replenishment countdown (*"Sunscreen reorder suggested in 12 days based on 30-day usage"*).

> [!TIP]
> **Demo Resilience Note**: The application operates with 100% offline RAG knowledge fallback if the Gemini API key is unpopulated or network connection drops. A 90-second screen-recording backup is also archived in `scratch/demo_backup.mp4`.

---

## 🛠️ Technology Stack & System Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      HONASA CORE ENGINE ARCHITECTURE                    │
├─────────────────────────────────────────────────────────────────────────┤
│  USER PROFILE    : Skin Type, Concerns, Target Country, Climate History  │
│       │                                                                 │
│  RULES ENGINE    : Bio-Compatibility Matrix, pH Limits, Active Clashes    │
│       │                                                                 │
│  TELEMETRY API   : Real-time Weather, Humidity, Temp, UV Index Telemetry│
│       │                                                                 │
│  LLM REASONER    : Gemini API + RAG Knowledge Fallback Engine          │
│       │                                                                 │
│  OUTPUT LAYER    : 1-Click Bio-Compatible Regimen Bundles               │
└─────────────────────────────────────────────────────────────────────────┘
```

### 1. Frontend & Core Framework
- **React 19**: Utilizing high-performance concurrent hooks (`useMemo`, `useCallback`, `useState`, `useEffect`).
- **TanStack Router**: Type-safe, file-based routing with automatic code-splitting (`/brands`, `/shop`, `/science`, `/journal`, `/about`, `/our-values`, etc.).
- **Vite 8 & Bun**: Lightning-fast native runtime compilation and HMR development server.

### 2. Styling & Design Token System
- **Tailwind CSS v4 & OKLCH Color Palette**: Custom-curated color tokens (`--color-clay`, backdrop blurs, and smooth micro-animations).
- **Lucide Icons**: Crisp, accessible iconography across all interactive elements.

### 3. AI & Search RAG Layer
- **Google Gemini API + RAG Engine**: Server-side / client-safe conversational search (`chat-service.ts` + `knowledge.ts`).
- **Fuzzy Product Recognition**: Identifies misspellings, ingredient synonyms (*"vit c facewash"*, *"ubtan"*, *"rosemary shampoo"*, *"salicylic serum"*), and maps user queries to verified SKUs.

### 4. Client State & LocalStorage Persistence
- **Site Context API (`site-state.tsx`)**: Centralized reactive state managing cart lines, currency conversion, country markets, saved routines, and authenticated demo profile (`Shivang Jain · VIP Member`) with `localStorage` persistence across page reloads.

---

## ⚡ Quick Start & Local Setup

### Prerequisites
- **Node.js**: `v20.19.0+` or `v22.12.0+`
- **Package Manager**: `bun` (recommended) or `npm`

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/honasa/honasa-global-house.git
   cd honasa-global-house
   ```

2. **Install Dependencies**:
   ```bash
   bun install
   # or
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE
   ```

4. **Launch Local Development Server**:
   ```bash
   bun run dev
   # or
   npm run dev
   ```
   Open `http://localhost:8080/` in your browser.

---

## 📜 Compliance & Ethics

© 2026 **Honasa Consumer Limited**. All rights reserved. Built for global climate-adaptive personal care innovation across India, UAE, UK, US, Singapore, and Australia.
