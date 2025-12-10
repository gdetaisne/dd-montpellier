import { getMoverzBlogRedirectsForHost } from '../../scripts/blog-moverz-redirects.mjs';

const HOST = 'devis-demenageur-montpellier.fr';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone',
  trailingSlash: true,
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    serverComponentsExternalPackages: []
  },

  compress: true,
  
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      }
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async redirects() {
    const existing = [
      // Homepage → Page ville moverz.fr
      // Blog hub → moverz.fr
      // Blog articles → moverz.fr
      // Quartiers montpellier (6 pages)
      { source: '/montpellier/', destination: 'https://moverz.fr/montpellier/', permanent: true },
      { source: '/montpellier/antigone/', destination: 'https://moverz.fr/montpellier/antigone/', permanent: true },
      { source: '/montpellier/beaux-arts/', destination: 'https://moverz.fr/montpellier/beaux-arts/', permanent: true },
      { source: '/montpellier/comedie/', destination: 'https://moverz.fr/montpellier/comedie/', permanent: true },
      { source: '/montpellier/ecusson/', destination: 'https://moverz.fr/montpellier/ecusson/', permanent: true },
      { source: '/montpellier/port-marianne/', destination: 'https://moverz.fr/montpellier/port-marianne/', permanent: true },
      // Hub quartiers montpellier
      // Corridors depuis montpellier (4 pages)
      { source: '/montpellier-vers-lyon/', destination: 'https://moverz.fr/montpellier-vers-lyon/', permanent: true },
      { source: '/montpellier-vers-marseille/', destination: 'https://moverz.fr/montpellier-vers-marseille/', permanent: true },
      { source: '/montpellier-vers-paris/', destination: 'https://moverz.fr/montpellier-vers-paris/', permanent: true },
      { source: '/montpellier-vers-toulouse/', destination: 'https://moverz.fr/montpellier-vers-toulouse/', permanent: true },
      // Services
      { source: '/services/', destination: 'https://moverz.fr/', permanent: true },
      { source: '/services/demenagement-economique-montpellier/', destination: 'https://moverz.fr/', permanent: true },
      { source: '/services/demenagement-premium-montpellier/', destination: 'https://moverz.fr/', permanent: true },
      { source: '/services/demenagement-standard-montpellier/', destination: 'https://moverz.fr/', permanent: true },
      // Pages communes
      { source: '/cgu/', destination: 'https://moverz.fr/cgu/', permanent: true },
      { source: '/cgv/', destination: 'https://moverz.fr/cgv/', permanent: true },
      { source: '/comment-ca-marche/', destination: 'https://moverz.fr/comment-ca-marche/', permanent: true },
      { source: '/contact/', destination: 'https://moverz.fr/contact/', permanent: true },
      { source: '/devis-gratuits/', destination: 'https://moverz.fr/devis-gratuits/', permanent: true },
      { source: '/estimation-rapide/', destination: 'https://moverz.fr/estimation-rapide/', permanent: true },
      { source: '/faq/', destination: 'https://moverz.fr/faq/', permanent: true },
      { source: '/mentions-legales/', destination: 'https://moverz.fr/mentions-legales/', permanent: true },
      { source: '/notre-offre/', destination: 'https://moverz.fr/notre-offre/', permanent: true },
      { source: '/partenaires/', destination: 'https://moverz.fr/partenaires/', permanent: true },
      { source: '/politique-confidentialite/', destination: 'https://moverz.fr/politique-confidentialite/', permanent: true },
    ];

    const blogToMoverz = getMoverzBlogRedirectsForHost(HOST);

    return [...existing, ...blogToMoverz];
  }
};

export default nextConfig;
