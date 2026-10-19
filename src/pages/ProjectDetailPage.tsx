import React, { useState, useEffect } from 'react';
import { BRAND, PORTFOLIO_PROJECTS } from '../data/siteData';
import { PageRoute } from '../components/LayoutComponents';
import { LaptopProjectPreview, SmartImage } from '../components/DeviceMockups';
import { InstagramIcon, WhatsAppIcon } from '../components/BrandAssets';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  User,
  Briefcase,
  Layers,
  Globe,
} from 'lucide-react';

interface ProjectDetailPageProps {
  slug: string;
  onNavigate: (route: PageRoute) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  slug,
  onNavigate,
}) => {
  const projectIndex = PORTFOLIO_PROJECTS.findIndex((p) => p.slug === slug);
  const project =
    projectIndex >= 0 ? PORTFOLIO_PROJECTS[projectIndex] : PORTFOLIO_PROJECTS[0];

  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(0);

  useEffect(() => {
    setSelectedGalleryIndex(0);
  }, [slug]);

  const currentGalleryItem =
    project.galleryImages[selectedGalleryIndex] || project.galleryImages[0];

  const nextProject =
    PORTFOLIO_PROJECTS[(projectIndex + 1) % PORTFOLIO_PROJECTS.length];
  const prevProject =
    PORTFOLIO_PROJECTS[
      (projectIndex - 1 + PORTFOLIO_PROJECTS.length) % PORTFOLIO_PROJECTS.length
    ];

  return (
    <div className="animate-fade-in">
      {/* MAIN PROJECT PRESENTATION (Matches Panel 6 of Reference Image) */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <button
            type="button"
            onClick={() => onNavigate({ page: 'realisations' })}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1F2937] hover:text-[#007BFF] transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour aux réalisations</span>
          </button>

          {/* Hero Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F6FA] border border-slate-200/80 text-xs font-bold uppercase tracking-wider text-[#007BFF] mb-4">
                <span>Projet {project.number}</span>
                <span>•</span>
                <span>{project.category}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1320] tracking-tight">
                {project.name}
              </h1>

              <p className="mt-4 text-base text-[#1F2937] leading-relaxed">
                {project.description}
              </p>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {project.overview}
              </p>

              {/* Category Badges */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {project.categoryBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-md text-xs font-semibold bg-[#F3F6FA] text-[#007BFF] border border-[#007BFF]/15"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Action Buttons (Exact Real Public Links) */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#007BFF] hover:bg-[#0066D6] text-white text-sm font-semibold transition-colors shadow-xs"
                >
                  <span>Visiter le site →</span>
                </a>

                <a
                  href={project.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-[#F3F6FA] text-[#0B1320] border border-slate-300 text-sm font-semibold transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#007BFF]" />
                  <span>Instagram</span>
                </a>
              </div>

              {/* Luxora Phone Option B Link */}
              {project.alternativeWebsiteUrl && (
                <div className="mt-3">
                  <a
                    href={project.alternativeWebsiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F3F6FA] hover:bg-[#007BFF]/10 text-[#007BFF] border border-[#007BFF]/25 text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <span>Voir la version alternative →</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            {/* Right Main Screenshot Laptop Column */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[#F3F6FA] border border-slate-200/90 p-5 sm:p-8">
                <LaptopProjectPreview
                  project={project}
                  size="lg"
                  interactiveHover={false}
                  customImageSrc={currentGalleryItem?.src}
                  customFallbackSrc={currentGalleryItem?.fallback}
                />

                {currentGalleryItem?.caption && (
                  <p className="mt-3 text-center text-xs text-slate-500">
                    {currentGalleryItem.caption}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Thumbnail Previews Row (Matches Panel 6 thumbnail strip) */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.galleryImages.map((img, idx) => {
              const isSelected = idx === selectedGalleryIndex;
              return (
                <button
                  key={img.src + idx}
                  type="button"
                  onClick={() => setSelectedGalleryIndex(idx)}
                  className={`group text-left rounded-xl overflow-hidden border p-2.5 bg-[#F3F6FA] transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#007BFF] ring-2 ring-[#007BFF]/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="aspect-[16/9] rounded-lg overflow-hidden bg-[#0B1320]">
                    <SmartImage
                      src={img.src}
                      fallbackSrc={img.fallback}
                      alt={img.caption}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform"
                    />
                  </div>
                  <p className="mt-2 text-xs font-medium text-[#1F2937] truncate">
                    {img.caption}
                  </p>
                </button>
              );
            })}
          </div>

          {/* DÉTAILS DU PROJET BAR (Matches Panel 6 4-column info strip) */}
          <div className="mt-10 pt-8 border-t border-slate-200/80">
            <h2 className="text-lg font-extrabold text-[#0B1320] mb-5">
              Détails du projet
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#F3F6FA] border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#007BFF] shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Projet</span>
                  <strong className="text-sm font-bold text-[#0B1320]">
                    {project.name}
                  </strong>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#F3F6FA] border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#007BFF] shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Secteur</span>
                  <strong className="text-sm font-bold text-[#0B1320]">
                    {project.category}
                  </strong>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#F3F6FA] border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#007BFF] shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Prestation</span>
                  <strong className="text-sm font-bold text-[#0B1320]">
                    Design &amp; Développement Web
                  </strong>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#F3F6FA] border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#007BFF] shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-slate-500 block">Lien public</span>
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#007BFF] hover:underline truncate block"
                  >
                    {project.browserPreview.domainDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT PRESENTATION POINTS */}
          <div className="mt-10 rounded-2xl bg-[#F3F6FA]/70 border border-slate-200/80 p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-[#0B1320] mb-4">
              Présentation de la réalisation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.presentation.map((point) => (
                <div
                  key={point}
                  className="bg-white p-4 rounded-xl border border-slate-200/80 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#007BFF] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1F2937] leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* PREVIOUS / NEXT PROJECT NAVIGATION */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-slate-200/80">
            <button
              type="button"
              onClick={() =>
                onNavigate({ page: 'project-detail', slug: prevProject.slug })
              }
              className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-[#F3F6FA] hover:bg-slate-200/70 text-left transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#007BFF] shrink-0" />
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 block">
                  Projet précédent
                </span>
                <span className="text-sm font-bold text-[#0B1320]">
                  {prevProject.name}
                </span>
              </div>
            </button>

            <button
              type="button"
              onClick={() =>
                onNavigate({ page: 'project-detail', slug: nextProject.slug })
              }
              className="inline-flex items-center justify-end gap-3 px-4 py-3 rounded-xl bg-[#F3F6FA] hover:bg-slate-200/70 text-right transition-colors cursor-pointer"
            >
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 block">
                  Projet suivant
                </span>
                <span className="text-sm font-bold text-[#0B1320]">
                  {nextProject.name}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#007BFF] shrink-0" />
            </button>
          </div>
        </div>
      </section>

      {/* REQUIRED PROJECT DETAIL CTA (Section 9 of Prompt) */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#F3F6FA] border border-slate-200/90 px-6 py-10 sm:px-12 sm:py-14 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#007BFF]">
              VOTRE PROJET WEB
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0B1320] tracking-tight max-w-2xl mx-auto">
              Vous souhaitez un site similaire ? Parlons de votre projet.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#1F2937] max-w-xl mx-auto">
              Visitez directement la réalisation en ligne ou contactez WebCraft sur WhatsApp ou Instagram.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3.5">
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#007BFF] hover:bg-[#0066D6] text-white text-sm font-semibold transition-colors shadow-xs"
              >
                <span>Visiter le site →</span>
              </a>

              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0B1320] hover:bg-slate-800 text-white text-sm font-semibold transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Discutons sur WhatsApp →</span>
              </a>

              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0B1320] border border-slate-300 text-sm font-semibold transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#007BFF]" />
                <span>Discutons sur Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
