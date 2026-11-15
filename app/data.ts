'Id: package name verified'
export const companyInfo = {
  name: 'Rizqy Utama Electric',
  tagline: 'Solusi Profesional Kontraktor Elektrikal & Supplier Alat Listrik Terpercaya',
  phone: '+62 812-3456-7890',
  whatsappUrl: 'https://wa.me/6281234567890?text=Halo%20Rizqy%20Utama%20Electric,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20elektrikal.',
  email: 'info@rizqyutamaelectric.com',
  workshops: [
    {
      city: 'Jakarta',
      address: 'Jl. Glodok Jaya No.3 1, RT.1/RW.6, Mangga Besar, Kota Jakarta Barat, DKI Jakarta 11180',
      mapUrl: 'https://maps.google.com/?q=Jl.+Glodok+Jaya+No.3+Jakarta+Barat'
    },
    {
      city: 'Bekasi',
      address: 'Jl. Parpostel No.111, RT.001/RW.001, Jatiasih, Kota Bekasi, Jawa Barat 17425',
      mapUrl: 'https://maps.google.com/?q=Jl.+Parpostel+No.111+Jatiasih+Bekasi'
    }
  ],
  operationalHours: 'Senin - Sabtu: 09.00 - 17.00 WIB'
}

export const services = [
  {
    title: 'Panel Maker',
    description: 'Pembuatan dan perakitan Panel Listrik (MDB, LVMDP, Sub-Distribution, Capacitor Bank) sesuai standar PLN & IEC.',
    icon: 'Cpu'
  },
  {
    title: 'Instalasi Listrik',
    description: 'Pemasangan instalasi tenaga & penerangan untuk gedung komersial, pabrik, perumahan, dan fasilitas umum.',
    icon: 'Zap'
  },
  {
    title: 'Maintenance & Troubleshooting',
    description: 'Perawatan berkala, perbaikan gangguan kelistrikan, dan audit kelayakan instalasi listrik secara profesional.',
    icon: 'Wrench'
  }
]

export const categories = [
  {
    slug: 'ac',
    title: 'AC (Air Conditioner)',
    description: 'Pengadaan & instalasi AC Split, Cassette, Standing Floor, hingga VRV untuk gedung & industri.',
    icon: 'Wind',
    image: '/images/produk/ac.jpg'
  },
  {
    slug: 'alat-ukur',
    title: 'Alat Ukur Listrik',
    description: 'Multimeter, Clamp Meter, Insulation Tester, Earth Tester, dan alat ukur presisi tinggi lainnya.',
    icon: 'Activity',
    image: '/images/produk/alat-ukur.jpg'
  },
  {
    slug: 'pompa',
    title: 'Pompa Air & Industri',
    description: 'Water pump, booster pump, submersible pump untuk kebutuhan rumah tangga hingga pabrik skala besar.',
    icon: 'Droplet',
    image: '/images/produk/pompa.jpg'
  },
  {
    slug: 'water-heater',
    title: 'Water Heater',
    description: 'Pemanas air elektrik, solar water heater, dan gas water heater berkualitas aman & tahan lama.',
    icon: 'Flame',
    image: '/images/produk/water-heater.jpg'
  },
  {
    slug: 'safety',
    title: 'Alat Safety (APD)',
    description: 'Safety helmet, safety shoes, kacamata pelindung, body harness, sarung tangan isolasi, dan rompi keselamatan.',
    icon: 'ShieldAlert',
    image: '/images/produk/safety.jpg'
  },
  {
    slug: 'material-elektrikal',
    title: 'Material Elektrikal Umum',
    description: 'Kabel (NYM, NYY, NYYHY), MCB, MCCB, Contactor, Trafo, Box Panel, dan aksesoris instalasi lengkap.',
    icon: 'Layers',
    image: '/images/produk/material-elektrikal.jpg'
  }
]

export const measuringBrands = [
  { name: 'Sanwa', logo: '/alatukur/sanwa.webp' },
  { name: 'Hioki', logo: '/alatukur/hioki.webp' },
  { name: 'SEW', logo: '/alatukur/sew.webp' },
  { name: 'Lutron', logo: '/alatukur/lutron.webp' },
  { name: 'Hozan', logo: '/alatukur/hozan.webp' },
  { name: 'Goot', logo: '/alatukur/goot.webp' },
  { name: 'Appa', logo: '/alatukur/appa.webp' },
  { name: 'Sanfix', logo: '/alatukur/sanfix.webp' },
  { name: 'Owon', logo: '/alatukur/owon.webp' }
]

export const acBrands = [
  'Daikin', 'Panasonic', 'Mitsubishi Electric', 'Sharp', 'LG', 'Gree'
]

export const pumpBrands = [
  'Grundfos', 'Shimizu', 'Panasonic', 'Sanyo', 'Ebara', 'Torishima'
]

export const safetyBrands = [
  '3M', 'Krisbow', "King's", 'Cheetah', 'Dräger', 'Honeywell'
]

