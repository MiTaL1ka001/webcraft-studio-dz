import React from 'react';
import {
  BRAND,
  ABOUT_VALUES,
  VALUE_INDICATORS,
} from '../data/siteData';
import { PageRoute, ProcessSteps, ContactCTABanner } from '../components/LayoutComponents';
import { StudioBrandLaptopCard } from '../components/DeviceMockups';
import {
  AboutValueIcon,
  ValueIndicatorIcon,
} from '../components/BrandAssets';
import { ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      {/* HERO SECTION (Matches Panel 4 top split layout) */}
      <section className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#007BFF]">
                À PROPOS DE WEBCRAFT
              </span>
              <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1320] tracking-tight leading-[1.14]">
                Une agence web passionnée par{' '}
                <span className="text-[#007BFF]">votre réussite.</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#1F2937] leading-relaxed">
                Chez WebCraft, nous pensons qu’un site web doit être plus qu’une simple présence en ligne. Il doit valoriser votre activité, présenter clairement votre offre et offrir une expérience agréable à vos visiteurs.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#007BFF] hover:bg-[#0066D6] text-white text-sm font-semibold transition-colors shadow-xs"
                >
                  <span>Discutons de votre projet</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'realisations' })}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#F3F6FA] text-[#0B1320] border border-slate-300 text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>Voir nos réalisations →</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <StudioBrandLaptopCard
                backgroundPhoto="https://images.pexels.com/photos/4597993/pexels-photo-4597993.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                caption="Design & Développement Web"
                darkScreen={false}
              />
            </div>
          </div>

          {/* THREE VALUE CARDS (Écoute, Qualité, Engagement — Matches Panel 4) */}
          <div className="mt-16 pt-12 border-t border-slate-200/80">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {ABOUT_VALUES.map((val) => (
                <div
                  key={val.id}
                  className="bg-[#F3F6FA]/70 rounded-2xl border border-slate-200/90 p-7 text-center flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-2xs">
                    <AboutValueIcon name={val.icon} />
                  </div>
                  <h2 className="text-xl font-extrabold text-[#0B1320]">
                    {val.title}
                  </h2>
                  <p className="mt-2.5 text-sm sm:text-base text-[#1F2937] leading-relaxed max-w-sm">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FOUR COMPACT VALUE INDICATORS (Verified Commitments Only) */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUE_INDICATORS.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-slate-200/90"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F3F6FA] border border-slate-200/80 flex items-center justify-center shrink-0">
                  <ValueIndicatorIcon name={item.icon} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0B1320]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#1F2937]">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTRE MISSION SPLIT SECTION (Matches Dark Navy Split Block in Panel 4) */}
      <section className="py-12 sm:py-16 bg-[#F3F6FA]/60 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden bg-[#0B1320] border border-slate-800 grid grid-cols-1 lg:grid-cols-12 shadow-md">
            {/* Left Workspace Image */}
            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px]">
              <img
                src="https://images.pexels.com/photos/34803986/pexels-photo-34803986.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Conception de sites web modernes chez WebCraft"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B1320]/60 hidden lg:block" />
            </div>

            {/* Right Dark Navy Mission Copy */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center text-white">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-sky-400">
                NOTRE ENGAGEMENT
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Notre mission
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
                Aider les entreprises, les commerçants et les professionnels à développer leur présence en ligne grâce à des solutions web modernes, efficaces et adaptées à leurs objectifs.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#007BFF] hover:bg-[#0066D6] text-white text-sm font-semibold transition-colors"
                >
                  <span>Discutons de votre projet →</span>
                </a>
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'contact' })}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>Page Contact</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION (Section 11 of Prompt) */}
      <ProcessSteps />

      {/* BOTTOM CTA */}
      <ContactCTABanner />
    </div>
  );
};
