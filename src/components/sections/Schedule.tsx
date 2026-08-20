"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Schedule() {
  return (
    <section id="jadwal" className="section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Side */}
          <ScrollReveal direction="left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-text-primary tracking-tight mb-6">
              Latihan Kapan Saja,{" "}
              <span className="text-gradient-blue">Sesuai Jadwalmu.</span>
            </h2>
            <div className="mb-6">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">
                Setiap Hari
              </p>
              <p className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-text-primary">
                06.00 – 00.00
              </p>
            </div>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              Buka 18 jam setiap hari untuk memberikan fleksibilitas waktu
              latihan.
            </p>
          </ScrollReveal>

          {/* Visual Side — Clock with glow */}
          <ScrollReveal direction="right">
            <div className="flex items-center justify-center">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(59, 130, 246, 0.2)",
                    "0 0 80px rgba(59, 130, 246, 0.4)",
                    "0 0 40px rgba(59, 130, 246, 0.2)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-surface border border-primary/30 flex items-center justify-center"
              >
                <div className="text-center">
                  <Clock className="w-16 h-16 sm:w-20 sm:h-20 text-primary mx-auto mb-3" />
                  <p className="text-text-primary font-heading font-bold text-lg sm:text-xl">
                    18 Jam
                  </p>
                  <p className="text-text-secondary text-sm">Setiap Hari</p>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
