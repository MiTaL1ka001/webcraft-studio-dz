import React from 'react';
import { PortfolioProject } from '../data/siteData';
import { LaptopProjectPreview } from './DeviceMockups';
import { InstagramIcon } from './BrandAssets';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  project: PortfolioProject;
  onOpenDetail: (slug: string) => void;
  compact?: boolean;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  project,
  onOpenDetail,
  compact = false,
}) => {
  return (
    <article className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#007BFF]/45 transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md">
      {/* Top Visual Stage (matches Panel 3 laptop card style) */}
      <div>
        <div
          onClick={() => onOpenDetail(project.slug)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onOpenDetail(project.slug);
            }
          }}
          aria-label={`Voir la fiche détaillée du projet ${project.name}`}
          className="relative bg-[#F3F6FA] pt-5 px-4 pb-4 border-b border-slate-200/80 cursor-pointer overflow-hidden"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Projet {project.number}
            </span>
            <span className="text-[11px] font-semibold text-[#007BFF] group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
              <span>Fiche projet</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>
          <LaptopProjectPreview project={project} />
        </div>

        {/* Card Content Body */}
        <div className="p-5 sm:p-6">
          {/* Category Badges */}
          <div className="flex flex-wrap items-center gap-1.5 mb-3">
            {project.categoryBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-[#F3F6FA] text-[#007BFF] border border-[#007BFF]/15"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Project Title + Internal Detail Arrow */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-extrabold text-[#0B1320] tracking-tight">
              <button
                type="button"
                onClick={() => onOpenDetail(project.slug)}
                className="text-left hover:text-[#007BFF] transition-colors cursor-pointer"
              >
                {project.name}
              </button>
            </h3>
            <button
              type="button"
              onClick={() => onOpenDetail(project.slug)}
              aria-label={`Ouvrir les détails de ${project.name}`}
              className="w-8 h-8 rounded-full bg-[#F3F6FA] hover:bg-[#007BFF] text-[#007BFF] hover:text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="mt-1 text-xs font-medium text-slate-500">{project.category}</p>

          <p className="mt-2.5 text-sm text-[#1F2937] leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Card Footer Actions — Real Public URLs */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 flex flex-col gap-2.5">
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#007BFF] hover:bg-[#0066D6] text-white text-xs sm:text-sm font-semibold transition-colors shadow-2xs"
          >
            <span>Visiter le site →</span>
          </a>

          <a
            href={project.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram de ${project.name}`}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-full bg-white hover:bg-[#F3F6FA] text-[#0B1320] border border-slate-300 text-xs sm:text-sm font-semibold transition-colors"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-[#007BFF]" />
            <span>Instagram</span>
          </a>
        </div>

        {/* Luxora Phone Option B — Alternative Version Link */}
        {project.alternativeWebsiteUrl && (
          <a
            href={project.alternativeWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full bg-[#F3F6FA] hover:bg-[#007BFF]/10 text-[#007BFF] border border-[#007BFF]/25 text-xs font-semibold transition-colors"
          >
            <span>Voir la version alternative →</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}

        {!compact && (
          <div className="pt-1 flex items-center justify-between text-xs text-slate-500">
            <button
              type="button"
              onClick={() => onOpenDetail(project.slug)}
              className="font-medium text-[#1F2937] hover:text-[#007BFF] transition-colors cursor-pointer"
            >
              Voir la présentation détaillée →
            </button>
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#007BFF] transition-colors inline-flex items-center gap-1"
              title="Voir le site dans un nouvel onglet"
            >
              <span>Voir le site →</span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
};
