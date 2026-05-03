import { motion } from "motion/react";

export function CTASection() {
  return (
    <section
      id="book"
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #4A2E1A 0%, #6B3F2A 40%, #8B5E3C 80%, #A0714F 100%)",
      }}
    >
      {/* Dramatic warm glow backdrop */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[800px] h-[400px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(ellipse, rgba(196,149,106,0.8) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Animated floating particles */}
      {[
        {
          id: "p1",
          left: "10%",
          top: "20%",
          size: 8,
          color: "rgba(232,213,183,0.7)",
          dur: 3,
        },
        {
          id: "p2",
          left: "25%",
          top: "45%",
          size: 5,
          color: "rgba(196,149,106,0.6)",
          dur: 3.5,
        },
        {
          id: "p3",
          left: "40%",
          top: "30%",
          size: 10,
          color: "rgba(232,213,183,0.7)",
          dur: 4,
        },
        {
          id: "p4",
          left: "55%",
          top: "60%",
          size: 6,
          color: "rgba(196,149,106,0.6)",
          dur: 4.5,
        },
        {
          id: "p5",
          left: "70%",
          top: "25%",
          size: 8,
          color: "rgba(232,213,183,0.7)",
          dur: 5,
        },
        {
          id: "p6",
          left: "85%",
          top: "50%",
          size: 7,
          color: "rgba(196,149,106,0.6)",
          dur: 5.5,
        },
      ].map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: p.color,
            left: p.left,
            top: p.top,
            boxShadow: `0 0 10px ${p.color}`,
          }}
          animate={{ y: [-15, 15, -15], opacity: [0.4, 0.9, 0.4] }}
          transition={{
            duration: p.dur,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="text-6xl mb-8"
          >
            ✨
          </motion.div>

          <h2
            className="font-display text-5xl lg:text-7xl font-black mb-6 leading-none"
            style={{ color: "#FDF6EC" }}
          >
            Ready to Look
            <br />
            <span
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                background: "linear-gradient(135deg, #F5ECD7 0%, #C4956A 100%)",
                backgroundClip: "text",
              }}
            >
              Your Absolute Best?
            </span>
          </h2>

          <p
            className="text-xl mb-12"
            style={{ color: "rgba(245,236,215,0.82)" }}
          >
            Join 500+ clients who trust Charmi Patel for their most important
            moments.
            <br className="hidden lg:block" /> Your dream look is just one
            message away.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.a
              href="https://wa.me/918490075078"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="cta.whatsapp_button"
              className="flex items-center justify-center gap-3 px-12 py-5 rounded-full font-bold text-lg transition-all"
              style={{
                background: "linear-gradient(135deg, #C4956A 0%, #E8D5B7 100%)",
                color: "#3D2B1F",
                boxShadow:
                  "0 0 40px rgba(196,149,106,0.6), 0 20px 60px rgba(196,149,106,0.3)",
              }}
              whileHover={{
                scale: 1.07,
                boxShadow:
                  "0 0 60px rgba(196,149,106,0.8), 0 20px 80px rgba(196,149,106,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="text-xl">💬</span>
              Book Now via WhatsApp
            </motion.a>

            <motion.a
              href="tel:+918490075078"
              data-ocid="cta.call_button"
              className="flex items-center justify-center gap-3 px-12 py-5 rounded-full font-bold text-lg transition-all"
              style={{
                background: "rgba(253,246,236,0.1)",
                color: "#FDF6EC",
                border: "2px solid rgba(232,213,183,0.5)",
                backdropFilter: "blur(12px)",
              }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(232,213,183,0.9)",
                background: "rgba(253,246,236,0.15)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <span>📞</span>
              Call Us Now
            </motion.a>
          </div>

          <motion.p
            className="mt-8 text-sm"
            style={{ color: "rgba(245,236,215,0.5)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Free consultation • No hidden charges • Serving Ahmedabad & beyond
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
