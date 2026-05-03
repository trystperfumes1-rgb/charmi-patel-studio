import { motion } from "motion/react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      className="relative pt-20 pb-8 overflow-hidden"
      style={{
        background: "#3D2B1F",
        borderTop: "1px solid rgba(196,149,106,0.2)",
      }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] opacity-[0.12] blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(196,149,106,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-black"
                style={{
                  background: "linear-gradient(135deg, #C4956A, #8B5E3C)",
                  color: "#FDF6EC",
                  boxShadow: "0 0 20px rgba(196,149,106,0.4)",
                }}
              >
                CP
              </div>
              <div>
                <p
                  className="font-display font-black"
                  style={{ color: "#F5ECD7" }}
                >
                  CHARMI PATEL
                </p>
                <p
                  className="text-xs tracking-widest"
                  style={{ color: "rgba(196,149,106,0.85)" }}
                >
                  LUXURY MAKEUP ARTIST
                </p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-6 max-w-sm"
              style={{ color: "rgba(245,236,215,0.55)" }}
            >
              Ahmedabad's premier luxury makeup artist. Trusted by celebrities,
              brides, and discerning clients for transformative artistry and
              unforgettable looks.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/charmipatel_makeupartist"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: "rgba(196,149,106,0.15)",
                  border: "1px solid rgba(196,149,106,0.3)",
                  color: "#C4956A",
                }}
                aria-label="Instagram"
              >
                <SiInstagram size={16} />
              </a>
              <a
                href="https://wa.me/918490075078"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: "rgba(37,211,102,0.1)",
                  border: "1px solid rgba(37,211,102,0.2)",
                  color: "#25D366",
                }}
                aria-label="WhatsApp"
              >
                <SiWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-semibold mb-5 text-sm tracking-wide uppercase"
              style={{ color: "#F5ECD7" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Bridal Makeup",
                "HD Makeup",
                "Airbrush Makeup",
                "Party Makeup",
                "Celebrity Makeup",
                "Hair Styling",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm transition-colors hover:opacity-100"
                    style={{ color: "rgba(245,236,215,0.5)" }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-semibold mb-5 text-sm tracking-wide uppercase"
              style={{ color: "#F5ECD7" }}
            >
              Contact
            </h4>
            <div className="space-y-3">
              <p className="text-sm" style={{ color: "rgba(245,236,215,0.5)" }}>
                Satva-3, near GALAXY BUNGALOWS
              </p>
              <p className="text-sm" style={{ color: "rgba(245,236,215,0.5)" }}>
                New India Colony, Nava Naroda
              </p>
              <p className="text-sm" style={{ color: "rgba(245,236,215,0.5)" }}>
                Ahmedabad, Gujarat 382330
              </p>
              <a
                href="tel:+918490075078"
                className="block text-sm transition-colors"
                style={{ color: "#C4956A" }}
              >
                +91 84900 75078
              </a>
              <a
                href="https://instagram.com/charmipatel_makeupartist"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm transition-colors"
                style={{ color: "rgba(245,236,215,0.5)" }}
              >
                @charmipatel_makeupartist
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(196,149,106,0.15)" }}
        >
          <p className="text-xs" style={{ color: "rgba(245,236,215,0.35)" }}>
            © {year} Charmi Patel Makeup Studio. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(245,236,215,0.25)" }}>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: "rgba(196,149,106,0.6)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
