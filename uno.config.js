import {
  defineConfig,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import { presetScrollbar } from 'unocss-preset-scrollbar';
import extractorPug from '@unocss/extractor-pug';
import presetRemToPx from '@unocss/preset-rem-to-px';
import { presetScrollbarHide } from 'unocss-preset-scrollbar-hide';

export default defineConfig({
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        './src/js/*.{js,ts}',
      ],
      // exclude files
      // exclude: []
    },
  },
  presets: [
    presetUno(),
    presetWebFonts({
      fonts: {
        // sans: "DM Sans",
        // serif: "DM Serif Display",
        // mono: "DM Mono",
        // tt_hoves_semibold: [
        //   {
        //     name: "TT Hoves",
        //     weights: ["600"],
        //   },
        // ],
      },
    }),
    // ...custom presets
    presetScrollbar({
      // config
    }),
    presetRemToPx(),
    presetScrollbarHide(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  extract: {
    include: ['./src/components/*.{html,pug}', './*.{html,pug}'],
    exclude: ['./node_modules/**'],
  },
  extractors: [extractorPug()],
});
