import React from 'react';
import { BRAND } from '../data/siteData';
import { InstagramIcon, WhatsAppIcon } from '../components/BrandAssets';
import { AlertCircle } from 'lucide-react';

export const LegalPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <section className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#007BFF]">
            MENTIONS LÉGALES
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0B1320] tracking-tight">
            Mentions légales
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#1F2937] leading-relaxed">
            Informations relatives à l’édition et à l’utilisation du site WebCraft Design Studio.
          </p>

          {/* Notice of fields requiring owner completion before official publication */}
          <div className="mt-6 rounded-xl bg-[#F3F6FA] border border-[#007BFF]/30 p-4 sm:p-5 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#007BFF] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#1F2937] leading-relaxed">
              <strong className="font-bold text-[#0B1320] block mb-1">
                Note à l’attention du propriétaire avant mise en ligne définitive :
              </strong>
              Conformément aux règles de transparence, aucune coordonnée postale ni immatriculation fictive n’a été inventée. Les champs signalés ci-dessous entre crochets{' '}
              <span className="font-semibold text-[#007BFF]">
                [À compléter par le propriétaire]
              </span>{' '}
              doivent être renseignés avec vos informations administratives exactes avant publication légale.
            </div>
          </div>

          <div className="mt-8 space-y-8">
            {/* 1. Éditeur du site */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F3F6FA]/70 border border-slate-200/90">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#0B1320] mb-3">
                1. Éditeur du site
              </h2>
              <div className="space-y-2 text-sm sm:text-base text-[#1F2937] leading-relaxed">
                <p>
                  <strong>Nom commercial :</strong> {BRAND.name} {BRAND.descriptor}
                </p>
                <p>
                  <strong>Contact WhatsApp officiel :</strong>{' '}
                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007BFF] font-semibold hover:underline"
                  >
                    {BRAND.whatsappDisplay}
                  </a>
                </p>
                <p>
                  <strong>Compte Instagram officiel :</strong>{' '}
                  <a
                    href={BRAND.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007BFF] font-semibold hover:underline"
                  >
                    {BRAND.instagramUrl}
                  </a>
                </p>
                <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-1.5 text-xs sm:text-sm text-slate-600">
                  <p>
                    <strong>Dénomination sociale / Forme juridique :</strong>{' '}
                    <span className="text-[#007BFF] font-medium">
                      [À compléter par le propriétaire avant publication]
                    </span>
                  </p>
                  <p>
                    <strong>Adresse du siège social :</strong>{' '}
                    <span className="text-[#007BFF] font-medium">
                      [À compléter par le propriétaire avant publication]
                    </span>
                  </p>
                  <p>
                    <strong>Numéro d’immatriculation (RC / NIF / NIS) :</strong>{' '}
                    <span className="text-[#007BFF] font-medium">
                      [À compléter par le propriétaire avant publication]
                    </span>
                  </p>
                  <p>
                    <strong>Responsable de la publication :</strong>{' '}
                    <span className="text-[#007BFF] font-medium">
                      [À compléter par le propriétaire avant publication]
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Hébergement */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F3F6FA]/70 border border-slate-200/90">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#0B1320] mb-3">
                2. Hébergement
              </h2>
              <p className="text-sm sm:text-base text-[#1F2937] leading-relaxed">
                <strong>Hébergeur du site :</strong>{' '}
                <span className="text-[#007BFF] font-medium">
                  [À compléter par le propriétaire selon l’hébergeur de production retenu : dénomination, adresse et contact de l’hébergeur]
                </span>
              </p>
            </div>

            {/* 3. Propriété intellectuelle */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F3F6FA]/70 border border-slate-200/90">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#0B1320] mb-3">
                3. Propriété intellectuelle
              </h2>
              <p className="text-sm sm:text-base text-[#1F2937] leading-relaxed">
                L’ensemble des éléments graphiques, textes, structures et présentations composant le site {BRAND.name} {BRAND.descriptor} sont destinés à la présentation des activités du studio. Les marques, logos et visuels des projets présentés dans la rubrique « Réalisations » appartiennent à leurs propriétaires respectifs.
              </p>
            </div>

            {/* 4. Données personnelles */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F3F6FA]/70 border border-slate-200/90">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#0B1320] mb-3">
                4. Données personnelles
              </h2>
              <p className="text-sm sm:text-base text-[#1F2937] leading-relaxed">
                Ce site web ne comporte aucun formulaire de collecte de données personnelles (aucun formulaire de contact ni d’inscription). Les prises de contact s’effectuent directement à l’initiative du visiteur via les plateformes externes Instagram ou WhatsApp.
              </p>
            </div>

            {/* 5. Contact */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F3F6FA]/70 border border-slate-200/90">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#0B1320] mb-3">
                5. Contact
              </h2>
              <p className="text-sm sm:text-base text-[#1F2937] leading-relaxed mb-5">
                Pour toute question concernant ces mentions légales ou nos prestations, vous pouvez nous contacter directement via Instagram ou WhatsApp :
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#007BFF] hover:bg-[#0066D6] text-white text-sm font-semibold transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Instagram ({BRAND.instagramHandle})</span>
                </a>
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-[#0B1320] border border-slate-300 text-sm font-semibold transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp ({BRAND.whatsappDisplay})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