export const electricalBrands = [
  'Schneider Electric', 'ABB', 'Siemens', 'Legrand', 'Mitsubishi Electric', 'Panasonic'
]

// Category config for homepage - 6 categories matching data.ts categories
export const categoryConfig = [
  {
    title: 'Alat Ukur',
    icon: 'Activity',
    desc: 'Multimeter, clamp meter, thermometer infrared, pressure gauge, flowmeter, level meter',
    color: '#1E5AA8',
    tint: '#E5EEF9',
    image: '/images/produk/alat-ukur.jpg'
  },
  {
    title: 'Air Conditioner',
    icon: 'Wind',
    desc: 'AC split, AC cassette, AC standing floor, VRF, inverter, spare part & freon',
    color: '#00A3C4',
    tint: '#E0F6FA',
    image: '/images/produk/ac.jpg'
  },
  {
    title: 'Pompa Air',
    icon: 'Droplet',
    desc: 'Pompa celup, jet pump, booster, transfer pump, submersible, pompa industri',
    color: '#2F80ED',
    tint: '#E6F0FD',
    image: '/images/produk/pompa.jpg'
  },
  {
    title: 'Water Heater',
    icon: 'Flame',
    desc: 'Pemanas air elektrik, solar water heater, gas water heater berkualitas aman & tahan lama',
    color: '#E8590C',
    tint: '#FDEBDD',
    image: '/images/produk/water-heater.jpg'
  },
  {
    title: 'Alat Safety (K3)',
    icon: 'ShieldAlert',
    desc: 'Helm, sepatu safety, sarung tangan, safety harness, APAR, masker & kacamata',
    color: '#FFC20E',
    tint: '#FFF6D6',
    image: '/images/produk/safety.jpg'
  },
  {
    title: 'Material Elektrikal',
    icon: 'Layers',
    desc: 'Kabel (NYM, NYY, NYYHY), MCB, MCCB, Contactor, Trafo, Box Panel, aksesoris lengkap',
    color: '#5B6B82',
    tint: '#E8EDF4',
    image: '/images/produk/material-elektrikal.jpg'
  }
]

// Specs data structure - TODO: isi data asli dari katalog/teknis
export type SpecRow = { parameter: string; value: string; unit?: string }
export type ProductSpec = { category: string; rows: SpecRow[] }

export const productSpecs: ProductSpec[] = [
  { category: 'Alat Ukur', rows: [
    { parameter: 'Range', value: '', unit: 'V/A/Ω' },
    { parameter: 'Akurasi', value: '', unit: '±%' },
    { parameter: 'Resolusi', value: '' },
    { parameter: 'Sertifikat Kalibrasi', value: '' },
  ]},
  { category: 'Air Conditioner', rows: [
    { parameter: 'Kapasitas', value: '', unit: 'BTU/PK' },
    { parameter: 'Daya', value: '', unit: 'Watt' },
    { parameter: 'Refrigeran', value: '' },
    { parameter: 'Garansi', value: '' },
  ]},
  { category: 'Pompa Air', rows: [
    { parameter: 'Daya', value: '', unit: 'HP/kW' },
    { parameter: 'Head Max', value: '', unit: 'm' },
    { parameter: 'Debit', value: '', unit: 'L/min' },
    { parameter: 'Tegangan', value: '', unit: 'V' },
  ]},
  { category: 'Water Heater', rows: [
    { parameter: 'Kapasitas', value: '', unit: 'Liter' },
    { parameter: 'Daya', value: '', unit: 'Watt' },
    { parameter: 'Tipe', value: '' },
    { parameter: 'Standar', value: '' },
  ]},
  { category: 'Alat Safety', rows: [
    { parameter: 'Standar', value: '', unit: 'SNI/EN/ANSI' },
    { parameter: 'Ukuran', value: '' },
    { parameter: 'Material', value: '' },
    { parameter: 'Level Proteksi', value: '' },
  ]},
  { category: 'Material Elektrikal', rows: [
    { parameter: 'Tegangan', value: '', unit: 'V' },
    { parameter: 'Arus', value: '', unit: 'A' },
    { parameter: 'Standar', value: '' },
    { parameter: 'Sertifikasi', value: '' },
  ]},
]

// Industries served
export const industries = [
  'Konstruksi & Properti',
  'Manufaktur',
  'Migas & Pertambangan',
  'Gedung & Perhotelan',
  'Pertanian & Perikanan',
]

// Marketplace config
export const marketplaces = [
  { id: 'tokopedia', name: 'Tokopedia', url: 'https://www.tokopedia.com/rizqyutamaelectric', icon: '/logo/tokopedia.svg' },
  { id: 'shopee', name: 'Shopee', url: 'https://shopee.co.id/rizqyutamaelectric', icon: '/logo/shopee.svg' },
  { id: 'tiktokshop', name: 'TikTok Shop', url: 'https://www.tiktok.com/@rizqyutamaelectric', icon: '/logo/tiktokshop.svg' },
  { id: 'blibli', name: 'Blibli', url: 'https://www.blibli.com/merchant/rizqyutamaelectric', icon: '/logo/blibli.svg' },
]