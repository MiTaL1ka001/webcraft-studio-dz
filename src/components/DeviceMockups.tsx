import React, { useState } from 'react';
import { PortfolioProject, PORTFOLIO_PROJECTS } from '../data/siteData';
import { WebCraftLogo } from './BrandAssets';
import { ExternalLink, Globe, Lock, ShoppingBag, Search } from 'lucide-react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  ...rest
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasErrored, setHasErrored] = useState(false);

  const handleError = () => {
    if (!hasErrored && fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasErrored(true);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      loading="lazy"
      className={className}
      {...rest}
    />
  );
};

interface LaptopProjectPreviewProps {
  project: PortfolioProject;
  size?: 'sm' | 'md' | 'lg';
  interactiveHover?: boolean;
  customImageSrc?: string;
  customFallbackSrc?: string;
}

export const LaptopProjectPreview: React.FC<LaptopProjectPreviewProps> = ({
  project,
  size = 'md',
  interactiveHover = true,
  customImageSrc,
  customFallbackSrc,
}) => {
  const { browserPreview } = project;
  const displayImage = customImageSrc || project.heroImage;
  const displayFallback = customFallbackSrc || project.remoteHeroFallback;

  return (
    <div className="w-full select-none">
      {/* Laptop Screen Frame */}
      <div className="relative mx-auto w-[94%] rounded-t-xl bg-[#0B1320] p-2 sm:p-2.5 shadow-md border border-slate-800">
        {/* Camera notch dot */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-700" />

        {/* Browser Window Inside Laptop */}
        <div className="overflow-hidden rounded-lg bg-white border border-slate-800/40 aspect-[16/10] flex flex-col">
          {/* Browser Chrome Bar */}
          <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#F3F6FA] border-b border-slate-200 text-[10px] text-slate-500 shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-400/80" />
              <span className="w-2 h-2 rounded-full bg-amber-400/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
            </div>
            <div className="flex items-center gap-1 bg-white px-2.5 py-0.5 rounded border border-slate-200/90 max-w-[70%] truncate">
              <Lock className="w-2.5 h-2.5 text-[#007BFF] shrink-0" />
              <span className="truncate font-medium text-slate-600 text-[9.5px]">
                {browserPreview.domainDisplay}
              </span>
            </div>
            <Globe className="w-3 h-3 text-slate-400 shrink-0" />
          </div>

          {/* Website Content Preview Using Real Project Hero Image & Real Site Header */}
          <div className="relative flex-1 overflow-hidden bg-[#0B1320] flex flex-col">
            {/* Real site mini navigation header */}
            <div
              className={`flex items-center justify-between px-3 py-1.5 text-[9px] border-b shrink-0 z-10 ${
                browserPreview.darkHeader
                  ? 'bg-[#0B1320]/95 text-white border-white/10'
                  : 'bg-white/95 text-[#0B1320] border-slate-200/80'
              }`}
            >
              <span className="font-bold tracking-wider uppercase truncate max-w-[110px]">
                {project.name}
              </span>
              <div className="hidden sm:flex items-center gap-2.5 opacity-80">
                {browserPreview.navItems.slice(0, 4).map((item) => (
                  <span key={item} className="truncate text-[8px] font-medium">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1.5 opacity-80">
                <Search className="w-2.5 h-2.5" />
                <ShoppingBag className="w-2.5 h-2.5" />
              </div>
            </div>

            {/* Real Hero Image + Authentic Overlay */}
            <div className="relative flex-1 w-full h-full overflow-hidden">
              <SmartImage
                src={displayImage}
                fallbackSrc={displayFallback}
                alt={`Aperçu du site ${project.name}`}
                className={`w-full h-full object-cover object-center transition-transform duration-500 ${
                  interactiveHover ? 'group-hover:scale-[1.03]' : ''
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1320]/80 via-[#0B1320]/45 to-transparent flex flex-col justify-center px-3.5 sm:px-5 py-3">
                <span className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-[0.14em] text-sky-300 mb-1">
                  {browserPreview.eyebrow}
                </span>
                <p
                  className={`font-bold text-white leading-tight tracking-tight ${
                    size === 'lg'
                      ? 'text-sm sm:text-lg max-w-[260px]'
                      : 'text-xs sm:text-sm max-w-[200px]'
                  }`}
                >
                  {browserPreview.headline}
                </p>
                <p className="text-[9px] sm:text-[10px] text-slate-200 mt-1 line-clamp-2 max-w-[210px]">
                  {browserPreview.subheadline}
                </p>
                <div className="mt-2 inline-flex">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[8.5px] font-semibold bg-white text-[#0B1320] shadow-xs">
                    {browserPreview.ctaLabel} →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop Base / Hinge */}
      <div className="relative mx-auto w-full h-2.5 sm:h-3 bg-gradient-to-b from-slate-300 via-slate-200 to-slate-400 rounded-b-xl shadow-xs border-t border-white/60">
        <div className="mx-auto w-14 sm:w-20 h-1 bg-slate-400/80 rounded-b-md" />
      </div>
    </div>
  );
};

interface HeroDeviceShowcaseProps {
  onSelectProject: (slug: string) => void;
}

export const HeroDeviceShowcase: React.FC<HeroDeviceShowcaseProps> = ({ onSelectProject }) => {
  const featuredProjects = [
    PORTFOLIO_PROJECTS[0], // PRIVILEGE MODE HOMME
    PORTFOLIO_PROJECTS[3], // FASHION SHOP
    PORTFOLIO_PROJECTS[6], // LUXORA PHONE
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const currentProject = featuredProjects[activeIndex];
  const mobileProject = featuredProjects[(activeIndex + 1) % featuredProjects.length];

  return (
    <div className="relative w-full">
      {/* Studio Ambient Desk Card Background */}
      <div className="relative rounded-2xl bg-[#F3F6FA] border border-slate-200/90 p-4 sm:p-6 lg:p-7 overflow-hidden">
        {/* Top bar indicator showing real live portfolio project */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-[#1F2937]">
            <span className="w-2 h-2 rounded-full bg-[#007BFF]" />
            <span>Réalisation :</span>
            <strong className="text-[#0B1320]">{currentProject.name}</strong>
          </div>
          <div className="flex items-center gap-1.5">
            {featuredProjects.map((proj, idx) => (
              <button
                key={proj.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Afficher l'aperçu de ${proj.name}`}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                  idx === activeIndex
                    ? 'bg-[#007BFF] text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {proj.number}
              </button>
            ))}
          </div>
        </div>

        {/* Main Laptop + Smartphone Composition */}
        <div className="relative pt-1 pb-3 sm:pr-10">
          <LaptopProjectPreview project={currentProject} size="lg" interactiveHover={false} />

          {/* Realistic Smartphone Frame overlapping bottom-right */}
          <div className="hidden sm:block absolute right-0 -bottom-1 w-[138px] lg:w-[152px] rounded-[20px] bg-[#0B1320] p-1.5 shadow-xl border-2 border-slate-800 z-20">
            <div className="mx-auto w-8 h-1 rounded-full bg-slate-700 mb-1" />
            <div className="rounded-[14px] overflow-hidden bg-white aspect-[9/16] flex flex-col">
              <div className="px-2 py-1 bg-[#F3F6FA] border-b border-slate-200 flex items-center justify-between text-[7.5px] text-slate-600">
                <span className="font-bold truncate">{mobileProject.name}</span>
                <ShoppingBag className="w-2.5 h-2.5 text-[#007BFF] shrink-0" />
              </div>
              <div className="relative flex-1 bg-[#0B1320] overflow-hidden">
                <SmartImage
                  src={mobileProject.heroImage}
                  fallbackSrc={mobileProject.remoteHeroFallback}
                  alt={`Version mobile ${mobileProject.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/90 via-[#0B1320]/30 to-transparent flex flex-col justify-end p-2.5">
                  <span className="text-[7px] font-semibold uppercase tracking-wider text-sky-300">
                    100% Responsive
                  </span>
                  <p className="text-[9.5px] font-bold text-white leading-snug mt-0.5">
                    {mobileProject.name}
                  </p>
                  <span className="mt-1.5 inline-block text-[7.5px] font-semibold bg-[#007BFF] text-white px-2 py-0.5 rounded text-center">
                    Visiter le site
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Caption & Direct Links to the Real Project */}
        <div className="mt-3 pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-600">
            <span className="font-medium text-[#0B1320]">{currentProject.category}</span>
            <span>•</span>
            <button
              type="button"
              onClick={() => onSelectProject(currentProject.slug)}
              className="text-[#007BFF] font-medium hover:underline cursor-pointer"
            >
              Détails du projet →
            </button>
          </div>
          <a
            href={currentProject.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1320] hover:text-[#007BFF] transition-colors"
          >
            <span>Ouvrir {currentProject.browserPreview.domainDisplay}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export const StudioBrandLaptopCard: React.FC<{
  backgroundPhoto: string;
  caption?: string;
  darkScreen?: boolean;
}> = ({ backgroundPhoto, caption, darkScreen = true }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-[#F3F6FA] shadow-xs">
      <div className="relative aspect-[16/11] w-full overflow-hidden">
        <img
          src={backgroundPhoto}
          alt="Espace de travail WebCraft Design Studio"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1320]/65 via-[#0B1320]/25 to-transparent flex items-center justify-center p-6">
          {/* Sleek Studio Monitor / Laptop Display with WebCraft Brand */}
          <div className="w-full max-w-[300px]">
            <div
              className={`rounded-t-xl p-5 sm:p-6 border shadow-xl flex flex-col items-center justify-center text-center ${
                darkScreen
                  ? 'bg-[#0B1320] border-slate-700 text-white'
                  : 'bg-white/95 border-slate-200 text-[#0B1320]'
              }`}
            >
              <WebCraftLogo variant={darkScreen ? 'light' : 'default'} size="md" />
              <p
                className={`mt-2.5 text-[10px] font-semibold tracking-[0.18em] uppercase ${
                  darkScreen ? 'text-sky-300' : 'text-[#007BFF]'
                }`}
              >
                YOUR VISION. CRAFTED FOR THE WEB.
              </p>
            </div>
            <div className="mx-auto w-[106%] -ml-[3%] h-2.5 bg-gradient-to-b from-slate-300 to-slate-400 rounded-b-lg shadow" />
          </div>
        </div>
      </div>
      {caption && (
        <div className="px-4 py-2.5 bg-white border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
          <span className="font-medium text-[#0B1320]">WebCraft Design Studio</span>
          <span>{caption}</span>
        </div>
      )}
    </div>
  );
};
