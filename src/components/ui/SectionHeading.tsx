import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight">
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary-glow ${
          centered ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p className={`mt-6 text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
