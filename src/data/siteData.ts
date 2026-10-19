export const BRAND = {
  name: 'WEBCRAFT',
  descriptor: 'DESIGN STUDIO',
  tagline: 'YOUR VISION. CRAFTED FOR THE WEB.',
  instagramUrl: 'https://www.instagram.com/webcraft.studiodz/',
  instagramHandle: '@webcraft.studiodz',
  whatsappNumber: '+213795174784',
  whatsappDisplay: '+213 795 17 47 84',
  whatsappUrl: 'https://wa.me/213795174784',
  copyright: '© 2026 WebCraft. Tous droits réservés.',
} as const;

export type FilterCategory = 'Tous' | 'Mode' | 'E-commerce' | 'Téléphonie';

export const PORTFOLIO_FILTERS: FilterCategory[] = [
  'Tous',
  'Mode',
  'E-commerce',
  'Téléphonie',
];

export interface PortfolioProject {
  id: string;
  number: string;
  slug: string;
  name: string;
  category: string;
  categoryBadges: string[];
  filters: FilterCategory[];
  description: string;
  overview: string;
  presentation: string[];
  websiteUrl: string;
  alternativeWebsiteUrl?: string;
  instagramUrl: string;
  instagramLabel: string;
  heroImage: string;
  remoteHeroFallback: string;
  galleryImages: {
    src: string;
    fallback: string;
    caption: string;
  }[];
  browserPreview: {
    domainDisplay: string;
    accentColor: string;
    darkHeader?: boolean;
    navItems: string[];
    eyebrow: string;
    headline: string;
    subheadline: string;
    ctaLabel: string;
  };
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'project-01',
    number: '01',
    slug: 'privilege-mode-homme',
    name: 'PRIVILEGE MODE HOMME',
    category: 'Mode masculine / E-commerce',
    categoryBadges: ['Mode masculine', 'E-commerce'],
    filters: ['Tous', 'Mode', 'E-commerce'],
    description:
      "Une boutique en ligne dédiée à la mode masculine, avec une expérience d'achat moderne et une présentation soignée des produits.",
    overview:
      "Conception et réalisation d'une boutique e-commerce dédiée au prêt-à-porter masculin, mettant en valeur les collections de costumes, chemises, chaussures et accessoires avec une navigation claire sur mobile et ordinateur.",
    presentation: [
      "Structuration claire des collections masculines pour faciliter le repérage rapide des pièces et des tailles.",
      "Direction visuelle sobre et élégante adaptée à l'univers de la mode masculine.",
      "Interface responsive optimisée pour la consultation sur smartphone comme sur ordinateur.",
    ],
    websiteUrl: 'https://privilege-mode-homme.vercel.app/',
    instagramUrl: 'https://www.instagram.com/privilege_shops/',
    instagramLabel: '@privilege_shops',
    heroImage: '/portfolio/privilege-hero.jpg',
    remoteHeroFallback: 'https://privilege-mode-homme.vercel.app/images/hero.jpg',
    galleryImages: [
      {
        src: '/portfolio/privilege-hero.jpg',
        fallback: 'https://privilege-mode-homme.vercel.app/images/hero.jpg',
        caption: "Visuel principal — Collection Privilège Mode Homme",
      },
    ],
    browserPreview: {
      domainDisplay: 'privilege-mode-homme.vercel.app',
      accentColor: '#1E293B',
      darkHeader: true,
      navItems: ['Accueil', 'Costumes', 'Chemises', 'Chaussures', 'Accessoires'],
      eyebrow: 'COLLECTION MODE MASCULINE',
      headline: 'PRIVILÈGE — Mode Homme',
      subheadline: 'Costumes, chemises, chaussures et accessoires au style soigné.',
      ctaLabel: 'Découvrir la collection',
    },
  },
  {
    id: 'project-02',
    number: '02',
    slug: 'abanya',
    name: 'ABANYA BRAND',
    category: 'Mode / E-commerce',
    categoryBadges: ['Mode', 'E-commerce'],
    filters: ['Tous', 'Mode', 'E-commerce'],
    description:
      'Une expérience e-commerce élégante pour une marque de mode, avec une identité visuelle soignée et une présentation moderne des collections.',
    overview:
      "Création d'une vitrine e-commerce pour la marque Abanya Brand, pensée pour valoriser l'esthétique des collections et proposer un parcours de découverte fluide aux visiteurs.",
    presentation: [
      "Mise en scène éditoriale des collections avec une hiérarchie visuelle épurée.",
      "Parcours de navigation intuitif permettant d'explorer les articles par catégorie.",
      "Adaptation responsive soignée pour les clientes naviguant depuis Instagram et mobile.",
    ],
    websiteUrl: 'https://abanya-v3.vercel.app/',
    instagramUrl: 'https://www.instagram.com/boutique_abanya?stkn=MW1scTRkMnNqM2g4eg==',
    instagramLabel: '@boutique_abanya',
    heroImage: '/portfolio/abanya-hero.jpg',
    remoteHeroFallback: 'https://abanya-v3.vercel.app/images/hero.jpg',
    galleryImages: [
      {
        src: '/portfolio/abanya-hero.jpg',
        fallback: 'https://abanya-v3.vercel.app/images/hero.jpg',
        caption: 'Présentation visuelle — Abanya Brand',
      },
    ],
    browserPreview: {
      domainDisplay: 'abanya-v3.vercel.app',
      accentColor: '#785A46',
      darkHeader: false,
      navItems: ['Accueil', 'Collections', 'Nouveautés', 'Boutique', 'Contact'],
      eyebrow: 'NOUVELLE COLLECTION',
      headline: 'ABANYA BRAND',
      subheadline: 'Une présentation moderne et raffinée des collections de mode.',
      ctaLabel: 'Explorer la boutique',
    },
  },
  {
    id: 'project-03',
    number: '03',
    slug: 'rabeh-phone-dz',
    name: 'RABEH PHONE DZ',
    category: 'Téléphonie / E-commerce',
    categoryBadges: ['Téléphonie', 'E-commerce'],
    filters: ['Tous', 'Téléphonie', 'E-commerce'],
    description:
      'Une boutique en ligne consacrée aux smartphones et accessoires, avec une présentation claire des produits et une navigation adaptée aux acheteurs.',
    overview:
      "Développement d'un site e-commerce dédié à la téléphonie mobile et aux accessoires, permettant de consulter clairement les modèles disponibles et leurs caractéristiques.",
    presentation: [
      "Organisation structurée du catalogue de smartphones et d'accessoires.",
      "Fiches produits lisibles mettant en avant les informations essentielles pour les acheteurs.",
      "Expérience fluide sur mobile et ordinateur avec accès rapide aux produits.",
    ],
    websiteUrl: 'https://rabah-phone-dz-nine.vercel.app/',
    instagramUrl: 'https://www.instagram.com/rabahphone_dz?stkn=dWw3ZXkwY252ejY0',
    instagramLabel: '@rabahphone_dz',
    heroImage: '/portfolio/rabah-hero.jpg',
    remoteHeroFallback: 'https://rabah-phone-dz-nine.vercel.app/images/hero-1.jpg',
    galleryImages: [
      {
        src: '/portfolio/rabah-hero.jpg',
        fallback: 'https://rabah-phone-dz-nine.vercel.app/images/hero-1.jpg',
        caption: 'Interface principale — Rabeh Phone DZ',
      },
    ],
    browserPreview: {
      domainDisplay: 'rabah-phone-dz-nine.vercel.app',
      accentColor: '#0B1320',
      darkHeader: true,
      navItems: ['Accueil', 'Smartphones', 'Accessoires', 'Nouveautés', 'Contact'],
      eyebrow: 'SMARTPHONES & ACCESSOIRES',
      headline: 'Rabah Phone DZ',
      subheadline: 'Présentation claire des modèles et navigation pensée pour les acheteurs.',
      ctaLabel: 'Voir le catalogue',
    },
  },
  {
    id: 'project-04',
    number: '04',
    slug: 'fashion-shop',
    name: 'FASHION SHOP',
    category: 'Mode / E-commerce',
    categoryBadges: ['Mode', 'E-commerce'],
    filters: ['Tous', 'Mode', 'E-commerce'],
    description:
      'Une boutique fashion moderne, conçue pour présenter les collections et offrir une expérience de navigation simple et intuitive.',
    overview:
      "Réalisation d'une boutique en ligne de prêt-à-porter structurée autour des catégories phares (robes, chemises, ensembles, vestes, jeans) pour simplifier la découverte des nouveautés.",
    presentation: [
      "Navigation par catégories visuelles permettant un accès immédiat aux différentes collections.",
      "Mise en page lumineuse et moderne valorisant les photographies des articles.",
      "Affichage clair des tarifs et parcours de consultation fluide sur tous les écrans.",
    ],
    websiteUrl: 'https://3000-iodmj813l6ampap328zb5.e2b.app/',
    instagramUrl: 'https://www.instagram.com/fashionshop_officiel?stkn=bTI4dXp1ajRlYWdq',
    instagramLabel: '@fashionshop_officiel',
    heroImage: '/portfolio/fashionshop-hero.jpg',
    remoteHeroFallback: 'https://3000-iodmj813l6ampap328zb5.e2b.app/images/hero.jpg',
    galleryImages: [
      {
        src: '/portfolio/fashionshop-hero.jpg',
        fallback: 'https://3000-iodmj813l6ampap328zb5.e2b.app/images/hero.jpg',
        caption: 'Section d’accueil — Fashion Shop',
      },
      {
        src: '/portfolio/fashionshop-1.jpg',
        fallback: 'https://3000-iodmj813l6ampap328zb5.e2b.app/images/cat-robes.jpg',
        caption: 'Catégorie Robes — Présentation des collections',
      },
      {
        src: '/portfolio/fashionshop-2.jpg',
        fallback: 'https://3000-iodmj813l6ampap328zb5.e2b.app/images/cat-vestes.jpg',
        caption: 'Catégorie Vestes — Aperçu catalogue',
      },
    ],
    browserPreview: {
      domainDisplay: '3000-iodmj813l6ampap328zb5.e2b.app',
      accentColor: '#1F2937',
      darkHeader: false,
      navItems: ['Nouveautés', 'Robes', 'Chemises', 'Ensembles', 'Vestes', 'Jeans'],
      eyebrow: 'NOUVELLE COLLECTION',
      headline: 'Révélez votre style.',
      subheadline: 'Des pièces pensées pour une navigation simple et intuitive.',
      ctaLabel: 'Découvrir la collection',
    },
  },
  {
    id: 'project-05',
    number: '05',
    slug: 'ronaldinho-store',
    name: 'RONALDINHO STORE',
    category: 'Boutique / E-commerce',
    categoryBadges: ['Boutique', 'E-commerce'],
    filters: ['Tous', 'E-commerce'],
    description:
      'Une boutique en ligne au style dynamique, avec une présentation des produits et une identité visuelle pensée pour le commerce en ligne.',
    overview:
      "Conception d'une boutique e-commerce dédiée aux articles de sport, chaussures de football et maillots, avec une identité visuelle énergique et une structure de catalogue claire.",
    presentation: [
      "Identité visuelle dynamique cohérente avec l'univers sportif de la boutique.",
      "Mise en valeur des articles phares et des différentes gammes de produits.",
      "Interface responsive pensée pour offrir une consultation rapide sur mobile.",
    ],
    websiteUrl: 'https://ronaldinho-store-v2.vercel.app/',
    instagramUrl: 'https://www.instagram.com/ronaldinho_store10?stkn=MWFnYmxsMDAyMXB6eg==',
    instagramLabel: '@ronaldinho_store10',
    heroImage: '/portfolio/ronaldinho-hero.jpg',
    remoteHeroFallback: 'https://ronaldinho-store-v2.vercel.app/images/hero.jpg',
    galleryImages: [
      {
        src: '/portfolio/ronaldinho-hero.jpg',
        fallback: 'https://ronaldinho-store-v2.vercel.app/images/hero.jpg',
        caption: 'Visuel principal — Ronaldinho Store',
      },
    ],
    browserPreview: {
      domainDisplay: 'ronaldinho-store-v2.vercel.app',
      accentColor: '#0B1320',
      darkHeader: true,
      navItems: ['Accueil', 'Chaussures', 'Maillots', 'Nouveautés', 'Boutique'],
      eyebrow: 'FOOTBALL • SHOES • PASSION',
      headline: 'RONALDINHO STORE',
      subheadline: 'Présentation dynamique des chaussures de foot et maillots.',
      ctaLabel: 'Accéder à la boutique',
    },
  },
  {
    id: 'project-06',
    number: '06',
    slug: 'miss-elle-shop',
    name: 'MISS ELLE SHOP',
    category: 'Mode / E-commerce',
    categoryBadges: ['Mode', 'E-commerce'],
    filters: ['Tous', 'Mode', 'E-commerce'],
    description:
      'Une boutique en ligne dédiée à la mode, avec une présentation élégante des produits et un parcours de navigation agréable.',
    overview:
      "Création d'une boutique en ligne spécialisée dans les sacs et accessoires de mode, offrant une atmosphère soignée et une présentation claire des différentes collections.",
    presentation: [
      "Mise en page raffinée mettant en valeur les sacs, pochettes et coffrets.",
      "Navigation fluide entre les nouveautés, les catégories et les fiches produits.",
      "Design entièrement responsive pour une consultation confortable sur tous les supports.",
    ],
    websiteUrl: 'https://3000-i57dcmi31vc62ltdg3gi3.e2b.app/',
    instagramUrl: 'https://www.instagram.com/miss_elle.shop?stkn=N3lyZ29seWZ3c2xr',
    instagramLabel: '@miss_elle.shop',
    heroImage: '/portfolio/misselle-hero.jpg',
    remoteHeroFallback: 'https://3000-i57dcmi31vc62ltdg3gi3.e2b.app/images/hero-1.jpg',
    galleryImages: [
      {
        src: '/portfolio/misselle-hero.jpg',
        fallback: 'https://3000-i57dcmi31vc62ltdg3gi3.e2b.app/images/hero-1.jpg',
        caption: 'Accueil de la boutique — Miss Elle Shop',
      },
      {
        src: '/portfolio/misselle-1.jpg',
        fallback: 'https://3000-i57dcmi31vc62ltdg3gi3.e2b.app/images/products/sac-beige.jpg',
        caption: 'Présentation produit — Collection Sacs',
      },
      {
        src: '/portfolio/misselle-2.jpg',
        fallback: 'https://3000-i57dcmi31vc62ltdg3gi3.e2b.app/images/products/coffret.jpg',
        caption: 'Présentation produit — Coffrets & Accessoires',
      },
    ],
    browserPreview: {
      domainDisplay: '3000-i57dcmi31vc62ltdg3gi3.e2b.app',
      accentColor: '#8B5E3C',
      darkHeader: false,
      navItems: ['Accueil', 'Boutique', 'Nouveautés', 'Offres', 'Contact'],
      eyebrow: 'NOUVELLE COLLECTION',
      headline: 'Miss Elle Shop',
      subheadline: 'Sacs élégants et accessoires présentés dans une interface claire.',
      ctaLabel: 'Découvrir maintenant',
    },
  },
  {
    id: 'project-07',
    number: '07',
    slug: 'luxora-phone',
    name: 'LUXORA PHONE',
    category: 'Téléphonie / E-commerce',
    categoryBadges: ['Téléphonie', 'E-commerce'],
    filters: ['Tous', 'Téléphonie', 'E-commerce'],
    description:
      'Une boutique moderne dédiée aux smartphones et accessoires, avec une interface orientée vers la découverte des produits.',
    overview:
      "Conception d'une plateforme e-commerce moderne dédiée aux smartphones et accessoires, déclinée en deux versions publiques permettant d'apprécier l'approche visuelle et la présentation du catalogue.",
    presentation: [
      "Interface soignée mettant l'accent sur la clarté des visuels et des spécifications produits.",
      "Navigation directe par marques et par nouveautés pour faciliter la recherche.",
      "Deux déclinaisons publiques accessibles (Version principale et Version alternative).",
    ],
    websiteUrl: 'https://3000-i8htn9cx7kwgql3cttueg.e2b.app/',
    alternativeWebsiteUrl: 'https://3000-ics4kg8mli2u3lh09ua4g.e2b.app/',
    instagramUrl: 'https://www.instagram.com/luxora_phone_officiel?stkn=MWgzYnBhNDIzODI0ag==',
    instagramLabel: '@luxora_phone_officiel',
    heroImage: '/portfolio/luxora-hero.jpg',
    remoteHeroFallback: 'https://3000-i8htn9cx7kwgql3cttueg.e2b.app/images/luxora-hero-premium.jpg',
    galleryImages: [
      {
        src: '/portfolio/luxora-hero.jpg',
        fallback: 'https://3000-i8htn9cx7kwgql3cttueg.e2b.app/images/luxora-hero-premium.jpg',
        caption: 'Interface principale — Luxora Phone',
      },
      {
        src: '/portfolio/luxora-1.jpg',
        fallback: 'https://3000-i8htn9cx7kwgql3cttueg.e2b.app/images/phone-titanium.jpg',
        caption: 'Présentation produit — Gamme Smartphones',
      },
      {
        src: '/portfolio/luxora-2.jpg',
        fallback: 'https://3000-i8htn9cx7kwgql3cttueg.e2b.app/images/phone-fold.jpg',
        caption: 'Catalogue — Modèles pliables & accessoires',
      },
    ],
    browserPreview: {
      domainDisplay: '3000-i8htn9cx7kwgql3cttueg.e2b.app',
      accentColor: '#0B1320',
      darkHeader: true,
      navItems: ['Home', 'Shop', 'iPhone', 'Samsung', 'New Arrivals'],
      eyebrow: 'SMARTPHONES & ACCESSOIRES',
      headline: 'LUXORA PHONE',
      subheadline: 'Une interface moderne orientée vers la découverte des produits.',
      ctaLabel: 'Explorer les modèles',
    },
  },
  {
    id: 'project-08',
    number: '08',
    slug: 'new-york-shop-dz',
    name: 'NEW YORK SHOP DZ',
    category: 'Mode / E-commerce',
    categoryBadges: ['Mode', 'E-commerce'],
    filters: ['Tous', 'Mode', 'E-commerce'],
    description:
      "Une boutique en ligne à l'identité dynamique, conçue pour présenter les produits et simplifier la découverte des collections.",
    overview:
      "Développement d'une boutique en ligne dédiée à la mode masculine urbaine (vêtements, chaussures, accessoires et parfums), pensée pour offrir un repérage rapide des catégories et des nouveautés.",
    presentation: [
      "Organisation claire en grandes familles de produits : vêtements, chaussures, accessoires et parfums.",
      "Identité visuelle affirmée et moderne adaptée à l'univers de la boutique.",
      "Navigation fluide et responsive sur mobile, tablette et ordinateur.",
    ],
    websiteUrl: 'https://3000-i8dewujh77dqniztwms7y.e2b.app/',
    instagramUrl: 'https://www.instagram.com/newyorkshopdz',
    instagramLabel: '@newyorkshopdz',
    heroImage: '/portfolio/newyork-hero.jpg',
    remoteHeroFallback: 'https://3000-i8dewujh77dqniztwms7y.e2b.app/images/hero.jpg',
    galleryImages: [
      {
        src: '/portfolio/newyork-hero.jpg',
        fallback: 'https://3000-i8dewujh77dqniztwms7y.e2b.app/images/hero.jpg',
        caption: 'Page d’accueil — New York Shop DZ',
      },
      {
        src: '/portfolio/newyork-1.jpg',
        fallback: 'https://3000-i8dewujh77dqniztwms7y.e2b.app/images/polo-black.jpg',
        caption: 'Catégorie Vêtements — Aperçu collection',
      },
      {
        src: '/portfolio/newyork-2.jpg',
        fallback: 'https://3000-i8dewujh77dqniztwms7y.e2b.app/images/sneakers.jpg',
        caption: 'Catégorie Chaussures — Sneakers & Baskets',
      },
    ],
    browserPreview: {
      domainDisplay: '3000-i8dewujh77dqniztwms7y.e2b.app',
      accentColor: '#111827',
      darkHeader: true,
      navItems: ['Accueil', 'Vêtements', 'Chaussures', 'Accessoires', 'Parfum'],
      eyebrow: 'NOUVELLE COLLECTION',
      headline: 'NEW YORK SHOP DZ',
      subheadline: 'Le style au quotidien à travers une boutique en ligne claire.',
      ctaLabel: 'Découvrir',
    },
  },
];

