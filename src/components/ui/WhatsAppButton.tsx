import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  href: string;
  label: string;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  showIcon?: boolean;
}

export default function WhatsAppButton({
  href,
  label,
  variant = "primary",
  size = "md",
  className = "",
  showIcon = true,
}: WhatsAppButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50";

  const variantStyles = {
    primary:
      "bg-primary hover:bg-primary-dark text-white glow-blue hover:glow-blue-strong",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {showIcon && <MessageCircle className="w-5 h-5" />}
      {label}
    </a>
  );
}
