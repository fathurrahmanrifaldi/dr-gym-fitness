"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Dr. Gym Fitness interior"
          fill
          className="object-cover"
          priority
          quality={85}
          // TODO: ganti dengan foto asli gym
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 gradient-hero-overlay" />
        {/* Extra bottom gradient for seamless transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Eyebrow text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary font-heading font-semibold text-sm sm:text-base tracking-[0.2em] uppercase mb-4"
        >
          Train Strong. Pay Less.
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-text-primary leading-tight tracking-tight"
        >
          Wujudkan Versi{" "}
          <span className="text-gradient-blue">Terbaikmu.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-6 text-text-secondary text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Tempat latihan nyaman dengan fasilitas lengkap, trainer berpengalaman,
          dan pilihan membership yang bersahabat untuk kamu yang ingin membangun
          tubuh lebih kuat dan sehat.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScroll("#membership")}
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-heading font-semibold text-base sm:text-lg px-8 py-4 rounded-xl transition-all duration-300 glow-blue hover:glow-blue-strong w-full sm:w-auto"
          >
            Lihat Membership
          </button>

          <button
            onClick={() => handleScroll("#tentang")}
            className="inline-flex items-center justify-center border-2 border-white/20 hover:border-primary/50 text-text-primary font-heading font-semibold text-xs sm:text-sm px-8 py-4 rounded-xl transition-all duration-300 tracking-[0.15em] uppercase w-full sm:w-auto hover:bg-white/5"
          >
            WUJUDKAN VERSI TERBAIKMU.
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-text-secondary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
