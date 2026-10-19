import { useState, useEffect, useCallback } from 'react';
import {
  Header,
  Footer,
  FloatingWhatsAppButton,
  PageRoute,
} from './components/LayoutComponents';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { PORTFOLIO_PROJECTS, SERVICES_DATA } from './data/siteData';

function parseLocationToRoute(): PageRoute {
  const rawHash = window.location.hash.replace(/^#/, '');
  const path = (rawHash || window.location.pathname || '/').replace(/\/+$/, '') || '/';

  if (path === '/' || path === '/accueil' || path === '/index.html') {
    return { page: 'accueil' };
  }
  if (path === '/services') {
    return { page: 'services' };
  }
  if (path.startsWith('/services/')) {
    const slug = path.replace('/services/', '');
    return { page: 'service-detail', slug };
  }
  if (path === '/realisations') {
    return { page: 'realisations' };
  }
  if (path.startsWith('/realisations/')) {
    const slug = path.replace('/realisations/', '');
    return { page: 'project-detail', slug };
  }
  if (path === '/a-propos') {
    return { page: 'a-propos' };
  }
  if (path === '/contact') {
    return { page: 'contact' };
  }
  if (path === '/mentions-legales') {
    return { page: 'mentions-legales' };
  }
  return { page: 'accueil' };
}

function routeToPath(route: PageRoute): string {
  switch (route.page) {
    case 'accueil':
      return '/';
    case 'services':
      return '/services';
    case 'service-detail':
      return `/services/${route.slug}`;
    case 'realisations':
      return '/realisations';
    case 'project-detail':
      return `/realisations/${route.slug}`;
    case 'a-propos':
      return '/a-propos';
    case 'contact':
      return '/contact';
    case 'mentions-legales':
      return '/mentions-legales';
  }
}

function getSeoForRoute(route: PageRoute): { title: string; description: string } {
  const defaultTitle = 'WebCraft — Agence Web & Design';
  const defaultDescription =
    'WebCraft conçoit des sites web modernes, responsive et adaptés aux entreprises, commerces et professionnels.';

  switch (route.page) {
    case 'accueil':
      return {
        title: defaultTitle,
        description: defaultDescription,
      };
    case 'services':
      return {
        title: 'Nos Services — WebCraft — Agence Web & Design',
        description:
          'Découvrez les solutions web proposées par WebCraft : sites vitrines, boutiques e-commerce, landing pages et solutions sur mesure.',
      };
    case 'service-detail': {
      const srv = SERVICES_DATA.find((s) => s.slug === route.slug);
      return {
        title: srv
          ? `${srv.title} — Services WebCraft`
          : 'Détail du service — WebCraft',
        description: srv ? srv.description : defaultDescription,
      };
    }
    case 'realisations':
      return {
        title: 'Nos Réalisations — WebCraft — Agence Web & Design',
        description:
          'Explorez le portfolio des sites web et boutiques e-commerce réalisés par WebCraft Design Studio.',
      };
    case 'project-detail': {
      const proj = PORTFOLIO_PROJECTS.find((p) => p.slug === route.slug);
      return {
        title: proj
          ? `${proj.name} — Réalisations WebCraft`
          : 'Projet — WebCraft',
        description: proj ? proj.description : defaultDescription,
      };
    }
    case 'a-propos':
      return {
        title: 'À propos — WebCraft — Agence Web & Design',
        description:
          'Découvrez les valeurs, la mission et le processus de création de WebCraft Design Studio.',
      };
    case 'contact':
      return {
        title: 'Contact — WebCraft — Agence Web & Design',
        description:
          'Contactez directement WebCraft Design Studio sur Instagram ou WhatsApp pour discuter de votre projet web.',
      };
    case 'mentions-legales':
      return {
        title: 'Mentions légales — WebCraft — Agence Web & Design',
        description: 'Mentions légales et informations relatives au site WebCraft Design Studio.',
      };
  }
}

export function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() =>
    parseLocationToRoute()
  );

  const handleNavigate = useCallback((route: PageRoute) => {
    setCurrentRoute(route);
    const nextPath = routeToPath(route);
    try {
      window.history.pushState(route, '', nextPath === '/' ? '/' : `#${nextPath}`);
    } catch {
      // Fallback if pushState is restricted in sandboxed iframe
      window.location.hash = nextPath;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const onPopState = () => {
      setCurrentRoute(parseLocationToRoute());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('popstate', onPopState);
    window.addEventListener('hashchange', onPopState);
    return () => {
      window.removeEventListener('popstate', onPopState);
      window.removeEventListener('hashchange', onPopState);
    };
  }, []);

  // Update page-specific SEO title and meta description
  useEffect(() => {
    const { title, description } = getSeoForRoute(currentRoute);
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [currentRoute]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1320]">
      <Header currentRoute={currentRoute} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentRoute.page === 'accueil' && (
          <HomePage onNavigate={handleNavigate} />
        )}
        {currentRoute.page === 'services' && (
          <ServicesPage onNavigate={handleNavigate} />
        )}
        {currentRoute.page === 'service-detail' && (
          <ServiceDetailPage
            slug={currentRoute.slug}
            onNavigate={handleNavigate}
          />
        )}
        {currentRoute.page === 'realisations' && (
          <PortfolioPage onNavigate={handleNavigate} />
        )}
        {currentRoute.page === 'project-detail' && (
          <ProjectDetailPage
            slug={currentRoute.slug}
            onNavigate={handleNavigate}
          />
        )}
        {currentRoute.page === 'a-propos' && (
          <AboutPage onNavigate={handleNavigate} />
        )}
        {currentRoute.page === 'contact' && <ContactPage />}
        {currentRoute.page === 'mentions-legales' && <LegalPage />}
      </main>

      <Footer onNavigate={handleNavigate} />

      <FloatingWhatsAppButton />
    </div>
  );
}

export default App;
