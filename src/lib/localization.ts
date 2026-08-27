export interface Market {
  code: string;
  country: string;
  city: string;
  currency: string;
  symbol: string;
  flag?: string | undefined;
  /** Illustrative conversion from the INR base price for this prototype. */
  rate: number;
  climate: string;
  climateNote: string;
  delivery: string;
  compliance: string;
}

export const markets: Market[] = [
  {
    code: "IN",
    country: "India",
    city: "India",
    currency: "INR",
    symbol: "₹",
    flag: "🇮🇳",
    rate: 1,
    climate: "Hot & humid",
    climateNote: "Humidity favours gel textures and daily reapplied sun care.",
    delivery: "1–3 days",
    compliance: "Prices include applicable local taxes.",
  },
  {
    code: "AE",
    country: "United Arab Emirates",
    city: "Dubai",
    currency: "AED",
    symbol: "AED ",
    flag: "🇦🇪",
    rate: 0.044,
    climate: "Arid Desert & High UV",
    climateNote: "Dry heat and air-conditioning call for extra hydration under SPF.",
    delivery: "3–5 days",
    compliance: "Formulated to align with regional GCC personal care standards.",
  },
  {
    code: "GB",
    country: "United Kingdom",
    city: "London",
    currency: "GBP",
    symbol: "£",
    flag: "🇬🇧",
    rate: 0.0095,
    climate: "Cool & Damp",
    climateNote: "Lower UV in winter, but barrier support matters year round.",
    delivery: "4–7 days",
    compliance: "Designed for UK and European cosmetic safety guidelines.",
  },
  {
    code: "US",
    country: "United States",
    city: "New York",
    currency: "USD",
    symbol: "$",
    flag: "🇺🇸",
    rate: 0.012,
    climate: "Four Seasons",
    climateNote: "Routines shift seasonally : lighter in summer, richer in winter.",
    delivery: "4–8 days",
    compliance: "Sun care guidance aligns with broad-spectrum FDA testing criteria.",
  },
  {
    code: "SG",
    country: "Singapore",
    city: "Singapore",
    currency: "SGD",
    symbol: "S$",
    flag: "🇸🇬",
    rate: 0.016,
    climate: "Tropical Humidity",
    climateNote: "Year-round humidity : lightweight layers, high sun protection.",
    delivery: "3–6 days",
    compliance: "Availability subject to regional registration and inventory.",
  },
  {
    code: "AU",
    country: "Australia",
    city: "Sydney",
    currency: "AUD",
    symbol: "A$",
    flag: "🇦🇺",
    rate: 0.018,
    climate: "High Oceanic UV",
    climateNote: "Very high UV index : sun care is the non-negotiable step.",
    delivery: "5–9 days",
    compliance: "High-SPF formulas designed for intense solar exposure.",
  },
];

export const defaultMarket = markets[0];

export const formatPrice = (inr: number, market: Market) => {
  const value = inr * market.rate;
  const rounded = market.rate === 1 ? Math.round(value) : Math.round(value * 100) / 100;
  return `${market.symbol}${rounded.toLocaleString("en-US", {
    minimumFractionDigits: market.rate === 1 ? 0 : 2,
    maximumFractionDigits: market.rate === 1 ? 0 : 2,
  })}`;
};
