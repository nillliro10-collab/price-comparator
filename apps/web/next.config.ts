import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'via.placeholder.com' },
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'store.storeimages.cdn-apple.com' },
      { protocol: 'https', hostname: 'image.sephora.com' },
      { protocol: 'https', hostname: 'm.media-amazon.com' },
      { protocol: 'https', hostname: 'cdn.dummyjson.com' },
      { protocol: 'https', hostname: 'images.samsung.com' },
      { protocol: 'https', hostname: 'i01.appmifile.com' },
      { protocol: 'https', hostname: 'static.nike.com' },
      { protocol: 'https', hostname: 'assets.adidas.com' },
      { protocol: 'https', hostname: 'images.puma.com' },
      { protocol: 'https', hostname: 'static.zara.net' },
      { protocol: 'https', hostname: 'www.ralphlauren.es' },
      { protocol: 'https', hostname: 'fakestoreapi.com' },
      { protocol: 'https', hostname: 'i.imgur.com' }
    ],
  },
};

export default withNextIntl(nextConfig);
