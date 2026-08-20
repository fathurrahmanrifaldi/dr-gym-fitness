"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import CountUp from "@/components/ui/CountUp";
import { Calendar, Dumbbell, Clock, Timer } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: 2025,
    label: "Didirikan",
    isYear: true,
  },
  {
    icon: Dumbbell,
    value: 30,
    suffix: "+",
    label: "Equipment",
  },
  {
    icon: Clock,
    value: 18,
    suffix: " Jam",
    label: "Operasional / Hari",
  },
  {
    icon: Timer,
    label: "Setiap Hari",
    displayText: "06.00–00.00",
  },
];

export default function About() {
  return (
    <section id="tentang" className="section-padding gradient-navy-reverse">
      <div className="section-container">
        <SectionHeading title="Lebih dari Sekadar Tempat Gym." />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <ScrollReveal direction="left">
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              Dr. Gym Fitness hadir sejak 2025 sebagai tempat latihan bagi siapa
              saja yang ingin hidup lebih sehat, membangun kekuatan, dan mencapai
              bentuk tubuh yang diinginkan. Dengan lebih dari 30+ equipment, jam
              operasional setiap hari hingga tengah malam, serta dukungan
              personal trainer, kami berusaha menyediakan tempat latihan yang
              nyaman dan terjangkau untuk masyarakat sekitar.
            </p>
          </ScrollReveal>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="bg-surface rounded-2xl p-6 border border-white/5 text-center group hover:border-primary/20 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl sm:text-3xl font-bold font-heading text-text-primary mb-1">
                    {stat.displayText ? (
                      stat.displayText
                    ) : stat.isYear ? (
                      <CountUp end={stat.value!} duration={2} />
                    ) : (
                      <CountUp
                        end={stat.value!}
                        suffix={stat.suffix}
                        duration={2}
                      />
                    )}
                  </div>
                  <p className="text-text-secondary text-sm">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
