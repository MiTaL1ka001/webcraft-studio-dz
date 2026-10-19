import React from 'react';
import {
  BRAND,
  SERVICES_DATA,
  PORTFOLIO_PROJECTS,
  VALUE_INDICATORS,
} from '../data/siteData';
import { PageRoute, ProcessSteps, ContactCTABanner } from '../components/LayoutComponents';
import { HeroDeviceShowcase } from '../components/DeviceMockups';
import { PortfolioCard } from '../components/PortfolioCard';
import {
  ServiceIcon,
  ValueIndicatorIcon,
  WhatsAppIcon,
  InstagramIcon,
} from '../components/BrandAssets';
import { ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Display 3 featured real portfolio projects in the homepage preview row (like Panel 1)
  // with option to see all 8 on the Réalisations page
  const featuredPortfolio = [
    PORTFOLIO_PROJECTS[0], // PRIVILEGE MODE HOMME
    PORTFOLIO_PROJECTS[3], // FASHION SHOP
    PORTFOLIO_PROJECTS[6], // LUXORA PHONE
  ];

  return (
    <div className="animate-fade-in">
      {/* HERO SECTION */}
      <section className="relative pt-10 pb-14 sm:pt-14 sm:pb-18 lg:pt-16 lg:pb-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Copy Column */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F6FA] border border-slate-200/80 mb-5">
                <span className="w-2 h-2 rounded-full bg-[#007BFF]" />
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0B1320]">
                  AGENCE WEB &amp; DESIGN
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#0B1320] tracking-tight leading-[1.12]">
                Des sites web qui font{' '}
                <span className="text-[#007BFF]">la différence.</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#1F2937] leading-relaxed max-w-xl">
                Nous créons des sites web modernes, performants et adaptés à votre activité pour vous aider à attirer plus de clients et développer votre présence en ligne.
              </p>

              {/* Hero CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#007BFF] hover:bg-[#0066D6] text-white text-sm sm:text-base font-semibold transition-colors shadow-xs"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Discutons sur WhatsApp →</span>
                </a>

                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'realisations' })}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F3F6FA] text-[#0B1320] border border-slate-300 text-sm sm:text-base font-semibold transition-colors cursor-pointer"
                >
                  <span>Voir nos réalisations →</span>
                </button>
              </div>

              {/* Secondary direct Instagram contact link */}
              <div className="mt-5 flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                <span>Également disponible en message direct sur</span>
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#007BFF] hover:underline"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Instagram ({BRAND.instagramHandle})</span>
                </a>
              </div>
            </div>

            {/* Right Device Showcase Column */}
            <div className="lg:col-span-6">
              <HeroDeviceShowcase
                onSelectProject={(slug) =>
                  onNavigate({ page: 'project-detail', slug })
                }
              />
            </div>
          </div>

          {/* VALUE INDICATORS BAR (4 Compact Indicators — No Invented Statistics) */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200/80">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {VALUE_INDICATORS.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-[#F3F6FA] border border-slate-200/80"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-2xs">
                    <ValueIndicatorIcon name={item.icon} />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-[#0B1320]">
                      {item.title}
                    </h2>
                    <p className="text-xs text-[#1F2937] mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOMEPAGE SERVICES PREVIEW */}
      <section className="py-16 sm:py-20 bg-[#F3F6FA]/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#007BFF]">
                NOS EXPERTISES
              </span>
              <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-[#0B1320] tracking-tight">
                Nos services
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate({ page: 'services' })}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#007BFF] hover:text-[#0B1320] transition-colors cursor-pointer self-start sm:self-auto"
            >
              <span>Voir tous les services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#007BFF]/45 p-6 flex flex-col justify-between transition-all duration-200 shadow-2xs hover:shadow-sm"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F3F6FA] border border-slate-200/70 flex items-center justify-center mb-5">
                    <ServiceIcon name={service.iconName} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1320] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#1F2937] leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate({ page: 'service-detail', slug: service.slug })
                    }
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#007BFF] hover:text-[#0B1320] transition-colors cursor-pointer group"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOMEPAGE PORTFOLIO PREVIEW */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#007BFF]">
                PORTFOLIO
              </span>
              <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-[#0B1320] tracking-tight">
                Nos dernières réalisations
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#1F2937]">
                Découvrez une sélection de projets réels conçus et développés par WebCraft.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate({ page: 'realisations' })}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#007BFF] hover:text-[#0B1320] transition-colors cursor-pointer self-start sm:self-auto"
            >
              <span>Voir toutes les réalisations</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {featuredPortfolio.map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                onOpenDetail={(slug) =>
                  onNavigate({ page: 'project-detail', slug })
                }
              />
            ))}
          </div>

          {/* Clear CTA to full portfolio */}
          <div className="mt-11 text-center">
            <button
              type="button"
              onClick={() => onNavigate({ page: 'realisations' })}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0B1320] hover:bg-[#007BFF] text-white text-sm font-semibold transition-colors cursor-pointer shadow-xs"
            >
              <span>Découvrir toutes nos réalisations →</span>
            </button>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <ProcessSteps />

      {/* FINAL HOMEPAGE CTA */}
      <ContactCTABanner
        title="Un projet en tête ?"
        subtitle="Parlons de votre activité et trouvons ensemble la solution web qui vous correspond."
      />
    </div>
  );
};
