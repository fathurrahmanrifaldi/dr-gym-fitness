import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import FacilityCard from "@/components/ui/FacilityCard";
import { facilities } from "@/data/facilities";

export default function Facilities() {
  return (
    <section id="fasilitas" className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="Fasilitas Lengkap untuk Latihanmu."
          subtitle="Kami menyediakan berbagai fasilitas untuk mendukung kenyamanan dan efektivitas latihanmu."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {facilities.map((facility, index) => (
            <ScrollReveal key={facility.title} delay={index * 0.05}>
              <FacilityCard facility={facility} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
