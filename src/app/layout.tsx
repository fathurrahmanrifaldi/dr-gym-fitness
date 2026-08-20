import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Gym Fitness — Train Strong. Pay Less.",
  description:
    "Dr. Gym Fitness hadir sebagai tempat latihan bagi siapa saja yang ingin hidup lebih sehat, membangun kekuatan, dan mencapai bentuk tubuh yang diinginkan. Dengan 30+ equipment, jam operasional setiap hari hingga tengah malam, serta dukungan personal trainer.",
  keywords: [
    "gym",
    "fitness",
    "Bekasi",
    "Tambun Selatan",
    "personal trainer",
    "membership gym",
    "gym murah",
    "gym Bekasi",
  ],
  openGraph: {
    title: "Dr. Gym Fitness — Train Strong. Pay Less.",
    description:
      "Tempat latihan nyaman dengan fasilitas lengkap, trainer berpengalaman, dan pilihan membership yang bersahabat.",
    type: "website",
    locale: "id_ID",
    // TODO: ganti dengan URL & gambar OG asli
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Gym Fitness",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background text-text-secondary font-body antialiased">
        {children}
      </body>
    </html>
  );
}
