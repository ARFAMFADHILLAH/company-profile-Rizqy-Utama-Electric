export interface Category {
  slug: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  image: string; // path to category image
  color: string; // category color (for future use)
}

export const categories: Category[] = [
  {
    slug: "ac",
    title: "AC (Air Conditioner)",
    description: "AC Split, Cassette, Standing Floor, VRF, Inverter, Spare Part & Freon",
    icon: "AirVent",
    image: "/images/produk/ac.jpg",
    color: "#00A3C4",
  },
  {
    slug: "alat-ukur",
    title: "Alat Ukur Listrik",
    description: "Multimeter, Clamp Meter, Insulation Tester, Earth Tester, Thermometer IR, Pressure Gauge",
    icon: "Gauge",
    image: "/images/produk/alat-ukur.jpg",
    color: "#1E5AA8",
  },
  {
    slug: "pompa",
    title: "Pompa Air & Industri",
    description: "Pompa Celup, Jet Pump, Booster, Transfer, Submersible, Pompa Industri",
    icon: "Droplets",
    image: "/images/produk/pompa.jpg",
    color: "#2F80ED",
  },
  {
    slug: "water-heater",
    title: "Water Heater",
    description: "Pemanas Air Elektrik, Solar Water Heater, Gas Water Heater",
    icon: "Flame",
    image: "/images/produk/water-heater.jpg",
    color: "#E8590C",
  },
  {
    slug: "safety",
    title: "Alat Safety (K3)",
    description: "Helm, Sepatu Safety, Sarung Tangan, Safety Harness, APAR, Masker & Kacamata",
    icon: "HardHat",
    image: "/images/produk/safety.jpg",
    color: "#FFC20E",
  },
  {
    slug: "material-elektrikal",
    title: "Material Elektrikal",
    description: "Kabel (NYM, NYY, NYYHY), MCB, MCCB, Contactor, Trafo, Box Panel, Aksesoris",
    icon: "Cable",
    image: "/images/produk/material-elektrikal.jpg",
    color: "#5B6B82",
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}