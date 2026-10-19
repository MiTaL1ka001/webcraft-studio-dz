import React from 'react';
import { BRAND, SERVICES_DATA } from '../data/siteData';
import { PageRoute, ProcessSteps, ContactCTABanner } from '../components/LayoutComponents';
import { ServiceIcon, WhatsAppIcon } from '../components/BrandAssets';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      {/* PAGE HEADER + 2x2 GRID (Matches Panel 2 of Reference Design) */}
      <section className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#007BFF]">
              NOS SERVICES
            </span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1320] tracking-tight leading-[1.15]">
              Des solutions web adaptées à votre activité.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#1F2937] leading-relaxed">
              Nous vous accompagnons dans la création de sites web modernes, performants et adaptés à vos objectifs.
            </p>
          </div>

          {/* 2x2 Cards Overview Grid (Exact layout from Reference Image Panel 2) */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl bg-[#F3F6FA]/70 border border-slate-200/90 hover:border-[#007BFF]/45 p-7 sm:p-8 flex flex-col justify-between transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-2xs">
                      <ServiceIcon name={service.iconName} />
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                      Service {service.number}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1320]">
                    {service.title}
                  </h2>
                  <p className="mt-2.5 text-sm sm:text-base text-[#1F2937] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-3">
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

                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F2937] hover:text-[#007BFF] transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Discuter de ce service →</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUR DETAILED SERVICE SECTIONS (Section 7 of Prompt) */}
      <section className="py-16 sm:py-20 bg-[#F3F6FA]/60 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#007BFF]">
              PRÉSENTATION DÉTAILLÉE
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0B1320] tracking-tight">
              Ce que comprend chaque prestation
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#1F2937]">
              Chaque projet est conçu avec soin pour répondre aux exigences concrètes de votre activité.
            </p>
          </div>

          <div className="space-y-8">
            {SERVICES_DATA.map((service) => (
              <article
                key={service.id}
                id={service.slug}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-9 shadow-2xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Service Overview */}
                  <div className="lg:col-span-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F6FA] text-[#007BFF] text-xs font-bold uppercase tracking-wider mb-4">
                      <span>Service {service.number}</span>
                    </div>
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="w-11 h-11 rounded-xl bg-[#F3F6FA] border border-slate-200/80 flex items-center justify-center shrink-0">
                        <ServiceIcon name={service.iconName} />
                      </div>
                      <h3 className="text-2xl font-extrabold text-[#0B1320]">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-base text-[#1F2937] leading-relaxed mt-3">
                      {service.description}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          onNavigate({ page: 'service-detail', slug: service.slug })
                        }
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#007BFF] hover:bg-[#0066D6] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                      >
                        <span>Voir la fiche détaillée</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <a
                        href={BRAND.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#F3F6FA] text-[#0B1320] border border-slate-300 text-xs sm:text-sm font-semibold transition-colors"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                        <span>Discutons sur WhatsApp →</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Features List */}
                  <div className="lg:col-span-7 bg-[#F3F6FA]/70 rounded-xl border border-slate-200/80 p-5 sm:p-7">
                    <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#0B1320] mb-4">
                      Caractéristiques &amp; fonctionnalités incluses
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {service.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2.5 bg-white p-3.5 rounded-lg border border-slate-200/70"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#007BFF] shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-[#0B1320]">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <ProcessSteps />

      {/* BOTTOM CTA (Matches Panel 2 bottom box) */}
      <ContactCTABanner
        title="Vous avez un projet spécifique ? Parlons-en sur Instagram ou WhatsApp."
        subtitle="Échangeons directement sur vos objectifs pour définir la solution web la plus pertinente."
      />
    </div>
  );
};
