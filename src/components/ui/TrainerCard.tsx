import Image from "next/image";
import type { Trainer } from "@/data/trainers";
import { Award } from "lucide-react";

interface TrainerCardProps {
  trainer: Trainer;
}

export default function TrainerCard({ trainer }: TrainerCardProps) {
  return (
    <div className="group bg-surface rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
      {/* Photo */}
      <div className="relative h-64 sm:h-72 bg-surface-light overflow-hidden">
        <Image
          src={trainer.image}
          alt={trainer.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 -mt-8 relative">
        <div className="flex items-center gap-2 mb-1">
          <Award className="w-4 h-4 text-primary" />
          <span className="text-primary text-xs font-semibold uppercase tracking-wider">
            {trainer.role}
          </span>
        </div>

        <h3 className="text-xl font-bold font-heading text-text-primary mb-3">
          {trainer.name}
        </h3>

        {/* Specialization badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {trainer.specializations.map((spec) => (
            <span
              key={spec}
              className="text-xs bg-primary/10 text-primary-glow px-2.5 py-1 rounded-full border border-primary/20"
            >
              {spec}
            </span>
          ))}
        </div>

        <p className="text-text-secondary text-sm leading-relaxed">
          {trainer.description}
        </p>
      </div>
    </div>
  );
}
