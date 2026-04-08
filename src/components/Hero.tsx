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
    <section id="home" className="relative min-h-[100dvh] scroll-mt-24 flex flex-col lg:flex-row overflow-hidden">
      {/* Left — Image */}
      <div className="relative w-full lg:w-[55%] h-[42dvh] sm:h-[50dvh] lg:h-full overflow-hidden">
        <motion.img
          src={heroImg}
          alt={t.productSpotlight.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          width={1080}
          height={1920}
        />
      </div>

      {/* Right — Text */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-8 lg:px-16 xl:px-24 py-8 sm:py-12 lg:py-0">
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
          className="font-display italic font-light text-foreground leading-[1.05] mb-6"
          style={{ fontSize: "clamp(2.2rem, 0.9rem + 6vw, 6rem)" }}
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
          className="font-body text-fluid-base text-muted-foreground max-w-[38ch] mb-10 leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
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

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
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
