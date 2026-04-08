import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import craftsmanshipImg from "@/assets/craftsmanship.jpg";
import sustainabilityImg from "@/assets/sustainability.jpg";
import { useLanguage } from "@/lib/i18n";

const AnimatedNumber = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 40;
    const interval = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(interval); }
      else setVal(Math.floor(start));
    }, 30);
    return () => clearInterval(interval);
  }, [inView, target]);

  return <span ref={ref} className="font-display text-fluid-xl text-primary">{val}{suffix}</span>;
};

const BrandStory = () => {
  const { t } = useLanguage();

  return (
  <section id="craftsmanship" className="scroll-mt-24 py-24 lg:py-32">
    {/* Panel 1 */}
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <p className="micro-label text-primary mb-6">{t.brandStory.eyebrow}</p>
        <h2 className="font-display italic text-fluid-2xl font-light text-foreground mb-6 leading-tight">
          {t.brandStory.title}
        </h2>
        <p className="font-body text-fluid-base text-muted-foreground leading-relaxed max-w-[52ch]">
          {t.brandStory.description}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className="overflow-hidden rounded-md"
      >
        <img src={craftsmanshipImg} alt={t.brandStory.craftsmanshipAlt} loading="lazy" className="w-full h-auto object-cover" />
      </motion.div>
    </div>

    {/* Panel 2 */}
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className="overflow-hidden rounded-md order-2 lg:order-1"
      >
        <img src={sustainabilityImg} alt={t.brandStory.sustainabilityAlt} loading="lazy" className="w-full h-auto object-cover" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className="order-1 lg:order-2"
      >
        <h2 className="font-display italic text-fluid-2xl font-light text-foreground mb-6 leading-tight">
          {t.brandStory.secondTitleLines.map((line, index) => (
            <span key={line}>
              {index > 0 && <br />}
              {line}
            </span>
          ))}
        </h2>
        <p className="font-body text-fluid-base text-muted-foreground leading-relaxed max-w-[52ch] mb-10">
          {t.brandStory.secondDescription}
        </p>
        <div className="flex flex-wrap gap-x-12 gap-y-6">
          {t.brandStory.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              <span className="font-body text-fluid-xs text-muted-foreground mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
};

export default BrandStory;
