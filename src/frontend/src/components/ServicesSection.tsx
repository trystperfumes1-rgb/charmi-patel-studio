import { motion } from "motion/react";
import { useState } from "react";

const services = [
  {
    icon: "💍",
    title: "Bridal Makeup",
    desc: "Timeless, radiant bridal looks crafted for your most special day. From traditional to contemporary, every detail perfected for flawless photographs and lasting memories.",
    tag: "Most Popular",
  },
  {
    icon: "✨",
    title: "HD Makeup",
    desc: "High-definition makeup with advanced light-diffusing formulas that photograph and film beautifully under any lighting. Perfect for photoshoots and media appearances.",
    tag: null,
  },
  {
    icon: "💨",
    title: "Airbrush Makeup",
    desc: "Ultra-fine mist application for a second-skin finish that lasts 16+ hours. Weightless coverage with flawless blending — the gold standard for luxury events.",
    tag: "Celebrity Choice",
  },
  {
    icon: "🎉",
    title: "Party Makeup",
    desc: "Glamorous, bold looks that turn heads at every event. From intimate gatherings to grand celebrations, your party look will be unforgettable.",
    tag: null,
  },
  {
    icon: "⭐",
    title: "Celebrity Makeup",
    desc: "Exclusive luxury service for public figures, film personalities, and TV stars. Trusted by India's leading celebrities for red carpet events and professional shoots.",
    tag: "Premium",
  },
  {
    icon: "📸",
    title: "Pre-Wedding Shoot",
    desc: "Cinematic, story-driven makeup for your pre-wedding photography. Editorial styling that captures your unique love story in every frame.",
    tag: null,
  },
  {
    icon: "💇‍♀️",
    title: "Hair Styling",
    desc: "Complete bridal and event hair transformations — intricate updo styles, modern waves, traditional adornments, and bespoke styling tailored to your vision.",
    tag: null,
  },
];

export function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative py-28 overflow-hidden"
      style={{ background: "#F5ECD7" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-25 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,94,60,0.35) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="text-sm font-medium tracking-widest uppercase mb-4 block"
            style={{ color: "#8B5E3C" }}
          >
            What We Offer
          </span>
          <h2
            className="font-display text-5xl lg:text-6xl font-black mb-6"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              background: "linear-gradient(135deg, #3D2B1F, #8B5E3C)",
              backgroundClip: "text",
            }}
          >
            Premium Services
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(61,43,31,0.65)" }}
          >
            Each service is a bespoke experience — curated for your skin, your
            occasion, your story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              data-ocid={`services.item.${i + 1}`}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
            >
              <div
                className="relative p-7 rounded-2xl h-full transition-all duration-500"
                style={{
                  background:
                    hovered === i
                      ? "rgba(253,246,236,0.95)"
                      : "rgba(253,246,236,0.75)",
                  border:
                    hovered === i
                      ? "1px solid rgba(139,94,60,0.5)"
                      : "1px solid rgba(139,94,60,0.15)",
                  backdropFilter: "blur(12px)",
                  boxShadow:
                    hovered === i
                      ? "0 0 35px rgba(139,94,60,0.2), 0 20px 60px rgba(139,94,60,0.1)"
                      : "0 8px 30px rgba(139,94,60,0.08)",
                }}
              >
                {service.tag && (
                  <span
                    className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(139,94,60,0.12)",
                      color: "#8B5E3C",
                      border: "1px solid rgba(139,94,60,0.25)",
                    }}
                  >
                    {service.tag}
                  </span>
                )}
                <div className="text-4xl mb-5">{service.icon}</div>
                <h3
                  className="font-display text-xl font-bold mb-3"
                  style={{ color: "#3D2B1F" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(61,43,31,0.65)" }}
                >
                  {service.desc}
                </p>

                <div
                  className="mt-5 flex items-center gap-2 text-sm font-medium transition-all duration-300"
                  style={{
                    color: hovered === i ? "#8B5E3C" : "rgba(61,43,31,0.35)",
                  }}
                >
                  <span>Learn more</span>
                  <span className="text-lg">{hovered === i ? "→" : "›"}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://wa.me/918490075078"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="services.book_button"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #8B5E3C, #C4956A)",
              color: "#FDF6EC",
              boxShadow: "0 0 30px rgba(139,94,60,0.4)",
            }}
          >
            Book a Service
          </a>
        </motion.div>
      </div>
    </section>
  );
}
