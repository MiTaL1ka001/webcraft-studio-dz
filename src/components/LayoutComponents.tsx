import React, { useState, useEffect } from 'react';
import { BRAND, PROCESS_STEPS } from '../data/siteData';
import {
  WebCraftLogo,
  InstagramIcon,
  WhatsAppIcon,
  ProcessStepIcon,
} from './BrandAssets';
import { Menu, X, ArrowRight } from 'lucide-react';

export type PageRoute =
  | { page: 'accueil' }
  | { page: 'services' }
  | { page: 'service-detail'; slug: string }
  | { page: 'realisations' }
  | { page: 'project-detail'; slug: string }
  | { page: 'a-propos' }
  | { page: 'contact' }
  | { page: 'mentions-legales' };

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentRoute]);

  const navItems: { label: string; route: PageRoute; matchPages: PageRoute['page'][] }[] = [
    { label: 'Accueil', route: { page: 'accueil' }, matchPages: ['accueil'] },
    {
      label: 'Services',
      route: { page: 'services' },
      matchPages: ['services', 'service-detail'],
    },
    {
      label: 'Réalisations',
      route: { page: 'realisations' },
      matchPages: ['realisations', 'project-detail'],
    },
    { label: 'À propos', route: { page: 'a-propos' }, matchPages: ['a-propos'] },
    { label: 'Contact', route: { page: 'contact' }, matchPages: ['contact'] },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xs border-b transition-shadow duration-200 ${
        scrolled ? 'border-slate-200 shadow-xs' : 'border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4">
        {/* Left: Official WebCraft Logo */}
        <button
          type="button"
          onClick={() => handleNavClick({ page: 'accueil' })}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007BFF] rounded-lg py-1 cursor-pointer text-left"
          aria-label="WebCraft Design Studio — Retour à l'accueil"
        >
          <WebCraftLogo size="sm" />
        </button>

        {/* Center: Desktop Navigation */}
        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-7 lg:gap-8">
          {navItems.map((item) => {
            const isActive = item.matchPages.includes(currentRoute.page);
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.route)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-2 text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#0B1320] font-semibold'
                    : 'text-[#1F2937] hover:text-[#007BFF]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-[#007BFF]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Social Icons + Primary CTA */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram officiel WebCraft"
            title="Instagram WebCraft (@webcraft.studiodz)"
            className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-[#0B1320] hover:text-[#007BFF] hover:border-[#007BFF]/40 hover:bg-[#F3F6FA] transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>

          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter WebCraft sur WhatsApp"
            title="WhatsApp WebCraft (+213 795 17 47 84)"
            className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-[#0B1320] hover:text-[#007BFF] hover:border-[#007BFF]/40 hover:bg-[#F3F6FA] transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>

          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#007BFF] hover:bg-[#0066D6] text-white text-sm font-semibold transition-colors shadow-xs"
          >
            <span>Discutons</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram officiel WebCraft"
            className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-[#0B1320]"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp officiel WebCraft"
            className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-[#0B1320]"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-[#0B1320] hover:bg-[#F3F6FA] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 shadow-lg animate-fade-in"
        >
          <nav aria-label="Menu mobile" className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = item.matchPages.includes(currentRoute.page);
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item.route)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#F3F6FA] text-[#007BFF] font-semibold'
                      : 'text-[#0B1320] hover:bg-[#F3F6FA]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#007BFF]" />}
                </button>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-2.5">
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#007BFF] text-white text-sm font-semibold"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Discutons →</span>
            </a>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-slate-300 text-[#0B1320] text-sm font-semibold"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export const ProcessSteps: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#007BFF]">
            NOTRE MÉTHODE
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0B1320] tracking-tight">
            Un accompagnement structuré en 4 étapes.
          </h2>
          <p className="mt-3 text-[#1F2937] text-base leading-relaxed">
            De la compréhension de votre besoin jusqu’à la mise en ligne, nous avançons avec méthode et transparence.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Subtle connecting horizontal line on large screens */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-11 left-[12%] right-[12%] h-[1px] bg-slate-200 z-0"
          />

          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="relative z-10 bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-[#007BFF]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#F3F6FA] border border-slate-200/80 flex items-center justify-center">
                    <ProcessStepIcon name={step.icon} />
                  </div>
                  <span className="text-xs font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full bg-[#F3F6FA] text-[#007BFF]">
                    Étape {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0B1320] mb-2">
                  {step.number} — {step.title}
                </h3>
                <p className="text-sm text-[#1F2937] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ContactCTABannerProps {
  title?: string;
  subtitle?: string;
}

export const ContactCTABanner: React.FC<ContactCTABannerProps> = ({
  title = 'Un projet en tête ?',
  subtitle = 'Parlons de votre activité et trouvons ensemble la solution web qui vous correspond.',
}) => {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#F3F6FA] border border-slate-200/90 px-6 py-10 sm:px-12 sm:py-14 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.16em] text-[#007BFF] mb-2">
            CONTACT DIRECT
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1320] tracking-tight max-w-2xl mx-auto">
            {title}
          </h2>
          <p className="mt-3 text-base text-[#1F2937] max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#007BFF] hover:bg-[#0066D6] text-white text-sm font-semibold transition-colors shadow-xs"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Discutons sur Instagram</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0B1320] border border-slate-300 text-sm font-semibold transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Discutons sur WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0B1320] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-800">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <button
              type="button"
              onClick={() => onNavigate({ page: 'accueil' })}
              className="text-left focus:outline-none cursor-pointer"
              aria-label="WebCraft Design Studio — Retour à l'accueil"
            >
              <WebCraftLogo variant="light" size="md" showTagline />
            </button>
            <p className="mt-4 text-sm text-slate-300 max-w-sm leading-relaxed">
              Création de sites web modernes, performants et adaptés à votre activité pour valoriser votre présence en ligne.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400 mb-4">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'accueil' })}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'services' })}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'realisations' })}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Réalisations
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'a-propos' })}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  À propos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'contact' })}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'mentions-legales' })}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Mentions légales
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400 mb-4">
              Contact direct
            </h3>
            <div className="flex flex-col space-y-3 text-sm">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[#007BFF]">
                  <InstagramIcon className="w-4 h-4" />
                </span>
                <span>Instagram ({BRAND.instagramHandle})</span>
              </a>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[#25D366]">
                  <WhatsAppIcon className="w-4 h-4" />
                </span>
                <span>WhatsApp ({BRAND.whatsappDisplay})</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{BRAND.copyright}</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onNavigate({ page: 'mentions-legales' })}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Mentions légales
            </button>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const FloatingWhatsAppButton: React.FC = () => {
  return (
    <a
      href={BRAND.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter avec WebCraft sur WhatsApp (+213 795 17 47 84)"
      title="Discuter sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#0B1320] hover:bg-[#007BFF] text-white shadow-lg border border-white/15 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007BFF] focus-visible:ring-offset-2"
    >
      <span className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
        <WhatsAppIcon className="w-3.5 h-3.5" />
      </span>
      <span className="text-xs font-semibold tracking-wide hidden sm:inline">
        WhatsApp
      </span>
    </a>
  );
};
