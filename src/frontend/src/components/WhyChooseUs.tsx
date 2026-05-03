import { motion } from "motion/react";

const reasons = [
  {
    icon: "⭐",
    title: "Celebrity Experience",
    desc: "Entrusted by Bollywood actresses, TV stars, and film production houses. The same elite-level artistry is available exclusively for you.",
    color: "#8B5E3C",
  },
  {
    icon: "🎓",
    title: "10+ Years of Mastery",
    desc: "Over a decade perfecting the art of makeup — from traditional Indian bridal looks to avant-garde editorial concepts. Unmatched depth of experience.",
    color: "#C4956A",
  },
  {
    icon: "💎",
    title: "Premium Products Only",
    desc: "Exclusively uses MAC, Huda Beauty, Charlotte Tilbury, NARS, and other luxury international brands. Your skin deserves nothing but the finest.",
    color: "#6B3F2A",
  },
  {
    icon: "👑",
    title: "Personalized Service",
    desc: "Every client receives a bespoke consultation. Your face shape, skin tone, personality, and outfit are all studied to create your perfect, unique look.",
    color: "#8B5E3C",
  },
  {
    icon: "🚗",
    title: "On-Site Service Available",
    desc: "Fully equipped luxury mobile studio. Charmi comes to your venue — your home, hotel, or wedding location — anywhere in and around Ahmedabad.",
    color: "#C4956A",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative py-28 overflow-hidden"
      style={{ background: "#FDF6EC" }}
    >
      {/* Decorative warm orbs */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] opacity-20 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,94,60,0.4) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] opacity-[0.18] blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(196,149,106,0.35) 0%, transparent 70%)",
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
            Why Us
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
            The Charmi Patel Difference
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(61,43,31,0.65)" }}
          >
            When excellence is non-negotiable, there is only one choice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              data-ocid={`why.item.${i + 1}`}
              initial={{ opacity: 0, y: 60, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`relative p-8 rounded-2xl group ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{
                background: "rgba(253,246,236,0.88)",
                border: "1.5px solid rgba(139,94,60,0.2)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 30px rgba(139,94,60,0.08)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute -top-px left-8 right-8 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${reason.color}80, transparent)`,
                }}
              />

              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  background: "rgba(139,94,60,0.1)",
                  border: `1px solid ${reason.color}40`,
                }}
              >
                {reason.icon}
              </div>

              <h3
                className="font-display text-xl font-bold mb-3"
                style={{ color: "#3D2B1F" }}
              >
                {reason.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(61,43,31,0.65)" }}
              >
                {reason.desc}
              </p>

              {/* Hover warm glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at top left, ${reason.color}10, transparent 60%)`,
                  boxShadow: `0 0 30px ${reason.color}20`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
