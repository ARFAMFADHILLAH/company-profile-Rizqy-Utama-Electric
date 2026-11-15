export const site = {
  name: "Rizqy Utama Electric",
  since: "September 2019",
  hours: "09.00 – 17.00 WIB",
  whatsapp: "6287821916701",
  email: "info@rizqyutamaelectric.com",
  marketplaces: [
    { id: "tokopedia", name: "Tokopedia", url: "https://www.tokopedia.com/rizqyutamaelectric", icon: "tokopedia" },
    { id: "shopee", name: "Shopee", url: "https://shopee.co.id/rizqyutamaelectric", icon: "shopee" },
    { id: "tiktokshop", name: "TikTok Shop", url: "https://www.tiktok.com/@rizqyutamaelectric", icon: "tiktokshop" },
    { id: "blibli", name: "Blibli", url: "https://www.blibli.com/merchant/rizqyutamaelectric", icon: "blibli" },
  ],
  workshops: [
    {
      id: "jakarta",
      name: "Workshop Jakarta",
      address: "Jl. Glodok Jaya No.3, Mangga Besar, Jakarta",
      phone: "+62 878-2191-6701",
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.456789012345!2d106.81234567890123!3d-6.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f12345678901%3A0x1234567890abcdef!2sJl.%20Glodok%20Jaya%20No.3%2C%20Mangga%20Besar%2C%20Jakarta%20Barat!5e0!3m2!1sid!2sid!4v1234567890123!5m2!1sid!2sid",
      mapsLink: "https://maps.google.com/?q=Jl.+Glodok+Jaya+No.3+Jakarta+Barat",
    },
    {
      id: "bekasi",
      name: "Workshop Bekasi",
      address: "Jl. Parpostel No.111, Jatiasih, Bekasi",
      phone: "+62 878-2191-6701",
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.456789012345!2d106.98765432109876!3d-6.234567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f12345678901%3A0x1234567890abcdef!2sJl.%20Parpostel%20No.111%2C%20Jatiasih%2C%20Bekasi!5e0!3m2!1sid!2sid!4v1234567890123!5m2!1sid!2sid",
      mapsLink: "https://maps.google.com/?q=Jl.+Parpostel+No.111+Jatiasih+Bekasi",
    },
  ],
};

export type Marketplace = typeof site.marketplaces[0];
export type Workshop = typeof site.workshops[0];