import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const VirtualTryOn = () => {
  const { t } = useLanguage();

  return (
  <section className="py-24 lg:py-32 px-6 lg:px-12">
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Phone mockup */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="relative"
        >
          <div className="w-[260px] h-[520px] rounded-[40px] border-2 border-divider bg-card shadow-2xl flex flex-col items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-8 bg-foreground/5 rounded-t-[40px]" />
            <Smartphone size={40} className="text-primary/30 mb-6" strokeWidth={1} />
            <div className="w-20 h-20 rounded-full border-2 border-primary/40 mb-4 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-primary/20" />
            </div>
            <p className="font-body text-fluid-xs text-muted-foreground text-center">
              {t.virtualTryOn.mockup}
            </p>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-foreground/10" />
          </div>
        </motion.div>
      </motion.div>

      {/* Copy */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <p className="micro-label text-primary mb-6">{t.virtualTryOn.eyebrow}</p>
        <h2 className="font-display text-fluid-2xl font-light text-foreground mb-6 leading-tight">
          {t.virtualTryOn.titleLines.map((line, index) => (
            <span key={line}>
              {index > 0 && <br />}
              {line}
            </span>
          ))}
        </h2>
        <p className="font-body text-fluid-base text-muted-foreground leading-relaxed max-w-[48ch] mb-10">
          {t.virtualTryOn.description}
        </p>
        <a href="#" className="btn-filled-gold inline-block rounded-sm">
          {t.virtualTryOn.cta}
        </a>
      </motion.div>
    </div>
  </section>
);
};

export default VirtualTryOn;
