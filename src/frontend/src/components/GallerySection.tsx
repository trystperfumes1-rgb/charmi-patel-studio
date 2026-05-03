import { motion } from "motion/react";
import { useState } from "react";

const photos = [
  {
    src: "/assets/photo1.png",
    alt: "Bride in pink lehenga - Charmi Patel work",
  },
  { src: "/assets/photo2.png", alt: "Bridal hair with pearl accessories" },
  { src: "/assets/photo3.png", alt: "Bride checking jewelry in mirror" },
  { src: "/assets/photo4.png", alt: "Bridal hair with leaf crown" },
  { src: "/assets/photo5.png", alt: "Two brides with floral bun" },
  { src: "/assets/photo6.png", alt: "Colorful eye makeup editorial" },
  { src: "/assets/photo7.png", alt: "Maternity photoshoot with crown" },
  { src: "/assets/photo8.png", alt: "Couple in traditional attire" },
  { src: "/assets/photo9.png", alt: "Woman in light blue saree" },
  { src: "/assets/photo10.png", alt: "Woman in yellow outfit - Charmi logo" },
  { src: "/assets/photo11.png", alt: "Bride in deep pink lehenga" },
  { src: "/assets/photo12.png", alt: "Woman with long wavy black hair" },
];

export function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="relative py-28 overflow-hidden"
      style={{ background: "#FDF6EC" }}
    >
      {/* Warm ambient glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-25 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(196,149,106,0.5) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] opacity-20 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,94,60,0.3) 0%, transparent 70%)",
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
            Our Work
          </span>
          <h2
            className="font-display text-5xl lg:text-6xl font-black mb-6"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              background: "linear-gradient(135deg, #3D2B1F, #8B5E3C, #C4956A)",
              backgroundClip: "text",
            }}
          >
            Premium Portfolio
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(61,43,31,0.65)" }}
          >
            Every look is a masterpiece. Every moment is unforgettable.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              data-ocid={`gallery.item.${i + 1}`}
              className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-xl mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              onClick={() => setLightbox(i)}
            >
              <div
                className="overflow-hidden rounded-xl transition-all duration-500"
                style={{
                  border: "1.5px solid rgba(139,94,60,0.18)",
                  boxShadow: "0 4px 20px rgba(139,94,60,0.1)",
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ display: "block" }}
                />
                {/* Light warm hover overlay — never dark */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(61,43,31,0.65) 0%, transparent 55%)",
                  }}
                >
                  <div className="p-3 w-full">
                    <p
                      className="text-xs font-medium truncate"
                      style={{ color: "rgba(253,246,236,0.9)" }}
                    >
                      {photo.alt}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(61,43,31,0.88)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setLightbox(null)}
          data-ocid="gallery.lightbox"
        >
          <motion.img
            src={photos[lightbox].src}
            alt={photos[lightbox].alt}
            className="max-h-[85vh] max-w-[85vw] object-contain rounded-2xl"
            style={{
              border: "2px solid rgba(196,149,106,0.5)",
              boxShadow:
                "0 0 60px rgba(139,94,60,0.4), 0 0 120px rgba(196,149,106,0.2)",
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="absolute top-6 right-6 text-3xl font-bold w-12 h-12 flex items-center justify-center rounded-full transition-all hover:scale-110"
            style={{
              background: "rgba(253,246,236,0.2)",
              border: "1px solid rgba(196,149,106,0.5)",
              color: "#FDF6EC",
            }}
            onClick={() => setLightbox(null)}
            data-ocid="gallery.lightbox_close"
          >
            ×
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {photos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                className="h-2 rounded-full transition-all"
                style={{
                  background:
                    i === lightbox ? "#C4956A" : "rgba(253,246,236,0.35)",
                  width: i === lightbox ? "24px" : "8px",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(i);
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
