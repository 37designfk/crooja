// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// GitHub Pages デプロイ設定
// site: 'https://<GitHubユーザー名>.github.io' に変更してください
// リポジトリ名でサブパスにデプロイする場合は base: '/リポジトリ名' を追加
export default defineConfig({
  site: 'https://crooja.github.io',
  // base: '/crooja',  // ← サブパス必要な場合はコメントアウト解除
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});