import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "de" | "en";

const STORAGE_KEY = "lumiere-language";

export const translations = {
  de: {
    meta: {
      title: "LUMIÈRE — Im Licht gefertigt | Exklusiver Schmuck",
      description:
        "Entdecken Sie LUMIÈREs Kollektion ethisch bezogener Schmuckstücke. Ringe, Halsketten, Ohrringe und Armbänder mit einem Jahrhundert Handwerkskunst.",
    },
    nav: {
      home: "Startseite",
      collections: "Kollektionen",
      bridal: "Brautschmuck",
      craftsmanship: "Handwerk",
      about: "Über uns",
      search: "Suche",
      wishlist: "Merkliste",
      cart: "Warenkorb",
      toggleTheme: "Thema wechseln",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
      language: "Sprache",
      german: "Deutsch",
      english: "English",
    },
    hero: {
      eyebrow: "NEUE KOLLEKTION 2026",
      titleLines: ["Wo Licht", "zum Vermächtnis wird"],
      description:
        "Jedes Schmuckstück unserer Kollektion fängt die Brillanz ethisch bezogener Diamanten ein, gefasst in zeitlosen Designs für Generationen.",
      primaryCta: "Kollektion ansehen",
      secondaryCta: "Handwerk entdecken →",
    },
    featuredCollections: {
      heading: "Unsere Kollektionen",
      subheading: "Entdecken Sie die gesamte Auswahl",
      shopNow: "Jetzt entdecken →",
      items: [
        "Die Eternal-Ring-Kollektion",
        "Brautschmuck",
        "Everyday Luxe",
        "Neuheiten 2026",
      ],
    },
    productSpotlight: {
      eyebrow: "SIGNATURSTÜCK",
      title: "Der Lumière Solitaire",
      paragraphs: [
        "Ein Meisterwerk aus Licht und Präzision. Jeder Lumière Solitaire wird von unseren Meistergoldschmieden in unserem Pariser Atelier von Hand gefasst, damit jede Facette das Licht mit außergewöhnlicher Brillanz einfängt und zurückwirft.",
        "Unsere Diamanten stammen aus den verantwortungsvollsten Minen der Welt und werden wegen ihrer außergewöhnlichen Reinheit und ihres Feuers ausgewählt. Ein Schmuckstück, das für Herkunft, Handwerk und Liebe steht.",
      ],
      features: ["VS1 Reinheit", "Platinfassung", "18 Karat Gold", "GIA-zertifiziert"],
      cta: "Dieses Schmuckstück entdecken",
    },
    productGrid: {
      heading: "Edler Schmuck",
      quickView: "Schnellansicht",
      categories: {
        all: "Alle",
        rings: "Ringe",
        necklaces: "Halsketten",
        earrings: "Ohrringe",
        bracelets: "Armbänder",
      },
      products: [
        { name: "Eternal Solitaire Ring", desc: "18 Karat Gold · VS1 Diamant", price: "4.200 €", category: "rings" },
        { name: "Lumière Pendant", desc: "18 Karat Gold · Diamantkette", price: "2.800 €", category: "necklaces" },
        { name: "Golden Arc Hoops", desc: "18 Karat Gold · Handgefertigt", price: "1.450 €", category: "earrings" },
        { name: "Diamond Whisper Bangle", desc: "18 Karat Gold · 2 Diamanten", price: "1.900 €", category: "bracelets" },
        { name: "Halo Engagement Ring", desc: "Platin · Rundschliff", price: "6.500 €", category: "rings" },
        { name: "Cascade Necklace", desc: "18 Karat Gold · Mehrlagig", price: "3.200 €", category: "necklaces" },
        { name: "Petite Studs", desc: "18 Karat Gold · VS2 Diamanten", price: "980 €", category: "earrings" },
        { name: "Heritage Cuff", desc: "18 Karat Gold · Graviert", price: "2.400 €", category: "bracelets" },
      ],
    },
    brandStory: {
      eyebrow: "SEIT 1924",
      title: "Ein Jahrhundert aus Licht",
      description:
        "Seit über hundert Jahren prägt Lumière die Welt des feinen Schmucks mit unerschütterlichem Anspruch an Kunstfertigkeit und Exzellenz. Von unserem Atelier in Paris bis zu den anspruchsvollsten Sammlerinnen und Sammlern der Welt trägt jede Kreation ein Erbe des Lichts weiter, gefertigt von Meisterhandwerkern mit Wissen über Generationen hinweg.",
      secondTitleLines: ["Ethisch bezogen.", "Für immer Ihres."],
      secondDescription:
        "Transparenz steht im Mittelpunkt all unseres Handelns. Jeder Diamant der Lumière Kollektion ist ethisch bezogen und vollständig rückverfolgbar, von der Mine bis zum Meisterwerk. Wir arbeiten mit verantwortungsvollen Partnern und verwenden zu 98 % recycelte Edelmetalle, denn wahrer Luxus darf niemals auf Kosten der Welt entstehen.",
      stats: [
        { value: 98, suffix: "%", label: "Recyceltes Gold" },
        { value: 100, suffix: "%", label: "Konfliktfrei" },
        { value: 50, suffix: "+", label: "Belieferte Länder" },
      ],
      craftsmanshipAlt: "Meisterhandwerker fertigt goldenen Schmuck",
      sustainabilityAlt: "Ethisch bezogene Materialien",
    },
    testimonials: {
      heading: "Was unsere Kundinnen und Kunden sagen",
      items: [
        {
          quote: "Der exquisiteste Ring, den ich je besessen habe. Die Handwerkskunst übertrifft alles, was ich bislang gesehen habe.",
          name: "Alexandra M.",
          location: "London, Großbritannien",
        },
        {
          quote: "Lumière hat genau verstanden, was ich mir für unseren Antrag gewünscht habe. Reine Perfektion.",
          name: "James & Sophie",
          location: "Paris, Frankreich",
        },
        {
          quote: "Von der Beratung bis zum Auspacken fühlte sich jeder Moment wie eine Feier der Schönheit an.",
          name: "Priya R.",
          location: "Mumbai, Indien",
        },
        {
          quote: "Die Transparenz bei der ethischen Herkunft hat mir völlige Sicherheit gegeben. Atemberaubende Qualität.",
          name: "Emma L.",
          location: "New York, USA",
        },
        {
          quote: "Ich sammle seit Jahrzehnten Schmuck. Lumière sticht in jeder Hinsicht heraus.",
          name: "Catherine D.",
          location: "Genf, Schweiz",
        },
      ],
    },
    virtualTryOn: {
      eyebrow: "VIRTUELLES ANPROBIEREN",
      titleLines: ["Sehen Sie es an sich,", "bevor Sie es kaufen"],
      description:
        "Unsere Augmented-Reality-Technologie lässt Sie jedes Stück erleben, als gehöre es bereits Ihnen. Probieren Sie Ringe, Halsketten und Ohrringe überall auf der Welt an, ein luxuriöser Anproberaum in Ihrer Hand.",
      cta: "Jetzt ausprobieren",
      mockup: "Richten Sie Ihre Kamera auf Ihre Hand, um Ringe virtuell anzuprobieren",
    },
    newsletter: {
      heading: "Zuerst erfahren. Zuerst besitzen.",
      description: "Werden Sie Teil von 50.000 Sammlerinnen und Sammlern. Früher Zugang, exklusive Stücke, private Veranstaltungen.",
      placeholder: "Ihre E-Mail-Adresse",
      cta: "Anmelden →",
      success: "Willkommen bei Lumière",
      privacy: "Wir respektieren Ihre Privatsphäre. Abmeldung jederzeit möglich.",
    },
    footer: {
      tagline: "Im Licht gefertigt.",
      sections: {
        collections: "Kollektionen",
        company: "Unternehmen",
        clientCare: "Kundenservice",
      },
      links: {
        collections: ["Ringe", "Halsketten", "Ohrringe", "Armbänder", "Brautschmuck", "Geschenke"],
        company: ["Unsere Geschichte", "Handwerk", "Nachhaltigkeit", "Presse", "Karriere"],
        clientCare: ["Kontakt", "Größenratgeber", "Zertifikate", "Retouren", "Termin buchen"],
      },
      copyright: "© 2026 Lumière. Alle Rechte vorbehalten.",
    },
    notFound: {
      message: "Ups. Diese Seite wurde nicht gefunden.",
      cta: "Zur Startseite zurück",
    },
  },
  en: {
    meta: {
      title: "LUMIÈRE — Crafted in Light | Fine Luxury Jewelry",
      description:
        "Discover LUMIÈRE's collection of ethically sourced fine jewelry. Diamond rings, necklaces, earrings and bracelets crafted with a century of heritage.",
    },
    nav: {
      home: "Home",
      collections: "Collections",
      bridal: "Bridal",
      craftsmanship: "Craftsmanship",
      about: "About",
      search: "Search",
      wishlist: "Wishlist",
      cart: "Cart",
      toggleTheme: "Toggle theme",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language",
      german: "Deutsch",
      english: "English",
    },
    hero: {
      eyebrow: "NEW COLLECTION 2026",
      titleLines: ["Where Light", "Becomes Legacy"],
      description:
        "Each piece in our collection captures the brilliance of ethically sourced diamonds, set in timeless designs that transcend generations.",
      primaryCta: "View Collection",
      secondaryCta: "Explore Craftsmanship →",
    },
    featuredCollections: {
      heading: "Our Collections",
      subheading: "Explore the full range",
      shopNow: "Shop Now →",
      items: [
        "The Eternal Ring Collection",
        "Bridal",
        "Everyday Luxe",
        "New Arrivals 2026",
      ],
    },
    productSpotlight: {
      eyebrow: "SIGNATURE PIECE",
      title: "The Lumière Solitaire",
      paragraphs: [
        "A masterpiece of light and precision. Each Lumière Solitaire is hand-set by our master craftsmen in our Paris atelier, ensuring every facet captures and returns light with breathtaking brilliance.",
        "Sourced from the world's most responsible mines, our diamonds are selected for their exceptional clarity and fire. A piece that speaks to heritage, to craft, and to love itself.",
      ],
      features: ["VS1 Clarity", "Platinum Setting", "18K Gold", "GIA Certified"],
      cta: "Discover This Piece",
    },
    productGrid: {
      heading: "Fine Jewelry",
      quickView: "Quick View",
      categories: {
        all: "All",
        rings: "Rings",
        necklaces: "Necklaces",
        earrings: "Earrings",
        bracelets: "Bracelets",
      },
      products: [
        { name: "Eternal Solitaire Ring", desc: "18K Gold · VS1 Diamond", price: "€4,200", category: "rings" },
        { name: "Lumière Pendant", desc: "18K Gold · Diamond Chain", price: "€2,800", category: "necklaces" },
        { name: "Golden Arc Hoops", desc: "18K Gold · Handcrafted", price: "€1,450", category: "earrings" },
        { name: "Diamond Whisper Bangle", desc: "18K Gold · 2 Diamonds", price: "€1,900", category: "bracelets" },
        { name: "Halo Engagement Ring", desc: "Platinum · Round Cut", price: "€6,500", category: "rings" },
        { name: "Cascade Necklace", desc: "18K Gold · Layered", price: "€3,200", category: "necklaces" },
        { name: "Petite Studs", desc: "18K Gold · VS2 Diamonds", price: "€980", category: "earrings" },
        { name: "Heritage Cuff", desc: "18K Gold · Engraved", price: "€2,400", category: "bracelets" },
      ],
    },
    brandStory: {
      eyebrow: "SINCE 1924",
      title: "A Century of Light",
      description:
        "For over a hundred years, Lumière has illuminated the world of fine jewelry with an unwavering commitment to artistry and excellence. From our atelier in Paris to the world's most discerning collectors, every creation carries forward a legacy of light, meticulously crafted by master artisans whose knowledge spans generations.",
      secondTitleLines: ["Ethically Sourced.", "Forever Yours."],
      secondDescription:
        "Transparency is at the heart of everything we do. Every diamond in the Lumière collection is ethically sourced and fully traceable, from mine to masterpiece. We partner with responsible suppliers and use 98% recycled precious metals, because true luxury should never come at the world's expense.",
      stats: [
        { value: 98, suffix: "%", label: "Recycled Gold" },
        { value: 100, suffix: "%", label: "Conflict-Free" },
        { value: 50, suffix: "+", label: "Countries Served" },
      ],
      craftsmanshipAlt: "Master artisan crafting gold jewelry",
      sustainabilityAlt: "Ethically sourced materials",
    },
    testimonials: {
      heading: "What They Say",
      items: [
        {
          quote: "The most exquisite ring I've ever owned. The craftsmanship is beyond anything I've seen.",
          name: "Alexandra M.",
          location: "London, UK",
        },
        {
          quote: "Lumière understood exactly what I wanted for our engagement. Pure perfection.",
          name: "James & Sophie",
          location: "Paris, France",
        },
        {
          quote: "From the consultation to unwrapping, every moment felt like a celebration of beauty.",
          name: "Priya R.",
          location: "Mumbai, India",
        },
        {
          quote: "The ethical sourcing transparency gave me complete peace of mind. Stunning quality.",
          name: "Emma L.",
          location: "New York, USA",
        },
        {
          quote: "I've collected jewelry for decades. Lumière stands apart in every way.",
          name: "Catherine D.",
          location: "Geneva, Switzerland",
        },
      ],
    },
    virtualTryOn: {
      eyebrow: "VIRTUAL TRY-ON",
      titleLines: ["See It On You,", "Before You Buy"],
      description:
        "Our augmented reality technology lets you experience every piece as if it were already yours. Try on rings, necklaces, and earrings from anywhere in the world, a luxury fitting room in the palm of your hand.",
      cta: "Try It Now",
      mockup: "Point your camera at your hand to try on rings virtually",
    },
    newsletter: {
      heading: "First to Know. First to Own.",
      description: "Join 50,000 collectors. Early access, exclusive pieces, private events.",
      placeholder: "Your email address",
      cta: "Join →",
      success: "Welcome to Lumière",
      privacy: "We respect your privacy. Unsubscribe anytime.",
    },
    footer: {
      tagline: "Crafted in Light.",
      sections: {
        collections: "Collections",
        company: "Company",
        clientCare: "Client Care",
      },
      links: {
        collections: ["Rings", "Necklaces", "Earrings", "Bracelets", "Bridal", "Gifts"],
        company: ["Our Story", "Craftsmanship", "Sustainability", "Press", "Careers"],
        clientCare: ["Contact", "Sizing Guide", "Certificates", "Returns", "Book Appointment"],
      },
      copyright: "© 2026 Lumière. All rights reserved.",
    },
    notFound: {
      message: "Oops! Page not found",
      cta: "Return to Home",
    },
  },
} as const;

type TranslationSchema = typeof translations.en;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationSchema;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "de";
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "en" ? "en" : "de";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
    document.title = translations[language].meta.title;

    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", translations[language].meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    ogTitle?.setAttribute("content", translations[language].meta.title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    ogDescription?.setAttribute("content", translations[language].meta.description);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};
