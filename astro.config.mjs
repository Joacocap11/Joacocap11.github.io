import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://joacocap11.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
