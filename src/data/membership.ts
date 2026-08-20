import { getWhatsAppUrl } from "@/lib/constants";

export interface MembershipPackage {
  name: string;
  price: string;
  priceNumber: number;
  detail: string;
  badges: string[];
  badgeColors: string[]; // Tailwind color classes for each badge
  ctaLabel: string;
  ctaUrl: string;
  isBestValue?: boolean;
  accentColor?: string;
}

export const membershipPackages: MembershipPackage[] = [
  {
    name: "Visit",
    price: "Rp40.000",
    priceNumber: 40000,
    detail: "Akses gym 1 hari",
    badges: [],
    badgeColors: [],
    ctaLabel: "Coba Latihan",
    ctaUrl: getWhatsAppUrl(
      "Halo, saya mau tanya soal paket Visit (1 hari) Dr. Gym Fitness"
    ),
    accentColor: "accent-green",
  },
  {
    name: "1 Bulan",
    price: "Rp200.000",
    priceNumber: 200000,
    detail: "Akses gym selama 1 bulan",
    badges: [],
    badgeColors: [],
    ctaLabel: "Pilih Paket",
    ctaUrl: getWhatsAppUrl(
      "Halo, saya mau tanya soal membership 1 bulan Dr. Gym Fitness"
    ),
    accentColor: "primary",
  },
  {
    name: "3 Bulan",
    price: "Rp550.000",
    priceNumber: 550000,
    detail: "Setara ± Rp183.000/bulan",
    badges: ["Hemat Rp50.000"],
    badgeColors: ["bg-primary/20 text-primary-glow"],
    ctaLabel: "Pilih Paket",
    ctaUrl: getWhatsAppUrl(
      "Halo, saya mau tanya soal membership 3 bulan Dr. Gym Fitness"
    ),
    accentColor: "primary",
  },
  {
    name: "6 Bulan",
    price: "Rp1.000.000",
    priceNumber: 1000000,
    detail: "Setara ± Rp167.000/bulan",
    badges: ["GRATIS BIAYA ADMIN"],
    badgeColors: ["bg-accent-orange/20 text-accent-orange"],
    ctaLabel: "Pilih Paket",
    ctaUrl: getWhatsAppUrl(
      "Halo, saya mau tanya soal membership 6 bulan Dr. Gym Fitness"
    ),
    accentColor: "accent-orange",
  },
  {
    name: "12 Bulan",
    price: "Rp1.800.000",
    priceNumber: 1800000,
    detail: "Setara Rp150.000/bulan",
    badges: ["GRATIS BIAYA ADMIN", "BEST VALUE"],
    badgeColors: [
      "bg-accent-orange/20 text-accent-orange",
      "bg-primary text-white",
    ],
    ctaLabel: "Pilih Paket",
    ctaUrl: getWhatsAppUrl(
      "Halo, saya mau tanya soal membership 12 bulan Dr. Gym Fitness"
    ),
    isBestValue: true,
    accentColor: "primary",
  },
];
