export const brandCategories = [
  {
    id: 'alat-ukur',
    title: 'Alat Ukur',
    category: 'alat-ukur',
    isCarousel: true,
    brands: [
      { name: 'Sanwa', logo: '/alatukur/sanwa.webp' },
      { name: 'Hioki', logo: '/alatukur/hioki.webp' },
      { name: 'SEW', logo: '/alatukur/sew.webp' },
      { name: 'Lutron', logo: '/alatukur/lutron.webp' },
      { name: 'Hozan', logo: '/alatukur/hozan.webp' },
      { name: 'Goot', logo: '/alatukur/goot.webp' },
      { name: 'Appa', logo: '/alatukur/appa.webp' },
      { name: 'Sanfix', logo: '/alatukur/sanfix.webp' },
      { name: 'Owon', logo: '/alatukur/owon.webp' },
    ],
  },
  {
    id: 'ac',
    title: 'Air Conditioner',
    category: 'ac',
    isCarousel: false,
    brands: [
      { name: 'Daikin', logo: '/brands/daikin.webp' },
      { name: 'Panasonic', logo: '/brands/panasonic-ac.webp' },
      { name: 'Mitsubishi Electric', logo: '/brands/mitsubishi-electric-ac.webp' },
      { name: 'LG', logo: '/brands/lg-ac.webp' },
      { name: 'Sharp', logo: '/brands/sharp-ac.webp' },
      { name: 'Gree', logo: '/brands/gree.webp' },
    ],
  },
  {
    id: 'pompa',
    title: 'Pompa Air',
    category: 'pompa',
    isCarousel: false,
    brands: [
      { name: 'Grundfos', logo: '/brands/grundfos.webp' },
      { name: 'Ebara', logo: '/brands/ebara.webp' },
      { name: 'Shimizu', logo: '/brands/shimizu.webp' },
      { name: 'Tsurumi', logo: '/brands/tsurumi.webp' },
      { name: 'KSB', logo: '/brands/ksb.webp' },
    ],
  },
  {
    id: 'water-heater',
    title: 'Water Heater',
    category: 'water-heater',
    isCarousel: false,
    brands: [
      { name: 'Ariston', logo: '/brands/ariston.webp' },
      { name: 'Rheem', logo: '/brands/rheem.webp' },
      { name: 'A.O. Smith', logo: '/brands/ao-smith.webp' },
      { name: 'Ferroli', logo: '/brands/ferroli.webp' },
    ],
  },
  {
    id: 'safety',
    title: 'Alat Safety (K3)',
    category: 'safety',
    isCarousel: false,
    brands: [
      { name: '3M', logo: '/brands/3m.webp' },
      { name: 'Honeywell', logo: '/brands/honeywell.webp' },
      { name: 'Krisbow', logo: '/brands/krisbow.webp' },
      { name: "King's", logo: '/brands/kings.webp' },
      { name: 'Dräger', logo: '/brands/drager.webp' },
      { name: 'MSA', logo: '/brands/msa.webp' },
    ],
  },
  {
    id: 'electrical',
    title: 'Material Elektrikal',
    category: 'electrical',
    isCarousel: false,
    brands: [
      { name: 'Schneider Electric', logo: '/brands/schneider-electric.webp' },
      { name: 'ABB', logo: '/brands/abb.webp' },
      { name: 'Siemens', logo: '/brands/siemens.webp' },
      { name: 'Legrand', logo: '/brands/legrand.webp' },
      { name: 'Mitsubishi Electric', logo: '/brands/mitsubishi-electric.webp' },
      { name: 'Panasonic', logo: '/brands/panasonic-electrical.webp' },
    ],
  },
]

export function getBrandsByCategory(categoryId: string) {
  const cat = brandCategories.find(c => c.category === categoryId)
  return cat?.brands || []
}

export function getCategoryById(id: string) {
  return brandCategories.find(c => c.id === id)
}

export const allBrands = brandCategories.flatMap(c => c.brands)