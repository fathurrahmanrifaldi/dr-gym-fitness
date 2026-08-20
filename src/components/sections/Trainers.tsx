import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TrainerCard from "@/components/ui/TrainerCard";
import { trainers } from "@/data/trainers";

export default function Trainers() {
  return (
    <section id="trainer" className="section-padding gradient-navy-reverse">
      <div className="section-container">
        <SectionHeading
          title="Didampingi Trainer Bersertifikasi"
          subtitle="Dapatkan arahan latihan yang lebih terstruktur bersama trainer yang telah memiliki sertifikasi dan siap membantu kamu mencapai tujuan latihan."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {trainers.map((trainer, index) => (
            <ScrollReveal key={trainer.name} delay={index * 0.1}>
              <TrainerCard trainer={trainer} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
