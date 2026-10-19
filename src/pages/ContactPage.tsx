import React from 'react';
import { BRAND } from '../data/siteData';
import { StudioBrandLaptopCard } from '../components/DeviceMockups';
import {
  InstagramColorBadgeIcon,
  WhatsAppColorBadgeIcon,
} from '../components/BrandAssets';
import {
  MessageCircle,
  Sparkles,
  UserCheck,
  CheckCircle2,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <section className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Heading + Two Large Contact Cards (Matches Panel 5 of Reference Image) */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#007BFF]">
                CONTACTEZ-NOUS
              </span>
              <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1320] tracking-tight leading-[1.15]">
                Parlons de votre projet.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#1F2937] leading-relaxed max-w-2xl">
                Vous avez une idée, une question ou un projet ? Contactez-nous directement pour en discuter.
              </p>

              {/* Two Large Functional Contact Cards — NO LEAD FORM */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Card 1: Instagram Contact Card */}
                <div className="rounded-2xl bg-[#F3F6FA]/80 border border-slate-200/90 hover:border-[#007BFF]/45 p-7 flex flex-col justify-between transition-all shadow-2xs hover:shadow-md">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center mb-5 shadow-2xs">
                      <InstagramColorBadgeIcon className="w-9 h-9" />
                    </div>
                    <h2 className="text-xl font-extrabold text-[#0B1320]">
                      Discutons sur Instagram
                    </h2>
                    <p className="mt-2.5 text-sm text-[#1F2937] leading-relaxed">
                      Contactez-nous sur Instagram pour échanger autour de votre projet.
                    </p>
                    <p className="mt-3 text-xs font-semibold text-[#007BFF]">
                      {BRAND.instagramHandle}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/70">
                    <a
                      href={BRAND.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#007BFF] hover:bg-[#0066D6] text-white text-sm font-semibold transition-colors shadow-xs"
                    >
                      <span>Écrire sur Instagram →</span>
                    </a>
                  </div>
                </div>

                {/* Card 2: WhatsApp Contact Card */}
                <div className="rounded-2xl bg-[#F3F6FA]/80 border border-slate-200/90 hover:border-[#007BFF]/45 p-7 flex flex-col justify-between transition-all shadow-2xs hover:shadow-md">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center mb-5 shadow-2xs">
                      <WhatsAppColorBadgeIcon className="w-9 h-9" />
                    </div>
                    <h2 className="text-xl font-extrabold text-[#0B1320]">
                      Discutons sur WhatsApp
                    </h2>
                    <p className="mt-2.5 text-sm text-[#1F2937] leading-relaxed">
                      Échangeons directement pour comprendre votre besoin.
                    </p>
                    <p className="mt-3 text-xs font-semibold text-emerald-700">
                      {BRAND.whatsappDisplay}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/70">
                    <a
                      href={BRAND.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#0B1320] hover:bg-[#007BFF] text-white text-sm font-semibold transition-colors shadow-xs"
                    >
                      <span>Discuter sur WhatsApp →</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Studio Laptop Visual (Matches Panel 5 of Reference Image) */}
            <div className="lg:col-span-5">
              <StudioBrandLaptopCard
                backgroundPhoto="https://images.pexels.com/photos/8092468/pexels-photo-8092468.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                caption="Contact direct via Instagram & WhatsApp"
                darkScreen={true}
              />
            </div>
          </div>

          {/* Bottom Highlights Strip (Matches Panel 5 bottom icons row) */}
          <div className="mt-14 pt-8 border-t border-slate-200/80">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F3F6FA] border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#007BFF] shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0B1320]">
                    Un projet ? Parlons-en !
                  </h3>
                  <p className="text-xs text-[#1F2937]">
                    Sans formulaire intermédiaire
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F3F6FA] border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#007BFF] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0B1320]">
                    Communication directe
                  </h3>
                  <p className="text-xs text-[#1F2937]">
                    Sur Instagram ou WhatsApp
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F3F6FA] border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#007BFF] shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0B1320]">
                    Échange personnalisé
                  </h3>
                  <p className="text-xs text-[#1F2937]">
                    Étude attentive de votre besoin
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F3F6FA] border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#007BFF] shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0B1320]">
                    Solutions adaptées
                  </h3>
                  <p className="text-xs text-[#1F2937]">
                    Selon vos objectifs réels
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
