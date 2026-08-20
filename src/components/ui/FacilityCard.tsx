import * as LucideIcons from "lucide-react";
import type { Facility } from "@/data/facilities";
import { Star, HelpCircle } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

type LucideIcon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;

interface FacilityCardProps {
  facility: Facility;
}

export default function FacilityCard({ facility }: FacilityCardProps) {
  // Dynamically get the icon component
  const icons = LucideIcons as unknown as Record<string, LucideIcon>;
  const IconComponent = icons[facility.icon] || HelpCircle;

  return (
    <div
      className={`relative group bg-surface rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
        facility.isFavorite
          ? "border-primary/30 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
          : "border-white/5 hover:border-white/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
      }`}
    >
      {/* Favorite Badge */}
      {facility.isFavorite && (
        <div className="absolute -top-3 right-4 flex items-center gap-1 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
          <Star className="w-3 h-3 fill-current" />
          Favorit
        </div>
      )}

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
          facility.isFavorite
            ? "bg-primary/20 text-primary-glow"
            : "bg-surface-light text-primary"
        }`}
      >
        <IconComponent className="w-6 h-6" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold font-heading text-text-primary mb-2">
        {facility.title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {facility.description}
      </p>
    </div>
  );
}
