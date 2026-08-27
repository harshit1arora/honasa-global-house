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
    compliance: "Prices include applicable taxes.",
  },
  {
    code: "AE",
    country: "United Arab Emirates",
    city: "United Arab Emirates",
    currency: "AED",
    symbol: "AED ",
    flag: "🇦🇪",
    rate: 0.044,
    climate: "Arid & very hot",
    climateNote: "Dry heat and air-conditioning call for extra hydration under SPF.",
    delivery: "3–5 days",
    compliance: "Ingredient listings follow GCC labelling requirements.",
  },
  {
    code: "GB",
    country: "United Kingdom",
    city: "United Kingdom",
    currency: "GBP",
    symbol: "£",
    flag: "🇬🇧",
    rate: 0.0095,
    climate: "Cool & damp",
    climateNote: "Lower UV in winter, but barrier support matters year round.",
    delivery: "4–7 days",
    compliance: "Formulations shown meet UK cosmetic regulation labelling.",
  },
  {
    code: "US",
    country: "United States",
    city: "United States",
    currency: "USD",
    symbol: "$",
    flag: "🇺🇸",
    rate: 0.012,
    climate: "Four seasons",
    climateNote: "Routines shift seasonally : lighter in summer, richer in winter.",
    delivery: "4–8 days",
    compliance: "Sun care claims follow local OTC labelling conventions.",
  },
  {
    code: "SG",
    country: "Singapore",
    city: "Singapore",
    currency: "SGD",
    symbol: "S$",
    flag: "🇸🇬",
    rate: 0.016,
    climate: "Tropical",
    climateNote: "Year-round humidity : lightweight layers, high sun protection.",
    delivery: "3–6 days",
    compliance: "Product availability varies by local registration.",
  },
  {
    code: "AU",
    country: "Australia",
    city: "Australia",
    currency: "AUD",
    symbol: "A$",
    flag: "🇦🇺",
    rate: 0.018,
    climate: "High UV",
    climateNote: "Very high UV index : sun care is the non-negotiable step.",
    delivery: "5–9 days",
    compliance: "Sunscreen products are subject to local therapeutic listing.",
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
