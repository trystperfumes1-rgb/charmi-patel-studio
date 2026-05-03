import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Riya Desai",
    location: "Ahmedabad",
    date: "March 2025",
    review:
      "Charmi di ne mara lagna ni makeup kari aapi. Anupam kaam karu che. Savre 5 vage avi ne raat sudhi rahi. Badhi saheliyo puchti hati koi makeup artist nu naam.",
    stars: 5,
    service: "Bridal Makeup",
  },
  {
    name: "Priya Sharma",
    location: "Gandhinagar",
    date: "February 2025",
    review:
      "I was so nervous before my wedding but Charmi Madam made me feel so comfortable. The makeup lasted all day and night, even in the summer heat. Absolutely stunning results!",
    stars: 5,
    service: "Bridal Makeup",
  },
  {
    name: "Anjali Patel",
    location: "Naroda, Ahmedabad",
    date: "January 2025",
    review:
      "Best makeup artist in Ahmedabad without doubt! She did my engagement makeup and everyone was asking for her contact number. Highly recommended for any special occasion.",
    stars: 5,
    service: "Engagement Makeup",
  },
  {
    name: "Sneha Modi",
    location: "Bopal, Ahmedabad",
    date: "December 2024",
    review:
      "Charmi Patel is a true artist. She understood exactly what I wanted for my maternity shoot and created something so magical. The photos look like they are from a magazine.",
    stars: 5,
    service: "Maternity Shoot Makeup",
  },
  {
    name: "Meera Joshi",
    location: "Satellite, Ahmedabad",
    date: "November 2024",
    review:
      "Got party makeup done for my anniversary. The airbrush technique she used was incredible — my skin looked flawless in every photo. My husband could not stop complimenting!",
    stars: 5,
    service: "Party Makeup",
  },
  {
    name: "Nisha Kothari",
    location: "Naranpura, Ahmedabad",
    date: "October 2024",
    review:
      "Professional, talented, and so warm-hearted. She did makeup for 4 of us for a family function and managed everything beautifully. Products used are all top quality brands.",
    stars: 5,
    service: "Family Event Makeup",
  },
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const countRef = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const animation = animate(count, to, {
            duration: 2,
            ease: "easeOut",
          });
          return () => animation.stop();
        }
      },
      { threshold: 0.5 },
    );
    if (countRef.current?.parentElement)
      observer.observe(countRef.current.parentElement);
    return () => observer.disconnect();
  }, [to, count]);

  return (
    <span>
      <motion.span ref={countRef}>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="relative py-28 overflow-hidden"
      style={{ background: "#F5ECD7" }}
    >
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] opacity-20 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,94,60,0.4) 0%, transparent 70%)",
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
            Real Reviews
          </span>
          <h2
            className="font-display text-5xl lg:text-6xl font-black mb-6"
            style={{ color: "#3D2B1F" }}
          >
            What Clients Say
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(61,43,31,0.65)" }}
          >
            500+ happy clients. Countless transformations. One artist.
          </p>
        </motion.div>

        {/* Stat banner */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { number: 500, suffix: "+", label: "Happy Clients", icon: "💝" },
            { number: 10, suffix: "+ yrs", label: "of Experience", icon: "🏆" },
            { number: 5, suffix: "★", label: "Average Rating", icon: "⭐" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl"
              style={{
                background: "rgba(253,246,236,0.9)",
                border: "1px solid rgba(139,94,60,0.2)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 20px rgba(139,94,60,0.1)",
              }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div
                className="font-display text-5xl font-black mb-2"
                style={{ color: "#8B5E3C" }}
              >
                <Counter to={stat.number} suffix={stat.suffix} />
              </div>
              <div style={{ color: "rgba(61,43,31,0.65)" }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              data-ocid={`reviews.item.${i + 1}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-7 rounded-2xl flex flex-col gap-4"
              style={{
                background: "rgba(253,246,236,0.88)",
                border: "1px solid rgba(139,94,60,0.15)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 20px rgba(139,94,60,0.08)",
              }}
            >
              <div className="flex gap-1">
                {["★", "★", "★", "★", "★"].map((s, j) => (
                  <span
                    key={`${review.name}-s${j}`}
                    style={{ color: "#C4956A", fontSize: "1rem" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "rgba(61,43,31,0.78)" }}
              >
                "{review.review}"
              </p>
              <div
                className="inline-block text-xs px-3 py-1 rounded-full self-start"
                style={{
                  background: "rgba(139,94,60,0.1)",
                  color: "#8B5E3C",
                  border: "1px solid rgba(139,94,60,0.2)",
                }}
              >
                {review.service}
              </div>
              <div
                className="flex items-center gap-3 pt-2"
                style={{ borderTop: "1px solid rgba(139,94,60,0.12)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{
                    background: "rgba(139,94,60,0.12)",
                    color: "#8B5E3C",
                    border: "1px solid rgba(139,94,60,0.25)",
                  }}
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p
                    className="font-semibold text-sm"
                    style={{ color: "#3D2B1F" }}
                  >
                    {review.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(61,43,31,0.5)" }}
                  >
                    {review.location} · {review.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
