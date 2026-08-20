import { getWhatsAppUrl } from "@/lib/constants";

export interface PTPackage {
  name: string;
  sessions: number;
  price: string;
  pricePerSession?: string;
  details: string[];
  badge?: string;
  ctaUrl: string;
}

export const ptPackages: PTPackage[] = [
  {
    name: "1 Sesi",
    sessions: 1,
    price: "Rp200.000",
    details: ["1x sesi Personal Trainer"],
    ctaUrl: getWhatsAppUrl(
      "Halo, saya mau tanya soal paket Personal Trainer 1 sesi Dr. Gym Fitness"
    ),
  },
  {
    name: "10 Sesi",
    sessions: 10,
    price: "Rp1.500.000",
    pricePerSession: "Rp150.000/sesi",
    details: ["Berlaku 1 bulan"],
    badge: "PILIHAN POPULER",
    ctaUrl: getWhatsAppUrl(
      "Halo, saya mau tanya soal paket Personal Trainer 10 sesi Dr. Gym Fitness"
    ),
  },
  {
    name: "20 Sesi",
    sessions: 20,
    price: "Rp3.000.000",
    pricePerSession: "Rp150.000/sesi",
    details: ["Gratis 1 sesi", "Berlaku 2 bulan"],
    ctaUrl: getWhatsAppUrl(
      "Halo, saya mau tanya soal paket Personal Trainer 20 sesi Dr. Gym Fitness"
    ),
  },
  {
    name: "30 Sesi",
    sessions: 30,
    price: "Rp4.500.000",
    pricePerSession: "Rp150.000/sesi",
    details: [
      "Gratis 2 sesi",
      "Gratis membership 1 bulan",
      "Berlaku 3 bulan",
    ],
    ctaUrl: getWhatsAppUrl(
      "Halo, saya mau tanya soal paket Personal Trainer 30 sesi Dr. Gym Fitness"
    ),
  },
];
