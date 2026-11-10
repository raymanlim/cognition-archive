import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Static output for Cloudflare Pages. No adapter / no server runtime required.
export default defineConfig({
  site: 'https://raymanlim.us.ci',
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  build: {
    format: 'directory',
  },
  vite: {
    build: { cssMinify: true },
  },
});
