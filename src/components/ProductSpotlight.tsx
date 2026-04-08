import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import spotlightImg from "@/assets/spotlight-ring.jpg";
import { useLanguage } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const ProductSpotlight = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const { t } = useLanguage();

  return (
    <section ref={ref} className="relative bg-[hsl(30,18%,4%)] text-[hsl(33,20%,91%)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Image */}
        <div className="relative h-[60vh] lg:h-auto overflow-hidden">
          <motion.img
            src={spotlightImg}
            alt={t.productSpotlight.title}
            className="w-full h-[120%] object-cover absolute top-0"
            style={{ y: imgY }}
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="micro-label !text-[hsl(38,38%,61%)] mb-6">
            {t.productSpotlight.eyebrow}
          </motion.p>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-fluid-2xl font-light mb-8 leading-tight">
            {t.productSpotlight.title}
          </motion.h2>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4 mb-10">
            <p className="font-body text-fluid-base text-[hsl(30,8%,65%)] leading-relaxed max-w-[48ch]">
              {t.productSpotlight.paragraphs[0]}
            </p>
            <p className="font-body text-fluid-base text-[hsl(30,8%,65%)] leading-relaxed max-w-[48ch]">
              {t.productSpotlight.paragraphs[1]}
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap gap-x-6 gap-y-2 mb-12">
            {t.productSpotlight.features.map((f, i) => (
              <span key={f} className="flex items-center gap-3 font-body text-fluid-sm text-[hsl(33,20%,91%)]">
                {i > 0 && <span className="w-6 h-px bg-[hsl(38,38%,61%)]/40" />}
                {f}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <a href="#" className="inline-block bg-[hsl(38,38%,61%)] text-[hsl(30,18%,4%)] px-9 py-3.5 font-body text-sm tracking-wide transition-all duration-[280ms] hover:bg-[hsl(36,42%,38%)]">
              {t.productSpotlight.cta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpotlight;
