export const marketplaceLinks = [
  { 
    name: 'Instagram', 
    url: 'https://www.instagram.com/rizqyutamaa', 
    icon: 'instagram' 
  },
  { 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/company/rizqy-utama-store/', 
    icon: 'linkedin' 
  },
  { 
    name: 'Shopee', 
    url: 'https://id.shp.ee/2tXxjAkz', 
    icon: 'shopee' 
  },
  { 
    name: 'TikTok', 
    url: 'https://vt.tiktok.com/ZSqPGBgrD/', 
    icon: 'tiktok' 
  },
  { 
    name: 'Tokopedia', 
    url: 'https://tk.tokopedia.com/ZSbETw6kt/', 
    icon: 'tokopedia' 
  },
  { 
    name: 'Blibli', 
    url: 'https://blibli.onelink.me/GNtk/eeiqdxb6', 
    icon: 'blibli' 
  },
]

export const stats = [
  { label: 'Sejak September', value: '2019', desc: 'Pengalaman & Kepercayaan' },
  { label: 'Official Store', value: '4+', desc: 'Marketplace Terkemuka' },
  { label: 'Produk Original', value: '100%', desc: 'Bergaransi Resmi' },
  { label: 'Pelanggan Puas', value: '10K+', desc: 'B2B & Retail' },
]

// Mono-color simplified SVG icons - Navy color for white background
export const BrandIcons = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor"/>
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="24" height="24" rx="4" fill="currentColor"/>
      <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V9H9V17ZM13 17H11V9H13V17ZM17 17H15V9H17V17ZM8 7C8 7.55 7.55 8 7 8C6.45 8 6 7.55 6 7C6 6.45 6.45 6 7 6C7.55 6 8 6.45 8 7Z" fill="white"/>
    </svg>
  ),
  shopee: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M7 18V6C7 4.89 7.9 4 9 4H15C16.1 4 17 4.89 17 6V18C17 19.1 16.1 20 15 20H9C7.9 20 7 19.1 7 18ZM9 6H15V18H9V6ZM12 11L17 16H7L12 11Z" fill="white"/>
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M12 3C6.48 3 2 7.48 2 13C2 18.52 6.48 23 12 23C17.52 23 22 18.52 22 13C22 7.48 17.52 3 12 3ZM10.5 18V9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5V18H10.5ZM14 18V8C14 7.17 14.67 6.5 15.5 6.5C16.33 6.5 17 7.17 17 8V18H14Z" fill="white"/>
    </svg>
  ),
  tokopedia: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="24" height="24" rx="4" fill="currentColor"/>
      <path d="M7 12H17M12 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  blibli: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="24" height="24" rx="4" fill="currentColor"/>
      <path d="M10 16V8H12V16H10Z" fill="white"/>
      <path d="M14 16V8H16V12C16 11 15 10.5 14 10.5C13 10.5 12 11 12 12V16H14Z" fill="white"/>
    </svg>
  ),
}