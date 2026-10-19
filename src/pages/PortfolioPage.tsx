import React, { useState, useMemo } from 'react';
import {
  PORTFOLIO_FILTERS,
  PORTFOLIO_PROJECTS,
  FilterCategory,
} from '../data/siteData';
import { PageRoute, ContactCTABanner } from '../components/LayoutComponents';
import { PortfolioCard } from '../components/PortfolioCard';

interface PortfolioPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('Tous');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Tous') {
      return PORTFOLIO_PROJECTS;
    }
    return PORTFOLIO_PROJECTS.filter((project) =>
      project.filters.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <div className="animate-fade-in">
      {/* HEADER & FILTER BAR (Matches Panel 3 of Reference Image) */}
      <section className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#007BFF]">
              NOS RÉALISATIONS
            </span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1320] tracking-tight leading-[1.14]">
              Des projets réels,{' '}
              <span className="text-[#007BFF]">des résultats concrets.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#1F2937] leading-relaxed">
              Découvrez nos derniers projets réalisés et consultez chaque boutique ou site directement en ligne.
            </p>
          </div>

          {/* Filter Pills */}
          <div
            role="tablist"
            aria-label="Filtrer les réalisations par catégorie"
            className="mt-8 flex flex-wrap items-center gap-2.5"
          >
            {PORTFOLIO_FILTERS.map((filter) => {
              const isSelected = activeFilter === filter;
              const count =
                filter === 'Tous'
                  ? PORTFOLIO_PROJECTS.length
                  : PORTFOLIO_PROJECTS.filter((p) =>
                      p.filters.includes(filter)
                    ).length;

              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(filter)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#007BFF] text-white shadow-2xs'
                      : 'bg-[#F3F6FA] text-[#1F2937] hover:bg-slate-200/80 border border-slate-200/80'
                  }`}
                >
                  <span>{filter}</span>
                  <span
                    className={`text-xs px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-white text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Portfolio Cards Grid (2 columns on md/lg matching Panel 3 of Reference Image) */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
            {filteredProjects.map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                onOpenDetail={(slug) =>
                  onNavigate({ page: 'project-detail', slug })
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <ContactCTABanner
        title="Vous souhaitez créer votre site web ou votre boutique en ligne ?"
        subtitle="Parlons de votre activité sur Instagram ou WhatsApp pour définir ensemble votre futur site."
      />
    </div>
  );
};
