import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import { useLanguage } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const ProductGrid = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState("all");
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());
  const categories = ["all", "rings", "necklaces", "earrings", "bracelets"] as const;
  const productImages = [product1, product2, product3, product4, product1, product2, product3, product4];
  const products = t.productGrid.products.map((product, index) => ({
    ...product,
    img: productImages[index],
  }));

  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  const toggleWish = (i: number) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <section id="bridal" className="scroll-mt-24 py-24 lg:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
        <h2 className="font-display text-fluid-2xl font-light text-foreground mb-8">{t.productGrid.heading}</h2>
      </motion.div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-body text-[13px] px-5 py-2 rounded-full border transition-all duration-300 ${
              active === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-transparent text-muted-foreground border-divider hover:border-primary/50"
            }`}
            layout
          >
            {t.productGrid.categories[cat]}
          </motion.button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((product, i) => (
            <motion.div
              key={product.name}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.95 }}
              layout
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden rounded-md mb-4 bg-secondary">
                <img
                  src={product.img}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {/* Wishlist */}
                <button
                  onClick={(e) => { e.stopPropagation(); toggleWish(i); }}
                  className="absolute top-3 right-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
                  aria-label={t.nav.wishlist}
                >
                  <Heart
                    size={18}
                    strokeWidth={1.5}
                    className={wishlist.has(i) ? "fill-primary text-primary" : "text-foreground/70"}
                  />
                </button>
                {/* Quick View */}
                <div className="absolute inset-0 hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-body text-[13px] tracking-wide bg-background/90 backdrop-blur-sm px-5 py-2.5 rounded-sm text-foreground">
                    {t.productGrid.quickView}
                  </span>
                </div>
              </div>
              <h3 className="font-body font-medium text-[15px] text-foreground mb-1">{product.name}</h3>
              <p className="font-body text-[13px] text-muted-foreground mb-1">{product.desc}</p>
              <p className="font-body font-semibold text-base text-primary">{product.price}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProductGrid;
