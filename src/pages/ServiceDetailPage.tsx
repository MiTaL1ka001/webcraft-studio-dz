import React from 'react';
import {
  BRAND,
  SERVICES_DATA,
  PORTFOLIO_PROJECTS,
} from '../data/siteData';
import { PageRoute, ProcessSteps } from '../components/LayoutComponents';
import {
  ServiceIcon,
  InstagramIcon,
  WhatsAppIcon,
} from '../components/BrandAssets';
import { PortfolioCard } from '../components/PortfolioCard';
import { ArrowLeft, ArrowRight, CheckCircle2, Layers } from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (route: PageRoute) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onNavigate,
}) => {
  const service =
    SERVICES_DATA.find((s) => s.slug === slug) || SERVICES_DATA[0];

  const otherServices = SERVICES_DATA.filter((s) => s.slug !== service.slug);
  const sampleProjects = PORTFOLIO_PROJECTS.slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* TOP BREADCRUMB & SERVICE HERO (Matches Panel 7 of Reference Design) */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => onNavigate({ page: 'services' })}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1F2937] hover:text-[#007BFF] transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour aux services</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#F3F6FA]/70 rounded-2xl border border-slate-200/90 p-6 sm:p-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#007BFF] mb-4">
                <span>Service {service.number}</span>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center shrink-0 shadow-2xs">
                  <ServiceIcon
                    name={service.iconName}
                    className="w-7 h-7 text-[#007BFF]"
                  />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B1320] tracking-tight">
                    {service.title}
                  </h1>
                  <p className="mt-3 text-base sm:text-lg text-[#1F2937] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                {service.deliverablesNote}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#007BFF] hover:bg-[#0066D6] text-white text-sm font-semibold transition-colors shadow-xs"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Discutons sur WhatsApp →</span>
                </a>
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-[#0B1320] border border-slate-300 text-sm font-semibold transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#007BFF]" />
                  <span>Discutons sur Instagram →</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm aspect-[16/11]">
                <img
                  src={service.studioImage}
                  alt={`Illustration du service ${service.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CE QUI EST INCLUS (Matches Panel 7 two-column feature checklist) */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#007BFF]">
                CARACTÉRISTIQUES
              </span>
              <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-[#0B1320] tracking-tight mb-6">
                Ce qui est inclus
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F3F6FA] border border-slate-200/80"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#007BFF]" />
                    </div>
                    <span className="text-sm font-semibold text-[#0B1320] leading-snug pt-1">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pour qui est conçu ce service */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#F3F6FA] border border-slate-200/90 p-6 sm:p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#007BFF] mb-2">
                    <Layers className="w-4 h-4" />
                    <span>APPLICATIONS</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0B1320] mb-4">
                    À qui s’adresse cette prestation ?
                  </h3>
                  <ul className="space-y-3">
                    {service.idealFor.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-[#1F2937]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#007BFF] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200/80">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Chaque projet fait l’objet d’un échange préalable afin de définir précisément le périmètre et les fonctionnalités utiles à votre activité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXEMPLES DE RÉALISATIONS */}
      <section className="py-14 sm:py-18 bg-[#F3F6FA]/60 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#007BFF]">
                EXEMPLES CONCRETS
              </span>
              <h2 className="mt-1.5 text-2xl font-extrabold text-[#0B1320]">
                Découvrir nos réalisations
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate({ page: 'realisations' })}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#007BFF] hover:text-[#0B1320] transition-colors cursor-pointer"
            >
              <span>Voir tout le portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleProjects.map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                compact
                onOpenDetail={(projectSlug) =>
                  onNavigate({ page: 'project-detail', slug: projectSlug })
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-extrabold text-[#0B1320] mb-5">
            Nos autres services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherServices.map((other) => (
              <button
                key={other.id}
                type="button"
                onClick={() =>
                  onNavigate({ page: 'service-detail', slug: other.slug })
                }
                className="text-left p-5 rounded-xl bg-[#F3F6FA]/70 hover:bg-[#F3F6FA] border border-slate-200/90 hover:border-[#007BFF]/40 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                    <ServiceIcon name={other.iconName} className="w-5 h-5 text-[#007BFF]" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#007BFF] group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="text-base font-bold text-[#0B1320]">
                  {other.title}
                </h3>
                <p className="mt-1 text-xs text-[#1F2937] line-clamp-2">
                  {other.shortDescription}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <ProcessSteps />

      {/* BOTTOM SERVICE CTA (Matches Panel 7 CTA box) */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#F3F6FA] border border-slate-200/90 px-6 py-10 sm:px-12 sm:py-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1320] tracking-tight">
              Vous avez un projet de {service.title.toLowerCase()} ?
            </h2>
            <p className="mt-2 text-lg font-bold text-[#0B1320]">
              Discutons-en sur Instagram ou WhatsApp.
            </p>
            <p className="mt-2 text-sm sm:text-base text-[#1F2937] max-w-xl mx-auto">
              Nous sommes à votre écoute pour échanger directement sur vos besoins et vous accompagner.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#007BFF] hover:bg-[#0066D6] text-white text-sm font-semibold transition-colors shadow-xs"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Discutons sur Instagram →</span>
              </a>

              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0B1320] border border-slate-300 text-sm font-semibold transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Discutons sur WhatsApp →</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
