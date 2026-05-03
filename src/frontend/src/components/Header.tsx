import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Celebrity", href: "#celebrity" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Location", href: "#location" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(253,246,236,0.94)"
          : "rgba(253,246,236,0.7)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
        borderBottom: scrolled
          ? "1px solid rgba(139,94,60,0.18)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(139,94,60,0.12)" : "none",
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-sm transition-all duration-300 group-hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #8B5E3C, #C4956A)",
                color: "#FDF6EC",
                boxShadow: "0 0 15px rgba(139,94,60,0.45)",
              }}
            >
              CP
            </div>
            <div>
              <p
                className="font-display font-black text-sm leading-none"
                style={{ color: "#3D2B1F" }}
              >
                CHARMI PATEL
              </p>
              <p
                className="text-xs font-medium tracking-widest"
                style={{ color: "rgba(139,94,60,0.75)" }}
              >
                MAKEUP ARTIST
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-ocid={`nav.${link.label.toLowerCase()}_link`}
                className="text-sm font-medium transition-all duration-200 hover:opacity-100 relative group"
                style={{ color: "rgba(61,43,31,0.75)" }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{
                    background: "linear-gradient(90deg, #8B5E3C, transparent)",
                  }}
                />
              </a>
            ))}
          </nav>

          {/* Book CTA */}
          <a
            href="https://wa.me/918490075078"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.book_button"
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #8B5E3C, #C4956A)",
              color: "#FDF6EC",
              boxShadow: "0 0 15px rgba(139,94,60,0.4)",
            }}
          >
            Book Now
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.menu_toggle"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block h-0.5 rounded-full"
                style={{
                  width: i === 1 ? "20px" : "24px",
                  background: "#8B5E3C",
                }}
                animate={
                  menuOpen
                    ? {
                        rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
                        y: i === 0 ? 8 : i === 2 ? -8 : 0,
                        opacity: i === 1 ? 0 : 1,
                      }
                    : {}
                }
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{
              background: "rgba(253,246,236,0.97)",
              borderTop: "1px solid rgba(139,94,60,0.12)",
            }}
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-base font-medium py-2"
                  style={{ color: "rgba(61,43,31,0.8)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="https://wa.me/918490075078"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-center py-3 rounded-full font-semibold"
                style={{
                  background: "linear-gradient(135deg, #8B5E3C, #C4956A)",
                  color: "#FDF6EC",
                }}
                onClick={() => setMenuOpen(false)}
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
