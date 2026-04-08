import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative">
      <div className="bg-[hsl(30,18%,4%)] text-[hsl(33,20%,91%)] py-24 lg:py-32">
        <div className="h-px bg-[hsl(38,38%,61%)]/30 max-w-[1400px] mx-auto mb-16" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-xl mx-auto px-6 text-center"
        >
          <h2 className="font-display italic text-[clamp(2rem,1.2rem+2.5vw,2.75rem)] font-light mb-4 leading-tight">
            {t.newsletter.heading}
          </h2>
          <p className="font-body text-[15px] text-[hsl(30,8%,55%)] mb-10">
            {t.newsletter.description}
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4"
                exit={{ opacity: 0, y: -10 }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.newsletter.placeholder}
                  required
                  className="flex-1 bg-transparent border-b border-[hsl(38,38%,61%)] pb-3 font-body text-sm text-[hsl(33,20%,91%)] placeholder:text-[hsl(30,8%,40%)] focus:outline-none focus:border-[hsl(38,45%,65%)] transition-colors"
                />
                <button
                  type="submit"
                  className="font-body text-sm text-[hsl(38,38%,61%)] hover:text-[hsl(38,45%,65%)] transition-colors pb-3 whitespace-nowrap text-left sm:text-right"
                >
                  {t.newsletter.cta}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full border-2 border-[hsl(38,38%,61%)] flex items-center justify-center">
                  <Check size={20} className="text-[hsl(38,38%,61%)]" />
                </div>
                <p className="font-display italic text-xl">{t.newsletter.success}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="font-body text-[11px] text-[hsl(30,8%,40%)] mt-8">
            {t.newsletter.privacy}
          </p>
        </motion.div>

        <div className="h-px bg-[hsl(38,38%,61%)]/30 max-w-[1400px] mx-auto mt-16" />
      </div>
    </section>
  );
};

export default Newsletter;
