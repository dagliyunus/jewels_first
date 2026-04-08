import { motion } from "framer-motion";
import collectionRings from "@/assets/collection-rings.jpg";
import collectionBridal from "@/assets/collection-bridal.jpg";
import collectionEveryday from "@/assets/collection-everyday.jpg";
import collectionNew from "@/assets/collection-new.jpg";
import { useLanguage } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const FeaturedCollections = () => {
  const { t } = useLanguage();
  const collections = [
    { title: t.featuredCollections.items[0], img: collectionRings, span: "col-span-1 md:col-span-2 row-span-2", aspect: "aspect-[3/4]" },
    { title: t.featuredCollections.items[1], img: collectionBridal, span: "col-span-1", aspect: "aspect-[3/4]" },
    { title: t.featuredCollections.items[2], img: collectionEveryday, span: "col-span-1", aspect: "aspect-square" },
    { title: t.featuredCollections.items[3], img: collectionNew, span: "col-span-1 md:col-span-3", aspect: "aspect-[3/1] md:aspect-[4/1]" },
  ];

  return (
    <section id="collections" className="scroll-mt-24 py-24 lg:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
        <h2 className="font-display text-fluid-2xl font-light text-foreground mb-2">{t.featuredCollections.heading}</h2>
        <p className="font-body text-fluid-sm text-muted-foreground mb-12">{t.featuredCollections.subheading}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
        {collections.map((col, i) => (
          <motion.div
            key={col.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.1 }}
            className={`${col.span} group relative overflow-hidden rounded-md cursor-pointer`}
          >
            <div className={`${col.aspect} relative overflow-hidden`}>
              <img
                src={col.img}
                alt={col.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-0 md:translate-y-4 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
                <h3 className="font-display italic text-[clamp(1.25rem,1rem+1vw,1.75rem)] text-primary-foreground mb-1">
                  {col.title}
                </h3>
                <span className="font-body text-[13px] text-primary tracking-wide">{t.featuredCollections.shopNow}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;
