import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import pugPlugin from 'vite-plugin-pug';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  publicDir: 'public',
  root: './',
  build: {
    outDir: 'dist',
  },
  plugins: [
    UnoCSS(),
    pugPlugin(undefined, { pagesUrl: './src/components/' }),

    // eslint({
    //   cache: false,
    //   fix: true,
    // }),
  ],
});

