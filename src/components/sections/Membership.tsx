import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import PricingCard from "@/components/ui/PricingCard";
import { membershipPackages } from "@/data/membership";

export default function Membership() {
  return (
    <section id="membership" className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="Pilih Membership yang Sesuai denganmu."
          subtitle="Mulai latihan tanpa harus mengeluarkan biaya besar. Pilih paket yang paling sesuai dengan kebutuhan dan durasi latihanmu."
        />

        {/* Pricing Grid — horizontal scroll on mobile */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
          {membershipPackages.map((pkg, index) => (
            <ScrollReveal
              key={pkg.name}
              delay={index * 0.08}
              className={`min-w-[260px] sm:min-w-[280px] lg:min-w-0 snap-center ${
                pkg.isBestValue ? "lg:z-10" : ""
              }`}
            >
              <PricingCard
                name={pkg.name}
                price={pkg.price}
                detail={pkg.detail}
                badges={pkg.badges}
                badgeColors={pkg.badgeColors}
                ctaLabel={pkg.ctaLabel}
                ctaUrl={pkg.ctaUrl}
                isBestValue={pkg.isBestValue}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Admin fee note */}
        <ScrollReveal>
          <p className="text-center text-text-secondary text-sm mt-8 max-w-xl mx-auto">
            Biaya administrasi Rp20.000. Khusus paket 6 bulan dan 12 bulan,
            biaya administrasi{" "}
            <span className="text-accent-orange font-semibold">GRATIS</span>.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
