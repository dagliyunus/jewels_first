import { useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const pressLogos = ["VOGUE", "HARPER'S BAZAAR", "ELLE", "THE TIMES", "FINANCIAL TIMES"];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const { t } = useLanguage();

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="about" className="scroll-mt-24 py-24 lg:py-32 overflow-hidden">
      {/* Press logos marquee */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
        <div className="overflow-hidden relative">
          <div className="marquee flex items-center gap-16 w-max">
            {[...pressLogos, ...pressLogos].map((logo, i) => (
              <span
                key={i}
                className="font-body text-lg tracking-[0.2em] text-muted-foreground/50 hover:text-primary transition-colors duration-300 cursor-default whitespace-nowrap"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Testimonials */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-10">
          <h2 className="font-display text-fluid-2xl font-light text-foreground">{t.testimonials.heading}</h2>
          <div className="flex gap-3">
            <button onClick={scrollPrev} className="w-10 h-10 rounded-full border border-divider flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors">
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button onClick={scrollNext} className="w-10 h-10 rounded-full border border-divider flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors">
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6">
            {t.testimonials.items.map((item) => (
              <div key={item.name} className="flex-shrink-0 w-[88%] sm:w-[45%] lg:w-[32%]">
                <div className="bg-surface-2 rounded-lg p-8 h-full flex flex-col">
                  <div className="text-primary text-base mb-4">★★★★★</div>
                  <p className="font-display italic text-xl text-foreground leading-relaxed mb-6 flex-1 max-w-[36ch]">
                    "{item.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center font-display text-sm text-primary">
                      {item.name[0]}
                    </div>
                    <div>
                      <p className="font-body text-[13px] text-foreground tracking-wide uppercase">{item.name}</p>
                      <p className="font-body text-[11px] text-muted-foreground">{item.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
