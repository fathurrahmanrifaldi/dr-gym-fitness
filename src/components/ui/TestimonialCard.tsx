import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-surface rounded-2xl p-8 border border-white/5 relative h-full flex flex-col">
      {/* Quote icon */}
      <Quote className="w-10 h-10 text-primary/30 mb-4" />

      {/* Quote text */}
      <blockquote className="text-text-primary text-base sm:text-lg leading-relaxed mb-6 italic flex-grow">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-primary font-bold font-heading text-sm">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-text-primary font-semibold font-heading text-sm">
            {testimonial.name}
          </p>
          <p className="text-text-secondary text-xs">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
