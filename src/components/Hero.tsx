import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-ring.jpg";
import { useLanguage } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden pt-[80px] sm:pt-[72px]">
      <div className="min-h-[calc(100dvh-72px)] flex flex-col lg:flex-row">
        {/* Left — Image */}
        <div className="relative w-full lg:w-[54%] px-4 pt-2 sm:px-0 sm:pt-0">
          <div className="relative h-[39dvh] sm:h-[52dvh] lg:h-auto lg:min-h-[calc(100dvh-72px)] overflow-hidden rounded-2xl sm:rounded-none bg-[hsl(30,18%,4%)]">
          <motion.img
            src={heroImg}
            alt={t.productSpotlight.title}
            className="w-full h-full object-contain sm:object-cover object-center"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            width={1080}
            height={1920}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 lg:hidden" />
          </div>
        </div>

        {/* Right — Text */}
        <div className="w-full lg:w-[46%] flex items-center px-6 sm:px-8 lg:px-12 xl:px-16 py-10 sm:py-12 lg:py-16 bg-background">
          <div className="w-full max-w-[38rem] mx-auto lg:mx-0">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="micro-label text-primary mb-6"
            >
              {t.hero.eyebrow}
            </motion.p>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display italic font-light text-foreground leading-[0.98] tracking-[-0.02em] mb-6"
              style={{ fontSize: "clamp(2.45rem, 1.3rem + 3.1vw, 5.25rem)" }}
            >
              {t.hero.titleLines.map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-body text-fluid-base text-foreground/65 max-w-[34rem] mb-10 leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            >
              <a href="#collections" className="btn-ghost-gold rounded-sm">
                {t.hero.primaryCta}
              </a>
              <a
                href="#craftsmanship"
                className="gold-underline font-body text-fluid-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.hero.secondaryCta}
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="w-px h-8 bg-primary/40" />
        <ChevronDown size={16} className="text-primary/60" strokeWidth={1.5} />
      </motion.div>

      {/* Gold divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/30" />
    </section>
  );
};

export default Hero;
