"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { getWhatsAppUrl } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)]" />

      <div className="section-container relative z-10 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-text-primary tracking-tight mb-6">
            Sudah Siap Memulai{" "}
            <span className="text-gradient-blue">Latihanmu?</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Tidak perlu menunggu. Datang, mulai latihan, dan bangun versi
            terbaik dirimu bersama Dr. Gym Fitness.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton
              href={getWhatsAppUrl(
                "Halo, saya tertarik untuk bergabung di Dr. Gym Fitness"
              )}
              label="Chat via WhatsApp"
              size="lg"
            />
            <a
              href="#kontak"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#kontak")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center border-2 border-white/20 hover:border-primary/50 text-text-primary font-heading font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/5"
            >
              Hubungi Kami
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
