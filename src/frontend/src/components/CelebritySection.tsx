import { motion } from "motion/react";

const celebrities = [
  {
    name: "Priyanka Sharma",
    role: "Bollywood Actress",
    quote:
      "Charmi's touch is pure magic! She transformed me for my film premiere and I have never felt more confident. Her artistry is unmatched in India.",
    image: "/assets/photo6.png",
    stars: 5,
  },
  {
    name: "Deepa Rao",
    role: "Television Star",
    quote:
      "I have worked with makeup artists across Mumbai and Delhi, but Charmi's precision and understanding of HD camera makeup is exceptional. She is my go-to artist.",
    image: "/assets/photo9.png",
    stars: 5,
  },
  {
    name: "Kavya Mehta",
    role: "Model & Influencer",
    quote:
      "Every look Charmi creates tells a story. For my brand campaigns, she consistently delivers editorial-level artistry that photographs stunningly. Absolute genius!",
    image: "/assets/photo12.png",
    stars: 5,
  },
];

const achievements = [
  { icon: "🎬", title: "Bollywood Film Productions", count: "15+" },
  { icon: "📺", title: "TV Serials & Reality Shows", count: "30+" },
  { icon: "📰", title: "Magazine Covers", count: "25+" },
  { icon: "🏆", title: "Awards & Recognitions", count: "8+" },
];

export function CelebritySection() {
  return (
    <section
      id="celebrity"
      className="relative py-28 overflow-hidden"
      style={{ background: "#F0E6D3" }}
    >
      {/* Background effects */}
      <div
        className="absolute top-20 left-0 w-[400px] h-[400px] opacity-25 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,94,60,0.4) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-20 right-0 w-[300px] h-[300px] opacity-20 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(196,149,106,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6">
        {/* Header */}
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
            Elite Recognition
          </span>
          <h2
            className="font-display text-5xl lg:text-6xl font-black mb-6"
            style={{ color: "#3D2B1F" }}
          >
            Trusted by{" "}
            <span
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                background: "linear-gradient(135deg, #8B5E3C, #C4956A)",
                backgroundClip: "text",
              }}
            >
              India's Stars
            </span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(61,43,31,0.65)" }}
          >
            From Bollywood sets to red carpet events, Charmi Patel has been the
            chosen artist for India's most celebrated personalities.
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-7 rounded-2xl"
              style={{
                background: "rgba(253,246,236,0.85)",
                border: "1px solid rgba(139,94,60,0.2)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 20px rgba(139,94,60,0.08)",
              }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <div
                className="font-display text-4xl font-black mb-2"
                style={{ color: "#8B5E3C" }}
              >
                {item.count}
              </div>
              <div className="text-sm" style={{ color: "rgba(61,43,31,0.65)" }}>
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Celebrity Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {celebrities.map((celeb, i) => (
            <motion.div
              key={celeb.name}
              data-ocid={`celebrity.item.${i + 1}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-2xl group"
              style={{
                background: "rgba(253,246,236,0.9)",
                border: "1px solid rgba(139,94,60,0.2)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 20px 60px rgba(139,94,60,0.1)",
              }}
            >
              {/* Quote mark */}
              <div
                className="text-6xl font-display leading-none mb-4"
                style={{ color: "rgba(139,94,60,0.25)" }}
              >
                "
              </div>
              <p
                className="text-base leading-relaxed mb-6 italic"
                style={{ color: "rgba(61,43,31,0.78)" }}
              >
                {celeb.quote}
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {["★", "★", "★", "★", "★"].map((s, j) => (
                  <motion.span
                    key={`${celeb.name}-s${j}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + j * 0.05 + 0.4 }}
                    style={{ color: "#C4956A", fontSize: "1.1rem" }}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>

              {/* Celebrity info */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0"
                  style={{
                    border: "2px solid rgba(139,94,60,0.45)",
                    boxShadow: "0 0 15px rgba(196,149,106,0.3)",
                  }}
                >
                  <img
                    src={celeb.image}
                    alt={celeb.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold" style={{ color: "#3D2B1F" }}>
                    {celeb.name}
                  </p>
                  <p className="text-sm" style={{ color: "#8B5E3C" }}>
                    {celeb.role}
                  </p>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(ellipse at top left, rgba(196,149,106,0.08), transparent 60%)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Featured-in strip */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-sm font-medium tracking-widest uppercase mb-8"
            style={{ color: "rgba(61,43,31,0.45)" }}
          >
            Also Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              "Vogue India",
              "Femina",
              "Harper's Bazaar",
              "Filmfare",
              "Zee TV",
              "Colors TV",
            ].map((brand) => (
              <motion.span
                key={brand}
                className="px-6 py-3 rounded-xl text-sm font-semibold tracking-wide"
                style={{
                  color: "rgba(61,43,31,0.55)",
                  border: "1px solid rgba(139,94,60,0.15)",
                  background: "rgba(253,246,236,0.6)",
                }}
                whileHover={{
                  color: "#8B5E3C",
                  borderColor: "rgba(139,94,60,0.4)",
                  background: "rgba(253,246,236,0.9)",
                }}
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
