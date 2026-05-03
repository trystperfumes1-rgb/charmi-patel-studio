import { motion } from "motion/react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

export function FloatingButtons() {
  return (
    <>
      {/* Left: Instagram */}
      <motion.a
        href="https://instagram.com/charmipatel_makeupartist"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="floating.instagram_button"
        aria-label="Follow on Instagram"
        className="fixed left-4 bottom-8 z-50 flex items-center gap-2 px-4 py-3 rounded-full font-semibold text-sm text-white shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
          boxShadow:
            "0 0 20px rgba(253,29,29,0.4), 0 10px 30px rgba(0,0,0,0.5)",
        }}
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        whileHover={{ scale: 1.08, x: 4 }}
        whileTap={{ scale: 0.95 }}
      >
        <SiInstagram size={18} />
        <span className="hidden sm:block">Instagram</span>
      </motion.a>

      {/* Right: WhatsApp with pulse */}
      <motion.a
        href="https://wa.me/918490075078"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="floating.whatsapp_button"
        aria-label="Chat on WhatsApp"
        className="fixed right-4 bottom-8 z-50 flex items-center gap-2 px-4 py-3 rounded-full font-semibold text-sm text-white shadow-2xl"
        style={{
          background: "#25D366",
          boxShadow:
            "0 0 20px rgba(37,211,102,0.5), 0 10px 30px rgba(0,0,0,0.5)",
        }}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        whileHover={{ scale: 1.08, x: -4 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-30"
          style={{ background: "#25D366" }}
        />
        <SiWhatsapp size={18} />
        <span className="hidden sm:block">WhatsApp</span>
      </motion.a>
    </>
  );
}
