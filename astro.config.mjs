// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://crooja.com',
  output: 'static',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'ja',
        locales: {
          ja: 'ja',
          en: 'en',
          zh: 'zh-Hans',
          ko: 'ko',
          de: 'de',
          fr: 'fr',
          es: 'es',
          it: 'it',
          ru: 'ru',
        },
      },
    }),
  ],
  redirects: {
    // 旧WordPress商品ページ → Astro商品ページ
    '/locust': '/products/locust',
    '/locust/': '/products/locust/',
    '/mantis': '/products/mantis',
    '/mantis/': '/products/mantis/',
    '/worm': '/products/worm',
    '/worm/': '/products/worm/',
    '/honet': '/products/hornet',
    '/honet/': '/products/hornet/',
    '/WORM': '/products/worm',
    '/WORM/': '/products/worm/',
    // 旧WordPress embed
    '/locust/embed': '/products/locust',
    '/locust/embed/': '/products/locust/',
    // 旧WordPressページ（対応するAstroページなし）
    '/team': '/products',
    '/team/': '/products/',
    '/catalog': '/products',
    '/catalog/': '/products/',
    '/accessory': '/products',
    '/accessory/': '/products/',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});