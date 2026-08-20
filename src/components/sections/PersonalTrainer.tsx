import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import PricingCard from "@/components/ui/PricingCard";
import { ptPackages } from "@/data/personalTrainer";

export default function PersonalTrainer() {
  return (
    <section className="section-padding gradient-navy-reverse">
      <div className="section-container">
        <SectionHeading
          title="Butuh Latihan yang Lebih Terarah?"
          subtitle="Dapatkan pendampingan personal untuk membantu kamu berlatih sesuai tujuan."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {ptPackages.map((pkg, index) => (
            <ScrollReveal key={pkg.name} delay={index * 0.08}>
              <PricingCard
                name={pkg.name}
                price={pkg.price}
                detail={`${pkg.sessions}x sesi Personal Trainer`}
                details={pkg.details}
                badges={pkg.badge ? [pkg.badge] : []}
                badgeColors={
                  pkg.badge ? ["bg-emerald-500/20 text-emerald-400"] : []
                }
                ctaLabel="Pilih Paket"
                ctaUrl={pkg.ctaUrl}
                isBestValue={pkg.badge === "PILIHAN POPULER"}
                variant="pt"
                pricePerSession={pkg.pricePerSession}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
