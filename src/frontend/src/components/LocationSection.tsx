import { motion } from "motion/react";

export function LocationSection() {
  return (
    <section
      id="location"
      className="relative py-28 overflow-hidden"
      style={{ background: "#FDF6EC" }}
    >
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.22] blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(196,149,106,0.4) 0%, transparent 70%)",
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
            style={{ color: "#C4956A" }}
          >
            Visit Us
          </span>
          <h2
            className="font-display text-5xl lg:text-6xl font-black mb-6"
            style={{ color: "#3D2B1F" }}
          >
            Our Studio
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(61,43,31,0.65)" }}
          >
            Located in the heart of Nava Naroda, Ahmedabad — or we come to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden"
            style={{
              border: "2px solid rgba(139,94,60,0.3)",
              boxShadow:
                "0 0 40px rgba(139,94,60,0.18), 0 20px 60px rgba(139,94,60,0.1)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.5!2d72.668!3d23.089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e831234567890%3A0xabc123!2sSatva-3%2C+near+GALAXY+BUNGALOWS%2C+New+India+Colony%2C+Nava+Naroda%2C+Ahmedabad%2C+Gujarat+382330!5e0!3m2!1sen!2sin!4v1699000000000"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Charmi Patel Makeup Studio Location"
            />
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "rgba(253,246,236,0.9)",
                border: "1px solid rgba(139,94,60,0.2)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 30px rgba(139,94,60,0.1)",
              }}
            >
              <h3
                className="font-display text-2xl font-bold mb-8"
                style={{ color: "#3D2B1F" }}
              >
                Charmi Patel Makeup Studio
              </h3>

              <div className="space-y-5">
                {[
                  {
                    icon: "📍",
                    label: "Studio Address",
                    value:
                      "Satva-3, near GALAXY BUNGALOWS, New India Colony, Nava Naroda, Ahmedabad, Gujarat 382330",
                  },
                  {
                    icon: "📞",
                    label: "Phone & WhatsApp",
                    value: "+91 84900 75078",
                    link: "tel:+918490075078",
                  },
                  {
                    icon: "📸",
                    label: "Instagram",
                    value: "@charmipatel_makeupartist",
                    link: "https://instagram.com/charmipatel_makeupartist",
                  },
                  {
                    icon: "⏰",
                    label: "Working Hours",
                    value:
                      "Mon–Sat: 9:00 AM – 8:00 PM | Sun: By Appointment Only",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                      style={{
                        background: "rgba(139,94,60,0.1)",
                        border: "1px solid rgba(139,94,60,0.2)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold mb-1 uppercase tracking-wide"
                        style={{ color: "rgba(61,43,31,0.5)" }}
                      >
                        {item.label}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-sm hover:opacity-80 transition-opacity"
                          style={{ color: "#8B5E3C" }}
                          target={
                            item.link.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p
                          className="text-sm"
                          style={{ color: "rgba(61,43,31,0.78)" }}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/918490075078"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="location.whatsapp_button"
                className="flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold transition-all hover:scale-105"
                style={{
                  background: "#25D366",
                  color: "#fff",
                  boxShadow: "0 0 20px rgba(37,211,102,0.3)",
                }}
              >
                <span>💬</span> WhatsApp Us
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Satva-3,+near+GALAXY+BUNGALOWS,+New+India+Colony,+Nava+Naroda,+Ahmedabad,+Gujarat+382330"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="location.directions_button"
                className="flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold transition-all hover:scale-105"
                style={{
                  background: "rgba(139,94,60,0.1)",
                  color: "#8B5E3C",
                  border: "1px solid rgba(139,94,60,0.3)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <span>🗺️</span> Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
