export interface ProductSpec {
  parameter: string;
  value: string;
  unit?: string;
}

export interface Product {
  id: string;
  slug: string;
  sku?: string;
  name: string;
  category: string;
  brandSlug: string;
  price?: number | null;
  stockStatus?: "ready" | "indent" | "habis";
  images: string[];
  shortSpecs: string[];
  specs: Record<string, string>;
  description: string;
  warranty?: string;
  datasheetUrl?: string;
  links?: Partial<Record<"tokopedia" | "shopee" | "tiktokshop" | "blibli", string>>;
  badges?: ("baru" | "sni" | "promo")[];
  featured?: boolean;
  createdAt: string;
}

export type CategorySlug = "ac" | "alat-ukur" | "pompa" | "water-heater" | "safety" | "material-elektrikal";
export type MarketplaceId = "tokopedia" | "shopee" | "tiktokshop" | "blibli";