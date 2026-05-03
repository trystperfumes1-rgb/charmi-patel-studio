import { motion } from "motion/react";
import { Hero3DScene } from "./Hero3D";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#FDF6EC" }}
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Hero3DScene />
      </div>

      {/* Warm gradient overlays */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(196,149,106,0.18) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(139,94,60,0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(232,213,183,0.3) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-[2] container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left: Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(139,94,60,0.1)",
                border: "1px solid rgba(139,94,60,0.3)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#8B5E3C" }}
              />
              <span
                className="text-sm font-medium"
                style={{ color: "#8B5E3C" }}
              >
                Available for Bookings
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-5xl lg:text-7xl xl:text-8xl font-black leading-none mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="block" style={{ color: "#3D2B1F" }}>
                Elevate
              </span>
              <span
                className="block"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  background:
                    "linear-gradient(135deg, #3D2B1F 0%, #8B5E3C 50%, #C4956A 100%)",
                  backgroundClip: "text",
                }}
              >
                Your
              </span>
              <span className="block" style={{ color: "#3D2B1F" }}>
                Beauty
              </span>
            </motion.h1>

            <motion.p
              className="text-lg lg:text-xl leading-relaxed mb-4 max-w-xl"
              style={{ color: "rgba(61,43,31,0.75)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              with{" "}
              <span className="font-semibold" style={{ color: "#8B5E3C" }}>
                Celebrity-Caliber Artistry
              </span>
            </motion.p>
            <motion.p
              className="text-base leading-relaxed mb-8 max-w-lg"
              style={{ color: "rgba(61,43,31,0.65)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              Ahmedabad's most sought-after luxury makeup artist. Trusted by
              Bollywood celebrities, brides, and India's elite for flawless,
              unforgettable looks.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <a
                data-ocid="hero.cta_button"
                href="https://wa.me/918490075078"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  background:
                    "linear-gradient(135deg, #8B5E3C 0%, #C4956A 100%)",
                  color: "#FDF6EC",
                  boxShadow: "0 0 30px rgba(139,94,60,0.45)",
                }}
              >
                ✨ Book Your Appointment
              </a>
              <a
                data-ocid="hero.portfolio_button"
                href="#gallery"
                className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(139,94,60,0.07)",
                  border: "1px solid rgba(139,94,60,0.3)",
                  color: "#3D2B1F",
                  backdropFilter: "blur(12px)",
                }}
              >
                View Portfolio
              </a>
            </motion.div>

            <motion.div
              className="flex items-center gap-8 mt-10 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {[
                { number: "500+", label: "Happy Clients" },
                { number: "10+", label: "Years Experience" },
                { number: "50+", label: "Celebrities" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-2xl font-bold font-display"
                    style={{ color: "#8B5E3C" }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "rgba(61,43,31,0.55)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Portrait Photo */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Outer glow rings */}
              <div
                className="absolute inset-0 rounded-2xl animate-pulse"
                style={{
                  background: "transparent",
                  border: "2px solid rgba(139,94,60,0.4)",
                  transform: "scale(1.06)",
                  borderRadius: "1rem",
                  filter: "blur(4px)",
                }}
              />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(196,149,106,0.3)",
                  transform: "scale(1.12)",
                  borderRadius: "1.2rem",
                  filter: "blur(8px)",
                }}
              />
              {/* Glow background */}
              <div
                className="absolute -inset-8 rounded-3xl opacity-50 blur-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(196,149,106,0.5) 0%, rgba(139,94,60,0.2) 40%, transparent 70%)",
                }}
              />
              {/* Photo card */}
              <div
                className="relative overflow-hidden"
                style={{
                  width: "300px",
                  height: "400px",
                  borderRadius: "1rem",
                  border: "2px solid rgba(139,94,60,0.45)",
                  boxShadow:
                    "0 0 40px rgba(139,94,60,0.35), 0 0 80px rgba(196,149,106,0.2), inset 0 0 30px rgba(196,149,106,0.08)",
                }}
              >
                <img
                  src="/assets/photo1.png"
                  alt="Charmi Patel - Luxury Makeup Artist"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(61,43,31,0.85) 0%, transparent 100%)",
                  }}
                >
                  <p
                    className="font-display font-bold text-lg"
                    style={{ color: "#FDF6EC" }}
                  >
                    Charmi Patel
                  </p>
                  <p className="text-sm" style={{ color: "#C4956A" }}>
                    Luxury Makeup Artist
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <span className="text-xs" style={{ color: "rgba(61,43,31,0.4)" }}>
          Scroll to explore
        </span>
        <div
          className="w-px h-12"
          style={{
            background:
              "linear-gradient(to bottom, rgba(139,94,60,0.5), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
