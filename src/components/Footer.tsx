import { Instagram, Youtube } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const Footer = () => {
  const { t } = useLanguage();
  const footerSections = [
    { title: t.footer.sections.collections, links: t.footer.links.collections },
    { title: t.footer.sections.company, links: t.footer.links.company },
    { title: t.footer.sections.clientCare, links: t.footer.links.clientCare },
  ];

  return (
  <footer className="bg-[hsl(30,18%,4%)] text-[hsl(33,20%,91%)]">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" className="text-[hsl(38,38%,61%)]">
              <path d="M14 2L26 14L14 26L2 14L14 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M14 7L21 14L14 21L7 14L14 7Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
            </svg>
            <span className="font-display text-lg tracking-[0.15em] font-light">LUMIÈRE</span>
          </div>
          <p className="font-display italic text-sm text-[hsl(30,8%,55%)] mb-6">{t.footer.tagline}</p>
          <div className="flex gap-4">
            {[Instagram, () => (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M12 8a4 4 0 0 0-4 4c0 1.5.8 3 2 3.5V18h4v-2.5c1.2-.5 2-2 2-3.5a4 4 0 0 0-4-4z" />
              </svg>
            ), Youtube].map((Icon, i) => (
              <a key={i} href="#" className="text-[hsl(30,8%,55%)] hover:text-[hsl(38,38%,61%)] transition-colors">
                <Icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {footerSections.map(({ title, links }) => (
          <div key={title}>
            <h4 className="font-body text-[13px] tracking-[0.1em] uppercase text-[hsl(30,8%,55%)] mb-5">{title}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-[hsl(33,20%,80%)] hover:text-[hsl(38,38%,61%)] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-[hsl(30,12%,15%)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-[12px] text-[hsl(30,8%,40%)]">
          {t.footer.copyright}
        </p>
        <div className="flex items-center gap-4">
          {["Visa", "Mastercard", "Amex", "PayPal"].map((name) => (
            <span key={name} className="font-body text-[11px] text-[hsl(30,8%,40%)] tracking-wide uppercase">{name}</span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
};

export default Footer;
