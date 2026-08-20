export const WA_NUMBER = "6285119888161";
export const WA_BASE_URL = `https://wa.me/${WA_NUMBER}`;

export const SOCIAL_LINKS = {
  instagram: {
    url: "https://instagram.com/dr.gymfitness",
    handle: "@dr.gymfitness",
  },
  tiktok: {
    url: "https://tiktok.com/@dr.gym4",
    handle: "@dr.gym4",
  },
};

export const GYM_INFO = {
  name: "Dr. Gym Fitness",
  tagline: "Train Strong. Pay Less.",
  description:
    "Tempat latihan untuk membangun tubuh yang lebih kuat, sehat, dan percaya diri.",
  address:
    "Jl. Bumi Sani Permai No. 6, RT. 002/RW. 011, Setiamekar, Kec. Tambun Selatan, Kabupaten Bekasi, Jawa Barat 17510.",
  phone: "0851-1988-8161",
  operatingHours: "06.00 – 00.00",
  operatingDays: "Setiap Hari",
};

export function getWhatsAppUrl(message: string): string {
  return `${WA_BASE_URL}?text=${encodeURIComponent(message)}`;
}
