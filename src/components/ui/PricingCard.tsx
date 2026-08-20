import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  detail: string;
  details?: string[];
  badges?: string[];
  badgeColors?: string[];
  ctaLabel: string;
  ctaUrl: string;
  isBestValue?: boolean;
  variant?: "membership" | "pt";
  pricePerSession?: string;
}

export default function PricingCard({
  name,
  price,
  detail,
  details = [],
  badges = [],
  badgeColors = [],
  ctaLabel,
  ctaUrl,
  isBestValue = false,
  variant = "membership",
  pricePerSession,
}: PricingCardProps) {
  const isPT = variant === "pt";

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
        isBestValue
          ? "bg-surface border-primary/50 scale-[1.02] lg:scale-105 shadow-[0_0_40px_rgba(59,130,246,0.2)] z-10"
          : isPT
          ? "bg-surface border-white/5 hover:border-emerald-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]"
          : "bg-surface border-white/5 hover:border-primary/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
      } hover:-translate-y-1`}
    >
      {/* Badges */}
      {badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {badges.map((badge, i) => (
            <span
              key={badge}
              className={`text-xs font-bold px-3 py-1 rounded-full ${
                badgeColors[i] ||
                (isPT
                  ? "bg-emerald-500/20 text-emerald-400"
                  : "bg-primary/20 text-primary-glow")
              }`}
            >
              {badge}
            </span>
          ))}
        </div>
      )}

      {/* Package name */}
      <h3
        className={`text-lg font-semibold font-heading ${
          isPT ? "text-emerald-400" : "text-text-primary"
        }`}
      >
        {name}
      </h3>

      {/* Price */}
      <div className="mt-3 mb-4">
        <span
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold font-heading break-words ${
            isBestValue ? "text-gradient-blue" : "text-text-primary"
          }`}
        >
          {price}
        </span>
        {pricePerSession && (
          <span className="block text-sm text-text-secondary mt-1">
            {pricePerSession}
          </span>
        )}
      </div>

      {/* Detail / description */}
      <p className="text-text-secondary text-sm mb-4">{detail}</p>

      {/* Additional details list (for PT packages) */}
      {details.length > 0 && (
        <ul className="space-y-2 mb-6">
          {details.map((d) => (
            <li key={d} className="flex items-center gap-2 text-sm text-text-secondary">
              <Check
                className={`w-4 h-4 flex-shrink-0 ${
                  isPT ? "text-emerald-400" : "text-primary"
                }`}
              />
              {d}
            </li>
          ))}
        </ul>
      )}

      {/* Spacer to push CTA to bottom */}
      <div className="flex-1" />

      {/* CTA */}
      <a
        href={ctaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-4 w-full inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-xl py-3 px-6 transition-all duration-300 text-sm ${
          isBestValue
            ? "bg-primary hover:bg-primary-dark text-white glow-blue hover:glow-blue-strong"
            : isPT
            ? "border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500 hover:text-white"
            : "border-2 border-primary/50 text-primary hover:bg-primary hover:text-white"
        }`}
      >
        {ctaLabel}
      </a>
    </div>
  );
}
