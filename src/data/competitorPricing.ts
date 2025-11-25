export type CarrierPricing = {
  name: string;
  originCountry: string;
  originRegion: string;
  flag: string;
  perMB: number;
  perMinute: number;
  perSMS: number;
  source: string;
  lastUpdated: string;
};

export const COMPETITOR_PRICING: CarrierPricing[] = [
  {
    name: "Vodafone UK",
    originCountry: "UK",
    originRegion: "Europe",
    flag: "🇬🇧",
    perMB: 0.05,
    perMinute: 0.50,
    perSMS: 0.10,
    source: "Vodafone UK Roaming Rates",
    lastUpdated: "2024"
  },
  {
    name: "Orange France",
    originCountry: "France",
    originRegion: "EU",
    flag: "🇫🇷",
    perMB: 0.08,
    perMinute: 0.60,
    perSMS: 0.15,
    source: "Orange France Roaming Rates",
    lastUpdated: "2024"
  },
  {
    name: "T-Mobile USA",
    originCountry: "USA",
    originRegion: "NorthAmerica",
    flag: "🇺🇸",
    perMB: 0.10,
    perMinute: 0.75,
    perSMS: 0.20,
    source: "T-Mobile USA Roaming Rates",
    lastUpdated: "2024"
  },
  {
    name: "Deutsche Telekom",
    originCountry: "Germany",
    originRegion: "EU",
    flag: "🇩🇪",
    perMB: 0.06,
    perMinute: 0.55,
    perSMS: 0.12,
    source: "Deutsche Telekom Roaming Rates",
    lastUpdated: "2024"
  },
  {
    name: "Telefonica Spain",
    originCountry: "Spain",
    originRegion: "EU",
    flag: "🇪🇸",
    perMB: 0.07,
    perMinute: 0.58,
    perSMS: 0.13,
    source: "Telefonica Spain Roaming Rates",
    lastUpdated: "2024"
  }
];

