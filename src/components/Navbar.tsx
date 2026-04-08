import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, ShoppingBag, Menu, X, Sun, Moon } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.collections, href: "#collections" },
    { label: t.nav.bridal, href: "#bridal" },
    { label: t.nav.craftsmanship, href: "#craftsmanship" },
    { label: t.nav.about, href: "#about" },
  ];

  const headerClassName = scrolled
    ? "bg-[hsl(var(--background)/0.92)] backdrop-blur-2xl border-b border-[hsl(var(--divider)/0.85)] shadow-[0_10px_30px_hsl(var(--foreground)/0.08)]"
    : dark
      ? "bg-[linear-gradient(to_bottom,hsl(var(--background)/0.78),hsl(var(--background)/0.58))] backdrop-blur-2xl border-b border-[hsl(var(--divider)/0.5)] shadow-[0_10px_30px_hsl(var(--foreground)/0.16)]"
      : "bg-[linear-gradient(to_bottom,hsl(var(--background)/0.92),hsl(var(--background)/0.82))] backdrop-blur-2xl border-b border-[hsl(var(--divider)/0.8)] shadow-[0_10px_30px_hsl(var(--foreground)/0.08)]";

  const navTextClassName = dark && !scrolled
    ? "text-foreground/94"
    : !dark && !scrolled
      ? "text-foreground"
      : "text-foreground";
  const navLinkClassName = dark && !scrolled
    ? "text-foreground/92 hover:text-foreground"
    : !dark && !scrolled
      ? "text-foreground/92 hover:text-foreground"
      : "text-foreground/85 hover:text-foreground";
  const iconClassName = dark && !scrolled
    ? "text-foreground/88 hover:text-primary"
    : !dark && !scrolled
      ? "text-foreground/88 hover:text-primary"
      : "text-foreground/80 hover:text-primary";

  const languageSwitcher = (
    <div
      className="flex items-center rounded-full border border-divider bg-background/75 p-1 backdrop-blur-sm"
      role="group"
      aria-label={t.nav.language}
    >
      <button
        type="button"
        onClick={() => setLanguage("de")}
        className={`rounded-full px-3 py-1.5 text-[11px] font-body tracking-[0.12em] uppercase transition-colors ${
          language === "de" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
        aria-pressed={language === "de"}
      >
        DE
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 py-1.5 text-[11px] font-body tracking-[0.12em] uppercase transition-colors ${
          language === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerClassName}`}
      >
        <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 h-[72px] gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-primary">
              <path d="M14 2L26 14L14 26L2 14L14 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M14 7L21 14L14 21L7 14L14 7Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
            </svg>
            <span className={`font-display text-lg sm:text-xl tracking-[0.15em] font-light transition-colors ${navTextClassName}`}>
              LUMIÈRE
            </span>
          </a>

          {/* Center links — desktop */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`gold-underline font-body text-[13px] tracking-[0.12em] uppercase transition-colors ${navLinkClassName}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="hidden md:flex">{languageSwitcher}</div>
            <button aria-label={t.nav.search} className={`transition-colors ${iconClassName}`}>
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button aria-label={t.nav.wishlist} className={`hidden sm:block transition-colors ${iconClassName}`}>
              <Heart size={18} strokeWidth={1.5} />
            </button>
            <button aria-label={t.nav.cart} className={`relative transition-colors ${iconClassName}`}>
              <ShoppingBag size={18} strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[9px] flex items-center justify-center font-body font-medium">
                2
              </span>
            </button>
            <button
              aria-label={t.nav.toggleTheme}
              onClick={() => setDark(!dark)}
              className={`hidden sm:block transition-colors ${iconClassName}`}
            >
              {dark ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
            </button>
            <button
              aria-label={t.nav.openMenu}
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden transition-colors ${iconClassName}`}
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl overflow-y-auto"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-foreground"
              aria-label={t.nav.closeMenu}
            >
              <X size={24} strokeWidth={1.5} />
            </button>
            <div className="min-h-screen flex flex-col justify-start px-6 pt-20 pb-10">
              <div className="flex justify-center mb-6">{languageSwitcher}</div>
              <div className="flex justify-center mb-8">
                <button
                  type="button"
                  onClick={() => setDark(!dark)}
                  className="inline-flex items-center gap-3 rounded-full border border-divider px-5 py-3 text-sm text-foreground"
                >
                  {dark ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
                  {t.nav.toggleTheme}
                </button>
              </div>
              <nav className="flex flex-col items-center gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                  className="font-display text-[clamp(1.85rem,1.2rem+3vw,2.4rem)] italic text-foreground tracking-wide"
                >
                  {link.label}
                </motion.a>
              ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