export interface ServiceItem {
  id: string;
  number: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  iconName: 'monitor' | 'shopping-bag' | 'layout' | 'settings';
  features: string[];
  idealFor: string[];
  deliverablesNote: string;
  studioImage: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'service-01',
    number: '01',
    slug: 'sites-vitrines',
    title: 'Sites vitrines',
    shortDescription:
      'Présentez votre activité, vos services et votre savoir-faire avec un site professionnel qui inspire confiance.',
    description:
      'Présentez votre activité, vos services et votre savoir-faire avec un site professionnel qui inspire confiance.',
    iconName: 'monitor',
    features: [
      'Design personnalisé',
      "Présentation de l'activité",
      'Responsive mobile, tablette et ordinateur',
      'Navigation claire',
      'Optimisation des performances',
      'Contact direct',
    ],
    idealFor: [
      'Entreprises et sociétés de services',
      'Professionnels indépendants et cabinets',
      'Commerces souhaitant présenter leur activité en ligne',
    ],
    deliverablesNote:
      'Un site vitrine structuré, lisible sur tous les écrans et doté de points de contact directs (WhatsApp, réseaux sociaux) pour faciliter les échanges avec vos clients.',
    studioImage:
      'https://images.pexels.com/photos/4597993/pexels-photo-4597993.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  },
  {
    id: 'service-02',
    number: '02',
    slug: 'e-commerce',
    title: 'E-commerce',
    shortDescription:
      "Développez votre activité grâce à une boutique en ligne moderne, claire et conçue pour faciliter l'expérience d'achat.",
    description:
      "Développez votre activité grâce à une boutique en ligne moderne, claire et conçue pour faciliter l'expérience d'achat.",
    iconName: 'shopping-bag',
    features: [
      'Catalogue de produits',
      'Pages produits',
      'Navigation intuitive',
      "Panier et parcours d'achat adaptés au projet",
      'Responsive design',
      "Interface d'administration si elle est incluse dans le projet",
    ],
    idealFor: [
      'Boutiques de prêt-à-porter et accessoires de mode',
      'Magasins de téléphonie, high-tech et équipements',
      'Enseignes souhaitant exposer leurs collections et recevoir des commandes en ligne',
    ],
    deliverablesNote:
      "Une boutique en ligne pensée autour de vos produits, avec un parcours d'achat adapté au fonctionnement réel de votre commerce.",
    studioImage:
      'https://images.pexels.com/photos/8092468/pexels-photo-8092468.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  },
  {
    id: 'service-03',
    number: '03',
    slug: 'landing-pages',
    title: 'Landing pages',
    shortDescription:
      'Des pages ciblées et structurées pour présenter une offre, promouvoir un service et faciliter le passage à l’action.',
    description:
      'Des pages ciblées et structurées pour présenter une offre, promouvoir un service et faciliter le passage à l’action.',
    iconName: 'layout',
    features: [
      'Message clair',
      'Hiérarchie visuelle',
      "Appels à l'action",
      'Responsive design',
      'Optimisation des performances',
    ],
    idealFor: [
      "Lancement d'un nouveau produit ou d'une nouvelle collection",
      "Campagnes sur Instagram et les réseaux sociaux",
      "Mise en avant d'une prestation spécifique avec prise de contact directe",
    ],
    deliverablesNote:
      "Une page unique, rapide à charger et structurée pour guider l'attention du visiteur vers votre offre et l'inviter à vous contacter directement.",
    studioImage:
      'https://images.pexels.com/photos/9218551/pexels-photo-9218551.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  },
  {
    id: 'service-04',
    number: '04',
    slug: 'solutions-sur-mesure',
    title: 'Solutions sur mesure',
    shortDescription:
      'Des expériences web conçues selon les besoins spécifiques de votre activité.',
    description:
      'Des expériences web conçues selon les besoins spécifiques de votre activité.',
    iconName: 'settings',
    features: [
      'Interfaces personnalisées',
      'Fonctionnalités adaptées au projet',
      'Intégrations pertinentes',
      'Architecture évolutive',
    ],
    idealFor: [
      'Projets nécessitant une structure ou un parcours spécifique',
      'Refonte complète d’une présence web existante',
      'Besoins d’interfaces web personnalisées et évolutives',
    ],
    deliverablesNote:
      'Une solution web étudiée selon votre cahier des charges, développée avec un code propre, maintenable et évolutif.',
    studioImage:
      'https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  },
];

export const VALUE_INDICATORS = [
  {
    id: 'val-1',
    title: 'Design moderne',
    subtitle: 'Interfaces soignées et actuelles',
    icon: 'sparkles',
  },
  {
    id: 'val-2',
    title: '100% responsive',
    subtitle: 'Mobile, tablette et ordinateur',
    icon: 'smartphone',
  },
  {
    id: 'val-3',
    title: 'Sites performants',
    subtitle: 'Chargement fluide et optimisé',
    icon: 'zap',
  },
  {
    id: 'val-4',
    title: 'Accompagnement personnalisé',
    subtitle: 'Échange direct à chaque étape',
    icon: 'headset',
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Écoute',
    description: 'Nous échangeons sur votre activité, vos besoins et vos objectifs.',
    icon: 'message',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Nous définissons une direction visuelle cohérente avec votre identité.',
    icon: 'palette',
  },
  {
    number: '03',
    title: 'Développement',
    description: 'Nous construisons un site fonctionnel, responsive et optimisé.',
    icon: 'code',
  },
  {
    number: '04',
    title: 'Mise en ligne',
    description:
      'Nous préparons la publication de votre site et vous accompagnons selon le périmètre convenu.',
    icon: 'rocket',
  },
] as const;

export const ABOUT_VALUES = [
  {
    id: 'ecoute',
    title: 'Écoute',
    description: 'Nous prenons le temps de comprendre vos besoins et vos objectifs.',
    icon: 'bell',
  },
  {
    id: 'qualite',
    title: 'Qualité',
    description:
      'Nous accordons une attention particulière au design, à la navigation et aux performances.',
    icon: 'award',
  },
  {
    id: 'engagement',
    title: 'Engagement',
    description: 'Nous cherchons à proposer des solutions adaptées à chaque projet.',
    icon: 'check-circle',
  },
] as const;
