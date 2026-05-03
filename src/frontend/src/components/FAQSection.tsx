import { motion } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    q: "How do I book an appointment with Charmi Patel?",
    a: "Booking is simple! WhatsApp us at +91 84900 75078 or call directly. For bridal bookings, we recommend reaching out at least 3-6 months in advance to secure your preferred date. We offer complimentary consultation calls to discuss your vision.",
  },
  {
    q: "Do you offer a bridal trial makeup session?",
    a: "Yes, absolutely! We strongly recommend a bridal trial session 2-4 weeks before your wedding day. This allows us to perfect your look, test product compatibility with your skin, and ensure you feel 100% confident on your big day. Trial sessions are typically 2-3 hours long.",
  },
  {
    q: "What premium products and brands do you use?",
    a: "We exclusively use luxury international brands including MAC Cosmetics, Charlotte Tilbury, NARS, Huda Beauty, Make Up For Ever, Armani Beauty, and Laura Mercier. All products are 100% authentic, cruelty-free where possible, and selected specifically for Indian skin tones and climate conditions.",
  },
  {
    q: "How early should I start preparing for bridal makeup on my wedding day?",
    a: "For bridal makeup, we typically begin 3-4 hours before your first ceremony. If hair styling is also required, add an additional 1-2 hours. We recommend scheduling the session to leave buffer time for any finishing touches before you need to be ready.",
  },
  {
    q: "What is your cancellation and rescheduling policy?",
    a: "We understand plans can change. Cancellations made 7+ days before the appointment receive a full advance refund. Cancellations within 72 hours are eligible for 50% refund. For bridal bookings, the advance amount secures your date and is non-refundable but fully transferable within 12 months.",
  },
  {
    q: "Do you provide on-location / at-home makeup services?",
    a: "Yes! We offer complete on-location service anywhere in Ahmedabad and surrounding areas including Gandhinagar, Anand, and Vadodara. We bring a fully equipped luxury kit to your venue — your home, hotel, banquet hall, or farmhouse. Travel charges apply for locations beyond 30km.",
  },
  {
    q: "Do you offer a free consultation before booking?",
    a: "Yes, we offer complimentary 15-minute video or in-person consultations to understand your vision, review reference looks, and provide a customized service recommendation. This helps us ensure complete alignment before you commit to booking.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-28 overflow-hidden"
      style={{ background: "#F0E6D3" }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-20 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,94,60,0.35) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-4xl">
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
            Got Questions?
          </span>
          <h2
            className="font-display text-5xl lg:text-6xl font-black mb-6"
            style={{ color: "#3D2B1F" }}
          >
            Frequently Asked
          </h2>
          <p className="text-lg" style={{ color: "rgba(61,43,31,0.65)" }}>
            Everything you need to know before your appointment.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              data-ocid={`faq.item.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="overflow-hidden rounded-2xl"
              style={{
                background:
                  open === i
                    ? "rgba(253,246,236,0.95)"
                    : "rgba(253,246,236,0.7)",
                border:
                  open === i
                    ? "1px solid rgba(139,94,60,0.4)"
                    : "1px solid rgba(139,94,60,0.15)",
                backdropFilter: "blur(12px)",
                borderLeft:
                  open === i
                    ? "3px solid #C4956A"
                    : "1px solid rgba(139,94,60,0.15)",
                transition: "all 0.3s ease",
                boxShadow:
                  open === i
                    ? "0 8px 30px rgba(139,94,60,0.12)"
                    : "0 2px 10px rgba(139,94,60,0.05)",
              }}
            >
              <button
                type="button"
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                data-ocid={`faq.toggle.${i + 1}`}
              >
                <span
                  className="font-semibold text-base"
                  style={{ color: "#3D2B1F" }}
                >
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold"
                  style={{
                    background:
                      open === i
                        ? "rgba(139,94,60,0.15)"
                        : "rgba(139,94,60,0.07)",
                    color: open === i ? "#8B5E3C" : "rgba(61,43,31,0.45)",
                    border: "1px solid rgba(139,94,60,0.2)",
                  }}
                >
                  +
                </motion.span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: open === i ? "auto" : 0,
                  opacity: open === i ? 1 : 0,
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p
                  className="px-6 pb-6 text-sm leading-relaxed"
                  style={{ color: "rgba(61,43,31,0.72)" }}
                >
                  {faq.a}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
