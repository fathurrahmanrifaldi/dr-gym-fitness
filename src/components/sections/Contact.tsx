import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { GYM_INFO, WA_BASE_URL } from "@/lib/constants";
import { MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontak" className="section-padding gradient-navy-reverse">
      <div className="section-container">
        <SectionHeading title="Temukan Kami" />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-text-primary font-heading font-semibold mb-1">
                    Alamat
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {GYM_INFO.address}
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-text-primary font-heading font-semibold mb-1">
                    WhatsApp
                  </h3>
                  <a
                    href={WA_BASE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-glow transition-colors text-sm"
                  >
                    {GYM_INFO.phone}
                  </a>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <WhatsAppButton
                  href={WA_BASE_URL}
                  label="Chat via WhatsApp"
                  size="md"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Google Maps */}
          <ScrollReveal direction="right">
            <div className="rounded-2xl overflow-hidden border border-white/5 h-64 sm:h-80 lg:h-full min-h-[280px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.2187623039054!2d107.04292157499064!3d-6.243686793744667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f4f3865fadb%3A0x3e4ff7bf6a26b3b4!2sDR.GYM%20Fitness%20Center!5e1!3m2!1sen!2sid!4v1787238778977!5m2!1sen!2sidhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.152066390857!2d107.04292157434739!3d-6.243681461136188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f4f3865fadb%3A0x3e4ff7bf6a26b3b4!2sDR.GYM%20Fitness%20Center!5e0!3m2!1sen!2sid!4v1787238957125!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Dr. Gym Fitness"
                className="w-full h-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
