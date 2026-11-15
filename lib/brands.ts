export interface Brand {
  slug: string;
  name: string;
  logo: string; // path to .webp file in public/brands/
  categories: string[];
}

export const measuringBrands: Brand[] = [
  { slug: "sanwa", name: "Sanwa", logo: "/brands/sanwa.webp", categories: ["alat-ukur"] },
  { slug: "hioki", name: "Hioki", logo: "/brands/hioki.webp", categories: ["alat-ukur"] },
  { slug: "sew", name: "SEW", logo: "/brands/sew.webp", categories: ["alat-ukur"] },
  { slug: "lutron", name: "Lutron", logo: "/brands/lutron.webp", categories: ["alat-ukur"] },
  { slug: "hozan", name: "Hozan", logo: "/brands/hozan.webp", categories: ["alat-ukur"] },
  { slug: "goot", name: "Goot", logo: "/brands/goot.webp", categories: ["alat-ukur"] },
  { slug: "appa", name: "Appa", logo: "/brands/appa.webp", categories: ["alat-ukur"] },
  { slug: "sanfix", name: "Sanfix", logo: "/brands/sanfix.webp", categories: ["alat-ukur"] },
  { slug: "owon", name: "Owon", logo: "/brands/owon.webp", categories: ["alat-ukur"] },
];

export const acBrands: Brand[] = [
  { slug: "daikin", name: "Daikin", logo: "/brands/daikin.webp", categories: ["ac"] },
  { slug: "panasonic-ac", name: "Panasonic", logo: "/brands/panasonic-ac.webp", categories: ["ac"] },
  { slug: "mitsubishi-electric-ac", name: "Mitsubishi Electric", logo: "/brands/mitsubishi-electric-ac.webp", categories: ["ac", "material-elektrikal"] },
  { slug: "sharp-ac", name: "Sharp", logo: "/brands/sharp-ac.webp", categories: ["ac"] },
  { slug: "lg-ac", name: "LG", logo: "/brands/lg-ac.webp", categories: ["ac"] },
  { slug: "gree", name: "Gree", logo: "/brands/gree.webp", categories: ["ac"] },
];

export const pumpBrands: Brand[] = [
  { slug: "grundfos", name: "Grundfos", logo: "/brands/grundfos.webp", categories: ["pompa"] },
  { slug: "shimizu", name: "Shimizu", logo: "/brands/shimizu.webp", categories: ["pompa"] },
  { slug: "panasonic-pump", name: "Panasonic", logo: "/brands/panasonic-pump.webp", categories: ["pompa"] },
  { slug: "sanyo", name: "Sanyo", logo: "/brands/sanyo.webp", categories: ["pompa"] },
  { slug: "ebara", name: "Ebara", logo: "/brands/ebara.webp", categories: ["pompa"] },
  { slug: "torishima", name: "Torishima", logo: "/brands/torishima.webp", categories: ["pompa"] },
];

export const safetyBrands: Brand[] = [
  { slug: "3m", name: "3M", logo: "/brands/3m.webp", categories: ["safety"] },
  { slug: "krisbow", name: "Krisbow", logo: "/brands/krisbow.webp", categories: ["safety"] },
  { slug: "kings", name: "King's", logo: "/brands/kings.webp", categories: ["safety"] },
  { slug: "cheetah", name: "Cheetah", logo: "/brands/cheetah.webp", categories: ["safety"] },
  { slug: "drager", name: "Dräger", logo: "/brands/drager.webp", categories: ["safety"] },
  { slug: "honeywell", name: "Honeywell", logo: "/brands/honeywell.webp", categories: ["safety"] },
];

export const electricalBrands: Brand[] = [
  { slug: "schneider-electric", name: "Schneider Electric", logo: "/brands/schneider-electric.webp", categories: ["material-elektrikal"] },
  { slug: "abb", name: "ABB", logo: "/brands/abb.webp", categories: ["material-elektrikal"] },
  { slug: "siemens", name: "Siemens", logo: "/brands/siemens.webp", categories: ["material-elektrikal"] },
  { slug: "legrand", name: "Legrand", logo: "/brands/legrand.webp", categories: ["material-elektrikal"] },
  { slug: "mitsubishi-electric", name: "Mitsubishi Electric", logo: "/brands/mitsubishi-electric.webp", categories: ["material-elektrikal", "ac"] },
  { slug: "panasonic-electrical", name: "Panasonic", logo: "/brands/panasonic-electrical.webp", categories: ["material-elektrikal", "ac", "pompa"] },
];

export const allBrands = [
  ...measuringBrands,
  ...acBrands,
  ...pumpBrands,
  ...safetyBrands,
  ...electricalBrands,
];

export function getBrandsByCategory(category: string): Brand[] {
  return allBrands.filter((b) => b.categories.includes(category));
}