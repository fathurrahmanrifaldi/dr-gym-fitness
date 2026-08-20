import { GYM_INFO, SOCIAL_LINKS, WA_BASE_URL } from "@/lib/constants";
import { navItems } from "@/data/navigation";
import { MapPin, Phone, Clock } from "lucide-react";

// Custom social media icons — not available in lucide-react
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.88a8.28 8.28 0 004.76 1.5v-3.4a4.85 4.85 0 01-1-.29z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5">
      {/* Social strip */}
      <div className="border-b border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm font-heading font-semibold">
            Ikuti Perjalanan Kami
          </p>
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors group"
            >
              <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">{SOCIAL_LINKS.instagram.handle}</span>
            </a>
            <a
              href={SOCIAL_LINKS.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors group"
            >
              <TikTokIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">{SOCIAL_LINKS.tiktok.handle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold font-heading text-text-primary mb-2">
              Dr. Gym{" "}
              <span className="text-primary">Fitness</span>
            </h3>
            <p className="text-primary text-sm font-heading font-semibold tracking-wider mb-3">
              {GYM_INFO.tagline}
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              {GYM_INFO.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-heading font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-text-secondary text-sm hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-text-primary font-heading font-semibold mb-4">
              Kontak
            </h4>
            <ul className="space-y-3">
              <li className="flex gap-2 text-text-secondary text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{GYM_INFO.address}</span>
              </li>
              <li className="flex gap-2 text-text-secondary text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href={WA_BASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {GYM_INFO.phone}
                </a>
              </li>
              <li className="flex gap-2 text-text-secondary text-sm">
                <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  {GYM_INFO.operatingDays} · {GYM_INFO.operatingHours}
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-text-primary font-heading font-semibold mb-4">
              Social Media
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={SOCIAL_LINKS.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-secondary text-sm hover:text-primary transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                  {SOCIAL_LINKS.instagram.handle}
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-secondary text-sm hover:text-primary transition-colors"
                >
                  <TikTokIcon className="w-4 h-4" />
                  {SOCIAL_LINKS.tiktok.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-text-secondary text-xs text-center">
            © {new Date().getFullYear()} Dr. Gym Fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
